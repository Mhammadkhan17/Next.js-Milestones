import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">
        {/* Header */}
        <header className="sticky top-0 bg-white shadow-md z-50">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-2xl font-bold">My Portfolio</h1>
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link href="./" className="hover:text-blue-500">
                    Home
                  </Link  >
                </li>
                <li>
                  <Link href="./About" className="hover:text-blue-500">
                    About
                  </Link  >
                </li>
                <li>
                  <Link href="/Projects" className="hover:text-blue-500">
                    Projects
                  </Link  >
                </li>
                <li>
                  <Link href="/Contact" className="hover:text-blue-500">
                    Contact
                  </Link  >
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* Main Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
