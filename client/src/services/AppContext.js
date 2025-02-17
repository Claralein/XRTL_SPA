import React, { useState, useContext } from "react";

const AppContext = React.createContext()

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [lastClosedComponent, setLastClosedComponent] = useState('');
  const [showVirtualLayer, setShowVirtualLayer] = useState(true);
  const [selectedComps, setSelectedComps] = useState(new Set());
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showBeam, setShowBeam] = useState(false);
  const [showTags, setShowTags] = useState(true);
  const [showCam, setShowCam] = useState(false);
  const [logs, setLogs] = useState([]);


  const toggleSelectedComp = compId => {
    if (!selectedComps.has(compId)) {
      setSelectedComps(prev => new Set(prev.add(compId)));
    } else {
      setSelectedComps(prev => new Set([...prev].filter(x => x !== compId)));
      setLastClosedComponent(compId);
    }
  };

  const toogleLastComp = () => {
    setLastClosedComponent('');
  }

  const toggleAutoRotate = () => {
    setAutoRotate(!autoRotate);
  };

  const toggleShowVirtualLayer = () => {
    setShowVirtualLayer(!showVirtualLayer);
  };

  const toggleShowTags = () => {
    setShowTags(!showTags)
  }

  const addLog = (log) => {
    setLogs(prev => [log, ...prev])
  };

  const toggleShowBeam = () => {
    setShowBeam(!showBeam);
  }

  const toggleShowInfoWindow = () => {
    setShowInfoWindow(!showInfoWindow);
  }

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  }

  const toggleCam = () => {
    setShowCam(!showCam);
    toggleSelectedComp('Cam_1')
  }

  return (
    <AppContext.Provider
      value={{
        autoRotate,
        toggleAutoRotate,
        showVirtualLayer,
        toggleShowVirtualLayer,
        selectedComps,
        toggleSelectedComp,
        logs,
        addLog,
        showTags,
        toggleShowTags,
        showBeam,
        toggleShowBeam,
        showLogin,
        setShowLogin,
        showInfoWindow,
        toggleShowInfoWindow,
        toggleLogin,
        toggleCam,
        showCam,
        lastClosedComponent,
        toogleLastComp
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
