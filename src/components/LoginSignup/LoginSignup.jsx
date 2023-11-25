import './LoginSignup.css'
const LoginSignup = () => {
    return (
        <div className='container'>

            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" />
                </div>
                <div className="input">
                    <i className="fa-solid fa-message"></i>
                    <input type="email" />
                </div>
                <div className="input">
                    <i className="fa-solid fa-lock"></i>
                    <input type="password" />
                </div>
            </div>
            <div className="forgot-password">
                Lost Password? <span>Click Here!</span>
            </div>
            <div className="submitContainer">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
        </div>
    )
}

export default LoginSignup
