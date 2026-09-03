import { ref } from 'vue';

const STORAGE_KEY = 'portfolio-theme';
const isBrowser = typeof document !== 'undefined';

const theme = ref(isBrowser && document.documentElement.classList.contains('light') ? 'light' : 'dark');

function applyTheme(value) {
    if (!isBrowser) {
        theme.value = value;
        return;
    }

    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(value);
    localStorage.setItem(STORAGE_KEY, value);
    theme.value = value;
}

export function useTheme() {
    function setTheme(value) {
        applyTheme(value);
    }

    function toggleTheme() {
        applyTheme(theme.value === 'dark' ? 'light' : 'dark');
    }

    return { theme, setTheme, toggleTheme };
}
