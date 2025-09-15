import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import loginimg from '../assets/login.jpg'
import Template from '../components/Template'
import loginImage from '../assets/login.jpg'


const Login = ({setIsLoggedIn}) =>{
   


  return (
    <div>
      <Template
      title="WelCome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImage}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
      
      />
    </div>
  )
}
export default Login