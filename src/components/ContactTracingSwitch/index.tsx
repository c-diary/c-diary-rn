import React from 'react';
import { View, Switch, Text } from 'react-native';

import SpecialBle from 'rn-contact-tracing';

interface Props {}

interface State {
  initialized: boolean;
  enabled: boolean;
  details: boolean;
}

export default class ContactTracingSwitch extends React.Component<
  Props,
  State
> {
  constructor(props: any) {
    super(props);
    this.state = {
      initialized: false,
      enabled: false,
      details: false,
    };
  }

  async connectBackend() {
    const config = {
      serviceUUID: '',
      scanDuration: 0,
      scanInterval: 0,
      advertiseInterval: 0,
      advertiseDuration: 0,
      advertiseMode: 0,
      token: 'default_token',
    };
    SpecialBle.setConfig(config);
    SpecialBle.advertise();
    //let publicKeys = ['12345', '12346', '12347', '12348', '12349'];
    //SpecialBle.setPublicKeys(publicKeys);
  }

  componentDidMount() {
    this.connectBackend();
  }

  async toggleSwitch() {
    if (!this.state.initialized) {
      this.connectBackend();
    }
    if (this.state.enabled) {
      await SpecialBle.stopBLEService();
      this.setState({ enabled: false });
    } else {
      await SpecialBle.startBLEService();
      this.setState({ enabled: true });
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
        <Text onPress={() => this.setState({ details: true })}>
          Contact tracing
        </Text>
        <Switch
          style={{ marginTop: 30 }}
          onValueChange={() => this.toggleSwitch()}
          value={this.state.enabled}
        />
      </View>
    );
  }
}
