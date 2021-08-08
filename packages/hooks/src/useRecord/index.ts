import {
  General,
  ENV_TYPE,
  getRecorderManager,
  RecorderManager,
} from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import useEnv from '../useEnv';

export type IRecorderManager = RecorderManager | undefined;

export type RecordStatus =
  | 'error'
  | undefined
  | 'start'
  | 'stop'
  | 'pause'
  | 'frameRecorder'
  | 'interruptionBegin'
  | 'interruptionEnd'
  | 'resume';

export type IOnErrorAction = (
  callback: RecorderManager.OnErrorCallback,
) => void;

export type IOnFrameRecorded = (
  callback: RecorderManager.OnFrameRecordedCallback,
) => void;

export type IOnStopAction = (callback: RecorderManager.OnStopCallback) => void;

export type INormalAction = (callback: General.EventCallback) => void;

export type IStartRecordAction = (
  option: RecorderManager.StartOption,
) => Promise<General.CallbackResult>;

export type INormalPromiseAction = () => Promise<General.CallbackResult>;

export interface IAction {
  onError: IOnErrorAction;
  onFrameRecorded: IOnFrameRecorded;
  onInterruptionBegin: INormalAction;
  onInterruptionEnd: INormalAction;
  onPause: INormalAction;
  onResume: INormalAction;
  onStart: INormalAction;
  onStop: IOnStopAction;
  startRecord: IStartRecordAction;
  stopRecord: INormalPromiseAction;
  pauseRecord: INormalPromiseAction;
  resumeRecord: INormalPromiseAction;
}

const noop = () => {};

function useRecord(): [IRecorderManager, RecordStatus, IAction] {
  const [recorderManager, setRecorderManager] = useState<IRecorderManager>();
  const [recorderManagerStatus, changeRecorderManagerStatus] =
    useState<RecordStatus>();
  const env = useEnv();

  useEffect(() => {
    if (env) {
      create();
    }
  }, [env]);

  useEffect(() => {
    if (recorderManager) {
      onError(noop);
      onFrameRecorded(noop);
      onInterruptionBegin(noop);
      onInterruptionEnd(noop);
      onPause(noop);
      onResume(noop);
      onStart(noop);
      onStop(noop);
    }
  }, [recorderManager]);

  const create = useCallback(() => {
    if (env !== ENV_TYPE.WEB) {
      const context = getRecorderManager();
      setRecorderManager(context);
    }
  }, [env]);

  const onError = useCallback<IOnErrorAction>(
    (callback) => {
      if (recorderManager) {
        recorderManager.onError((res) => {
          changeRecorderManagerStatus('error');
          callback && callback(res);
        });
      }
    },
    [recorderManager],
  );

  const onFrameRecorded = useCallback<IOnFrameRecorded>(
    (callback) => {
      if (recorderManager) {
        recorderManager.onFrameRecorded((res) => {
          changeRecorderManagerStatus('frameRecorder');
          callback && callback(res);
        });
      }
    },
    [recorderManager],
  );

  const onInterruptionBegin = useCallback<INormalAction>(
    (callback) => {
      if (recorderManager) {
        recorderManager.onInterruptionBegin((res) => {
          changeRecorderManagerStatus('interruptionBegin');
          callback && callback(res);
        });
      }
    },
    [recorderManager],
  );

  const onInterruptionEnd = useCallback<INormalAction>(
    (callback) => {
      if (recorderManager) {
        recorderManager.onInterruptionEnd((res) => {
          changeRecorderManagerStatus('interruptionEnd');
          callback && callback(res);
        });
      }
    },
    [recorderManager],
  );

  const onPause = useCallback<INormalAction>(
    (callback) => {
      if (recorderManager) {
        recorderManager.onPause((res) => {
          changeRecorderManagerStatus('pause');
          callback && callback(res);
        });
      }
    },
    [recorderManager],
  );

  const onResume = useCallback<INormalAction>(
    (callback) => {
      if (recorderManager) {
        recorderManager.onResume((res) => {
          changeRecorderManagerStatus('resume');
          callback && callback(res);
        });
      }
    },
    [recorderManager],
  );

  const onStart = useCallback<INormalAction>(
    (callback) => {
      if (recorderManager) {
        recorderManager.onStart((res) => {
          changeRecorderManagerStatus('start');
          callback && callback(res);
        });
      }
    },
    [recorderManager],
  );

  const onStop = useCallback<IOnStopAction>(
    (callback) => {
      if (recorderManager) {
        recorderManager.onStop((res) => {
          changeRecorderManagerStatus('stop');
          callback && callback(res);
        });
      }
    },
    [recorderManager],
  );

  const startRecord = useCallback<IStartRecordAction>(
    (option = {}) => {
      return new Promise((resolve, reject) => {
        if (env !== ENV_TYPE.WEB && recorderManager) {
          try {
            recorderManager.start(option);
          } catch (e) {
            reject(e);
          }
          resolve({ errMsg: 'startRecord: ok' });
        }
      });
    },
    [env, recorderManager],
  );

  const stopRecord = useCallback<INormalPromiseAction>(() => {
    return new Promise((resolve, reject) => {
      if (env !== ENV_TYPE.WEB && recorderManager) {
        try {
          recorderManager.stop();
        } catch (e) {
          reject({ errMsg: e });
        }
        resolve({ errMsg: 'stopRecord: ok' });
      }
    });
  }, [env, recorderManager]);

  const pauseRecord = useCallback<INormalPromiseAction>(() => {
    return new Promise((resolve, reject) => {
      if (env !== ENV_TYPE.WEB && recorderManager) {
        try {
          recorderManager.pause();
        } catch (e) {
          reject({ errMsg: e });
        }
        resolve({ errMsg: 'pauseRecord: ok' });
      }
    });
  }, [env, recorderManager]);

  const resumeRecord = useCallback<INormalPromiseAction>(() => {
    return new Promise((resolve, reject) => {
      if (env !== ENV_TYPE.WEB && recorderManager) {
        try {
          recorderManager.resume();
        } catch (e) {
          reject({ errMsg: e });
        }
        resolve({ errMsg: 'resumeRecord: ok' });
      }
    });
  }, [env, recorderManager]);

  return [
    recorderManager,
    recorderManagerStatus,
    {
      onError,
      onFrameRecorded,
      onInterruptionBegin,
      onInterruptionEnd,
      onPause,
      onResume,
      onStart,
      onStop,
      startRecord,
      stopRecord,
      pauseRecord,
      resumeRecord,
    },
  ];
}

export default useRecord;
