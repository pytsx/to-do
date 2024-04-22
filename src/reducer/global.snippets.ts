import { List, GlobalActions, GlobalState, Task, Step } from "./global.interface"

function addList(state: GlobalState, action: GlobalActions): GlobalState {
  if (action.type !== "ADD_ELEMENT") throw new Error()
  return {
    ...state,
    lists: [
      ...state.lists,
      action.payload.element as List
    ]
  }
}

function addTask(state: GlobalState, action: GlobalActions): GlobalState {
  if (action.type !== "ADD_ELEMENT") throw new Error()
  if (action.payload?.map.list)
    return {
      ...state,
      lists: state.lists.map(list => {
        if (list.id === action.payload.map.list) {
          return {
            ...list,
            tasks: [...list.tasks, action.payload.element as Task]
          }
        }
        return list
      })
    }
  else return state
}

function addStep(state: GlobalState, action: GlobalActions): GlobalState {
  if (action.type !== "ADD_ELEMENT") throw new Error()
  if (action.payload?.map.list)
    return {
      ...state,
      lists: state.lists.map(list => {
        if (list.id === action.payload.map.list) {
          return {
            ...list,
            tasks: list.tasks.map(task => {
              if (task.id === action.payload.map.task) {
                return {
                  ...task,
                  steps: [...task.steps, action.payload.element as Step]
                }
              }
              return task
            })
          }
        }
        return list
      })
    }
  else return state
}


function addElement(state: GlobalState, action: GlobalActions): GlobalState {
  if (action.type !== "ADD_ELEMENT") throw new Error()
  switch (action.payload.type) {
    case "list":
      return addList(state, action)
    case "task":
      return addTask(state, action)
    case "step":
      return addStep(state, action)
    default:
      return state;
  }
}

function updateList(state: GlobalState, action: GlobalActions): GlobalState {
  if (action.type !== "UPDATE_ELEMENT") throw new Error()
  return {
    ...state,
    lists: state.lists.map(list => {
      if (list.id === action.payload.map.list) {
        return {
          ...list,
          ...action.payload.element
        }
      }
      return list
    })
  }
}

function updateTask(state: GlobalState, action: GlobalActions): GlobalState {
  if (action.type !== "UPDATE_ELEMENT") throw new Error()
  if (action.payload?.map.list)
    return {
      ...state,
      lists: state.lists.map(list => {
        if (list.id === action.payload.map.list) {
          return {
            ...list,
            tasks: list.tasks.map(task => {
              if (task.id === action.payload.map.task) {
                return {
                  ...task,
                  ...action.payload.element
                }
              }
              return task
            })
          }
        }
        return list
      })
    }
  else return state
}


function updateStep(state: GlobalState, action: GlobalActions): GlobalState {
  if (action.type !== "UPDATE_ELEMENT") throw new Error()
  if (action.payload?.map.list)
    return {
      ...state,
      lists: state.lists.map(list => {
        if (list.id === action.payload.map.list) {
          return {
            ...list,
            tasks: list.tasks.map(task => {
              if (task.id === action.payload.map.task) {
                return {
                  ...task,
                  steps: task.steps.map(step => {
                    if (step.id === action.payload.map.step) {
                      return {
                        ...step,
                        ...action.payload.element as Step
                      }
                    }
                    return step
                  })
                }
              }
              return task
            })
          }
        }
        return list
      })
    }
  else return state
}

function updateElement(state: GlobalState, action: GlobalActions): GlobalState {
  if (action.type !== "UPDATE_ELEMENT") throw new Error()
  switch (action.payload.type) {
    case "list":
      return updateList(state, action)
    case "task":
      return updateTask(state, action)
    case "step":
      return updateStep(state, action)
    default:
      return state;
  }
}



function deletelist(state: GlobalState, action: GlobalActions): GlobalState {
  if (action.type !== "DELETE_ELEMENT") throw new Error()
  return {
    ...state,
    lists: state.lists.filter(list => list.id !== action.payload.map.list)
  }
}

function deleteTask(state: GlobalState, action: GlobalActions): GlobalState {
  if (action.type !== "DELETE_ELEMENT") throw new Error()
  if (action.payload?.map.task && action.payload.map.list)
    return {
      ...state,
      lists: state.lists.map(list => {
        if (list.id === action.payload.map.list) {
          return {
            ...list,
            tasks: list.tasks.filter(task => task.id !== action.payload.map.task)
          }
        }
        return list
      })
    }
  else return state
}

function deleteStep(state: GlobalState, action: GlobalActions): GlobalState {
  if (action.type !== "DELETE_ELEMENT") throw new Error()
  if (action.payload?.map.task && action.payload.map.list)
    return {
      ...state,
      lists: state.lists.map(list => {
        if (list.id === action.payload.map.list) {
          return {
            ...list,
            tasks: list.tasks.map(task => {
              if (task.id == action.payload.map.task) {
                return {
                  ...task,
                  steps: task.steps.filter(step => step.id !== action.payload.map.step)
                }
              }
              return task
            })
          }
        }
        return list
      })
    }
  else return state
}


function deleteElement(state: GlobalState, action: GlobalActions): GlobalState {
  if (action.type !== "DELETE_ELEMENT") throw new Error()
  switch (action.payload.type) {
    case "list":
      return deletelist(state, action)
    case "task":
      return deleteTask(state, action)
    case "step":
      return deleteStep(state, action)
    default:
      return state;
  }
}

export {
  addElement,
  updateElement,
  deleteElement
}