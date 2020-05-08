import React from 'react';
import { View, Switch, Text } from 'react-native';
import {
  initWithDiscovery,
  requestPermissions,
  start,
  stop,
  isInitialized,
} from 'react-native-dp3t-sdk';

interface Props {
  backendAppId: string;
  publicKeyBase64: string;
}

interface State {
  initialized: boolean;
  enabled: boolean;
}

export default class DP3T extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      initialized: false,
      enabled: false,
    };
  }

  async connectBackend() {
    const { backendAppId, publicKeyBase64 } = this.props;

    try {
      await initWithDiscovery(backendAppId, publicKeyBase64, true);
      isInitialized().then(initialized => this.setState({ initialized }));
      console.log(backendAppId, publicKeyBase64);
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.connectBackend();
  }

  async toggleSwitch() {
    if (!this.state.initialized) {
      this.connectBackend();
    }
    if (this.state.enabled) {
      stop().then(() => {
        this.setState({ enabled: false });
      });
    } else {
      const permission = await requestPermissions();
      if (permission && permission === 'granted') {
        start().then(() => {
          this.setState({ enabled: false });
        });
      }
    }
  }

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <Text>Contact tracing</Text>
        <Switch
          style={{ marginTop: 30 }}
          onValueChange={() => this.toggleSwitch()}
          value={this.state.enabled}
        />
      </View>
    );
  }
}
