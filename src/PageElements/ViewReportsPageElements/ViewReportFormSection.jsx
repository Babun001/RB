import { useState } from 'react';
import './ViewReportsPageCSS/ViewReportForm.css';

export default function ViewReportFormSection() {
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSendOtp = () => {
    setShowOtpModal(true);
    // alert(`click on sendotp btn`)
  };

  const handleCloseModal = () => {
    setShowOtpModal(false);
    setOtp('');
  };

  const handleVerifyOtp = () => {
    console.log("Entered OTP:", otp);
    // Add OTP verification logic here
    setOtp("");
    setShowOtpModal(false);
  };

  return (
    <div className="report-form-container">
      <h3 className="form-heading">Download report by Mobile Number</h3>

      <div className="mobile-section">
        <input
          type="text"
          placeholder="+91 Mobile Number"
          className="input-field"
        />
        <button className="send-otp-btn rbdButton" onClick={handleSendOtp}>
          <span className='btn-text'>Send OTP</span>
        </button>
      </div>

      <div className="FormDivider">
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

      <button className="download-btn rbdButton"><span className='btn-text'>Download</span></button>

      {/* Modal */}
      {showOtpModal && (
        <div className="otp-modal">
          <div className="otp-modal-content">
            <h4>Enter OTP</h4>
            <input
              type="text"
              placeholder="Enter OTP"
              className="input-field"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <div className="otp-modal-actions">
              <button className="rbdButton" onClick={handleVerifyOtp}> <span className='btn-text'>Verify</span></button>
              <button className="rbdButton reset-Btn" onClick={handleCloseModal}><span className='btn-text'>Cancel</span></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
