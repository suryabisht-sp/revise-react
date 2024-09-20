import React from "react";
import "./DesginCardStyles.css"
const DesignCard = ({ items }) => {
  return (
    <div className="card-container">
      <div className="image-div">
        <img src={items.image} alt="" />
        <div className="price-div">
          <p>$25</p></div>
      </div>
      <div className="context-div">
        <button className="btn-design">Design</button>
        <h3>{items.title}</h3>
        <p>{items.description}</p>
      </div>
      <div className="user-details">
        <div className="display-div"> 
        <img src={items.displayPic}  alt="dp"/>
        <p className="name-item">{items.name}</p>
        </div>
        <div className="svg-items">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <p>{items.followCount}</p>
        </div>
        <div className="svg-items">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <p>{items.likeCount}</p>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
