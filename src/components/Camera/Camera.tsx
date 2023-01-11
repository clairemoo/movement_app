import React from 'react';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import { useCountdown } from '../../hooks/useCountdown';

import { Cam, Container, Countdown, RecordingText } from './Camera.css';

const Camera = () => {
  const { seconds } = useCountdown(10);
  const [{ cameraRef }, { recordVideo }] = useCamera({
    type: RNCamera.Constants.Type.back,
  });

  return (
    <Container>
      <Cam ref={cameraRef}>
        <RecordingText>Recording will begin in...</RecordingText>
        <Countdown>{seconds}</Countdown>
      </Cam>
    </Container>
  );
};

export default Camera;
