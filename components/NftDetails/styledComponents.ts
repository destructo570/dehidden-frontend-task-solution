import styled from "styled-components";

const slideInAnimation = `
animation: fadeInAnimation ease 0.4s;
animation-iteration-count: 1;
animation-fill-mode: forwards;

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
    transform: translateY(10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
`;

export const StyledNftDetails = styled.section`
  li {
    list-style: none;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    display: grid;
    grid-template-columns: 1.5fr 2fr;
    justify-content: space-between;
  }
`;

export const StyledNftDetailsHeader = styled.header`
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  left: 0px;
  padding: 0 1.2em;
  z-index: 100;

  #shareUrlComp {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    background-color: transparent;
    padding: 0.8em 1.2em;

    #shareButton {
      display: none;
    }

    #shareUrlComp {
      display: flex;
    }
  }
`;

export const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 15%;
  }

  p {
    margin-left: 0.6em;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    img {
      width: 16%;
    }

    p {
      font-size: 1.6rem;
      font-weight: 500;
    }
  }
`;

export const StyledNftPreviewCard = styled.section`
  ${slideInAnimation}
  padding: 1.6em;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 500px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.15);
  text-align: center;

  img {
    width: 100%;
    max-width: 450px;
  }

  h1 {
    font-size: 2rem;
    font-weight: 900;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 0.5em;
  }
  h3 {
    font-size: 1.125rem;
    margin-top: 1em;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    border-radius: 0;
    height: 100vh;
    justify-content: center;

    img {
      max-width: 333px;
    }
  }
`;

export const StyledNftUtilities = styled.section`
  ${slideInAnimation}
  margin-top: 2em;

  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
      margin-top: 12em;
      margin-left: 2em;
      margin-right: 2em;
    }
  }
`;

export const StyledNftInfo = styled.section`
  ${slideInAnimation}
  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    margin-top: 14em;
    margin-left: 2em;
    margin-right: 2em;
  }
`;

export const StyledNftInfoHeader = styled.header`
  display: flex;
  padding: 1em 0;
  &:hover {
    cursor: pointer;
  }
  p {
    font-size: 1.2rem;
    margin-left: 0.5em;
  }
`;

export const StyledNftInfoSections = styled.div<{ isDescription: boolean }>`
  display: flex;
  padding: 1em 0;

  p {
    font-weight: 700;
    color: ${(props) =>
      props.isDescription ? "white" : "rgba(255,255,255,0.4)"};
  }

  p:hover {
    cursor: pointer;
  }

  p + p {
    margin-left: 1em;
    color: ${(props) =>
      !props.isDescription ? "white" : "rgba(255,255,255,0.4)"};
  }
`;

export const StyledNftInfoDescription = styled.div`
  ${slideInAnimation}
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1.6em;
  border-radius: 16px;
  h1 {
    font-size: 2rem;
    font-weight: 800;
  }

  h3 {
    font-size: 1.4rem;
    margin-top: 1em;
  }
  p {
    font-size: 1.2rem;
    margin-top: 1em;
  }
`;

export const StyledNftInfoDetails = styled.div`
  ${slideInAnimation}
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 1fr 1fr;
  align-content: space-around;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 2em 1.6em;
  border-radius: 16px;
`;

export const StyledInfoWrapper = styled.div`
  //Set min height on wrapper to avoid content jumping
  min-height: 500px;

  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    min-height: 0;
  }
`;
export const StyledMoreInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 1em 0;

  img {
    max-width: 44px;
  }

  p {
    margin-left: 1em;
    font-weight: 700;
  }
`;
