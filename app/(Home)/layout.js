import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/utils/SmoothScroll";
import AOSInit from "@/components/utils/AOSInit";

export default function MarketingLayout({ children }) {
  return (
    <>
      <Navbar />
      <SmoothScroll />
      <AOSInit />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
