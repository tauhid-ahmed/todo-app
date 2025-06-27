type SortOption = "created_at" | "title" | "status";
type SortDirection = "asc" | "desc";
type TodoStatusOption = "completed" | "pending";

export type FilterOption = {
  searchTerm: string;
  sortBy: SortOption;
  sortDirection: SortDirection;
};

export type Todo = {
  id: string;
  title: string;
  description: string;
  state: TodoStatusOption;
  created_at: Date;
};

export type TodoState =
  | { status: "fetching"; filterOption: FilterOption }
  | { status: "idle"; todos: Todo[]; filterOption: FilterOption }
  | {
      status: "editing";
      todos: Todo[];
      todoId: string;
      filterOption: FilterOption;
    }
  | {
      status: "deleting";
      todos: Todo[];
      todoId: string;
      filterOption: FilterOption;
    }
  | {
      status: "creating";
      todos: Todo[];
      newTod: Todo;
      filterOption: FilterOption;
    }
  | { status: "error"; message: string; filterOption: FilterOption };

export type TodoEvent = {};
