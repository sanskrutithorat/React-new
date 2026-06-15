import CategorySection from "./sections/CategorySection/CategorySection";
import FeaturesSection from "./sections/FeaturesSection/FeaturesSection";
import HeroSection from "./sections/HeroSection/HeroSection";
import NewsletterSection from "./sections/NewsletterSection/NewsletterSection";
import ProductSection from "./sections/ProductSection/ProductSection";
import PromoBanner from "./sections/PromoBanner/PromoBanner";
import TestimonialsSection from "./sections/TestimonialsSection/TestimonialsSection";
// import './Dashboard.module.scss' 
const Dashboard = () => {
  return <>
  <>
<HeroSection />
<CategorySection/>
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