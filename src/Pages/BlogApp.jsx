// // // import React, { useState } from "react";
// // // import SyntaxHighlighter from 'react-syntax-highlighter';
// // // import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// // // // Main BlogApp Component
// // // const BlogApp = () => {
// // //   const [elements, setElements] = useState([]);

// // //   // Add new element to the blog
// // //   const addNewElement = (type, content = "") => {
// // //     const newElement = { type, content, id: Date.now() };
// // //     setElements([...elements, newElement]);
// // //   };

// // //   // Update content of a specific element
// // //   const updateElement = (id, content) => {
// // //     setElements((prevElements) =>
// // //       prevElements.map((el) =>
// // //         el.id === id ? { ...el, content } : el
// // //       )
// // //     );
// // //   };

// // //   // Handle file upload for images and videos
// // //   const handleFileUpload = (event, type) => {
// // //     const file = event.target.files[0];
// // //     if (file) {
// // //       const reader = new FileReader();
// // //       reader.onload = () => {
// // //         addNewElement(type, reader.result);
// // //       };
// // //       reader.readAsDataURL(file);
// // //     }
// // //   };

// // //   return (
// // //     <div className=" flex flex-col bg-gray-900 text-gray-100">
// // //       {/* Toolbar for Adding New Elements */}
// // //       <div className="flex flex-wrap gap-4 p-4 bg-gray-800 border-b border-gray-700">
// // //         <button
// // //           className="bg-teal-600 px-4 py-2 rounded"
// // //           onClick={() => addNewElement("heading")}
// // //         >
// // //           Add Heading
// // //         </button>
// // //         <button
// // //           className="bg-teal-600 px-4 py-2 rounded"
// // //           onClick={() => addNewElement("text")}
// // //         >
// // //           Add Text
// // //         </button>
// // //         <button
// // //           className="bg-teal-600 px-4 py-2 rounded"
// // //           onClick={() => addNewElement("blockquote")}
// // //         >
// // //           Add Blockquote
// // //         </button>
// // //         <button
// // //           className="bg-teal-600 px-4 py-2 rounded"
// // //           onClick={() => addNewElement("code")}
// // //         >
// // //           Add Code Block
// // //         </button>
// // //         <button
// // //           className="bg-teal-600 px-4 py-2 rounded"
// // //           onClick={() => addNewElement("link")}
// // //         >
// // //           Add Link
// // //         </button>
// // //         <label className="bg-teal-600 px-4 py-2 rounded cursor-pointer">
// // //           Upload Image
// // //           <input
// // //             type="file"
// // //             accept="image/*"
// // //             className="hidden"
// // //             onChange={(e) => handleFileUpload(e, "image")}
// // //           />
// // //         </label>
// // //         <label className="bg-teal-600 px-4 py-2 rounded cursor-pointer">
// // //           Upload Video
// // //           <input
// // //             type="file"
// // //             accept="video/*"
// // //             className="hidden"
// // //             onChange={(e) => handleFileUpload(e, "video")}
// // //           />
// // //         </label>
// // //       </div>

// // //       {/* Main Content: Editor and Preview */}
// // //       <div className="flex flex-grow overflow-hidden">
// // //         {/* Editor Section */}
// // //         <div className="w-1/2 p-4 overflow-y-auto border-r border-gray-700">
// // //           <div className="space-y-4">
// // //             {elements.map((item) => (
// // //               <div key={item.id}>
// // //                 {item.type === "heading" && (
// // //                   <input
// // //                     type="text"
// // //                     placeholder="Enter heading..."
// // //                     className="w-full bg-gray-800 p-2 text-gray-300 rounded"
// // //                     value={item.content}
// // //                     onChange={(e) => updateElement(item.id, e.target.value)}
// // //                   />
// // //                 )}
// // //                 {item.type === "text" && (
// // //                   <textarea
// // //                     placeholder="Enter text..."
// // //                     className="w-full bg-gray-800 p-2 text-gray-300 rounded"
// // //                     rows={4}
// // //                     value={item.content}
// // //                     onChange={(e) => updateElement(item.id, e.target.value)}
// // //                   ></textarea>
// // //                 )}
// // //                 {item.type === "blockquote" && (
// // //                   <textarea
// // //                     placeholder="Enter blockquote..."
// // //                     className="w-full bg-gray-800 p-2 text-gray-300 italic rounded"
// // //                     rows={2}
// // //                     value={item.content}
// // //                     onChange={(e) => updateElement(item.id, e.target.value)}
// // //                   ></textarea>
// // //                 )}
// // //                 {item.type === "code" && (
// // //                   <textarea
// // //                     placeholder="Enter code..."
// // //                     className="w-full bg-gray-800 p-2 text-teal-400 font-mono rounded text-wrap"
// // //                     rows={5}
// // //                     value={item.content}
// // //                     onChange={(e) => updateElement(item.id, e.target.value)}
// // //                   ></textarea>
// // //                 )}
// // //                 {item.type === "link" && (
// // //                   <input
// // //                     type="text"
// // //                     placeholder="Enter URL..."
// // //                     className="w-full bg-gray-800 p-2 text-gray-300 rounded"
// // //                     value={item.content}
// // //                     onChange={(e) => updateElement(item.id, e.target.value)}
// // //                   />
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Preview Section */}
// // //         <div className="w-1/2 p-4 overflow-y-auto">
// // //           <div className="space-y-4">
// // //             {elements.map((item) => (
// // //               <div key={item.id}>
// // //                 {item.type === "heading" && (
// // //                   <h1 className="text-2xl font-bold text-teal-500">
// // //                     {item.content || "Heading Preview"}
// // //                   </h1>
// // //                 )}
// // //                 {item.type === "text" && (
// // //                   <p className="text-gray-300">{item.content || "Text Preview"}</p>
// // //                 )}
// // //                 {item.type === "blockquote" && (
// // //                   <blockquote className="italic border-l-4 border-teal-500 pl-4 text-gray-400 text-wrap">
// // //                     {item.content || "Blockquote Preview"}
// // //                   </blockquote>
// // //                 )}
// // //                 {item.type === "code" && (
// // //                   <SyntaxHighlighter language="javascript" style={docco}>
// // //                     {item.content || "Code Block Preview"}
// // //                   </SyntaxHighlighter>
// // //                 )}
// // //                 {item.type === "image" && (
// // //                   <img
// // //                     src={item.content}
// // //                     alt="Uploaded"
// // //                     className="max-w-full h-auto rounded"
// // //                   />
// // //                 )}
// // //                 {item.type === "video" && (
// // //                   <video
// // //                     src={item.content}
// // //                     controls
// // //                     className="max-w-full h-auto rounded"
// // //                   ></video>
// // //                 )}
// // //                 {item.type === "link" && (
// // //                   <a
// // //                     href={item.content}
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                     className="text-teal-500 underline"
// // //                   >
// // //                     {item.content || "Link Preview"}
// // //                   </a>
// // //                 )}
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BlogApp;
// // import React, { useState } from "react";
// // import SyntaxHighlighter from 'react-syntax-highlighter';
// // import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// // // Main BlogApp Component
// // const BlogApp = () => {
// //   const [elements, setElements] = useState([]);
// //   const [publishedBlogs, setPublishedBlogs] = useState([]);

