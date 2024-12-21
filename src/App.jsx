// Import required dependencies
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./Components/Profile";import { FaRegStar } from "react-icons/fa";
import { MdOutlineWavingHand } from 'react-icons/md';
import { TbMessageCircle } from 'react-icons/tb';
import { CiCircleMinus, CiSaveDown2 } from 'react-icons/ci';
import { GoKebabHorizontal } from 'react-icons/go';
import { Analytics } from "./Components/Profile";
import { ManageArticles } from "./Components/Profile";
// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md p-4 flex justify-between items-center">
//       <h1 className="text-xl font-bold">Blog Dashboard</h1>
//       {/* <div className="space-x-4">
//         <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded">Dashboard</Link>
//         <Link to="/write" className="px-4 py-2 bg-blue-500 text-white rounded">Write a Blog</Link>
//         <Link to="/profile" className="px-4 py-2 bg-blue-500 text-white rounded">Profile</Link>
//       </div> */}
//     </nav>
//   );
// };


import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
const BlogEditor = ({ onPublish }) => {
  const [title, setTitle] = useState("");
  const [contentBlocks, setContentBlocks] = useState([]);
  const [category, setCategory] = useState("");

  const handleAddBlock = (type) => {
    const newBlock = { id: Date.now(), type, value: "" };
    setContentBlocks([...contentBlocks, newBlock]);
  };

  const handleRemoveBlock = (id) => {
    setContentBlocks(contentBlocks.filter((block) => block.id !== id));
  };

  const handleBlockChange = (id, value) => {
    const updatedBlocks = contentBlocks.map((block) =>
      block.id === id ? { ...block, value } : block
    );
    setContentBlocks(updatedBlocks);
  };

  const handleImageUpload = (id, file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      handleBlockChange(id, e.target.result); // Base64 image string
    };
    reader.readAsDataURL(file);
  };

  const handleImageUrl = (id, url) => {
    handleBlockChange(id, url); // Direct URL input for image
  };

  const handleVideoUpload = (id, file) => {
    const url = URL.createObjectURL(file);
    handleBlockChange(id, url); // URL for uploaded video
  };

  const handleVideoUrl = (id, url) => {
    handleBlockChange(id, url); // Direct URL input for video
  };

  const handlePublish = () => {
    const content = contentBlocks.map((block) => ({
      type: block.type,
      value: block.value,
    }));
    const newBlog = {
      id: Date.now(),
      title,
      category,
      content,
    };
    onPublish(newBlog);
    setTitle("");
    setCategory("");
    setContentBlocks([]);
  };

  return (
    <div className="flex h-screen bg-[black] text-white">
      {/* Options Section */}
      <div className="w-1/4 bg-black p-4">
        <h3 className="text-lg font-bold mb-4">Components</h3>
        <button
          className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
          onClick={() => handleAddBlock("title")}
        >
          Add Title
        </button>
        <button
          className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
          onClick={() => handleAddBlock("subtitle")}
        >
          Add Subtitle
        </button>
        <button
          className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
          onClick={() => handleAddBlock("description")}
        >
          Add Description
        </button>
        <button
          className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
          onClick={() => handleAddBlock("image")}
        >
          Add Image
        </button>
        <button
          className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
          onClick={() => handleAddBlock("imageUrl")}
        >
          Add Image URL
        </button>
        <button
          className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
          onClick={() => handleAddBlock("video")}
        >
          Add Video
        </button>
        <button
          className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
          onClick={() => handleAddBlock("videoUrl")}
        >
          Add Video URL
        </button>
        <button
          className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
          onClick={() => handleAddBlock("codeSnippet")}
        >
          Add Code Snippet
        </button>
      </div>

      {/* Editor and Preview */}
      <div className="flex-1 flex">
        {/* Editor Section */}
        <div className="w-1/2 p-4">
          <h3 className="text-lg font-bold mb-4">Blog Editor</h3>
          <input
            type="text"
            placeholder="Enter Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="text"
            placeholder="Enter Blog Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          {contentBlocks.map((block) => (
            <div key={block.id} className="mb-4">
              {block.type === "title" && (
                <input
                  type="text"
                  placeholder="Enter Title"
                  value={block.value}
                  onChange={(e) =>
                    handleBlockChange(block.id, e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
              {block.type === "subtitle" && (
                <input
                  type="text"
                  placeholder="Enter Subtitle"
                  value={block.value}
                  onChange={(e) =>
                    handleBlockChange(block.id, e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              )}
              {block.type === "description" && (
                <textarea
                  placeholder="Enter Description"
                  value={block.value}
                  onChange={(e) =>
                    handleBlockChange(block.id, e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                ></textarea>
              )}
              {block.type === "image" && (
                <>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      handleImageUpload(block.id, e.target.files[0])
                    }
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {block.value && (
                    <img
                      src={block.value}
                      alt="Uploaded"
                      className="w-full h-auto mt-2"
                    />
                  )}
                </>
              )}
              {block.type === "imageUrl" && (
                <>
                  <input
                    type="text"
                    placeholder="Enter Image URL"
                    value={block.value}
                    onChange={(e) =>
                      handleImageUrl(block.id, e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </>
              )}
              {block.type === "video" && (
                <>
                  <input
                    type="file"
                    accept="video/*"
                    onChange={(e) =>
                      handleVideoUpload(block.id, e.target.files[0])
                    }
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  {block.value && (
                    <video
                      controls
                      src={block.value}
                      className="w-full h-auto mt-2"
                    ></video>
                  )}
                </>
              )}
              {block.type === "videoUrl" && (
                <>
                  <input
                    type="text"
                    placeholder="Enter Video URL"
                    value={block.value}
                    onChange={(e) =>
                      handleVideoUrl(block.id, e.target.value)
                    }
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </>
              )}
              {block.type === "codeSnippet" && (
                <textarea
                  placeholder="Enter Code Snippet"
                  value={block.value}
                  onChange={(e) =>
                    handleBlockChange(block.id, e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded font-mono"
                ></textarea>
              )}
              <button
                className="mt-2 px-4 py-1 bg-red-500 text-white rounded"
                onClick={() => handleRemoveBlock(block.id)}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            className="w-full py-2 bg-green-500 text-white rounded"
            onClick={handlePublish}
          >
            Publish
          </button>
        </div>

        {/* Preview Section */}
        <div className="w-1/2 p-4 border-l border-gray-300">
          {title && <h2 className="text-2xl font-bold">{title}</h2>}
          {contentBlocks.map((block) => (
            <div key={block.id} className="mb-4">
              {block.type === "title" && (
                <h1 className="text-xl font-bold">{block.value}</h1>
              )}
              {block.type === "subtitle" && (
                <h2 className="text-lg font-semibold">{block.value}</h2>
              )}
              {block.type === "description" && (
                <p className="text-base">{block.value}</p>
              )}
              {block.type === "image" && (
                <img
                  src={block.value}
                  alt="Preview"
                  className="w-full h-auto"
                />
              )}
              {block.type === "imageUrl" && (
                <img
                  src={block.value}
                  alt="Preview"
                  className="w-full h-auto"
                />
              )}
              {block.type === "video" && (
                <video
                  controls
                  src={block.value}
                  className="w-full h-64"
                ></video>
              )}
              {block.type === "videoUrl" && (
                <video
                  controls
                  src={block.value}
                  className="w-full h-64"
                ></video>
              )}
              {block.type === "codeSnippet" && (
                <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                  {block.value}
                </SyntaxHighlighter>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



// const BlogCard = ({ blog }) => {
//   return (
//     <div className="grid grid-cols-2 border border-1 bg-black p-4 rounded-lg shadow-md">
//     {/* Left Content */}
//     <div className="flex flex-col flex-grow">
//       {/* Author Info */}
//       <div className="flex items-center pb-3">
//         <img
//           src={blog.authorImage || "https://via.placeholder.com/40"}
//           className="h-[40px] w-[40px] rounded-full"
//           alt="profile"
//         />
//         <span className="pl-3 text-white text-lg font-medium">{blog.author}</span>
//       </div>

//       {/* Title and Subtitle */}
//       <div className="pb-4">
//         <h2 className="text-2xl font-bold text-white">{blog.title}</h2>
//         <p className="text-gray-400 text-sm">{blog.category}</p>
//       </div>

//       {/* Footer with Stats */}
//       <div className="flex items-center text-gray-400 text-sm gap-4">
//         <span className="flex items-center">
//           <FaRegStar className="mr-2" />
//           {blog.date}
//         </span>
//         <span className="flex items-center">
//           <MdOutlineWavingHand className="mr-1" />
//           {blog.likes}
//         </span>
//         <span className="flex items-center">
//           <TbMessageCircle className="mr-1" />
//           {blog.comments}
//         </span>
//         <div className="ml-auto flex items-center gap-2">
//           <CiCircleMinus className="w-[24px] h-[24px]" />
//           <GoKebabHorizontal className="w-[24px] h-[24px]" />
//           <CiSaveDown2 className="w-[24px] h-[24px]" />
//         </div>
//       </div>
//     </div>

//     {/* Right Image */}
//     <div className="flex-shrink-0">
//       <img
//         src={blog.image}
//         className="w-[150px] h-[100px] object-cover rounded-md"
//         alt="post"
//       />
//     </div>
//   </div>
// );
// };


const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`} className="grid grid-cols-2 border border-1 bg-black p-4 rounded-lg shadow-md">
      {/* Left Content */}
      <div className="flex flex-col flex-grow">
        {/* Author Info */}
        <div className="flex items-center pb-3">
          <img
            src={blog.authorImage || "https://via.placeholder.com/40"}
            className="h-[40px] w-[40px] rounded-full"
            alt="profile"
          />
          <span className="pl-3 text-white text-lg font-medium">{blog.author}</span>
        </div>

        {/* Title and Subtitle */}
        <div className="pb-4">
          <h2 className="text-2xl font-bold text-white">{blog.title}</h2>
          <p className="text-gray-400 text-sm">{blog.category}</p>
        </div>

        {/* Footer with Stats */}
        <div className="flex items-center text-gray-400 text-sm gap-4">
          <span className="flex items-center">
            <FaRegStar className="mr-2" />
            {blog.date}
          </span>
          <span className="flex items-center">
            <MdOutlineWavingHand className="mr-1" />
            {blog.likes}
          </span>
          <span className="flex items-center">
            <TbMessageCircle className="mr-1" />
            {blog.comments}
          </span>
          <div className="ml-auto flex items-center gap-2">
            <CiCircleMinus className="w-[24px] h-[24px]" />
            <GoKebabHorizontal className="w-[24px] h-[24px]" />
            <CiSaveDown2 className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-shrink-0">
        <img
          src={blog.image}
          className="w-[150px] h-[100px]  rounded-md"
          alt="post"
        />
      </div>
    </Link>
  );
};


// import { useParams } from 'react-router-dom'; // Import useParams to get blogId
// import {  useEffect } from 'react';

// const BlogDetails = () => {
//   const { blogId } = useParams(); // Get blogId from URL params
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     // Replace with actual data fetch (this example uses static data)
//     const fetchBlog = () => {
//       const blogresource = blog.find(blog => blog.id === parseInt(blogId)); // Find the selected blog
//       setBlog(blogresource);
//     };

//     fetchBlog();
//   }, [blogId]); // Re-fetch the blog data when blogId changes

//   if (!blog) return <div>Loading...</div>; // Handle loading state

//   return (
//     <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
//       {/* Blog Details */}
//       <h1 className="text-4xl font-bold pb-4">{blog.title}</h1>
//       <p className="text-gray-400 text-lg pb-4">{blog.category}</p>

//       {/* Author and Date */}
//       <div className="flex items-center pb-4">
//         <img
//           src={blog.authorImage || "https://via.placeholder.com/40"}
//           className="h-[40px] w-[40px] rounded-full"
//           alt="profile"
//         />
//         <span className="pl-3 text-lg font-medium">{blog.author}</span>
//         <span className="pl-3 text-gray-400 text-sm">{blog.date}</span>
//       </div>

//       {/* Content */}
//       <p className="text-lg pb-4">{blog.content}</p>

//       {/* Image */}
//       <div className="pb-4">
//         <img
//           src={blog.image}
//           className="w-full h-[400px] object-cover rounded-md"
//           alt="post"
//         />
//       </div>

//       {/* Footer */}
//       <div className="flex items-center text-gray-400 gap-4">
//         <span className="flex items-center">
//           <FaRegStar className="mr-2" />
//           {blog.likes}
//         </span>
//         <span className="flex items-center">
//           <TbMessageCircle className="mr-1" />
//           {blog.comments}
//         </span>
//       </div>
//     </div>
//   );
// };
import  {useEffect } from 'react';
import { useParams } from 'react-router-dom';


// Static blog data for testing


 // Ensure the icon is imported

const BlogDetails = ({ blogs }) => {
  const { blogId } = useParams(); // Get blogId from the URL
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Find the blog with the matching blogId
    const foundBlog = blogs.find((blog) => blog.id === parseInt(blogId));

    if (foundBlog) {
      setBlog(foundBlog); // Set blog data if found
    }
  }, [blogId, blogs]); // Re-fetch when blogId changes

  if (!blog) return <div>Loading...</div>; // Handle loading state

  return (
    <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
      {/* Blog Details */}
      <h1 className="text-4xl font-bold pb-4">{blog.title}</h1>
      <p className="text-gray-400 text-lg pb-4">{blog.category}</p>

      {/* Author and Date */}
      <div className="flex items-center pb-4">
        <img
          src="https://via.placeholder.com/40"
          className="h-[40px] w-[40px] rounded-full"
          alt="profile"
        />
        <span className="pl-3 text-lg font-medium">{blog.author}</span>
        <span className="pl-3 text-gray-400 text-sm">{blog.date}</span>
      </div>

      {/* Content */}
      <p className="text-lg pb-4">{blog.content}</p>

      {/* Image */}
      <div className="pb-4">
        <img
          src={blog.image}
          className="w-[400px] h-[400px]  rounded-md"
          alt="post"
        />
      </div>

      {/* Footer */}
      <div className="flex items-center text-gray-400 gap-4">
        <span className="flex items-center">
          <FaRegStar className="mr-2" />
          {blog.likes}
        </span>
        <span className="flex items-center">
          <TbMessageCircle className="mr-1" />
          {blog.comments}
        </span>
      </div>
    </div>
  );
};




  
 


const Dashboard = ({ blogs, selectedCategory, setSelectedCategory }) => {
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  // Extract unique categories
  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Filter by Category:</h2>
        <div className="flex gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {filteredBlogs.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>

    </div>
  );
};


const App = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "React Basics",
      category: "Technology",
      content: "Learn the basics of React.js.",
      image: "https://images.pexels.com/photos/1181670/pexels-photo-1181670.jpeg", // Image from Pexels
      video: "https://www.pexels.com/video/coding-on-laptop-855499/", // Video from Pexels
      codeSnippet: null,
      author: "Kris Gage",
      date: "August 3, 2017",
      likes: "146k",
      comments: "1024",
    },
    {
      id: 2,
      title: "Healthy Eating",
      category: "Health",
      content: "Tips for maintaining a balanced diet.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", // Image from Pexels
      video: "https://www.pexels.com/video/a-healthy-food-salad-bowl-1435739/", // Video from Pexels
      codeSnippet: null,
      author: "Jane Doe",
      date: "September 10, 2020",
      likes: "200k",
      comments: "1500",
    },
    {
      id: 3,
      title: "Travel Tips",
      category: "Travel",
      content: "How to travel on a budget.",
      image: "https://images.pexels.com/photos/3271826/pexels-photo-3271826.jpeg", // Image from Pexels
      video: "https://www.pexels.com/video/people-traveling-858040/", // Video from Pexels
      codeSnippet: null,
      author: "Alex Brown",
      date: "June 15, 2019",
      likes: "120k",
      comments: "800",
    },
    {
      id: 4,
      title: "Yoga for Beginners",
      category: "Health",
      content: "Simple yoga exercises to start with.",
      image: "https://images.pexels.com/photos/4056827/pexels-photo-4056827.jpeg", // Image from Pexels
      video: "https://www.pexels.com/video/yoga-practice-in-nature-382540/", // Video from Pexels
      codeSnippet: null,
      author: "Emily Clark",
      date: "January 20, 2021",
      likes: "85k",
      comments: "450",
    },
    {
      id: 5,
      title: "JavaScript Tricks",
      category: "Technology",
      content: "Useful tips for JavaScript developers.",
      image: "https://images.pexels.com/photos/1181670/pexels-photo-1181670.jpeg", // Image from Pexels
      video: "https://www.pexels.com/video/coding-on-laptop-855499/", // Video from Pexels
      codeSnippet: "const sum = (a, b) => a + b;",
      author: "John Smith",
      date: "October 5, 2018",
      likes: "190k",
      comments: "1100",
    },
    {
      id: 6,
      title: "Mountain Adventures",
      category: "Travel",
      content: "Exploring the mountains.",
      image: "https://images.pexels.com/photos/2166673/pexels-photo-2166673.jpeg", // Image from Pexels
      video: "https://www.pexels.com/video/mountain-climbing-1734253/", // Video from Pexels
      codeSnippet: null,
      author: "Rachel Green",
      date: "March 3, 2020",
      likes: "250k",
      comments: "1350",
    },
    {
      id: 7,
      title: "React vs Vue",
      category: "Technology",
      content: "Comparison between React and Vue.",
      image: "https://images.pexels.com/photos/1103974/pexels-photo-1103974.jpeg", // Image from Pexels
      video: "https://www.pexels.com/video/developers-working-301032/", // Video from Pexels
      codeSnippet: null,
      author: "Kris Gage",
      date: "May 14, 2019",
      likes: "300k",
      comments: "2100",
    },
    {
      id: 8,
      title: "Mental Wellness",
      category: "Health",
      content: "How to maintain mental health.",
      image: "https://images.pexels.com/photos/4510173/pexels-photo-4510173.jpeg", // Image from Pexels
      video: "https://www.pexels.com/video/calm-environment-945905/", // Video from Pexels
      codeSnippet: null,
      author: "Sophia Lee",
      date: "November 11, 2020",
      likes: "180k",
      comments: "750",
    },
    {
      id: 9,
      title: "Beach Destinations",
      category: "Travel",
      content: "Top beaches to visit.",
      image: "https://images.pexels.com/photos/1250777/pexels-photo-1250777.jpeg", // Image from Pexels
      video: "https://www.pexels.com/video/beach-and-sea-1561949/", // Video from Pexels
      codeSnippet: null,
      author: "Mark Johnson",
      date: "July 8, 2021",
      likes: "220k",
      comments: "1350",
    },
    {
      id: 10,
      title: "Node.js Basics",
      category: "Technology",
      content: "Introduction to Node.js.",
      image: "https://images.pexels.com/photos/1181670/pexels-photo-1181670.jpeg", // Image from Pexels
      video: "https://www.pexels.com/video/developers-working-301032/", // Video from Pexels
      codeSnippet: null,
      author: "Liam Carter",
      date: "April 18, 2018",
      likes: "195k",
      comments: "1200",
    },
  ]);
  
  
  
  
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handlePublish = (newBlog) => {
    setBlogs([...blogs, newBlog]);
  };
  const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); 
  
    const toggleMenu = () => {
      setIsOpen(!isOpen); 
    };
  
    const closeMenu = () => {
      setIsOpen(false); 
    };
  
    return (
      <div>
        {/* Navbar */}
        <div className="fixed top-0 left-0 w-full h-[60px] bg-black flex justify-between items-center px-5 z-50">
          {/* Logo */}
          <div className="text-white flex flex-row gap-[10px]">
            <p className="text-[30px] font-bold">Blogs</p>
          </div>
  
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
            <FaBars />
          </div>
  
          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex gap-[30px] items-center">
          <li className="text-white font-bold text-[15px] cursor-pointer">

          <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded">Dashboard</Link>
          </li>
            <li className="text-white font-bold text-[15px] cursor-pointer">
              <Link to="/Create">Create</Link>
            </li>
            <li className="text-white font-bold text-[15px] cursor-pointer">
              <Link to="/Contact">Contact</Link>
            </li>
            <li><FaUserCircle className="text-white text-[20px]"/></li>
          </ul>
        </div>
  
        {/* Mobile Menu (Slide-in sidebar) */}
        <div className={`md:hidden fixed top-0 left-0 h-full w-[250px] bg-black z-40 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <ul className="flex flex-col items-center space-y-[20px] mt-[50px] py-5">
            <li className="text-white list-none cursor-pointer">
              <Link to="/Create" onClick={closeMenu}>Create</Link>
            </li>
            <li className="text-white list-none cursor-pointer">
              <Link to="/Contact" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>
  
        {/* Content below the Navbar */}
        <div className="pt-[60px]"> {/* Add padding-top equal to the height of the navbar */}
          {/* Your page content will go here */}
        </div>
      </div>
    );
  };
  return (
    <Router>
      <Navbar />
      <div className="p-4 ">
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                blogs={blogs}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            }
          />
          <Route path="/create" element={<BlogEditor onPublish={handlePublish} />} />
          <Route path="/Contact/" element={<Profile />}>
          {/* Nested routes for analytics and manage-articles */}
          <Route path="analytics" element={<Analytics />} />
          <Route path="manage-articles" element={<ManageArticles />} />
        </Route>
          <Route path="/blog/:blogId" element={<BlogDetails blogs={blogs}/>} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;