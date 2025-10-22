import React from "react";
import { Loader, Loader2 } from "lucide-react";

const loadingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Loader2 className="animate-spin text-indigo-400" size={40}></Loader2>
    </div>
  );
};

export default loadingPage;
