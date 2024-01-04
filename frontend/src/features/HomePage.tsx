import { Link } from "react-router-dom";
import Cookies from "js-cookie";

function HomePage() {
  const accessToken = Cookies.get("accessToken");
  return (
    <div>
      <h1>HomePage</h1>
      <p>AccessToken = {accessToken}</p>
      <Link to="/login">Login</Link>
    </div>
  );
}
export default HomePage;
