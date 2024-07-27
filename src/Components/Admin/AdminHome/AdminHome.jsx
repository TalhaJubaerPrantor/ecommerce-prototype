import AdminNav from '../AdminNav/AdminNav';
import './AdminHome.css';

const AdminHome = () => {
    return (
        <div className='admin-home'>
            <div> <AdminNav/> </div>
            <div className='admin'>
                <h1> Welcome Admin </h1>
                
            </div>

        </div>
    );
};

export default AdminHome;