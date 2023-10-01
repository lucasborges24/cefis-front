import React, { FC } from "react";

const UserAvatarSkeleton: FC<any> = () => {
  return (
    <div className="w-100 h-12 bg-gray-200 rounded-full animate-pulse"></div>
  );
};

export default UserAvatarSkeleton;