// //   // Add new element to the blog
// //   const addNewElement = (type, content = "") => {
// //     const newElement = { type, content, id: Date.now() };
// //     setElements([...elements, newElement]);
// //   };

// //   // Update content of a specific element
// //   const updateElement = (id, content) => {
// //     setElements((prevElements) =>
// //       prevElements.map((el) =>
// //         el.id === id ? { ...el, content } : el
// //       )
// //     );
// //   };

// //   // Handle file upload for images and videos
// //   const handleFileUpload = (event, type) => {
// //     const file = event.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onload = () => {
// //         addNewElement(type, reader.result);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   // Handle publishing the blog
// //   const handlePublish = () => {
// //     const blog = {
// //       title: "New Blog Post",
// //       elements,
// //     };
// //     setPublishedBlogs([...publishedBlogs, blog]);
// //     setElements([]); // Clear the editor after publishing
// //   };

// //   return (
// //     <div className="h-[100vh] flex flex-col bg-gray-900 text-gray-100">
// //       {/* Toolbar for Adding New Elements */}
// //       <div className="flex flex-wrap gap-4 p-4 bg-gray-800 border-b border-gray-700">
// //         <button
// //           className="bg-teal-600 px-4 py-2 rounded"
// //           onClick={() => addNewElement("heading")}
// //         >
// //           Add Heading
// //         </button>
// //         <button
// //           className="bg-teal-600 px-4 py-2 rounded"
// //           onClick={() => addNewElement("text")}
// //         >
// //           Add Text
// //         </button>
// //         <button
// //           className="bg-teal-600 px-4 py-2 rounded"
// //           onClick={() => addNewElement("blockquote")}
// //         >
// //           Add Blockquote
// //         </button>
// //         <button
// //           className="bg-teal-600 px-4 py-2 rounded"
// //           onClick={() => addNewElement("code")}
// //         >
// //           Add Code Block
// //         </button>
// //         <button
// //           className="bg-teal-600 px-4 py-2 rounded"
// //           onClick={() => addNewElement("link")}
// //         >
// //           Add Link
// //         </button>
// //         <label className="bg-teal-600 px-4 py-2 rounded cursor-pointer">
// //           Upload Image
// //           <input
// //             type="file"
// //             accept="image/*"
// //             className="hidden"
// //             onChange={(e) => handleFileUpload(e, "image")}
// //           />
// //         </label>
// //         <label className="bg-teal-600 px-4 py-2 rounded cursor-pointer">
// //           Upload Video
// //           <input
// //             type="file"
// //             accept="video/*"
// //             className="hidden"
// //             onChange={(e) => handleFileUpload(e, "video")}
// //           />
// //         </label>
// //         <input
// //           type="text"
// //           placeholder="Image URL"
// //           className="bg-gray-800 p-2 text-gray-300 rounded"
// //           onChange={(e) => addNewElement("image", e.target.value)}
// //         />
// //         <input
// //           type="text"
// //           placeholder="Video URL"
// //           className="bg-gray-800 p-2 text-gray-300 rounded"
// //           onChange={(e) => addNewElement("video", e.target.value)}
// //         />
// //         <button
// //           className="bg-teal-600 px-4 py-2 rounded"
// //           onClick={handlePublish}
// //         >
// //           Publish
// //         </button>
// //       </div>

// //       {/* Main Content: Editor and Preview */}
// //       <div className="flex flex-grow overflow-hidden">
// //         {/* Editor Section */}
// //         <div className="w-1/2 p-4 overflow-y-auto border-r border-gray-700">
// //           <div className="space-y-4">
// //             {elements.map((item) => (
// //               <div key={item.id}>
// //                 {item.type === "heading" && (
// //                   <input
// //                     type="text"
// //                     placeholder="Enter heading..."
// //                     className="w-full bg-gray-800 p-2 text-gray-300 rounded"
// //                     value={item.content}
// //                     onChange={(e) => updateElement(item.id, e.target.value)}
// //                   />
// //                 )}
// //                 {item.type === "text" && (
// //                   <textarea
// //                     placeholder="Enter text..."
// //                     className="w-full bg-gray-800 p-2 text-gray-300 rounded"
// //                     rows={4}
// //                     value={item.content}
// //                     onChange={(e) => updateElement(item.id, e.target.value)}
// //                   ></textarea>
// //                 )}
// //                 {item.type === "blockquote" && (
// //                   <textarea
// //                     placeholder="Enter blockquote..."
// //                     className="w-full bg-gray-800 p-2 text-gray-300 italic rounded"
// //                     rows={2}
// //                     value={item.content}
// //                     onChange={(e) => updateElement(item.id, e.target.value)}
// //                   ></textarea>
// //                 )}
// //                 {item.type === "code" && (
// //                   <textarea
// //                     placeholder="Enter code..."
// //                     className="w-full bg-gray-800 p-2 text-teal-400 font-mono rounded text-wrap"
// //                     rows={5}
// //                     value={item.content}
// //                     onChange={(e) => updateElement(item.id, e.target.value)}
// //                   ></textarea>
// //                 )}
// //                 {item.type === "link" && (
// //                   <input
// //                     type="text"
// //                     placeholder="Enter URL..."
// //                     className="w-full bg-gray-800 p-2 text-gray-300 rounded"
// //                     value={item.content}
// //                     onChange={(e) => updateElement(item.id, e.target.value)}
// //                   />
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Preview Section */}
// //         <div className="w-1/2 p-4 overflow-y-auto">
// //           <div className="space-y-4">
// //             {elements.map((item) => (
// //               <div key={item.id}>
// //                 {item.type === "heading" && (
// //                   <h1 className="text-2xl font-bold text-teal-500">
// //                     {item.content || "Heading Preview"}
// //                   </h1>
// //                 )}
// //                 {item.type === "text" && (
// //                   <p className="text-gray-300">{item.content || "Text Preview"}</p>
// //                 )}
// //                 {item.type === "blockquote" && (
// //                   <blockquote className="italic border-l-4 border-teal-500 pl-4 text-gray-400 text-wrap">
// //                     {item.content || "Blockquote Preview"}
// //                   </blockquote>
// //                 )}
// //                 {item.type === "code" && (
// //                   <div className="rounded-lg overflow-hidden">
// //                     <SyntaxHighlighter
// //                       language="javascript"
// //                       style={atomOneDark}
// //                       customStyle={{
// //                         margin: 0,
// //                         borderRadius: '0.5rem',
// //                         padding: '1rem',
// //                         fontSize: '0.875rem',
// //                         lineHeight: '1.5',
// //                       }}
// //                     >
// //                       {item.content || "// Code Block Preview\nconsole.log('Hello World!');"}
// //                     </SyntaxHighlighter>
// //                   </div>
// //                 )}
// //                 {item.type === "image" && (
// //                   <img
// //                     src={item.content}
// //                     alt="Uploaded"
// //                     className="max-w-full h-auto rounded"
// //                   />
// //                 )}
// //                 {item.type === "video" && (
// //                   <video
// //                     src={item.content}
// //                     controls
// //                     className="max-w-full h-auto rounded"
// //                   ></video>
// //                 )}
// //                 {item.type === "link" && (
// //                   <a
// //                     href={item.content}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                     className="text-teal-500 underline"
// //                   >
// //                     {item.content || "Link Preview"}
// //                   </a>
// //                 )}
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Dashboard Section */}
// //       <div className="bg-gray-800 p-4 border-t border-gray-700">
// //         <h2 className="text-xl font-bold text-teal-500">Published Blogs</h2>
// //         <div className="space-y-4 mt-4">
// //           {publishedBlogs.map((blog, index) => (
// //             <div key={index} className="bg-gray-700 p-4 rounded-lg">
// //               <h3 className="text-2xl font-bold text-teal-500">{blog.title}</h3>
// //               <div className="space-y-2">
// //                 {blog.elements.map((element) => (
// //                   <div key={element.id}>
// //                     {element.type === "heading" && (
// //                       <h1 className="text-xl font-bold text-teal-500">
// //                         {element.content}
// //                       </h1>
// //                     )}
// //                     {element.type === "text" && (
// //                       <p className="text-gray-300">{element.content}</p>
// //                     )}
// //                     {element.type === "image" && (
// //                       <img
// //                         src={element.content}
// //                         alt="Published"
// //                         className="max-w-full h-auto rounded"
// //                       />
// //                     )}
// //                     {element.type === "video" && (
// //                       <video
// //                         src={element.content}
// //                         controls
// //                         className="max-w-full h-auto rounded"
// //                       ></video>
// //                     )}
// //                     {element.type === "link" && (
// //                       <a
// //                         href={element.content}
// //                         target="_blank"
// //                         rel="noopener noreferrer"
// //                         className="text-teal-500 underline"
// //                       >
// //                         {element.content}
// //                       </a>
// //                     )}
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BlogApp;
// import React, { useState } from "react";
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// // Main BlogApp Component
// const BlogApp = () => {
//   const [elements, setElements] = useState([]);

