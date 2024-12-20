// Import required dependencies
import { FaBars } from "react-icons/fa";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

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
    <div className="flex h-screen">
      {/* Options Section */}
      <div className="w-1/4 bg-gray-100 p-4">
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

const Profile = () => {
  return (
    <div className="p-4 border border-gray-300 rounded">
      <h2 className="text-lg font-bold mb-4">Profile</h2>
      <p>Name: John Doe</p>
      <p>Email: john.doe@example.com</p>
    </div>
  );
};

const BlogCard = ({ blog }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded">
      <h3 className="text-lg font-bold">{blog.title}</h3>
      <p className="text-sm text-gray-600">{blog.category}</p>
      <p className="mt-2 text-gray-700">{blog.content.slice(0, 100)}...</p>
    </div>
  );
};

const Dashboard = ({ blogs, selectedCategory, setSelectedCategory }) => {
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Filter by Category:</h2>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded"
        >
          <option value="All">All</option>
          {[...new Set(blogs.map((blog) => blog.category))].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "React Basics", category: "Technology", content: "Learn the basics of React.js." },
    { id: 2, title: "Healthy Eating", category: "Health", content: "Tips for maintaining a balanced diet." },
    { id: 3, title: "Travel Tips", category: "Travel", content: "How to travel on a budget." },
    { id: 4, title: "Yoga for Beginners", category: "Health", content: "Simple yoga exercises to start with." },
    { id: 5, title: "JavaScript Tricks", category: "Technology", content: "Useful tips for JavaScript developers." },
    { id: 6, title: "Mountain Adventures", category: "Travel", content: "Exploring the mountains." },
    { id: 7, title: "React vs Vue", category: "Technology", content: "Comparison between React and Vue." },
    { id: 8, title: "Mental Wellness", category: "Health", content: "How to maintain mental health." },
    { id: 9, title: "Beach Destinations", category: "Travel", content: "Top beaches to visit." },
    { id: 10, title: "Node.js Basics", category: "Technology", content: "Introduction to Node.js." },
    { id: 11, title: "Fitness Routines", category: "Health", content: "Daily fitness routines for everyone." },
    { id: 12, title: "JavaScript ES6", category: "Technology", content: "Key features of ES6." },
    { id: 13, title: "City Tours", category: "Travel", content: "Best city tours around the world." },
    { id: 14, title: "React Hooks", category: "Technology", content: "Understanding React hooks." },
    { id: 15, title: "Stress Management", category: "Health", content: "How to handle stress." },
    { id: 16, title: "Desert Adventures", category: "Travel", content: "Exploring the deserts." },
    { id: 17, title: "Frontend Frameworks", category: "Technology", content: "Popular frontend frameworks." },
    { id: 18, title: "Healthy Snacks", category: "Health", content: "Quick and healthy snack ideas." },
    { id: 19, title: "Island Getaways", category: "Travel", content: "Best islands to visit." },
    { id: 20, title: "CSS Tricks", category: "Technology", content: "Advanced CSS techniques." },
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
      <div className="p-4">
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
          <Route path="/contact" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
