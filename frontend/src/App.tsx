import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./features/HomePage";
import Login from "./features/Login";
import Signup from "./features/Signup";
import "./index.css";
import NetworkScanning from "./features/NetworkScanning";
import PenOptions from "./features/PenOptions";
import Layout from "./components/Layout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="penetration" element={<Layout />}>
          <Route index element={<PenOptions />} />
          <Route path="options" element={<PenOptions />} />
          <Route path="network" element={<NetworkScanning />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
