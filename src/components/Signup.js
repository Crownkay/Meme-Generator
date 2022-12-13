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
      console.log("Successfully sign up");
    } else {
      console.log("Password do not match, please retry");
    }
    if (info.newsLetter === true) {
      console.log("Thanks for signing up for oue newsletter!");
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
          value={info.newsLetter === "checkbox"}
          onChange={handleChange}
        />
        <label htmlFor="newsletter">I want to join the newsletter </label>
      </div>
      <button>Sign up</button>
    </form>
  );
}
