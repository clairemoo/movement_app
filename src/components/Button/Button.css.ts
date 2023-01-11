import styled from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';

const VARIANT_STYLES: { [key: string]: { [key: string]: string } } = {
  primary: {
    backgroundColor: 'coreBlue',
    borderColor: 'coreBlue',
    color: 'white',
  },
  alert: {
    backgroundColor: 'white',
    borderColor: 'alert',
    color: 'alert',
  },
  secondary: {
    backgroundColor: 'white',
    borderColor: 'coreBlue',
    color: 'coreBlue',
  },
  tertiary: {
    backgroundColor: 'white',
    borderColor: 'greenYellow',
    color: 'greenYellow',
  },
};

export const StyledTouchableOpacity = styled(TouchableOpacity)<{
  variant: string;
  width?: string;
  size: string;
}>`
  ${({ theme }) => theme.typography.typeStyle1}

  background-color: ${({ theme, variant }) =>
    theme.colors[VARIANT_STYLES[variant].backgroundColor]};
  border: ${({ theme, variant }) =>
    `1px solid ${theme.colors[VARIANT_STYLES[variant].borderColor]}`};
  width: ${({ width }) => width || '150px'};
  padding: ${({ size }) => (size === 'small' ? '8px' : '20px')};
  border-radius: ${({ size }) => (size === 'small' ? '10px' : '0px')};
  align-items: center;
`;

export const ButtonText = styled(Text)<{ variant: string }>`
  color: ${({ theme, variant }) => theme.colors[VARIANT_STYLES[variant].color]};
`;
