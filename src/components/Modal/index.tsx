import React from "react";
export const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed top-16 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-20">
      {children}
    </div>
  );
};
