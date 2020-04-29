import { NativeModules } from 'react-native';

type CDiaryRnType = {
  getDeviceName(): Promise<string>;
};

const { CDiaryRn } = NativeModules;

export default CDiaryRn as CDiaryRnType;
