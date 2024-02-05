import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from '../components/play-button';
import PauseButton from '../components/pause-button';
import Settings from '../components/settings';
import { useContext, useState, useEffect, useRef } from 'react';
import SettingsContext from '../settings-context';

export default function Timer() {

    const red = '#FF334E'
    const green = '#7EBC89'

    const settingsInfo = useContext(SettingsContext);

    const [isPaused, setIsPaused] = useState(true);
    const [mode, setMode] = useState('work');
    const [secondsLeft, setSecondsLeft] = useState(0);

    const secondsLeftRef = useRef(secondsLeft);
    const isPausedRef = useRef(isPaused);
    const modeRef = useRef(mode);

    function tick() {
      secondsLeftRef.current--;
      setSecondsLeft(secondsLeftRef.current);
    }

    useEffect(() => {
        function switchMode() {
            const nextMode = modeRef.current === 'work' ? 'break' : 'work';
            const nextSeconds = (nextMode === 'work' ? settingsInfo.workMinutes : settingsInfo.breakMinutes) * 60;

            setMode(nextMode);
            modeRef.current = nextMode;
            setSecondsLeft(nextSeconds);
            secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    },1000);

    return () => clearInterval(interval); }, [settingsInfo]);

    const totalSeconds = mode === 'work' ? settingsInfo.workMinutes * 60 : settingsInfo.breakMinutes * 60;
    const percentage = Math.round(secondsLeft / totalSeconds * 100);

    const minutes = Math.floor(secondsLeft / 60);
    let seconds = secondsLeft % 60;
    if(seconds < 10) seconds = '0'+seconds;
    
    return (
        <div>
            <CircularProgressbar value={percentage}  strokeWidth={4} text={minutes + ':' + seconds} styles={buildStyles({
                textColor: mode === 'work' ? red : green,
                pathColor: mode === 'work' ? red : green,
                trailColor: '#e5e5e5',
                textSize: '18px',
                
            })} />
            <div className='flex items-center justify-center mt-10 gap-3'>
                {isPaused ? <PlayButton onClick={() => {setIsPaused(false); isPausedRef.current = false}} color={red}/> : <PauseButton color={red} onClick={() => {setIsPaused(true); isPausedRef.current = true}}/>}
                <Settings 
                color = {red} onClick={() => settingsInfo.setShowSettings(true)}
                />
            </div>
        </div>
    )
}