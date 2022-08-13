export let sortByCases = (countryData) => {
  return countryData.slice(0,10);
};

export let sortByDeaths = (countryData) => {
  return countryData.slice(0,10);
};

export let sortByRecoveries = (countryData) => {
  return countryData.slice(0,10);
};


export let filterListData = (countryData) => {
  return countryData?.map((e) => {
    return {
      name: e.country,
      cases: e.cases,
      deaths: e.deaths,
      recoveries: e.recovered,
    };
  });
};
