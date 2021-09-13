import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const useEditImage = (image) => {
  const { uploadPhoto } = useContext(UserContext);
  const [tempPhoto, setTempPhoto] = useState(null);
  const [photo, setPhoto] = useState(image);
  const [showMenu, setShowMenu] = useState(false);

  const handleChange = (e) => {
    if (showMenu === false) setShowMenu(true);
    setTempPhoto(URL.createObjectURL(e.target.files[0]));
    setPhoto(e.target.files[0]);
  };

  const save = async () => {
    uploadPhoto(photo);
    setShowMenu(false);
  };

  const cancel = () => {
    setTempPhoto(null);
    setShowMenu(false);
  };

  return { tempPhoto, photo, handleChange, showMenu, save, cancel };
};

export default useEditImage;
