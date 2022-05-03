import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.config";
import axios from "axios";
import Loading from "../Shared/Loading";

export default function Register() {
    // Navigate Previous Tab if user Registation

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [userInfoErr, setUserInfoErr] = useState({
        emailErr: "",
        passwordErr: "",
    });
    // Sign Up State
    const [createUserWithEmailAndPassword, user, loading, createErr] =
        useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    useEffect(() => {
        const finalError = createErr;
        if (finalError) {
            switch (finalError?.code) {
                case "auth/invalid-email":
                    toast.error("Invalid email provided, please provide a valid email");
                    break;

                case "auth/email-already-exists":
                    toast.error("Email Already Exists");
                    break;

                case "auth/invalid-password":
                    toast.error("Wrong password. Intruder!!");
                    break;

                case "auth/user-not-found":
                    toast.error("User Not found Please Create New");
                    break;

                case "auth/wrong-password":
                    toast.error("Password is not match");
                    break;

                default:
                    toast.error("something went wrong");
            }
        }
    }, [createErr]);

    // handling Email Change
    const handleEmailChange = (e) => {
        const emailRegEx = /\S+@\S+\.\S+/;
        const validate = emailRegEx.test(e.target.value);
        if (validate) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setUserInfoErr({ ...userInfoErr, emailErr: "" });
        } else {
            setUserInfoErr({ ...userInfoErr, emailErr: "Your Email is not Valid" });
            setUserInfo({ ...userInfo, email: "" });
        }
    };

    // Password Change
    const handlePasswordChange = (e) => {
        const passwordRegEx = /.{6,}/;
        const validatePass = passwordRegEx.test(e.target.value);
        if (validatePass) {
            setUserInfo({ ...userInfo, password: e.target.value });
            setUserInfoErr({ ...userInfoErr, passwordErr: "" });
        } else {
            setUserInfoErr({
                ...userInfoErr,
                passwordErr: "Your must have to be 6 characters",
            });
            setUserInfo({ ...userInfo, password: "" });
        }
    };

    const handleConfirmPassword = (e) => {
        const pass = e.target.value;
        if (pass === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: e.target.value });
            setUserInfoErr({ ...userInfoErr, passwordErr: "" });
        } else {
            setUserInfoErr({ ...userInfoErr, passwordErr: "Password Not Match" });
            setUserInfo({ ...userInfo, confirmPassword: "" });
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        if (userInfo.email && userInfo.password === userInfo.confirmPassword) {
            try {
                await createUserWithEmailAndPassword(userInfo.email, userInfo.password);
                const { data } = await axios.post(
                    "https://mern-stack-inventory-management.hrmeheraj.repl.co/login",
                    { email: userInfo.email }
                );
                localStorage.setItem("accessToken", data.accessToken);
                console.log(data);
                console.log(user);
                toast((t) => (
                    <span>
                        We Have sent <b>Verification Link</b>
            to you email address.
                        <span className="text-blue-600 font-semibold">
                            Please Verify you email{" "}
                        </span>
                        <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
                    </span>
                ));
                navigate(from, { replace: true });
            } catch (err) {
                console.log("Err from REgister page", err);
            } finally {
            }
        }
    };
    if (loading) {
        return <Loading />;
    }

    return (
        <div className="h-screen w-full flex justify-center mt-[30px]">
            <form
                onSubmit={handleRegisterSubmit}
                className="p-4 mx-auto w-[95%] max-w-[720px] shadow-lg rounded-md  container"
            >
                <h2 className="text-center text-xl sm:text-2xl text-blue-800 py-4 font-semibold   ">
                    CREATE NEW ACCOUNT{" "}
                </h2>
                <div className="">
                    <label htmlFor="email" className=" block  py-[5px] w-full">
                        Email:
          </label>
                    <input
                        type="email"
                        autoComplete="false"
                        onChange={handleEmailChange}
                        id="email"
                        required
                        placeholder="enter your email "
                        className="py-2 px-4 my-[15px] border block w-full  rounded-md shadow-md"
                    />
                </div>{" "}
                {userInfoErr?.emailErr && (
                    <p className="text-red-800  pt-2">{userInfoErr.emailErr}</p>
                )}
                <br />
                <div className="">
                    <label htmlFor="password" className="w-full block  py-[5px]">
                        Password:
          </label>
                    <input
                        type="password"
                        autoComplete="false"
                        onChange={handlePasswordChange}
                        id="password"
                        required
                        placeholder="Enter your password"
                        className=" py-2 px-4 my-[15px]  block w-full border rounded-md shadow-md "
                    />
                </div>
                {userInfoErr?.passwordErr && (
                    <p className="text-red-800  pt-2">{userInfoErr.passwordErr}</p>
                )}
                <br />
                <div className="">
                    <label htmlFor="confirmPasword" className="w-full block  py-[5px]">
                        Confirm Password:
          </label>
                    <input
                        type="password"
                        autoComplete="false"
                        onChange={handleConfirmPassword}
                        id="confirmPassword"
                        required
                        placeholder="Re-type your password"
                        className=" py-2 px-4  block w-full border rounded-md shadow-md "
                    />
                </div>
                <br />
                <p className="py-2 ">
                    Already have an Account?{" "}
                    <Link to="/login" className="text-blue-800">
                        Login
          </Link>
                </p>
                <button
                    type="submit"
                    className="btn mb-[30px] mt-[25px] block bg-pink-900 w-full hover:bg-blue-900"
                >
                    REGISTER
        </button>
            </form>
        </div>
    );
}
