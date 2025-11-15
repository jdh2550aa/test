import { createSignal, onMount } from 'solid-js'
import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import Layout from './components/Layout'
import './App.css'

function App() {
  const [count, setCount] = createSignal(0)
  const [deferredPrompt, setDeferredPrompt] = createSignal(null)
  const [isInstallable, setIsInstallable] = createSignal(false)

  onMount(() => {
    // Listen for the beforeinstallprompt event
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setIsInstallable(true)
    })

    // Listen for successful installation
    window.addEventListener('appinstalled', () => {
      setIsInstallable(false)
      console.log('PWA was installed')
    })
  })

  const handleInstallClick = async () => {
    const prompt = deferredPrompt()
    if (!prompt) return

    prompt.prompt()
    const { outcome } = await prompt.userChoice
    console.log(`User response to the install prompt: ${outcome}`)
    setDeferredPrompt(null)
    setIsInstallable(false)
  }

  return (
    <Layout>
      <div class="app-content">
        <div class="logo-container">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} class="logo" alt="Vite logo" />
          </a>
          <a href="https://solidjs.com" target="_blank">
            <img src={solidLogo} class="logo solid" alt="Solid logo" />
          </a>
        </div>
        <h1>Vite + Solid PWA</h1>
        <div class="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count()}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
          {isInstallable() && (
            <button
              onClick={handleInstallClick}
              style={{ "margin-top": "1rem", "background-color": "#2c4f7c" }}
            >
              Install PWA
            </button>
          )}
        </div>
        <p class="read-the-docs">
          This is a Progressive Web App built with Solid.js and Vite
        </p>
      </div>
    </Layout>
  )
}

export default App
