import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

interface ITitleProps {
  /**
   * @description 中文名称
   * @type string
   * @default ''
   */
  cn: string;
  /**
   * @description 英文名称
   * @type string
   * @default ''
   */
  en: string;
}

export default function Title({ cn, en }: ITitleProps): JSX.Element {
  return (
    <div className={clsx('text--center', styles.title)}>
      <h3 className={styles.titleCn}>{cn}</h3>
      <p className={styles.titleEn}>{en}</p>
    </div>
  );
}
