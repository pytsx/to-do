// src/app.tsx
import React26 from "react";
import clsx6 from "clsx";

// src/const.tsx
import {
  Sun,
  Star,
  BookDashed,
  PersonStanding,
  Home,
  Circle,
  List
} from "lucide-react";
var icons = {
  sun: Sun,
  star: Star,
  dashboard: BookDashed,
  person: PersonStanding,
  home: Home,
  list: List,
  task: Circle
};

// src/components/ui/iconify.tsx
import React2 from "react";
var Iconify = React2.forwardRef(({ iconName, ...props }, ref) => {
  const Icon = icons[iconName];
  return /* @__PURE__ */ React2.createElement(Icon, { ref, ...props });
});
Iconify.displayName = "Iconify";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/provider/global.tsx
import React4 from "react";

// src/provider/theme.tsx
import * as React3 from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
function ThemeProvider({ children, ...props }) {
  return /* @__PURE__ */ React3.createElement(NextThemesProvider, { ...props }, children);
}

// src/reducer/global.snippets.ts
function addList(state, action) {
  if (action.type !== "ADD_ELEMENT")
    throw new Error();
  return {
    ...state,
    lists: [
      ...state.lists,
      action.payload.element
    ]
  };
}
function addTask(state, action) {
  var _a;
  if (action.type !== "ADD_ELEMENT")
    throw new Error();
  if ((_a = action.payload) == null ? void 0 : _a.map.list)
    return {
      ...state,
      lists: state.lists.map((list) => {
        if (list.id === action.payload.map.list) {
          return {
            ...list,
            tasks: [...list.tasks, action.payload.element]
          };
        }
        return list;
      })
    };
  else
    return state;
}
function addStep(state, action) {
  var _a;
  if (action.type !== "ADD_ELEMENT")
    throw new Error();
  if ((_a = action.payload) == null ? void 0 : _a.map.list)
    return {
      ...state,
      lists: state.lists.map((list) => {
        if (list.id === action.payload.map.list) {
          return {
            ...list,
            tasks: list.tasks.map((task) => {
              if (task.id === action.payload.map.task) {
                return {
                  ...task,
                  steps: [...task.steps, action.payload.element]
                };
              }
              return task;
            })
          };
        }
        return list;
      })
    };
  else
    return state;
}
function addElement(state, action) {
  if (action.type !== "ADD_ELEMENT")
    throw new Error();
  switch (action.payload.type) {
    case "list":
      return addList(state, action);
    case "task":
      return addTask(state, action);
    case "step":
      return addStep(state, action);
    default:
      return state;
  }
}
function updateList(state, action) {
  if (action.type !== "UPDATE_ELEMENT")
    throw new Error();
  return {
    ...state,
    lists: state.lists.map((list) => {
      if (list.id === action.payload.map.list) {
        return {
          ...list,
          ...action.payload.element
        };
      }
      return list;
    })
  };
}
function updateTask(state, action) {
  var _a;
  if (action.type !== "UPDATE_ELEMENT")
    throw new Error();
  if ((_a = action.payload) == null ? void 0 : _a.map.list)
    return {
      ...state,
      lists: state.lists.map((list) => {
        if (list.id === action.payload.map.list) {
          return {
            ...list,
            tasks: list.tasks.map((task) => {
              if (task.id === action.payload.map.task) {
                return {
                  ...task,
                  ...action.payload.element
                };
              }
              return task;
            })
          };
        }
        return list;
      })
    };
  else
    return state;
}
function updateStep(state, action) {
  var _a;
  if (action.type !== "UPDATE_ELEMENT")
    throw new Error();
  if ((_a = action.payload) == null ? void 0 : _a.map.list)
    return {
      ...state,
      lists: state.lists.map((list) => {
        if (list.id === action.payload.map.list) {
          return {
            ...list,
            tasks: list.tasks.map((task) => {
              if (task.id === action.payload.map.task) {
                return {
                  ...task,
                  steps: task.steps.map((step) => {
                    if (step.id === action.payload.map.step) {
                      return {
                        ...step,
                        ...action.payload.element
                      };
                    }
                    return step;
                  })
                };
              }
              return task;
            })
          };
        }
        return list;
      })
    };
  else
    return state;
}
function updateElement(state, action) {
  if (action.type !== "UPDATE_ELEMENT")
    throw new Error();
  switch (action.payload.type) {
    case "list":
      return updateList(state, action);
    case "task":
      return updateTask(state, action);
    case "step":
      return updateStep(state, action);
    default:
      return state;
  }
}
function deletelist(state, action) {
  if (action.type !== "DELETE_ELEMENT")
    throw new Error();
  return {
    ...state,
    lists: state.lists.filter((list) => list.id !== action.payload.map.list)
  };
}
function deleteTask(state, action) {
  var _a;
  if (action.type !== "DELETE_ELEMENT")
    throw new Error();
  if (((_a = action.payload) == null ? void 0 : _a.map.task) && action.payload.map.list)
    return {
      ...state,
      lists: state.lists.map((list) => {
        if (list.id === action.payload.map.list) {
          return {
            ...list,
            tasks: list.tasks.filter((task) => task.id !== action.payload.map.task)
          };
        }
        return list;
      })
    };
  else
    return state;
}
function deleteStep(state, action) {
  var _a;
  if (action.type !== "DELETE_ELEMENT")
    throw new Error();
  if (((_a = action.payload) == null ? void 0 : _a.map.task) && action.payload.map.list)
    return {
      ...state,
      lists: state.lists.map((list) => {
        if (list.id === action.payload.map.list) {
          return {
            ...list,
            tasks: list.tasks.map((task) => {
              if (task.id == action.payload.map.task) {
                return {
                  ...task,
                  steps: task.steps.filter((step) => step.id !== action.payload.map.step)
                };
              }
              return task;
            })
          };
        }
        return list;
      })
    };
  else
    return state;
}
function deleteElement(state, action) {
  if (action.type !== "DELETE_ELEMENT")
    throw new Error();
  switch (action.payload.type) {
    case "list":
      return deletelist(state, action);
    case "task":
      return deleteTask(state, action);
    case "step":
      return deleteStep(state, action);
    default:
      return state;
  }
}

