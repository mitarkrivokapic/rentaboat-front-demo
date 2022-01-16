import Image from "next/image";
import { API_URL } from "@/config/index";

export default function Hero({ data }) {
  return (
    <div className="h-screen sm:h-[38rem] relative flex items-center">
      <div className="px-0 container mx-auto z-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white">
          {data.heading_one}
        </h1>
        <h3 className="text-2xl sm:text-3xl font-normal text-white mt-1 sm:mt-5">
          {data.heading_two}
        </h3>
      </div>
      <div className="w-full h-full absolute opacity-70 bg-gradient-to-r from-blue-500 to-blue-400 z-10"></div>
      <Image
        src={`${API_URL}${data.image.data.attributes.formats.large.url}`}
        layout="fill"
        className="z-0"
        objectFit="cover"
        priority={true}
      />
    </div>
  );
}
