// Hooks
import useEditImage from "../../hooks/useEditImage";

// Styles
import {
  Wrapper,
  Upload,
  Label,
  Save,
  Cancel,
  Menu,
  UploadIcon,
} from "./Styles";

const ImageEdit = ({ image }) => {
  const { tempPhoto, photo, handleChange, showMenu, save, cancel } =
    useEditImage(image);
  return (
    <>
      <Wrapper image={tempPhoto ? tempPhoto : photo}>
        <Upload
          id="uploadBtn"
          type="file"
          accept="image/*"
          multiple={false}
          name="profileImage"
          onChange={handleChange}
          hidden
        />
        <Label htmlFor="uploadBtn">Upload</Label>
        <UploadIcon />
      </Wrapper>
      <Menu show={showMenu}>
        <Save onClick={save}>Save</Save>
        <Cancel onClick={cancel}>Cancel</Cancel>
      </Menu>
    </>
  );
};

export default ImageEdit;
