import React from "react";
import logo from "./logo.svg";
import Search from "./Search";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex" }}>
        <img
          style={{ width: "75px" }}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <h1> Weather </h1>
      </div>
      <Search />
    </header>
  );
};

export default Header;
