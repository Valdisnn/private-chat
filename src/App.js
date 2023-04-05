import React from "react";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center shadow-2xl rounded-b-lg`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-2xl border-none relative rounded-t-xl rounded-b-lg`,
};

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        <Navbar />
        {user ? <Chat /> : null}
      </section>
    </div>
  );
};

export default App;
