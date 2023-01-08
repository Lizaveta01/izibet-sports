import { ReactElement } from 'react';

export interface IBet {
  home: string;
  guest: string;
  win: string;
  coefficient: number;
}

export interface IContext {
  bet: IBet | null;
  setBet: (bet: IBet | null) => void;
}

export type State = {
  bet: IBet | null;
};

export type Props = {
  children: ReactElement;
};

export type Action = { type: 'setBet'; bet: IBet | null };
