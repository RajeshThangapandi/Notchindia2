import React, { useState, useEffect, useRef } from "react";
import tw from "twin.macro";
import { Container as ContainerBase, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";

// Styling
const Container = tw(ContainerBase)`my-8 lg:my-10 bg-primary-900 text-gray-100 -mx-8 px-8`;
const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const Description = tw(SectionDescription)`text-gray-400 text-center mx-auto max-w-screen-md`;

const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-center flex-wrap max-w-screen-md justify-between mx-auto`;
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide`;
const StatKey = tw.div`text-xl font-medium`;
const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-black`;

export default ({
  subheading = "",
  heading = "Over 1500 Projects Completed",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  stats = [
    {
      key: "Ongoing Projects",
      value: 400,
    },
    {
      key: "Signature Projects",
      value: 600,
    },
    {
      key: "Completed Projects",
      value: 1500,
    },
    {
      key: "Team Members",
      value: 500,
    },
  ],
}) => {
  const [currentStats, setCurrentStats] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when the component comes into view
  useEffect(() => {
    const currentSectionRef = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentSectionRef) {
            observer.unobserve(currentSectionRef); // Stop observing once it's in view
          }
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  // Effect to increment stats when the component is visible
  useEffect(() => {
    if (isVisible) {
      const intervals = stats.map((stat, index) => {
        return setInterval(() => {
          setCurrentStats((prevStats) => {
            const newStats = [...prevStats];
            const incrementStep = Math.ceil(stat.value / 100); // Adjust speed by dividing total value
            if (newStats[index] < stat.value) {
              newStats[index] = Math.min(
                newStats[index] + incrementStep,
                stat.value
              ); // Ensure it doesn't exceed the target
            }
            return newStats;
          });
        }, 30); // Faster update (30ms intervals for a rapid effect)
      });

      return () => {
        intervals.forEach(clearInterval); // Clear intervals when done
      };
    }
  }, [isVisible, stats]);

  return (
    <Container ref={sectionRef}> {/* Add ref to the container */}
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <StatsContainer>
          {stats.map((stat, index) => (
            <Stat key={index}>
              <StatValue>{currentStats[index]}</StatValue> {/* Display the current stat value */}
              <StatKey>{stat.key}</StatKey>
            </Stat>
          ))}
        </StatsContainer>
      </ContentWithPaddingXl>
    </Container>
  );
};
