import './EditProfile.css';

const EditProfile = () => {
    return (
    <div className='edit-profile'>
        <span style={{fontSize:"40px"}}>User Profile</span><br /><br />
        <span className='profile-element'>Name: </span><span><input type="text" /></span><br />
        <span className='profile-element'>Phone: </span><span><input type="tel" /></span><br />
        <span className='profile-element'>Email: </span><span><input type="email" /></span><br />
        <span  className='profile-element'>Address: </span><span><input type="text" /></span><br />
        <span  className='profile-element'>Password: </span><span><input type="password" /></span><br />
        <span  className='profile-element'>Retype Password: </span><span><input type="password" /></span><br />
        <br />
        <button className='update-btn'>Delete</button>


    </div>
    );
};

export default EditProfile;