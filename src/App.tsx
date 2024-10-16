import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import Game from "./components/Game/Game";

const App = function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
};

export default App;
