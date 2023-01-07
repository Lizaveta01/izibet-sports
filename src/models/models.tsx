export interface IMatch {
  id: number;
  playDate: string;
  playTime: string;
  homeTeam: {
    name: string;
    logo: string;
    score: number;
    coefficient: number;
  };
  guestTeam: {
    name: string;
    logo: string;
    score: number;
    coefficient: number;
  };
  drawCoefficient: number;
}
