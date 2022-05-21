import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.scss';

const FEATURETITLES = ['框架周边', '框架特性'];

interface IFeatureItem {
  name: string;
  path?: string;
  tag?: string;
  icon?: string;
  description: string[];
}

export default function Feature(): JSX.Element {
  const {
    siteConfig: {
      customFields: { features = [] },
    },
  } = useDocusaurusContext();

  return (
    <section className={styles.feature}>
      {(features as IFeatureItem[][]).map((item, index) => (
        <div
          className={clsx('general-content', styles.featureWrapper)}
          key={index}
        >
          <h3 className={clsx('general-title', styles.featureTitle)}>
            {FEATURETITLES[index]}
          </h3>
          <ul className="clearfix">
            {item.map(
              ({ name, tag, description, path, icon }: IFeatureItem) => (
                <li className="text--center" key={name}>
                  <img src={icon} alt={name} />
                  <h4>{name}</h4>
                  {description.map((desc) => (
                    <p key={desc}>{desc}</p>
                  ))}
                  <div className={styles.featureMask}>
                    {tag ? (
                      <code>{tag}</code>
                    ) : (
                      <Link
                        className={clsx(
                          'button button--active button--sm',
                          styles.featureButton,
                        )}
                        to={path}
                      >
                        去看看
                      </Link>
                    )}
                  </div>
                </li>
              ),
            )}
          </ul>
        </div>
      ))}
    </section>
  );
}
