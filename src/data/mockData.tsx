import { IMatch } from '../models/models';

import { findData, sortData } from '../utils/dataTransofrm';

import Chelsea from '../assets/svg/chelsea.svg';
import Leicester from '../assets/svg/Leicester_City.svg';
import Roma from '../assets/svg/Roma.svg';
import Arsenal from '../assets/svg/Arsenal.svg';

const mockDB: IMatch[] = [
  {
    id: 1,
    playDate: '12.01.2023',
    playTime: '18:00',
    homeTeam: {
      title: 'Home',
      name: 'Roma',
      logo: `${Roma}`,
      score: 0,
      coefficient: 1.05,
    },
    guestTeam: {
      title: 'Guest',
      name: 'Chelsea',
      logo: `${Chelsea}`,
      score: 0,
      coefficient: 2.23,
    },
    draw: {
      title: 'Draw',
      name: null,
      coefficient: 0.35,
    },
  },
  {
    id: 2,
    playDate: '13.01.2023',
    playTime: '10:00',
    homeTeam: {
      title: 'Home',
      name: 'Leicester C',
      logo: `${Leicester}`,
      score: 0,
      coefficient: 0.23,
    },
    guestTeam: {
      title: 'Guest',
      name: 'Arsenal',
      logo: `${Arsenal}`,
      score: 0,
      coefficient: 1.55,
    },
    draw: {
      title: 'Draw',
      name: null,
      coefficient: 2.0,
    },
  },
  {
    id: 3,
    playDate: '12.01.2023',
    playTime: '11:00',
    homeTeam: {
      title: 'Home',
      name: 'Chelsea',
      logo: `${Chelsea}`,
      score: 0,
      coefficient: 2.33,
    },
    guestTeam: {
      title: 'Guest',
      name: 'Arsenal',
      logo: `${Arsenal}`,
      score: 0,
      coefficient: 4.5,
    },
    draw: {
      title: 'Draw',
      name: null,
      coefficient: 3.26,
    },
  },
  {
    id: 4,
    playDate: '13.01.2023',
    playTime: '19:00',
    homeTeam: {
      title: 'Home',
      name: 'Arsenal',
      logo: `${Arsenal}`,
      score: 0,
      coefficient: 1.13,
    },
    guestTeam: {
      title: 'Guest',
      name: 'Leicester C',
      logo: `${Leicester}`,
      score: 0,
      coefficient: 0.29,
    },
    draw: {
      title: 'Draw',
      name: null,
      coefficient: 2.55,
    },
  },
  {
    id: 5,
    playDate: '15.01.2023',
    playTime: '20:00',
    homeTeam: {
      title: 'Home',
      name: 'Chelsea',
      logo: `${Chelsea}`,
      score: 0,
      coefficient: 2.0,
    },
    guestTeam: {
      title: 'Guest',
      name: 'Leicester C',
      logo: `${Leicester}`,
      score: 0,
      coefficient: 3.0,
    },
    draw: {
      title: 'Draw',
      name: null,
      coefficient: 1.1,
    },
  },
  {
    id: 6,
    playDate: '16.01.2023',
    playTime: '18:00',
    homeTeam: {
      title: 'Home',
      name: 'Leicester C',
      logo: `${Leicester}`,
      score: 0,
      coefficient: 2.63,
    },
    guestTeam: {
      title: 'Guest',
      name: 'Roma',
      logo: `${Roma}`,
      score: 0,
      coefficient: 5.36,
    },
    draw: {
      title: 'Draw',
      name: null,
      coefficient: 0.2,
    },
  },
];

const mockAPI = {
  getMatches: () => Promise.resolve(sortData(mockDB)),
  getMatchById: (id: number) => Promise.resolve(findData(mockDB, id)),
};

export const currentAPI = mockAPI;
