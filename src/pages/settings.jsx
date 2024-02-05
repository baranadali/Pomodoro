import React, { useContext } from 'react'
import ReactSlider from 'react-slider'
import '../assets/styles/main.css'
import SettingsContext from '../settings-context'
import BackButton from '../components/back-button'

export default function Settings () {
    const settingsInfo = useContext(SettingsContext)
    return(
        <div className='w-full flex items-center justify-center flex-col'>
            <h2 className="mb-10 font-medium text-2xl">Settings</h2>
            <div className="flex flex-col gap-6 max-w-[360px] w-full">
                <div className='flex flex-col gap-2'>
                    <label>Work: {settingsInfo.workMinutes}:00 min</label>
                    <ReactSlider
                    className={'slider'}
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={settingsInfo.workMinutes}
                    min={1}
                    max={90}
                    onChange={newValue => settingsInfo.setWorkMinutes(newValue)}
                    />
                </div>
                <div className='flex flex-col gap-2'>
                    <label>Break: {settingsInfo.breakMinutes}:00 min</label>
                    <ReactSlider
                    className={'slider green'}
                    thumbClassName={'thumb'}
                    trackClassName={'track'}
                    value={settingsInfo.breakMinutes}
                    min={1}
                    max={90}
                    onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
                    />
                </div>
            </div>
            <div>
                <BackButton onClick={() => settingsInfo.setShowSettings(false)}/>
            </div>
        </div>
    )
}