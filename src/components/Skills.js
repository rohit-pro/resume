import data from '../data.json'

const Skills = () => {

    const technologies = data.technologies;

    const getTechnologies = () => {
        return technologies?.map((technology, index) => <div key={index} className='tech-container'>
            <img width={32} src={technology.url} alt="angular" />
            <div className="tech-progress">
                <div style={{width: technology.value}} className="tech-value"></div>
            </div>
        </div>)
    }

    return (
        <div className="experience-container card-container mt-20 p-20">
            <p className="heading1 loading"> Tech Stack  </p>
            <div className='tech-stack-container loading'>
                {getTechnologies()}
            </div>
        </div>
    );
}

export default Skills;
