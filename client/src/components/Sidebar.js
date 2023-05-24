import React from 'react';

function Sidebar() {
  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-lg font-bold mb-4">Sidebar</h2>
      <ul>
        <li><a href="#">Update Details</a></li>
        <li><a href="#">Automated Test</a></li>
        <li><a href="#">Resources</a></li>
        <li><a href="#">History</a></li>
        <li><a href="#">Remarks</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
