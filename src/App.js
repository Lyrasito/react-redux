import logo from "./logo.svg";
import "./App.css";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Users from "./Users";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}

export default App;
