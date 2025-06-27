import {
  type FilterOption,
  type Todos,
  type StringCompare,
  type DateCompare,
} from "@/types/todo.types";

const stringCompare: StringCompare = (direction) => (aSort, bSort) =>
  aSort.localeCompare(bSort) * direction;

const dateCompare: DateCompare = (direction) => (aSort, bSort) =>
  (new Date(aSort).getTime() - new Date(bSort).getTime()) * direction;

export const applyTodoFilters = (
  todos: Todos,
  filterOption: FilterOption
): Todos => {
  const searchTerm = filterOption.searchTerm?.toLowerCase().trim();
  const filterCategory = filterOption.category?.toLowerCase().trim();
  const filterStatus = filterOption.status;
  const filterSortBy = filterOption.sortBy;
  const filterSortDirection = filterOption.sortDirection;

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

  const direction = filterSortDirection === "asc" ? 1 : -1;
  const sortedTodos = filteredTodos.sort((aSort, bSort) => {
    switch (filterSortBy) {
      case "title": {
        return stringCompare(direction)(aSort.title, bSort.title);
      }
      case "category": {
        return stringCompare(direction)(aSort.category, bSort.category);
      }
      case "status": {
        return stringCompare(direction)(aSort.status, bSort.status);
      }
      case "created_at": {
        return dateCompare(direction)(aSort.created_at, bSort.created_at);
      }
      default:
        return 0;
    }
  });
  return sortedTodos;
};
