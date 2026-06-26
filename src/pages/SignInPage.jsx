import React, { useContext, useState } from "react";
import PageHading from "../components/global/PageHading";
import Section from "../components/global/Section";
import Container from "../components/global/Container";
import { Eye, EyeOff } from "lucide-react";
import Button from "../components/global/Button";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";


const SignInPage = () => {
 const {signIn} =useContext(AuthContext);
 const [showPassword, setShowPassword] = useState(false);

const navigate = useNavigate();

const handleLogin = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = {};

  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }

  if (!data.email || !data.password) {
    toast.error("Please fill all fields");
    return;
  }

  signIn(data.email, data.password)
    .then((result) => {
      console.log("Login Success:", result.user);

      toast.success("Login Successful ✅");

      navigate("/");
    })
    .catch((error) => {
      console.error(error);

      toast.error("Invalid Email or Password ❌");
    });
    
};
return (
    <>
      <PageHading mainname={"Account"} pagename={"Login"} />
      <Section>
        <Container>
          <div className="flex items-center justify-center py-20">
            <div className="w-[520px] border border-gray_50 shadow-xl rounded-[8px]  flex flex-col items-center justify-center gap-5 p-6">
              <h2 className="text-[32px] leading-[120%] text-gray_900 font-semibold text-center">
                Sign In
              </h2>
<form  onSubmit={handleLogin} className=" w-full" >
              <div className="relative flex flex-col gap-3 w-full">

                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="py-3.5 px-4 border border-gray_100 rounded-[10px] w-full"
                />
{/* <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    id="password"
    placeholder="Password"
    className="py-3.5 px-4 border border-gray_100 rounded-[10px] w-full"
  />

  {showPassword ? (
    <EyeOff
      onClick={() => setShowPassword(false)}
      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
    />
  ) : (
    <Eye
      onClick={() => setShowPassword(true)}
      className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
    />
  )}
</div> */}
<div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Password"
    className="py-3.5 px-4 border border-gray_100 rounded-[10px] w-full"
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-4 top-1/2 -translate-y-1/2"
  >
    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
  </button>
</div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="" id="" />
                    <p className="text-[14px] leading-[150%] text-gray_600 font-normal ">
                      Remember me
                    </p>
                  </div>
                  <p className="text-[14px] leading-[150%] text-gray_600 font-normal ">
                    Forget Password
                  </p>
                </div>
              <Button type="submit" variant="green" className="w-full">
                Login
              </Button>
              </div>
</form>
              <div className="flex items-center gap-1 pb-2">
                <p className="text-[14px] leading-[150%] text-gray_600 font-normal ">
                  Don’t have account?
                </p>
                <strong className="text-[14px] leading-[150%] text-gray_900 font-medium ">
                  {" "}
                  Register
                </strong>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default SignInPage;
