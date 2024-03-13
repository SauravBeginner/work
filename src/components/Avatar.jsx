import { Img } from "./Img";

export const Avatar = ({
  src = "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  className = "",
}) => {
  return (
    <div>
      <Img
        className={`${
          className ? className : "w-10 h-10"
        }  p-1 rounded-full ring-2 ring-gray-300 dark:ring-[#22c55d]`}
        src={src}
        alt="Bordered avatar"
      />
    </div>
  );
};
