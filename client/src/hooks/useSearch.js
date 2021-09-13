import { useState, useRef, useEffect } from "react";
import axios from "axios";

const useSearch = () => {
  // Local State
  const [show, setShow] = useState(false);
  const [people, setPeople] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);

  // Refs
  const searchRef = useRef("");

  useEffect(() => {
    showSearch && searchRef.current.focus();
  }, [showSearch]);

  // Methods
  const handleChange = async () => {
    const searchString = searchRef.current.value;
    // if user types nothing leave the function and set the menu to not show
    if (searchString === "") return setShow(false);

    // show the menu
    setShow(true);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = JSON.stringify({ name: searchString });

      const users = await axios.post("/api/users/find", body, config);

      setPeople(users.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleShow = () => {
    setShowSearch(!showSearch);
  };

  const handleBlur = () => {
    searchRef.current.value === "" && setShowSearch(false);
  };

  return [
    searchRef,
    show,
    handleChange,
    people,
    loading,
    showSearch,
    handleShow,
    handleBlur,
  ];
};

export default useSearch;
