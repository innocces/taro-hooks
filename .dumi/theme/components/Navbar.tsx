import { FC, MouseEvent, useEffect, useState } from 'react';
import React, { useContext } from 'react';
import { context, Link, NavLink } from 'dumi/theme';
import LocaleSelect from './LocaleSelect';
import './Navbar.less';
import taroHooksPackages from '../../../packages/hooks/package.json';
import amtPackages from '../../../ant-mobile-taro/package.json';
import SearchBar from './SearchBar';

interface INavbarProps {
  location: any;
  darkPrefix?: React.ReactNode;
  onMobileMenuClick: (ev: MouseEvent<HTMLButtonElement>) => void;
}

const Navbar: FC<INavbarProps> = ({
  onMobileMenuClick,
  location,
  darkPrefix,
}) => {
  const {
    base,
    config: { mode, title, logo },
    nav: navItems,
  } = useContext(context);
  const [version, setVersion] = useState<string>(taroHooksPackages.version);
  const [renderLogo, setLogo] = useState<string | boolean>(logo);
  const [renderTitle, setTitle] = useState<string>(title);

  useEffect(() => {
    const linkRef: HTMLLinkElement = document.head.querySelector(
      'link[rel="shortcut icon"]',
    );
    if (
      ['ant-mobile-taro', 'components', '/~demos/ui-'].some((v) =>
        location.pathname.includes(v),
      )
    ) {
      setVersion(amtPackages.version);
      setLogo('/image/ant-ico.png');
      setTitle('ANT-MOBILE-TARO');
      linkRef.href = '/image/ant-ico.png';
    } else {
      setVersion(taroHooksPackages.version);
      setLogo(logo);
      setTitle(title);
      linkRef.href = '/image/hook.png';
    }
  }, [location]);

  return (
    <div className="__dumi-default-navbar" data-mode={mode}>
      {/* menu toogle button (only for mobile) */}
      <button
        className="__dumi-default-navbar-toggle"
        onClick={onMobileMenuClick}
      />
      {/* logo & title */}
      <div>
        <Link
          className="__dumi-default-navbar-logo"
          style={{
            backgroundImage: logo ? `url('${renderLogo}')` : undefined,
            color: version === amtPackages.version ? '#080e29' : 'transparent',
          }}
          to={base}
          data-plaintext={logo === false || undefined}
        >
          {renderTitle}
        </Link>
        <div className="__dumi-default-navbar-version">{`v${version}`}</div>
      </div>
      <nav>
        <div className="nav-item">
          <SearchBar />
        </div>
        {navItems.map((nav) => {
          const child = Boolean(nav.children?.length) && (
            <ul>
              {nav.children.map(
                (item) =>
                  !!item.path && (
                    <li key={item.path}>
                      <NavLink to={item.path}>{item.title}</NavLink>
                    </li>
                  ),
              )}
            </ul>
          );

          return (
            <span key={nav.title || nav.path}>
              {nav.path ? (
                <NavLink to={nav.path} key={nav.path}>
                  {nav.title.toUpperCase()}
                </NavLink>
              ) : (
                nav.title.toUpperCase()
              )}
              {child}
            </span>
          );
        })}
        <div className="__dumi-default-navbar-tool">
          <LocaleSelect location={location} />
          {darkPrefix}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
