import { createContext, useEffect, useState } from "react";
import { fetchSingleEndpoint } from "../utils";
import { vocabelSchema, vocabelType } from "../types/types";

type lernappTypes = {
  vocabel: vocabelType;
  setVocabel: React.Dispatch<React.SetStateAction<vocabelType>>;
};

export const contextData: lernappTypes = {
  vocabel: [],
  setVocabel: () => {},
};

type ProviderProps = {
  children: React.ReactNode;
};

export const lernappContext = createContext<lernappTypes>(contextData);

export const lernappProvider: React.FC<ProviderProps> = ({ children }) => {
  const [vocabel, setVocabel] = useState<vocabelType>([]);

  useEffect(() => {
    fetchSingleEndpoint("vocabel", vocabelSchema)
      .then(({ data, errors }) => {
        if (errors) {
          console.error("Validation error", errors);
        }

        if (data) {
          console.log("Validated data", data);
          setVocabel(data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const contextValue: lernappTypes = {
    vocabel,
    setVocabel,
  };

  return (
    <lernappContext.Provider value={contextValue}>
      {children}
    </lernappContext.Provider>
  );
};
