import React from "react";
import Image from "next/image";
const Loading = () => {
  return (
    <div className="flex justify-center mt-16">
      <Image src="/spinner.svg" alt="spinner" width={52} height={200} />
    </div>
  );
};

export default Loading;
