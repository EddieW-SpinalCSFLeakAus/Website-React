import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="theme-switch"
      onClick={toggleTheme}
    >
      <span className="theme-switch__icon theme-switch__icon--sun" aria-hidden="true">
        ☀️
      </span>
      <span className="theme-switch__icon theme-switch__icon--moon" aria-hidden="true">
        🌙
      </span>
      <span className="theme-switch__thumb" aria-hidden="true" />
    </button>
  );
}
