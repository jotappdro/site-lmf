
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import BlogCarousel from '@/components/BlogCarousel';
import Partners from '@/components/Partners';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <BlogCarousel />
      <Partners />
      <Footer />
    </div>
  );
};

export default Index;
