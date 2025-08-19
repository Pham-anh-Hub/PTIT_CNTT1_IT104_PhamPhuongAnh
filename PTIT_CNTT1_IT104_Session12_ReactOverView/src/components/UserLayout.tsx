import React from "react";
import "../component_css/userLayout.css";

const Header = () => {
  return (
    <>
      <div className="page-layout">
        <div className="header-page">
          <div className="head">Header</div>
          <div className="navigation">Navigation</div>
        </div>
        <div className="body-page">
          <div className="menu-body">Menu</div>
          <div className="carts">
            {Array.from({ length: 16 }, () => "Cart").map(
              (value: string, index: number) => {
                return (
                  <div className="cart" key={index}>
                    {value}
                  </div>
                );
              }
            )}
          </div>
          <div className="article">Article</div>
        </div>
      </div>
    </>
  );
};

export default Header;
