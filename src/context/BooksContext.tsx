'use client'

import React from 'react';
import { createContext, useState } from 'react';
import type { IBook } from '@/types/books.type';

interface IBooksContext {
    readBooks: IBook[];
    setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
    wishlist: IBook[];
    setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
}
export const BooksContext = createContext<IBooksContext>({
    readBooks: [],
    setReadBooks: () => { },
    wishlist: [],
    setWishlist: () => { }
})

const BooksProvider = ({ children }: { children: React.ReactNode }) => {

    const [readBooks, setReadBooks] = useState<IBook[]>([])
    const [wishlist, setWishlist] = useState<IBook[]>([])

    const sharedData = {
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist,
    }
    return (

        <BooksContext.Provider value={sharedData}>
            {children}
        </BooksContext.Provider>
    );
};

export default BooksProvider;
