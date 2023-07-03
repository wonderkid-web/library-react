import React from "react";

const BookProfile = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://www.dbooks.org/img/books/5614163748s.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="w-1/2 mx-4">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <ul className="py-6">
            <ul>Authors: </ul>
            <ul>ID: </ul>
          </ul>
          <button className="btn btn-primary">Download</button>
        </div>
      </div>
    </div>
  );
};

export default BookProfile;