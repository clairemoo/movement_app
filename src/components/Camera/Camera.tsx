import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';

import { Container } from './Camera.css';

const Camera = () => {
  const [{ cameraRef }, { recordVideo }] = useCamera({
    type: RNCamera.Constants.Type.back
  });

  return (
    <Container>
      <RNCamera ref={cameraRef}></RNCamera>
    </Container>
  );
};

export default Camera;
