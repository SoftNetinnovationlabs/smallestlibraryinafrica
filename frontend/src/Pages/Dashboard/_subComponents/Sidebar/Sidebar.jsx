import { Link } from 'react-router-dom'

const Sidebar = () => (
  <div className="sidebar">
    <ul>
      <li><Link to="/dashboard">Dashboard Home</Link></li>
      <li><Link to="/dashboard/profile">My Profile</Link></li>
      <li><Link to="/dashboard/newsletters">Newsletters</Link></li>
    </ul>
  </div>
)

export default Sidebar
