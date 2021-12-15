export const getTasks = async() => {
    let raw = await fetch("http://localhost:3001/api/task")
    let tasks = await raw.json()

    return tasks
}

export const checkTask = async(id) => {
    let raw = await fetch("http://localhost:3001/api/task/" + id, {
        method: "PUT",
        body: JSON.stringify({done: true}),
        headers: {
            "Content-Type": "application/json"
        }
    })
    let tasks = await raw.json()
    return tasks
}