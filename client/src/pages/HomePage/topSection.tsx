import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
// Images
import SquidOperativeImg from "../../assets/images/squid-game-operative.png";
import SquidShapesImg from "../../assets/images/squid-game-shapes.webp";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;

  ${tw`
        w-full
        bg-squid-cyan
        max-w-screen-2xl
        flex
        justify-between
        px-3
        lg:px-12
    `};
`;

const LeftContainer = styled.div`
  ${tw`
        w-1/2
        flex
        flex-col
    `};
`;

const RightContainer = styled.div`
  ${tw`
        w-1/2
        flex
        flex-col
        relative
        mt-20
    `};
`;

const MottoText = styled.h1`
  ${tw`
        font-bold
        text-2xl
        xl:text-6xl
        sm:text-3xl
        md:text-5xl
        lg:font-black
        md:font-extrabold
        text-black
        mb-4
        sm:leading-snug
        lg:leading-normal
        xl:leading-relaxed
    `}
`;
const DescriptionText = styled.p`
  ${tw`
        text-xs
        lg:text-sm
        xl:text-lg
        sm:max-h-full
        overflow-hidden
        max-h-12
        text-gray-800
        py-3
    `};
`;

const SquidShapesContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: 11em;
  top: -11em;

  img {
    width: auto;
    height: 150%;
    max-width: fit-content;
  }
`;

const SquidOperativeContainer = styled.div`
  width: auto;
  height: 15em;
  right: -2em;
  top: -5em;
  position: absolute;

  img {
    width: auto;
    height: 200%;
    max-width: fit-content;
  }
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <MottoText>Can you make it?</MottoText>
        <DescriptionText>
          Enter the Nautilus Game simulating the popular Squid Game
          Korean Netflix Series. Go through each challenge as it appears in the
          series, and leave feedback for each game completed.
        </DescriptionText>
        <Link to="/game">
        <button
        type="button"
        className="align-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-squid-red hover:bg-squid-pink focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-squid-pink"
      > Play
      </button>
      </Link>
      </LeftContainer>
      <RightContainer>
        <SquidShapesContainer>
          <img src={SquidShapesImg} alt="squid game shapes"/>
        </SquidShapesContainer>
        <SquidOperativeContainer>
          <img src={SquidOperativeImg} alt="squid game operative"/>
        </SquidOperativeContainer>
      </RightContainer>
    </TopSectionContainer>
  );
}
