export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Line Chart",
    },
  },
};
export default function formatData(filteredData) {
  return {
    labels: filteredData?.map(({ name }) => name),
    datasets: [
      {
        label: "Cases",
        data: filteredData?.map(({ cases }) => cases),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Deaths",
        data: filteredData?.map(({ deaths }) => deaths),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Recoveries",
        data: filteredData?.map(({ recoveries }) => recoveries),
        borderColor: "#106636",
        backgroundColor: "#10b558",
      },
    ],
  };
}
