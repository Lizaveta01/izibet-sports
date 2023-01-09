/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HandySvg } from 'handy-svg';

import { currentAPI } from '../../data/mockData';
import { IMatch } from '../../models/models';
import { useMyContext } from '../../context/context';
import { Word } from '../../models/constants';

import {
  DateItem,
  Match,
  MatchingList,
  Name,
  Score,
  TeamFirst,
  TeamSecond,
  TimeItem,
  Wrapper,
  AboutTeams,
  AboutMatch,
  ModalWindow,
  Title,
} from './HomePage.styled';
import Spinner from '../../components/spinner/Spinner';

const HomePage = () => {
  const [matches, setMatches] = useState<IMatch[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);
  const { bet, setBet } = useMyContext();

  useEffect(() => {
    getMatches();
    if (bet) {
      setIsOpenModalWindow(true);
      closeModalWindow();
    }
  }, []);

  const getMatches = async () => {
    const res = await currentAPI.getMatches();
    setMatches(res);
    setIsLoading(false);
  };

  const closeModalWindow = () => {
    setTimeout(() => {
      setIsOpenModalWindow(false);
      setBet(null);
    }, 4000);
  };

  return (
    <Wrapper>
      <Title>IZIBET SPORTS</Title>
      {bet && (
        <ModalWindow className={isOpenModalWindow ? Word.ACTIVE : ''}>
          <p>
            Thank you! Your bet in the match{' '}
            <span>
              {bet.home} : {bet.guest}{' '}
            </span>{' '}
            on <span>{bet.win}</span> with coefficient <span>{bet.coefficient} </span> accepted
          </p>
        </ModalWindow>
      )}

      {isLoading ? (
        <Spinner />
      ) : (
        <MatchingList>
          {matches!.map((match) => {
            const { id, playDate, playTime, homeTeam, guestTeam } = match;
            return (
              <Match key={id} as={Link} to={`match/${id}`}>
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
            );
          })}
        </MatchingList>
      )}
    </Wrapper>
  );
};

export default HomePage;
