import data from '../data.json';
import './Profile.css';
const Profile = () => {    

    const socials = data.social;

    const getSocial = () => {
        return socials?.map((social,index)=><div className='social-container' key={index}>
            <img width="32" src={social.url} alt="social" />
            <a href={social.redirectUrl || social.value}>{social.value}</a>
        </div>)
    }

    return (
        <div className='profile-section card-container load'>
            <img className='loading' src="https://media-exp1.licdn.com/dms/image/C4E03AQF9e7Jsi_zECA/profile-displayphoto-shrink_200_200/0/1615529775615?e=1660176000&v=beta&t=qzPrdUhF3WbmDS-0WOtjwyVrtgnrgmE-4zYWSDYmFj4" alt="profile" />
            <div className="p-20 loading">
                <p className="heading1">Rohit Bhagat</p>
                <p className="heading2 mt-20 normal-fontweight">Front-end Developer</p>
                <div className='mt-20 quick-loading'>
                    {getSocial()}
                </div>
            </div>
        </div>
    );
}

export default Profile;
