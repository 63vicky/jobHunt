/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import NavBar from "./shared/NavBar";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    conPassword: "",
  });
  const [isValidPass, setIsValidPass] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      formData.password === "" &&
      formData.password !== formData.conPassword
    ) {
      setIsValidPass(false);
    }
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = JSON.stringify({
      fullName: formData.fullName,
      email: formData.email,
      mobile: formData.mobile,
      password: formData.conPassword,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/v1/user/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        toast.success(response.data.message);
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error.response.data.message);
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="">
      <ToastContainer position="bottom-right" />
      <NavBar />
      <div className="flex justify-center items-center max-w-md p-4 mx-auto my-10">
        <form
          onSubmit={handleSubmit}
          className="border-gray-100 border rounded-md p-4 w-full"
          action=""
        >
          <h1 className="font-bold text-3xl mb-5">Signup</h1>

          <div className="mb-3">
            <Label>Name</Label>
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            ></Input>
          </div>

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

          <div className="mb-3">
            <Label>Mobile</Label>
            <Input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile"
            ></Input>
          </div>

          <div className="mb-3">
            <Label>Password</Label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            ></Input>
            {isValidPass && (
              <p>Password and Confirm password are not matching.</p>
            )}
          </div>

          <div>
            <Label>Confirm Password</Label>
            <Input
              type="password"
              name="conPassword"
              value={formData.conPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
            ></Input>
          </div>

          <div className="flex flex-col gap-1 mt-3 w-full">
            <p>
              Already have an account?
              <Button
                variant="link"
                className="p-1 font-bold underline hover:text-slate-600"
                asChild
              >
                <Link to="/login">Login</Link>
              </Button>
            </p>
            <Button type="submit" className="w-full">
              Signup
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
