import React from 'react';
import { storiesOf } from '@storybook/react-native';
import NewDiaryEntry from './NewDiaryEntry';
import DP3T from './DP3T';
import DP3TSwitch from './DP3TSwitch';
import Wallet from './Wallet';
import ReportSymptoms from './ReportSymptoms';
import ContactTracingSwitch from './ContactTracingSwitch';

storiesOf('Diary', module).add('new diary entry', () => <NewDiaryEntry />);

storiesOf('DP3T', module).add('DP3T', () => (
  <DP3T
    backendAppId={'org.dpppt.demo'}
    publicKeyBase64={
      'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0R' +
      'RZ0FFSndKMkErS2taR0p6QlMzM3dEOUUyaEI1K3VNYgpZcitNU2pOUGhmYzR6Q2w2amdSWkFWVHBKbE' +
      '0wSmI4RERqcDNRUDZhK2VEK1I1SFYyNzhROVN0SUhnPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0t'
    }
  />
));

storiesOf('DP3T', module).add('DP3TSwitch', () => (
  <DP3TSwitch
    backendAppId={'org.dpppt.demo'}
    publicKeyBase64={
      'LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0R' +
      'RZ0FFSndKMkErS2taR0p6QlMzM3dEOUUyaEI1K3VNYgpZcitNU2pOUGhmYzR6Q2w2amdSWkFWVHBKbE' +
      '0wSmI4RERqcDNRUDZhK2VEK1I1SFYyNzhROVN0SUhnPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0t'
    }
  />
));

storiesOf('Wallet', module).add('Wallet', () => <Wallet />);

storiesOf('ReportSymptoms', module).add('ReportSymptoms', () => (
  <ReportSymptoms />
));

storiesOf('ContactTracingSwitch', module).add('ContactTracingSwitch', () => (
  <ContactTracingSwitch />
));
