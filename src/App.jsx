import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Swap from "./Pages/Swap";
import Connect from "./Pages/Connect";
import SelectAccount from "./Pages/SelectAccount";
import Pool from "./Pages/Pool";
import ConnectToELLAsset from "./Pages/ConnectToELLAsset";
import Launchpad from "./Pages/Launchpad";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/account" element={<SelectAccount />} />
        <Route path="/pool" element={<Pool />} />
        <Route path="/ELLAsset" element={<ConnectToELLAsset />} />
        <Route path="/" element={<Launchpad />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
