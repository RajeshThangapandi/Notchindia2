
import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton } from "components/misc/Buttons";

const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
`;

const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-4 border-2 border-t-0 rounded-lg rounded-t-none`;
const Title = tw.div`mt-1 font-bold text-lg text-gray-900`;
const Client = tw.div`mt-1 text-gray-700 font-medium`;
const Content = tw.div`mt-2 text-gray-600 text-sm leading-relaxed`;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({
  headingText = "Projects",
  posts = [
    {
      project_id: 5,
      imageSrc:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TamilNadu_Logo.svg/1200px-TamilNadu_Logo.svg.png",
      title: "Construction of Vaigai River North Bank Road",
      location: "Namakkal - Karur Toll Road, Tamil Nadu",
      client: "Tamil Nadu Highways Department ",
      content: " Kamarajar Bridge to Varanasi - Kanyakumari road (NH-44) Near Samayanallur (MDU-213)",
      estimated_cost: "Rs. 54.60 Cr/- inc. GST"
    },
    {
      project_id: 5,
      imageSrc:
          "https://media.licdn.com/dms/image/v2/D560BAQHOkdMus_fLpg/company-logo_200_200/company-logo_200_200/0/1709119399719/indinfravit_trust_logo?e=2147483647&v=beta&t=tKpV26mD71dqj58T2Mu4N3ZoNRBFMw0YzDmyYg3WlhU",
      title: "MMR Overlay Works at Simhapuri Expressway Ltd.",
      location: "Namakkal - Karur Toll Road, Tamil Nadu",
      client: "IndInfravit Trust ",
      content: "The MMR Overlay Works at Simhapuri Expressway Ltd involves resurfacing and strengthening the existing pavement to enhance road durability and safety.",
      estimated_cost: "Rs. 54.60 Cr/- inc. GST"
    },
    {
      project_id: 5,
      imageSrc:
          "https://vajiram-prod.s3.ap-south-1.amazonaws.com/National_Highways_Authority_of_India_NHAI_2b16a244df.jpg",
      title: "Strengthening of two lanes with paved shoulder.",
      location: "Namakkal - Karur Toll Road, Tamil Nadu",
      client: "Nation Highway Authority of India",
      content: "Procurement & Construction (EPC) mode under Annual Plan 2022-23 in the State of Tamil Nadu",
      estimated_cost: "Rs. 54.60 Cr/- inc. GST"
    },
    {
      project_id: 5,
      imageSrc:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TamilNadu_Logo.svg/1200px-TamilNadu_Logo.svg.png",
      title: "Construction of Grade Separator.",
      location: "Namakkal - Karur Toll Road, Tamil Nadu",
      client: "Tamil Nadu Highways Department",
      content: "km 1/2 of Madurai - Thondi Road (SH33) including junction improvements at km 0/0 & 0/4",
      estimated_cost: "Rs. 54.60 Cr/- inc. GST"
    },
    {
      project_id: 7,
      imageSrc:
          "https://vajiram-prod.s3.ap-south-1.amazonaws.com/National_Highways_Authority_of_India_NHAI_2b16a244df.jpg",
      title: "Overlay and Repairs in the Stretch",
     
      content: "Madurai – Kanyakumari Section of NH-7",
      client: "NHAI PIU, Madurai",
      estimated_cost: "Rs. 59.89 Cr/-"
  },
    {
      imageSrc:
        "https://img.etimg.com/thumb/msid-80453778,width-300,height-225,imgsize-32797,resizemode-75/reliance-infra-1.jpg",
      title: "Construction of Widening of Two Lane to Four Lane bypasses",
      client: "Reliance Infrastructure Limited",
      content: "Reliance Infrastructure Limited BOT Concessionaire Supervision of PD NHAI, PIU – Salem",
  },{
    project_id: 5,
    imageSrc:
        "https://vajiram-prod.s3.ap-south-1.amazonaws.com/National_Highways_Authority_of_India_NHAI_2b16a244df.jpg",
    title: "Periodic maintenance along the Namakkal - Karur Toll Road",
    location: "Namakkal - Karur Toll Road, Tamil Nadu",
    client: "Nation Highway Authority of India",
    content: "BOT Concessionaire NHAI, PIU Salem",
    estimated_cost: "Rs. 54.60 Cr/- inc. GST"
  },
  {
    project_id: 8,
    imageSrc:
        "https://upload.wikimedia.org/wikipedia/en/3/36/Bangalore_Development_Authority_logo.jpeg",
  title: "Formation of Magadi Road",
  content:"Gangondanahalli Junction (4.661 Kms) & Madanayakanahalli in the State of Karnataka",
    location: "NH-44, Tamil Nadu",
    details: {
        black_spots: ["TN-(02)-61", "TN(02)-186", "TN-(02)-185"],
        mitigation_mode: "EPC mode",
        areas: ["Salem", "Attayampatti", "Rasipuram"]
    },
    client: "Bangalore Development Authority",
    estimated_cost: "Rs. 63 Cr/-"
  },      {
    project_id: 1,
    imageSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/TamilNadu_Logo.svg/440px-TamilNadu_Logo.svg.png",
    title: "Widening from Two Lane to Four Lane and Improvements",
    location: "Tambaram - Mudichur - Sriperumbudur Road",
    client: "Tamil Nadu Highways Department",
    division: "Construction and Maintenance Wing",
    content: "Rs. 95 Cr/- inc. GST"
  },
  {
    project_id: 2,
    imageSrc:
    "https://img.etimg.com/thumb/msid-80453778,width-300,height-225,imgsize-32797,resizemode-75/reliance-infra-1.jpg",
    title: "Construction of Widening of Two Lane to Four Lane bypasses",
    location: "Salem – Ulundurpet Section",
    client: "Reliance Infrastructure Limited",
    supervision: "BOT Concessionaire Supervision of PD NHAI, PIU – Salem",
   content: "Rs. 254.78 Cr/- inc. GST"
  },
  {
    project_id: 3,
    imageSrc:"https://www.Notchindiaprojects.com/images/client-logo/609a29c3486f0w2.jpg",
    title: "Renewal proposal for Nagapattinam – Gudalur – Mysore Road",
    location: "NH 67 (New No: 83)",
    client: "MORTH National Highways Madurai Circle",
    content: "Rs. 98 Cr/- inc. GST"
  },
  {
    project_id: 4,
    imageSrc:
    "https://img.etimg.com/thumb/msid-80453778,width-300,height-225,imgsize-32797,resizemode-75/reliance-infra-1.jpg",
    title: "Periodic maintenance along the Trichy Karur Toll Road",
    location: "Trichy Karur Toll Road, Tamil Nadu",
    client: "Reliance Infrastructure Limited",
    supervision: "BOT Concessionaire NHAI",
    content: "Rs. 67.84 Cr/- inc. GST"
  }
  ]
}) => {
  const [visible, setVisible] = useState(3);
  const onLoadMoreClick = () => {
    setVisible(v => v + 3);
  };

  return (
    <AnimationRevealPage>
      <Container>
        <ContentWithPaddingXl>
          <Heading>{headingText}</Heading>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  <Info>
                    <Title>{post.title}</Title>
                    <Client>{post.client}</Client>
                    <Content>{post.content}</Content>
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
    </AnimationRevealPage>
  );
};
