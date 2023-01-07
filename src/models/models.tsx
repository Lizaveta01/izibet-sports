export interface IMatch {
  id: number;
  playDate: string;
  playTime: string;
  homeTeam: {
    name: string;
    logo: string;
    score: number;
  };
  guestTeam: {
    name: string;
    logo: string;
    score: number;
  };
}
