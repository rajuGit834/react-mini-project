import React from "react";

const Navbar = ({ title }) => {
  // console.log(title);
  return (
    <nav className="navbar" style={styles.navbar}>
      <h2>{title}</h2>
    </nav>
  );
};

const styles = {
  navbar: {
    height: "80px",
    boxShadow: "0px 5px 10px -10px black",
    textAlign: "center",
    lineHeight: "80px",
  },
};

export default Navbar;
