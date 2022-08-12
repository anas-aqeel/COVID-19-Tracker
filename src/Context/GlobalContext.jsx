import React, { createContext, useEffect, useState } from "react";

export let MyContext = createContext({});

const GlobalContext = (props) => {
  let [data, setData] = useState({});
  let [countryData, setCountryData] = useState();
  let [worldWideData, setWorldWideData] = useState();

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(`https://disease.sh/v3/covid-19/countries`);
      response = await response.json();
      let worldWide = await fetch(`https://disease.sh/v3/covid-19/all`);
      worldWide = await worldWide.json();

      setData({ countryData: response, worldWideData: worldWide });
    };
    fetchData();
  }, []);

  return (
    <MyContext.Provider value={{ data }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default GlobalContext;
