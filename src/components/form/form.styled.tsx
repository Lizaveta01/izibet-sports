import styled from 'styled-components';

import { Colors, Size } from '../../styles/constansts';

export const FormWrapper = styled.div`
  cursor: pointer;
  width: 160px;
  height: 40px;
  color: ${Colors.BLACK};
  background-color: ${Colors.WHITE};
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 140px;
  transition: 0.3s all;
  &:hover {
    background-color: ${Colors.WHITE};
  }
`;
export const RadioButton = styled.div``;
export const ChooseCoefficient = styled.div``;
export const ButtonSubmit = styled.button`
  cursor: pointer;
  width: 160px;
  height: 40px;
  color: ${Colors.BLACK};
  background-color: ${Colors.WHITE};
  border-radius: 4px;
  padding-left: 8px;
  padding-right: 8px;
  margin-top: 140px;
  transition: 0.3s all;
  &:hover {
    background-color: ${Colors.PINK};
  }
`;
