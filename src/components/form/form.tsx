import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IMatch } from '../../models/models';
import { ButtonSubmit, ChooseCoefficient, FormWrapper, RadioButton } from './form.styled';

type Props = {
  match: IMatch;
};

const Form = ({ match }: Props) => {
  const navigate = useNavigate();
  const { homeTeam, guestTeam, drawCoefficient } = match;
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = () => {
    navigate('/');
  };

  const coefficientData = [
    {
      title: 'Home',
      coefficient: homeTeam.coefficient,
    },
    {
      title: 'Draw',
      coefficient: drawCoefficient,
    },
    {
      title: 'Guest',
      coefficient: guestTeam.coefficient,
    },
  ];

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <ChooseCoefficient>
        {coefficientData.map((item, index) => {
          return (
            <RadioButton key={index}>
              <input id="radio-3" type="radio" name="radio" value="3" />
              <label htmlFor="radio-3">{item.title}</label>
            </RadioButton>
          );
        })}
      </ChooseCoefficient>

      <ButtonSubmit type="submit" disabled={!isValid}>
        Make a bet
      </ButtonSubmit>
    </FormWrapper>
  );
};

export default Form;
