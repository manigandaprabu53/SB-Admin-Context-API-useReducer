import React from 'react'
export const DashBoardContext = React.createContext();

function DashBoardContextComponent({children}) {
    let data = [
        {
            title: "Earnings (Monthly)",
            value: "$40,000",
            icon: "fa-calendar",
            color: "primary",
            isProgress: false
        },
        {
            title: "Earnings (Annual)",
            value: "$215,000",
            icon: "fa-dollar-sign",
            color: "success",
            isProgress: false
        },
        {
            title: "Tasks",
            value: "50",
            icon: "fa-clipboard-list",
            color: "info",
            isProgress: true
        },
        {
            title: "Pending Requests",
            value: "18",
            icon: "fa-comments",
            color: "warning",
            isProgress: false
        }
    ]
  return <DashBoardContext.Provider value={data}>
    {children}
  </DashBoardContext.Provider>
}

export default DashBoardContextComponent