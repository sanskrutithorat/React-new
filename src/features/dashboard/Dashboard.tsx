import { useAuthStore } from "@/store/authStore";
import CategorySection from "./sections/CategorySection/CategorySection";
import FeaturesSection from "./sections/FeaturesSection/FeaturesSection";
import HeroSection from "./sections/HeroSection/HeroSection";
import NewsletterSection from "./sections/NewsletterSection/NewsletterSection";
import ProductSection from "./sections/ProductSection/ProductSection";
import PromoBanner from "./sections/PromoBanner/PromoBanner";
import TestimonialsSection from "./sections/TestimonialsSection/TestimonialsSection";
import { useMe } from "@/hooks/useAuth";
// import './Dashboard.module.scss' 
const Dashboard = () => {
  const authUser = useAuthStore((state) => state.user);

  const { data: user, isLoading } = useMe();


  return <>
    <>

      <h2>
        Welcome{" "}
        {isLoading
          ? "Loading..."
          : user?.username || "use me hook didnt work"}
      </h2>
      <h2>{authUser?.username}</h2>

      <HeroSection />
      <CategorySection />
      <ProductSection title="Featured Products" />
      <PromoBanner />

      <ProductSection
        title="Trending Products"
      />

      <FeaturesSection />

      <TestimonialsSection />

      <NewsletterSection />

    </>

  </>;
};

export default Dashboard;