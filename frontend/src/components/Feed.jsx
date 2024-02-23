import React, { useContext } from 'react';
import Card from './Card';
import { Context } from '../context/contextApi'; // Import the context

const Feed = () => {
  const { searchResults } = useContext(Context); // Get searchResults from the context

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 md:gap-20 gap-4 mt-6 md:mx-12'>
      {/* Map over the searchResults and render a Card for each article */}
      {searchResults.map((article, index) => (
        <Card key={index} article={article} /> // Pass each article as a prop
      ))}
    </div>
  );
};

export default Feed;
