
import type { IBook } from "@/types/books.type";
import Image from "next/image";
import ReadButton from "@/components/booksDetails/ReadButton";
import WishListButton from "@/components/booksDetails/WishListButton";

interface IBookDetailsPageProps {
    params: Promise<{
        bookid: string;
    }>;
}

const getBooks = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/bookData.json`);
    const data = await res.json();
    return data;
};

const BooKDetailsPage = async ({ params }: IBookDetailsPageProps) => {
    const { bookid } = await params;
    const bookData = await getBooks();

    const book = bookData.find(
        (book: IBook) => String(book.bookId) === String(bookid)
    );

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                {/* ================= IMAGE ================= */}
                <div className="flex items-center justify-center rounded-xl bg-[#f5f5f5] p-8">
                    <Image
                        src={book.image}
                        width={500}
                        height={600}
                        alt={book.bookName}
                        className="h-125 w-full object-contain"
                        priority
                    />
                </div>

                {/* ================= DETAILS ================= */}
                <div className="flex flex-col justify-center">

                    {/* Book Name */}
                    <h1 className="text-4xl font-bold text-gray-900">
                        {book.bookName}
                    </h1>

                    {/* Author */}
                    <p className="mt-2 text-sm text-gray-600">
                        By :{" "}
                        <span className="font-medium text-gray-800">
                            {book.author}
                        </span>
                    </p>

                    {/* Category */}
                    <div className="mt-5 border-y border-gray-200 py-4">
                        <p className="text-sm font-medium text-gray-700">
                            {book.category}
                        </p>
                    </div>

                    {/* Review */}
                    <div className="mt-5">
                        <p className="text-sm leading-6 text-gray-500">
                            <span className="font-bold text-gray-800">Review :</span>{" "}
                            {book.review}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="mt-6 flex items-center gap-3">
                        <span className="text-sm font-bold text-gray-800">
                            Tag
                        </span>

                        {book.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="my-5 border-t border-gray-200"></div>

                    {/* Book Information */}
                    <div className="space-y-3 text-sm">

                        <div className="grid grid-cols-2">
                            <span className="text-gray-500">
                                Number of Pages:
                            </span>

                            <span className="font-semibold text-gray-800">
                                {book.totalPages}
                            </span>
                        </div>

                        <div className="grid grid-cols-2">
                            <span className="text-gray-500">
                                Publisher:
                            </span>

                            <span className="font-semibold text-gray-800">
                                {book.publisher}
                            </span>
                        </div>

                        <div className="grid grid-cols-2">
                            <span className="text-gray-500">
                                Year of Publishing:
                            </span>

                            <span className="font-semibold text-gray-800">
                                {book.yearOfPublishing}
                            </span>
                        </div>

                        <div className="grid grid-cols-2">
                            <span className="text-gray-500">
                                Rating:
                            </span>

                            <span className="font-semibold text-gray-800">
                                {book.rating}
                            </span>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="mt-7 flex gap-3">
                        <ReadButton book={book}></ReadButton>
                        
                        <WishListButton book={book}></WishListButton>
                        
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BooKDetailsPage;
