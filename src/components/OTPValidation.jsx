import { useRef } from "react";
import { useState } from "react";

const OTPValidation = ({length = 4, onOtpSubmit}) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);
    console.log(inputRefs);

    const handleChange = (index, e) => {
        console.log(e, index);
        const num = e.target.value;
        if(isNaN(num)) return;

        const newOtp = [...otp];
        newOtp[index] = num.substring(num.length -1);
        setOtp(newOtp);

        const combinedOtp = newOtp.join("");
        if(combinedOtp.length==length)
        {
            onOtpSubmit(combinedOtp);
        }
        const nextEmptyIndex =  newOtp.indexOf("");

        if(num && nextEmptyIndex!==-1 && inputRefs.current[nextEmptyIndex])
        {
            inputRefs.current[nextEmptyIndex].focus();
        }
    }

    const handleKeyDown = (index, e) => {
        if(e.key === 'Backspace' && !otp[index] && index > 0 && inputRefs.current[index-1])
        {
            inputRefs.current[index-1].focus();
        }
    }

    const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1,1);

        //move cursor to first empty
        if(index > 0 && !otp[index-1])
        {
            console.log(otp[index-1]);
            inputRefs.current[otp.indexOf("")].focus();
        }
    }

    return (
        <div>
            {
                otp.map((value, index) => {
                    return <input key={index} ref={(input) => (inputRefs.current[index] = input)} type="text" value={value} onChange={(e) => handleChange(index, e)} onClick={() => handleClick(index)} onKeyDown={(e) => handleKeyDown(index, e)} className="otp-input"/>
                })
            }
        </div>
    )
}

export default OTPValidation;