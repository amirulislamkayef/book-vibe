import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { IBook } from '@/types/books.type';

const ListedBookCard = ({ book }:{book:IBook}) => {
    return (
        <div>
            <div className="w-full border border-gray-200 rounded-xl p-4 flex gap-5">

                {/* Image */}
                <div className="w-36 h-36 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                    <Image
                        src={book.image}
                        alt={book.bookName}
                        width={120}
                        height={140}
                        className="w-28 h-32 object-contain"
                    />
                </div>

                {/* Details */}
                <div className="flex-1">
                    <h2 className="text-xl font-bold">
                        {book.bookName}
                    </h2>

                    <p className="text-sm text-gray-600 mt-1">
                        By : {book.author}
                    </p>

                    <div className="flex items-center gap-3 mt-4 text-sm">
                        <span className="font-semibold">Tag</span>

                        <span className="bg-green-50 text-green-500 px-3 py-1 rounded-full">
                            #Young Adult
                        </span>

                        <span className="bg-green-50 text-green-500 px-3 py-1 rounded-full">
                            #Identity
                        </span>

                        <span className="text-gray-500">
                            Year of Publishing: {book.yearOfPublishing}
                        </span>
                    </div>

                    <div className="flex gap-6 mt-4 text-sm text-gray-500">
                        <span>
                            Publisher: {book.publisher}
                        </span>

                        <span>
                            Page {book.totalPages}
                        </span>
                    </div>

                    <div className="border-t border-gray-200 mt-3 pt-3 flex items-center gap-3">
                        <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-sm">
                            Category: {book.category}
                        </span>

                        <span className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full text-sm">
                            Rating: {book.rating}
                        </span>
                        <Link href={`/books/${book.bookId}`}>
                            <button className="bg-green-500 text-white px-5 py-2 rounded-full text-sm">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBookCard;