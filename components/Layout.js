import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, header, footer, footerText }) {
  return (
    <main>
      <Head>
        <title>Rent a boat</title>
        <meta
          name="description"
          content="Book tour and boat with skipper on the Belgrade rivers."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header data={header} />

      <section>{children}</section>
      <Footer data={{ footer, footerText }} />
    </main>
  );
}
