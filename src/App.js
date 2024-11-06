import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
function App() {
  return (
    <Router>
      <div
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F1FBFF 100%)",
          fontFamily: '"DM Sans", sans-serif',
        }}
        className="flex flex-row h-screen"
      >
        <div className="w-[22%] h-screen">
          <Sidebar />
        </div>
        <div className="w-[78%] flex flex-col h-screen overflow-y-auto">
          <div className="flex-shrink-0">
            <Header />
          </div>
          <div className="flex-1 h-full bg-white pr-4 overflow-y-auto">
            <Main />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
