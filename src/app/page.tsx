import Image from "next/image";
import { Button } from "~/components/ui/button";
import FAQ from "./_components/FAQ";

export default function Home() {
  return (
    <div>
      <header className="pt-10 pb-32 mb-60 flex flex-col bg-back px-8 md:px[80px] lg:px-[120px]">
        <nav className="flex justify-between">
          <h1 className="text-white">Logo</h1>
          <div className="flex gap-2">
            <Button
              className="bg-red-500 rounded-lg text-base text-gray-900 py-7"
              size="lg"
            >
              Sign In
            </Button>
            <Button
              className="bg-red-500 rounded-lg text-base text-gray-900 py-7"
              size="lg"
            >
              Sign Out
            </Button>
          </div>
        </nav>
        <div className="flex flex-col mt-20">
          <h1 className="text-background text-wrap flex justify-center text-5xl md:text-6xl lg:text-7xl text-center leading-[-0.05em] tracking-tighter">
            <span className="lg:w-[50%] md:w-[60%]">
              All your <span className="text-red-600">playlists</span>{" "}
              <span className="pt-4">all in one place</span>
            </span>
          </h1>
          <div className="flex justify-center pl-8 pt-4">
            <div className="z-30">
              <Image
                src="/spotify.svg"
                height={50}
                width={50}
                className=""
                alt="spotify's logo"
              />
            </div>
            <div className="z-20">
              <Image
                src="/youtube-music.svg"
                height={50}
                width={50}
                className="-translate-x-6"
                alt="spotify's logo"
              />
            </div>
            <div className="">
              <Image
                src="/apple-music.svg"
                height={50}
                width={50}
                className="rounded-full -translate-x-10"
                alt="spotify's logo"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Button
            className="px-10 py-6 rounded-full gap-2 flex bg-red-400 text-gray-900 text-base"
            size="lg"
          >
            Get started{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </div>
      </header>

      <section className="px-8 md:px-[80px] lg:px-[120px]  mb-60">
        <div className="mb-44">
          <div className="flex justify-center pb-28">
            <div className="rounded-full pt-[6px] bg-back h-[60px] w-[60px]">
              <h3 className="text-red-500 text-3xl text-center">1</h3>
            </div>
          </div>
          <div className="lg:flex gap-12">
            <div className="bg-gray-400 h-[60vh] rounded-xl w-full lg:w-1/2 mb-10"></div>
            <div className="lg:w-1/2 lg:flex lg:items-center">
              <h1 className="text-4xl lg:text-5xl text-center">
                Sign In/Sign Up
              </h1>
            </div>
          </div>
        </div>
        <div className="mb-44">
          <div className="flex justify-center pb-28">
            <div className="rounded-full pt-[6px] bg-back h-[60px] w-[60px]">
              <h3 className="text-red-500 text-3xl text-center">2</h3>
            </div>
          </div>
          <div className="lg:flex">
            <div className="lg:w-1/2 lg:flex lg:items-center mb-10">
              <h1 className="text-4xl lg:text-5xl text-center">
                Connect your accounts
              </h1>
            </div>
            <div className="bg-gray-400 h-[60vh] rounded-xl w-full lg:w-1/2 mb-10"></div>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center pb-28">
            <div className="rounded-full pt-[6px] bg-back h-[60px] w-[60px]">
              <h3 className="text-red-500 text-3xl text-center">3</h3>
            </div>
          </div>
          <div className="lg:flex gap-12">
            <div className="bg-gray-400 h-[60vh] rounded-xl w-full lg:w-1/2 mb-10"></div>
            <div className="lg:w-1/2 lg:flex lg:items-center">
              <h1 className="text-4xl lg:text-5xl text-center">
                View all your playlists
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 md:px-[80px] lg:px-[120px] mb-20">
        <h2 className="text-center text-3xl mb-8 lg:text-4xl">F. A. Q</h2>
        <FAQ />
      </section>
      <footer className="bg-back h-14 pt-4">
        <p className="text-center text-gray-100">
          Made with ❤ by{" "}
          <a href="https://x.com/@AdnateCodes" className="underline">
            AdnateCodes
          </a>{" "}
        </p>
      </footer>
    </div>
  );
}
