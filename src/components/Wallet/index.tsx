import React from 'react';
import Clipboard from '@react-native-community/clipboard';
import AsyncStorage from '@react-native-community/async-storage';
import { Text, Icon, Button } from 'react-native-elements';
import { Wallet as CDWallet } from 'c-diary-js';

interface Props {}

interface State {
  wallet: CDWallet | null;
  extended: boolean;
}

export default class Wallet extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      wallet: null,
      extended: false,
    };
  }

  componentDidMount() {
    this.loadWallet();
  }

  componentWillUnmount() {
    const wallet = this.state.wallet;
    if (wallet !== null) {
      AsyncStorage.setItem('@key', wallet.export());
    }
  }

  async loadWallet() {
    try {
      const key = await AsyncStorage.getItem('@key');
      const wallet = new CDWallet();
      if (key !== null) {
        wallet.import(key);
      } else {
        wallet.generate();
      }
      this.setState({ wallet });
    } catch (e) {
      console.log(e);
    }
  }

  async generateWallet() {
    const wallet = new CDWallet();
    wallet.generate();
    try {
      await AsyncStorage.setItem('@key', wallet.export());
    } catch (e) {
      console.log(e);
    }
    this.setState({ wallet });
  }

  render() {
    const { extended, wallet } = this.state;
    if (!wallet) {
      return (
        <>
          <Button
            title="Generate Identity"
            onPress={() => this.generateWallet()}
          />
        </>
      );
    }
    if (extended) {
      return (
        <>
          <Text onLongPress={() => Clipboard.setString(wallet.getPublicKey())}>
            {wallet.getPublicKey()}
          </Text>
          <Icon
            name="vpn-key"
            onPress={() => this.setState({ extended: false })}
          />
          <Button title="generate key" onPress={() => this.generateWallet()} />
        </>
      );
    }
    return (
      <Icon name="vpn-key" onPress={() => this.setState({ extended: true })} />
    );
  }
}
