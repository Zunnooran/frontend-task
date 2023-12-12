import { useAuth } from '../auth/AuthContext';
import Button from '../components/Button';

const Dashboard = () => {
    const { logout } = useAuth();

    const handelLogout = () => {
        logout();
    };
  return (
    <div>
      {/* <h1>dashboard</h1> */}
      <div className='bg-[#CFD8E1] w-full h-[10%] p-4 flex justify-between'><p>Dashboard</p>
      <Button btnClasses='bg-red-400 text-white p-2 rounded-md' btnText="Logout" btnClick={handelLogout} />
      </div>
    </div>
  )
}

export default Dashboard
