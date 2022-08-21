import React from "react"
import { useState } from "react"
import { AnimateSharedLayout } from "framer-motion"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded? (
        
        'Expanded'
        ):
        <CompactCard param ={props}/>
        }
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param}) {
  const Png = param.png;
  return (
    <div className="CompactCard">
      <div className="radialBar">
      <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}`}
        />

          
      </div>
      <div className="detail">
        <Png />
        <span>No.{param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}
 



export default Card