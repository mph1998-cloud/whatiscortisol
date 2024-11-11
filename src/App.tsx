import React from 'react';
import { Brain, BookOpen, Smartphone, Wrench } from 'lucide-react';
import { useSpreadsheetData } from './hooks/useSpreadsheetData';
import BookCard from './components/BookCard';
import AppCard from './components/AppCard';
import ToolCard from './components/ToolCard';
import LoadingSpinner from './components/LoadingSpinner';

const SHEET_ID = '158HQ9y4e7VnIUf3b0z4goobJwTmU2G5IKV5_GJQa60E';

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    link: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
    category: "Self-Improvement"
  },
  {
    title: "The Body Keeps the Score",
    author: "Bessel van der Kolk",
    rating: 4.9,
    imageUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    link: "https://www.amazon.com/Body-Keeps-Score-Healing-Trauma/dp/0143127748",
    category: "Mental Health"
  },
  {
    title: "Think Like a Monk",
    author: "Jay Shetty",
    rating: 4.8,
    imageUrl: "https://images.unsplash.com/photo-1602537675897-1875fc6c2fb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    link: "https://www.amazon.com/Think-Like-Monk-Train-Purpose/dp/1982134488",
    category: "Mindfulness"
  }
];

const apps = [
  {
    name: "Calm",
    description: "Meditation and Sleep Stories",
    rating: 4.8,
    downloads: "100M+",
    icon: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    link: "https://www.calm.com",
    category: "Meditation"
  },
  {
    name: "Headspace",
    description: "Meditation & Mindfulness",
    rating: 4.7,
    downloads: "10M+",
    icon: "https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    link: "https://www.headspace.com",
    category: "Meditation"
  },
  {
    name: "Balance",
    description: "Personalized Meditation",
    rating: 4.8,
    downloads: "5M+",
    icon: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    link: "https://www.balanceapp.com",
    category: "Meditation"
  }
];

export default function App() {
  const { data: tools, loading, error } = useSpreadsheetData(SHEET_ID);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="float mb-8">
              <Brain className="w-24 h-24 mx-auto" />
            </div>
            <h1 className="text-7xl font-bold mb-6 tracking-tight">
              Master Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Cortisol Levels
              </span>
            </h1>
            <p className="text-2xl opacity-90 leading-relaxed">
              Discover the tools and knowledge to take control of your stress response
            </p>
          </div>
        </div>
        
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 py-24">
        {/* Books Section */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Top Books</h2>
              <p className="text-gray-400">Amazon's best-selling wellness titles</p>
            </div>
            <BookOpen className="w-12 h-12 text-purple-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book) => (
              <BookCard key={book.title} {...book} />
            ))}
          </div>
        </section>

        {/* Apps Section */}
        <section className="mb-32">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Essential Apps</h2>
              <p className="text-gray-400">Top-rated stress management applications</p>
            </div>
            <Smartphone className="w-12 h-12 text-purple-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {apps.map((app) => (
              <AppCard key={app.name} {...app} />
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Proven Tools</h2>
              <p className="text-gray-400">Science-backed stress reduction techniques</p>
            </div>
            <Wrench className="w-12 h-12 text-purple-500" />
          </div>
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <div className="text-red-500 text-center p-8">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tools?.slice(0, 4).map((tool) => (
                <ToolCard key={tool.name} {...tool} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}