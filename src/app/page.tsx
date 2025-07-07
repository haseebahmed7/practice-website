import Head from "next/head";
import { Hero } from "@/components/custom-components/Hero";
import Navbar from "@/components/custom-components/Navbar";
import { Feature } from "@/components/custom-components/Feature";

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

      <div className="flex min-h-screen flex-col bg-slate-200">
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          <Feature />
        </main>
      </div>
    </>
  );
}
