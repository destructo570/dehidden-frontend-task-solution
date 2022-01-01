import styled from "styled-components";

export const StyledLayout = styled.main`
  padding: 6em 1.6em;
  z-index: 100;
  position: relative;
  @media (min-width: 768px) {
    padding: 0;
  }
`;
export const StyledBackground = styled.div`
  overflow: hidden;

  object-fit: clip;
`;
export const StyledTopBackground = styled.div`
  /* Vector */

  position: absolute;
  z-index: 000;
  width: 466px;
  height: 481.8px;
  left: -300px;
  top: 0px;

  background: linear-gradient(123.82deg, #81a1ff 20.63%, #5449e8 80.51%),
    linear-gradient(123.44deg, #faa94d 20.46%, #f27038 80.68%),
    linear-gradient(90deg, #ff48e2 0%, #ff2936 93.67%),
    radial-gradient(
      14109.95% 737.02% at 62.27% -5.55%,
      #ee7c65 0%,
      #f7c39d 21.88%,
      #ead899 39.58%,
      #87d5ff 57.81%,
      #9281f5 79.17%,
      #fa5284 100%
    ),
    #ffbc57;
  filter: blur(197.458px);
`;

export const StyledMiddleBackground = styled.div`
  /* Vector */
  overflow: hidden;
  position: absolute;
  width: 517px;
  height: 468.29px;
  right: -400px;
  top: 400px;

  background: linear-gradient(123.65deg, #ff5b5b 20.55%, #7544ff 80.59%),
    linear-gradient(123.82deg, #81a1ff 20.63%, #5449e8 80.51%),
    linear-gradient(123.44deg, #faa94d 20.46%, #f27038 80.68%),
    linear-gradient(90deg, #ff48e2 0%, #ff2936 93.67%),
    radial-gradient(
      14109.95% 737.02% at 62.27% -5.55%,
      #ee7c65 0%,
      #f7c39d 21.88%,
      #ead899 39.58%,
      #87d5ff 57.81%,
      #9281f5 79.17%,
      #fa5284 100%
    ),
    #ffbc57;
  filter: blur(275px);
`;

export const StyledBottomBackground = styled.div`
  position: absolute;
  width: 429.25px;
  overflow: hidden;
  bottom: 0px;
  left: 0px;
  top: 783.84px;

  background: radial-gradient(
      4364.51% 4924.13% at 15.59% 70.57%,
      #ee7c65 0%,
      #f7c39d 21.88%,
      #ead899 39.58%,
      #87d5ff 57.81%,
      #9281f5 79.17%,
      #fa5284 100%
    ),
    #ffbc57;
  filter: blur(224.237px);
  transform: rotate(59.66deg);

  @media (min-width: 768px) {
    display: none;
  }
`;
