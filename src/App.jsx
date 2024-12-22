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
import BlogApp from "./Pages/BlogApp";
import { BlogCard } from "./Components/BlogCard";
//  const BlogCard = ({ blog }) => {
//   return (
//     <Link to={`/blog/${blog.id}`} className="grid grid-cols-2 border border-1 bg-black p-4 rounded-lg shadow-md">
//       {/* Left Content */}
//       <div className="flex flex-col flex-grow">
//         {/* Author Info */}
//         <div className="flex items-center pb-3">
//           <img
//             src={blog.authorImage || "https://via.placeholder.com/40"}
//             className="h-[40px] w-[40px] rounded-full"
//             alt="profile"
//           />
//           <span className="pl-3 text-white text-lg font-medium">{blog.author}</span>
//         </div>
//         {/* Title and Subtitle */}
//         <div className="pb-4">
//           <h2 className="text-2xl font-bold text-white">{blog.title}</h2>
//           <p className="text-gray-400 text-sm">{blog.category}</p>
//         </div>
//         {/* Footer with Stats */}
//         <div className="flex items-center text-gray-400 text-sm gap-4">
//           <span className="flex items-center">
//             <FaRegStar className="mr-2" />
//             {blog.date}
//           </span>
//           <span className="flex items-center">
//             <MdOutlineWavingHand className="mr-1" />
//             {blog.likes}
//           </span>
//           <span className="flex items-center">
//             <TbMessageCircle className="mr-1" />
//             {blog.comments}
//           </span>
//           <div className="ml-auto flex items-center gap-2">
//             <CiCircleMinus className="w-[24px] h-[24px]" />
//             <GoKebabHorizontal className="w-[24px] h-[24px]" />
//             <CiSaveDown2 className="w-[24px] h-[24px]" />
//           </div>
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="flex-shrink-0">
//         <img
//           src={blog.image}
//           className="w-[150px] h-[100px]  rounded-md"
//           alt="post"
//         />
//       </div>
//     </Link>
//   );
// };
// import  {useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// const BlogDetails = ({ blogs }) => {
//   const { blogId } = useParams(); // Get blogId from the URL
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     // Find the blog with the matching blogId
//     const foundBlog = blogs.find((blog) => blog.id === parseInt(blogId));

//     if (foundBlog) {
//       setBlog(foundBlog); // Set blog data if found
//     }
//   }, [blogId, blogs]); // Re-fetch when blogId changes

//   if (!blog) return <div>Loading...</div>; // Handle loading state

//   return (
//     <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg">
//       {/* Blog Details */}
//       <h1 className="text-4xl font-bold pb-4">{blog.title}</h1>
//       <p className="text-gray-400 text-lg pb-4">{blog.category}</p>

//       {/* Author and Date */}
//       <div className="flex items-center pb-4">
//         <img
//           src="https://via.placeholder.com/40"
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
//           className="w-[400px] h-[400px]  rounded-md"
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
// const Dashboard = ({ blogs, selectedCategory, setSelectedCategory }) => {
//   const filteredBlogs =
//     selectedCategory === "All"
//       ? blogs
//       : blogs.filter((blog) => blog.category === selectedCategory);

//   // Extract unique categories
//   const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

//   return (
//     <div>
//       <div className="mb-6">
//         <h2 className="text-xl font-semibold mb-4">Filter by Category:</h2>
//         <div className="flex gap-4">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
//                 selectedCategory === category
//                   ? "bg-blue-500 text-white shadow-md"
//                   : "bg-gray-100 text-gray-700 hover:bg-blue-100"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//       {filteredBlogs.map((blog) => (
//         <BlogCard key={blog.id} blog={blog} />
//       ))}
//     </div>

