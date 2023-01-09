import styled from 'styled-components';

import { Colors, Size } from '../../styles/constansts';

const { PINK, WHITE } = Colors;
const { tablet, mobile } = Size;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;

export const Title = styled.div`
  background-color: ${PINK};
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 50px;
    font-weight: bold;
  }
  @media screen and (max-width: ${tablet}) {
    height: 100px;
    h1 {
      font-size: 30px;
    }
  }
`;

export const Match = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  border: 2px solid ${PINK};
  border-radius: 8px;
  padding: 40px;
  margin: auto 0;
  @media screen and (max-width: ${tablet}) {
    padding: 4%;
    gap: 4%;
    width: 80%;
  }
  @media screen and (max-width: ${mobile}) {
    width: 96%;
  }
`;

export const AboutMatch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const TimeItem = styled.p`
  font-weight: 500;
  font-size: 30px;
`;

export const DateItem = styled.p``;

const Team = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column-reverse;
  gap: 20px;
  p {
    font-size: 18px;
    font-weight: bold;
  }
  svg {
    width: 100px;
    height: 100px;
  }
  @media screen and (max-width: ${tablet}) {
    gap: 5px;
    svg {
      min-width: 80px;
      min-height: 80px;
      width: 60%;
    }
  }
`;

export const TeamFirst = styled(Team)`
  justify-content: flex-end;
  p {
    text-align: end;
  }
`;

export const TeamSecond = styled(Team)``;
export const Name = styled.p``;

export const AboutTeams = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  @media screen and (max-width: ${tablet}) {
    gap: 4%;
  }
`;

export const ButtonBack = styled.button`
  cursor: pointer;
  height: 40px;
  color: ${WHITE};
  background-color: transparent;
  border: 1px solid ${PINK};
  border-radius: 4px;
  transition: 0.3s all;
  padding: 4px 16px;
  margin-top: 40px;
  &:hover {
    border: 1px solid ${WHITE};
  }
`;
