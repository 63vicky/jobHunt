/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import NavBar from "./shared/NavBar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const Login = () => {
  return (
    <div className="">
      <NavBar />
      <div className="flex justify-center items-center p-4 max-w-md mx-auto my-10">
        <form
          className="border-gray-100 border rounded-md p-4 w-full"
          action=""
        >
          <h1 className="font-bold text-3xl mb-5">Login</h1>
          <div className="mb-3">
            <Label>Email</Label>
            <Input type="email" placeholder="Email@mail.com"></Input>
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="Password"></Input>
          </div>

          <div className="flex flex-col gap-1 mt-3 w-full">
            <p>
              Don't have an account?
              <Button
                variant="link"
                className="p-1 font-bold underline hover:text-slate-600"
                asChild
              >
                <Link to="/signup">Signup</Link>
              </Button>
            </p>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
