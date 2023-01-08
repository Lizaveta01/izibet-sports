import styled from 'styled-components';

import { Colors, Size } from '../../styles/constansts';

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
  color: ${Colors.BLACK};
  background-color: ${Colors.WHITE};
  border-radius: 4px;
  padding: 40px;
  transition: 0.3s all;
  &:hover {
    background-color: ${Colors.WHITE};
  }
`;
export const ChooseCoefficient = styled.div`
  display: flex;
  gap: 20px;
`;
export const RadioButton = styled.label`
  display: inline-block;
  cursor: pointer;

  line-height: 34px;
  border: 1px solid ${Colors.DISABLED};
  border-radius: 6px;
  user-select: none;

  input[type='radio'] {
    display: none;
  }
`;
export const Paragraph = styled.p`
  color: ${Colors.BLACK};
  font-weight: 600;
  padding: 0px 15px;

  &:hover {
    color: ${Colors.PINK};
  }
`;
export const Input = styled.input`
  display: none;
  &:checked + ${Paragraph} {
    background-color: ${Colors.PINK};
    color: ${Colors.WHITE};
  }
`;
export const ButtonSubmit = styled.button`
  cursor: pointer;
  width: 160px;
  height: 40px;
  color: ${Colors.WHITE};
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
  transition: 0.3s all;
  background-color: ${Colors.PINK};
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &:disabled {
    background-color: ${Colors.DISABLED};
    cursor: not-allowed;
    &:hover {
      transform: scale(1);
    }
  }
`;
