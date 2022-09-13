import { useState } from "react";
import { RiLoader5Fill, RiCheckboxCircleFill } from "react-icons/ri";

const Inputs = ({ formik, name, type = "text" }) => {
  const [isType, setIsType] = useState(false);
  const inputHandler = (e) => {
    if (e.target.value.length !== 0) {
      setIsType(true);
    } else {
      setIsType(false);
    }
  };
  return (
    <div className="w-full relative">
      <input
        type={type}
        className={`p-2 w-full ring-2 focus:animate-none bg-transparent focus:outline-none font-semibold  ring-[#0f2333] rounded-md focus:ring-2 transition-all ease-in-out duration-300 focus:shadow-md focus:shadow-slate-900 ${
          formik.touched[name] && "ring-2 ring-rose-700"
        } ${formik.touched[name] && "animate-pulse"} 
                  ${
                    !formik.errors[name] &&
                    formik.touched[name] &&
                    "ring-green-800 animate-none"
                  } `}
        placeholder={`Your ${name}`}
        name={name}
        {...formik.getFieldProps(`${name}`)}
        onInput={inputHandler}
      />
      {isType && (
        <span className="absolute top-3 right-2">
          {formik.errors[name] ? (
            <RiLoader5Fill className="animate-spin" />
          ) : (
            <RiCheckboxCircleFill className="text-green-800" />
          )}
        </span>
      )}
      {formik.errors[name] && formik.touched[name] && (
        <span className="text-sm text-rose-700 px-2">
          {formik.errors[name]}
        </span>
      )}
    </div>
  );
};

export default Inputs;
