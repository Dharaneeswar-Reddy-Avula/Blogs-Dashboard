// import React, { useState } from "react";

// const BlogEditor = () => {
//   const [fields, setFields] = useState([]);
//   const [previewData, setPreviewData] = useState({});

//   const addField = (type) => {
//     const id = `${type}-${Date.now()}`;
//     setFields([...fields, { id, type }]);
//   };

//   const updatePreview = (id, value) => {
//     setPreviewData({ ...previewData, [id]: value });
//   };

//   const renderField = (field) => {
//     switch (field.type) {
//       case "title":
//         return (
//           <input
//             key={field.id}
//             type="text"
//             placeholder="Enter Title"
//             className="w-full p-2 border border-gray-300 rounded mb-4"
//             onChange={(e) => updatePreview(field.id, e.target.value)}
//           />
//         );
//       case "subtitle":
//         return (
//           <input
//             key={field.id}
//             type="text"
//             placeholder="Enter Subtitle"
//             className="w-full p-2 border border-gray-300 rounded mb-4"
//             onChange={(e) => updatePreview(field.id, e.target.value)}
//           />
//         );
//       case "image":
//         return (
//           <input
//             key={field.id}
//             type="file"
//             accept="image/*"
//             className="mb-4"
//             onChange={(e) =>
//               updatePreview(
//                 field.id,
//                 URL.createObjectURL(e.target.files[0])
//               )
//             }
//           />
//         );
//       case "codeSnippet":
//         return (
//           <textarea
//             key={field.id}
//             placeholder="Enter Code Snippet"
//             className="w-full p-2 border border-gray-300 rounded mb-4"
//             onChange={(e) => updatePreview(field.id, e.target.value)}
//           ></textarea>
//         );
//       case "description":
//         return (
//           <textarea
//             key={field.id}
//             placeholder="Enter Description"
//             className="w-full p-2 border border-gray-300 rounded mb-4"
//             onChange={(e) => updatePreview(field.id, e.target.value)}
//           ></textarea>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="grid grid-cols-3 gap-4 p-4">
//       {/* Components Section */}
//       <div className="p-4 border border-gray-300 rounded">
//         <h2 className="text-lg font-bold mb-4">Components</h2>
//         <button
//           className="block w-full mb-2 px-4 py-2 bg-blue-500 text-white rounded"
//           onClick={() => addField("title")}
//         >
//           Add Title
//         </button>
//         <button
//           className="block w-full mb-2 px-4 py-2 bg-blue-500 text-white rounded"
//           onClick={() => addField("subtitle")}
//         >
//           Add Subtitle
//         </button>
//         <button
//           className="block w-full mb-2 px-4 py-2 bg-blue-500 text-white rounded"
//           onClick={() => addField("image")}
//         >
//           Add Image
//         </button>
//         <button
//           className="block w-full mb-2 px-4 py-2 bg-blue-500 text-white rounded"
//           onClick={() => addField("codeSnippet")}
//         >
//           Add Code Snippet
//         </button>
//         <button
//           className="block w-full mb-2 px-4 py-2 bg-blue-500 text-white rounded"
//           onClick={() => addField("description")}
//         >
//           Add Description
//         </button>
//       </div>

//       {/* Editor Section */}
//       <div className="p-4 border border-gray-300 rounded">
//         <h2 className="text-lg font-bold mb-4">Editor</h2>
//         {fields.map((field) => renderField(field))}
//       </div>

//       {/* Preview Section */}
//       <div className="p-4 border border-gray-300 rounded">
//         <h2 className="text-lg font-bold mb-4">Preview</h2>
//         <div>
//           {fields.map((field) => {
//             if (field.type === "image") {
//               return (
//                 previewData[field.id] && (
//                   <img
//                     key={field.id}
//                     src={previewData[field.id]}
//                     alt="Preview"
//                     className="mb-4"
//                   />
//                 )
//               );
//             }
//             return (
//               previewData[field.id] && (
//                 <p key={field.id} className="mb-4">
//                   {previewData[field.id]}
//                 </p>
//               )
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogEditor;


// import React, { useState } from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

// const BlogEditor = () => {
//   const [fields, setFields] = useState([]);
//   const [previewData, setPreviewData] = useState({});

//   const addField = (type) => {
//     const id = `${type}-${Date.now()}`;
//     setFields([...fields, { id, type }]);
//   };

//   const removeField = (id) => {
//     setFields(fields.filter((field) => field.id !== id));
//     const updatedPreviewData = { ...previewData };
//     delete updatedPreviewData[id];
//     setPreviewData(updatedPreviewData);
//   };

//   const updatePreview = (id, value) => {
//     setPreviewData({ ...previewData, [id]: value });
//   };

