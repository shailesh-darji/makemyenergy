import Link from "next/link";
import { RiCheckboxCircleFill } from "react-icons/ri";
import Head from "next/head";
import Navbar from "../components/navbar";
import TopFooter from "../components/topfooter";

export default function Thanks() {
  return (
    <div>
      <Head>
        <title>Make My Energy</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main>
        <div>
          <div className="bg-gradient-to-r from-[#A6C1EE]/20 to-[#FBC2EB]/30">
            <Navbar />
          </div>
          <div className="flex flex-col items-center justify-center h-[80vh]">
            <RiCheckboxCircleFill className="text-green-500 text-8xl mb-4" />
            <h1 className="text-3xl font-bold mb-3">
              Thank you for your enquiry!
            </h1>{" "}
            {/* Increased font size */}
            <p className="text-gray-600 text-xl mb-8">
              {" "}
              {/* Increased font size */}
              Our executive will connect with you soon.
            </p>
            <Link href="/">
              <p className="bg-blue-900 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Go Home
              </p>
            </Link>
          </div>
          {/* Additional Footer Starts Here  */}
          <TopFooter />
          {/* Additional Footer Ends Here  */}
        </div>
      </main>
      {/* Footer Starts */}
    </div>
  );
}
