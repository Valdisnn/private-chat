import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  form: `h-16 w-full max-w-[728px] flex text-xl absolute bottom-0 rounded-b-lg border-none`,
  input: `w-full text-base p-3 bg-gray-800 text-white outline-none border-none rounded-bl-lg`,
  button: `w-[20%] bg-orange-500 text-white rounded-br-lg border-none`,
  send: `text-base`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");

  const SendMessage = async (e) => {
    e.preventDefault();

    if (input === "" || input === " ") {
      return;
    }

    // ПРИМЕЧАНИЕ : сделать проверку на пустую строку с пробелами

    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={SendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="Напечатайте что-нибудь"
      />
      <button className={style.button} type="submit">
        <p className={style.send}>→</p>
      </button>
    </form>
  );
};

export default SendMessage;
