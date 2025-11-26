import CodePreview from "../components/CodePreview"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"

const Homepage = ()=>{
  return(
    <div id="homepagebody">
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <CodePreview></CodePreview>
    </div>
  )
}

export default Homepage