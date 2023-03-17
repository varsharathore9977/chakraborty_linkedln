import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Network from "./Components/Network";
import DashBoard from "./Components/Dashboard";
import TopBar from "./Components/TopBar"
import Jobs from "./Components/Jobs"
import Note from "./Components/Note";

function App() {
  return (
    <div>
     <Router>
      <Routes>
      <Route element={<DashBoard/>} path="/dashboard"/>
      <Route element={<SideBar/>} path="/sidebar"/>
      <Route element={<TopBar/>} path="/topbar"/>
      <Route element={<Network/>} path="/network"/>
      <Route element={<Jobs/>} path="/jobs"/>
      <Route element={<Note/>} path="/note"/>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
