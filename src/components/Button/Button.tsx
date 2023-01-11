import React from 'react';
import { ButtonText, StyledTouchableOpacity } from './Button.css';

interface Props {
  width?: string;
  size: 'small' | 'large';
  variant: 'primary' | 'alert' | 'secondary' | 'tertiary';
  title: string;
}

const Button = ({ width, size, variant, title }: Props) => {
  return (
    <StyledTouchableOpacity width={width} size={size} variant={variant}>
      <ButtonText variant={variant}>{title}</ButtonText>
    </StyledTouchableOpacity>
  );
};

export default Button;
