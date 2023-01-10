import styled from 'styled-components';
import { RNCamera } from 'react-native-camera';
import { Text, View } from 'react-native';

export const Container = styled(View)`
  height: 100%;
`;

export const Cam = styled(RNCamera)`
  flex: 1;
  align-items: center;
`;

export const RecordingText = styled(Text)`
  ${({ theme }) => theme.typography.typeStyle2}

  color: ${({ theme }) => theme.colors.white};
  margin: 165px 0 65px;
  text-align: center;
  padding: 0 50px;
`;

export const Countdown = styled(Text)`
  ${({ theme }) => theme.typography.typeStyle3}

  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 165px;
`;
