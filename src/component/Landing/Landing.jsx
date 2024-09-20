import React from "react";
import "./styles.css";
import { Cards } from "../Cards/Cards";
import Footer from "../Footer/Footer";
import DesignCard from "../DesignCard/DesginCard";
import Register from "../Register/Register";
const Landing = () => {

  const data=[
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
    ,
      title:"Scholarship Facility",
      description:"One make creepeth, man bearing theira firmament won't great heaven"
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
    ,
      title:"Sell Online Course",
      description:"One make creepeth, man bearing theira firmament won't great heaven"
    },
    {
      icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
    ,
      title:"Global Certification",
      description:"One make creepeth, man bearing theira firmament won't great heaven"
    }
  ]

const cardData=[
  {
    image:"https://themewagon.github.io/edustage/img/courses/c3.jpg",
    title:"Computer Engineering",
    description:"One make creepeth man bearing their one firmament won't fowl meat over sea ",
    name:"Cameron",
    followCount:"25",
    likeCount:"30",
    displayPic:"https://themewagon.github.io/edustage/img/courses/author1.png"
  },
  {
    image:"https://themewagon.github.io/edustage/img/courses/c2.jpg",
    title:"Social Media Network",
    description:"One make creepeth man bearing their one firmament won't fowl meat over sea",
    name:"Cameron de",
    followCount:"40",
    likeCount:"450",
    displayPic:"https://themewagon.github.io/edustage/img/courses/author3.png"
  },
  {
    image:"https://themewagon.github.io/edustage/img/courses/c1.jpg",
    title:"Custom Product Design",
    description:"One make creepeth man bearing their one firmament won't fowl meat over sea",
    name:"Cameron jr",
    followCount:"555",
    likeCount:"1523",
    displayPic:"https://themewagon.github.io/edustage/img/courses/author2.png"
  }
]

  return (
    <div>
      <div className="carousle-point">
        <img
          src="https://themewagon.github.io/edustage/img/banner/home-banner.jpg"
          alt="main-image"
        />
        <div className="c-point1">
          <span>BEST ONLINE EDUCATION SERVICE IN THE WORLD</span>
          <h1>ONE STEP AHEAD THIS SEASON</h1>
          <div className="btn-cpoint1">
            <button className="btn-1">Learn More</button>
            <button className="btn-2">See Course</button>
          </div>
        </div>
      </div>
      <div className="awesome-div">
        <div>
          <h2>Awesome Features</h2>
          <span>Replenish man have thing gathering lights yielding shall you</span>
        </div>
<div className="card-box">
{data.map((item, index)=><Cards key={index} items={item}/>)}
</div>
      </div>
<Register/>
      <div className="awesome-div">
        <div>
          <h2>Our Populur Topics In React</h2>
          <span>Replenish man have thing gathering lights yielding shall you</span>
        </div>
<div className="card-box">
{cardData.map((item, index)=><DesignCard key={index} items={item}/>)}
</div>
      </div>
    </div>
  );
};

export default Landing;
