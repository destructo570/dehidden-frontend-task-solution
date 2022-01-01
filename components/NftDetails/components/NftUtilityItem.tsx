import Image from "next/image";
import styled from "styled-components";

const StyledNftUtilityItem = styled.li`
  background-color: ${({ theme }) => theme.color.darkCardBgColor};
  border-radius: 24px;

  & + & {
    margin-top: 1em;
  }

  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    padding: 0.6em;
    color: ${({ theme }) => theme.color.primaryText};
  }
  img {
    max-width: 48px;
  }
`;

const StyledNftUtilityImage = styled.div`
  background-color: rgba(85, 83, 83, 0.3);
  min-height: 100px;
  min-width: 100px;
  display: flex;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;
const StyledNftUtilityInfo = styled.div`
  margin: 0 1em;
  p {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.layout.medium.media}) {
    h2 {
      font-size: 1.6rem;
    }
    p {
      display: block;
      font-size: 1.125rem;
    }
  }
`;

const NftUtilityItem: React.FC<{
  title: string;
  iconUrl: string;
  redirectUrl: string;
  description: string;
}> = (props) => {
  return (
    <StyledNftUtilityItem>
      <a href={props.redirectUrl} target="_blank" rel="noreferrer">
        <StyledNftUtilityImage>
          <Image src={props.iconUrl} alt="" width={48} height={48} />
        </StyledNftUtilityImage>
        <StyledNftUtilityInfo>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </StyledNftUtilityInfo>
      </a>
    </StyledNftUtilityItem>
  );
};

export default NftUtilityItem;
