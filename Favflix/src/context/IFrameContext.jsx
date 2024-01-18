import React, { createContext, useState, useContext } from "react";

const IFrameContext = createContext();

export const IFrameProvider = ({ children }) => {
  const [iFrameVisible, setIFrameVisible] = useState(false);
  const [iFrameid, setIFrameid] = useState(null);

  const showIFrame = (id) => {
    setIFrameid(id);
    setIFrameVisible(true);
  };

  const hideIFrame = () => {
    setIFrameid(null);
    setIFrameVisible(false);
  };

  return (
    <IFrameContext.Provider
      value={{
        iFrameVisible,
        iFrameid,
        showIFrame,
        hideIFrame,
      }}
    >
      {children}
    </IFrameContext.Provider>
  );
};

export const useIFrame = () => {
  return useContext(IFrameContext);
};
