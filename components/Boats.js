import Image from "next/image";
import Link from "next/link";

import { API_URL } from "@/config/index";

export default function Boats({ data }) {
  return (
    <section className="py-16 sm:py-28 bg-white relative">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="uppercase text-3xl sm:text-4xl font-bold text-gray-900">
            {data.title_one}
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl font-medium text-gray-500">
            {data.title_two}
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {data.boats.data.map((boat) => (
            <div
              key={boat.id}
              className="w-10/12 pb-5 bg-white mx-auto shadow-lg overflow-hidden rounded-md"
            >
              <div className="w-full h-64 sm:h-80 md:h-64 relative">
                <Image
                  src={`${API_URL}${boat.attributes.image.data.attributes.formats.small.url}`}
                  //   width={320}
                  //   height={224}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-64 sm:h-80 md:h-64 object-cover object-bottom"
                  alt="Boat anci"
                  priority
                />
              </div>
              <div className="flex justify-between items-center p-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Boat {boat.attributes.name}
                </h3>
                <p className="font-semibold">
                  {boat.attributes.persons} persons{/* 8 <TiGroup /> */}
                </p>
              </div>
              <p className="px-4 pb-4 min-h-[10rem]">
                {boat.attributes.excerpt}
              </p>
              <Link href="#">
                <a className="ml-4 px-4 py-2 rounded-md inline-block bg-gray-900 hover:bg-gray-600 text-white">
                  Read more
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
