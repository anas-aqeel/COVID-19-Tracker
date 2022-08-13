export let sortByCases = (countryData) => {
  console.log(countryData)
  // console.log(countryData?.sort((a, b) => b.cases - a.cases).length)
  return countryData?.sort((a, b) => b.cases - a.cases).splice(0, 10);
};

export let sortByDeaths = (countryData) =>
  countryData?.sort((a, b) => b.deaths - a.deaths).splice(0, 10);

export let sortByRecoveries = (countryData) =>
  countryData?.sort((a, b) => b.recovered - a.recovered).splice(0, 10);

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
