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
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-3/4 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form>

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
                            <div className="form-control">
                                <button onClick={(e) => handleSignin(e)} type="submit" className='btn mt-2 btn-warning'>Sign in.</button>
                                <button className='btn mt-2 btn-warning'>
                                    <Link to={'/signup'} className="btn btn-warning w-fit ">Sign up?</Link>
                                </button>
                                <GoogleButton className="mt-2 mx-auto" onClick={handleSigninWithGoogle}  />
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