//   // Add new element to the blog
//   const addNewElement = (type, content = "") => {
//     const newElement = { type, content, id: Date.now() };
//     setElements([...elements, newElement]);
//   };

//   // Update content of a specific element
//   const updateElement = (id, content) => {
//     setElements((prevElements) =>
//       prevElements.map((el) =>
//         el.id === id ? { ...el, content } : el
//       )
//     );
//   };

//   // Handle file upload for images and videos
//   const handleFileUpload = (event, type) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         addNewElement(type, reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle URL input for image and video
//   const handleUrlInput = (type) => {
//     const url = prompt(`Enter the URL of the ${type}:`);
//     if (url) {
//       addNewElement(type, url);
//     }
//   };

//   return (
//     <div className="h-[100vh] flex flex-col bg-gray-900 text-gray-100">
//       {/* Toolbar for Adding New Elements */}
//       <div className="flex flex-wrap gap-4 p-4 bg-gray-800 border-b border-gray-700">
//         <button
//           className="bg-teal-600 px-4 py-2 rounded"
//           onClick={() => addNewElement("heading")}
//         >
//           Add Heading
//         </button>
//         <button
//           className="bg-teal-600 px-4 py-2 rounded"
//           onClick={() => addNewElement("text")}
//         >
//           Add Text
//         </button>
//         <button
//           className="bg-teal-600 px-4 py-2 rounded"
//           onClick={() => addNewElement("blockquote")}
//         >
//           Add Blockquote
//         </button>
//         <button
//           className="bg-teal-600 px-4 py-2 rounded"
//           onClick={() => addNewElement("code")}
//         >
//           Add Code Block
//         </button>
//         <button
//           className="bg-teal-600 px-4 py-2 rounded"
//           onClick={() => addNewElement("link")}
//         >
//           Add Link
//         </button>
//         <label className="bg-teal-600 px-4 py-2 rounded cursor-pointer">
//           Upload Image
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={(e) => handleFileUpload(e, "image")}
//           />
//         </label>
//         <label className="bg-teal-600 px-4 py-2 rounded cursor-pointer">
//           Upload Video
//           <input
//             type="file"
//             accept="video/*"
//             className="hidden"
//             onChange={(e) => handleFileUpload(e, "video")}
//           />
//         </label>
//         {/* Buttons to Add Image and Video URL */}
//         <button
//           className="bg-teal-600 px-4 py-2 rounded"
//           onClick={() => handleUrlInput("image")}
//         >
//           Add Image URL
//         </button>
//         <button
//           className="bg-teal-600 px-4 py-2 rounded"
//           onClick={() => handleUrlInput("video")}
//         >
//           Add Video URL
//         </button>
//       </div>

//       {/* Main Content: Editor and Preview */}
//       <div className="flex flex-grow overflow-hidden">
//         {/* Editor Section */}
//         <div className="w-1/2 p-4 overflow-y-auto border-r border-gray-700">
//           <div className="space-y-4">
//             {elements.map((item) => (
//               <div key={item.id}>
//                 {item.type === "heading" && (
//                   <input
//                     type="text"
//                     placeholder="Enter heading..."
//                     className="w-full bg-gray-800 p-2 text-gray-300 rounded"
//                     value={item.content}
//                     onChange={(e) => updateElement(item.id, e.target.value)}
//                   />
//                 )}
//                 {item.type === "text" && (
//                   <textarea
//                     placeholder="Enter text..."
//                     className="w-full bg-gray-800 p-2 text-gray-300 rounded"
//                     rows={4}
//                     value={item.content}
//                     onChange={(e) => updateElement(item.id, e.target.value)}
//                   ></textarea>
//                 )}
//                 {item.type === "blockquote" && (
//                   <textarea
//                     placeholder="Enter blockquote..."
//                     className="w-full bg-gray-800 p-2 text-gray-300 italic rounded"
//                     rows={2}
//                     value={item.content}
//                     onChange={(e) => updateElement(item.id, e.target.value)}
//                   ></textarea>
//                 )}
//                 {item.type === "code" && (
//                   <textarea
//                     placeholder="Enter code..."
//                     className="w-full bg-gray-800 p-2 text-teal-400 font-mono rounded text-wrap"
//                     rows={5}
//                     value={item.content}
//                     onChange={(e) => updateElement(item.id, e.target.value)}
//                   ></textarea>
//                 )}
//                 {item.type === "link" && (
//                   <input
//                     type="text"
//                     placeholder="Enter URL..."
//                     className="w-full bg-gray-800 p-2 text-gray-300 rounded"
//                     value={item.content}
//                     onChange={(e) => updateElement(item.id, e.target.value)}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Preview Section */}
//         <div className="w-1/2 p-4 overflow-y-auto">
//           <div className="space-y-4">
//             {elements.map((item) => (
//               <div key={item.id}>
//                 {item.type === "heading" && (
//                   <h1 className="text-2xl font-bold text-teal-500">
//                     {item.content || "Heading Preview"}
//                   </h1>
//                 )}
//                 {item.type === "text" && (
//                   <p className="text-gray-300">{item.content || "Text Preview"}</p>
//                 )}
//                 {item.type === "blockquote" && (
//                   <blockquote className="italic border-l-4 border-teal-500 pl-4 text-gray-400 text-wrap">
//                     {item.content || "Blockquote Preview"}
//                   </blockquote>
//                 )}
//                 {item.type === "code" && (
//                   <div className="rounded-lg overflow-hidden">
//                     <SyntaxHighlighter
//                       language="javascript"
//                       style={atomOneDark}
//                       customStyle={{
//                         margin: 0,
//                         borderRadius: '0.5rem',
//                         padding: '1rem',
//                         fontSize: '0.875rem',
//                         lineHeight: '1.5',
//                       }}
//                     >
//                       {item.content || "// Code Block Preview\nconsole.log('Hello World!');"}
//                     </SyntaxHighlighter>
//                   </div>
//                 )}
//                 {item.type === "image" && (
//                   <img
//                     src={item.content}
//                     alt="Uploaded"
//                     className="max-w-full h-auto rounded"
//                   />
//                 )}
//                 {item.type === "video" && (
//                   <video
//                     src={item.content}
//                     controls
//                     className="max-w-full h-auto rounded"
//                   ></video>
//                 )}
//                 {item.type === "link" && (
//                   <a
//                     href={item.content}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-teal-500 underline"
//                   >
//                     {item.content || "Link Preview"}
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogApp;
// import { useState } from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// const BlogApp = ({ onPublish }) => {
//   const [title, setTitle] = useState("");
//   const [contentBlocks, setContentBlocks] = useState([]);
//   const [category, setCategory] = useState("");

