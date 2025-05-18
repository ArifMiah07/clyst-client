import Navbar from "@/components/pages/shared/Navbar";
import MainLayout from "@/components/layout/MainLayout";
import "../styles/customStyles.css";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <MainLayout>
        <section className=" text-center grid grid-cols-12 gap-2 text-white">
          {/* <h1>Im from main content</h1> */}
          {/* left */}
          <div className="primary-border-style col-span-3">this is left side bar</div>
          {/* center */}
          <div className="primary-border-style col-span-7">this is center</div>
          {/* right */}
          <div className="primary-border-style col-span-2">this is right side bar</div>
        </section>
      </MainLayout>
    </>
  );
}
