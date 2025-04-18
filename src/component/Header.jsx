// File: Header.jsx located in root-directory/src/component/
import React from "react";

function Header() {
  return (
    <div>
      {/* container 1: header */}
      <div className="text-center m-6  bg-green-600">
        <h1>Header</h1>
        <h1>Web Development Course</h1>
        <p>
          In this course, you will learn about React, Next, Nest, Express and
          mongoDB
        </p>
      </div>
    </div>
  );
}

export default Header;
