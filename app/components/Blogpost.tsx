// components/BlogPost.tsx
import Image from 'next/image';
import React from 'react';


const BlogPost: React.FC = () => {
  return (
    <section className="flex flex-col justify-center antialiased bg-gradient-to-r from-orange-600 to-yellow-400 text-gray-200 min-h-screen">
  <h1 className="text-4xl flex justify-center pb-10 font-bold tracking-tight text-white sm:text-6xl md:text-5xl lg:text-4xl">
    <span className="text-black sm:justify-center">Learn More </span>
    <span className="px-3 sm:flex sm:items-center sm:justify-center">about ayurveda with our blogs</span>
  </h1>
      <div className="max-w-6xl mx-auto p-4 sm:px-6 h-full">
        {/* Blog post */}
        <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
          <a className="relative block group" href="#0">
            <div className="absolute inset-0 bg-orange-300 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
            <figure className="relative h-0 pb-[56.25%] md:pb-[75%] lg:pb-[56.25%] overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
              <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src="https://images.pexels.com/photos/105028/pexels-photo-105028.jpeg" width="540" height="303" alt="Blog post" />
            </figure>
          </a>
          <div>
            <header>
              <div className="mb-3">
                <ul className="flex flex-wrap text-xs font-medium -m-1">
                  <li className="m-1">
                    <a className="inline-flex text-center text-black py-1 px-3 rounded-full bg-white hover:bg-orange-100 transition duration-150 ease-in-out" href="#0">Unani</a>
                  </li>
                  <li className="m-1">
                    <a className="inline-flex text-center text-black py-1 px-3 rounded-full bg-white hover:bg-orange-100  transition duration-150 ease-in-out" href="#0">Herbal</a>
                  </li>
                </ul>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Lorem ipsum Duis aute irure  </a>
              </h3>
            </header>
            <p className="text-lg text-black flex-grow">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            <footer className="flex items-center mt-4">
              <a href="#0">
                <Image className="rounded-full flex-shrink-0 mr-4" src="https://preview.cruip.com/open-pro/images/news-author-04.jpg" width="40" height="40" alt="Author 04" />
              </a>
              <div>
                <a className="font-medium text-black hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Some Guy</a>
                <span className="text-black"> - </span>
                <span className="text-white">July 19, 2023</span>
              </div>
            </footer>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogPost;
