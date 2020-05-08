import React from 'react';
import { View } from 'react-native';
import Temperature from './Temperature';

interface Props {}

interface State {
  question: number;
  symptoms: any[];
}

export default class ReportSymptoms extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      question: 0,
      symptoms: [],
    };
  }

  temperatureChanged(index: number) {
    console.log(index);
  }

  render() {
    return (
      <View>
        <Temperature
          onChange={(index: number) => this.temperatureChanged(index)}
        />
      </View>
    );
  }
}
