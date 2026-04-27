export type Theme = "light" | "dark";
export const getInitialTheme = (): Theme => (localStorage.getItem("theme") as Theme) || "light";
