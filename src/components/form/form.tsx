import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useMyContext } from '../../context/context';
import { IBetData, IMatch } from '../../models/models';

import {
  ButtonSubmit,
  ChooseCoefficient,
  FormWrapper,
  Input,
  Paragraph,
  RadioButton,
} from './form.styled';

type Props = {
  match: IMatch | undefined;
};

const Form = ({ match }: Props) => {
  const navigate = useNavigate();
  const [isBet, setIsBet] = useState(false);
  const { homeTeam, guestTeam, draw } = match!;
  const { setBet } = useMyContext();

  const onSubmit = () => {
    navigate('/');
  };

  const coefficientData: IBetData[] = [
    {
      id: 'radio-1',
      team: homeTeam,
    },
    {
      id: 'radio-2',
      team: draw,
    },
    {
      id: 'radio-3',
      team: guestTeam,
    },
  ];

  const hadlerOption = (winTeam: IBetData) => {
    setIsBet(true);
    const { team } = winTeam;
    const win: string = team.name ? `${team.name} win` : team.title;

    setBet({
      home: homeTeam.name,
      guest: guestTeam.name,
      win: win,
      coefficient: team.coefficient,
    });
  };

  return (
    <FormWrapper>
      <ChooseCoefficient>
        {coefficientData.map((item, index) => {
          const { team } = item;
          return (
            <RadioButton key={index}>
              <Input id={item.id} type="radio" name="radio" onClick={() => hadlerOption(item)} />
              <Paragraph>
                {team.title} : {team.coefficient}
              </Paragraph>
            </RadioButton>
          );
        })}
      </ChooseCoefficient>

      <ButtonSubmit type="submit" disabled={!isBet} onClick={onSubmit}>
        Make a bet
      </ButtonSubmit>
    </FormWrapper>
  );
};

export default Form;
