import { useState } from 'react'
import './assets/styles/main.css'
import Timer from './pages/timer'
import Settings from './pages/settings'
import SettingsContext from './settings-context'

function App() {

  const [showSettings, setShowSettings] = useState(false)
  const [workMinutes, setWorkMinutes] = useState(25)
  const [breakMinutes, setBreakMinutes] = useState(5)

  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes
      }}>
      {showSettings ? <Settings/> : <Timer/>}
      </SettingsContext.Provider>
    </main>
  )
}

export default App
