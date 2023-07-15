import { useState, useEffect } from "react";
import { getCookie, setCookie } from "../utils/cookies";
import { COOKIE_EXPIRES_IN, COOKIE_NAMES } from "../constants/cookies";

//This hook returns the user's location from the cookies. If the user's location is not found in the cookies, it retrieves the location from the browser and sets it in the cookies
const useLocation = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<GeolocationPositionError>();

  const [location, setLocation] = useState<string>();

  useEffect(() => {
    const locationCookie = getCookie(COOKIE_NAMES.userLocation);

    if (locationCookie) {
      setLocation(locationCookie);
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (res) => {
        const newLocation = `${res.coords.latitude}, ${res.coords.longitude}`;
        setLocation(newLocation);
        setCookie(
          COOKIE_NAMES.userLocation,
          newLocation,
          COOKIE_EXPIRES_IN.halfAnHour
        );
        setLoading(false);
      },
      (err) => {
        setError(err);
      }
    );
  }, []);

  return { loading, location, error };
};

export default useLocation;
