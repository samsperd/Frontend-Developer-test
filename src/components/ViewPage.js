import React from 'react'
import { AiOutlineArrowLeft, AiOutlineShareAlt } from 'react-icons/ai';
import { useHistory, useParams } from 'react-router-dom'
import { useGetArtDetailsQuery } from '../services/artsApi';
import Loader from './Loader';

const ViewPage = () => {

  const { artId } = useParams()
  const history = useHistory()
  console.log(artId);
  const { data, isFetching } = useGetArtDetailsQuery({ id:artId });
  const artDetails = data?.data;
  if (isFetching) {
    return <Loader />
  }
  const getImage = (imageId) => {
    if (imageId == null) {
        return 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
    }
    return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
};


  return (
    <div className='md:h-screen py-10 text-white w-full'>
      <div className='h-full w-full px-5'>
        <div className='flex justify-between py-2'>
          <span onClick={() => history.goBack()}>
            <AiOutlineArrowLeft size={'30px'} />
          </span>
          <span>
            <AiOutlineShareAlt size={'30px'} />
          </span>
        </div>
        <div className='md:flex justify-center w-full'>
          <div className='flex-1 flex justify-center'>
            <div className='h-[500px] bg-gray-500 w-96 shadow-md rounded-br-[9.7rem] rounded-tl-[9.7rem] overflow-hidden bg-contain' style={{ backgroundImage: `url(${getImage(artDetails?.image_id)})` }}>
              {/* <img src={getImage(artDetails?.image_id)} alt="/" /> */}
            </div>
          </div>
          <div className='px-7 flex-1 py-5 md:py-0'>
            <div className="w-full pb-14">
              <h2 className='font-bold text-xl pb-5'>
                { artDetails.title }
              </h2>
              <p className='text-lg'>
                Browse a curated selection of art around the world, including Museum ehibitions, gallery openings, upcoming and many more. Browse a curated selection of art around the world, including museum exhibitions, gallery openings, upcoming and many more. Browse a curated selection of art around the world, including Museum ehibitions, gallery openings, upcoming and many more. Browse a curated selection of art around the world, including museum exhibitions, gallery openings, upcoming and many more.
              </p>
            </div>
            <div className='flex gap-4'>
              <div className='bg-yellow-400 border-r-[5px] border-b-[5px] rounded-bl-[2.1rem]  rounded-tr-[2.1rem] border-yellow-400 w-40 h-14'>
                  <button className='justify-center border-t-2 border-white bg-white rounded-bl-[1.8rem] rounded-tr-[1.8rem] text-black w-full h-full'>Explore Arts</button>
              </div>
              <div className=' w-40 h-14'>
                  <button className='justify-center text-white w-full h-full'>Explore Arts</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPage