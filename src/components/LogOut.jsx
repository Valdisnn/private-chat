import React from "react";

import { auth } from "../firebase";

const style = {
  button: `bg-gray-700 px-4 py-2 hover:bg-gray-900 rounded-lg`,
  text: `text-white`,
};

const LogOut = () => {
  // eslint-disable-next-line
  const signOut = () => {
    signOut(auth);
  };

  return (
    <button onClick={() => auth.signOut()} className={style.button}>
      <p className={style.text}>Выйти</p>
    </button>
  );
};

export default LogOut;
