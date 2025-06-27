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
  | {
      status: "fetching";
      filterOption: FilterOption;
      selectedTodosId: string[];
    }
  | {
      status: "idle";
      todos: Todo[];
      filterOption: FilterOption;
      selectedTodosId: string[];
    }
  | {
      status: "editing";
      todos: Todo[];
      todoId: string;
      filterOption: FilterOption;
      selectedTodosId: string[];
    }
  | {
      status: "deleting";
      todos: Todo[];
      todoId: string;
      filterOption: FilterOption;
      selectedTodosId: string[];
    }
  | {
      status: "creating";
      todos: Todo[];
      newTod: Todo;
      filterOption: FilterOption;
      selectedTodosId: string[];
    }
  | {
      status: "error";
      message: string;
      filterOption: FilterOption;
      selectedTodosId: string[];
    };

export type TodoEvent = {};
