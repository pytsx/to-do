import { GlobalActions, GlobalState } from "./global.interface"
import { addElement, deleteElement, updateElement } from "./global.snippets"


function globalReducer(
  state: GlobalState,
  action: GlobalActions,
): GlobalState {
  switch (action.type) {
    case "ADD_ELEMENT":
      return addElement(state, action)
    case "UPDATE_ELEMENT":
      return updateElement(state, action)
    case "DELETE_ELEMENT":
      return deleteElement(state, action)
    case "SELECT_ELEMENT":
      return {
        ...state,
        ...(action.payload.type == "list" && {
          selectedList: action.payload.elementId,
          selectedTask: undefined
        }),
        ...(action.payload.type == "task" && action.payload.parentId && {
          selectedList: action.payload.parentId,
          selectedTask: action.payload.elementId
        }),
      }
    case "DESELECT_ELEMENT":
      return {
        ...state,
        ...(action.payload.type == "list" && {
          selectedList: undefined,
          selectedTask: undefined
        }),
        ...(action.payload.type == "task" && {
          selectedTask: undefined
        })
      }
    case "TOOGLE_SIDEBARS":
      return {
        ...state,
        openSidebars: {
          ...state.openSidebars,
          ...(action.payload.type == "task" && {
            task: !state.openSidebars.task
          }),
          ...(action.payload.type == "list" && {
            list: !state.openSidebars.list
          })
        }
      }
    default:
      return state
  }
}


export {
  globalReducer
}