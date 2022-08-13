import React, { createContext, useEffect, useState } from "react";
import { sortByCases, sortByDeaths, sortByRecoveries } from "../utils/filterCountries";

let initialData = {
  countryData: [],
  queryData: [],
};
export let MyContext = createContext(initialData);

const GlobalContext = (props) => {
  let [data, setData] = useState(initialData);

  let fetchQueryData = async (query = 'all') => {
    let queryData = await fetch(`https://disease.sh/v3/covid-19/${query}`);
    queryData = await queryData.json();
    setData({ ...data, queryData })
  }

  useEffect(() => {

    let fetchData = async () => {
      let countryData = await fetch(`https://disease.sh/v3/covid-19/countries`);
      countryData = await countryData.json();
      let queryData = await fetch(`https://disease.sh/v3/covid-19/all`);
      queryData = await queryData.json();
      setData({ countryData, queryData });
    };
    fetchData();
  }, []);

  return (
    <MyContext.Provider value={{ data, fetchQueryData }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default GlobalContext;
