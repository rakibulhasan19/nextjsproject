import About from "./pages/about";
import Calendar from "./pages/calendar";
import Curriculum from "./pages/curriculum";
import Community from "./pages/community";
import Whyattend from "./pages/whyattend";
import Footer from "./pages/footer";
import Gain from "./pages/gain";
import Header from "./pages/header";
import Hero from "./pages/hero";
import Register from "./pages/register";
import Shouldattend from "./pages/shouldattend";
import Testimonies from "./pages/testimonies";
import Video from "./pages/video";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Whyattend />
      <Shouldattend />
      <Gain />
      <About />
      <Video />
      <Calendar />
      <Curriculum />
      <Community />
      <Testimonies />
      <Register />
      <Footer />
    </div>
  );
}
