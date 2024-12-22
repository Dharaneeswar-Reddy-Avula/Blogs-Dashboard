import React from "react";
import BlogApp from "../Pages/BlogApp";

// Assuming ManageArticles is another component


// Profile component
import { Routes, Route, Link, Outlet } from "react-router-dom"; // Import Outlet for nested routes

// Profile component
const Profile = () => {
  return (
    <div className="p-4 border border-gray-300 rounded text-white">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <nav>
        <ul className="flex space-x-4 py-[10px]">
          <li>
            <Link to="analytics" className="bg-teal-400 p-[10px] text-black font-semibold rounded-lg">Analytics</Link> {/* Relative Path */}
          </li>
          <li>
            <Link to="manage-articles" className="bg-teal-400 p-[10px] text-black font-semibold rounded-lg">Manage Articles</Link> {/* Relative Path */}
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
  // Sample analytics data for different blogs
  const blogData = {
    "InnovateHub": [
      { name: "Jan", views: 4000, likes: 2400, shares: 2400, comments: 2000 },
      { name: "Feb", views: 3000, likes: 1398, shares: 2210, comments: 2400 },
      { name: "Mar", views: 2000, likes: 9800, shares: 2290, comments: 2200 },
    ],
    "LifeSparks": [
      { name: "Jan", views: 2500, likes: 1500, shares: 800, comments: 1200 },
      { name: "Feb", views: 2700, likes: 1800, shares: 900, comments: 1300 },
      { name: "Mar", views: 3000, likes: 2100, shares: 1000, comments: 1500 },
    ],
    "EduQuest": [
      { name: "Jan", views: 6000, likes: 4200, shares: 3100, comments: 2800 },
      { name: "Feb", views: 5900, likes: 4500, shares: 3200, comments: 3000 },
      { name: "Mar", views: 6200, likes: 5000, shares: 3500, comments: 3200 },
    ],
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">Analytics Dashboard for Blogs</h2>

      {Object.keys(blogData).map((blogName) => (
        <div key={blogName} className="mb-10">
          <h3 className="text-xl font-bold mb-4">{blogName}</h3>

          {/* Circle Indicators */}
          <div className="flex space-x-8 mb-6">
            <div className="flex items-center space-x-2">
              <FaCircle className="text-blue-500" />
              <div>
                <h4 className="text-sm">Total Views</h4>
                <p className="text-xl font-bold">
                  {blogData[blogName].reduce((sum, data) => sum + data.views, 0)}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaCircle className="text-green-500" />
              <div>
                <h4 className="text-sm">Total Likes</h4>
                <p className="text-xl font-bold">
                  {blogData[blogName].reduce((sum, data) => sum + data.likes, 0)}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaCircle className="text-yellow-500" />
              <div>
                <h4 className="text-sm">Total Shares</h4>
                <p className="text-xl font-bold">
                  {blogData[blogName].reduce((sum, data) => sum + data.shares, 0)}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaCircle className="text-red-500" />
              <div>
                <h4 className="text-sm">Total Comments</h4>
                <p className="text-xl font-bold">
                  {blogData[blogName].reduce((sum, data) => sum + data.comments, 0)}
                </p>
              </div>
            </div>
          </div>

          {/* Line Chart for Views, Likes, Shares, Comments */}
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={blogData[blogName]}>
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
      ))}
    </div>
  );
};





  

// export const ManageArticles = () => {
//   const [articles, setArticles] = useState([
//     { id: 1, title: "React Basics", status: "Published" },
//     { id: 2, title: "Advanced React", status: "Draft" },
//     { id: 3, title: "React Router", status: "Archived" },
//   ]);

//   const handleStatusChange = (id, status) => {
//     const updatedArticles = articles.map((article) =>
//       article.id === id ? { ...article, status } : article
//     );
//     setArticles(updatedArticles);
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Manage Articles</h2>
//       <div className="space-y-4">
//         {articles.map((article) => (
//           <div key={article.id} className="flex justify-between items-center border p-4 rounded">
//             <span>{article.title}</span>
//             <span className="text-sm text-gray-500">{article.status}</span>
//             <div>
//               <button
//                 onClick={() => handleStatusChange(article.id, "Published")}
//                 className="text-green-500 hover:underline mr-2"
//               >
//                 Publish
//               </button>
//               <button
//                 onClick={() => handleStatusChange(article.id, "Draft")}
//                 className="text-yellow-500 hover:underline mr-2"
//               >
//                 Draft
//               </button>
//               <button
//                 onClick={() => handleStatusChange(article.id, "Archived")}
//                 className="text-red-500 hover:underline"
//               >
//                 Archive
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };



