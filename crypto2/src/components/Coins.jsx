import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CoinItem from './CoinItem';
import Coin from '../routes/Coin';
import './coins.css';
import '../index.css';


const Coins = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const perPage = 10; // Number of coins per page

    // Function to handle changes in the search input
    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Filter coins based on the search query and pagination
    const filteredCoins = props.coins
        .filter((coin) => coin.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice((page - 1) * perPage, page * perPage); // Get coins for the current page

    // Calculate the total number of pages
    const totalPages = Math.ceil(props.coins.length / perPage);

    // Handle click event to navigate to a specific page
    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    return (
        <div className='container'>
            <div className='bg-primary relative'>
                <input
                    type='text'
                    placeholder='Search Coins...'
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className='search-heading search-input custom-search-input text-xl text-gradient font-poppins anta-regular'
                />
                <div className='absolute inset-20 pointer-events-none'>
                    <div className='text-gradient h-full w-1/2 absolute top-0 left-0'></div>
                </div>
            </div>
            <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full blue__gradient'  />

            <div className='bg-primary'>
                <div className='heading bg-blue-gradient text-black font-poppins anta-regular text-xl'>
                    <p>#</p>
                    <p className='coin-name'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='hide-mobile'>Volume</p>
                    <p className='hide-mobile'>Mkt Cap</p>
                </div>

                {/* Display filtered coins */}
                {filteredCoins.map((coin) => (
                    <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
                        <CoinItem coins={coin} />
                    </Link>
                ))}
            </div>

         {/* Pagination */}
         <div className='pagination container flex justify-center mt-10 mb-10'>
                {/* Display first page */}
                <button
                    className={`mr-2 px-3 py-1 rounded-full text-xl ${page === 1 ? 'bg-black text-white page-heading' : 'bg-blue-gradient text-gray-700'}`}
                    onClick={() => handlePageChange(1)}
                    style={{ transform: 'scale(1)', transition: '.3s ease-in-out', cursor: 'pointer' }}
                >
                    1
                </button>

                {/* Display ellipsis if not on the first page */}
                {page > 2 && <span className='mr-2 text-gradient text-4xl '>...</span>}

                {/* Display five closest page numbers to the current page */}
                {Array.from({ length: Math.min(totalPages, 5) }).map((_, index) => {
                    const pageNumber = page - 2 + index;
                    if (pageNumber > 1 && pageNumber < totalPages) {
                        return (
                            <button
                                key={pageNumber}
                                className={`mr-2 px-4 py-2 rounded-full text-xl ${page === pageNumber ? 'bg-black text-white page-heading '  : 'bg-blue-gradient text-gray-700'}`}
                                onClick={() => handlePageChange(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        );
                    }
                    return null;
                })}

                {/* Display ellipsis if not on the last page */}
                {page < totalPages - 1 && <span className='mr-2 text-gradient text-4xl'>...</span>}

                {/* Display last page */}
                {totalPages > 1 && (
                    <button
                        className={`mr-2 px-3 py-1 rounded-full text-xl ${page === totalPages ? 'bg-black text-white page-heading' : 'bg-blue-gradient text-gray-700'}`}
                        onClick={() => handlePageChange(totalPages)}
                        style={{ transform: 'scale(1)', transition: '.3s ease-in-out', cursor: 'pointer' }}
                    >
                        {totalPages}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Coins;
