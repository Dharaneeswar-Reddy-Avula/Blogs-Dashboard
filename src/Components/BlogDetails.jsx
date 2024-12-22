// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Star, MessageCircle } from 'lucide-react';

// export const BlogDetails = ({ blogs }) => {
//   const { blogId } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     const foundBlog = blogs.find(blog => blog.id === parseInt(blogId));
//     if (foundBlog) {
//       setBlog(foundBlog);
//     }
//   }, [blogId, blogs]);

//   if (!blog) return (
//     <div className="flex items-center justify-center h-[60vh]">
//       <div className="text-teal-500 text-xl">Loading...</div>
//     </div>
//   );

//   return (
//     <div className="bg-gray-800 text-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
//       <h1 className="text-4xl font-bold pb-4 text-teal-500">{blog.title}</h1>
//       <p className="text-gray-400 text-lg pb-4">{blog.category}</p>

//       <div className="flex items-center pb-4">
//         <img
//           src={blog.authorImage || "https://via.placeholder.com/40"}
//           className="h-[40px] w-[40px] rounded-full border border-teal-500"
//           alt="profile"
//         />
//         <span className="pl-3 text-lg font-medium">{blog.author}</span>
//         <span className="pl-3 text-gray-400 text-sm">{blog.date}</span>
//       </div>

//       <p className="text-lg pb-4">{blog.description}</p>

//       <div className="pb-4">
//         <img
//           src={blog.image}
//           className="w-full max-h-[400px] object-cover rounded-lg"
//           alt="post"
//         />
//       </div>

//       <div className="flex items-center text-gray-400 gap-4">
//         <span className="flex items-center">
//           <Star className="w-5 h-5 mr-2 text-teal-500" />
//           {blog.likes}
//         </span>
//         <span className="flex items-center">
//           <MessageCircle className="w-5 h-5 mr-2 text-teal-500" />
//           {blog.comments}
//         </span>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Star, MessageCircle } from 'lucide-react';

export const BlogDetails = ({ blogs }) => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const foundBlog = blogs.find(blog => blog.id === parseInt(blogId));
    if (foundBlog) {
      setBlog(foundBlog);
    }
  }, [blogId, blogs]);

  if (!blog) return (
    <div className="flex items-center justify-center h-[60vh]">
      <div className="text-teal-500 text-xl">Loading...</div>
    </div>
  );

  return (
    <div className="bg-gray-800 text-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold pb-4 text-teal-500">{blog.title}</h1>
      <p className="text-gray-400 text-lg pb-4">{blog.category}</p>

      <div className="flex items-center pb-4">
        <img
          src={blog.authorImage || "https://via.placeholder.com/40"}
          className="h-[40px] w-[40px] rounded-full border border-teal-500"
          alt="profile"
        />
        <span className="pl-3 text-lg font-medium">{blog.author}</span>
        <span className="pl-3 text-gray-400 text-sm">{blog.date}</span>
      </div>

      <p className="text-lg pb-4">{blog.description}</p>

      {blog.video && (
        <div className="pb-4">
        
        </div>
      )}

      <div className="pb-4">
        <img
          src={blog.image}
          className="w-full max-h-[400px] object-cover rounded-lg"
          alt="post"
        />
      </div>

      {blog.codeSnippet && (
        <div className="bg-gray-900 text-green-500 p-4 rounded-lg mt-4 ">
          <pre>
            <code className='text-wrap'>{blog.codeSnippet}</code>
          </pre>
        </div>
      )}

      <div className="flex items-center text-gray-400 gap-4 pt-[20px]">
        <span className="flex items-center">
          <Star className="w-5 h-5 mr-2 text-teal-500" />
          {blog.likes}
        </span>
        <span className="flex items-center">
          <MessageCircle className="w-5 h-5 mr-2 text-teal-500" />
          {blog.comments}
        </span>
      </div>
    </div>
  );
};
