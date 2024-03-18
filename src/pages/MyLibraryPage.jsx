import React from "react";
import MyLibraryDisplay from "../components/MyLibraryDisplay";

const MyLibraryPage = () => {
  return (
    <div className="bg-library bg-cover container pt-20">
      <div className="flex justify-center py-3">
        <div className="flex justify-center bg-colour-white opacity-75 w-3/6 rounded">
          <p className="font-normal text-colour-slate text-center text-3xl italic py-3">
            What will you read today?
          </p>
        </div>
      </div>
      <MyLibraryDisplay></MyLibraryDisplay>
    </div>
  );
};

export default MyLibraryPage;
