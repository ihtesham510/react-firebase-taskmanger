import { useEffect, useState } from 'react'
import { CgMoon, CgSun } from 'react-icons/cg'
const ToggleTheme: React.FC = () => {
  const [darkMode, setDarkmode] = useState<boolean>(getInitialValue())
  function getInitialValue() {
    const dm = localStorage.getItem('darkMode')
    if (dm !== null) {
      return JSON.parse(dm) || false
    }
    return false
  }
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])
  function togglemode() {
    setDarkmode(prevMode => !prevMode)
  }
  return (
    <div>
      <button
        onClick={togglemode}
        className='btn-primary  p-[8px]  text-center !text-2xl header-btn'
      >
        {darkMode ? <CgMoon /> : <CgSun />}
      </button>
    </div>
  )
}

export default ToggleTheme
