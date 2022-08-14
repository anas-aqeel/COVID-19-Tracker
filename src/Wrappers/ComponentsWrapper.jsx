import React, { useContext } from "react";
import Navbar from "../Components/NavBar/Navbar";
import StatsContainer from "./StatsContainer";
import GraphsContainer from "./GraphContainer";
import Footer from "../Components/Footer/Footer.jsx";
import Spinner from "../Components/Mui/spinner";
import { MyContext } from "../Context/GlobalContext";

const ComponentsWrapper = () => {
  let {
    data: { countryData },
  } = useContext(MyContext);
  if (countryData.length) {
    return (
      <>
        <Navbar />
        <StatsContainer />
        <GraphsContainer />
        <Footer />
      </>
    );
  } else {
    return <Spinner />;
  }
};

export default ComponentsWrapper;
