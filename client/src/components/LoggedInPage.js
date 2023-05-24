import React from 'react';
import Sidebar from './Sidebar';

function LoggedInPage() {
  return (
    <div className="container mx-auto flex flex-wrap py-6">
      <div className="w-full md:w-1/4">
        <Sidebar />
      </div>
      <div className="w-full md:w-3/4 px-4">
        <h1 className="text-2xl font-bold mb-4">Welcome to the logged-in page!</h1>
        <p>
          Here, you can access various automated tests, update your patient medical data, view your test history, and access other resources.
        </p>
        <p>
          To get started, use the sidebar to navigate to the different sections of the website.
        </p>
      </div>
    </div>
  );
}

export default LoggedInPage;
