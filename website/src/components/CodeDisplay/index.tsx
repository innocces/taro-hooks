/**
 * @description due to sandpack limitations, we need to use a different way to import the code
 * @description this is the code that will be displayed in the code display component
 */
import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import CodeBlock from '@theme/CodeBlock';
import BrowserOnly from '@docusaurus/BrowserOnly';
import RefreshIcon from './Refresh';
import QrIcon from './Qr';
import ShareIcon from './Share';

import type { Props } from '@theme/CodeBlock';
import Qrcode from 'qrcode';

import styles from './index.module.scss';

export interface ICodeDisplayProps extends Props {
  openUrl: string;
  url: string;
  qrcodeUrl: string;
}

function CodeDisplay({
  children,
  url,
  openUrl,
  qrcodeUrl,
  ...props
}: ICodeDisplayProps) {
  return (
    <div className={cn('row shadow--md', styles.codeDisplay)}>
      <div className="col">
        <CodeBlock
          showLineNumbers
          className={styles.codeDisplayBlock}
          {...props}
        >
          {children}
        </CodeBlock>
      </div>
      <BrowserOnly>
        {() => {
          const iframeRef = useRef<HTMLIFrameElement>();
          const canvasRef = useRef<HTMLCanvasElement>();

          useEffect(() => {
            if (canvasRef.current) {
              Qrcode.toCanvas(canvasRef.current, url, console.log);
            }
          }, [canvasRef.current !== null]);

          const handleRefresh = () => {
            iframeRef.current?.contentWindow?.location?.reload();
          };

          return (
            <div className={styles.codeDisplayDevices}>
              <iframe
                title="taro-hooks-codeDisplay"
                ref={iframeRef}
                className={styles.codeDisplayFrame}
                src={url}
              />
              <div className={cn('row', styles.codeDisplayFrameAction)}>
                <a onClick={handleRefresh}>
                  <RefreshIcon />
                </a>
                <a className="dropdown dropdown--hoverable dropdown--right">
                  <QrIcon />
                  <div className="dropdown__menu">
                    <canvas
                      ref={canvasRef}
                      className={styles.codeDisplayFrameActionQR}
                      width="48"
                      height="48"
                    />
                  </div>
                </a>
                <a target="__blank" href={openUrl}>
                  <ShareIcon />
                </a>
              </div>
            </div>
          );
        }}
      </BrowserOnly>
    </div>
  );
}

export default CodeDisplay;
