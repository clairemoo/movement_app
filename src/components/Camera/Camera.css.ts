import styled from 'styled-components';
import { RNCamera } from 'react-native-camera';
import { View } from 'react-native';

export const Container = styled(View)`
  flex: 1;
`;

export const Cam = styled(RNCamera)`
  flex: 1;
  justify-content: 'flex-end';
  align-items: center;
`;
