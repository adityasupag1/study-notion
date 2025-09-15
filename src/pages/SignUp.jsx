import Template from '../components/Template'
import SignUpImage from '../assets/signup.jpg'

const SignUp = ({setIsLoggedIn}) =>{

  

  return (
    <div>
      <Template
      title="WelCome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={SignUpImage}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
      
      />
    </div>
  )
}
export default SignUp