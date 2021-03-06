import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { toast } from "react-hot-toast";
import auth from "../../Firebase/firebase.config";
import useDynamicTitle from "../../Hooks/useDynamicTitle";
function ResetPassword() {
    useDynamicTitle("Reset Password");
    const [email, setEmail] = useState("");
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const handleEmailChange = (e) => {
        const emailRegEx = /\S+@\S+\.\S+/;
        const validate = emailRegEx.test(e.target.value);
        if (validate) {
            setEmail(e.target.value);
        } else {
            setEmail("");
        }
    };
    const handleForgotSubmit = async (e) => {
        e.preventDefault();
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Sending Email, Check inbox!");
        } else {
            toast.err("Please Provide a Valid EmaiL");
        }
    };
    return (
        <div className="flex justify-center p-[100px]">
            <form
                onSubmit={handleForgotSubmit}
                className="p-4 shadow-md my-[100px] mx-auto max-w-10/12 md:w-[520px]"
            >
                <input
                    type="email"
                    required
                    onChange={handleEmailChange}
                    placeholder="enter your email to reset"
                    className="rounded-md shadow-lg py-2 px-4 font-semibold block w-full"
                />
                <br />
                <input
                    value="Reset Password"
                    type="submit"
                    className="btn bg-blue-800 block w-full rounded-md shadow-lg cursor-pointer hover:bg-blue-900"
                />
            </form>
        </div>
    );
}

export default ResetPassword;
