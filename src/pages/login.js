import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Layout from "../layout/layout";
import { useFormik } from "formik";
import * as yup from "yup";
import { HiArrowSmRight } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import Inputs from "../components/forms/input";
import {  useState } from "react";
import { useAuth, useAuthAction } from "../provider/AuthProvider";
import LoginUsers from "../services/LoginUsers";
import {toast} from 'react-toastify'; 
const LoginInputs = [{ name: "email" }, { name: "password", type: "password" }];

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const Login = () => {
  const [error, setError] = useState(null);
  const setAuth = useAuthAction();
  const Auth = useAuth();
  const navigate = useNavigate();
  const [searchParameter] = useSearchParams();
  const redirect = searchParameter.get("redirect") || "profile";
  const onSubmit = async (values) => {
    try {
      const { data } = await LoginUsers(values);
      setError(null);
      setAuth(data);
      navigate(`/${redirect}`);
      toast.success(`wellcome ${data.name}`)
    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
        toast.error(error);
      }
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <Layout title={'Login'}>
      <section className="pt-24 grid grid-cols-12 gap-8 md:mx-auto max-w-screen-xl">
        <div className="md:col-span-6  lg:col-span-7 w-full bg-hero-pattern bg-center bg-no-repeat bg-cover h-[85vh] rounded-md  hidden md:flex  justify-start items-center"></div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5 mb-32 ">
          {!Auth ? (
            <div className="flex flex-col gap-4 justify-center items-center mt-12 w-full h-fit ">
              <div className="w-10">
                <img
                  src={require("./../assets/images/Apple_logo.png")}
                  className="max-w-full"
                  alt="logo"
                />
              </div>
              <h1 className="text-slate-900 font-semibold text-4xl lg:text-5xl tracking-widest">
                WellCome Back{" "}
              </h1>
              <button className="w-80 lg:w-96 ring-1 ring-slate-900 p-2 font-semibold flex justify-between items-center mt-8 rounded-md bg-transparent hover:shadow-md hover:shadow-slate-900  transition-all ease-in-out duration-500 group">
                <span className="text-xl">
                  <FcGoogle />
                </span>
                <span className="w-full text-center ">Login with Google</span>
              </button>
              <h1 className="mt-2 text-gray-500 font-semibold relative text-center lg:w-96 w-80 before:content-[''] before:block before:w-[5.5rem] before:lg:w-[7.5rem] before:h-[2px] before:bg-gradient-to-l before:from-gray-500 before:to-gray-300 before:absolute before:left-0 before:top-[55%] after:content-[''] after:block after:w-[5.5rem] after:lg:w-[7.5rem] after:h-[2px] after:bg-gradient-to-l after:from-gray-300 after:to-gray-500 after:absolute after:right-0 after:top-[55%]">
                or Login with Email
              </h1>
              <form
                onSubmit={formik.handleSubmit}
                className="flex flex-col gap-y-3 w-80 lg:w-96 mt-8"
              >
                {LoginInputs.map((item, index) => {
                  return <Inputs formik={formik} {...item} key={index} />;
                })}
                {error && <p className="text-rose-500 animate-pulses">{error}</p>}
                <div className="w-full flex justify-between items-center mt-2 px-2 text-slate-900 text-sm">
                  <div className="flex items-center gap-x-2 ">
                    <input type="checkbox" />
                    <p>Keep Me LoggedIn</p>
                  </div>
                  <div>
                    <Link to={"/"} className="underline ">
                      Forgot Password ?
                    </Link>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 flex justify-center items-center bg-gradient-to-r from-[#0f2333] via-[#21455d] to-[#42a989] p-3  text-slate-200 text-center rounded-md hover:shadow-md hover:shadow-[#0f2333] group transition-all ease-in-out duration-500"
                >
                  <span className="font-semibold flex justify-center flex-auto text-center">
                    Login
                  </span>
                  <span className="group-hover:translate-x-2/3 transition-all ease-in-out duration-500 text-xl">
                    <HiArrowSmRight />
                  </span>
                </button>
              </form>
              <Link
                to={
                  redirect === "checkout"
                    ? "/signIn?redirect=checkout"
                    : "/signIn"
                }
                className="text-gray-600 mt-8 font-semibold flex gap-x-2 items-center tracking-wide"
              >
                Don't have an Account Yet?{" "}
                <span className="underline text-slate-800">SignUp</span>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-y-4">
              <h1 className="font-bold text-slate-800 text-3xl">
                Hello {Auth.name}
              </h1>
              <h1 className="Font-bold ">Your Login To Apple Store</h1>
              <Link
                to={"/"}
                className="p-2 bg-cyan-900 text-slate-200 rounded-md w-1/2 hover:ring hover:ring-offset-2 hover:ring-cyan-900 transition-all ease-in-out duration-500"
              >
                Go To Home Page Now
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Login;
