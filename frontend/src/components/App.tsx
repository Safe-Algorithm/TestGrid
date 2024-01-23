import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../features/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>main page</h1>}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
