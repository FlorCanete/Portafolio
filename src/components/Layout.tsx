import Header from "./Header";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Experiencie from "./Experience";
import Skills from "./Skills";
import Proyects from "./Proyects"

export default function Layout() {
  return (
    <>
      <Header></Header>
      <main className="">
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Experiencie></Experiencie>
        <Skills></Skills>
        <Proyects></Proyects>
      </main>
    </>
  );
}
