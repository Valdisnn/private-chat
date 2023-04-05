import React from "react";
import { auth } from "../firebase";

const style = {
  message: `flex flex-col items-center shadow-xl m-4 py-2 px-3 rounded-t-lg `,
  name: `mt-[-1.55rem] text-gray-600 text-xs`,
  sent: `bg-orange-500 text-white flex-row-reverse text-end float-right rounded-lg`,
  received: `bg-[#e5e5ea] text-black float-left rounded-lg text-start`,
  block: `self-end`,
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${style.sent}`
      : `${style.received}`;

  return (
    <div>
      <div className={`${style.message} ${messageClass}`}>
        <div className={style.block}>
          <p className={style.name}>{message.name.split(" ")[0]}</p>
        </div>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
