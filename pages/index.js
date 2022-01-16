import Head from "next/head";

// import { TiGroup } from "react-icons/ti";

import { API_URL } from "@/config/index";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";

import Boats from "@/components/Boats";
import Tours from "@/components/Tours";

export default function Home({ pageData, dataNavigation }) {
  return (
    <div>
      <Head>
        <title>Rent a boat</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        header={dataNavigation.header}
        footer={dataNavigation.footer}
        footerText={dataNavigation.footer_text}
      >
        <Hero data={pageData.hero} />
        <Boats data={pageData.boats} />
        <Tours data={pageData.tours} />
      </Layout>
    </div>
  );
}

export async function getStaticProps() {
  const resPage = await fetch(
    `${API_URL}/api/pages/1?populate[0]=boats.boats.image&populate[1]=tours.tours.image&populate[2]=tours.tours.boats&populate[3]=hero.image`
  );

  const pageData = await resPage.json();

  const resNavigation = await fetch(
    `${API_URL}/api/navigation?populate[0]=header.links&populate[1]=footer`
  );

  const dataNavigation = await resNavigation.json();

  return {
    props: {
      pageData: pageData.data.attributes,
      dataNavigation: dataNavigation.data.attributes,
    },
  };
}
