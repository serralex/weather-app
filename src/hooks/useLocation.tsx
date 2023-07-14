import { useGeolocated } from "react-geolocated";
import { useState, useEffect } from "react";
import { getCookie, setCookie } from "../services/cookies";
import { COOKIE_EXPIRES_IN } from "../constants/cookies";

//This hook returns the user's location from the cookies. If the user's location is not found in the cookies, it retrieves the location from the browser and sets it in the cookies
const useLocation = () => {
  const [location, setLocation] = useState<string>();
  const [loading, setLoading] = useState(true);

  const { coords, isGeolocationAvailable, isGeolocationEnabled, getPosition } =
    useGeolocated({
      suppressLocationOnMount: true,
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  useEffect(() => {
    const isLocationOnCookies = getCookie("userLocation");

    if (isLocationOnCookies) {
      setLoading(false);
      return;
    }

    getPosition();
  }, [getPosition]);

  useEffect(() => {
    if (!coords) return;

    setLoading(false);
    setLocation(coords.latitude + "," + coords.longitude);
    setCookie(
      "userLocation",
      coords.latitude + "," + coords.longitude,
      COOKIE_EXPIRES_IN.halfAnHour
    );
  }, [coords]);

  return {
    location: getCookie("userLocation") || location,
    loading,
    isActive: isGeolocationAvailable,
    isGeolocationEnabled,
  };
};

export default useLocation;
