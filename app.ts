enum Status{
    DONE = "done",
    INPROGRESS = "in-progress",
    TODO = "todo"
}
interface Todo {
    id: number,
    title: string,
    status: Status,
    completedOn?: Date
}

const todoItems:Todo[] = [
    { id: 1, title: "Learn HTML", status: Status.DONE, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: Status.INPROGRESS },
    { id: 3, title: "Write the best app in the world", status: Status.TODO },
]

function addTodoItem(todo:string):Todo {
    const id = getNextId(todoItems)

    const newTodo = {
        id,
        title: todo,
        status: Status.TODO,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends {id: number}>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? max : x.id, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))