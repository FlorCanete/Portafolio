import Header from "./Header";
import Hero from "./Hero";
import AboutMe from "./AboutMe";
import Experiencie from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects"

export default function Layout() {
  return (
    <>
      <Header></Header>
      <main className="">
        <Hero></Hero>
        <Experiencie></Experiencie>
        <Skills></Skills>
        <Projects></Projects>
        <AboutMe></AboutMe>
      </main>
    </>
  );
}
