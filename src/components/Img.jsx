const Img = ({
  className = "h-auto",
  src = "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  alt = "testImg",
  ...restProps
}) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading={"lazy"}
    />
  );
};
export { Img };
