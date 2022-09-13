import { Link } from "react-router-dom";
import Layout from "../layout/layout";
import { HiArrowSmRight } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import * as yup from "yup";
import Inputs from "../components/forms/input";

const SignInInputs = [
  { name: "name" },
  { name: "email" },
  { name: "phoneNumber", type: "phone" },
  { name: "password", type: "password" },
];

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = yup.object({
  name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .min(5)
    .max(20)
    .required(),
  email: yup.string().email().required(),
  phoneNumber: yup.string().matches(phoneRegExp, "Phone number is not valid").required(),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const onSubmit = (values) => {
  console.log(values);
};
const SignIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <Layout>
      <section className="pt-24 grid grid-cols-12 gap-8 md:mx-auto max-w-screen-xl">
        <div className="md:col-span-6  lg:col-span-7 w-full bg-hero-pattern bg-center bg-no-repeat bg-cover h-[85vh] rounded-md  hidden md:flex  justify-start items-center"></div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5 mb-32 ">
          <div className="flex flex-col gap-4 justify-center items-center mt-12 w-full h-fit ">
            <div className="w-10">
              <img
                src={require("./../assets/images/Apple_logo.png")}
                className="max-w-full"
                alt="logo"
              />
            </div>
            <h1 className="text-slate-900 font-semibold text-4xl lg:text-5xl tracking-widest">
              Hello
            </h1>
            <button className="w-80 lg:w-96 ring-1 ring-slate-900 p-2 font-semibold flex justify-between items-center mt-8 rounded-md bg-transparent hover:shadow-md hover:shadow-slate-900  transition-all ease-in-out duration-500 group">
              <span className="text-xl">
                <FcGoogle />
              </span>
              <span className="w-full text-center ">SignIn with Google</span>
            </button>
            <h1 className="mt-2 text-gray-500 font-semibold relative text-center lg:w-96 w-80 before:content-[''] before:block before:w-[5.5rem] before:lg:w-[7.3rem] before:h-[2px] before:bg-gradient-to-l before:from-gray-500 before:to-gray-300 before:absolute before:left-0 before:top-[55%] after:content-[''] after:block after:w-[5.5rem] after:lg:w-[7.3rem] after:h-[2px] after:bg-gradient-to-l after:from-gray-300 after:to-gray-500 after:absolute after:right-0 after:top-[55%]">
              or SignIn with Email
            </h1>
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-y-3 w-80 lg:w-96 mt-4"
            >
              {SignInInputs.map((item, index) => {
                return <Inputs formik={formik} {...item} key={index} />;
              })}
              <button
                type="submit"
                className="mt-6 flex justify-center items-center bg-gradient-to-r from-[#0f2333] via-[#21455d] to-[#42a989] p-3  text-slate-200 text-center rounded-md hover:shadow-md hover:shadow-[#0f2333] group transition-all ease-in-out duration-500"
              >
                <span className="font-semibold flex justify-center flex-auto text-center">
                  Sign in
                </span>
                <span className="group-hover:translate-x-2/3 transition-all ease-in-out duration-500 text-xl">
                  <HiArrowSmRight />
                </span>
              </button>
            </form>
            <Link
              to={"/login"}
              className="text-gray-600 mt-8 font-semibold flex gap-x-2 items-center tracking-wide"
            >
              Have An Account?{" "}
              <span className="underline text-slate-800">Login</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SignIn;