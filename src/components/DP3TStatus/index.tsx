import React from 'react';
import { Button, View, Text } from 'react-native';
import { requestPermissions, useDp3tStatus } from 'react-native-dp3t-sdk';

export const DP3TStatus: React.FunctionComponent = () => {
  const [status, refreshStatus] = useDp3tStatus();
  if (status === false) {
    return null;
  }
  return (
    <View>
      <Button
        title="Request permissions"
        onPress={async () => {
          const permission = await requestPermissions();

          if (permission && permission === 'granted') {
            refreshStatus();
          }
        }}
      />
      <Button title="Refresh status" onPress={refreshStatus} />
      <Text>{status?.numberOfHandshakes} handshakes with other phones</Text>
      <Text>
        {status?.numberOfContacts} contacts with other people (updated on sync)
      </Text>
    </View>
  );
};

export default DP3TStatus;
