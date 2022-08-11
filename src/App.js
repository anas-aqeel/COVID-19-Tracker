import Navbar from "./Components/Navbar";
import StatsContainer from "./Wrappers/StatsContainer";
import GraphContainer from "./Wrappers/GraphContainer";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <StatsContainer />
      <GraphContainer />
      <Footer />
    </div>
  );
}

export default App;
