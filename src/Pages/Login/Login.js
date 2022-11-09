import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event =>{
        event.preventDefault()
    }
    return (
        <div className="hero ">
            <div className="hero-content ">
                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type='submit' value="login" />
                        </div>
                    </form>
                    <p className='text-center mb-5 font-semibold'>Don't have an account? <Link className='text-violet-700 font-bold' to ="/signup"> Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;