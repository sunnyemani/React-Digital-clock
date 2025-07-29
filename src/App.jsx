import React, { useEffect, useState } from 'react'

const App = () => {
  const [now, setNow] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);
  const [isShortDate, setIsShortDate] = useState(false);

  useEffect(()=>{
    const interval = setInterval(() =>{
      setNow(new Date());
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formTimeData = (date) => date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: !is24Hour,
  })

  const formDateData = (date) => date.toLocaleDateString('en-US', {
    weekday: !isShortDate ? 'long' : 'short',
    year: 'numeric',
    month: !isShortDate ? 'long' : 'short',
    day: 'numeric',
  })
  return (
    <div className='container'>
    <div className='controls'>
      <button onClick={() => setIs24Hour(!is24Hour)}>
        switch to {is24Hour ? '12-hours' : '24-hours'} format
      </button>
      <button onClick={() => setIsShortDate(!isShortDate)}>
        Switch to {isShortDate ? 'long' : 'short'} date format
      </button>
    </div>
      <div className='Clock'>
        <h1 className='time' aria-live="polite">{formTimeData(now)}</h1>
        <h1 className='date'>{formDateData(now)}</h1>
      </div>
    </div>
  )
}

export default App