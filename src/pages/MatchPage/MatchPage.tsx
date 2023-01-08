/* eslint-disable react-hooks/exhaustive-deps */
import { HandySvg } from 'handy-svg';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from '../../components/form/form';
import Spinner from '../../components/spinner/Spinner';
import { currentAPI } from '../../data/mockData';
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
  const [match, setMatch] = useState<IMatch>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMatch();
  }, []);

  const handleClick = () => {
    navigate('/');
  };

  const getMatch = async () => {
    const res = await currentAPI.getMatchById(+matchID!);
    setMatch(res);
    setIsLoading(false);
  };

  return (
    <Wrapper>
      <Title>
        <h1>Will make a bet on the match!</h1>
      </Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <React.Fragment>
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
        </React.Fragment>
      )}

      <ButtonBack onClick={handleClick}>Back Home</ButtonBack>
    </Wrapper>
  );
};

export default MatchPage;
