import React from 'react'
import { useContext } from 'react'
import { Context } from '../context/contextApi' // Import the context
const Pagination = () => {
    const { currentpage, setCurrentpage, searchResults } = useContext(Context);
    const pageSize = 12; // Number of articles per page
  
    const handleNextPage = () => {
        setCurrentpage(currentpage + 1);
    };
  
    const handlePrevPage = () => {
        setCurrentpage(currentpage - 1);
    };
  
    return (
      <div className="flex my-5 flex-row w-full justify-around gap-32">
        <button onClick={handlePrevPage} className='bg-blue-200 p-2 rounded-lg' disabled={currentpage === 1}>Previous</button>
        <span className='bg-blue-200 rounded-lg p-2'>{currentpage}</span>
        <button onClick={handleNextPage}  className='bg-blue-200 p-2 rounded-lg mr-4' disabled={searchResults.length < pageSize}>Next</button>
      </div>
    );
  };
  
  export default Pagination;