import React from "react";

function Chat({ className, messages, children }) {
  return (
    <div className={className}>
      {messages.map((message, index) => (
        <h3 key={index} className={message.className}>
          {message.message}
        </h3>
      ))}
      {children}
    </div>
  );
}

export default Chat;
