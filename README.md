# c-diary-rn

React Native Components for c-diary

## Installation

```sh
yarn add c-diary-rn
```

### dependencies

```sh
yarn add rn-nodeify
npx rn-nodeify --install constants,crypto,stream,vm --hack
```

## Usage

```js
import CDiaryRn from "c-diary-rn";

// ...

const deviceName = await CDiaryRn.getDeviceName();
```

## License

MIT
