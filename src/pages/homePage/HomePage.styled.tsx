import styled from 'styled-components';

import { Colors, Size } from '../../styles/constansts';

const { PINK, WHITE, GRAY, BLACK } = Colors;
const { laptop, tablet } = Size;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  margin-top: 40px;
  font-size: 40px;
`;

export const Match = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${GRAY};
  height: 60px;
  border-radius: 8px;
  width: 100%;
  padding: 0px 40px;
  cursor: pointer;
  color: ${WHITE};
  border: 2px solid ${GRAY};
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.02);
    border: 2px solid ${PINK};
  }
  @media screen and (max-width: ${laptop}) {
    gap: 16px;
    padding: 0px 16px;
  }
  @media screen and (max-width: ${tablet}) {
    border: none;
    border-radius: 0px;
  }
`;

export const MatchingList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 8%;
  width: 100%;
  margin-bottom: 40px;
  gap: 20px;
  @media screen and (max-width: ${laptop}) {
    padding: 0 4%;
  }
  @media screen and (max-width: ${tablet}) {
    flex-direction: column;
    a${Match}:nth-child(2n + 1) {
      background-color: ${BLACK};
    }
    padding: 0;
    svg {
      width: 26px;
      height: 26px;
    }
    p {
      font-size: 14px;
    }
  }
`;

export const AboutMatch = styled.div`
  display: flex;
  align-items: center;
  gap: 80%;
  width: 10%;
  @media screen and (max-width: ${laptop}) {
    gap: 60%;
  }
  @media screen and (max-width: ${tablet}) {
    gap: 10px;
    flex-direction: column;
  }
`;

export const TimeItem = styled.p``;
export const DateItem = styled.p``;

const Team = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${tablet}) {
    p {
      font-size: 14px;
    }
    svg {
      width: 26px;
      height: 26px;
    }
  }
  @media screen and (max-width: 580px) {
    p {
      display: none;
    }
    svg {
      width: 26px;
      height: 26px;
    }
  }
`;

export const TeamFirst = styled(Team)`
  justify-content: flex-end;
  p {
    text-align: end;
  }
  svg {
    margin-left: 30px;
  }
`;

export const TeamSecond = styled(Team)`
  flex-direction: row-reverse;
  svg {
    margin-right: 30px;
  }
`;

export const Name = styled.p`
  width: 120px;
`;

export const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 6px 12px;
  background-color: ${BLACK};
  margin: 0 20px;
  p {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 12px;
    text-align: center;
    padding-left: 12px;
  }
  @media screen and (max-width: ${tablet}) {
    p {
      font-size: 16px;
    }
    padding: 4px 10px;
    margin: 0 10px;
  }
`;

export const AboutTeams = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: ${laptop}) {
    justify-content: center;
  }
  @media screen and (max-width: ${tablet}) {
    div${Score} {
      background-color: inherit;
    }
  }
`;

export const ModalWindow = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background: ${PINK};
  border-radius: 10px;
  p {
    color: ${WHITE};
    font-size: 20px;
  }
  &.active {
    display: flex;
  }
  span {
    text-decoration: underline;
    font-weight: 600;
  }
`;
