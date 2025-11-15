import './Sidebar.css'

function Sidebar() {
  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'about', label: 'About', icon: 'ℹ️' }
  ]

  return (
    <aside class="sidebar">
      <nav class="sidebar-nav">
        <ul class="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.id} class="sidebar-menu-item">
              <a href={`#${item.id}`} class="sidebar-link">
                <span class="sidebar-icon">{item.icon}</span>
                <span class="sidebar-label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
