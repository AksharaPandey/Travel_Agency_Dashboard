import { Outlet } from 'react-router';  // Make sure you're using react-router-dom for routing
import {SidebarComponent} from '@syncfusion/ej2-react-navigations'; // Adjust the import path as necessary
import { NavItems , MobileSidebar} from '../../../components';


const AdminLayout = () => {
  return (
    <div className='admin-layout'>
      <MobileSidebar />
      <div className="mobile-sidebar"></div> 

      <aside className='w-full max-w-[270px] hidden lg:block'>
        <SidebarComponent width={270} enableGestures={false}>
           <NavItems />
        </SidebarComponent>
      </aside>

      <aside className='children'>
        
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
