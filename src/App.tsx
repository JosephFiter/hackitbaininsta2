import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { supabase } from './supabase'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [dbStatus, setDbStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle')
  const [dbMessage, setDbMessage] = useState('')

  async function testConnection() {
    setDbStatus('loading')
    try {
      // Simple health check: fetch Supabase version info
      const { data, error } = await supabase.from('_test_connection').select('*').limit(1)
      if (error && error.code === '42P01') {
        // Table doesn't exist but the connection worked
        setDbStatus('ok')
        setDbMessage('Conexión exitosa con Supabase')
      } else if (error) {
        setDbStatus('error')
        setDbMessage(`Error: ${error.message}`)
      } else {
        setDbStatus('ok')
        setDbMessage(`Conexión exitosa — ${data?.length ?? 0} filas devueltas`)
      }
    } catch (err) {
      setDbStatus('error')
      setDbMessage(`Error inesperado: ${String(err)}`)
    }
  }

  useEffect(() => {
    testConnection()
  }, [])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>

        <div style={{ margin: '1rem 0', padding: '0.75rem 1.25rem', borderRadius: '8px', background: dbStatus === 'ok' ? '#1a3a1a' : dbStatus === 'error' ? '#3a1a1a' : '#1a1a2e', border: `1px solid ${dbStatus === 'ok' ? '#4caf50' : dbStatus === 'error' ? '#f44336' : '#555'}` }}>
          <strong>Supabase:</strong>{' '}
          {dbStatus === 'idle' && 'Esperando…'}
          {dbStatus === 'loading' && 'Conectando…'}
          {(dbStatus === 'ok' || dbStatus === 'error') && dbMessage}
        </div>

        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