//     </div>
//   );
// };
// import { useLocation } from 'react-router-dom';
// const App = () => {
//   const [blogs, setBlogs] = useState([
//     {
//       id: 1,
//       title: "React Basics",
//       category: "Technology",
//       Description: "Learn the basics of React.js.",
//       image: "https://images.pexels.com/photos/1181670/pexels-photo-1181670.jpeg", // Image from Pexels
//       video: "https://www.pexels.com/video/coding-on-laptop-855499/", // Video from Pexels
//       codeSnippet: null,
//       author: "Kris Gage",
//       date: "August 3, 2017",
//       likes: "146k",
//       comments: "1024",
//     },
//     {
//       id: 2,
//       title: "Healthy Eating",
//       category: "Health",
//       Description: "Tips for maintaining a balanced diet.",
//       image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg", // Image from Pexels
//       video: "https://www.pexels.com/video/a-healthy-food-salad-bowl-1435739/", // Video from Pexels
//       codeSnippet: null,
//       author: "Jane Doe",
//       date: "September 10, 2020",
//       likes: "200k",
//       comments: "1500",
//     },
//     {
//       id: 3,
//       title: "Travel Tips",
//       category: "Travel",
//       Description: "How to travel on a budget.",
//       image: "https://images.pexels.com/photos/3271826/pexels-photo-3271826.jpeg", // Image from Pexels
//       video: "https://www.pexels.com/video/people-traveling-858040/", // Video from Pexels
//       codeSnippet: null,
//       author: "Alex Brown",
//       date: "June 15, 2019",
//       likes: "120k",
//       comments: "800",
//     },
  
//   ]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const handlePublish = (newBlog) => {
//     setBlogs([...blogs, newBlog]);
//   };
//   const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false); 
  
//     const toggleMenu = () => {
//       setIsOpen(!isOpen); 
//     };
  
