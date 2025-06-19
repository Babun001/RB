import loginImage from '../../Assets/loginImg.png'
import './LoginFirstSection.css';
export default function LoginFirstSection(){
    return (
        <>
            <div className="login-container">
                {/* Left Illustration Section */}
                <div className="login-illustration">
                    <img src={loginImage} alt="Login illustration" />
                </div>

                {/* Right Login Form Section */}
                <div className="login-form-box">
                    <h2>Patient Register</h2>

                    <input
                        type="text"
                        placeholder="Mobile Number"
                        className="login-input"
                    />
                    <input type="password" placeholder="Password" className="login-input" />

                    <button className="login-btn">Login</button>

                    <div className="login-footer">
                        <p>
                            Don't have any account? <a href="#">Register Now!</a>
                        </p>
                        <p>
                            Forget Password? <a href="#">Click Here</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}