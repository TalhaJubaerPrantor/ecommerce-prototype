import { Link } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
    return (
        <div className='user-profile'>
            <span style={{fontSize:"40px"}}>User Profile</span><span><Link to={"/profile/edit"}>Edit</Link></span><br /><br />
            <span className='profile-element'>Name:</span><span> Talha Jubaer Prantor</span><br />
            <span className='profile-element'>Phone:</span><span> 015********</span><br />
            <span className='profile-element'>Email:</span><span> talhajubaer3121@gmail.com</span><br />
            <span  className='profile-element'>Address:</span><span> 595/1 Middle Monipur</span><br />
            <span  className='profile-element'>Password:</span><span> *******</span><br />

        </div>
    );
};

export default UserProfile;