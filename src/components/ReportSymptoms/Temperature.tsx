import React from 'react';
import { View } from 'react-native';
import { ButtonGroup, Text } from 'react-native-elements';

interface Props {
  onChange: any;
}

interface State {
  selectedIndex: number;
}

export default class Temperature extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  updateIndex(selectedIndex: number) {
    this.setState({ selectedIndex });
    this.props.onChange(selectedIndex);
  }

  render() {
    const { selectedIndex } = this.state;
    const buttons = ['Under 38 C', '38-39.4 C', 'Over 39.5 C'];
    return (
      <View>
        <Text h4>How high is your body temperature?</Text>
        <ButtonGroup
          vertical
          onPress={index => this.updateIndex(index)}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 400 }}
        />
      </View>
    );
  }
}
