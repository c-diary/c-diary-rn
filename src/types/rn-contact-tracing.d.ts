declare module 'rn-contact-tracing' {
  function setConfig(config: object): any;
  function setPublicKeys(keys: string[]): any;
  function stopBLEScan(): any;
  function startBLEScan(): any;
  export = { setConfig, setPublicKeys, stopBLEScan, startBLEScan };
}
