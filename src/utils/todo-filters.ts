import { type FilterOption, type Todos } from "@/types/todo.types";

export const applyTodoFilters = (todos: Todos, filterOption: FilterOption) => {
  const searchTerm = filterOption.searchTerm?.toLowerCase().trim();
  const filterCategory = filterOption.category?.toLowerCase().trim();
  const filterStatus = filterOption.status;

  const filteredTodos = todos.filter((todo) => {
    const title = todo.title.toLowerCase();
    const description = todo.description.toLowerCase();
    const category = todo.category.toLowerCase();
    const status = todo.status;

    const matchesSearchTerm =
      !searchTerm ||
      title.includes(searchTerm) ||
      description.includes(searchTerm);
    const matchesCategory = !filterCategory || category === filterCategory;
    const matchesStatus = !filterStatus || status === filterStatus;

    return matchesCategory && matchesSearchTerm && matchesStatus;
  });
  return filteredTodos;
};
