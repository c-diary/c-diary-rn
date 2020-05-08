import { NativeModules } from 'react-native';
import NewDiaryEntry from './components/NewDiaryEntry';
import DP3T from './components/DP3T';
import DP3TStatus from './components/DP3TStatus';
import DP3TSwitch from './components/DP3TSwitch';
import Wallet from './components/Wallet';
import ReportSymptoms from './components/ReportSymptoms';

type CDiaryRnType = {
  getDeviceName(): Promise<string>;
};

const { CDiaryRn } = NativeModules;

export default CDiaryRn as CDiaryRnType;

export { NewDiaryEntry, DP3T, DP3TStatus, DP3TSwitch, ReportSymptoms, Wallet };
