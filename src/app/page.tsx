import Head from "next/head";
import { Hero } from "@/components/custom-components/Hero";
import Navbar from "@/components/custom-components/Navbar";
import { Feature } from "@/components/custom-components/Feature";
import { Solutions } from "@/components/custom-components/Solutions";
import { VideoScreen } from "@/components/custom-components/VideoScreen";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sandbox Web | Modern UI</title>
        <meta
          name="description"
          content="Simple, clean and responsive landing page built with Next.js and Tailwind CSS"
        />
      </Head>

      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <Feature />
          <Solutions />
          <VideoScreen />
        </main>
      </div>
    </>
  );
}
