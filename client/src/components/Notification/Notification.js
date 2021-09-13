import { useState } from "react";

// Styles
import { Wrapper, Message, LinkTo, Close } from "./Styles";

const Notification = ({ message, link }) => {
  const [show, setShow] = useState(true);
  return (
    <Wrapper show={show}>
      <Message>{message}</Message>
      <LinkTo to={`/${link === "login" ? "auth" : link}`}>{link}</LinkTo>
      <Close onClick={() => setShow(!show)}>X</Close>
    </Wrapper>
  );
};

export default Notification;
