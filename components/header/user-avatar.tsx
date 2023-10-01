import React, { FC } from "react";

interface UserAvatarProps {
  userName: string | undefined;
}

const UserAvatar: FC<UserAvatarProps> = ({ userName }) => {
  const firstLetter = userName ? userName[0].toUpperCase() : "";

  return (
    <div className="w-100 h-100 bg-gray-300 rounded-full flex items-center p-2 justify-center text-2xl">
      <span>{firstLetter}</span>
    </div>
  );
};

export default UserAvatar;
