import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <Hero />
    </main>
  );
}
