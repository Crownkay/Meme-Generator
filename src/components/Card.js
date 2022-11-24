import React, { useState } from "react";
import starlight from '../images/star.jpg'
import starfull from "../images/starfull.png"

export default function Card() {
  const [contact, setContact] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });
  let star = contact.isFavorite ? starfull : starlight
  
  function toggleIcon(){
    setContact(prevContact =>{
      return {...prevContact, isFavorite: !prevContact.isFavorite}
    })
  }
  return (
    <main>
      <article>
        <p>
          My name is {contact.firstName} {contact.lastName}
        </p>
        <p>Phone-Number: {contact.phone}</p>
        <p>Email: {contact.email}</p>
        <img src={star} onClick={toggleIcon} alt="/" width="100px" height="100px" />
      </article>
    </main>
  );
}
