import React from "react";

const Footer = () => {
    return (
        <footer className="mt-20 bg-[#18251f] text-white">
            <div className="mx-auto max-w-7xl px-4 py-14">

                {/* Main Footer */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold">
                            Book<span className="text-green-400">Vibe</span>
                        </h2>

                        <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
                            Discover your next favorite book with BookVibe. Explore
                            timeless classics, inspiring stories, and amazing books
                            from authors around the world.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex gap-3">
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-green-500"
                            >
                                f
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-green-500"
                            >
                                𝕏
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-green-500"
                            >
                                in
                            </a>

                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm transition hover:bg-green-500"
                            >
                                ◎
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold">
                            Quick Links
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-gray-400">
                            <li>
                                <a
                                    href="/"
                                    className="transition hover:text-green-400"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/books"
                                    className="transition hover:text-green-400"
                                >
                                    Books
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/about"
                                    className="transition hover:text-green-400"
                                >
                                    About Us
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/contact"
                                    className="transition hover:text-green-400"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold">
                            Resources
                        </h3>

                        <ul className="mt-5 space-y-3 text-sm text-gray-400">
                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-green-400"
                                >
                                    My Books
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-green-400"
                                >
                                    Wishlist
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-green-400"
                                >
                                    Reading List
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="transition hover:text-green-400"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-10 border-t border-white/10"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">

                    <p>
                        © {new Date().getFullYear()} BookVibe. All rights reserved.
                    </p>

                    <p>
                        Made with <span className="text-red-400">♥</span> for book lovers.
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;