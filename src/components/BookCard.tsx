import React from 'react';
import { Book } from '../types';
import { BookOpen } from 'lucide-react';

export default function BookCard({ title, author, rating, imageUrl, link }: Book) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden card-hover"
    >
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {title}
        </h3>
        <p className="text-gray-400 mb-4">{author}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-sm text-gray-400">Rating: {rating}/5</span>
          </div>
        </div>
      </div>
    </a>
  );
}