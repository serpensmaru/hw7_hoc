import "./App.css";
import "./main.css";
import "./components/Sections/section.css";

import Panel from "./components/Panel";
import videoList from "./db/fakeData";




function App() {
  
  return (
    <div className="App">
      <header className="header">
        <h2 className="header-title">hw7_hoc_time</h2>
      </header>
      <main>
        <Panel list={videoList}></Panel>
      </main>
    </div>
  );
}

export default App;
