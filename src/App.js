import "./App.css";
import Header from "./components/header/Header";
import Teams from "./components/team/Team";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Teams />
      </header>
    </div>
  );
}

export default App;
