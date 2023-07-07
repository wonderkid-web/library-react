import { useState } from "react"
import { useUserAuth } from "../context/UserAuthContext"
import { useNavigate } from "react-router-dom"

const Signup = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState()

    const navigate = useNavigate()

    const {signUp} = useUserAuth()

    const handleSignUp = async (e) =>{
        e.preventDefault()
        try{
            await signUp(email, password)
            navigate('/')
        }catch(e){
            console.log(e.message)
        }
    }

    return (
        <div className='w-1/2 mx-auto flex flex-col gap-4 my-4 h-screen'>
            <h1>Create an Account</h1>
            <p>Let's get started and sign in now!</p>
            <form onSubmit={handleSignUp}>
                <input onChange={(e)=>{
                    setEmail(e.target.value)
                }} type="email" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />
                <input onChange={(e)=>{
                    setPassword(e.target.value)
                }} type="password" placeholder="Password" className="input input-bordered input-accent w-full max-w-xs" />
                <button className='btn btn-warning w-fit'>Create Account</button>
                {/* <button className='btn btn-warning sefl-center w-fit'>Sign in with Google</button> */}
            </form>
        </div>
    )
}

export default Signup