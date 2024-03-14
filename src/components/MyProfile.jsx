import { Avatar } from "./Avatar";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/authSlice";
import { useEffect } from "react";

const webDeveloperServices = [
  {
    id: 1,
    title: "Username",
    description: "Create ",
    slug: "responsive-web-design",
    isFeatured: true,
    image: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
  },
  {
    id: 2,
    title: "Total Document",
    description: "Build",
    slug: "full-stack-development",
    isFeatured: true,
  },
  {
    id: 3,
    title: "Account Create at",
    description: "Craft ",
    slug: "ux-ui-design",
    isFeatured: true,
  },
  {
    id: 4,
    title: "Total Document Visits",
    description: "Develop",
    slug: "e-commerce-solutions",
    isFeatured: true,
  },
];
export const MyProfile = () => {
  const token = localStorage.getItem("token");

  const userData = useSelector((state) => state.auth.userData);
  console.log(userData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(fetchUserData(token));
      console.log(userData);
    }
  }, [userData?.user?._id]);
  return (
    <div className="max-w-4xl mx-auto p-2">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 pb-2">
          <h2 className="text-base font-bold mb-4">A BIT ABOUT ME</h2>
          <h1 className="text-2xl font-bold mb-6">Who Am I?</h1>
          <p className="mb-4">
            Hi I'm Jane Doe. Click here to add your own text and edit me.
          </p>
          <p className="text-sm mb-6">Image by Freepik</p>
          <div className="bg-[#0f3b19] text-white p-6 rounded-lg flex flex-col items-center ">
            <span className="relative flex h-40 w-40 shrink-0 overflow-hidden rounded-full border-gray-100 border-2">
              {/* <img
                className="aspect-square h-full w-full"
                alt="Jane Doe"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              /> */}
              <Avatar className={"h-full w-full"} />
            </span>

            <h2 className="text-2xl font-bold my-4">
              {userData?.user?.name || "Title"}
            </h2>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-white text-[#1e40af]">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#ef4444] text-4xl"
              >
                <polyline points="4 7 4 4 20 4 20 7" />
                <line x1={9} x2={15} y1={20} y2={20} />
                <line x1={12} x2={12} y1={4} y2={20} />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Graphic Design</h3>
            </div>
            <div className="flex items-center p-6 border-t pt-2">
              <a className="text-[#ef4444]" href="#">
                MORE
              </a>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#3b82f6] text-4xl"
              >
                <circle cx={12} cy={10} r={8} />
                <circle cx={12} cy={10} r={3} />
                <path d="M7 22h10" />
                <path d="M12 22v-4" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Web Design</h3>
            </div>
            <div className="flex items-center p-6 border-t pt-2">
              <a className="text-[#3b82f6]" href="#">
                MORE
              </a>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#22c55e] text-4xl"
              >
                <rect width={14} height={8} x={5} y={2} rx={2} />
                <rect width={20} height={8} x={2} y={14} rx={2} />
                <path d="M6 18h2" />
                <path d="M12 18h6" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Software</h3>
            </div>
            <div className="flex items-center p-6 border-t pt-2">
              <a className="text-[#22c55e]" href="#">
                MORE
              </a>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm w-full"
            data-v0-t="card"
          >
            <div className="flex flex-col space-y-1.5 p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#facc15] text-4xl"
              >
                <rect x={2} y={4} width={20} height={16} rx={2} />
                <path d="M10 4v4" />
                <path d="M2 8h20" />
                <path d="M6 4v4" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Application</h3>
            </div>
            <div className="flex items-center p-6 border-t pt-2">
              <a className="text-[#facc15]" href="#">
                MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
