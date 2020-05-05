import React from 'react';
import { Button, View } from 'react-native';
import {
  initWithDiscovery,
  requestPermissions,
  start,
  stop,
} from 'react-native-dp3t-sdk';

interface Props {
  backendAppId: string;
  publicKeyBase64: string;
}

interface State {}

export default class DP3T extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  async connectBackend() {
    const { backendAppId, publicKeyBase64 } = this.props;

    try {
      await initWithDiscovery(backendAppId, publicKeyBase64, true);

      console.log(backendAppId, publicKeyBase64);
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.connectBackend();
  }

  componentWillUnmount() {
    stop();
  }

  render() {
    return (
      <View>
        <Button
          title="Request permissions"
          onPress={async () => {
            console.log('request');
            this.connectBackend();
            const permission = await requestPermissions();
            console.log(permission);

            if (permission && permission === 'granted') {
              this.connectBackend();
              start();
            }
          }}
        />
      </View>
    );
  }
}
