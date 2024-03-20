import React, { useState, useEffect } from "react";
import { CssBaseline, Grid } from "@material-ui/core";

// import { getPlacesData, getWeatherData } from "./api/travelAdvisorAPI";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header
      // onPlaceChanged={onPlaceChanged} onLoad={onLoad}
      />
    </>
  );
};

export default App;
