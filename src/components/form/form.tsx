import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IMatch } from '../../models/models';
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
  const { homeTeam, guestTeam, drawCoefficient } = match!;

  const onSubmit = () => {
    navigate('/');
  };

  const coefficientData = [
    {
      id: 'radio-1',
      title: 'Home',
      team: homeTeam.name,
      coefficient: homeTeam.coefficient,
    },
    {
      id: 'radio-2',
      title: 'Draw',
      team: '',
      coefficient: drawCoefficient,
    },
    {
      id: 'radio-3',
      title: 'Guest',
      team: guestTeam.name,
      coefficient: guestTeam.coefficient,
    },
  ];
  const [isBet, setIsBet] = useState(false);

  const hadlerOption = (team: string) => {
    setIsBet(true);
  };

  return (
    <FormWrapper>
      <ChooseCoefficient>
        {coefficientData.map((item, index) => {
          return (
            <RadioButton key={index}>
              <Input
                id={item.id}
                type="radio"
                name="radio"
                value="3"
                onClick={() => hadlerOption(item.team)}
              />
              <Paragraph>
                {item.title} : {item.coefficient}
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
