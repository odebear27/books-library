import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-colour-bluishGrey h-16 flex justify-center items-center text-colour-slate font-bold text-sm">
      <footer className="">{`© ${year} Copyright BooksLibrary`}</footer>
    </div>
  );
};

export default Footer;
