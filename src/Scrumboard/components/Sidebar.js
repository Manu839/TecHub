import React from "react";

const Sidebar = () => {
  const sidebarMenu = ['Scrum Board -> ', 'Visual Representation', 'Prioritization', 'Easy to use', 'Flexible', 'Responsive', 'Collaboration', 'Efficiency']
  return <div className={`p-3 w-[300px] text-center font-semibold border-t  sidebar `}>
    {sidebarMenu.map((item) => <div key={item} className="mt-2 pb-4">{item}</div>)}
  </div>;
};

export default Sidebar;
