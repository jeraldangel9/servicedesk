import React from 'react'
import Logo from '../../imgs/logo.png'
import './Sidebar.css'
import { SidebarData } from '../../Data/Data'
import {UilSignOutAlt} from '@iconscout/react-unicons'
import { useState } from 'react'
import {Link} from 'react-router-dom'


const Sidebar = () => {

    const [selected, setSelected] = useState(0)

  return (
    <div className="Sidebars">
        {/* logo */}
        <div className="logo">
              <img src={Logo} alt=""/>
        </div>

        {/* menu */}
        <div className="menu">
            {SidebarData.map((item, index)=>{
                return(
                    <div className={selected===index?'menuItem active': 'menuItem'}
                        key={index}
                        onClick={()=>setSelected(index)}>
                        <item.icon/>
                        <Link to={'/' + item.link}>
                            {item.heading}
                        </Link>
                    </div>
                )
            })}  

            <div className="menuItem">
                <UilSignOutAlt/>
            </div>

        </div>

    </div>
  )
}

export default Sidebar