import React, { FormEvent } from "react";
import * as Style from "./Chat.module.scss";
import { TextField } from "components/inputs/TextField";
import { Message } from "components/Message/Message";

const response =
  " To solve this problem, login into the device CLI (“root” user account) and then follow the steps below: \n" +
  "<ul>\n" +
  "  <li>For APSolute Vision software version 5.xx, run the command: mysql vision_ng</li>\n" +
  "  <li>For APSolute Vision software version 4.xx, run the command: mysql –prad123 vision_ng</li>\n" +
  "  <li>Run the command (common for 4.x and 5.x software versions, and including the semi-colon at the end): select * from vision_license;</li>\n" +
  "  <li>Under the “row_id” column of the license table, copy the unique row ID of the eval license.</li>\n" +
  "  <li>Run the command (common for 4.x and 5.x software versions, and including the semi-colon at the end): delete from vision_license where row_id=’unique-row-id’;</li>\n" +
  "</ul>\n" +
  "The output of the above command should be: Query OK, 1 row affected (0.001 sec).";

export const Chat = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log(e.currentTarget);
  };

  return (
    <div className={Style.chat}>
      <div>
        <Message isHuman={true} message="hello" />
        <Message isHuman={false} message="hello" />
        <Message isHuman={true} message="hello" />
        <Message isHuman={false} message="hello" />
      </div>
      <form onSubmit={handleSubmit}>
        <TextField />
        <button className={Style.sendBtn}>Send</button>
      </form>
    </div>
  );
};
