import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MessageCircle, ThumbsUp, Minus, MoreHorizontal, Download } from 'lucide-react';

export const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.id}`} className="grid grid-cols-2 border border-gray-800 bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-750 transition-colors">
      <div className="flex flex-col flex-grow">
        <div className="flex items-center pb-3">
          <img
            src={blog.authorImage || "https://via.placeholder.com/40"}
            className="h-[40px] w-[40px] rounded-full border border-teal-500"
            alt="profile"
          />
          <span className="pl-3 text-gray-100 text-lg font-medium">{blog.author}</span>
        </div>
        <div className="pb-4">
          <h2 className="text-2xl font-bold text-teal-500">{blog.title}</h2>
          <p className="text-gray-400 text-sm">{blog.category}</p>
        </div>
        <div className="flex items-center text-gray-400 text-sm gap-4">
          <span className="flex items-center">
            <Star className="w-4 h-4 mr-2 text-teal-500" />
            {blog.date}
          </span>
          <span className="flex items-center">
            <ThumbsUp className="w-4 h-4 mr-1 text-teal-500" />
            {blog.likes}
          </span>
          <span className="flex items-center">
            <MessageCircle className="w-4 h-4 mr-1 text-teal-500" />
            {blog.comments}
          </span>
          <div className="ml-auto flex items-center gap-2 text-teal-500">
            <Minus className="w-6 h-6 hover:text-teal-400 cursor-pointer" />
            <MoreHorizontal className="w-6 h-6 hover:text-teal-400 cursor-pointer" />
            <Download className="w-6 h-6 hover:text-teal-400 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 ml-4">
        <img
          src={blog.image}
          className="w-full h-[200px]  rounded-md"
          alt="post"
        />
      </div>
    </Link>
  );
};