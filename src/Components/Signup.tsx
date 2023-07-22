import { useEffect, useState } from "react"
import { useUserAuth } from "../context/UserAuthContext"
import { useNavigate} from "react-router-dom"
import { updateProfile } from "firebase/auth"

const Signup = () => {
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [success, setSuccess] = useState()
    const [fail, setFail] = useState()
    // const [error, setError] = useState()

    const { signUp, user } = useUserAuth()

    const navigate = useNavigate()

    let signup;
    const handleSignUp = async (e) => {

        e.preventDefault()
        manualSignUp(email, name)
        navigate('/')
       
        // if(signup.ok){
        //     setSuccess(true)
        //     navigate('/')
        // }else{
        //     setFail(true)
        // }
    }

    const manualSignUp = async (email, name) =>{
         try {
            const data = await signUp(email, password)

            signup = await fetch('http://localhost:3006/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email, name
                })
            })
            
        } catch (e) {
            console.log(e.message)
        }
    }

    useEffect(() => {

        const clearTime = setTimeout(()=>{
            setSuccess(false) 
            setFail(false)
        }, 3000)

        return () => clearTime

    }, [success, fail])

    return (
        <div className='w-1/2 mx-auto flex flex-col gap-4 my-4 h-screen'>
            <h1>Create an Account</h1>
            <p>Let's get started and sign in now!</p>
            {email && email}
            {password && password}
            <form onSubmit={handleSignUp}>
                <input onChange={(e) => {
                    setEmail(e.target.value)
                }} type="email" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />
                <input onChange={(e) => {
                    setName(e.target.value)
                }} type="text" placeholder="Name" className="input input-bordered input-accent w-full max-w-xs" />
                <input onChange={(e) => {
                    setPassword(e.target.value)
                }} type="password" placeholder="Password" className="input input-bordered input-accent w-full max-w-xs" />
                <button className='btn btn-warning w-fit'>Create Account</button>
                {/* <button className='btn btn-warning sefl-center w-fit'>Sign in with Google</button> */}
            </form>
            {
                success &&
                <div className="toast toast-start">
                    <div className="alert alert-success">
                        <span>Buku kamu berhasil Buat Akun</span>
                    </div>
                </div>
            }
            {
                fail &&
                <div className="toast toast-start">
                    <div className="alert alert-warning">
                        <span>Ada akun yang sama nih!</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Signup