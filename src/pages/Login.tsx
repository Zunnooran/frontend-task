import { useState } from "react";
import { useAuth } from '../auth/AuthContext';
import Button from "../components/Button";
import { error } from "../components/error";
import RightColumnPic from ".././assets/Right Column.png";
import TintedIcon from ".././assets/_Tinted Icon.svg";
import TintedIconEye from ".././assets/_Tinted Icon(1).svg";
import OpenEye from ".././assets/eye-open-svgrepo-com.svg";
import Google from ".././assets/_Google Logo Icon.svg";

const Login = () => {
  const [formData, setFormData] = useState({ userName: "", password: ""});
  const [show, setShow] = useState(false);

  const { login } = useAuth();

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(formData.userName, formData.password);

    } catch (e: any) {
      error(true, e?.response?.data?.message, false )
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center h-screen w-full">
      <div className="w-full lg:w-[40%] h-screen p-16">
        <img src={TintedIcon} alt="Login Page" />
        <p className="lg:text-[64px] lg:font-[600] text-[38px] font-[550] font-sora Variable mt-8">
          Welcome back
        </p>
        <p className="lg:text-[18px] lg:font-[300] text-[16px] font-[300] font-sans">
          You need to be signed in to access the project dashboard.
        </p>
        <form onSubmit={handelSubmit}>
          <div className="flex flex-col gap-2 w-full mt-10 lg:text-[16px] lg:font-[500] text-[15px] font-[500]">
            <label>Email or username</label>
            <input
              type="text"
              placeholder="wesley.mendoza@example.com"
              className="h-[40px] bg-[#F9FAFB] border border-[#CFD8E1] px-[10px] py-[12px] outline-none rounded-sm"
              onChange={(e) => setFormData({...formData, userName: e.target.value})}
              required
            />
            <label>Password</label>
            <div className="h-[40px] bg-[#F9FAFB] border border-[#CFD8E1] flex justify-between rounded-sm">
              <input
                type={show ? "text" : "password"}
                className="bg-[#F9FAFB] outline-none w-[90%] px-[10px] py-[12px]"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
              <img
                src={!show ? TintedIconEye : OpenEye}
                alt="eye"
                onClick={() => setShow(!show)}
                className="cursor-pointer w-[10%] lg:p-2 p-1"
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-between flex flex-col items-start gap-3 mt-6">
            <div className="flex justify-center item-center gap-2">
              <input
                type="checkbox"
                className="lg:w-[24px] lg:h-[24px] w-[16px] h-[16px] cursor-pointer"
              />
              <label className="text-[16px] font-[360]">
                Keep me signed in
              </label>
            </div>
            <p className="hover:underline cursor-pointer text-[16px] lg:font-[500] font-[360] lg:text-right">
              Forgot password?
            </p>
          </div>
          <div className="mt-6">
            <Button btnClasses='w-full bg-[#50F89A] border border-[#00E687] py-[14px] px-[12px] rounded-sm ' btnText="Sign in" isSubmit={true}  />
            <div className="w-full flex justify-center border border-[#CFD8E1] py-[14px] px-[12px] mt-6 rounded-sm gap-2">
              <img src={Google} alt="Google" />
              <div>Sign in with Google</div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <p className="text-[16px] font-[360]">
              Haven’t joined yet?{" "}
              <span className="cursor-pointer hover:underline text-[16px] font-[500]">
                Sign in
              </span>
            </p>
          </div>
        </form>
      </div>
      <div className="w-full lg:w-[60%] h-screen lg:block hidden">
        <img className="w-full h-screen" src={RightColumnPic} alt="RightColumnPic" />
      </div>
    </div>
  );
};

export default Login;
