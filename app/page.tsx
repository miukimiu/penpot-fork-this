import { CassetteTape } from "@/cassetteTape/CassetteTape";
import NextImage from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white bg-custom-gradient">
      <header className="w-full text-gray-700 bg-white shadow-sm body-font">
        <div className="container flex flex-row items-center p-2 mx-auto place-content-between">
          <div className="flex">
            <a href="https://penpotfest.org/" className="mr-5 font-medium">
              Fork this
            </a>
          </div>

          <div className="flex">
            <a
              href="https://github.com/miukimiu/penpot-fork-this"
              className="ml-5 font-medium "
            >
              <NextImage
                src="/images/github-mark.svg"
                alt="github"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </header>
      <div className="flex flex-col items-center px-8 pt-8 pb-24">
        <CassetteTape />
      </div>
    </main>
  );
}
