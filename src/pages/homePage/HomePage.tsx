import { HandySvg } from 'handy-svg';
import React, { useEffect, useState } from 'react';
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
} from './HomePage.styled';

import { currentAPI } from '../../data/mockData';
import { Link } from 'react-router-dom';
import Spinner from '../../components/spinner/Spinner';
import { IMatch } from '../../models/models';

const HomePage = () => {
  const [matches, setMatches] = useState<IMatch[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = async () => {
    const res = await currentAPI.getMatches();
    setMatches(res);
    setIsLoading(false);
  };

  return (
    <Wrapper>
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
