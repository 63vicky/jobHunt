/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./shared/NavBar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      email: formData.email,
      password: formData.password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/v1/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        toast.success(response.data.message);
        console.log(JSON.stringify(response.data));
        // navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          return toast.error(error.response.data.message);
        }
        console.log(error);
      });
  };
  return (
    <div className="">
      <ToastContainer position="bottom-right" />
      <NavBar />
      <div className="flex justify-center items-center p-4 max-w-md mx-auto my-10">
        <form
          onSubmit={handleSubmit}
          className="border-gray-100 border rounded-md p-4 w-full"
          action=""
        >
          <h1 className="font-bold text-3xl mb-5">Login</h1>
          <div className="mb-3">
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email@mail.com"
            ></Input>
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            ></Input>
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
