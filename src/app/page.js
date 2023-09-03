import Bannar from "@/components/Bannar";
import Blog from "@/components/Blog";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Work from "@/components/Work";
import Partners from "@/components/Partners";
import Layout from "@/components/layout/Layout";
import About from "@/components/About";
import News from "@/components/News";

export default function Home() {
  return (
    <>
      <Layout>
        <Bannar />
        <Clients />
        <Team />
        <Blog />
        <Work />
        <Partners />
        <About />
        <News />
      </Layout>
    </>
  );
}