// src/reducer/global.ts
function globalReducer(state, action) {
  switch (action.type) {
    case "ADD_ELEMENT":
      return addElement(state, action);
    case "UPDATE_ELEMENT":
      return updateElement(state, action);
    case "DELETE_ELEMENT":
      return deleteElement(state, action);
    case "SELECT_ELEMENT":
      return {
        ...state,
        ...action.payload.type == "list" && {
          selectedList: action.payload.elementId,
          selectedTask: void 0
        },
        ...action.payload.type == "task" && action.payload.parentId && {
          selectedList: action.payload.parentId,
          selectedTask: action.payload.elementId
        }
      };
    case "DESELECT_ELEMENT":
      return {
        ...state,
        ...action.payload.type == "list" && {
          selectedList: void 0,
          selectedTask: void 0
        },
        ...action.payload.type == "task" && {
          selectedTask: void 0
        }
      };
    case "TOOGLE_SIDEBARS":
      return {
        ...state,
        openSidebars: {
          ...state.openSidebars,
          ...action.payload.type == "task" && {
            task: !state.openSidebars.task
          },
          ...action.payload.type == "list" && {
            list: !state.openSidebars.list
          }
        }
      };
    default:
      return state;
  }
}

// src/provider/global.tsx
import { SessionProvider } from "next-auth/react";
import { v4 } from "uuid";
var globalInitialState = {
  lists: [
    {
      id: v4(),
      name: "meu dia",
      tasks: [],
      metadata: {
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date(),
        tags: [],
        icon: "sun",
        color: "#a0cbf1",
        author: "system"
      }
    },
    {
      id: v4(),
      name: "importante",
      tasks: [],
      metadata: {
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date(),
        tags: [],
        icon: "star",
        color: "#f5b6c2",
        author: "system"
      }
    },
    {
      id: v4(),
      name: "planejado",
      tasks: [],
      metadata: {
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date(),
        tags: [],
        icon: "dashboard",
        color: "#8bd3ce",
        author: "system"
      }
    },
    {
      id: v4(),
      name: "atribuido a mim",
      tasks: [],
      metadata: {
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date(),
        tags: [],
        icon: "person",
        color: "#9ad2ba",
        author: "system"
      }
    },
    {
      id: v4(),
      name: "tarefas",
      tasks: [],
      metadata: {
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date(),
        tags: [],
        icon: "home",
        color: "#788cde",
        author: "system"
      }
    }
  ],
  openSidebars: {
    task: false,
    list: true
  }
};
var Context = React4.createContext({
  globalDispatch() {
  },
  globalState: globalInitialState
});
var GlobalProvider = React4.forwardRef(({ children }, ref) => {
  const [globalState, globalDispatch] = React4.useReducer(globalReducer, globalInitialState);
  return /* @__PURE__ */ React4.createElement(SessionProvider, null, /* @__PURE__ */ React4.createElement(
    ThemeProvider,
    {
      attribute: "class",
      defaultTheme: "system",
      enableSystem: true,
      disableTransitionOnChange: true
    },
    /* @__PURE__ */ React4.createElement(Context.Provider, { value: { globalState, globalDispatch } }, children)
  ));
});
GlobalProvider.displayName = "GlobalProvider";
var useGlobal = () => {
  const context = React4.useContext(Context);
  if (!context)
    throw new Error("useGlobal must be inside GlobalProvider");
  return context;
};

// src/components/global/list/list.content.tsx
import clsx2 from "clsx";
import React5 from "react";
var ListItem = React5.forwardRef(
  ({ className, active, ...props }, ref) => {
    return /* @__PURE__ */ React5.createElement(
      "div",
      {
        ref,
        className: clsx2(
          "relative w-full flex items-center gap-4 p-2 hover:bg-neutral-300/10 cursor-pointer  text-sm rounded-sm select-none",
          className,
          active && "bg-neutral-300/20 hover:bg-neutral-300/20"
        ),
        ...props
      },
      props.children,
      /* @__PURE__ */ React5.createElement("span", { className: clsx2(
        "absolute opacity-0 -left-1 rounded-l-sm w-1 h-5/6 bg-blue-300",
        active && "!opacity-100"
      ) })
    );
  }
);
var ListContent = React5.forwardRef(({ author }, ref) => {
  const { globalState, globalDispatch } = useGlobal();
  function selectList(listId) {
    globalDispatch({
      type: "SELECT_ELEMENT",
      payload: {
        type: "list",
        elementId: listId
      }
    });
  }
  return /* @__PURE__ */ React5.createElement("section", { className: " w-full flex flex-col gap-1" }, globalState.lists.filter((el) => el.metadata.author === author).map((list) => {
    var _a;
    return /* @__PURE__ */ React5.createElement(
      ListItem,
      {
        active: globalState.selectedList === list.id,
        key: list.id,
        onClick: () => selectList(list.id),
        className: cn(
          globalState.selectedList === list.id
        )
      },
      /* @__PURE__ */ React5.createElement("span", { className: "w-10 flex justify-center " }, ((_a = list.metadata) == null ? void 0 : _a.icon) && /* @__PURE__ */ React5.createElement(
        Iconify,
        {
          iconName: list.metadata.icon,
          className: "w-5 h-5 opacity-80 ",
          style: { color: list.metadata.color }
        }
      )),
      /* @__PURE__ */ React5.createElement("div", { className: "w-full flex justify-between" }, /* @__PURE__ */ React5.createElement("p", { className: "first-letter:capitalize text-sm" }, list.name), /* @__PURE__ */ React5.createElement("p", null, list.tasks.length > 0 && list.tasks.length))
    );
  }));
});
ListItem.displayName = "ListItem";
ListContent.displayName = "ListContent";

