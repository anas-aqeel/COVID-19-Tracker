import Navbar from "./Components/Navbar";
import StatsContainer from "./Wrappers/StatsContainer";
import GraphsContainer from "./Wrappers/GraphContainer";
import Footer from "./Components/Footer";
import GlobalContext from "./Context/GlobalContext";

function App() {
  return (
    <GlobalContext>
      <Navbar />
      <StatsContainer />
      <GraphsContainer />
      <Footer />
    </GlobalContext>
  );
}

export default App;
