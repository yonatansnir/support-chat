import React from "react";
import * as Style from "./App.module.scss";
import { Chat } from "components/Chat/Chat";

export const App = () => {
  return (
    <div className={Style.App}>
      <div className={Style.menuContainer}>1</div>
      <div className={Style.chatContainer}>
        <Chat />
      </div>
    </div>
  );
};