//     const closeMenu = () => {
//       setIsOpen(false); 
//     }; 
//     return (
//       <div>
//         {/* Navbar */}
//         <div className="fixed top-0 left-0 w-full h-[60px] bg-black bg-opacity-80 flex justify-between items-center px-5 z-50">
//           {/* Logo */}
//           <div className="text-white flex flex-row gap-[10px]">
//             <p className="text-[30px] font-bold">Blogs</p>
//           </div>
//           {/* Hamburger Icon for Mobile */}
//           <div className="md:hidden text-white cursor-pointer" onClick={toggleMenu}>
//             <FaBars />
//           </div>
//           {/* Desktop Navigation Links */}
//           <ul className="hidden md:flex gap-[30px] items-center">
//           <li className="text-white font-bold text-[15px] cursor-pointer">
//           <Link to="/" className="px-4 py-2 bg-blue-500 text-white rounded">Dashboard</Link>
//           </li>
//             <li className="text-white font-bold text-[15px] cursor-pointer">
//               <Link to="/Create">Create</Link>
//             </li>
//             <li className="text-white font-bold text-[15px] cursor-pointer">
//               <Link to="/Contact">Contact</Link>
//             </li>
//             <li><FaUserCircle className="text-white text-[20px]"/></li>
//           </ul>
//         </div>  
//         {/* Mobile Menu (Slide-in sidebar) */}
//         <div className={`md:hidden fixed top-0 left-0 h-full w-[250px] bg-black z-40 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
//           <ul className="flex flex-col items-center space-y-[20px] mt-[50px] py-5">
//             <li className="text-white list-none cursor-pointer">
//               <Link to="/Create" onClick={closeMenu}>Create</Link>
//             </li>
//             <li className="text-white list-none cursor-pointer">
//               <Link to="/Contact" onClick={closeMenu}>Contact</Link>
//             </li>
//           </ul>
//         </div> 
//         {/* Description below the Navbar */}
//         <div className="pt-[60px]"> {/* Add padding-top equal to the height of the navbar */}
//           {/* Your page Description will go here */}
//         </div>
//       </div>
//     );
//   };
//   return (
//     <Router>
//       <Navbar />
//       <div className="p-4 bg-black bg-opacity-80">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Dashboard
//                 blogs={blogs}
//                 selectedCategory={selectedCategory}
//                 setSelectedCategory={setSelectedCategory}
//               />
//             }
//           />
//           <Route path="/create" element={<BlogApp onPublish={handlePublish} />} />
//           <Route path="/Contact/" element={<Profile />}>
//           {/* Nested routes for analytics and manage-articles */}
//           <Route path="analytics" element={<Analytics />} />
//           <Route path="manage-articles" element={<ManageArticles blogs={blogs} setBlogs={setBlogs} />} />
//         </Route>
//           <Route path="/blog/:blogId" element={<BlogDetails blogs={blogs}/>} />
          
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
import { Menu, UserCircle } from 'lucide-react';
import { BlogDetails } from './Components/BlogDetails';
import { Dashboard } from './Components/Dashboard';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-[60px] bg-gray-900 border-b border-gray-800 flex justify-between items-center px-5 z-50">
        <div className="text-teal-500 flex flex-row gap-[10px]">
          <p className="text-[30px] font-bold">Blogs</p>
        </div>
        <div className="md:hidden text-teal-500 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <Menu />
        </div>
        <ul className="hidden md:flex gap-[30px] items-center">
          <li>
            <Link to="/" className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/create" className="text-gray-300 hover:text-teal-500 transition-colors">
              Create
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-300 hover:text-teal-500 transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <UserCircle className="text-teal-500 w-6 h-6" />
          </li>
        </ul>
      </div>
      
      <div className={`md:hidden fixed top-0 left-0 h-full w-[250px] bg-gray-900 border-r border-gray-800 z-40 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <ul className="flex flex-col items-center space-y-[20px] mt-[50px] py-5">
          <li>
            <Link to="/create" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-teal-500">
              Create
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-teal-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="pt-[60px]"></div>
    </div>
  );
};

const App = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "React Basics",
      category: "Technology",
      description: "Learn the basics of React.js.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      video: "https://www.pexels.com/video/coding-on-laptop-855499/",
      author: "Kris Gage",
      date: "August 3, 2017",
      likes: "146k",
      comments: "1024",
      codeSnippet: `
        // React component example
        import React, { useState } from 'react';
        function Counter() {
          const [count, setCount] = useState(0);
          return (
            <div>
              <p>You clicked {count} times</p>
              <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
          );
        }
      `
    },
    {
      id: 2,
      title: "GraphQL vs REST APIs",
      category: "Technology",
      description: "Explore the differences and use cases for GraphQL and REST APIs.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
      video: "https://www.pexels.com/video/api-implementation-2376116/",
      author: "Ethan Brown",
      date: "September 15, 2023",
      likes: "125k",
      comments: "820",
      codeSnippet: `
        // Example of a simple REST API request
        fetch('https://api.example.com/users')
          .then(response => response.json())
          .then(data => console.log(data));
      `
    },
    {
      id: 3,
      title: "How to Build REST APIs",
      category: "Backend Development",
      description: "Step-by-step tutorial to create RESTful APIs using Node.js.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      video: "https://www.pexels.com/video/api-development-workflow-852456/",
      author: "James Doe",
      date: "March 27, 2019",
      likes: "98k",
      comments: "902",
      codeSnippet: `
        // Express.js REST API example
        const express = require('express');
        const app = express();
        app.get('/users', (req, res) => {
          res.json([{ name: 'John Doe' }, { name: 'Jane Doe' }]);
        });
        app.listen(3000, () => console.log('Server running on port 3000'));
      `
    },
    {
      id: 4,
      title: "Optimizing React Apps for Performance",
      category: "Technology",
      description: "Tips and techniques for optimizing the performance of React applications.",
      image: "https://images.pexels.com/photos/406458/pexels-photo-406458.jpeg",
      video: "https://www.pexels.com/video/code-optimization-overview-855489/",
      author: "Kevin Harris",
      date: "July 18, 2020",
      likes: "141k",
      comments: "815",
      codeSnippet: `
        // React.memo for component optimization
        const MyComponent = React.memo(function MyComponent(props) {
          return <h1>{props.name}</h1>;
        });
      `
    },
    {
      id: 5,
      title: "Web Accessibility Basics",
      category: "Design",
      description: "Learn how to make your websites accessible to everyone.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
      video: "https://www.pexels.com/video/accessibility-essentials-854677/",
      author: "Lauren Smith",
      date: "November 22, 2018",
      likes: "93k",
      comments: "601",
      codeSnippet: `
        // Example of accessible form elements
        <label for="email">Email</label>
        <input type="email" id="email" name="email" aria-required="true" />
      `
    },
    {
      id: 6,
      title: "Python for Data Analysis",
      category: "Data Science",
      description: "Explore Python libraries for efficient data analysis and visualization.",
      image: "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg",
      video: "https://www.pexels.com/video/data-analysis-workflow-855672/",
      author: "Sophia Liu",
      date: "February 10, 2021",
      likes: "129k",
      comments: "708",
      codeSnippet: `
        # Example of using Pandas for data analysis
        import pandas as pd
        data = pd.read_csv('data.csv')
        print(data.head())
      `
    },
    {
      id: 7,
      title: "Cloud Computing 101",
      category: "Technology",
      description: "Understand the basics of cloud computing and its applications.",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg",
      video: "https://www.pexels.com/video/cloud-technology-explained-856002/",
      author: "Daniel Kim",
      date: "May 20, 2021",
      likes: "125k",
      comments: "812",
      codeSnippet: `
        // Basic cloud service usage example (AWS)
        const AWS = require('aws-sdk');
        const s3 = new AWS.S3();
        s3.listBuckets((err, data) => {
          if (err) console.log(err);
          else console.log(data.Buckets);
        });
      `
    },
    {
      id: 8,
      title: "Docker Essentials",
      category: "DevOps",
      description: "Learn the fundamentals of Docker for containerization.",
      image: "https://images.pexels.com/photos/270407/pexels-photo-270407.jpeg",
      video: "https://www.pexels.com/video/docker-container-overview-855997/",
      author: "Ethan Carter",
      date: "June 30, 2022",
      likes: "108k",
      comments: "745",
      codeSnippet: `
        # Dockerfile example
        FROM node:14
        WORKDIR /app
        COPY . .
        RUN npm install
        CMD ["node", "index.js"]
      `
    },
    {
      id: 9,
      title: "Version Control with Git",
      category: "Programming",
      description: "Master version control using Git for collaborative development.",
      image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg",
      video: "https://www.pexels.com/video/git-essentials-guide-856006/",
      author: "Chloe Rivera",
      date: "March 12, 2019",
      likes: "94k",
      comments: "689",
      codeSnippet: `
        // Basic Git commands
        git init
        git add .
        git commit -m "Initial commit"
        git push origin master
      `
    },
    {
      id: 10,
      title: "Deep Dive into TypeScript",
      category: "Programming",
      description: "Upgrade your JavaScript skills with TypeScript for better type safety.",
      image: "https://images.pexels.com/photos/270407/pexels-photo-270407.jpeg",
      video: "https://www.pexels.com/video/typescript-in-action-852456/",
      author: "Nathan Collins",
      date: "August 5, 2020",
      likes: "111k",
      comments: "832",
      codeSnippet: `
        // TypeScript interface example
        interface Person {
          name: string;
          age: number;
        }
        const person: Person = { name: 'John', age: 30 };
      `
    },
    {
      id: 11,
      title: "Database Optimization Techniques",
      category: "Backend Development",
      description: "Learn how to optimize database performance with indexing and caching.",
      image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
      video: "https://www.pexels.com/video/database-optimization-workshop-855497/",
      author: "Sophie Bennett",
      date: "July 10, 2019",
      likes: "107k",
      comments: "770",
      codeSnippet: `
        // SQL Indexing example
        CREATE INDEX idx_name ON users (name);
      `
    },
    {
      id: 12,
      title: "Cybersecurity Best Practices",
      category: "Technology",
      description: "Tips to protect your systems and data from online threats.",
      image: "https://images.pexels.com/photos/5474293/pexels-photo-5474293.jpeg",
      video: "https://www.pexels.com/video/cybersecurity-training-session-856009/",
      author: "Oliver Davis",
      date: "January 8, 2022",
      likes: "139k",
      comments: "944",
      codeSnippet: `
        // Secure password storage example (bcrypt)
        const bcrypt = require('bcrypt');
        bcrypt.hash('password123', 10, (err, hash) => {
          console.log(hash);
        });
      `
    },
    {
      id: 13,
      title: "Intro to Kubernetes",
      category: "DevOps",
      description: "Get started with Kubernetes for container orchestration.",
      image: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg",
      video: "https://www.pexels.com/video/kubernetes-introduction-855999/",
      author: "Charlotte White",
      date: "February 17, 2020",
      likes: "116k",
      comments: "825",
      codeSnippet: `
        # Kubernetes pod creation example
        kubectl run mypod --image=nginx
      `
    },
    {
      id: 14,
      title: "Building Progressive Web Apps",
      category: "Technology",
      description: "Develop web apps that offer a native app-like experience.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg",
      video: "https://www.pexels.com/video/pwa-workshop-856004/",
      author: "Lucas Brown",
      date: "October 11, 2021",
      likes: "124k",
      comments: "798",
      codeSnippet: `
        // Service worker registration
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/service-worker.js');
        }
      `
    },
    {
      id: 15,
      title: "UX Principles",
      category: "Design",
      description: "Learn the core principles for designing user-friendly interfaces.",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
      video: "https://www.pexels.com/video/ux-design-principles-5743908/",
      author: "Mia Harris",
      date: "July 12, 2023",
      likes: "102k",
      comments: "610",
      codeSnippet: `
        // Example of UX UI element (responsive button)
        <button class="btn btn-primary">Click Me</button>
      `
    },
    {
      id: 16,
      title: "Deep Dive into TypeScript",
      category: "Technology",
      description: "Enhance your JavaScript skills with TypeScript.",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
      video: "https://www.pexels.com/video/advanced-typescript-857100/",
      author: "Jack Wilson",
      date: "June 19, 2023",
      likes: "137k",
      comments: "950",
      codeSnippet: `
        // TypeScript function example
        function greet(person: string): string {
          return 'Hello ' + person;
        }
        console.log(greet('John'));
      `
    },
    {
      id: 17,
      title: "Cybersecurity Essentials",
      category: "Technology",
      description: "Protect your data and learn the basics of cybersecurity.",
      image: "https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg",
      video: "https://www.pexels.com/video/cybersecurity-tips-857101/",
      author: "Sophia Evans",
      date: "April 25, 2023",
      likes: "145k",
      comments: "1.3k",
      codeSnippet: `
        // Firewall example (Node.js)
        const http = require('http');
        const firewall = require('firewall');
        firewall.block(ip);
      `
    },
    {
      id: 18,
      title: "Getting Started with Firebase",
      category: "Backend Development",
      description: "Use Firebase for seamless backend integration.",
      image: "https://images.pexels.com/photos/270407/pexels-photo-270407.jpeg",
      video: "https://www.pexels.com/video/firebase-workshop-856000/",
      author: "Daniel Moore",
      date: "November 5, 2022",
      likes: "125k",
      comments: "880",
      codeSnippet: `
        // Firebase Firestore example
        const firebase = require('firebase');
        const db = firebase.firestore();
        db.collection('users').get().then(snapshot => {
          snapshot.forEach(doc => console.log(doc.data()));
        });
      `
    }
  ]);
  

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handlePublish = (newBlog) => {
    setBlogs([...blogs, { ...newBlog, id: Date.now() }]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Navbar />
        <div className="container mx-auto p-4">
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
            <Route path="/create" element={<BlogApp onPublish={handlePublish} />} />
           <Route path="/contact" element={<Profile />}>
  <Route path="analytics" element={<Analytics />} />
  <Route path="manage-articles" element={<ManageArticles />} />
</Route>

           
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;