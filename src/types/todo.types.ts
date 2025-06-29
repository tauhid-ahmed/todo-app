import { DefaultTodoCategory } from "@/utils/constants";

export type SortOption = "created_at" | "title" | "status" | "category";
export type SortDirection = "asc" | "desc";
export type TodoStatusOption = "completed" | "pending";
export type Categories = DefaultTodoCategory;

export type FilterOption = {
  searchTerm: string;
  sortBy: SortOption;
  sortDirection: SortDirection;
  category: Categories | "";
  status: TodoStatusOption | "";
};

export type Todo = {
  id: string;
  title: string;
  description: string;
  status: TodoStatusOption;
  category: DefaultTodoCategory;
  created_at: Date;
};

export type NewTodo = Pick<Todo, "title" | "description" | "category">;
export type Todos = Todo[];

export type StringCompare = (
  direction: -1 | 1
) => (aSort: string, bSort: string) => number;

export type DateCompare = (
  direction: -1 | 1
) => (aSort: Date, bSort: Date) => number;

export type TodoState =
  | {
      status: "fetching";
      filterOption: FilterOption;
      selectedTodosId: string[];
    }
  | {
      status: "idle";
      todos: Todo[];
      filteredTodos: Todo[];
      filterOption: FilterOption;
      selectedTodosId: string[];
    }
  | {
      status: "editing";
      todos: Todo[];
      filteredTodos: Todo[];
      filterOption: FilterOption;
      selectedTodosId: string[];
    }
  | {
      status: "deleting";
      todos: Todo[];
      filteredTodos: Todo[];
      filterOption: FilterOption;
      selectedTodosId: string[];
    }
  | {
      status: "creating";
      todos: Todo[];
      newTodo: Todo;
      filteredTodos: Todo[];
      filterOption: FilterOption;
      selectedTodosId: string[];
    }
  | {
      status: "error";
      message: string;
      todos: Todo[];
      filteredTodos: Todo[];
      filterOption: FilterOption;
      selectedTodosId: string[];
    };

export type TodoEvent =
  | {
      type: "FETCH_SUCCESS";
      payload: { todos: Todo[] };
    }
  | {
      type: "SORT_DIRECTION_CHANGE";
      payload: {
        sortDirection: SortDirection;
      };
    }
  | {
      type: "SEARCH_TERM_CHANGE";
      payload: {
        searchTerm: string;
      };
    }
  | {
      type: "EDIT_CLICKED";
      payload: {
        todoId: string;
      };
    }
  | {
      type: "DELETE_CLICKED";
      payload: {
        todoId: string;
      };
    }
  | {
      type: "DELETE_ALL";
    }
  | {
      type: "DELETE_CONFIRM";
    }
  | {
      type: "RESET_FORM";
    }
  | {
      type: "CREATE_TODO";
      payload: { newTodo: NewTodo };
    }
  | {
      type: "SELECT_TODO";
      payload: {
        todoId: string;
      };
    };
