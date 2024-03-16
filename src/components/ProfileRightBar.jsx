import React from "react";
import {
  IconFiles,
  IconClick,
  IconAlarmPlus,
  IconUserSearch,
} from "@tabler/icons-react";

export const ProfileRightBar = () => {
  const profileData = [
    {
      id: 1,
      icon: <IconUserSearch color={"#22c55d"} size={50} stroke={1} />,
      name: "Username",
      subtitle: "#12133",
    },
    {
      id: 2,
      icon: <IconFiles color={"#3c82f6"} size={50} stroke={1} />,
      name: "Total Documents",
      subtitle: 32,
    },
    {
      id: 3,
      icon: <IconClick color={"#ff0000"} size={50} stroke={1} />,
      name: "Account created",
      subtitle: "2023-10-15",
    },
    {
      id: 4,
      icon: <IconAlarmPlus color={"purple"} size={50} stroke={1} />,
      name: "Total Visits",
      subtitle: 90,
    },
  ];
  return (
    <div className="flex-1 grid grid-cols-2 gap-4 text-center">
      {profileData?.map((item) => (
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm w-full flex flex-col justify-center items-center"
          key={item.id}
        >
          <div className="p-3">{item?.icon}</div>
          <div className="p-3">
            <h3 className="text-xl font-semibold mb-2 font-heading">
              {item?.name}
            </h3>
          </div>
          <div className="flex items-center border-t p-3">
            <p className="text-gray-500 text-base font-bold">{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
