export const getPlanners = async() => {
    let raw = await fetch("http://localhost:3001/api/planner")
    let planners = await raw.json()
    let filteredPlanners = planners.map((planner) => {
        return {
            ...planner,
            tasks: planner.tasks.filter(task => {
            return !task.done
        })}
    })

    return filteredPlanners
}

export const newPlanner = async(newPlanner) => {
    let raw = await fetch("http://localhost:3001/api/planner", {
        method: "POST",
        body: JSON.stringify({name: newPlanner}),
        headers: new Headers({
            "Content-type": "application/json"
        })
    })
    let planner = await raw.json()

    return planner
}

export const deletePlanner = async(id) => {
    let raw = await fetch("http://localhost:3001/api/planner/" + id, {
        method: "DELETE"
    })
    let planner = await raw.json()

    return planner
}