import React from "react"
import { useState } from "react"
import { AnimateSharedLayout } from "framer-motion"
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import './Card.css'
import {UilTimes} from'@iconscout/react-unicons'


// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded? 
        
        <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>:
        <CompactCard param ={props} setExpanded={()=>setExpanded(true)}/>
        }
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded}) {
  const Png = param.png;
  return (
    <div className="CompactCard" 
    style={{
      background : param.color.backGround,
      boxShadow: param.color.boxShadow
    }}
    
    onClick={setExpanded}
    >
      <div className="radialBar">
      <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}`}
        />
        <span>{param.title}</span>
          
      </div>
      <div className="detail">
        <Png />
      </div>
    </div>
  );
}
 
// ExpandedCard
function ExpandedCard({param, setExpanded}){
return(
  <div className="ExpandedCard"
  style={{
    background: param.color.backGround,
    boxShadow: param.color.boxShadow,
  }}>

<div style={{ cursor: "pointer", color: "white" , position:"absolute", right: '30px', top: '30px'}}>
    <UilTimes onClick={setExpanded}/>
  </div>
  <span>{param.title}</span>
  <div className="chartContainer">
    Chart
  </div>
   <span>Last 24 hours</span>
  </div>
)

}



export default Card