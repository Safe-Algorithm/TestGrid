import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./features/HomePage";
import Login from "./features/Login";
import Signup from "./features/Signup";
import "./index.css";
import NetworkScanning from "./features/NetworkScanning";
import PenOptions from "./features/PenOptions";
import Layout from "./components/Layout";
import PenResult from "./features/PenResult";
import TestHistory from "./features/TestHistory";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="test" element={<Layout />}>
          <Route path="penetration">
            <Route index element={<PenOptions />} />
            <Route path="options" element={<PenOptions />} />
            <Route path="network" element={<NetworkScanning />} />
          </Route>
          <Route path="result">
            <Route index element={<TestHistory />} />
            <Route path=":id" element={<PenResult />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