// src/components/global/list/list.tsx
import React6 from "react";
var List2 = React6.forwardRef((props, ref) => {
  return /* @__PURE__ */ React6.createElement(ListContent, { ...props });
});

// src/components/global/list/sidebar.tsx
import React20 from "react";

// src/components/ui/appbar.tsx
import React7 from "react";
import { cva } from "class-variance-authority";
var appbarVariant = cva(
  "h-full flex items-center",
  {
    variants: {
      variant: {
        default: "",
        outline: "border-b border-r"
      },
      size: {
        none: "p-0",
        sm: "px-2 py-1",
        md: "px-3 py-2",
        lg: "px-4 py-3",
        xl: "px-6 py-4"
      },
      orientation: {
        vertical: "!h-screen !w-fit !items-start !justify-start flex-col",
        horizontal: "!w-screen !h-fit"
      },
      defaultVariants: {
        variant: "default",
        size: "md"
      }
    }
  }
);
var Appbar = React7.forwardRef(
  ({ variant = "default", size = "none", orientation = "horizontal", className, ...props }, ref) => /* @__PURE__ */ React7.createElement(
    "nav",
    {
      ref,
      ...props,
      className: cn(appbarVariant({ variant, size, className, orientation }))
    }
  )
);
Appbar.displayName = "Appbar";

// src/components/ui/toolbar.tsx
import React9 from "react";

// src/components/ui/stack.tsx
import { cva as cva2 } from "class-variance-authority";
import React8 from "react";
var stackVariants = cva2(
  "flex",
  {
    variants: {
      variant: {
        default: "flex select-none"
      },
      direction: {
        row: "!flex-row",
        col: "!flex-col"
      },
      items: {
        center: "items-center",
        start: "items-start",
        end: "items-end"
      },
      justify: {
        between: "justify-between",
        center: "justify-center",
        start: "justify-start"
      },
      defaultVariants: {
        variant: "default",
        direction: "row"
      }
    }
  }
);
var Stack = React8.forwardRef(
  ({ className, items = "start", justify = "start", variant = "default", direction = "row", children, ...props }, ref) => /* @__PURE__ */ React8.createElement(
    "div",
    {
      ref,
      ...props,
      className: cn(
        stackVariants({ direction, variant, items, justify, className })
      )
    },
    React8.Children.toArray(children).map((child) => child)
  )
);
Stack.displayName = "Stack";

// src/components/ui/toolbar.tsx
var Toolbar = React9.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ React9.createElement(
    Stack,
    {
      ref,
      ...props,
      className: cn(
        "gap-1 w-full h-fit items-center justify-between p-2",
        className
      )
    }
  )
);
Toolbar.displayName = "Toolbar";

