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
            <div className='bg-yellow-400 border-r-[16px] border-b-[16px] rounded-bl-[8rem] rounded-tr-[8rem] border-yellow-400 w-3/5 max-h-[29rem] relative'>
            <span className='absolute left-[-3.5rem] top-[-1rem] h-52 w-28'>

            <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" width="140" height="183" viewBox="0 0 140 183" fill="none">
                    <g clipPath="url(#clip0_11_243)">
                    <path d="M0 5.4955C0 2.46042 2.46042 0 5.4955 0H84.6306C114.981 0 139.586 24.6042 139.586 54.955V177.505C139.586 180.54 137.125 183 134.09 183H54.9549C24.6042 183 0 158.396 0 128.045V5.4955Z" fill="#1A1405"/>
                    <path d="M11.3875 -4.94409L32.1349 33.2214C45.377 57.5804 72.933 70.4835 100.122 65.0565V65.0565C129.855 59.1219 159.619 75.1082 171.09 103.173L181.417 128.438" stroke="#FBAF00" strokeWidth="1.61185" strokeLinecap="round"/>
                    <path d="M3.38354 4.97986L24.131 43.1453C37.373 67.5043 64.9291 80.4075 92.1185 74.9805V74.9805C121.851 69.0459 151.615 85.0321 163.086 113.097L173.413 138.362" stroke="#FBAF00" strokeWidth="1.61185" strokeLinecap="round"/>
                    <path d="M-4.62036 14.9037L16.1271 53.0692C29.3691 77.4282 56.9252 90.3314 84.1146 84.9044V84.9044C113.847 78.9698 143.611 94.956 155.082 123.021L165.409 148.286" stroke="#FBAF00" strokeWidth="1.61185" strokeLinecap="round"/>
                    <path d="M-12.6238 24.8277L8.12369 62.9931C21.3657 87.3522 48.9218 100.255 76.1112 94.8283V94.8283C105.843 88.8937 135.607 104.88 147.079 132.945L157.405 158.21" stroke="#FBAF00" strokeWidth="1.61185" strokeLinecap="round"/>
                    <path d="M-20.6282 34.7516L0.119299 72.9171C13.3613 97.2761 40.9174 110.179 68.1068 104.752V104.752C97.839 98.8177 127.603 114.804 139.074 142.869L149.401 168.134" stroke="#FBAF00" strokeWidth="1.61185" strokeLinecap="round"/>
                    <path d="M-28.6318 44.6756L-7.88436 82.841C5.35767 107.2 32.9137 120.103 60.1031 114.676V114.676C89.8354 108.742 119.599 124.728 131.071 152.793L141.397 178.058" stroke="#FBAF00" strokeWidth="1.61185" strokeLinecap="round"/>
                    <path d="M-36.6357 54.5995L-15.8883 92.7649C-2.64624 117.124 24.9098 130.027 52.0992 124.6V124.6C81.8315 118.666 111.596 134.652 123.067 162.717L133.393 187.982" stroke="#FBAF00" strokeWidth="1.61185" strokeLinecap="round"/>
                    <path d="M-32.323 153.149L4.61235 130.284C28.1862 115.69 39.5156 87.45 32.5647 60.6097V60.6097C24.9636 31.2593 39.2468 0.641451 66.6205 -12.3934L91.2632 -24.1278" stroke="#FBAF00" strokeWidth="1.61185" strokeLinecap="round"/>
                    <path d="M-21.9634 160.581L14.972 137.715C38.5459 123.121 49.8752 94.8816 42.9243 68.0414V68.0414C35.3232 38.6909 49.6064 8.07311 76.9801 -4.96172L101.623 -16.6961" stroke="#FBAF00" strokeWidth="1.61185" strokeLinecap="round"/>
                    <path d="M-11.604 168.013L25.3313 145.147C48.9052 130.553 60.2346 102.313 53.2837 75.4732V75.4732C45.6826 46.1227 59.9657 15.5049 87.3394 2.47006L111.982 -9.26432" stroke="#FBAF00" strokeWidth="1.61185" strokeLinecap="round"/>
                    <path d="M-1.24487 175.444L35.6905 152.579C59.2644 137.985 70.5937 109.745 63.6428 82.905V82.905C56.0417 53.5545 70.3249 22.9367 97.6986 9.90184L122.341 -1.83254" stroke="#FBAF00" strokeWidth="1.61185" strokeLinecap="round"/>
                    <path d="M9.1145 182.876L46.0498 160.01C69.6237 145.416 80.9531 117.177 74.0022 90.3367V90.3367C66.4011 60.9862 80.6843 30.3684 108.058 17.3335L132.701 5.59916" stroke="#FBAF00" strokeWidth="1.61185" strokeLinecap="round"/>
                    <path d="M19.4736 190.308L56.409 167.442C79.9829 152.848 91.3122 124.609 84.3613 97.7684V97.7684C76.7602 68.418 91.0434 37.8001 118.417 24.7653L143.06 13.0309" stroke="#FBAF00" strokeWidth="1.61185" strokeLinecap="round"/>
                    <path d="M29.833 197.74L66.7684 174.874C90.3422 160.28 101.672 132.04 94.7207 105.2V105.2C87.1196 75.8497 101.403 45.2319 128.776 32.1971L153.419 20.4627" stroke="#FBAF00" strokeWidth="1.61185" strokeLinecap="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_11_243">
                    <path d="M0 5.4955C0 2.46042 2.46042 0 5.4955 0H84.6306C114.981 0 139.586 24.6042 139.586 54.955V177.505C139.586 180.54 137.125 183 134.09 183H54.9549C24.6042 183 0 158.396 0 128.045V5.4955Z" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </span>
                <img src={getImage(arts[0]?.image_id)} alt="/"  className='justify-center bg-white rounded-bl-[6rem] rounded-tr-[6rem] text-black w-full h-full' />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero