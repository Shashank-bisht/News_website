import React from 'react';

const Card = ({ article }) => {
  const { author, title, description, publishedAt, url, urlToImage, source} = article;

  return (
    <div className="mx-auto md:mx-12 sm:w-96 w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='h-1/3'>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="rounded-t-lg bg-cover w-full h-52" src={urlToImage} alt={title} />
      </a>
      </div>
      <div className='h-2/3 p-6'>
      <div className='mt-2'>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        </div>
        <div className=''>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description?.slice(0, 120)}...........<a className='text-blue-700' href={url} target="_blank" rel="noopener noreferrer">readmore</a></p>
        <p className="mb-3 text-sm text-gray-500">{`Published at: ${new Date(publishedAt).toLocaleString()}`}</p>
        <p className="mb-3 text-sm text-gray-500">{`Author: ${author}`}</p>
        <a href={url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" target="_blank" rel="noopener noreferrer">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
        <span className='bg-gray-200 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-16'>{source.name}</span>
      </div>
      </div>
      </div>
  );
};

export default Card;
