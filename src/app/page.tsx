import { ArrowRight, LogIn, UserPlus } from 'lucide-react';
import Link from 'next/link';

const quotes = [
  "The future belongs to those who believe in the beauty of their dreams.",
  "The past is a place of reference, not a place of residence; the past is a place of learning, not a place of living.", // Matches your example quote
  "Strive not to be a success, but rather to be of value.",
  "The only way to do great work is to love what you do."
];

const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

export default function Home() {
  const quote = getRandomQuote();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-4">
      <main className="w-full max-w-2xl rounded-2xl bg-gray-900 shadow-2xl p-10 sm:p-16 text-center text-white border border-gray-800">

        <h1 className="text-5xl font-extrabold mb-4 tracking-tight text-white">
          Welcome to AuthSphere
        </h1>
        <p className="text-xl text-gray-400 mb-10">
          Your secure authentication gateway.
        </p>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 p-8 rounded-xl shadow-lg mb-10 mx-auto max-w-md">
          <p className="text-sm font-semibold mb-2 opacity-75">
            ✨ Daily Inspiration
          </p>
          <blockquote className="text-lg italic text-white leading-relaxed">
            "{quote}"
          </blockquote>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/login" passHref>
            <button className="flex items-center justify-center w-full sm:w-44 px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-500 hover:bg-indigo-600 transition-colors">
              <LogIn className="mr-2 h-5 w-5" />
              Sign In
            </button>
          </Link>
          
          <Link href="/register" passHref>
            <button className="flex items-center justify-center w-full sm:w-44 px-6 py-3 border border-2 border-indigo-500 text-base font-medium rounded-full shadow-sm text-indigo-300 hover:text-white hover:bg-indigo-500/10 transition-colors mt-3 sm:mt-0">
              <UserPlus className="mr-2 h-5 w-5" />
              Register
            </button>
          </Link>
        </div>

        <p className="mt-12 text-sm text-gray-600">
          To view the user dashboard, please log in.
        </p>
      </main>
    </div>
  );
}