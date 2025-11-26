import CodePreview from "../components/CodePreview"
import CTA from "../components/CTA"
import FeatureBoxes from "../components/FeatureBoxes"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import PartnerShowcase from "../components/PartnerShowcase"
import Testimonials from "../components/Testimonials"

const Homepage = ()=>{
  return(
    <div id="homepagebody">
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <CodePreview></CodePreview>
      <FeatureBoxes></FeatureBoxes>
      <PartnerShowcase></PartnerShowcase>
      <Testimonials></Testimonials>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  )
}

export default Homepage