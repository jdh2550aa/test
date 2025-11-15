import './MainWorkArea.css'

function MainWorkArea(props) {
  return (
    <main class="main-work-area">
      <div class="main-content">
        {props.children}
      </div>
    </main>
  )
}

export default MainWorkArea
