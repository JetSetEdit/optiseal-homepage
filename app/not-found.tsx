import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaRegSadTear, FaExclamationCircle } from "react-icons/fa";

const heroImage = "/gallery/butyl_033.jpg";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <section className="relative text-white pt-4 pb-12 lg:py-8 overflow-hidden max-h-[600px] min-h-[340px] flex items-center">
        <img
          src={heroImage}
          alt="404 background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-50"
          style={{ pointerEvents: 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-header opacity-80 z-10" />
        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center gap-4">
          <div className="mb-4 animate-bounce">
            <FaRegSadTear className="text-7xl text-blue-200 drop-shadow" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-center mb-2 drop-shadow-lg">
            404 – Not Found
          </h1>
          <p className="text-blue-100 mt-2 text-lg md:text-xl max-w-2xl text-center mb-2">
            Looks like the seal didn't hold… This page couldn't be found—it might've slipped through the cracks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-xs sm:max-w-none">
            <Link href="/">
              <button className="bg-[#0077C8] text-white font-semibold px-5 py-2 rounded hover:bg-[#005f9f] transition w-full sm:w-auto">
                Back to Safety
              </button>
            </Link>
            <Link href="/contact-us">
              <button className="border border-white text-white font-semibold px-5 py-2 rounded hover:bg-white hover:text-[#0077C8] transition w-full sm:w-auto flex items-center justify-center">
                <FaExclamationCircle className="mr-2" aria-hidden="true" />
                Report the Leak
              </button>
            </Link>
          </div>
          <p className="text-blue-200 text-center mt-8 text-base">
            Error code: <code className="bg-blue-800 px-2 py-1 rounded text-blue-100">404</code> – Seal not found.<br />
            Don&apos;t worry, we&apos;ve got a roll for that.
          </p>
          <p className="text-blue-300 italic text-center mt-2 text-sm">
            Looks like someone forgot to waterproof this page.
          </p>
        </div>
      </section>
      <div className="w-full border-t-4 border-orange-500"></div>
      <Footer />
    </main>
  );
} 