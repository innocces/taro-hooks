import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './index.module.scss';

console.log(styles);
const chatURI = 'https://gitter.im/hooks/community/~embed';

export default function Chat() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <a
        className={clsx(styles.chat, open && styles.active)}
        onClick={() => setOpen(true)}
      >
        OPEN CHAT
      </a>
      <aside className={clsx(styles.chatFrame, open && styles.active)}>
        <div className={styles.chatFrameMenu}>
          <a
            className={styles.chatFrameMenuItem}
            href={chatURI}
            rel="noopener"
            target="_blank"
          ></a>
          <button
            className={styles.chatFrameMenuItem}
            onClick={() => setOpen(false)}
          ></button>
        </div>
        <iframe src={chatURI} />
      </aside>
    </>
  );
}
