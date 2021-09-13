import { useState } from "react";

const useAuth = () => {
  const [newAccount, setNewAccount] = useState(false);

  return { newAccount, setNewAccount };
};

export default useAuth;
