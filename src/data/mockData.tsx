import Chelsea from '../assets/svg/chelsea.svg';
import { IMatch } from '../models/models';

const mockDB: IMatch[] = [
  {
    id: 1,
    playDate: '12.01.2023',
    playTime: '18:00',
    homeTeam: {
      name: 'Chelsea',
      logo: `${Chelsea}`,
      score: 0,
      coefficient: 1.23,
    },
    guestTeam: {
      name: 'Chelsea',
      logo: `${Chelsea}`,
      score: 0,
      coefficient: 1.23,
    },
    drawCoefficient: 1.23,
  },
  {
    id: 2,
    playDate: '12.01.2023',
    playTime: '18:00',
    homeTeam: {
      name: 'Chelsea',
      logo: `${Chelsea}`,
      score: 0,
      coefficient: 1.23,
    },
    guestTeam: {
      name: 'Chelsea',
      logo: `${Chelsea}`,
      score: 0,
      coefficient: 1.23,
    },
    drawCoefficient: 1.23,
  },
  {
    id: 3,
    playDate: '12.01.2023',
    playTime: '18:00',
    homeTeam: {
      name: 'Chelsea',
      logo: `${Chelsea}`,
      score: 0,
      coefficient: 1.23,
    },
    guestTeam: {
      name: 'Chelsea',
      logo: `${Chelsea}`,
      score: 0,
      coefficient: 1.23,
    },
    drawCoefficient: 1.23,
  },
];

const mockAPI = {
  getMatches: () => Promise.resolve(mockDB),
  getMatchById: (id: number) => Promise.resolve(mockDB.find((v) => v.id === id)),
};

export const currentAPI = mockAPI;
