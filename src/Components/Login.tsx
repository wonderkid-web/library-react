import { useState } from "react"
import { useUserAuth } from "../context/UserAuthContext"
import { Link, useNavigate } from "react-router-dom"
import video from '../assets/video.mp4'
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

        } catch (e) {
            // setError(e.message)
            console.error(error)
        }
    }

    const handleSigninWithGoogle = async () => {
        setError("")
        try {
            await googleSignIn()
            navigate('/')
        } catch (e) {
            setError(e.message)
            console.error(error)
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200 login">
            <video src={video} autoPlay muted loop className="h-full w-full object-cover"></video>
            <div className="hero-content w-[500px]">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 relative right-[-400px]">
                    <form>
                        <img src="https://1.bp.blogspot.com/-c_NVdtXuZBE/XwVjD_ISP4I/AAAAAAAA8KY/2f4se3fToMgCYYmVUfaH12IKD5JHb-tJwCNcBGAsYHQ/w680/26169651_1627943780659943_3897432158579037467_n.jpg" className="w-[120px] mt-5 rounded-full mx-auto" alt="" />

                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input onChange={(e) => {
                                    setEmail(e.target.value)
                                }} type="email" placeholder="Email" className="input input-bordered input-accent w-full max-w-xs my-2" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onChange={(e) => {
                                    setPassword(e.target.value)
                                }} type="password" placeholder="Password" className="input input-bordered input-accent w-full max-w-xs" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control flex flex-col gap-4">
                                <button onClick={(e) => handleSignin(e)} type="submit" className='btn mt-2 btn-warning'>Sign in.</button>
                                <button className='btn mt-2 btn-warning'>
                                    <Link to={'/signup'} className="btn btn-warning w-fit ">Sign up?</Link>
                                </button>
                                <GoogleButton className="mt-2 mx-auto" onClick={handleSigninWithGoogle} />
                                <button className="text-center p-4 btn bg-yellow-500 hover:scale-110">Kunjungi Website Profile Putra Anda</button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

{/* {error && <h1 className="text-warning">{error}</h1>}
            <p>Let's get started and sign in now!</p>
          
               
            </form>
                 */}