import Toolbar from "./Toolbar";
import Body from "./Body";
import { Provider } from "react-redux";
import store from "./Redux/Store";
function App() {
  return (
    <Provider store ={store}>
      <div className="App">
        <Toolbar/>
        <Body></Body>
      </div>
    </Provider>
  );
}

export default App;
