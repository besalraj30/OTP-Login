import { useState } from "react"
import OTPValidation from "./OTPValidation";

const OTPLogin = () => {

    const [otpSubmitted, setOtpSubmitted] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("");

    const handlePhoneNumber = (e) => {
        setPhoneNumber(e.target.value);
    }

    const onSubmitPhone = (e) => {
        e.preventDefault();

        const regex = /[^0-9]/g;
        if(phoneNumber.length<10 || regex.test(phoneNumber)) {
            alert("Invalid phone number");
            return ;
        }
        setOtpSubmitted(true);
    }

    const onOtpSubmit = (otp) => {
        console.log("Login successful", otp);
    }

    return (
        <div>
            {
                !otpSubmitted ? (
                    <form onSubmit={onSubmitPhone}>
                        <input type="text" value={phoneNumber} onChange={handlePhoneNumber} placeholder="Enter phone number" />
                        <button type="submit">Submit</button>
                    </form>
                ) : <div>
                        <p>Enter OTP Sent to {phoneNumber}</p>
                        <OTPValidation length={4} onOtpSubmit={onOtpSubmit} />
                    </div>
            }
        </div>
    )
    
}

export default OTPLogin;