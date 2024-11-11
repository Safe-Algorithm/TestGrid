import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./features/HomePage";
import Login from "./features/Login";
import Signup from "./features/Signup";
import "./index.css";
import NetworkScanning from "./features/NetworkScanning";
import PenOptions from "./components/PenOptions";
import PenResult from "./features/PenResult";
import TestHistory from "./features/TestHistory";
import Dashboard from "./features/Dashboard";
import DashboardLayout from "./components/DashboardLayout";
import NoTestMessage from "./components/NoTestMessage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="dashboard" element={<Dashboard />}>
            <Route path="test" element={<NoTestMessage />}>
            </Route>
            <Route path="test/penetration" element={<PenOptions />}>
            </Route>
            <Route path="test/penetration/network" element={<NetworkScanning />} />
            <Route path="test/penetration/network/result/:id" element={<PenResult />}/>
            <Route path="test/history" element={<TestHistory />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
