import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navigation = (props) => {
	let isLoggedIn = props.isLoggedIn;
	let setIsLoggedIn = props.setIsLoggedIn;

	return (
		<div className="flex flex-col md:flex-row gap-8 justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
			<Link to="/">
				<img
					src={logo}
					alt="Logo"
					width={160}
					height={32}
					loading="lazy"
				/>
			</Link>

			<nav>
				<ul
					className="flex gap-x-6"
					style={{ color: "#AFB2BF" }}
				>
					<li>
						<Link
							to="/"
							className="hover:text-white"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/about"
							className="hover:text-white"
						>
							About
						</Link>
					</li>
					<li>
						<Link
							to="/contact"
							className="hover:text-white"
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>

			{/* Login - SignUp - LogOut - Dashboard */}
			<div className="flex items-center gap-x-4">
				{!isLoggedIn && (
					<Link to="/login">
						<button className="py-[8px] px-[12px] rounded-[8px] border cursor-pointer bg-[#161D29] text-[#AFB2BF] border-[#2C333F]">
							Log in
						</button>
					</Link>
				)}
				{!isLoggedIn && (
					<Link to="/signup">
						<button
							className="py-[8px] px-[12px] rounded-[8px] border cursor-pointer  bg-[#161D29] text-[#AFB2BF] border-[#2C333F] "
						>
							Sign up
						</button>
					</Link>
				)}
				{isLoggedIn && (
					<Link to="/">
						<button
							onClick={() => {
								setIsLoggedIn(
									false
								);
								toast.error(
									"Logged Out"
								);
							}}
							className="py-[8px] px-[12px] rounded-[8px] border cursor-pointer bg-[#161D29] text-[#AFB2BF] border-[#2C333F] "
						>
							Log Out
						</button>
					</Link>
				)}
				{isLoggedIn && (
					<Link to="/dashboard">
						<button
							className="py-[8px] px-[12px] rounded-[8px] border cursor-pointer bg-[#161D29] text-[#AFB2BF] border-[#2C333F] "
						>
							Dashboard
						</button>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navigation;
