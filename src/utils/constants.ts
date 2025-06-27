export const DEFAULT_TODO_CATEGORIES = [
  "Work",
  "Personal",
  "Home",
  "Study",
  "Fitness",
  "Finance",
  "Shopping",
] as const;

export type DefaultTodoCategory = (typeof DEFAULT_TODO_CATEGORIES)[number];
