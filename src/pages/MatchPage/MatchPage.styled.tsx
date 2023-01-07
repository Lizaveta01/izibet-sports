import styled from 'styled-components';

import { Colors, Size } from '../../styles/constansts';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 100px;
`;
export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
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
`;
export const AboutMatch = styled.div`
  display: flex;
  align-items: center;
  gap: 80%;
  width: 10%;
`;
export const TimeItem = styled.p``;
export const DateItem = styled.p``;

const Team = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
`;
export const AboutTeams = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const ButtonBack = styled.button`
  cursor: pointer;
  width: 160px;
  height: 40px;
  color: ${Colors.BLACK};
  background-color: ${Colors.WHITE};
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 140px;
  transition: 0.3s all;
  &:hover {
    background-color: ${Colors.WHITE};
  }
`;
