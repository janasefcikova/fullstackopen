const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
    const parts = props.parts
    return (
        <>
            <Part part={parts[0]}/>
            <Part part={parts[1]}/>
            <Part part={parts[2]}/>
        </>
    )
}

const Part = (props) => {
    const part = props.part;
    // console.log("Part component" + props)
    return (
    <p>
        {part.name} {part.exercises}
    </p>
)
}

const Total = (props) => (
    <p>Number of exercises {props.exerciseCount}</p>
)


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    let exerciseCount = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises;
    return (
        <div>
            <Header course={course.name}/>
            <Content
                parts={course.parts}
            />
            <Total exerciseCount={exerciseCount}/>
        </div>
    )
}

export default App