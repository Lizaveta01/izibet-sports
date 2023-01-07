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
  Score,
  TeamFirst,
  TeamSecond,
  TimeItem,
  Title,
  Wrapper,
} from './MatchPage.styled';

const MatchPage = () => {
  const { matchID } = useParams();
  const navigate = useNavigate();
  const [match, setMatch] = useState<IMatch>();
  const { id, playDate, playTime, homeTeam, guestTeam } = match!;

  useEffect(() => {
    getMatch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMatch = () => {
    const match = data.filter((match) => match.id === +matchID!);
    setMatch(match[0]);
  };

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Wrapper>
      <Title> Сделай ставку на матч</Title>
      <Match>
        <AboutMatch>
          <TimeItem>{playTime}</TimeItem>
          <DateItem>{playDate}</DateItem>
        </AboutMatch>

        <AboutTeams>
          <TeamFirst>
            <Name>{homeTeam.name}</Name>
            <HandySvg src={homeTeam.logo} width="40" height="40" />
          </TeamFirst>
          <Score>
            <p>
              {homeTeam.score}:{guestTeam.score}
            </p>
          </Score>
          <TeamSecond>
            <Name>{guestTeam.name}</Name>
            <HandySvg src={guestTeam.logo} width="40" height="40" />
          </TeamSecond>
        </AboutTeams>
      </Match>

      <Form match={match} />

      <ButtonBack onClick={handleClick}>Back Home</ButtonBack>
    </Wrapper>
  );
};

export default MatchPage;
