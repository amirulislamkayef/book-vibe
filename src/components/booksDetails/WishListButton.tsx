'use client'
import { useContext } from "react";
import type { IBook } from "@/types/books.type";
import { BooksContext } from "@/context/BooksContext";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {

    const { wishlist, setWishlist } = useContext(BooksContext)

    const handleWishListBook = () => {
        setWishlist([...wishlist, book])
        toast.success(`You Have added "${book.bookName}" to you wish list`)
    }

    return (
        <button className="rounded-md bg-[#4db3d0] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3da4c1]" onClick={() => handleWishListBook()}>
            Wishlist
        </button>
    );
};

export default WishListButton;