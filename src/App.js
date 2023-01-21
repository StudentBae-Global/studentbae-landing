
import './App.css';
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";

function App() {
  return (
    <div className="App">
       <div className="container">
        <h1>
          StudentBae Landing Pages
          <br />
          Coming Soon
        </h1>
        <Timer />
        <Optin />
        <Preloader />
      </div>
    </div>
  );
}

export default App;
