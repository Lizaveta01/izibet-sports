export interface IMatch {
  id: number;
  playDate: string;
  playTime: string;
  homeTeam: ITeam;
  guestTeam: ITeam;
  draw: IDraw;
}

export interface ITeam {
  title: string;
  name: string;
  logo: string;
  score: number;
  coefficient: number;
}
export interface IDraw {
  title: string;
  name: null;
  coefficient: number;
}

export interface IBetData {
  id: string;
  team: ITeam | IDraw;
}
