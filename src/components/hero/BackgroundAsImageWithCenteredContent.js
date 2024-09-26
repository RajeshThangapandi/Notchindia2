import React, { useEffect, useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink } from "../headers/light.js";

// Styled Components
const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-green-300 font-bold shadow transition duration-300 hocus:bg-green-400 text-gray-900 hocus:text-gray-100 focus:outline-none focus:shadow-outline`;

const SignInLink = styled(PrimaryLink)`
  ${tw`bg-blue-400`}
  color: black;  
  &:hover {
    ${tw`bg-blue-700`}
    color: black; 
  }
`;

const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 h-screen min-h-144`}
  overflow: hidden; 
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-25`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

// Heading Style
const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;


// Styled background image for mobile and tablet
const BackgroundImage = styled.div`
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1; // Behind content
`;

const imageUrls = [
  "https://www.notchindiaprojects.com/images/gallery/6505fa87a27917ee9f208-13b2-4e77-8c80-47ea9511fb3c.JPG",
  "https://www.notchindiaprojects.com/images/gallery/6505face5a549Screenshot%202023-07-16%20231558.png",
  "https://www.notchindiaprojects.com/images/gallery/6505faab32256IMG-1011.JPG",
  // Add more images as needed
];

export default () => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => {
        const currentIndex = imageUrls.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % imageUrls.length;
        console.log(`Changing background to: ${imageUrls[nextIndex]}`); // Debugging
        return imageUrls[nextIndex];
      });
    }, 1000); // Change image every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">About</NavLink>
      <NavLink href="#">Blog</NavLink>
      <NavLink href="#">Locations</NavLink>
      <NavLink href="#">Pricing</NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <SignInLink href="/components/innerPages/LoginPage">SignIn</SignInLink>
      <PrimaryLink href="/components/innerPages/SignupPage">SignUp</PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <BackgroundImage imageUrl={currentImage} /> {/* Background image for mobile and tablet */}
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
          Building Landmarks
            <br />
            Building Trust
          </Heading>
          <PrimaryAction>Contact Us</PrimaryAction>
        </Content>
      </HeroContainer>
    </Container>
  );
};
