import { useState } from "react"
import { useUserAuth } from "../context/UserAuthContext"
import { Link, useNavigate } from "react-router-dom"
import GoogleButton from "react-google-button"

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    const { signIn, user, googleSignIn } = useUserAuth()
    const navigate = useNavigate()

    const handleSignin = async (e) => {
        e.preventDefault()
        try {
            // setError("")
            await signIn(email, password)
            console.log(user)
            navigate('/')
            
        } catch (e){
            // setError(e.message)
            console.error(error)
        }
    }

    const handleSigninWithGoogle = async () =>{
        setError("")
        try{    
            await googleSignIn()
            navigate('/')
        }catch(e){
            setError(e.message)
            console.error(error)
        }
    }

    return (
        <div className='w-1/2 mx-auto flex flex-col gap-4 my-4'>
            <h1>Login</h1>
            {error && <h1 className="text-warning">{error}</h1>}
            {/* <p>Let's get started and sign in now!</p> */}
            <form>
                <input onChange={(e)=>{
                    setEmail(e.target.value)
                }} type="email" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />
                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }} type="password" placeholder="Password" className="input input-bordered input-accent w-full max-w-xs" />
                <button onClick={(e)=>handleSignin(e)} type="submit" className='btn mt-2 btn-warning w-fit'>Create Account</button>
            </form>
            <Link to={'/signup'} className="btn btn-warning w-fit ">Sign up?</Link>
                <GoogleButton onClick={handleSigninWithGoogle}  />
        </div>
    )
}

export default Login