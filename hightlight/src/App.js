import "./App.css";
import "./main.css";
import "../src/components/Molecules/molecules.css";

import Panel from "./components/Panel";
import videoList from "./db/fakeData";




function App() {
  
  return (
    <div className="App">
      <header className="header">
        <h2 className="header-title">HOC-time</h2>
      </header>
      <main>
        <Panel list={videoList}></Panel>
      </main>
    </div>
  );
}

export default App;
