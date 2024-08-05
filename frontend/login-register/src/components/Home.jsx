import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Home = () => {
  const user = false;
  return (
    <div>
      <h1>
        Welcome,{" "}
        {!user ? (
          <div className="flex gap-2">
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>SignUp</Button>
            </Link>
          </div>
        ) : (
          <></>
        )}
      </h1>
    </div>
  );
};

export default Home;
