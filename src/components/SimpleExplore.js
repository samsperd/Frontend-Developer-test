import React from 'react'
import { Link } from 'react-router-dom';
import { useGetArtsQuery } from '../services/artsApi'
import ArtItem from './ArtItem'
import Loader from './Loader';
import SearchInput from './SearchInput/SearchInput';

const SimpleExplore = () => {

    const { data: artsList, isFetching } = useGetArtsQuery();
    const arts = artsList?.data || [];
    if (isFetching ) return <Loader />;



  return (
    <div className='text-white py-12  p-4'>
        <div className='md:grid grid-cols-2 mb-7'>
            <div>
                <h2 className='text-2xl tracking-wide font-bold'>
                    Art in the collection
                </h2>
                <p className='tracking-wide'>
                    Browse a curated selection of art around the world, including Museum exhibitions, gallery openings, upcoming and many more
                </p>
            </div>
            <div className='flex h-full justify-end pt-4'>
                <SearchInput />
            </div>
        </div>
        <div>
            <div className='md:grid grid-cols-3 gap-4'>
                {
                    arts.map((e, i) => (
                        <Link key={i} to={`/view-page/${e?.id}`} >
                        <ArtItem key={i} title={e?.title} image_id={e?.image_id} imageHeight={e?.thumbnail?.height} imageWidth={e?.thumbnail?.width} location={e?.place_of_origin} startYear={e?.date_start} endYear={e?.date_end} artistName={e?.artist_title} />
                        </Link>
                    ))
                }
            </div>
            <div className='flex justify-center items-center py-32'>
                <div className='bg-yellow-400 border-r-[5px] border-b-[5px] rounded-bl-[2.1rem]  rounded-tr-[2.1rem] border-yellow-400 w-40 h-14'>
                    <button className='justify-center border-t-2 border-white bg-white rounded-bl-[1.8rem] rounded-tr-[1.8rem] text-black w-full h-full'>Explore Arts</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SimpleExplore