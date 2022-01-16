import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children, header, footer, footerText }) {
  return (
    <main>
      <Header data={header} />

      <section>{children}</section>
      <Footer data={{ footer, footerText }} />
    </main>
  );
}