//   const handleAddBlock = (type) => {
//     const newBlock = { id: Date.now(), type, value: "" };
//     setContentBlocks([...contentBlocks, newBlock]);
//   };

//   const handleRemoveBlock = (id) => {
//     setContentBlocks(contentBlocks.filter((block) => block.id !== id));
//   };

//   const handleBlockChange = (id, value) => {
//     const updatedBlocks = contentBlocks.map((block) =>
//       block.id === id ? { ...block, value } : block
//     );
//     setContentBlocks(updatedBlocks);
//   };

//   const handleImageUpload = (id, file) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       handleBlockChange(id, e.target.result); // Base64 image string
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageUrl = (id, url) => {
//     handleBlockChange(id, url); // Direct URL input for image
//   };

//   const handleVideoUpload = (id, file) => {
//     const url = URL.createObjectURL(file);
//     handleBlockChange(id, url); // URL for uploaded video
//   };

//   const handleVideoUrl = (id, url) => {
//     handleBlockChange(id, url); // Direct URL input for video
//   };

//   const handlePublish = () => {
//     const content = contentBlocks.map((block) => ({
//       type: block.type,
//       value: block.value,
//     }));
//     const newBlog = {
//       id: Date.now(),
//       title,
//       category,
//       content,
//     };
//     onPublish(newBlog);
//     setTitle("");
//     setCategory("");
//     setContentBlocks([]);
//   };

//   return (
//     <div className="flex h-screen bg-[black] text-white">
//       {/* Options Section */}
//       <div className="w-1/4 bg-black p-4">
//         <h3 className="text-lg font-bold mb-4">Components</h3>
//         <button
//           className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
//           onClick={() => handleAddBlock("title")}
//         >
//           Add Title
//         </button>
//         <button
//           className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
//           onClick={() => handleAddBlock("subtitle")}
//         >
//           Add Subtitle
//         </button>
//         <button
//           className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
//           onClick={() => handleAddBlock("description")}
//         >
//           Add Description
//         </button>
//         <button
//           className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
//           onClick={() => handleAddBlock("image")}
//         >
//           Add Image
//         </button>
//         <button
//           className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
//           onClick={() => handleAddBlock("imageUrl")}
//         >
//           Add Image URL
//         </button>
//         <button
//           className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
//           onClick={() => handleAddBlock("video")}
//         >
//           Add Video
//         </button>
//         <button
//           className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
//           onClick={() => handleAddBlock("videoUrl")}
//         >
//           Add Video URL
//         </button>
//         <button
//           className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
//           onClick={() => handleAddBlock("codeSnippet")}
//         >
//           Add Code Snippet
//         </button>
//       </div>

//       {/* Editor and Preview */}
//       <div className="flex-1 flex">
//         {/* Editor Section */}
//         <div className="w-1/2 p-4">
//           <h3 className="text-lg font-bold mb-4">Blog Editor</h3>
//           <input
//             type="text"
//             placeholder="Enter Blog Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded mb-4"
//           />
//           <input
//             type="text"
//             placeholder="Enter Blog Category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded mb-4"
//           />
//           {contentBlocks.map((block) => (
//             <div key={block.id} className="mb-4">
//               {block.type === "title" && (
//                 <input
//                   type="text"
//                   placeholder="Enter Title"
//                   value={block.value}
//                   onChange={(e) =>
//                     handleBlockChange(block.id, e.target.value)
//                   }
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               )}
//               {block.type === "subtitle" && (
//                 <input
//                   type="text"
//                   placeholder="Enter Subtitle"
//                   value={block.value}
//                   onChange={(e) =>
//                     handleBlockChange(block.id, e.target.value)
//                   }
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               )}
//               {block.type === "description" && (
//                 <textarea
//                   placeholder="Enter Description"
//                   value={block.value}
//                   onChange={(e) =>
//                     handleBlockChange(block.id, e.target.value)
//                   }
//                   className="w-full p-2 border border-gray-300 rounded"
//                 ></textarea>
//               )}
//               {block.type === "image" && (
//                 <>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) =>
//                       handleImageUpload(block.id, e.target.files[0])
//                     }
//                     className="w-full p-2 border border-gray-300 rounded"
//                   />
//                   {block.value && (
//                     <img
//                       src={block.value}
//                       alt="Uploaded"
//                       className="w-full h-auto mt-2"
//                     />
//                   )}
//                 </>
//               )}
//               {block.type === "imageUrl" && (
//                 <>
//                   <input
//                     type="text"
//                     placeholder="Enter Image URL"
//                     value={block.value}
//                     onChange={(e) =>
//                       handleImageUrl(block.id, e.target.value)
//                     }
//                     className="w-full p-2 border border-gray-300 rounded"
//                   />
//                 </>
//               )}
//               {block.type === "video" && (
//                 <>
//                   <input
//                     type="file"
//                     accept="video/*"
//                     onChange={(e) =>
//                       handleVideoUpload(block.id, e.target.files[0])
//                     }
//                     className="w-full p-2 border border-gray-300 rounded"
//                   />
//                   {block.value && (
//                     <video
//                       controls
//                       src={block.value}
//                       className="w-full h-auto mt-2"
//                     ></video>
//                   )}
//                 </>
//               )}
//               {block.type === "videoUrl" && (
//                 <>
//                   <input
//                     type="text"
//                     placeholder="Enter Video URL"
//                     value={block.value}
//                     onChange={(e) =>
//                       handleVideoUrl(block.id, e.target.value)
//                     }
//                     className="w-full p-2 border border-gray-300 rounded"
//                   />
//                 </>
//               )}
//               {block.type === "codeSnippet" && (
//                 <textarea
//                   placeholder="Enter Code Snippet"
//                   value={block.value}
//                   onChange={(e) =>
//                     handleBlockChange(block.id, e.target.value)
//                   }
//                   className="w-full p-2 border border-gray-300 rounded font-mono"
//                 ></textarea>
//               )}
//               <button
//                 className="mt-2 px-4 py-1 bg-red-500 text-white rounded"
//                 onClick={() => handleRemoveBlock(block.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button
//             className="w-full py-2 bg-green-500 text-white rounded"
//             onClick={handlePublish}
//           >
//             Publish
//           </button>
//         </div>

