import { useEffect, useRef, useState } from 'react';
import { A } from '../basic/A';
import { Button } from '../basic/Button';
import { Div } from '../basic/Div';
import { Header } from '../basic/Header';
import { Nav } from '../basic/Nav';
import { Span } from '../basic/Span';
import { getResolvedColorScheme, setColorScheme } from '../../colorScheme';

export interface GlitterNavItem { label: string; href: string; activePaths?: string[]; }
export interface GlitterHeaderProps {
  brandName?: string; navItems?: GlitterNavItem[]; loginLabel?: string; accountLabel?: string;
  logoutLabel?: string; adminLabel?: string; myPageLabel?: string; nickname?: string | null; name?: string | null;
  isAdmin?: boolean; authenticated?: boolean; menuLabel?: string; closeLabel?: string; loginHref?: string; myPageHref?: string;
  onLogout?: () => void; myPageActivePaths?: string[]; themeToggleDarkLabel?: string; themeToggleLightLabel?: string;
  className?: string; editorAttrs?: Record<string, unknown>; id?: string;
}

const currentPath = () => typeof window === 'undefined' ? '/' : window.location.pathname.replace(/\/$/, '') || '/';
const normalizedPath = (value: string) => value.replace(/\/$/, '') || '/';
const isCurrent = (href: string, path = currentPath(), activePaths: string[] = []) => {
  const targets = [href, ...activePaths];
  const current = normalizedPath(path);
  return targets.some(value => {
    const target = normalizedPath(value);
    return target === '/' ? current === '/' : current === target || current.startsWith(`${target}/`);
  });
};

