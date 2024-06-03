import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BookSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const Happen=()=>
    {
        const fetchResults = async () => {
            if (query.trim() !== '') {
              const response = await axios.get(
                `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
              );
              setResults(response.data.docs);
            } else {
              setResults([]);
            }
          };
          fetchResults();
    }
  return (
    <div className='bg-black h-full sm:h-screen text-white flex flex-col items-center'>
        <div>
      <input
      className='border-2 border-solid border-black p-2 m-2 text-black text-2xl rounded-md'
        type="text"
        placeholder="Search for a book..."
        value={query}
        onChange={(e) => setQuery(e.target.value)
        }
      />
      <button className='text-white border-2 border-blue-600 p-2 text-xl bg-blue-600 hover:bg-blue-500 rounded-md' onClick={Happen}>submit</button>
      </div>
      <hr className='bg-white w-full text-white mb-3'></hr>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        {results.map((book) => (
          <div key={book.key} className="border-2 border-solid w-fit p-2 m-2 flex flex-col justify-center items-center rounded-md hover:transform hover:rotate-2 hover:bg-blue-500">
            <h3 className='text-xl font-semibold'>{book.title}</h3>
            <hr className='w-full'></hr>
            <p >Author: {book.author_name}</p>
            <p>First Publish Year: {book.first_publish_year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSearch;