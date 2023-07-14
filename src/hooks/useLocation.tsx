import { useGeolocated } from "react-geolocated";
import { useState, useEffect } from "react";
import { getCookie, setCookie } from "../utils/cookies";
import { COOKIE_EXPIRES_IN, COOKIE_NAMES } from "../constants/cookies";

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
    const locationCookie = getCookie(COOKIE_NAMES.userLocation);

    if (locationCookie) {
      setLocation(locationCookie);
      setLoading(false);
      return;
    }

    getPosition();
  }, [getPosition]);

  useEffect(() => {
    if (!coords) return;

    const newLocation = `${coords.latitude},${coords.longitude}`;
    setLocation(newLocation);
    setCookie(
      COOKIE_NAMES.userLocation,
      newLocation,
      COOKIE_EXPIRES_IN.halfAnHour
    );
    setLoading(false);
  }, [coords]);

  return {
    location: location,
    loading,
    isActive: isGeolocationAvailable,
    isGeolocationEnabled,
  };
};

export default useLocation;
