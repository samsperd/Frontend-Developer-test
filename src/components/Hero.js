import React from 'react'
import { useGetArtsQuery } from '../services/artsApi';
import Loader from './Loader';

const Hero = () => {
    const { data: artsList, isFetching } = useGetArtsQuery();
    const arts = artsList?.data || [];
    if (isFetching ) return <Loader />;
    const getImage = (imageId) => {
        if (imageId == null) {
            return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
        }
        return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
    };


  return (
    <div className='w-full md:h-screen px-2 flex py-12'>
    <div className='md:grid grid-cols-2'>
        <div className='pl-4'>
                <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 tracking-wide'>
                    Discover amazing art around the <br /> <span className='text-yellow-400'>
                    world
                    </span>
                </h1>
                <p className='mb-8 text-white text-lg tracking-wide'>
                    Browse a curated selection of art around the world, including Museum exhibitions, gallery openings, upcoming and many more
                </p>
            <div className='bg-yellow-400 border-r-[5px] border-b-[5px] rounded-bl-[2.1rem]  rounded-tr-[2.1rem] border-yellow-400 w-48 h-16'>
                <button className='justify-center border-t-2 border-white bg-white rounded-bl-[1.8rem] rounded-tr-[1.8rem] text-black w-full h-full'>Explore Arts</button>
            </div>
            <div className='text-white flex justify-end'>
            <img src="/images/star.png" alt="Star" className='transform rotate-45' width={50} height={50} />
            </div>
        </div>
        <div className=' hidden md:flex justify-end pr-14'>
            <div className='bg-yellow-400 border-r-[10px] border-b-[10px] rounded-bl-[6rem] border-t-[1px] rounded-tr-[6rem] border-yellow-400 w-3/5 max-h-[28rem]'>
                <img src={getImage(arts[0]?.image_id)} alt="/"  className='justify-center bg-white rounded-bl-[5rem] rounded-tr-[5rem] text-black w-full h-full' />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero