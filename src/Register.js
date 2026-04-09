import { useState } from "react";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    regNo: "",
    gender: "",
    course: ""
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function validateForm(e) {
    e.preventDefault();

    if (formData.name === "") {
      setError("Name is required");
    } else if (formData.email === "") {
      setError("Email is required");
    } else if (formData.age === "") {
      setError("Age is required");
    } else if (formData.regNo === "") {
      setError("Registration Number is required");
    } else if (formData.gender === "") {
      setError("Select gender");
    } else if (formData.course === "") {
      setError("Select course");
    } else {
      setError("");
      alert("Registration Successful!");
    }
  }

  return (
    <div>
      <section>
        <h2>Student Registration Form</h2>

        <form onSubmit={validateForm}>

          <input type="text" name="name" placeholder="Name" onChange={handleChange} /><br /><br />

          <input type="text" name="email" placeholder="Email" onChange={handleChange} /><br /><br />

          <input type="number" name="age" placeholder="Age" onChange={handleChange} /><br /><br />

          <input type="text" name="regNo" placeholder="Registration Number" onChange={handleChange} /><br /><br />

          Gender:
          <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
          <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
          <br /><br />

          <select name="course" onChange={handleChange}>
            <option value="">Select Course</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="IT">IT</option>
            <option value="Others">Others</option>

          </select>

          <p style={{ color: "red" }}>{error}</p>

          <input type="submit" value="Register" />

        </form>
      </section>
    </div>
  );
}

export default Register;
