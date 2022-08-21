// Sidebar imports


import {
    UilEstate,
    UilFileSearchAlt,
    UilDesktopAlt,
    UilPackage,
    UilShieldCheck,
    UilSignOutAlt,
   

}

 from "@iconscout/react-unicons"

 export const SidebarData = [

    {
        icon: UilEstate,
        heading: "Dashboard",
      },
      {
        icon: UilFileSearchAlt,
        heading: "Pullout tackert",
      },
      {
        icon: UilDesktopAlt,
        heading: "Computer and Device",
      },
      {
        icon: UilPackage,
        heading: 'Techcon Tracker'
      },
      {
        icon: UilShieldCheck,
        heading: 'Warranty List'
      },

 ];


 export const cardsData = [
  {
    title: "Pending Deployment",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    // dito yung value data 
    barValue: 14,
    png: UilPackage,
    series: [
      {
        name: "Pending DeploymentSales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },

  //--------------------

  {
    title: "Available Computer and Unit",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    // dito yung value data 
    barValue: 80,
    png: UilPackage,
    series: [
      {
        name: "Available Computer and Unit",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },

  {
    title: "Total Pending Techcon",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    // dito yung value data 
    barValue: 35,
    png: UilPackage,
    series: [
      {
        name: "Total Pending Techcon",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },

  {
    title: "Total Pending Rollout",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    // dito yung value data 
    barValue: 36,
    png: UilPackage,
    series: [
      {
        name: "Total Pending Rollout",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Total of Warrant ",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    // dito yung value data 
    barValue: 70,
    png: UilPackage,
    series: [
      {
        name: "Total of Warrant ",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },


  {
    title: "Total Pending Rollout",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    // dito yung value data 
    barValue: 70,
    value: "25",
    png: UilPackage,
    series: [
      {
        name: "Total Pending Rollout",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },

  {
    title: "Total Repair",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    // dito yung value data 
    barValue: 70,
    value: "25",
    png: UilPackage,
    series: [
      {
        name: "Total Repair",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },




]