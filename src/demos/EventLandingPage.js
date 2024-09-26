import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";

import Blog from "components/blogs/ThreeColSimpleWithImage.js";

import ContactUsForm from "components/forms/SimpleContactUs.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import ProfileThreeColGrid from "components/cards/ProfileThreeColGrid";


import BlogIndex from "pages/BlogIndex";
import ThreeColCenteredStatsPrimaryBackground from "components/features/ThreeColCenteredStatsPrimaryBackground";

export default () => (
  <AnimationRevealPage>
    <Hero />
<BlogIndex/>
    <Blog />
    <ProfileThreeColGrid/>
    <ThreeColCenteredStatsPrimaryBackground/>
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
