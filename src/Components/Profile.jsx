import React from "react";



// Assuming ManageArticles is another component


// Profile component
import { Routes, Route, Link, Outlet } from "react-router-dom"; // Import Outlet for nested routes

// Profile component
const Profile = () => {
  return (
    <div className="p-4 border border-gray-300 rounded">
      <h2 className="text-lg font-bold mb-4">Profile</h2>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="analytics">Analytics</Link> {/* Relative Path */}
          </li>
          <li>
            <Link to="manage-articles">Manage Articles</Link> {/* Relative Path */}
          </li>
        </ul>
      </nav>

      {/* Render the nested route here using Outlet */}
      <Outlet />
    </div>
  );
};

export default Profile;




import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { FaCircle } from "react-icons/fa";

export const Analytics = () => {
  // Sample analytics data for the chart
  const data = [
    { name: "Jan", views: 4000, likes: 2400, shares: 2400, comments: 2000 },
    { name: "Feb", views: 3000, likes: 1398, shares: 2210, comments: 2400 },
    { name: "Mar", views: 2000, likes: 9800, shares: 2290, comments: 2200 },
    { name: "Apr", views: 2780, likes: 3908, shares: 2000, comments: 2400 },
    { name: "May", views: 1890, likes: 4800, shares: 2181, comments: 2500 },
    { name: "Jun", views: 2390, likes: 3800, shares: 2500, comments: 2100 },
    { name: "Jul", views: 3490, likes: 4300, shares: 2100, comments: 2300 },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>

      {/* Views, Likes, Shares, Comments Circle Indicators */}
      <div className="flex space-x-8 mb-6">
        <div className="flex items-center space-x-2">
          <FaCircle className="text-blue-500" />
          <div>
            <h4 className="text-sm">Views</h4>
            <p className="text-xl font-bold">100k</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <FaCircle className="text-green-500" />
          <div>
            <h4 className="text-sm">Likes</h4>
            <p className="text-xl font-bold">15k</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <FaCircle className="text-yellow-500" />
          <div>
            <h4 className="text-sm">Shares</h4>
            <p className="text-xl font-bold">8k</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <FaCircle className="text-red-500" />
          <div>
            <h4 className="text-sm">Comments</h4>
            <p className="text-xl font-bold">2k</p>
          </div>
        </div>
      </div>

      {/* Line Chart for Views, Likes, Shares, Comments */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="views" stroke="#8884d8" />
          <Line type="monotone" dataKey="likes" stroke="#82ca9d" />
          <Line type="monotone" dataKey="shares" stroke="#ffc658" />
          <Line type="monotone" dataKey="comments" stroke="#ff7300" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};



  
import  { useState } from "react";

export const ManageArticles = () => {
  const [articles, setArticles] = useState([
    { id: 1, title: "React Basics", status: "Published" },
    { id: 2, title: "Advanced React", status: "Draft" },
    { id: 3, title: "React Router", status: "Archived" },
  ]);

  const handleStatusChange = (id, status) => {
    const updatedArticles = articles.map((article) =>
      article.id === id ? { ...article, status } : article
    );
    setArticles(updatedArticles);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Articles</h2>
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="flex justify-between items-center border p-4 rounded">
            <span>{article.title}</span>
            <span className="text-sm text-gray-500">{article.status}</span>
            <div>
              <button
                onClick={() => handleStatusChange(article.id, "Published")}
                className="text-green-500 hover:underline mr-2"
              >
                Publish
              </button>
              <button
                onClick={() => handleStatusChange(article.id, "Draft")}
                className="text-yellow-500 hover:underline mr-2"
              >
                Draft
              </button>
              <button
                onClick={() => handleStatusChange(article.id, "Archived")}
                className="text-red-500 hover:underline"
              >
                Archive
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


  
  
  
  