//         {/* Preview Section */}
//         <div className="w-1/2 p-4 border-l border-gray-300">
//           {title && <h2 className="text-2xl font-bold">{title}</h2>}
//           {contentBlocks.map((block) => (
//             <div key={block.id} className="mb-4">
//               {block.type === "title" && (
//                 <h1 className="text-xl font-bold">{block.value}</h1>
//               )}
//               {block.type === "subtitle" && (
//                 <h2 className="text-lg font-semibold">{block.value}</h2>
//               )}
//               {block.type === "description" && (
//                 <p className="text-base">{block.value}</p>
//               )}
//               {block.type === "image" && (
//                 <img
//                   src={block.value}
//                   alt="Preview"
//                   className="w-full h-auto"
//                 />
//               )}
//               {block.type === "imageUrl" && (
//                 <img
//                   src={block.value}
//                   alt="Preview"
//                   className="w-full h-auto"
//                 />
//               )}
//               {block.type === "video" && (
//                 <video
//                   controls
//                   src={block.value}
//                   className="w-full h-64"
//                 ></video>
//               )}
//               {block.type === "videoUrl" && (
//                 <video
//                   controls
//                   src={block.value}
//                   className="w-full h-64"
//                 ></video>
//               )}
//               {block.type === "codeSnippet" && (
//                 <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
//                   {block.value}
//                 </SyntaxHighlighter>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// import { useState } from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// const BlogApp = ({ onPublish }) => {
//   const [title, setTitle] = useState("");
//   const [contentBlocks, setContentBlocks] = useState([]);
//   const [category, setCategory] = useState("");

//   const handleAddBlock = (type) => {
//     const newBlock = { id: Date.now(), type, value: "" };
//     setContentBlocks([...contentBlocks, newBlock]);
//   };

//   const handleRemoveBlock = (id) => {
//     setContentBlocks(contentBlocks.filter((block) => block.id !== id));
//   };

//   const handleBlockChange = (id, value) => {
//     const updatedBlocks = contentBlocks.map((block) =>
//       block.id === id ? { ...block, value } : block
//     );
//     setContentBlocks(updatedBlocks);
//   };

//   const handleImageUpload = (id, file) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       handleBlockChange(id, e.target.result); // Base64 image string
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleImageUrl = (id, url) => {
//     handleBlockChange(id, url); // Direct URL input for image
//   };

//   const handleVideoUpload = (id, file) => {
//     const url = URL.createObjectURL(file);
//     handleBlockChange(id, url); // URL for uploaded video
//   };

//   const handleVideoUrl = (id, url) => {
//     handleBlockChange(id, url); // Direct URL input for video
//   };

//   const handleCodeSnippet = (id, value) => {
//     handleBlockChange(id, value); // For code snippet
//   };

//   const handlePublish = () => {
//     const content = contentBlocks.map((block) => ({
//       type: block.type,
//       value: block.value,
//     }));
//     const newBlog = {
//       id: Date.now(),
//       title,
//       category,
//       content,
//     };
//     onPublish(newBlog);
//     setTitle("");
//     setCategory("");
//     setContentBlocks([]);
//   };

//   return (
//     <div className="flex h-screen bg-black text-white">
//       {/* Options Section */}
//       <div className="w-1/4 bg-black p-4">
//         <h3 className="text-lg font-bold mb-4">Components</h3>
//         <button
//           className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
//           onClick={() => handleAddBlock("title")}
//         >
//           Add Title
//         </button>
//         <button
//           className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
//           onClick={() => handleAddBlock("subtitle")}
//         >
//           Add Subtitle
//         </button>
//         <button
//           className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
//           onClick={() => handleAddBlock("description")}
//         >
//           Add Description
//         </button>
//         <button
//           className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
//           onClick={() => handleAddBlock("image")}
//         >
//           Add Image
//         </button>
//         <button
//           className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
//           onClick={() => handleAddBlock("imageUrl")}
//         >
//           Add Image URL
//         </button>
//         <button
//           className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
//           onClick={() => handleAddBlock("video")}
//         >
//           Add Video
//         </button>
//         <button
//           className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
//           onClick={() => handleAddBlock("videoUrl")}
//         >
//           Add Video URL
//         </button>
//         <button
//           className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
//           onClick={() => handleAddBlock("codeSnippet")}
//         >
//           Add Code Snippet
//         </button>
//       </div>

//       {/* Editor Section */}
//       <div className="flex-1 flex">
//         {/* Editor Area */}
//         <div className="w-1/2 p-4">
//           <h3 className="text-lg font-bold mb-4">Blog Editor</h3>
//           <input
//             type="text"
//             placeholder="Enter Blog Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded mb-4"
//           />
//           <input
//             type="text"
//             placeholder="Enter Blog Category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded mb-4"
//           />
//           {contentBlocks.map((block) => (
//             <div key={block.id} className="mb-4">
//               {block.type === "title" && (
//                 <input
//                   type="text"
//                   placeholder="Enter Title"
//                   value={block.value}
//                   onChange={(e) =>
//                     handleBlockChange(block.id, e.target.value)
//                   }
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               )}
//               {block.type === "subtitle" && (
//                 <input
//                   type="text"
//                   placeholder="Enter Subtitle"
//                   value={block.value}
//                   onChange={(e) =>
//                     handleBlockChange(block.id, e.target.value)
//                   }
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               )}
//               {block.type === "description" && (
//                 <textarea
//                   placeholder="Enter Description"
//                   value={block.value}
//                   onChange={(e) =>
//                     handleBlockChange(block.id, e.target.value)
//                   }
//                   className="w-full p-2 border border-gray-300 rounded"
//                 ></textarea>
//               )}
//               {block.type === "image" && (
//                 <>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) =>
//                       handleImageUpload(block.id, e.target.files[0])
//                     }
//                     className="w-full p-2 border border-gray-300 rounded"
//                   />
//                   {block.value && (
//                     <img
//                       src={block.value}
//                       alt="Uploaded"
//                       className="w-full h-auto mt-2"
//                     />
//                   )}
//                 </>
//               )}
//               {block.type === "imageUrl" && (
//                 <>
//                   <input
//                     type="text"
//                     placeholder="Enter Image URL"
//                     value={block.value}
//                     onChange={(e) =>
//                       handleImageUrl(block.id, e.target.value)
//                     }
//                     className="w-full p-2 border border-gray-300 rounded"
//                   />
//                 </>
//               )}
//               {block.type === "video" && (
//                 <>
//                   <input
//                     type="file"
//                     accept="video/*"
//                     onChange={(e) =>
//                       handleVideoUpload(block.id, e.target.files[0])
//                     }
//                     className="w-full p-2 border border-gray-300 rounded"
//                   />
//                   {block.value && (
//                     <video
//                       controls
//                       src={block.value}
//                       className="w-full h-auto mt-2"
//                     ></video>
//                   )}
//                 </>
//               )}
//               {block.type === "videoUrl" && (
//                 <>
//                   <input
//                     type="text"
//                     placeholder="Enter Video URL"
//                     value={block.value}
//                     onChange={(e) =>
//                       handleVideoUrl(block.id, e.target.value)
//                     }
//                     className="w-full p-2 border border-gray-300 rounded"
//                   />
//                 </>
//               )}
//               {block.type === "codeSnippet" && (
//                 <textarea
//                   placeholder="Enter Code Snippet"
//                   value={block.value}
//                   onChange={(e) =>
//                     handleCodeSnippet(block.id, e.target.value)
//                   }
//                   className="w-full p-2 border border-gray-300 rounded font-mono"
//                 ></textarea>
//               )}
//               <button
//                 className="mt-2 px-4 py-1 bg-red-500 text-white rounded"
//                 onClick={() => handleRemoveBlock(block.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button
//             className="w-full py-2 bg-green-500 text-white rounded"
//             onClick={handlePublish}
//           >
//             Publish
//           </button>
//         </div>

