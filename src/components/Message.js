import React, { useState } from "react";

export default function Message() {
  const [message, setMessage] = useState(["a"]);
  return (
    <div>
      {
        <h1>
          {message.length < 1
            ? "You're all caught up!"
            : `"You have ${message.length} unread message${
                message.length > 1 ? "s" : ""
              }"`}
        </h1>
      }
    </div>
  );
}
