import React, { useState } from 'react';
import axios from 'axios';

function Signup() { // all the stuff mentioned in the task
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [earlyPayIntent, setEarlyPayIntent] = useState(true); // Default true
  const [expectedActivity, setExpectedActivity] = useState('');
  const [industry, setIndustry] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [website, setWebsite] = useState('');
  const [businessRegistration, setBusinessRegistration] = useState('');
  const [phone, setPhone] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');
  const [hasTradeName, setHasTradeName] = useState(false); // Default false
  const [legalName, setLegalName] = useState('');
  const [error, setError] = useState(null); 

  const handleSignup = async () => {
    try {
      const response = await axios.post('RMOVED', { // links to API
        user: {
          first_name: firstName,
          last_name: lastName,
          email,
          password
        },
        company: {
          activity: {
            early_pay_intent: earlyPayIntent,
            expected_activity: expectedActivity
          },
          early_pay_intent: earlyPayIntent,
          industry: { value: industry, label: industry },
          business_type: { label: businessType, value: businessType },
          website,
          business_registration: businessRegistration,
          phone,
          business_number: businessNumber,
          has_trade_name: hasTradeName,
          legal_name: legalName,
          expected_activity: expectedActivity
        }
      });
      
      localStorage.setItem('token', response.data.jwtToken); 
      window.location.reload(); 
    } catch (error) {
      console.error('Error during signup:', error);
      setError('An error occurred during signup.'); // so they know signup failed
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Signup</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="form-group">
        <label>First Name</label>
        <input type="text" className="form-control" value={firstName} onChange={e => setFirstName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input type="text" className="form-control" value={lastName} onChange={e => setLastName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Early Pay Intent</label>
        <select className="form-control" value={earlyPayIntent} onChange={e => setEarlyPayIntent(e.target.value)}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
      <div className="form-group">
        <label>Expected Activity</label>
        <input type="text" className="form-control" value={expectedActivity} onChange={e => setExpectedActivity(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Industry</label>
        <input type="text" className="form-control" value={industry} onChange={e => setIndustry(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Business Type</label>
        <input type="text" className="form-control" value={businessType} onChange={e => setBusinessType(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Website</label>
        <input type="text" className="form-control" value={website} onChange={e => setWebsite(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Business Registration</label>
        <input type="text" className="form-control" value={businessRegistration} onChange={e => setBusinessRegistration(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input type="text" className="form-control" value={phone} onChange={e => setPhone(e.target.value)} />
</div>
<div className="form-group">
<label>Business Number</label>
<input type="text" className="form-control" value={businessNumber} onChange={e => setBusinessNumber(e.target.value)} />
</div>
<div className="form-group">
<label>Has Trade Name</label>
<select className="form-control" value={hasTradeName} onChange={e => setHasTradeName(e.target.value)}>
<option value={true}>Yes</option>
<option value={false}>No</option>
</select>
</div>
<div className="form-group">
<label>Legal Name</label>
<input type="text" className="form-control" value={legalName} onChange={e => setLegalName(e.target.value)} />
</div>
<button className="btn btn-primary" onClick={handleSignup}>Signup</button>
</div> 
);
}
// alllll of the form areas
export default Signup;
