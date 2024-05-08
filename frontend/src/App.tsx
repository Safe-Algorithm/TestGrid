import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./features/HomePage";
import Login from "./features/Login";
import Signup from "./features/Signup";
import TestOptions from "./features/TestOptions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="test">
          <Route path="options" element={<TestOptions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
