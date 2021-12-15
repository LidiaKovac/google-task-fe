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