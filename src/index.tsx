import { NativeModules } from 'react-native';
import NewDiaryEntry from './components/NewDiaryEntry';
import DP3T from './components/DP3T';
import DP3TStatus from './components/DP3TStatus';
import Wallet from './components/Wallet';

type CDiaryRnType = {
  getDeviceName(): Promise<string>;
};

const { CDiaryRn } = NativeModules;

export default CDiaryRn as CDiaryRnType;

export { NewDiaryEntry, DP3T, DP3TStatus, Wallet };
