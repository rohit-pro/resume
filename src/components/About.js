import { getDuration } from '../Services';
import './About.css';

const About = () => {
    const points = [
        `Software Developer with over ${getDuration('2019-08-03', new Date())} of industrial exposure in Front-end Development`,
        `Gained exposure on process requirements and provided use cases for business, functional & technical requirements`,
        `Complete knowledge and exposyre to the Software Development Lifecycle (SDLC) right from requirement analysis, documentation
                    (functional specifications, technical design), coding and testing (preparation of test cases along with implementation) to maintenance of
                    proposed applications`,
        `Liased with stakeholders during problem diagnoses, requirements gathering, detailed level design, development and production
                    implementation to ensure that optimal resolutions were achieved`,
        `Appreciated by the client for converting Admin panel and Front-end panel of the Buchheit website into Angular framework within the set
                    target`
    ]

    const getPonts = () => {
        return points.map((point, index) => <li key={index} className='about-point'>{point}</li>)
    }

    return (
        <div className="experience-container card-container p-20">
            <p className="heading1 loading"> About Me  </p>
            <ul className="p-20 loading">
                {getPonts()}
            </ul>
        </div>
    );
}

export default About;
