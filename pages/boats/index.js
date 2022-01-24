import Head from "next/head";

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
        {pageData.map((boat) => (
          <h1>{boat.attributes.name}</h1>
        ))}
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
