import PageHading from "../components/global/PageHading";
import Section from "../components/global/Section";
import Container from "../components/global/Container";
import { Eye } from "lucide-react";
import Button from "../components/global/Button";

const SignUpPage = () => {
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
                  name="Email"
                  id="Email"
                  placeholder="Email"
                  className="py-3.5 px-4 border border-gray_100 rounded-[10px] w-full"
                />
                <input
                  type="text"
                  name="Password"
                  id="Password"
                  placeholder="Password"
                  className="py-3.5 px-4 border border-gray_100 rounded-[10px] w-full"
                />
                <Eye className="absolute right-4 top-23 -translate-y-1/2 cursor-pointer text-gray-500" />
                <input
                  type="text"
                  name="Password"
                  id="Password"
                  placeholder="Confirm Password"
                  className="py-3.5 px-4 border border-gray_100 rounded-[10px] w-full"
                />
                <Eye className="absolute right-4 top-39.75 -translate-y-1/2 cursor-pointer text-gray-500" />
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <input type="checkbox" name="" id="" />
                    <p className="text-[14px] leading-[150%] text-gray_600 font-normal ">
                      Accept all terms & Conditions
                    </p>
                  </div>
                  {/* <p className="text-[14px] leading-[150%] text-gray_600 font-normal ">
                    Forget Password
                  </p> */}
                </div>
              </div>
              <Button variant="green" className="w-full">
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
