import { useContext } from "react";

// Contexts
import { AlertContext } from "../../contexts/AlertContext";

// Styles
import { Wrapper, Message } from "./Styles";

const Alert = () => {
  const { alerts } = useContext(AlertContext);
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Wrapper key={alert.id}>
        <Message type={alert.type}>{alert.msg}</Message>
      </Wrapper>
    ))
  );
};

export default Alert;
