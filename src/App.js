import GlobalContext from "./Context/GlobalContext";
import ComponentsWrapper from "./Wrappers/ComponentsWrapper";
function App() {
  return (
    <GlobalContext>
      <ComponentsWrapper />
    </GlobalContext>
  );
}
export default App;
