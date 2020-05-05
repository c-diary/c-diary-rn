import { NativeModules } from 'react-native';
import NewDiaryEntry from './components/NewDiaryEntry/index';
import DP3T from './components/DP3T/index';

type CDiaryRnType = {
  getDeviceName(): Promise<string>;
};

const { CDiaryRn } = NativeModules;

export default CDiaryRn as CDiaryRnType;

export { NewDiaryEntry, DP3T };
