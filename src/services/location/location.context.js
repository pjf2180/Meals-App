import React, { useState, useEffect } from "react";
import { locationRequest, transformLocationRequest } from "./location.service";

export const LocationContext = React.createContext({
  setLocation: () => {},
});

export const LocationContextProvider = ({ children }) => {
  const [locationSearchTerm, setLocationSearchTerm] = useState("San Francisco");
  const [isLoading, setIsLoading] = useState(null);
  const [locationContextError, setLocationContextError] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!locationSearchTerm) {
      return;
    }
    const fetchLocationResults = async () => {
      setIsLoading(true);
      try {
        const locationResult = await locationRequest(
          locationSearchTerm.toLowerCase()
        );
        const locationCoordinates = transformLocationRequest(locationResult);
        setLocation(locationCoordinates);
        setIsLoading(false);
        setLocationContextError(null);
      } catch (e) {
        setIsLoading(false);
        setLocationSearchTerm(null);
        setLocationContextError("No results found");
      }
    };
    fetchLocationResults();
  }, [locationSearchTerm]);

  return (
    <LocationContext.Provider
      value={{
        locationSearchTerm,
        setLocationSearchTerm,
        isLoading,
        locationContextError,
        location,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