//   const renderField = (field) => {
//     switch (field.type) {
//       case "title":
//         return (
//           <div key={field.id} className="mb-4">
//             <input
//               type="text"
//               placeholder="Enter Title"
//               className="w-full p-2 border border-gray-300 rounded"
//               onChange={(e) => updatePreview(field.id, e.target.value)}
//             />
//             <button
//               className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
//               onClick={() => removeField(field.id)}
//             >
//               Remove
//             </button>
//           </div>
//         );
//       case "subtitle":
//         return (
//           <div key={field.id} className="mb-4">
//             <input
//               type="text"
//               placeholder="Enter Subtitle"
//               className="w-full p-2 border border-gray-300 rounded"
//               onChange={(e) => updatePreview(field.id, e.target.value)}
//             />
//             <button
//               className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
//               onClick={() => removeField(field.id)}
//             >
//               Remove
//             </button>
//           </div>
//         );
//       case "image":
//         return (
//           <div key={field.id} className="mb-4">
//             <input
//               type="file"
//               accept="image/*"
//               className="mb-2"
//               onChange={(e) =>
//                 updatePreview(field.id, URL.createObjectURL(e.target.files[0]))
//               }
//             />
//             <button
//               className="px-4 py-2 bg-red-500 text-white rounded"
//               onClick={() => removeField(field.id)}
//             >
//               Remove
//             </button>
//           </div>
//         );
//       case "video":
//         return (
//           <div key={field.id} className="mb-4">
//             <input
//               type="file"
//               accept="video/*"
//               className="mb-2"
//               onChange={(e) =>
//                 updatePreview(field.id, URL.createObjectURL(e.target.files[0]))
//               }
//             />
//             <button
//               className="px-4 py-2 bg-red-500 text-white rounded"
//               onClick={() => removeField(field.id)}
//             >
//               Remove
//             </button>
//           </div>
//         );
//       case "codeSnippet":
//         return (
//           <div key={field.id} className="mb-4">
//             <textarea
//               placeholder="Enter Code Snippet"
//               className="w-full p-2 border border-gray-300 rounded"
//               onChange={(e) => updatePreview(field.id, e.target.value)}
//             ></textarea>
//             <button
//               className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
//               onClick={() => removeField(field.id)}
//             >
//               Remove
//             </button>
//           </div>
//         );
//       case "description":
//         return (
//           <div key={field.id} className="mb-4">
//             <textarea
//               placeholder="Enter Description"
//               className="w-full p-2 border border-gray-300 rounded"
//               onChange={(e) => updatePreview(field.id, e.target.value)}
//             ></textarea>
//             <button
//               className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
//               onClick={() => removeField(field.id)}
//             >
//               Remove
//             </button>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="p-4">
//       {/* Components Section */}
//       <div className="flex justify-around mb-4">
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//           onClick={() => addField("title")}
//         >
//           Add Title
//         </button>
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//           onClick={() => addField("subtitle")}
//         >
//           Add Subtitle
//         </button>
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//           onClick={() => addField("image")}
//         >
//           Add Image
//         </button>
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//           onClick={() => addField("video")}
//         >
//           Add Video
//         </button>
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//           onClick={() => addField("codeSnippet")}
//         >
//           Add Code Snippet
//         </button>
//         <button
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//           onClick={() => addField("description")}
//         >
//           Add Description
//         </button>
//       </div>

//       {/* Editor and Preview Sections */}
//       <div className="grid grid-cols-2 gap-4">
//         {/* Editor Section */}
//         <div className="p-4 border border-gray-300 rounded">
//           <h2 className="text-lg font-bold mb-4">Editor</h2>
//           {fields.map((field) => renderField(field))}
//         </div>

//         {/* Preview Section */}
//         <div className="p-4 border border-gray-300 rounded">
//           {fields.map((field) => {
//             if (field.type === "image") {
//               return (
//                 previewData[field.id] && (
//                   <img
//                     key={field.id}
//                     src={previewData[field.id]}
//                     alt="Preview"
//                     className="mb-4"
//                   />
//                 )
//               );
//             }
//             if (field.type === "video") {
//               return (
//                 previewData[field.id] && (
//                   <video
//                     key={field.id}
//                     src={previewData[field.id]}
//                     controls
//                     className="mb-4"
//                   />
//                 )
//               );
//             }
//             if (field.type === "codeSnippet") {
//               return (
//                 previewData[field.id] && (
//                   <SyntaxHighlighter
//                     key={field.id}
//                     language="javascript"
//                     style={dracula}
//                     className="mb-4"
//                   >
//                     {previewData[field.id]}
//                   </SyntaxHighlighter>
//                 )
//               );
//             }
//             return (
//               previewData[field.id] && (
//                 <p key={field.id} className="mb-4">
//                   {previewData[field.id]}
//                 </p>
//               )
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogEditor;
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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
          onClick={() => handleAddBlock("codeSnippet")}
        >
          Add Code Snippet
        </button>
        <button
          className="w-full py-2 mb-2 bg-blue-500 text-white rounded"
          onClick={() => handleAddBlock("video")}
        >
          Add Video
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
                <input
                  type="text"
                  placeholder="Enter Image URL"
                  value={block.value}
                  onChange={(e) =>
                    handleBlockChange(block.id, e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
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
              {block.type === "video" && (
                <input
                  type="text"
                  placeholder="Enter Video URL"
                  value={block.value}
                  onChange={(e) =>
                    handleBlockChange(block.id, e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
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
              {block.type === "codeSnippet" && (
                <SyntaxHighlighter
                  language="javascript"
                  style={vscDarkPlus}
                >
                  {block.value}
                </SyntaxHighlighter>
              )}
              {block.type === "video" && (
                <iframe
                  src={block.value}
                  title="Video Preview"
                  className="w-full h-64"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;
