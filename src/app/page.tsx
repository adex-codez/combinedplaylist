import Image from "next/image";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <div className="pt-10 h-[100vh] bg-[#09090b] px-[120px]">
      <nav className="flex justify-between">
        <h1 className="text-white">Logo</h1>
        <div className="flex gap-2">
          <Button className="bg-red-500 text-gray-900 py-6" size="lg">
            Sign In
          </Button>
          <Button className="bg-red-500 text-gray-900 py-6" size="lg">
            Sign Out
          </Button>
        </div>
      </nav>
      <div className="flex flex-col mt-20">
        <h1 className="text-gray-100 text-wrap flex justify-center text-7xl text-center leading-[-0.05em] tracking-tighter">
          <span className="w-[50%]">
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
    </div>
  );
}
