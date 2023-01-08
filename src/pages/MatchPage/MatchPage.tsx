import { HandySvg } from 'handy-svg';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from '../../components/form/form';
import { data } from '../../data/mockData';
import { IMatch } from '../../models/models';
import {
  AboutMatch,
  AboutTeams,
  ButtonBack,
  DateItem,
  Match,
  Name,
  TeamFirst,
  TeamSecond,
  TimeItem,
  Title,
  Wrapper,
} from './MatchPage.styled';

const MatchPage = () => {
  const { matchID } = useParams();
  const navigate = useNavigate();
  // const [match, setMatch] = useState<IMatch>();
  const match = data[0];

  useEffect(() => {
    // getData(data);
    // const matchData = data.filter((match) => match.id === +matchID!);
    // eslint-disable-next-line no-console
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line no-console
  const handleClick = () => {
    navigate('/');
  };

  // const getData = async (data: IMatch[]) => {
  //   const res = await data.filter((match: IMatch) => match.id === +matchID!);
  //   setMatch(res[0]);
  //   // eslint-disable-next-line no-console
  //   console.log('fif', match);
  // };

  return (
    <Wrapper>
      <Title>
        <h1>Will make a bet on match!</h1>
      </Title>
      <Match>
        <AboutTeams>
          <TeamFirst>
            <Name>{match!.homeTeam.name}</Name>
            <HandySvg src={match!.homeTeam.logo} />
          </TeamFirst>
          <AboutMatch>
            <TimeItem>{match!.playTime}</TimeItem>
            <DateItem>{match!.playDate}</DateItem>
          </AboutMatch>
          <TeamSecond>
            <Name>{match!.guestTeam.name}</Name>
            <HandySvg src={match!.guestTeam.logo} />
          </TeamSecond>
        </AboutTeams>
      </Match>

      <Form match={match} />

      <ButtonBack onClick={handleClick}>Back Home</ButtonBack>
    </Wrapper>
  );
};

export default MatchPage;
