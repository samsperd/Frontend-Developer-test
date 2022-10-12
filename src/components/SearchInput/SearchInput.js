import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useHistory } from 'react-router-dom';

const SearchInput = () => {

    const [searchItem, setSearchItem] = useState('');
    const history = useHistory();

    const find = (word) => {
      if (word === null || word.length === 0) {
        return;
      } else {
        const slug = word.trim().replace(/\s+/g, '-').toLowerCase()
        return history.push(`/search/${slug}`)
      }
    }

  return (
    <>
        <input
            type="text"
            className='rounded-l-3xl hover:border focus:border border-yellow-500 text-yellow-500 bg-[#ee9b0077] h-12 w-full flex-[7]  px-4'
            value={searchItem} 
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder='Search'
            onKeyPress={(e) => (e.key === "Enter" && find(searchItem))}
            />
        <button onClick={() => find(searchItem)} className='bg-yellow-500 h-12 flex-1 flex justify-center items-center'>
            <FaSearch size={'20'} />
        </button>
    </>
  )
}

export default SearchInput