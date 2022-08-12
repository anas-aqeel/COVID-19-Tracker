import React, { createContext, useEffect, useState } from "react";

let initialData = {
  countryData: [],
  worldWideData: [],
}
export let MyContext = createContext(initialData);

const GlobalContext = (props) => {
  let [data, setData] = useState(initialData);

  useEffect(() => {
    let fetchData = async () => {
      let countryData = await fetch(`https://disease.sh/v3/covid-19/countries`);
      countryData = await countryData.json();
      console.log(countryData)
      let worldWideData = await fetch(`https://disease.sh/v3/covid-19/all`);
      worldWideData = await worldWideData.json();
      setData({ countryData, worldWideData });
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
