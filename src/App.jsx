import History from "./Screens/History";
import { Provider } from "react-redux";
import store from "./Slices/Store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <History />
      </div>
    </Provider>
  );
}

export default App;
