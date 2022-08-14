export let sortByCases = (countryData) => {
  let a = [...countryData];
  return a.sort((a,b)=>b.cases-a.cases).slice(0, 10);
};

export let sortByDeaths = (countryData) => {
  let a = [...countryData];
  return a.sort((a, b) => b.deaths - a.deaths).slice(0, 10);
};

export let sortByRecoveries = (countryData) => {
  let a = [...countryData];
  return a.sort((a, b) => b.recovered - a.recovered).slice(0, 10);
};

export let filterListData = (countryData) => {
  return countryData?.map((e) => {
    return {
      name: e.country,
      cases: e.cases,
      deaths: e.deaths,
      recoveries: e.recovered,
      flag: e.countryInfo.flag,
    };
  });
};