//         {/* Preview Section */}
//         <div className="w-1/2 p-4 border-l border-gray-300">
//           {title && <h2 className="text-2xl font-bold">{title}</h2>}
//           {contentBlocks.map((block) => (
//             <div key={block.id} className="mb-4">
//               {block.type === "title" && (
//                 <h1 className="text-xl font-bold">{block.value}</h1>
//               )}
//               {block.type === "subtitle" && (
//                 <h2 className="text-lg font-semibold">{block.value}</h2>
//               )}
//               {block.type === "description" && (
//                 <p className="text-base">{block.value}</p>
//               )}
//               {block.type === "image" && (
//                 <img
//                   src={block.value}
//                   alt="Preview"
//                   className="w-full h-auto"
//                 />
//               )}
//               {block.type === "imageUrl" && (
//                 <img
//                   src={block.value}
//                   alt="Preview"
//                   className="w-full h-auto"
//                 />
//               )}
//               {block.type === "video" && (
//                 <video
//                   controls
//                   src={block.value}
//                   className="w-full h-64"
//                 ></video>
//               )}
//               {block.type === "videoUrl" && (
//                 <video
//                   controls
//                   src={block.value}
//                   className="w-full h-64"
//                 ></video>
//               )}
//               {block.type === "codeSnippet" && (
//                 <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
//                   {block.value}
//                 </SyntaxHighlighter>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default BlogApp;


// import React, { useState } from "react";
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// // Main BlogApp Component
// const BlogApp = () => {
//   const [elements, setElements] = useState([]);

//   // Add new element to the blog
//   const addNewElement = (type, content = "") => {
//     const newElement = { type, content, id: Date.now() };
//     setElements([...elements, newElement]);
//   };

//   // Update content of a specific element
//   const updateElement = (id, content) => {
//     setElements((prevElements) =>
//       prevElements.map((el) =>
//         el.id === id ? { ...el, content } : el
//       )
//     );
//   };

//   // Handle file upload for images and videos
//   const handleFileUpload = (event, type) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         addNewElement(type, reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle URL input for image and video
//   const handleUrlInput = (type) => {
//     const url = prompt(`Enter the URL of the ${type}:`);
//     if (url) {
//       addNewElement(type, url);
//     }
//   };

//   return (
//     <div className="h-[100vh] flex flex-col bg-gray-800 text-gray-200">
//       {/* Toolbar for Adding New Elements */}
//       <div className="flex flex-wrap gap-6 p-6 bg-gray-700 border-b border-gray-600">
//         <button
//           className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
//           onClick={() => addNewElement("heading")}
//         >
//           Add Heading
//         </button>
//         <button
//           className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
//           onClick={() => addNewElement("text")}
//         >
//           Add Text
//         </button>
//         <button
//           className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
//           onClick={() => addNewElement("blockquote")}
//         >
//           Add Blockquote
//         </button>
//         <button
//           className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
//           onClick={() => addNewElement("code")}
//         >
//           Add Code Block
//         </button>
//         <button
//           className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
//           onClick={() => addNewElement("link")}
//         >
//           Add Link
//         </button>
//         <label className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md cursor-pointer">
//           Upload Image
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={(e) => handleFileUpload(e, "image")}
//           />
//         </label>
//         <label className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md cursor-pointer">
//           Upload Video
//           <input
//             type="file"
//             accept="video/*"
//             className="hidden"
//             onChange={(e) => handleFileUpload(e, "video")}
//           />
//         </label>
//         {/* Buttons to Add Image and Video URL */}
//         <button
//           className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
//           onClick={() => handleUrlInput("image")}
//         >
//           Add Image URL
//         </button>
//         <button
//           className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
//           onClick={() => handleUrlInput("video")}
//         >
//           Add Video URL
//         </button>
//       </div>

//       {/* Main Content: Editor and Preview */}
//       <div className="flex flex-grow overflow-hidden">
//         {/* Editor Section */}
//         <div className="w-1/2 p-6 overflow-y-auto border-r border-gray-600">
//           <div className="space-y-6">
//             {elements.map((item) => (
//               <div key={item.id}>
//                 {item.type === "heading" && (
//                   <input
//                     type="text"
//                     placeholder="Enter heading..."
//                     className="w-full bg-gray-700 p-4 text-gray-300 rounded-md"
//                     value={item.content}
//                     onChange={(e) => updateElement(item.id, e.target.value)}
//                   />
//                 )}
//                 {item.type === "text" && (
//                   <textarea
//                     placeholder="Enter text..."
//                     className="w-full bg-gray-700 p-4 text-gray-300 rounded-md"
//                     rows={4}
//                     value={item.content}
//                     onChange={(e) => updateElement(item.id, e.target.value)}
//                   ></textarea>
//                 )}
//                 {item.type === "blockquote" && (
//                   <textarea
//                     placeholder="Enter blockquote..."
//                     className="w-full bg-gray-700 p-4 text-gray-300 italic rounded-md"
//                     rows={3}
//                     value={item.content}
//                     onChange={(e) => updateElement(item.id, e.target.value)}
//                   ></textarea>
//                 )}
//                 {item.type === "code" && (
//                   <textarea
//                     placeholder="Enter code..."
//                     className="w-full bg-gray-700 p-4 text-teal-400 font-mono rounded-md"
//                     rows={6}
//                     value={item.content}
//                     onChange={(e) => updateElement(item.id, e.target.value)}
//                   ></textarea>
//                 )}
//                 {item.type === "link" && (
//                   <input
//                     type="text"
//                     placeholder="Enter URL..."
//                     className="w-full bg-gray-700 p-4 text-gray-300 rounded-md"
//                     value={item.content}
//                     onChange={(e) => updateElement(item.id, e.target.value)}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Preview Section */}
//         <div className="w-1/2 p-6 overflow-y-auto bg-gray-900">
//           <div className="space-y-6">
//             {elements.map((item) => (
//               <div key={item.id}>
//                 {item.type === "heading" && (
//                   <h1 className="text-3xl font-bold text-indigo-500">
//                     {item.content || "Heading Preview"}
//                   </h1>
//                 )}
//                 {item.type === "text" && (
//                   <p className="text-gray-300">{item.content || "Text Preview"}</p>
//                 )}
//                 {item.type === "blockquote" && (
//                   <blockquote className="italic border-l-4 border-indigo-500 pl-6 text-gray-400">
//                     {item.content || "Blockquote Preview"}
//                   </blockquote>
//                 )}
//                 {item.type === "code" && (
//                   <div className="rounded-md overflow-hidden">
//                     <SyntaxHighlighter
//                       language="javascript"
//                       style={atomOneDark}
//                       customStyle={{
//                         margin: 0,
//                         borderRadius: '0.5rem',
//                         padding: '1.25rem',
//                         fontSize: '1rem',
//                         lineHeight: '1.6',
//                       }}
//                     >
//                       {item.content || "// Code Block Preview\nconsole.log('Hello World!');"}
//                     </SyntaxHighlighter>
//                   </div>
//                 )}
//                 {item.type === "image" && (
//                   <img
//                     src={item.content}
//                     alt="Uploaded"
//                     className="max-w-full h-auto rounded-md"
//                   />
//                 )}
//                 {item.type === "video" && (
//                   <video
//                     src={item.content}
//                     controls
//                     className="max-w-full h-auto rounded-md"
//                   ></video>
//                 )}
//                 {item.type === "link" && (
//                   <a
//                     href={item.content}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-indigo-500 underline"
//                   >
//                     {item.content || "Link Preview"}
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogApp;
// import React, { useState } from "react";
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// // Main BlogApp Component
// const BlogApp = () => {
//   const [elements, setElements] = useState([]);
//   const [urlInput, setUrlInput] = useState("");

