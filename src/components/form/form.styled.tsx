import styled from 'styled-components';

import { Colors, Size } from '../../styles/constansts';

const { PINK, WHITE, BLACK, DISABLED } = Colors;
const { tablet, mobile } = Size;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 40px;
  color: ${BLACK};
  background-color: ${WHITE};
  border-radius: 4px;
  padding: 40px;
  transition: 0.3s all;
  &:hover {
    background-color: ${WHITE};
  }
  @media screen and (max-width: ${tablet}) {
    padding: 4%;
  }
`;

export const ChooseCoefficient = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media screen and (max-width: ${mobile}) {
    flex-direction: column;
  }
`;

export const RadioButton = styled.label`
  display: inline-block;
  cursor: pointer;
  line-height: 34px;
  border: 1px solid ${DISABLED};
  border-radius: 6px;
  user-select: none;

  input[type='radio'] {
    display: none;
  }
`;

export const Paragraph = styled.p`
  color: ${BLACK};
  font-weight: 600;
  padding: 0px 15px;

  &:hover {
    color: ${PINK};
  }
`;

export const Input = styled.input`
  display: none;
  &:checked + ${Paragraph} {
    background-color: ${PINK};
    color: ${WHITE};
  }
`;

export const ButtonSubmit = styled.button`
  cursor: pointer;
  width: 160px;
  height: 40px;
  color: ${WHITE};
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
  transition: 0.3s all;
  background-color: ${PINK};
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &:disabled {
    background-color: ${DISABLED};
    cursor: not-allowed;
    &:hover {
      transform: scale(1);
    }
  }
`;
