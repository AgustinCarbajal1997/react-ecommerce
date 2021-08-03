import RouterEcommerce from "./components/Router";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div>
      <Provider store={store}> 
        <RouterEcommerce/>
      </Provider>

    </div>
  );
}

export default App;
