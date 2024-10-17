"use client";

import Image from "next/image";
import React from "react";

interface cancelButtonProps {
  cancelFn: (display: boolean) => void;
}

const CancelButton: React.FC<cancelButtonProps> = ({ cancelFn }) => {

  const handleCancel = () => {
    cancelFn(false);
  };
  return (
    <button className="cancel" onClick={handleCancel}>
      <img src="/icons/cancelSVG.svg" alt="cancel" className="w-[2em]" />
    </button>
  );
};

export default CancelButton;
