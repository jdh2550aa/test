import TitleBar from './TitleBar'
import Sidebar from './Sidebar'
import MainWorkArea from './MainWorkArea'
import './Layout.css'

function Layout(props) {
  return (
    <div class="layout">
      <TitleBar />
      <Sidebar />
      <MainWorkArea>
        {props.children}
      </MainWorkArea>
    </div>
  )
}

export default Layout
