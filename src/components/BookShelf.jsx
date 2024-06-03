import React, { useEffect, useState } from 'react'

const BookShelf = () => {
    const [results,setResults]=useState([]);
    useEffect(()=>
    {
                const bookshelf = JSON.parse(localStorage.getItem('bookshelf'))
                setResults(bookshelf);
    },[])
  return (
    <div className='bg-black'>
    {results.length > 0 ? (
      <div className=" shadow-md rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-4">Search Results</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2">
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
    ) : (
      <div className="bg-yellow-100 text-yellow-800 p-4 rounded">
        <p className="text-center">No results found.</p>
      </div>
    )}
  </div>
  )
}

export default BookShelf