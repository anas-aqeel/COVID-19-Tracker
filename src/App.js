import Navbar from "./Components/Navbar";
import StatsContainer from "./Wrappers/StatsContainer";
import GraphsContainer from "./Wrappers/GraphContainer";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <StatsContainer />
      <GraphsContainer />
      <Footer />
    </div>
  );
}

export default App;
