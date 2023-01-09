import moment from 'moment';
import { IMatch } from '../models/models';

export const sortData = (data: IMatch[]) => {
  const dataSortedByTime = sortByTime(data);
  return dataSortedByTime.sort(
    (a, b) => moment(a.playDate, 'DD.MM.YY').valueOf() - moment(b.playDate, 'DD.MM.YY').valueOf()
  );
};

export const findData = (data: IMatch[], id: number) => {
  return data.find((item) => item.id === id);
};

const sortByTime = (data: IMatch[]) => {
  return data.sort((a, b) => +a.playTime.split(':').join('') - +b.playTime.split(':').join(''));
};
