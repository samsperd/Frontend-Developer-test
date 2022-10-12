import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Link, useParams } from 'react-router-dom'
import { useGetArtsSearchQuery } from '../../services/artsApi'
import Loader from '../Loader'
import SearchInput from '../SearchInput/SearchInput'
import SearchItem from '../SearchItem'

const Search = () => {
  const { term } = useParams()
  const quest = term.toUpperCase().replace(/-/g, ' ')
  const [currentPage, setCurrentPage] = useState('1')
  const { data, isFetching } = useGetArtsSearchQuery({ q: quest, page: currentPage })
  const searchList = data?.data;
  const pageCount = data?.pagination?.total_pages;
  
	const handlePageChange = (selectedObject) => {
		setCurrentPage(selectedObject.selected);
	};
  if (isFetching) {
    return <Loader />
  }


  return (
    <div className='w-full text-white py-10'>
      <div className="w-full p-5">
        <div className="md:flex py-3">
          <div className="flex-1 shadow-sm shadow-gray-400 p-3">
            <div className='flex justify-center mb-5'>
              <SearchInput />
            </div>
          </div>
          <div className='flex-1 p-3 flex-grow-[2.5]'>
            <h3 className='font-bold text-lg'>{data?.pagination?.total} Results of your search <span className='text-yellow-400'>{ quest }</span> </h3>
          </div>
        </div>
        <div className='w-full'>
        <div className="w-full md:grid grid-cols-3">
                {
                  searchList.map((e, i) => (
                        <Link key={i} to={`/view-page/${e?.id}`} >
                        <SearchItem key={i} title={e?.title} image_id={e?.image_id} imageHeight={e?.thumbnail?.height} imageWidth={e?.thumbnail?.width} location={e?.place_of_origin} startYear={e?.date_start} endYear={e?.date_end} artistName={e?.artist_title} />
                        </Link>
                    ))
                }
              </div>
              <ReactPaginate
                  pageCount={pageCount}
                  onPageChange={(e) => handlePageChange(e)}
                  breakLabel="..."
                  nextLabel="next >"
                  pageRangeDisplayed={5}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                  containerClassName={'flex gap-4'}
                  forcePage={currentPage}
					breakClassName={'page'}
					nextLinkClassName={'page'}
					disabledClassName={'text-gray-300'}
					activeClassName={'bg-white text-black'}                  
                />



        </div>        
      </div>
    </div>
  )
}

export default Search