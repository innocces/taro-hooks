import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Typed from 'typed.js';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Cases from '@site/src/components/Cases';
import Title from '@site/src/components/Title';
import Intro from '@site/src/components/Intro';
import Feature from '@site/src/components/Feature';
import Chat from '@site/src/components/Chat';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const el = React.useRef(null);
  const typedEl = React.useRef(null);
  React.useEffect(() => {
    typedEl.current = new Typed(el.current, {
      // strings: ['npm install^1000 <br> `installing components...` ^500<br> `Fetching from source...` ^500<br> `Fetching from source...` ^500<br> `Fetching from source...` ^500<br> `Fetching from source...`'],
      stringsElement: '#typed',
      typeSpeed: 50,
      backSpeed: 0,
      loop: true,
    });

    return () => {
      typedEl.current.destroy();
    };
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <h1 className="hero__title">{siteConfig.title}</h1>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro"
              >
                快速开始
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.terminal}>
              <div className={styles.typedContainer}>
                <span ref={el}></span>
              </div>
              {/* make sure hidden when css not loaded */}
              <div id="typed" style={{ display: 'none' }}>
                <p>
                  🤖 npm i taro-hooks^500 <br /> 🔍 Installing library...^500{' '}
                  <br /> 🚚 Fetching from source...^500 <br /> 🔨
                  Building...^500 <br /> ✨ Done in 3.25s.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Chat />
      <HomepageHeader />
      <main>
        <Intro />
        <Title cn="特性" en="features" />
        <Feature />
        <Title cn="应用案例" en="cases" />
        <Cases />
      </main>
    </Layout>
  );
}
