import React from 'react';
import clsx from 'clsx';
import styles from './index.module.scss';

export default function Intro(): JSX.Element {
  return (
    <section className={clsx('general-content', styles.intro)}>
      <div className={clsx(styles.introLeft)}>
        <h3 className="general-title">不限框架</h3>
        <p>
          同时支持<code>React</code>和<code>Vue</code>
        </p>
      </div>
    </section>
  );
}
