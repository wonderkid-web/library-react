import { useEffect, useState } from "react"
import { useUserAuth } from "../context/UserAuthContext"
import { useNavigate } from "react-router-dom"
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
    const handleSignUp = async (e : any) => {

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

    const manualSignUp = async (email :any, name : any) => {
        try {
            console.log(email, name)
            await signUp(email, password)
            
            signup = await fetch('https://library-react-backend.vercel.app/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email, name
                })
            })
            
            if(signup.ok){
                updateProfile(user, {displayName:name})
                alert('Akun baru berhasil dibuat!')
            }

        } catch (e) {

        }
    }

    useEffect(() => {

        const clearTime = setTimeout(() => {
            setSuccess(false)
            setFail(false)
        }, 3000)

        return () => clearTime

    }, [success, fail])

    return (
        <div className='w-1/2 mx-auto flex flex-col gap-6 my-4 h-screen items-center'>
            <div className="w-fit p-4 bg-white p-6 shadow-md rounded-md mt-8 text-center">
                <img src="https://1.bp.blogspot.com/-c_NVdtXuZBE/XwVjD_ISP4I/AAAAAAAA8KY/2f4se3fToMgCYYmVUfaH12IKD5JHb-tJwCNcBGAsYHQ/w680/26169651_1627943780659943_3897432158579037467_n.jpg" className="w-[120px] mt-5 rounded-full mx-auto" alt="" />

                <h1 className="my-4 ">Create an Account</h1>
                <p className="my-4">Let's get started and sign in now!</p>

                <form onSubmit={handleSignUp} className="flex flex-col mx-auto items-center gap-4 w-full">
                    <input onChange={(e) => {
                        setEmail(e.target.value)
                    }} type="email" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs" />
                   
                    <input onChange={(e) => {
                        setName(e.target.value)
                    }} type="text" placeholder="name" className="input input-bordered input-accent w-full max-w-xs" />
                   
                    <input onChange={(e) => {
                        setPassword(e.target.value)
                    }} type="password" placeholder="Password" className="input input-bordered input-accent w-full max-w-xs" />
                    <button className='btn btn-warning w-fit hover:scale-110 hover:bg-yellow-400 hover:shadow-md'>Create Account</button>
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

        </div>
    )
}

export default Signup