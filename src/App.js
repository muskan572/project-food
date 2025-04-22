import React from "react";
import Home from "./components/home";
import Header from "./components/header";
import About from "./components/about";
import Work from "./components/work";
import Testimonial from "./components/testimonial";
import Questions from "./components/questions";
import Footer from "./components/footer";

function App() {
  const image = "homepagebanner.png";
  const imageAbt = "AboutPageBanner.png";
  const pick_meals = "material-symbols_no-meals-rounded.png";
  const cursor = "mdi_cursor-pointer.png";
  const delivery =  "mdi_truck-delivery.png";
  const image_person = "Ellipse 1.png";
  const star = "Ratings.png";
  const twitt = "mdi_twitter.png";
  const li = "mdi_linkedin.png";
  const yt = "mdi_youtube.png";
  const fb = "uil_facebook-f.png";

  return (
    <div>
      <Home/>
      <Header imageurl={image}/>
      <About imageAbout={imageAbt}/>
      <Work meals={pick_meals} cursor_pointer={cursor} delivery_truck={delivery}/>
      <Testimonial image={image_person} stars={star}/>
      <Questions/>
      <Footer twitter={twitt} linkedin={li} youtube={yt} facebook={fb}/>
    </div>
   
  );
}

export default App;
