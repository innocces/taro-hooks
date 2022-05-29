import React, { useState, useRef, useMemo, useEffect } from 'react';
import { LoadingOverlay, useSandpack } from '@codesandbox/sandpack-react';

export interface IPreviewProps {
  isExpanded: boolean;
}

export default function Preview({ isExpanded }: IPreviewProps) {
  const { sandpack, listen } = useSandpack();
  const [isReady, setIsReady] = useState<boolean>(false);
  const [iframeComputedHeight, setComputedHeight] = useState<number | null>(
    null,
  );

  let {
    registerBundler,
    unregisterBundler,
    loadingScreenRegisteredRef,
    status,
  } = sandpack;

  const clientId = useRef<string>(
    Math.floor(Math.random() * 100000).toString(),
  );
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  loadingScreenRegisteredRef.current = true;

  const iframeWrapperPosition = useMemo(() => {
    const hiddenContent = !isReady;
    return hiddenContent ? 'relative' : isExpanded ? 'sticky' : undefined;
  }, [isReady, isExpanded]);

  useEffect(() => {
    const iframeElement = iframeRef.current!;
    registerBundler(iframeElement, clientId.current);

    return () => {
      unregisterBundler(clientId.current);
    };
  }, []);

  useEffect(() => {
    const unsubscribe = listen((message: any) => {
      if (message.type === 'resize') {
        setComputedHeight(message.height);
      } else if (message.type === 'start') {
        if (message.firstLoad) {
          setIsReady(false);
        }
      } else if (message.type === 'done') {
        setIsReady(true);
      }
    }, clientId.current);

    return () => {
      setIsReady(false);
      setComputedHeight(null);
      unsubscribe();
    };
  }, [status === 'idle']);

  return (
    <div className="sp-stack" style={{ overflow: isReady ? 'auto' : 'hidden' }}>
      <div
        className="taro-hooks--sandpack__iframe"
        style={{
          padding: 'initial',
          position: iframeWrapperPosition,
        }}
      >
        <iframe
          ref={iframeRef}
          title="taro-hooks sandpack preview"
          style={{
            height: iframeComputedHeight || '100%',
            zIndex: isExpanded ? 'initial' : -1,
          }}
        />
      </div>
      <LoadingOverlay
        clientId={clientId.current}
        loading={!isReady && iframeComputedHeight === null}
      />
    </div>
  );
}