//   // Add new element to the blog
//   const addNewElement = (type, content = "") => {
//     const newElement = { type, content, id: Date.now() };
//     setElements([...elements, newElement]);
//   };

//   // Update content of a specific element
//   const updateElement = (id, content) => {
//     setElements((prevElements) =>
//       prevElements.map((el) =>
//         el.id === id ? { ...el, content } : el
//       )
//     );
//   };

//   // Handle file upload for images and videos
//   const handleFileUpload = (event, type) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         addNewElement(type, reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Handle URL input for image and video
//   const handleUrlSubmit = (type) => {
//     if (urlInput) {
//       addNewElement(type, urlInput);
//       setUrlInput("");  // Clear input field after submission
//     }
//   };

//   return (
//     <div className="h-[100vh] flex flex-col bg-gray-800 text-gray-200">
//       {/* Toolbar for Adding New Elements */}
//       <div className="flex flex-wrap gap-6 p-6 bg-gray-700 border-b border-gray-600">
//         <button
//           className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
//           onClick={() => addNewElement("heading")}
//         >
//           Add Heading
//         </button>
//         <button
//           className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
//           onClick={() => addNewElement("text")}
//         >
//           Add Text
//         </button>
//         <button
//           className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
//           onClick={() => addNewElement("blockquote")}
//         >
//           Add Blockquote
//         </button>
//         <button
//           className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
//           onClick={() => addNewElement("code")}
//         >
//           Add Code Block
//         </button>
//         <button
//           className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
//           onClick={() => addNewElement("link")}
//         >
//           Add Link
//         </button>
//         <label className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md cursor-pointer">
//           Upload Image
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             onChange={(e) => handleFileUpload(e, "image")}
//           />
//         </label>
//         <label className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md cursor-pointer">
//           Upload Video
//           <input
//             type="file"
//             accept="video/*"
//             className="hidden"
//             onChange={(e) => handleFileUpload(e, "video")}
//           />
//         </label>
//         {/* Input for Image/Video URL */}
//         <input
//           type="text"
//           className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
//           value={urlInput}
//           onChange={(e) => setUrlInput(e.target.value)}
//           placeholder="Enter Image/Video URL"
//         />
//         <button
//           className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
//           onClick={() => handleUrlSubmit("image")}
//         >
//           Add Image URL
//         </button>
//         <button
//           className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
//           onClick={() => handleUrlSubmit("video")}
//         >
//           Add Video URL
//         </button>
//       </div>

