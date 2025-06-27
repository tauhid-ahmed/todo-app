import { DefaultTodoCategory } from "@/utils/constants";

type SortOption = "created_at" | "title" | "status";
type SortDirection = "asc" | "desc";
type TodoStatusOption = "completed" | "pending";
type Categories = DefaultTodoCategory | string;

export type FilterOption = {
  searchTerm: string;
  sortBy: SortOption;
  sortDirection: SortDirection;
  category: Categories;
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

export type TodoEvent =
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
      payload: NewTodo;
    }
  | {
      type: "SELECT_TODO";
      payload: {
        todoId: string;
      };
    };
