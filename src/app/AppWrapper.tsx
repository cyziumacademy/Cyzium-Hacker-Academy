"use client";
import React, { ReactNode } from "react";

interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden font-sans">
      {children}
    </div>
  );
};

export default AppWrapper;