import  { useState } from "react";

// export const ManageArticles = ({ blogs, setBlogs }) => {
//   const [selectedBlog, setSelectedBlog] = useState(null); // State for the selected blog

//   const handleEdit = (blog) => {
//     console.log("Edit button clicked for:", blog); // Debug: Ensure correct blog is passed
//     setSelectedBlog(blog); // Set the blog for editing
//   };

//   const handleSave = (updatedBlog) => {
//     console.log("Saving updated blog:", updatedBlog); // Debug: Check updated data
//     const updatedBlogs = blogs.map((blog) =>
//       blog.id === updatedBlog.id ? updatedBlog : blog
//     );
//     setBlogs(updatedBlogs); // Update the blogs list
//     setSelectedBlog(null); // Exit the editor
//   };

//   const handleCancel = () => {
//     console.log("Edit cancelled"); // Debug: Check cancel action
//     setSelectedBlog(null); // Close the editor
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Manage Articles</h2>

//       {/* Blog Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="p-4 border border-gray-300 rounded shadow-md bg-white"
//           >
//             <h3 className="text-xl font-semibold">{blog.title}</h3>
//             <p className="text-gray-500">{blog.category}</p>
//             <p className="text-gray-700 text-sm">{blog.publishedDate}</p>
//             <button
//               className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               onClick={() => handleEdit(blog)}
//             >
//               Edit
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Blog Editor */}
//       {selectedBlog && (
//         <BlogEditor
//           blog={selectedBlog}
//           onSave={handleSave}
//           onCancel={handleCancel}
//         />
//       )}
//     </div>
//   );
// };




  
  


// export const ManageArticles = ({ blogs, setBlogs }) => {
//   const [selectedBlog, setSelectedBlog] = useState(null); // State for selected blog

//   const handleEdit = (blog) => {
//     setSelectedBlog(blog); // Set the selected blog for editing
//   };

//   const handleSave = (updatedBlog) => {
//     const updatedBlogs = blogs.map((blog) =>
//       blog.id === updatedBlog.id ? updatedBlog : blog
//     );
//     setBlogs(updatedBlogs);
//     setSelectedBlog(null); // Clear editor state
//   };

//   const handleCancel = () => {
//     setSelectedBlog(null); // Exit editor without saving
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Manage Articles</h2>

//       {/* Blog List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="p-4 border border-gray-300 rounded shadow-md bg-white"
//           >
//             <h3 className="text-xl font-semibold">{blog.title}</h3>
//             <p className="text-gray-500">{blog.category}</p>
//             <button
//               className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               onClick={() => handleEdit(blog)}
//             >
//               Edit
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Blog Editor */}
//       {selectedBlog && (
//         <BlogEditor
//           blog={selectedBlog}
//           onPublish={handleSave}
//           onCancel={handleCancel}
//         />
//       )}
//     </div>
//   );
// };

import { useNavigate } from 'react-router-dom';

// export const ManageArticles = ({ blogs, setBlogs }) => {
//   const navigate = useNavigate();

//   const handleEdit = (blog) => {
//     navigate('/create', { state: { blog } }); // Pass blog data to theBlogApp
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Manage Articles</h2>

//       {/* Blog List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {blogs.map((blog) => (
//           <div
//             key={blog.id}
//             className="p-4 border border-gray-300 rounded shadow-md bg-white"
//           >
//             <h3 className="text-xl font-semibold">{blog.title}</h3>
//             <p className="text-gray-500">{blog.category}</p>
//             <button
//               className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
//               onClick={() => handleEdit(blog)}
//             >
//               Edit
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


export const ManageArticles = ({ blogs, setBlogs }) => {
  const navigate = useNavigate();

  // Handle edit functionality
  const handleEdit = (blog) => {
    navigate('/create', { state: { blog } }); // Pass blog data to theBlogApp
  };

  // Handle delete functionality
  const handleDelete = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs); // Update the blogs state
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Manage Articles</h2>

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="p-4 border border-gray-300 rounded shadow-md bg-white"
          >
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p className="text-gray-500">{blog.category}</p>
            <div className="mt-2 flex space-x-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => handleEdit(blog)}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => handleDelete(blog.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
