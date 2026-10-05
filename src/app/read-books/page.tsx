"use client";

import { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from "recharts";

import { BooksContext } from "@/context/BooksContext";
import type { IBook } from "@/types/books.type";

const ReadBooks = () => {
  const { readBooks } = useContext(BooksContext);

  const data = readBooks.map((book: IBook) => ({
    name: book.bookName,
    pages: book.totalPages,
    rating: book.rating,
  }));

  const totalPages = readBooks.reduce(
    (total, book) => total + book.totalPages,
    0
  );

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-600">
            Reading Statistics
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Your Read Books
          </h1>

          <p className="mt-2 text-gray-500">
            Track the books you have read and explore your reading progress.
          </p>
        </div>

        {/* Stats */}
        {readBooks.length > 0 && (
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">

            {/* Total Books */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-gray-500">
                Books Read
              </p>

              <div className="mt-2 flex items-end gap-2">
                <h2 className="text-3xl font-bold text-gray-900">
                  {readBooks.length}
                </h2>

                <span className="mb-1 text-sm text-green-600">
                  books
                </span>
              </div>
            </div>

            {/* Total Pages */}
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-gray-500">
                Total Pages
              </p>

              <div className="mt-2 flex items-end gap-2">
                <h2 className="text-3xl font-bold text-gray-900">
                  {totalPages.toLocaleString()}
                </h2>

                <span className="mb-1 text-sm text-green-600">
                  pages
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Chart / Empty State */}
        {readBooks.length > 0 ? (
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-8">

            {/* Chart Header */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Pages Per Book
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Compare the number of pages in each book you've read.
              </p>
            </div>

            {/* Chart */}
            <div className="h-[450px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{
                    top: 30,
                    right: 20,
                    left: 0,
                    bottom: 60,
                  }}
                  barCategoryGap="25%"
                >
                  <defs>
                    <linearGradient
                      id="bookBarGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#22c55e"
                      />
                      <stop
                        offset="100%"
                        stopColor="#16a34a"
                      />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e5e7eb"
                  />

                  <XAxis
                    dataKey="name"
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    angle={-30}
                    textAnchor="end"
                    interval={0}
                  />

                  <YAxis
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    axisLine={false}
                    tickLine={false}
                    width={45}
                  />

                  <Tooltip
                    cursor={{ fill: "#f0fdf4" }}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                    }}
                    labelStyle={{
                      fontWeight: "600",
                      color: "#111827",
                    }}
                  />

                  <Bar
                    dataKey="pages"
                    fill="url(#bookBarGradient)"
                    radius={[8, 8, 0, 0]}
                    maxBarSize={55}
                  >
                    <LabelList
                      dataKey="pages"
                      position="top"
                      fill="#374151"
                      fontSize={12}
                      fontWeight={600}
                    />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-white px-6 text-center shadow-sm">

            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
              <span className="text-4xl">📚</span>
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              No books read yet
            </h2>

            <p className="mt-2 max-w-md text-gray-500">
              Start reading some books and add them to your reading list.
              Your reading statistics will appear here.
            </p>

            <button className="mt-6 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700">
              Explore Books
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReadBooks;