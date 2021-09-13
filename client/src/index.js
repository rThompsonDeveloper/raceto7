import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Context
import { UserProvider } from "./contexts/UserContext";
import { AlertProvider } from "./contexts/AlertContext";
import { FollowProvider } from "./contexts/FollowContext";

ReactDOM.render(
  <AlertProvider>
    <FollowProvider>
      <UserProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </UserProvider>
    </FollowProvider>
  </AlertProvider>,
  document.getElementById("root")
);
