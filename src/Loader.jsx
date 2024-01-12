import React from "react";
import { bouncy } from "ldrs";
bouncy.register();

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        {/* Your loader animation */}
        <l-bouncy size="100" speed="1.75" color="#ffffff"></l-bouncy>
      </div>
    </div>
  );
};

export default Loader;
