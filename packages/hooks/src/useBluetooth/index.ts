import {
  stopBluetoothDevicesDiscovery,
  startBluetoothDevicesDiscovery,
  openBluetoothAdapter,
  makeBluetoothPair,
  isBluetoothDevicePaired,
  getConnectedBluetoothDevices,
  getBluetoothDevices,
  getBluetoothAdapterState,
  closeBluetoothAdapter,
  useTaroState,
  useTaroRef,
  useTaroEffect,
} from '@tarojs/taro';
import { isBoolean, isString } from '@taro-hooks/shared';
import usePromise from '../usePromise';
import type {
  PromiseAction,
  PromiseOptionalAction,
  PromiseWithoutOptionAction,
  ExcludeOption,
  ExcludeSuccess,
  WithUndefind,
} from '../type';

export type AdapterState = Taro.getBluetoothAdapterState.SuccessCallbackResult;

export type Adapter = ExcludeSuccess<AdapterState>;

export type AdapterMode = 'central' | 'peripheral';

export type ToggleAdapter = PromiseOptionalAction<
  boolean | AdapterMode,
  TaroGeneral.BluetoothError
>;

export type GetState = PromiseWithoutOptionAction<AdapterState>;

export type GetDevices =
  PromiseWithoutOptionAction<Taro.getBluetoothDevices.SuccessCallbackResult>;

export type GetConnected =
  PromiseWithoutOptionAction<Taro.getConnectedBluetoothDevices.SuccessCallbackResult>;

export type MakePair = PromiseAction<
  ExcludeOption<Taro.makeBluetoothPair.Option>
>;

export type IsPaired = PromiseAction<string>;

export type ToggleDiscovery = PromiseOptionalAction<
  ExcludeOption<Taro.startBluetoothDevicesDiscovery.Option>,
  TaroGeneral.BluetoothError
>;

export type Devices =
  Taro.getBluetoothDevices.SuccessCallbackResultBlueToothDevice[];

export type ConnectDevices =
  Taro.getConnectedBluetoothDevices.BluetoothDeviceInfo[];

function useBluetooth(): [
  {
    devices: Devices;
    connectedDevices: ConnectDevices;
    adapter: WithUndefind<Adapter>;
  },
  {
    toggleAdapter: ToggleAdapter;
    getState: GetState;
    getDevices: GetDevices;
    getConnected: GetConnected;
    makePair: MakePair;
    isPaired: IsPaired;
    toggleDiscovery: ToggleDiscovery;
  },
] {
  const adapter = useTaroRef<Adapter>();
  const [devices, setDevices] = useTaroState<Devices>([]);
  const [connectedDevices, setConnectedDevices] = useTaroState<ConnectDevices>(
    [],
  );

  const getState: GetState = usePromise<{}, AdapterState>(
    getBluetoothAdapterState,
  );

  const getDevices: GetDevices = usePromise<
    {},
    Taro.getBluetoothDevices.SuccessCallbackResult
  >(getBluetoothDevices);

  const getConnected: GetConnected = usePromise<
    {},
    Taro.getConnectedBluetoothDevices.SuccessCallbackResult
  >(getConnectedBluetoothDevices);

  const openAdapter = usePromise<
    { mode: AdapterMode },
    TaroGeneral.BluetoothError
  >(openBluetoothAdapter);
  const closeAdapter = usePromise<{}, TaroGeneral.BluetoothError>(
    closeBluetoothAdapter,
  );

  const toggleAdapter = (switchOrMode) => {
    if ((isBoolean(switchOrMode) && switchOrMode) || isString(switchOrMode)) {
      return openAdapter({
        mode: isString(switchOrMode)
          ? (switchOrMode as AdapterMode)
          : 'central',
      }).then((res) => {
        Promise.all([getState(), getDevices(), getConnected()]).then(
          ([stateResult, devicesResult, connectResult]) => {
            const { errMsg, ...state } = stateResult as AdapterState;
            adapter.current = state as AdapterState;
            const { devices } =
              devicesResult as Taro.getBluetoothDevices.SuccessCallbackResult;
            setDevices(devices);
            const { devices: connected } =
              connectResult as Taro.getConnectedBluetoothDevices.SuccessCallbackResult;
            setConnectedDevices(connected);
          },
        );
        return res;
      });
    }

    return closeAdapter();
  };

  useTaroEffect(() => {
    toggleAdapter(true);

    return () => {
      toggleAdapter(false);
    };
  }, []);

  const makePair: MakePair =
    usePromise<ExcludeOption<Taro.makeBluetoothPair.Option>>(makeBluetoothPair);

  const isPairedAsync = usePromise<
    ExcludeOption<Taro.isBluetoothDevicePaired.Option>
  >(isBluetoothDevicePaired);
  const isPaired: IsPaired = (deviceId) => {
    return isPairedAsync({ deviceId });
  };

  const startDiscovery = usePromise<
    ExcludeOption<Taro.startBluetoothDevicesDiscovery.Option>,
    TaroGeneral.BluetoothError
  >(startBluetoothDevicesDiscovery);
  const stopDiscovery = usePromise<{}, TaroGeneral.BluetoothError>(
    stopBluetoothDevicesDiscovery,
  );

  const toggleDiscovery: ToggleDiscovery = (option) => {
    return option ? startDiscovery(option) : stopDiscovery();
  };

  return [
    { devices, connectedDevices, adapter: adapter.current },
    {
      toggleAdapter,
      getState,
      getDevices,
      getConnected,
      makePair,
      isPaired,
      toggleDiscovery,
    },
  ];
}

export default useBluetooth;