//       {/* Main Content: Editor and Preview */}
//       <div className="flex flex-grow overflow-hidden">
//         {/* Editor Section */}
//         <div className="w-1/2 p-6 overflow-y-auto border-r border-gray-600">
//           <div className="space-y-6">
//             {elements.map((item) => (
//               <div key={item.id}>
//                 {item.type === "heading" && (
//                   <input
//                     type="text"
//                     placeholder="Enter heading..."
//                     className="w-full bg-gray-700 p-4 text-gray-300 rounded-md"
//                     value={item.content}
//                     onChange={(e) => updateElement(item.id, e.target.value)}
//                   />
//                 )}
//                 {item.type === "text" && (
//                   <textarea
//                     placeholder="Enter text..."
//                     className="w-full bg-gray-700 p-4 text-gray-300 rounded-md"
//                     rows={4}
//                     value={item.content}
//                     onChange={(e) => updateElement(item.id, e.target.value)}
//                   ></textarea>
//                 )}
//                 {item.type === "blockquote" && (
//                   <textarea
//                     placeholder="Enter blockquote..."
//                     className="w-full bg-gray-700 p-4 text-gray-300 italic rounded-md"
//                     rows={3}
//                     value={item.content}
//                     onChange={(e) => updateElement(item.id, e.target.value)}
//                   ></textarea>
//                 )}
//                 {item.type === "code" && (
//                   <textarea
//                     placeholder="Enter code..."
//                     className="w-full bg-gray-700 p-4 text-teal-400 font-mono rounded-md"
//                     rows={6}
//                     value={item.content}
//                     onChange={(e) => updateElement(item.id, e.target.value)}
//                   ></textarea>
//                 )}
//                 {item.type === "link" && (
//                   <input
//                     type="text"
//                     placeholder="Enter URL..."
//                     className="w-full bg-gray-700 p-4 text-gray-300 rounded-md"
//                     value={item.content}
//                     onChange={(e) => updateElement(item.id, e.target.value)}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Preview Section */}
//         <div className="w-1/2 p-6 overflow-y-auto bg-gray-900">
//           <div className="space-y-6">
//             {elements.map((item) => (
//               <div key={item.id}>
//                 {item.type === "heading" && (
//                   <h1 className="text-3xl font-bold text-indigo-500">
//                     {item.content || "Heading Preview"}
//                   </h1>
//                 )}
//                 {item.type === "text" && (
//                   <p className="text-gray-300">{item.content || "Text Preview"}</p>
//                 )}
//                 {item.type === "blockquote" && (
//                   <blockquote className="italic border-l-4 border-indigo-500 pl-6 text-gray-400">
//                     {item.content || "Blockquote Preview"}
//                   </blockquote>
//                 )}
//                 {item.type === "code" && (
//                   <div className="rounded-md overflow-hidden">
//                     <SyntaxHighlighter
//                       language="javascript"
//                       style={atomOneDark}
//                       customStyle={{
//                         margin: 0,
//                         borderRadius: '0.5rem',
//                         padding: '1.25rem',
//                         fontSize: '1rem',
//                         lineHeight: '1.6',
//                       }}
//                     >
//                       {item.content || "// Code Block Preview\nconsole.log('Hello World!');"}
//                     </SyntaxHighlighter>
//                   </div>
//                 )}
//                 {item.type === "image" && (
//                   <img
//                     src={item.content}
//                     alt="Uploaded"
//                     className="max-w-full h-auto rounded-md"
//                   />
//                 )}
//                 {item.type === "video" && (
//                   <video
//                     src={item.content}
//                     controls
//                     className="max-w-full h-auto rounded-md"
//                   ></video>
//                 )}
//                 {item.type === "link" && (
//                   <a
//                     href={item.content}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-indigo-500 underline"
//                   >
//                     {item.content || "Link Preview"}
//                   </a>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogApp;
import React, { useState } from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Main BlogApp Component
const BlogApp = () => {
  const [elements, setElements] = useState([]);
  const [urlInputFields, setUrlInputFields] = useState([]); // Track the added URL input fields

  // Add new element to the blog
  const addNewElement = (type, content = "") => {
    const newElement = { type, content, id: Date.now() };
    setElements([...elements, newElement]);
  };

  // Update content of a specific element
  const updateElement = (id, content) => {
    setElements((prevElements) =>
      prevElements.map((el) =>
        el.id === id ? { ...el, content } : el
      )
    );
  };

  // Handle URL input submit for image/video
  const handleUrlSubmit = (type, url, inputId) => {
    if (url) {
      addNewElement(type, url);
      setUrlInputFields(urlInputFields.filter(id => id !== inputId));  // Remove the input field after submission
    }
  };

  // Add new URL input field
  const addUrlInputField = (type) => {
    const newId = Date.now(); // Unique ID for this URL input field
    setUrlInputFields([...urlInputFields, newId]);
  };

  return (
    <div className="h-[100vh] flex flex-col bg-gray-800 text-gray-200">
      {/* Toolbar for Adding New Elements */}
      <div className="flex flex-wrap gap-6 p-6 bg-gray-700 border-b border-gray-600">
        <button
          className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
          onClick={() => addNewElement("heading")}
        >
          Add Heading
        </button>
        <button
          className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
          onClick={() => addNewElement("text")}
        >
          Add Text
        </button>
        <button
          className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
          onClick={() => addNewElement("blockquote")}
        >
          Add Blockquote
        </button>
        <button
          className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
          onClick={() => addNewElement("code")}
        >
          Add Code Block
        </button>
        <button
          className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
          onClick={() => addNewElement("link")}
        >
          Add Link
        </button>
        
        {/* Add URL Input for Image and Video */}
        <button
          className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
          onClick={() => addUrlInputField("image")}
        >
          Add Image URL
        </button>
        <button
          className="bg-teal-400 text-black font-semibold px-6 py-3 rounded-md"
          onClick={() => addUrlInputField("video")}
        >
          Add Video URL
        </button>
      </div>

      {/* Main Content: Editor and Preview */}
      <div className="flex flex-grow overflow-hidden">
        {/* Editor Section */}
        <div className="w-1/2 p-6 overflow-y-auto border-r border-gray-600">
          <div className="space-y-6">
            {elements.map((item) => (
              <div key={item.id}>
                {item.type === "heading" && (
                  <input
                    type="text"
                    placeholder="Enter heading..."
                    className="w-full bg-gray-700 p-4 text-gray-300 rounded-md"
                    value={item.content}
                    onChange={(e) => updateElement(item.id, e.target.value)}
                  />
                )}
                {item.type === "text" && (
                  <textarea
                    placeholder="Enter text..."
                    className="w-full bg-gray-700 p-4 text-gray-300 rounded-md"
                    rows={4}
                    value={item.content}
                    onChange={(e) => updateElement(item.id, e.target.value)}
                  ></textarea>
                )}
                {item.type === "blockquote" && (
                  <textarea
                    placeholder="Enter blockquote..."
                    className="w-full bg-gray-700 p-4 text-gray-300 italic rounded-md"
                    rows={3}
                    value={item.content}
                    onChange={(e) => updateElement(item.id, e.target.value)}
                  ></textarea>
                )}
                {item.type === "code" && (
                  <textarea
                    placeholder="Enter code..."
                    className="w-full bg-gray-700 p-4 text-teal-400 font-mono rounded-md"
                    rows={6}
                    value={item.content}
                    onChange={(e) => updateElement(item.id, e.target.value)}
                  ></textarea>
                )}
                {item.type === "link" && (
                  <input
                    type="text"
                    placeholder="Enter URL..."
                    className="w-full bg-gray-700 p-4 text-gray-300 rounded-md"
                    value={item.content}
                    onChange={(e) => updateElement(item.id, e.target.value)}
                  />
                )}
              </div>
            ))}

            {/* Dynamically Generated URL Input Fields */}
            {urlInputFields.map((inputId) => (
              <div key={inputId} className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter URL..."
                  className="w-full bg-gray-700 p-4 text-gray-300 rounded-md"
                  onBlur={(e) =>
                    handleUrlSubmit("image", e.target.value, inputId)
                  }
                />
              </div>
            ))}
          </div>
        </div>

        {/* Preview Section */}
        <div className="w-1/2 p-6 overflow-y-auto bg-gray-900">
          <div className="space-y-6">
            {elements.map((item) => (
              <div key={item.id}>
                {item.type === "heading" && (
                  <h1 className="text-3xl font-bold text-indigo-500">
                    {item.content || "Heading Preview"}
                  </h1>
                )}
                {item.type === "text" && (
                  <p className="text-gray-300">{item.content || "Text Preview"}</p>
                )}
                {item.type === "blockquote" && (
                  <blockquote className="italic border-l-4 border-indigo-500 pl-6 text-gray-400">
                    {item.content || "Blockquote Preview"}
                  </blockquote>
                )}
                {item.type === "code" && (
                  <div className="rounded-md overflow-hidden">
                    <SyntaxHighlighter
                      language="javascript"
                      style={atomOneDark}
                      customStyle={{
                        margin: 0,
                        borderRadius: '0.5rem',
                        padding: '1.25rem',
                        fontSize: '1rem',
                        lineHeight: '1.6',
                      }}
                    >
                      {item.content || "// Code Block Preview\nconsole.log('Hello World!');"}
                    </SyntaxHighlighter>
                  </div>
                )}
                {item.type === "image" && (
                  <img
                    src={item.content}
                    alt="Uploaded"
                    className="max-w-full h-auto rounded-md"
                  />
                )}
                {item.type === "video" && (
                  <video
                    src={item.content}
                    controls
                    className="max-w-full h-auto rounded-md"
                  ></video>
                )}
                {item.type === "link" && (
                  <a
                    href={item.content}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-500 underline"
                  >
                    {item.content || "Link Preview"}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogApp;