// src/components/ui/button.tsx
import * as React10 from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva as cva3 } from "class-variance-authority";
var buttonVariants = cva3(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default: "bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
        destructive: "bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
        outline: "border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        secondary: "bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        ghost: "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-sm px-3 text-xs",
        lg: "h-10 rounded-sm px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React10.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ React10.createElement(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/ui/dropdown-menu.tsx
import * as React11 from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon
} from "@radix-ui/react-icons";
var DropdownMenu = DropdownMenuPrimitive.Root;
var DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
var DropdownMenuSubTrigger = React11.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ React11.createElement(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-neutral-100 data-[state=open]:bg-neutral-100 dark:focus:bg-neutral-800 dark:data-[state=open]:bg-neutral-800",
      inset && "pl-8",
      className
    ),
    ...props
  },
  children,
  /* @__PURE__ */ React11.createElement(ChevronRightIcon, { className: "ml-auto h-4 w-4" })
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
var DropdownMenuSubContent = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React11.createElement(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-sm border border-neutral-200 bg-white p-1 text-neutral-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
var DropdownMenuContent = React11.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ React11.createElement(DropdownMenuPrimitive.Portal, null, /* @__PURE__ */ React11.createElement(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-sm border border-neutral-200 bg-white p-1 text-neutral-950 shadow-md dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
)));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
var DropdownMenuItem = React11.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ React11.createElement(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
var DropdownMenuCheckboxItem = React11.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ React11.createElement(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
      className
    ),
    checked,
    ...props
  },
  /* @__PURE__ */ React11.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React11.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React11.createElement(CheckIcon, { className: "h-4 w-4" }))),
  children
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
var DropdownMenuRadioItem = React11.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React11.createElement(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-neutral-100 focus:text-neutral-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-neutral-800 dark:focus:text-neutral-50",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React11.createElement("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ React11.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React11.createElement(DotFilledIcon, { className: "h-4 w-4 fill-current" }))),
  children
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
var DropdownMenuLabel = React11.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ React11.createElement(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
var DropdownMenuSeparator = React11.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React11.createElement(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-neutral-100 dark:bg-neutral-800", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
var DropdownMenuShortcut = ({
  className,
  ...props
}) => {
  return /* @__PURE__ */ React11.createElement(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest opacity-60", className),
      ...props
    }
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

// src/components/ui/sonner.tsx
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

// src/components/ui/input.tsx
import clsx3 from "clsx";
import { Circle as Circle2, Plus } from "lucide-react";
import React12 from "react";
var Input = React12.forwardRef(({ color, callback, variant, ...props }, ref) => {
  const [value, setValue] = React12.useState("");
  const [active, setActive] = React12.useState(false);
  function handleInputChange(e) {
    const newValue = e.target.value;
    if (newValue == void 0)
      return null;
    setValue(newValue);
  }
  function handleEnterPress(e) {
    if (e.code !== "Enter" && e.code !== "NumpadEnter")
      return null;
    callback(value);
    setValue("");
  }
  return /* @__PURE__ */ React12.createElement(
    "div",
    {
      className: clsx3(
        "w-full h-full flex  bg-neutral-900 rounded-sm cursor-text hover:bg-neutral-800 active:bg-neutral-800",
        variant == "ghost" && "bg-transparent"
      ),
      style: {
        color
      }
    },
    /* @__PURE__ */ React12.createElement(
      "label",
      {
        htmlFor: "input",
        className: clsx3("flex gap-2 py-4 w-full h-full  select-none")
      },
      /* @__PURE__ */ React12.createElement("span", { className: "w-10 flex items-center justify-center select-none " }, active ? /* @__PURE__ */ React12.createElement(Circle2, { className: "w-5 h-5 ", style: { color } }) : /* @__PURE__ */ React12.createElement(Plus, { className: "w-5 h-5 ", style: { color } })),
      /* @__PURE__ */ React12.createElement(
        "input",
        {
          ref,
          ...props,
          onKeyDown: handleEnterPress,
          type: "text",
          value,
          style: { color },
          onClick: () => setActive(true),
          onBlur: () => setActive(false),
          onChange: handleInputChange,
          id: "input",
          className: "outline-none text-sm bg-transparent select-none w-full h-full",
          placeholder: `inserir ${props.name ?? ""}`
        }
      )
    )
  );
});
Input.displayName = "Input";

// src/components/ui/avatar.tsx
import * as React13 from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
var Avatar = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React13.createElement(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
var AvatarImage = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React13.createElement(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
var AvatarFallback = React13.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React13.createElement(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// src/components/global/perfil/Perfil.tsx
import { RefreshCcw, Settings } from "lucide-react";

// src/components/ui/dialog.tsx
import * as React14 from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React14.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React14.createElement(DialogPortal, null, /* @__PURE__ */ React14.createElement(DialogOverlay, null), /* @__PURE__ */ React14.createElement(
  DialogPrimitive.Content,
  {
    ref,
    className: cn(
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-neutral-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-sm dark:border-neutral-800 dark:bg-neutral-950",
      className
    ),
    ...props
  },
  children,
  /* @__PURE__ */ React14.createElement(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400" }, /* @__PURE__ */ React14.createElement(Cross2Icon, { className: "h-4 w-4" }), /* @__PURE__ */ React14.createElement("span", { className: "sr-only" }, "Close"))
)));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ React14.createElement(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ React14.createElement(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React14.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React14.createElement(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-neutral-500 dark:text-neutral-400", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/global/perfil/Perfil.tsx
import { getServerSession } from "next-auth";
import React15 from "react";
var PerfilAvatar = React15.memo(({ image, name }) => {
  return /* @__PURE__ */ React15.createElement(Avatar, { className: "w-10 h-10 shadow-md" }, /* @__PURE__ */ React15.createElement(AvatarImage, { src: image ?? "", alt: name ?? "" }), /* @__PURE__ */ React15.createElement(AvatarFallback, null, (name ?? "")[0]));
});
PerfilAvatar.displayName = "PerfilAvatar";
var Perfil = React15.forwardRef(async () => {
  var _a, _b, _c, _d;
  const user = await getServerSession();
  if (!user)
    return null;
  return /* @__PURE__ */ React15.createElement("section", { className: " w-full px-2 pt-3 h-12 flex" }, /* @__PURE__ */ React15.createElement(Dialog, null, /* @__PURE__ */ React15.createElement(DropdownMenu, null, /* @__PURE__ */ React15.createElement(DropdownMenuTrigger, null, /* @__PURE__ */ React15.createElement(Stack, { direction: "row", className: "flex-nowrap gap-2 select-none w-full" }, /* @__PURE__ */ React15.createElement("span", null, /* @__PURE__ */ React15.createElement(
    PerfilAvatar,
    {
      image: ((_a = user.user) == null ? void 0 : _a.image) ?? "",
      name: ((_b = user.user) == null ? void 0 : _b.name) ?? ""
    }
  )), /* @__PURE__ */ React15.createElement(Stack, { direction: "col" }, /* @__PURE__ */ React15.createElement("span", { className: "text-sm text-left leading-4 tracking-tight line-clamp-1" }, (_c = user.user) == null ? void 0 : _c.name), /* @__PURE__ */ React15.createElement("span", { className: "text-xs" }, (_d = user.user) == null ? void 0 : _d.email)))), /* @__PURE__ */ React15.createElement(DropdownMenuContent, { className: "w-60" }, /* @__PURE__ */ React15.createElement(DialogTrigger, { className: "w-full" }, /* @__PURE__ */ React15.createElement(DropdownMenuItem, { className: "w-full gap-2  cursor-pointer" }, /* @__PURE__ */ React15.createElement(Settings, { className: "w-4 h-4 opacity-50 " }), " gerenciar perfil")), /* @__PURE__ */ React15.createElement(DropdownMenuItem, { className: "gap-2  cursor-pointer" }, /* @__PURE__ */ React15.createElement(RefreshCcw, { className: "w-4 h-4 opacity-50 " }), " sincronizar"))), /* @__PURE__ */ React15.createElement(DialogContent, { className: "select-none" }, "aqui")));
});
Perfil.displayName = "Perfil";

// src/components/global/sidebar.container.tsx
import React16 from "react";
var SidebarContainer = React16.forwardRef(
  ({ children, type }, ref) => {
    const { globalState } = useGlobal();
    if (type == "step")
      return null;
    if (!globalState.openSidebars[type])
      return null;
    return children;
  }
);
SidebarContainer.displayName = "SidebarContainer";

// src/components/global/list/add.list.tsx
import clsx4 from "clsx";
import { Plus as Plus2 } from "lucide-react";
import React17 from "react";
import { v4 as v42 } from "uuid";
var AddList = () => {
  const { globalDispatch } = useGlobal();
  const [value, setValue] = React17.useState("");
  const [active, setActive] = React17.useState(false);
  function submit() {
    if (value.trim() === "" || value === void 0)
      return null;
    const newList = {
      id: v42(),
      name: value,
      tasks: [],
      metadata: {
        tags: [],
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date(),
        icon: "list",
        author: "user"
      }
    };
    globalDispatch({
      type: "ADD_ELEMENT",
      payload: {
        type: "list",
        element: newList,
        map: {}
      }
    });
  }
  function handleInputChange(e) {
    const newValue = e.target.value;
    if (newValue == void 0)
      return null;
    setValue(newValue);
  }
  function handleEnterPress(e) {
    if (e.code !== "Enter" && e.code !== "NumpadEnter")
      return null;
    submit();
    setValue("");
  }
  return /* @__PURE__ */ React17.createElement(Stack, { direction: "row", className: "w-full h-fit " }, /* @__PURE__ */ React17.createElement(
    "label",
    {
      htmlFor: "addList",
      className: clsx4("flex gap-3 px-3 py-2 w-full  hover:bg-blue-600/20 select-none", [active && "bg-blue-600/20"])
    },
    /* @__PURE__ */ React17.createElement("span", { className: "w-10  flex items-center justify-center select-none " }, /* @__PURE__ */ React17.createElement(Plus2, { className: "w-5 h-5 text-blue-300" })),
    /* @__PURE__ */ React17.createElement(
      "input",
      {
        onKeyDown: handleEnterPress,
        type: "text",
        value,
        onClick: () => setActive(true),
        onBlur: () => setActive(false),
        onChange: handleInputChange,
        id: "addList",
        className: "outline-none text-blue-300 text-sm bg-transparent select-none first-letter:!capitalize",
        placeholder: "inserir lista"
      }
    )
  ));
};
AddList.displayName = "AddList";

// src/components/ui/scroll-area.tsx
import * as React18 from "react";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
var ScrollArea = React18.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React18.createElement(
  ScrollAreaPrimitive.Root,
  {
    ref,
    className: cn("relative overflow-hidden", className),
    ...props
  },
  /* @__PURE__ */ React18.createElement(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]" }, children),
  /* @__PURE__ */ React18.createElement(ScrollBar, null),
  /* @__PURE__ */ React18.createElement(ScrollAreaPrimitive.Corner, null)
));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React18.forwardRef(({ className, orientation = "vertical", ...props }, ref) => /* @__PURE__ */ React18.createElement(
  ScrollAreaPrimitive.ScrollAreaScrollbar,
  {
    ref,
    orientation,
    className: cn(
      "flex touch-none select-none transition-colors z-50",
      orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React18.createElement(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-neutral-200 dark:bg-neutral-800" })
));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// src/components/global/signout.tsx
import { LucideDoorOpen } from "lucide-react";
import { signOut } from "next-auth/react";
import React19 from "react";
var Signout = React19.forwardRef(() => {
  return /* @__PURE__ */ React19.createElement(
    Button,
    {
      variant: "ghost",
      className: "px-2 rounded-full",
      size: "icon",
      onClick: () => {
        signOut();
      }
    },
    /* @__PURE__ */ React19.createElement(LucideDoorOpen, { className: "w-5 h-5" })
  );
});
Signout.displayName = "Signout";

// src/components/global/list/sidebar.tsx
var ListSidebar = React20.forwardRef(({}, ref) => {
  return /* @__PURE__ */ React20.createElement(SidebarContainer, { type: "list" }, /* @__PURE__ */ React20.createElement(
    Appbar,
    {
      orientation: "vertical",
      className: "relative !w-[280px] min-w-[280px] max-w-[280px] overflow-hidden"
    },
    /* @__PURE__ */ React20.createElement(ScrollArea, { className: "relative max-h-[100vh] w-full h-full" }, /* @__PURE__ */ React20.createElement(Toolbar, { className: "sticky top-0 z-20 shadow bg-neutral-900  gap-4 h-fit w-full !flex-col !items-start !justify-start" }, /* @__PURE__ */ React20.createElement(Perfil, null), /* @__PURE__ */ React20.createElement(List2, { author: "system" })), /* @__PURE__ */ React20.createElement("div", { className: "h-[1px] w-full  select-none" }, /* @__PURE__ */ React20.createElement("div", { className: "border-t  h-full w-full" })), /* @__PURE__ */ React20.createElement("div", { className: "w-full h-full flex" }, /* @__PURE__ */ React20.createElement(AddList, null)), /* @__PURE__ */ React20.createElement(Toolbar, { className: "h-fit !flex-col !items-start !justify-start pt-1" }, /* @__PURE__ */ React20.createElement(List2, { author: "user" }))),
    /* @__PURE__ */ React20.createElement(Stack, { items: "center", className: "p-2 sticky bottom-0 h-12 bg-inherit border-t w-full" }, /* @__PURE__ */ React20.createElement(Signout, null))
  ));
});
ListSidebar.displayName = "ListSidebar";

// src/components/global/task/list.tsx
import clsx5 from "clsx";
import { Circle as Circle3, CircleCheckBigIcon, Menu, X } from "lucide-react";
import React24 from "react";

// src/components/global/task/add.task.tsx
import React21 from "react";
import { v4 as v43 } from "uuid";
var AddTask = React21.forwardRef(({}, ref) => {
  const { globalState, globalDispatch } = useGlobal();
  const list = globalState.lists.find((collection) => collection.id === globalState.selectedList);
  if (!list)
    return null;
  function submit(name) {
    if (!list)
      return null;
    if (name.trim() === "" || name === void 0)
      return null;
    const newTask = {
      id: v43(),
      name,
      metadata: {
        tags: [],
        createdAt: /* @__PURE__ */ new Date(),
        updatedAt: /* @__PURE__ */ new Date(),
        icon: "list",
        author: "user"
      },
      description: "",
      parent: list.id,
      status: "TODO",
      steps: []
    };
    globalDispatch({
      type: "ADD_ELEMENT",
      payload: {
        type: "task",
        element: newTask,
        map: {
          list: list.id,
          task: newTask.id
        }
      }
    });
  }
  return /* @__PURE__ */ React21.createElement(
    Input,
    {
      callback: submit,
      color: list.metadata.color ?? "",
      name: "tarefa"
    }
  );
});

// src/components/global/Editable.text.tsx
import React22 from "react";
var EditableText = React22.forwardRef(({
  contentEditable,
  callback,
  value,
  children,
  className,
  ...props
}, ref) => {
  function handleOnBlur(e) {
    const innerText = e.target.innerText;
    const newValue = innerText == void 0 || innerText.trim() == "" ? value : innerText;
    callback(newValue);
  }
  return /* @__PURE__ */ React22.createElement(
    "p",
    {
      contentEditable: contentEditable != void 0 ? contentEditable : true,
      onBlur: handleOnBlur,
      ...props,
      ref,
      dangerouslySetInnerHTML: {
        __html: value
      },
      className: cn([contentEditable !== false && "cursor-text"], className)
    }
  );
});
EditableText.displayName = "EditableText";

// src/components/ui/accordion.tsx
import * as React23 from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRightIcon as ChevronRightIcon2 } from "lucide-react";
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ React23.createElement(
  AccordionPrimitive.Item,
  {
    ref,
    className: cn("border-b", className),
    ...props
  }
));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React23.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React23.createElement(AccordionPrimitive.Header, { className: "flex" }, /* @__PURE__ */ React23.createElement(
  AccordionPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex flex-1 items-center gap-2 py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>span>svg]:rotate-90",
      className
    ),
    ...props
  },
  /* @__PURE__ */ React23.createElement("span", { className: "w-10 flex items-center justify-center" }, /* @__PURE__ */ React23.createElement(ChevronRightIcon2, { className: "h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-200 dark:text-neutral-400" })),
  children
)));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React23.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ React23.createElement(
  AccordionPrimitive.Content,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props
  },
  /* @__PURE__ */ React23.createElement("div", { className: cn("pb-4 pt-0", className) }, children)
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

// src/components/global/task/list.tsx
import { v4 as v44 } from "uuid";
var Checker = React24.forwardRef(({ active, className, onClick, ...props }, ref) => {
  const [mouseEnter, setMouseEnter] = React24.useState(false);
  return /* @__PURE__ */ React24.createElement(Stack, { className: clsx5("w-full h-full gap-2", className), ref, ...props }, /* @__PURE__ */ React24.createElement(
    "div",
    {
      className: clsx5("w-10 h-full  flex items-center justify-center cursor-pointer"),
      onClick: (e) => onClick && onClick(e),
      onMouseEnter: () => setMouseEnter(true),
      onMouseLeave: () => setMouseEnter(false)
    },
    mouseEnter || active ? /* @__PURE__ */ React24.createElement(CircleCheckBigIcon, { className: "w-5 h-5" }) : /* @__PURE__ */ React24.createElement(Circle3, { className: "w-5 h-5" })
  ), props.children);
});
Checker.displayName = "Checker";
var TaskItem = React24.forwardRef(({
  task,
  active = false,
  editable,
  dense = false,
  ...props
}, ref) => {
  const { globalDispatch } = useGlobal();
  if (!task)
    return /* @__PURE__ */ React24.createElement("div", { className: "w-full h-16 border-b" });
  function toogleTaskstatus(e) {
    e.stopPropagation();
    if (!task)
      return null;
    globalDispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        element: {
          ...task,
          status: task.status == "DONE" ? "TODO" : "DONE"
        },
        map: {
          list: task == null ? void 0 : task.parent,
          task: task == null ? void 0 : task.id
        },
        type: "task"
      }
    });
  }
  function toogleStepstatus(step) {
    if (!task)
      return null;
    globalDispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        element: {
          ...step,
          status: step.status == "DONE" ? "TODO" : "DONE"
        },
        map: {
          list: task == null ? void 0 : task.parent,
          task: task == null ? void 0 : task.id,
          step: step.id
        },
        type: "step"
      }
    });
  }
  function renameTask(title) {
    if (!task)
      return null;
    globalDispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        element: {
          ...task,
          name: title
        },
        type: "task",
        map: {
          list: task == null ? void 0 : task.parent,
          task: task.id
        }
      }
    });
  }
  function addStep2(name) {
    if (!task)
      return null;
    if (name.trim() == "")
      return null;
    globalDispatch({
      type: "ADD_ELEMENT",
      payload: {
        type: "step",
        map: {
          list: task.parent,
          task: task.id
        },
        element: {
          id: v44(),
          name,
          status: "TODO"
        }
      }
    });
  }
  function renameStep(name, step) {
    if (!task)
      return null;
    globalDispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        type: "step",
        map: {
          list: task.parent,
          task: task.id,
          step: step.id
        },
        element: {
          ...step,
          name
        }
      }
    });
  }
  function deleteStep2(stepId) {
    if (!task)
      return null;
    globalDispatch({
      type: "DELETE_ELEMENT",
      payload: {
        type: "step",
        map: {
          list: task.parent,
          task: task.id,
          step: stepId
        }
      }
    });
  }
  return /* @__PURE__ */ React24.createElement(
    Stack,
    {
      ref,
      className: clsx5("group/taskItem h-16 bg-neutral-900 rounded-md", [active && "border-transparent"], [!dense && "!h-fit "])
    },
    /* @__PURE__ */ React24.createElement(
      Stack,
      {
        direction: "col",
        key: task.id,
        ...props,
        className: clsx5(
          "h-full w-full gap-2 group-hover/taskItem:bg-neutral-800 transition-all rounded-md cursor-pointer",
          [!dense && active && "!bg-neutral-800 group-hover/taskItem:bg-neutral-900 "],
          [!dense && "px-2 py-4 !bg-neutral-800 group-hover/taskItem:bg-transparent cursor-default"]
        )
      },
      /* @__PURE__ */ React24.createElement(Checker, { onClick: toogleTaskstatus, active: task.status == "DONE" }, /* @__PURE__ */ React24.createElement(Stack, { direction: "col", justify: "center", className: clsx5(" h-full w-full") }, /* @__PURE__ */ React24.createElement(
        EditableText,
        {
          value: task.name,
          callback: renameTask,
          contentEditable: !!editable,
          className: clsx5("min-w-32 line-clamp-1 max-w-48 text-neutral-300", task.status == "DONE" && "line-through", [dense && "max-w-full"])
        }
      ), /* @__PURE__ */ React24.createElement("div", { className: "flex flex-row w-full whitespace-nowrap pr-2 text-neutral-500" }, task.steps.length > 0 && /* @__PURE__ */ React24.createElement("div", { className: "w-full text-xs leading-3" }, task.steps.filter((el) => el.status == "DONE").length, " de ", task.steps.length), /* @__PURE__ */ React24.createElement("p", { className: "text-xs leading-3" }, task.metadata.updatedAt.toLocaleString())))),
      !dense && /* @__PURE__ */ React24.createElement("section", { className: "w-full flex flex-col gap-1" }, task.steps.map((step) => /* @__PURE__ */ React24.createElement(Checker, { key: v44(), className: "-ml-1 px-2 items-center border-b border-neutral-600 py-1 w-full ", active: step.status == "DONE", onClick: (e) => {
        e.stopPropagation();
        toogleStepstatus(step);
      } }, /* @__PURE__ */ React24.createElement(
        EditableText,
        {
          value: step.name,
          callback: (name) => renameStep(name, step),
          className: "h-full w-full max-w-[80%] line-clamp-1 "
        }
      ), /* @__PURE__ */ React24.createElement(Button, { variant: "ghost", className: "rounded-full px-2", size: "icon", onClick: () => deleteStep2(step.id) }, /* @__PURE__ */ React24.createElement(X, { className: "w-5 h-5" })))), /* @__PURE__ */ React24.createElement(
        Input,
        {
          name: "etapa",
          variant: "ghost",
          callback: addStep2
        }
      ))
    )
  );
});
TaskItem.displayName = "TaskItem";
var TaskList = React24.forwardRef(({}, ref) => {
  const { globalState, globalDispatch } = useGlobal();
  function selectTask(taskId) {
    if (!globalState.selectedTask || globalState.selectedTask == taskId || globalState.selectedTask !== taskId && !globalState.openSidebars.task) {
      globalDispatch({
        type: "TOOGLE_SIDEBARS",
        payload: {
          type: "task"
        }
      });
    }
    globalDispatch({
      type: "SELECT_ELEMENT",
      payload: {
        type: "task",
        parentId: globalState.selectedList,
        elementId: taskId
      }
    });
  }
  function closeListSidebar() {
    globalDispatch({
      type: "TOOGLE_SIDEBARS",
      payload: {
        type: "list"
      }
    });
  }
  const list = globalState.lists.find((list2) => list2.id === globalState.selectedList);
  if (!list)
    return null;
  function renameList(name) {
    if (!list || list.metadata.author == "system")
      return null;
    globalDispatch({
      type: "UPDATE_ELEMENT",
      payload: {
        type: "list",
        map: {
          list: list.id
        },
        element: {
          ...list,
          name
        }
      }
    });
  }
  return /* @__PURE__ */ React24.createElement("section", { className: "relative flex flex-col max-h-screen h-screen overflow-hidden gap-4" }, globalState.selectedList && /* @__PURE__ */ React24.createElement("section", { className: "pt-5 px-4 flex gap-2 w-full" }, /* @__PURE__ */ React24.createElement("span", { className: "w-10 flex items-center justify-center" }, /* @__PURE__ */ React24.createElement(Button, { variant: "outline", size: "icon", onClick: closeListSidebar }, /* @__PURE__ */ React24.createElement(Menu, { className: "w-4 h-4" }))), /* @__PURE__ */ React24.createElement(
    Stack,
    {
      items: "center",
      key: list.id,
      style: { color: list.metadata.color },
      className: "gap-2 h-9"
    },
    /* @__PURE__ */ React24.createElement("span", { className: "w-10 flex items-center justify-center" }, list.metadata.icon && /* @__PURE__ */ React24.createElement(
      Iconify,
      {
        iconName: list.metadata.icon
      }
    )),
    /* @__PURE__ */ React24.createElement(
      EditableText,
      {
        callback: renameList,
        value: list.name,
        className: clsx5("text-xl first-letter:capitalize min-w-64"),
        contentEditable: list.metadata.author !== "system"
      }
    )
  )), /* @__PURE__ */ React24.createElement(ScrollArea, { className: "relative flex flex-col max-h-screen px-4" }, globalState.selectedList && /* @__PURE__ */ React24.createElement("div", { className: "flex flex-col gap-1 pb-8" }, /* @__PURE__ */ React24.createElement(AddTask, null), list.tasks.sort((a, b) => new Date(b.metadata.updatedAt ?? /* @__PURE__ */ new Date()).getTime() - new Date(a.metadata.updatedAt ?? /* @__PURE__ */ new Date()).getTime()).filter((el) => el.status !== "DONE").map((task) => /* @__PURE__ */ React24.createElement(
    TaskItem,
    {
      dense: true,
      onClick: () => selectTask(task.id),
      key: task.id,
      active: task.id === globalState.selectedTask,
      task
    }
  )), /* @__PURE__ */ React24.createElement(Accordion, { type: "multiple", defaultValue: [] }, list.tasks.filter((el) => el.status === "DONE").length > 0 && /* @__PURE__ */ React24.createElement(AccordionItem, { value: "DONE" }, /* @__PURE__ */ React24.createElement(AccordionTrigger, null, "conclu\xEDda (", list.tasks.filter((el) => el.status === "DONE").length, ")"), /* @__PURE__ */ React24.createElement(AccordionContent, { className: "flex flex-col gap-1 w-full" }, list.tasks.sort((a, b) => new Date(b.metadata.updatedAt ?? /* @__PURE__ */ new Date()).getTime() - new Date(a.metadata.updatedAt ?? /* @__PURE__ */ new Date()).getTime()).filter((el) => el.status === "DONE").map((task) => /* @__PURE__ */ React24.createElement(
    TaskItem,
    {
      dense: true,
      onClick: () => selectTask(task.id),
      key: task.id,
      active: task.id === globalState.selectedTask,
      task
    }
  ))))))));
});
TaskList.displayName = "TaskList";

