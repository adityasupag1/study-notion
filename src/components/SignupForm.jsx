import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const SignupForm = ({ setIsLoggedIn }) => {

	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

	const changeHandler = (event) => {
		setFormData((prevData) => ({
			...prevData,
			[event.target.name]: event.target.value,
		}));
	};

	const navigate = useNavigate();

	function submitHandler(event) {
		event.preventDefault();
		if (formData.password !== formData.confirmPassword) {
			toast.error("Passwords do not match");
			return;
		}

		setIsLoggedIn(true);
		toast.success("Account Created");

		const finalData = {
			...formData,
			accountType,
		};

		console.log("printing Final account data ");
		console.log(finalData);

		navigate("/dashboard");
	}

	return (
		<div>
			{/* student-Instructor tab */}
			<div className='flex bg-[#161D29] p-1 gap-x-1 my-6 rounded-full max-w-max'>
				<button
					className={`${accountType === "student" 
						? "bg-[#000814] text-[#F1F2FF]" 
						: "bg-transparent text-[#999DAA]"} py-2 px-5 rounded-full transition-all duration-200`}
					onClick={() => setAccountType("student")}
				>
					Student
				</button>

				<button
					className={`${accountType === "instructor" 
						? "bg-[#000814] text-[#F1F2FF]" 
						: "bg-transparent text-[#999DAA]"} py-2 px-5 rounded-full transition-all duration-200`}
					onClick={() => setAccountType("instructor")}
				>
					Instructor
				</button>
			</div>

			<form onSubmit={submitHandler}>
				{/* first name and lastName */}
				<div className='flex flex-col md:flex-row gap-4 mt-[20px]'>
					<label className='w-full'>
						<p className='text-[0.875rem] mb-1 leading-[1.375rem]' style={{color: "#F1F2FF"}}>
							First Name<sup style={{color: "#FF69B4"}}>*</sup>
						</p>
						<input
							required
							type="text"
							name="firstName"
							onChange={changeHandler}
							placeholder="Enter First Name"
							value={formData.firstName}
							className='rounded-[0.5rem] w-full p-[12px]'
							style={{backgroundColor: "#161D29", color: "#F1F2FF"}}
						/>
					</label>

					<label className='w-full'>
						<p className='text-[0.875rem] mb-1 leading-[1.375rem]' style={{color: "#F1F2FF"}}>
							Last Name<sup style={{color: "#FF69B4"}}>*</sup>
						</p>
						<input
							required
							type="text"
							name="lastName"
							onChange={changeHandler}
							placeholder="Enter Last Name"
							value={formData.lastName}
							className='rounded-[0.5rem] w-full p-[12px]'
							style={{backgroundColor: "#161D29", color: "#F1F2FF"}}
						/>
					</label>
				</div>

				{/* email */}
				<div className='mt-[20px]'>
					<label className='w-full mt-[20px]'>
						<p className='text-[0.875rem] mb-1 leading-[1.375rem]' style={{color: "#F1F2FF"}}>
							Email Address<sup style={{color: "#FF69B4"}}>*</sup>
						</p>
						<input
							required
							type="email"
							name="email"
							onChange={changeHandler}
							placeholder="Enter Email Address"
							value={formData.email}
							className='rounded-[0.5rem] w-full p-[12px]'
							style={{backgroundColor: "#161D29", color: "#F1F2FF"}}
						/>
					</label>
				</div>

				{/* password */}
				<div className='w-full flex flex-col md:flex-row gap-4 mt-[20px]'>
					<label className='w-full relative'>
						<p className='text-[0.875rem] mb-1 leading-[1.375rem]' style={{color: "#F1F2FF"}}>
							Create Password<sup style={{color: "#FF69B4"}}>*</sup>
						</p>
						<input
							required
							type={showPassword ? "text" : "password"}
							name="password"
							onChange={changeHandler}
							placeholder="Enter Password"
							value={formData.password}
							className='rounded-[0.5rem] w-full p-[12px]'
							style={{backgroundColor: "#161D29", color: "#F1F2FF"}}
						/>
						<span
							className='absolute right-3 top-[38px] cursor-pointer'
							onClick={() => setShowPassword(prev => !prev)}
						>
							{showPassword ? 
								(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)
								: (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
							}
						</span>
					</label>

					<label className='w-full relative'>
						<p className='text-[0.875rem] mb-1 leading-[1.375rem]' style={{color: "#F1F2FF"}}>
							Confirm Password<sup style={{color: "#FF69B4"}}>*</sup>
						</p>
						<input
							required
							type={showConfirmPassword ? "text" : "password"}
							name="confirmPassword"
							onChange={changeHandler}
							placeholder="Confirm Password"
							value={formData.confirmPassword}
							className='rounded-[0.5rem] w-full p-[12px]'
							style={{backgroundColor: "#161D29", color: "#F1F2FF"}}
						/>
						<span
							className='absolute right-3 top-[38px] cursor-pointer'
							onClick={() => setShowConfirmPassword(prev => !prev)}
						>
							{showConfirmPassword ?
								(<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>)
								: (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
							}
						</span>
					</label>
				</div>

				<button
					className='w-full rounded-[8px] font-medium px-[12px] py-[8px] mt-6'
					style={{backgroundColor: "#FFFF50", color: "#000814"}}
				>
					Create Account
				</button>
			</form>
		</div>
	);
};

export default SignupForm;
