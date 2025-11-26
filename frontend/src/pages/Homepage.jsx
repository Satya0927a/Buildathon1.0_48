import CodePreview from "../components/CodePreview"
import FeatureBoxes from "../components/FeatureBoxes"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import PartnerShowcase from "../components/PartnerShowcase"

const Homepage = ()=>{
  return(
    <div id="homepagebody">
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <CodePreview></CodePreview>
      <FeatureBoxes></FeatureBoxes>
      <PartnerShowcase></PartnerShowcase>
    </div>
  )
}

export default Homepage