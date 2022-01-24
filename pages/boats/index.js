import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";

export default function BoatsPage({ pageData, dataNavigation }) {
  return (
    <div>
      <Head>
        <title>Rent a boat - boats</title>
        <meta
          name="description"
          content="Find a boat with skipper for your adventure."
        />
      </Head>
      <Layout
        header={dataNavigation.header}
        footer={dataNavigation.footer}
        footerText={dataNavigation.footer_text}
      >
        <section className="py-12 sm:py-20 bg-white relative">
          <div className="container mx-auto">
            <div className="text-center mb-8 sm:mb-14">
              <h2 className="uppercase text-3xl sm:text-4xl font-bold text-gray-900">
                Our Boats
              </h2>
              <p className="mt-2 text-2xl sm:text-3xl font-medium text-gray-500">
                Choose boat for you
              </p>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
              {pageData.map((boat) => (
                <div
                  key={boat.id}
                  className="w-10/12 pb-5 bg-white mx-auto shadow-lg overflow-hidden rounded-md"
                >
                  <div className="w-full h-64 sm:h-80 md:h-64 relative">
                    <Image
                      src={`${boat.attributes.image.data.attributes.formats.small.url}`}
                      //   width={320}
                      //   height={224}
                      layout="fill"
                      objectFit="cover"
                      className="w-full h-64 sm:h-80 md:h-64 object-cover object-bottom"
                      alt="Boat anci"
                      priority
                    />
                  </div>
                  <div className="flex flex-col lg:flex-row justify-between lg:items-center p-4">
                    <h3 className="text-2xl mb-1 lg:mb-0 font-bold text-gray-900">
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
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const resPage = await fetch(`${API_URL}/api/boats?populate=*`);

  const pageData = await resPage.json();

  const resNavigation = await fetch(
    `${API_URL}/api/navigation?populate[0]=header.links&populate[1]=footer`
  );

  const dataNavigation = await resNavigation.json();

  return {
    props: {
      pageData: pageData.data,
      dataNavigation: dataNavigation.data.attributes,
    },
  };
}
