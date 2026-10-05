'use client'
import { useContext, useState } from 'react';
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.type';
import ListedBookCard from '@/components/ListedBookCard';

const ListedBooksPage = () => {

    const { readBooks, wishlist } = useContext(BooksContext)

    const [ sortBy,setSortBy ] = useState<'rating' | 'pages' | 'year'>('rating')

    const sortBooks = (books:IBook[]) => {
        const sortedBooks = [...books]
        
        if (sortBy === 'rating') {
            sortedBooks.sort((a,b) => b.rating - a.rating) 
        }
        else if (sortBy === 'pages') {
            sortedBooks.sort((a,b) => a.totalPages - b.totalPages)
        }
        else if (sortBy === 'year') {
            sortedBooks.sort((a,b) => a.yearOfPublishing - b.yearOfPublishing)
        }
        return sortedBooks
    }

    const sortedReadBooks = sortBooks(readBooks)
    const sortedWishlist = sortBooks(wishlist)
    return (
        <div className='max-w-7xl mx-auto px-4 py-10'>
            <h2 className='my-4 bg-gray-200 rounded-3xl py-8 font-bold text-4xl text-center'>Listed Books</h2>

            <div className='text-center my-8'>
                <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'rating' | 'pages' | 'year')}
                className="select select-success bg-green-400 text-white font-bold">
                    <option disabled={true}>Sort By</option>
                    <option value={'rating'}>Rating</option>
                    <option value={'pages'}>Number of pages</option>
                    <option value={'year'}>Publisher yeaar</option>
                </select>
            </div>

            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Read Books: ${readBooks.length}`}
                    defaultChecked
                />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        sortedReadBooks.length > 0 ? sortedReadBooks.map((book: IBook) => {
                            return (
                                <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
                            )
                        }) : <p className='text-center text-lg font-semibold'>No read books found</p>
                    }
                </div>

                <input
                    type="radio"
                    name="my_tabs_3"
                    className="tab"
                    aria-label={`Wishlist Books: (${wishlist.length})`}
                />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        sortedWishlist.length > 0 ? sortedWishlist.map((book: IBook) => {
                            return (
                                <ListedBookCard key={book.bookId} book={book}></ListedBookCard>
                            )
                        }) : <p className='text-center text-lg font-semibold'>No Wishlist books found</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default ListedBooksPage;
