import { useState } from 'react';

import data from '../data.json'
import { getDuration, getFormattedDate } from '../Services';
import info from '../assets/images/info.png';

import './Experience.css';

const Experience = () => {

    const experiences = data.experience.sort((a, b) => {
        return b.id - a.id;
    });

    const [openedExperience, setOpenedExperience] = useState(null);

    const getFullDetails = () => {
        return experiences[openedExperience].projects.map((project, index) => {
            return <div className='project-details loading' key={index}>
                {project.forntendTechnology && <p className='heading2 comapny-name mt-10'>{project.name} (Forntend Technology - {project.forntendTechnology})</p>}
                {project.role && <p className='mt-10'><span className='heading3'>Role : </span>{project.role}</p>}
                {project.description && <p className='mt-10 description'><span className='heading3'>Description : </span>{project.description}</p>}
                {project.highlight && <p className='mt-10'><span className='heading3'>Highlights : </span>{project.highlight}</p>}
            </div>
        })
    }

    const expand = () => {
        const element = document.getElementsByClassName("full-details")
        if(element?.length){
            element[0].getElementsByClassName.width = '600px';
        }else{
            setTimeout(() => {
                expand()                
            }, 10);
        }
    }

    const getExperiences = () => {
        return experiences.map((experience, index) =>
            <div key={index} className='experience-detais-container'>
                <div className='stepper-container'>
                    <div className="step-number">{index + 1}</div>
                    {
                        ((index + 1) !== experiences.length) &&
                        <div className='stepper-line'></div>
                    }
                </div>
                <div className="company-details-container">
                    <p className='heading2 comapny-name'>{experience.companyName}<img onClick={() => {setOpenedExperience(openedExperience === index ? null : index); expand()}} className="info" src={info} alt="info" /></p>
                    <p className='heading3 normal-fontweight mt-10'>{getFormattedDate(experience.dateOfJoining)} - {experience.dateOfRelease ? (getFormattedDate(experience.dateOfRelease) || '') : 'Present'}</p>
                    <p className="duration">{getDuration(experience.dateOfJoining, experience.dateOfRelease || new Date())}</p>
                    {
                        openedExperience === index &&
                        <div className="full-details mt-10 quick-loading">
                            <p className='heading2 comapny-name'>{experience.companyFullName}</p>
                            {/* <p className='heading3 mt-10'>Projects - </p> */}
                            {getFullDetails()}
                        </div>
                    }
                </div>
            </div>)
    }

    return (
        <div className="experience-container card-container mt-20 p-20">
            <p className="heading1 loading"> Experience  </p>
            <div className="p-20 loading">
                {getExperiences()}
            </div>
        </div>
    );
}

export default Experience;
