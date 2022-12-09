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
    const course = 'Half Stack application development'
    const parts = [
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

    return (
        <div>
            <Header course={course}/>
            <Content
                parts={parts}
            />
            <Total exerciseCount={parts[0].exercises + parts[1].exercises + parts[2].exercises}/>
        </div>
    )
}

export default App