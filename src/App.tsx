import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import CompScrollToTop from './components/ScrollToTop/CompScrollToTop';

export default function App() {
  return (
    <div className="App scroll-smooth bg-gray-800 antialiased">
      <Hero/>
      <About/>
      <CompScrollToTop/>
    </div>
  );
}
