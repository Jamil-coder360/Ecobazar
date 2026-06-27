import PageHading from "../components/global/PageHading";
import Section from "../components/global/Section";
import Container from "../components/global/Container";
import { Eye, EyeOff } from "lucide-react";
import Button from "../components/global/Button";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const { signUp, logOut } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [userValue, setUserValue] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserValue((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(userValue);
    // console.log(e.target.name);
    // console.log(e.target.value);
  };
  const handleSignUp = () => {
    if (userValue.password !== userValue.confirmpassword) {
      toast.warning("password not match");
      return;
    }

    signUp(userValue.email, userValue.password, userValue.confirmpassword)
      .then((result) => {
        // সাথে সাথে logout, user set হওয়ার আগেই
        return logOut();
      })
      .then(() => {
        setUserValue({
          email: "",
          password: "",
          confirmpassword: "",
        });
        toast.success("Account created successfully!");
        navigate("/signin");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <>
      <PageHading mainname={"Account"} pagename={"Create Account"} />
      <Section>
        <Container>
          <div className="flex items-center justify-center py-20">
            <div className="w-[520px] border border-gray_50 shadow-xl rounded-[8px]  flex flex-col items-center justify-center gap-5 p-6">
              <h2 className="text-[32px] leading-[120%] text-gray_900 font-semibold text-center">
                Create Account
              </h2>

              <div className="relative flex flex-col gap-3 w-full">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={userValue.email}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="E`mail"
                  className="py-3.5 px-4 border border-gray_100 rounded-[10px] w-full"
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={userValue.password}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Password"
                    className="py-3.5 px-4 border border-gray_100 rounded-[10px] w-full"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2  text-gray-500"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmpassword"
                    value={userValue.confirmpassword}
                    onChange={(e) => handleInputChange(e)}
                    id="confirmpassword"
                    placeholder="Confirm Password"
                    className="py-3.5 px-4 border border-gray_100 rounded-[10px] w-full"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2  text-gray-500"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="" id="" required />
                    <p className="text-[14px] leading-[150%] text-gray_600 font-normal ">
                      Accept all terms & Conditions
                    </p>
                  </div>
                  {/* <p className="text-[14px] leading-[150%] text-gray_600 font-normal ">
                    Forget Password
                  </p> */}
                </div>
              </div>
              <Button onClick={handleSignUp} variant="green" className="w-full">
                Create Account
              </Button>
              <div className="flex items-center gap-1 pb-2">
                <p className="text-[14px] leading-[150%] text-gray_600 font-normal ">
                  Already have account
                </p>
                <strong className="text-[14px] leading-[150%] text-gray_900 font-medium ">
                  Login
                </strong>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default SignUpPage;
