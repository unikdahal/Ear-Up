import React from "react";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 mt-4">About Eat Up</h1>
      <p className="text-xl text-gray-700 mb-8">
        Your go-to food delivery app for delicious meals!
      </p>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">Our Team</h2>
        <UserClass name="Unik Dahal (Class)" />
      </div>
    </div>
  );
};

export default About;
