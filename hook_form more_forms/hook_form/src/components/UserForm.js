import React, { useState } from  'react';


const UserForm = (props) => {
    const [userfirstname, setUserFirstName] = useState("");
    const [userfirstnameError, setUserFirstNameError] = useState("");
    const [userlastname, setUserLastName] = useState("");
    const [userlastnameError, setUserLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [confirmpasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setUserFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setUserFirstNameError("First name is required!");
        } else if(e.target.value.length < 2) {
            setUserFirstNameError("First name must be 2 characters or longer!");
        } else {
            setUserFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setUserLastName(e.target.value);
        if(e.target.value.length < 1) {
            setUserLastNameError("Last name is required!");
        } else if(e.target.value.length < 2) {
            setUserLastNameError("Last name must be 2 characters or longer!");
        } else {
            setUserLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 8) {
            setConfirmPasswordError("Password must be 8 characters or longer!");
        } else {
            setConfirmPasswordError("");
        }

        if(password !== e.target.value) {
            setConfirmPasswordError("Password must match!");
        } else {
            setConfirmPasswordError("");
        }
    }
    
    return(
        <form>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFirstName } />
                {
                    userfirstnameError ?
                    <p style={{color:'red'}}>{ userfirstnameError }</p> :
                    ''
                }
                </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLastName } />
                {
                    userlastnameError ?
                    <p style={{color:'red'}}>{ userlastnameError }</p> :
                    ''
                }
                </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                {
                    confirmpasswordError ?
                    <p style={{color:'red'}}>{ confirmpasswordError }</p> :
                    ''
                }
                <label>Confirm Password: </label>
                <input type="text" onChange={ handleConfirmPassword } />
            </div>
        </form>
    );
};

export default UserForm;