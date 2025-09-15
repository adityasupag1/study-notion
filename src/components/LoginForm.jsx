import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginForm = ({setIsLoggedIn}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
 
  const navigate = useNavigate();
  const submitHandler=(event)=> {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate('/dashboard')
  }

  return (
    <form onSubmit={submitHandler}  className="flex flex-col w-full gap-y-4 mt-6">
      <label className='w-full'>
        <p className='text-[0.875rem] text-[#F1F2FF] mb-1 leading-[1.375rem]'>
          Email Address <sup className='text-[#EF476F]'>*</sup>
        </p>
        <input
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
            className='bg-[#161D29] rounded-[0.5rem] text-[#F1F2FF] w-full p-[12px]'
        />
      </label>

     <label className='w-full relative'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                Password<sup className='text-[#EF476F]'>*</sup>
            </p>
        <div >
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter password"
             className='bg-[#161D29] rounded-[0.5rem] text-[#F1F2FF] w-full p-[12px]'
           
          />
          <span
            className='absolute right-3 top-[38px] cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}
            style={{ cursor: "pointer", marginLeft: "8px" }}
          >
            {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' /> : <AiOutlineEye  fontSize={24} fill='#AFB2BF'/>}
          </span>
        </div>

        <Link to="#">
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
                    Forgot Password
                </p>
        </Link>
      </label>

     <button className='bg-[#FFD60A] rounded-[8px] font-medium text-[#000814] px-[12px] py-[8px] mt-6'>
            Sign In
        </button>
    </form>
  );
};

export default LoginForm;
