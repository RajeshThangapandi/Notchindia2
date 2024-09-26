import React, { useRef, useEffect } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded`
]);
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Capture the current value of sectionRef to prevent changes during cleanup
    const currentSectionRef = sectionRef.current;

    // Your effect logic here
    if (currentSectionRef) {
      // Example: Add a class to the section or perform some DOM manipulations
      currentSectionRef.classList.add("animated-section");
    }

    return () => {
      // Cleanup using the saved reference
      if (currentSectionRef) {
        currentSectionRef.classList.remove("animated-section");
      }
    };
  }, []); // Add necessary dependencies here if any

  const blogPosts = [
    {
      imageSrc:
        "https://5.imimg.com/data5/SELLER/Default/2021/5/TV/ZF/JL/8809730/apollo-hot-mix-plant-500x500.jpeg",
      category: "Apollo Hot Mix Plant",
      title: "Apollo Hot Mix Plant",
      url: "https://timerse.com"
    },
    {
      imageSrc:
        "https://5.imimg.com/data5/SELLER/Default/2022/6/GJ/TO/NU/34635285/w-115-c5-cold-milling-machine-500x500.JPG",
      category: "Wirtgen - Milling Machine",
      title: "Wirtgen - Milling Machine",
      url: "https://reddit.com"
    },
    {
      imageSrc:
        "http://www.adityaind.in/wp-content/uploads/2019/06/6-2.jpg",
      category: "Apollo Hydrostatic Sensor Paver Finisher",
      title: "Apollo Hydrostatic Sensor Paver Finisher",
      url: "https://timerse.com"
    }
  ];

  return (
    <Container ref={sectionRef}>
      <Content>
        <HeadingInfoContainer>
          <HeadingTitle>Our Machineries</HeadingTitle>
          <HeadingDescription>Some amazing blog posts that are written by even more amazing people.</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Category>{post.category}</Category>
                <Title>{post.title}</Title>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