export function GlitterHeader({ brandName = '', navItems = [], loginLabel = '', accountLabel = '', logoutLabel = '', adminLabel = '', myPageLabel = '', myPageActivePaths = [], nickname, name, isAdmin = false, authenticated = false, menuLabel = '', closeLabel = '', loginHref = '/login', myPageHref = '/mypage/profile', onLogout, themeToggleDarkLabel = '', themeToggleLightLabel = '', className = '', editorAttrs, id }: GlitterHeaderProps) {
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => getResolvedColorScheme() === 'dark');
  const [path, setPath] = useState(currentPath);
  const accountTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sync = () => { setPath(currentPath()); setOpen(false); setAccountOpen(false); };
    window.addEventListener('popstate', sync);
    const pushState = history.pushState;
    history.pushState = function (...args) { pushState.apply(this, args); sync(); };
    return () => { window.removeEventListener('popstate', sync); history.pushState = pushState; };
  }, []);

  useEffect(() => {
    const syncTheme = () => setIsDark(getResolvedColorScheme() === 'dark');
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const onStorage = (event: StorageEvent) => { if (event.key === 'g7_color_scheme') syncTheme(); };
    mediaQuery.addEventListener('change', syncTheme);
    window.addEventListener('storage', onStorage);
    return () => {
      mediaQuery.removeEventListener('change', syncTheme);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!(event.target instanceof Element) || !event.target.closest('.glitter-account-menu-wrapper')) setAccountOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); setAccountOpen(false); } };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const closeAccountMenu = (restoreFocus = false) => {
    setAccountOpen(false);
    if (restoreFocus) accountTriggerRef.current?.focus();
  };

  const active = (item: GlitterNavItem) => isCurrent(item.href, path, item.activePaths);
  const identity = nickname?.trim() || name?.trim() || accountLabel || loginLabel;
  const myPageIsActive = isCurrent(myPageHref, path, myPageActivePaths);
  const themeLabel = isDark ? themeToggleLightLabel : themeToggleDarkLabel;
  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    setColorScheme(next);
    setIsDark(next === 'dark');
  };
  return <Header id={id} className={`glitter-header-shell ${className}`} {...editorAttrs}>
    <Div className="glitter-container glitter-header-inner">
      <A href="/" className="glitter-brand" aria-label={brandName}>{brandName}</A>
      <Button type="button" className="glitter-menu-button" aria-expanded={open} aria-controls="glitter-mobile-navigation" aria-label={open ? closeLabel : menuLabel} onClick={() => setOpen(value => !value)}>
        <Span className="glitter-menu-button-label">{open ? closeLabel : menuLabel}</Span>
        <Span className="glitter-menu-icon" aria-hidden="true"><Span /><Span /></Span>
      </Button>
      <Div className="glitter-header-actions">
      <Button type="button" className={`glitter-theme-toggle ${isDark ? 'is-dark' : 'is-light'}`} aria-label={themeLabel} title={themeLabel} aria-pressed={isDark} onClick={toggleTheme}>
        <Span className={`glitter-theme-icon ${isDark ? 'is-dark' : 'is-light'}`} aria-hidden="true" />
      </Button>
      <Nav aria-label={menuLabel} className="glitter-desktop-navigation">
        {navItems.map(item => <A key={item.href} href={item.href} className={`glitter-nav-link ${active(item) ? 'is-active' : ''}`} aria-current={active(item) ? 'page' : undefined}>{item.label}</A>)}
        {authenticated ? <Div className="glitter-account-menu-wrapper">
          <Button ref={accountTriggerRef} type="button" className={`glitter-nav-link glitter-nav-account glitter-account-trigger ${myPageIsActive ? 'is-active' : ''}`} aria-haspopup="menu" aria-expanded={accountOpen} aria-controls="glitter-account-menu" onClick={() => setAccountOpen(value => !value)}>
            <Span className="glitter-account-identity">{identity}</Span><Span className="glitter-account-chevron" aria-hidden="true">⌄</Span>
          </Button>
          {accountOpen && <Div id="glitter-account-menu" className="glitter-account-menu" role="menu" aria-label={identity}>
            {isAdmin && <A href="/admin" className="glitter-account-menu-link" role="menuitem" onClick={() => closeAccountMenu()}>{adminLabel}</A>}
            <A href={myPageHref} className="glitter-account-menu-link" role="menuitem" aria-current={myPageIsActive ? 'page' : undefined} onClick={() => closeAccountMenu()}>{myPageLabel}</A>
            <Button type="button" className="glitter-account-menu-link glitter-account-menu-action" role="menuitem" onClick={() => { closeAccountMenu(); onLogout?.(); }}>{logoutLabel}</Button>
          </Div>}
        </Div> : <A href={loginHref} className={`glitter-nav-link glitter-nav-account ${isCurrent(loginHref, path) ? 'is-active' : ''}`} aria-current={isCurrent(loginHref, path) ? 'page' : undefined}>{loginLabel || accountLabel}</A>}
      </Nav>
      </Div>
      <Nav id="glitter-mobile-navigation" aria-label={menuLabel} className={`glitter-mobile-navigation ${open ? 'is-open' : ''}`}>
        {navItems.map(item => <A key={item.href} href={item.href} className={`glitter-mobile-link ${active(item) ? 'is-active' : ''}`} aria-current={active(item) ? 'page' : undefined}>{item.label}</A>)}
        {authenticated ? <>
          {isAdmin && <A href="/admin" className="glitter-mobile-link" onClick={() => setOpen(false)}>{adminLabel}</A>}
          <A href={myPageHref} className={`glitter-mobile-link ${myPageIsActive ? 'is-active' : ''}`} aria-current={myPageIsActive ? 'page' : undefined} onClick={() => setOpen(false)}>{myPageLabel}</A>
          <Button type="button" className="glitter-mobile-link glitter-mobile-action" onClick={() => { setOpen(false); onLogout?.(); }}>{logoutLabel}</Button>
        </> : <A href={loginHref} className={`glitter-mobile-link ${isCurrent(loginHref, path) ? 'is-active' : ''}`} aria-current={isCurrent(loginHref, path) ? 'page' : undefined}>{loginLabel || accountLabel}</A>}
      </Nav>
    </Div>
  </Header>;
}

GlitterHeader.displayName = 'GlitterHeader';
