import "./App.css";
import { DrinkProvider } from "./providers/drinks";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DrinkProvider>
          <Routes />
        </DrinkProvider>
      </header>
    </div>
  );
}

export default App;
