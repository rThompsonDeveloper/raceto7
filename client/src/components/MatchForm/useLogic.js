const useLogic = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted form");
  };

  return { handleSubmit };
};

export default useLogic;
