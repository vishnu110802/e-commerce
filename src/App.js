import './App.css';
import Router from '../src/routes/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from '../src/redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />
      </div>
    </Provider>
  );
}

export default App;
