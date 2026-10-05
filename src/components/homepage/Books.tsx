
import React from "react";
import BookCard from "../BookCard";
import type { IBook } from "@/types/books.type";

const getBooks = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/bookData.json`);
    const data = await res.json();
    return data;
};

const Books = async () => {
    const books = await getBooks();

    return (
        <section className="max-w-7xl mx-auto px-4 py-20">

            {/* Section Heading */}
            <div className="mb-12 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-600">
                    Explore Some Popular Collection
                </p>

                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                    Popular Books
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-gray-500">
                    Discover amazing stories, timeless classics, and inspiring books
                    from talented authors around the world.
                </p>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {books.slice(0,3).map((book:IBook,ind:number) => (
                    <BookCard key={ind} book={book}></BookCard>
                ))}
            </div>
        </section>
    );
};

export default Books;
