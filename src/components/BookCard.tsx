
import Image from 'next/image';
import type { IBook } from '@/types/books.type';
import Link from 'next/link';

interface IBookCardProps {
    book: IBook;
}

const BookCard = ({ book }: IBookCardProps) => {
    return (
        <div
            key={book.bookId}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
            {/* Image */}
            <div className="relative h-72 overflow-hidden bg-gray-100">
                <Image
                    src={book.image}
                    alt={book.bookName}
                    width={500}
                    height={450}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-green-700 shadow-sm backdrop-blur-sm">
                    {book.category}
                </span>

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-sm font-semibold shadow-sm backdrop-blur-sm">
                    <span className="text-yellow-500">★</span>
                    <span>{book.rating}</span>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6">

                {/* Book Name */}
                <h3 className="line-clamp-1 text-xl font-bold text-gray-900 transition-colors group-hover:text-green-600">
                    {book.bookName}
                </h3>

                {/* Author */}
                <p className="mt-1 text-sm text-gray-500">
                    by{" "}
                    <span className="font-medium text-gray-700">
                        {book.author}
                    </span>
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {book.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-3">
                    <Link href={`/books/${book.bookId}`}>
                        <button className="w-full rounded-lg bg-gray-700 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-gray-900">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
