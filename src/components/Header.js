import React from "react";
import './Header.css'

export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"></img>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLO7XSN_taND9qG586sXzN9LtnGir6w8TEOmrKcj86fDOLVmv2FlMy5EyEW0pXNx--pE&usqp=CAU"></img>
        </a>
      </div>
    </header>
  );
}
