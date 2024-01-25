import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [patientName, setPatientName] = useState("");
  
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientExperience] = useState("default");
  
  const [preferredCity, setpreferredCity] = useState("default");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }

    if (!patientNumber.trim()) {
      errors.patientNumber = "Patient phone number is required";
    } else if (patientNumber.trim().length !== 10) {
      errors.patientNumber = "Patient phone number must be of 10 digits";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }
    
    if (preferredCity === "default") {
      errors.preferredCity = "Please select preferred city";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

  
    setPatientName("");
    setPatientNumber("");
    setPatientExperience("default");
    
    setpreferredCity("default");
    setFormErrors({});

    toast.success("Appointment Scheduled !", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Home <span className="legal-siteSign"></span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Book Appointment Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Patient Full Name:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && <p className="error-message">{formErrors.patientName}</p>}
          </label>

          <br />
          <label>
            Patient Phone Number:
            <input
              type="text"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
            {formErrors.patientNumber && <p className="error-message">{formErrors.patientNumber}</p>}
          </label>

          <br />
          <label>
            Any previous experience with physiotherapy:
            <select
              value={patientGender}
              onChange={(e) =>  setPatientExperience(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Yes</option>
              <option value="female">No</option>
           
            </select>
            {formErrors.patientGender && <p className="error-message">{formErrors.patientExperience}</p>}
          </label>

          <br />
        
          <br />
          <label>
            Preferred City:
            <select
              value={preferredCity}
              onChange={(e) => setpreferredCity(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="voice">Delhi</option>
              <option value="video">mumbai</option>
            </select>
            {formErrors.preferredCity && <p className="error-message">{formErrors.preferredCity}</p>}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Confirm Appointment
          </button>

          <p className="success-message" style={{display: isSubmitted ? "block" : "none"}}>Appointment details has been sent to the patients phone number via SMS.</p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Health+. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
