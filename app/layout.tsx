import "../styles/globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <nav className="md:max-w-6xl mx-auto sticky top-0 z-50">
          <div className="bg-white flex flex-wrap items-center justify-center px-10 md:py-4 py-2 overflow-hidden border-b border-gray-200 font-2xl sm:px-4 md:overflow-visible md:px-2">
            <ul className="flex justify-center list-reset m-0 w-full md:w-auto">
              <li>
                <Link
                  href="/"
                  className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold text-lg md:text-2xl nuxt-link-exact-active nuxt-link-active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/lab"
                  className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold text-lg md:text-2xl"
                >
                  Lab
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold text-lg md:text-2xl"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold text-lg md:text-2xl"
                >
                  About me
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
