'use client'
import { useContext } from "react";
import type { IBook } from "@/types/books.type";
import { BooksContext } from "@/context/BooksContext";
import { toast } from "react-toastify";

const ReadButton = ({book}:{book:IBook}) => {

    const {readBooks,setReadBooks} = useContext(BooksContext)

    const handleReadBook = () => {
        setReadBooks([...readBooks,book])
        toast.success(`You Have Read "${book.bookName}"`)
    }

    return (
        <button className="rounded-md border border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-100" onClick={() => handleReadBook()}>
            Read
        </button>
    );
};

export default ReadButton;