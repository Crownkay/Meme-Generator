import React, { useState } from "react";

export default function Signup() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    newsLetter: false,
  });
  // console.log(info);
  function handleChange(event) {
    const { type, value, checked, name } = event.target;
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (info.password === info.confirmPassword) {
      alert("Successfully signed up");
    } else {
      alert("Password do not match, please retry");
      return
    }
    if (info.newsLetter === true) {
      alert("Thanks for signing up for our newsletter!");
    }
    console.log(info);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={info.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={info.password}
        onChange={handleChange}
      />
      <input
        type="password"
        name="confirmPassword"
        value={info.confirmPassword}
        placeholder="Confirm password"
        onChange={handleChange}
      />
      <div>
        <input
          type="checkbox"
          id="newsletter"
          name="newsLetter"
          checked={info.newsLetter}
          onChange={handleChange}
        />
        <label htmlFor="newsletter">I want to join the newsletter </label>
      </div>
      <button>Sign up</button>
    </form>
  );
}
