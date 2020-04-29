import { NativeModules } from 'react-native';
import NewDiaryEntry from './components/NewDiaryEntry/index';

type CDiaryRnType = {
  getDeviceName(): Promise<string>;
};

const { CDiaryRn } = NativeModules;

export default CDiaryRn as CDiaryRnType;

export { NewDiaryEntry };
