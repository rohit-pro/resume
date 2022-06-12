import data from '../data.json'

import './Experience.css';

const Qualification = () => {

    const educations = data.education.sort((a, b) => {
        return b.id - a.id;
    });

    const getEducations = () => {
        return educations.map((education, index) =>
            <div key={index} className='experience-detais-container'>
                <div className='stepper-container'>
                    <div className="step-number">{index + 1}</div>
                    {
                        ((index + 1) !== educations.length) &&
                        <div className='stepper-line'></div>
                    }
                </div>
                <div className="company-details-container">
                    <p className='heading2 comapny-name mt-10'>{education.title}</p>
                    <p className='heading3 normal-fontweight mt-10'>{education.name}</p>
                    {
                        education.marks &&
                        <p className="duration">{education.marks}</p>
                    }
                    {
                        education.isPursuing && <>
                            <p className="duration">Pursuing ({education.pursuingDetails})</p>
                        </>
                    }
                </div>
            </div>)
    }

    return (
        <div className="experience-container card-container mt-20 p-20">
            <p className="heading1 loading">Education </p>
            <div className="p-20 loading">
                {getEducations()}
            </div>
        </div>
    );
}

export default Qualification;