// src/components/global/task/container.tsx
var TaskContainer = () => {
  return /* @__PURE__ */ React.createElement(TaskList, null);
};
TaskContainer.displayName = "TaskContainer";

// src/components/global/task/sidebar.tsx
import { SidebarClose, Trash } from "lucide-react";
import React25 from "react";
var TaskSidebar = React25.forwardRef(() => {
  const { globalState, globalDispatch } = useGlobal();
  function closeTaskSidebar() {
    globalDispatch({
      type: "TOOGLE_SIDEBARS",
      payload: {
        type: "task"
      }
    });
  }
  function deleteTask2() {
    if (globalState.selectedTask && globalState.selectedList) {
      globalDispatch({
        type: "DELETE_ELEMENT",
        payload: {
          type: "task",
          map: {
            task: globalState.selectedTask,
            list: globalState.selectedList
          }
        }
      });
      globalDispatch({
        type: "DESELECT_ELEMENT",
        payload: {
          type: "task"
        }
      });
    }
  }
  if (!globalState.selectedTask)
    return null;
  const collection = globalState.lists.find((list) => list.id === globalState.selectedList);
  const task = collection == null ? void 0 : collection.tasks.find((task2) => task2.id == globalState.selectedTask);
  if (!task)
    return null;
  return /* @__PURE__ */ React25.createElement(SidebarContainer, { type: "task" }, /* @__PURE__ */ React25.createElement(
    Appbar,
    {
      orientation: "vertical",
      className: "relative !w-[280px] min-w-[280px] max-w-[280px] justify-center overflow-hidden "
    },
    /* @__PURE__ */ React25.createElement(Toolbar, { className: "gap-4 py w-full h-full flex !flex-col justify-between items-start" }, /* @__PURE__ */ React25.createElement("section", { className: "w-full h-full" }, /* @__PURE__ */ React25.createElement("div", { className: "pt-3" }, /* @__PURE__ */ React25.createElement(TaskItem, { task, editable: true })))),
    /* @__PURE__ */ React25.createElement("div", { className: "flex items-center justify-between w-full border-t p-2" }, /* @__PURE__ */ React25.createElement(
      Button,
      {
        variant: "ghost",
        size: "icon",
        className: "rounded-full",
        onClick: closeTaskSidebar
      },
      /* @__PURE__ */ React25.createElement(SidebarClose, { className: "w-5 h-5 -scale-x-100" })
    ), /* @__PURE__ */ React25.createElement(
      Button,
      {
        variant: "ghost",
        size: "icon",
        className: "rounded-full",
        onClick: deleteTask2
      },
      /* @__PURE__ */ React25.createElement(Trash, { className: "w-5 h-5" })
    ))
  ));
});
TaskSidebar.displayName = "TaskSidebar";

// src/app.tsx
var TodoApp = React26.forwardRef(({}, ref) => {
  return /* @__PURE__ */ React26.createElement(GlobalProvider, null, /* @__PURE__ */ React26.createElement(
    "section",
    {
      className: "flex bg-neutral-900"
    },
    /* @__PURE__ */ React26.createElement(ListSidebar, null),
    /* @__PURE__ */ React26.createElement("section", { className: "w-full h-full flex flex-col " }, /* @__PURE__ */ React26.createElement("div", { className: clsx6("bg-neutral-950 w-full h-full select-none ") }, /* @__PURE__ */ React26.createElement(TaskList, null))),
    /* @__PURE__ */ React26.createElement(TaskSidebar, null)
  ));
});
export {
  TodoApp
};
//# sourceMappingURL=index.mjs.map