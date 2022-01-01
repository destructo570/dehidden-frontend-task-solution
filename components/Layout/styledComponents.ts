import styled from "styled-components";
import bgImage from "../../assets/icons/vector/mobile/mobile-bg.svg";

export const StyledLayout = styled.main`
  padding: 6em 1.2em;
  z-index: 100;
  position: relative;
  background-image: ${`url(${bgImage.src})`};
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    padding: 0;
  }
`;
