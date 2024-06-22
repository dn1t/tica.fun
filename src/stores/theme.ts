import { persistentAtom } from '@nanostores/persistent';

export type Theme = 'light' | 'dark' | 'system';
export const themeStore = persistentAtom<Theme>('theme', 'system');

const applyTheme = (theme: Exclude<Theme, 'system'>) =>
  (document.documentElement.dataset.theme = theme);

const onChange = ({ matches }: MediaQueryList | MediaQueryListEvent) =>
  applyTheme(matches ? 'dark' : 'light');

export const init = () => {
  themeStore.subscribe((theme) => {
    if (theme !== 'system') return void applyTheme(theme);

    const mediaQuery = matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.removeEventListener('change', onChange);
    mediaQuery.addEventListener('change', onChange);
    onChange(mediaQuery);
  });
};
