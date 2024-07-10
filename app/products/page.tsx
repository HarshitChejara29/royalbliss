import Compare from "@/components/pages/shop/compare";
import Discover from "@/components/pages/shop/discover";
import Hero from "@/components/pages/shop/hero";
import Info from "@/components/pages/shop/info";
import Reviews from "@/components/pages/shop/reviews";
import Variants from "@/components/pages/shop/variants";

export default function Products() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between gap-4 bg-[#eff3ff]">
       <Hero/>
       <Info/>
       <Variants/>
       <Compare/>
       <Discover/>
       <Reviews/>
      </main>
    );
  }
  