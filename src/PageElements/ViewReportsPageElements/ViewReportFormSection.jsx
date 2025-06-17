import './ViewReportsPageCSS/ViewReportForm.css';
export default function ViewReportFormSection() {
    return (
        <div className="report-form-container">
            <h3 className="form-heading">Download report by Mobile Number</h3>

            <div className="mobile-section">
                <input
                    type="text"
                    placeholder="+91 Mobile Number"
                    className="input-field"
                    
                />
                <button className="send-otp-btn">Send OTP</button>
            </div>

            <div className="divider">
                <div className="leftDivider"></div>
                <p>Or</p>
                <div className="rightDivider"></div>
            </div>

            <div className="credentials-section">
                <div className="input-wrapper">
                    <label htmlFor="username">Username*</label>
                    <input id="username" type="text" placeholder="Username" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password*</label>
                    <input id="password" type="password" placeholder="Password" className="input-field" />
                </div>
            </div>


            <button className="download-btn">Download</button>
        </div>
    );
}