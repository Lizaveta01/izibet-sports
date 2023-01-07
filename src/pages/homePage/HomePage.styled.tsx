import styled from 'styled-components';

import { Colors, Size } from '../../styles/constansts';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 100px;
`;

export const Match = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${Colors.GRAY};
  height: 60px;
  border-radius: 8px;
  width: 100%;
  padding: 0px 40px;
  @media screen and (max-width: ${Size.laptop}) {
    gap: 16px;
    padding: 0px 16px;
    /* height: 80px; */
  }
  @media screen and (max-width: ${Size.tablet}) {
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
  margin-bottom: 50px;
  gap: 20px;
  @media screen and (max-width: ${Size.laptop}) {
    padding: 0 4%;
  }
  @media screen and (max-width: ${Size.tablet}) {
    flex-direction: column;
    div${Match}:nth-child(2n + 1) {
      background-color: ${Colors.BLACK};
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
  @media screen and (max-width: ${Size.laptop}) {
    gap: 60%;
  }
  @media screen and (max-width: ${Size.tablet}) {
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
  @media screen and (max-width: ${Size.tablet}) {
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
  background-color: ${Colors.BLACK};
  margin: 0 20px;
  p {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 12px;
    text-align: center;
    padding-left: 12px;
  }
  @media screen and (max-width: ${Size.tablet}) {
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
  @media screen and (max-width: ${Size.laptop}) {
    justify-content: center;
  }
  @media screen and (max-width: ${Size.tablet}) {
    div${Score} {
      background-color: inherit;
    }
  }
`;
export const Coefficient = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10%;
  @media screen and (max-width: ${Size.laptop}) {
    gap: 16px;
    justify-content: center;
    width: auto;
  }
`;
export const HomeWin = styled.p``;
export const Draw = styled.p``;
export const GuestWin = styled.p``;
