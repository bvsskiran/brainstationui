'use client';

import { useState, useEffect } from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';

const getInitial = () => {
	if (typeof window === 'undefined') return 'system' as const;
	const stored = window.localStorage.getItem('theme-preference');
	if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
	return 'system' as const;
};

const applyTheme = (pref: 'light' | 'dark' | 'system') => {
	if (typeof document === 'undefined') return;
	const root = document.documentElement;
	const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	const useDark = pref === 'dark' || (pref === 'system' && systemDark);
	root.classList.toggle('dark', useDark);
	document.documentElement.style.colorScheme = useDark ? 'dark' : 'light';
};

const ToggleDarkMode = () => {
	const [mounted, setMounted] = useState<boolean>(false);
	const [preference, setPreference] = useState<'light' | 'dark' | 'system'>(getInitial());

	useEffect(() => {
		setMounted(true);
		applyTheme(preference);
		const media = window.matchMedia('(prefers-color-scheme: dark)');
		const onChange = () => preference === 'system' && applyTheme('system');
		media.addEventListener?.('change', onChange);
		return () => media.removeEventListener?.('change', onChange);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (!mounted) return;
		applyTheme(preference);
		window.localStorage.setItem('theme-preference', preference);
	}, [mounted, preference]);

	const resolved = (() => {
		if (typeof window === 'undefined') return 'light';
		if (preference === 'system') {
			return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
		}
		return preference;
	})();

	const handleOnClick = () => setPreference(resolved === 'dark' ? 'light' : 'dark');

	return (
		<button
			onClick={handleOnClick}
			className="inline-block rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
			aria-label="Toggle Dark Mode"
		>
			{mounted ? (
				resolved === 'dark' ? (
					<IconMoon className="h-5 w-5" />
				) : (
					<IconSun className="h-5 w-5" />
				)
			) : (
				<div className="h-5 w-5"></div>
			)}
		</button>
	);
};

export default ToggleDarkMode;
