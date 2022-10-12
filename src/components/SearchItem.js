import React from 'react'

const SearchItem = ({ title, image_id }) => {

    const getImage = (imageId) => {
        if (imageId == null) {
            return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
        }
        return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
    };


  return (
    <div className='h-auto shadow-md rounded-br-[9.7rem] rounded-tl-[9.7rem] overflow-hidden bg-[#14000069]'>
        <div className="flex w-full items-center h-80 overflow-hidden justify-center">
            <img src={getImage(image_id)} alt="/" />
        </div>
        <div className='px-3 py-5 mb-3'>
            <h3 className='font-bold'>{ title }</h3>
        </div>
    </div>
  )
}

export default SearchItem