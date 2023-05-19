import React, { useState } from 'react';

const SignUp = () => {
  const [isOrgFormVisible, setIsOrgFormVisible] = useState(false);
  const [isVolFormVisible, setIsVolFormVisible] = useState(false);

  const toggleOrgForm = () => {
    setIsOrgFormVisible(true);
    setIsVolFormVisible(false);
  };

  const toggleVolForm = () => {
    setIsOrgFormVisible(false);
    setIsVolFormVisible(true);
  };

  const handleOrgSubmit = (event) => {
    event.preventDefault();
    // Handle organization form submission
    const orgName = event.target.orgName.value;
    const registrationNo = event.target.registrationNo.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Save the organization data to the database
    const orgData = {
      orgName,
      registrationNo,
      email,
      password,
      role: 'org',
    };

    // Perform API call or any necessary action to save the data
    console.log('Organization data:', orgData);

    // Reset the form
    event.target.reset();
  };

  const handleVolSubmit = (event) => {
    event.preventDefault();
    // Handle volunteer/donor form submission
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const role = event.target.role.value;

    // Save the volunteer/donor data to the database
    const volData = {
      firstName,
      lastName,
      email,
      password,
      role,
    };

    // Perform API call or any necessary action to save the data
    console.log('Volunteer/Donor data:', volData);

    // Reset the form
    event.target.reset();
  };

  return (
    <div>
      <h2 id="page-title">Sign Up</h2>
      <div className="homepage home-margin">
      <div>
        <button className="homepagebutton" onClick={toggleOrgForm}>Sign Up for Organizations</button>
        <button className="homepagebutton" onClick={toggleVolForm}>Sign Up for Volunteers and Donors</button>
      </div>

      {isOrgFormVisible && (
        <form onSubmit={handleOrgSubmit}>
          <h3>Organization Sign Up</h3>
          <label htmlFor="orgName">Organization Name</label>
          <input type="text" id="orgName" name="orgName" required />

          <label htmlFor="registrationNo">Registration No.</label>
          <input type="text" id="registrationNo" name="registrationNo" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Sign Up</button>
        </form>
      )}

      {isVolFormVisible && (
        <form onSubmit={handleVolSubmit}>
          <h3>Volunteer/Donor Sign Up</h3>
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" required />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" required />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />

        <div>
          <label htmlFor="role">Role</label>
          <select id="role" name="role" required>
            <option value="volunteer">Volunteer</option>
            <option value="donor">Donor</option>
          </select>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      )}
      </div>
    </div>
  );
};

export default SignUp;
