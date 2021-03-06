import moment from 'moment';
import React from 'react';
import { View, ScrollView } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Button, Rating } from 'react-native-elements';
import MultiSelect from 'react-native-multiple-select';

interface Props {}

interface State {
  date: Date;
  rating: number;
  symptoms: any[];
}

export default class NewDiaryEntry extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      date: new Date(),
      rating: 3,
      symptoms: [],
    };
  }

  ratingCompleted(rating: number) {
    this.setState({ rating });
  }

  handleSymptoms(selectedSymptoms: any) {
    this.setState({ symptoms: selectedSymptoms });
  }

  symptomOptions() {
    const options: any[] = [
      { id: 'FEVER', name: 'Fever' },
      { id: 'COUGH', name: 'Cough' },
      { id: 'BREATH', name: 'Shortness of breath' },
    ];
    return options;
  }

  render() {
    const { date, rating, symptoms } = this.state;
    return (
      <View>
        <Rating
          type="heart"
          startingValue={rating}
          ratingCount={5}
          imageSize={40}
          onFinishRating={rating => this.ratingCompleted(rating)}
        />
        <ScrollView horizontal>
          <MultiSelect
            hideTags
            hideSubmitButton
            hideDropdown
            items={this.symptomOptions()}
            uniqueKey="id"
            selectedItems={symptoms}
            onSelectedItemsChange={(selectedItems: any[]) =>
              this.handleSymptoms(selectedItems)
            }
          />
        </ScrollView>
        <View>
          <DatePicker
            date={date}
            minimumDate={moment(new Date())
              .subtract(7, 'days')
              .toDate()}
            maximumDate={new Date()}
            minuteInterval={30}
            onDateChange={date => this.setState({ date })}
          />
        </View>
        <Button title="Save" onPress={() => {}} />
      </View>
    );
  }
}
