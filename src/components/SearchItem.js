import React from 'react'
import { useGetArtDetailsQuery } from '../services/artsApi';
import Spinner from './Spinner';

const SearchItem = ({ artId }) => {

    const { data, isFetching } = useGetArtDetailsQuery({ id:artId });
    const artDetails = data?.data;
    if (isFetching) {
      return <Spinner />
    }
  
    const getImage = (imageId) => {
        if (imageId == null) {
            return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
        }
        return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
    };

  return (
    <div className='h-auto shadow-md rounded-br-[9.7rem] rounded-tl-[9.7rem] overflow-hidden bg-[#14000069] hover:scale-105 ease-in duration-300 my-3'>
        <div className="flex w-full items-center h-80 overflow-hidden justify-center">
            <img src={getImage(artDetails?.image_id)} alt="/" />
        </div>
        <div className='px-3 py-2'>
            <h3 className='font-bold'>{artDetails?.title} { artDetails?.artist_title && (<span className='font-normal'> - { artDetails?.artist_title }</span>) }  </h3>
            <p className='text-sm'>
                { artDetails?.date_start } - { artDetails?.date_end }
            </p>
            <p>
                { artDetails?.place_of_origin }
            </p>
        </div>
    </div>
  )
}

export default SearchItem