/**
 * @description make common constant of examples
 */

export type MenuItem = {
  name: string;
  path: string;
};

export type CollapseItem = {
  groupName: string;
  menu: MenuItem[];
};

// hooks demo menu
const DEMOHOOKS = [
  'useContext',
  'useEffect',
  'useReducer',
  'useRef',
  'useState',
] as const;
export const HOOKSMENU: MenuItem[] = DEMOHOOKS.map((hooksName) => ({
  name: hooksName.replace('use', 'useTaro'),
  path: `/pages/${hooksName}/index`,
}));

// network
const NETWORKHOOKS = ['useFile', 'useNetworkType', 'useOnline', 'useRequest'];

const MENU: CollapseItem[] = [
  {
    groupName: '网络',
    menu: generateMenuItem(NETWORKHOOKS),
  },
];

export function generateMenuItem(hooks: string[]): MenuItem[] {
  return hooks.map((hooksName) => ({
    name: hooksName,
    path: `/pages/${hooksName}/index`,
  }));
}

/**
 * generate menu of examples project index menu
 * @param {boolean} vue vue project?
 * @return {MenuItem[]}
 */
export function generateIndexMenu(vue?: boolean): CollapseItem[] {
  if (vue) return [{ groupName: 'CompositionAPI', menu: HOOKSMENU }, ...MENU];

  return MENU;
}
