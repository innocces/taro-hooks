import React, {
  useEffect,
  useCallback,
  useState,
  useMemo,
  useRef,
} from 'react';
import swiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper/types';
import clsx from 'clsx';
import { getUserCases, ICasesItem } from '@site/src/services/repo';
import styles from './index.module.scss';
import 'swiper/css';
import 'swiper/css/virtual';

swiperCore.use([Autoplay]);

export default function Cases(): JSX.Element {
  const swiperRef = useRef<SwiperClass>();
  const [cases, setCases] = useState<Record<string, ICasesItem>>({});
  const [currentCases, setCurrentCases] = useState<ICasesItem>();

  const showCases = useMemo(() => {
    return !!Object.keys(cases).length;
  }, [cases]);

  useEffect(() => {
    fetchUserCases();
  }, []);

  useEffect(() => {
    if (showCases) {
      setCurrentCases(Object.values(cases)[0]);
    }
  }, [cases, showCases]);

  const fetchUserCases = useCallback(async () => {
    const repoCases = await getUserCases();
    setCases(repoCases);
  }, []);

  const handleSlide = useCallback(
    (prev?: boolean) => {
      const current = swiperRef.current.realIndex;
      const length = Object.values(cases).length;
      let next = current + 1 === length ? 0 : current + 1;
      if (prev) {
        next = current - 1 === -1 ? length - 1 : current - 1;
      }
      console.log(next);
      swiperRef.current.slideToLoop(next);
    },
    [cases],
  );

  return (
    <div
      className={clsx(
        'row',
        'row--align-center',
        'general-content',
        styles.cases,
      )}
    >
      <div className={clsx('col', 'col--4', styles.casesLeft)}>
        {currentCases && (
          <div className={styles.casesLeftInner}>
            <h2>{currentCases.name}</h2>
            <p>{currentCases.description}</p>
            <div
              className={clsx(
                'iconfont icon-miniprogram',
                styles.casesLeftInnerQr,
              )}
            >
              <img src={currentCases.url} alt={currentCases.name} />
            </div>
            <button
              onClick={() => handleSlide(true)}
              className={styles.casesButton}
            >
              prev
            </button>
            <button
              onClick={() => handleSlide()}
              className={clsx(styles.casesButton, styles.casesButtonRight)}
            >
              next
            </button>
          </div>
        )}
      </div>
      <div className={styles.casesFrame} />
      {showCases && (
        <div className={styles.casesRight}>
          <Swiper
            loop
            // autoplay
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) =>
              setCurrentCases(Object.values(cases)[swiper.realIndex])
            }
          >
            {Object.values(cases).map(
              ({ name, screenshot, description }, index) => (
                <SwiperSlide
                  className={styles.casesSwiperItem}
                  key={name}
                  virtualIndex={index}
                >
                  {({ isActive }) => (
                    <img
                      className={clsx({ [styles.active]: isActive })}
                      src={screenshot}
                      alt={description}
                    />
                  )}
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </div>
      )}
    </div>
  );
}
