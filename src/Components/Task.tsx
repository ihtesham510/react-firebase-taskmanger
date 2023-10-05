import React from 'react'
import { ImBin2 } from 'react-icons/im'
interface prop {
  children: string
  status: boolean
}


const Task: React.FC<prop> = ({ children, status }) => {
  return (
    <div className='my-2 flex rounded-lg bg-black/30 p-1'>
      <input
        type='checkbox'
        checked={status}
        className='mx-4 scale-150 '
      />
      <input
        type='text'
        value={children}
        className={` bg-transparent  ${status
            ? 'line-through text-gray-700'
            : 'dark:text-white'
          }  w-[300px] outline-none`}
          disabled={status}
      />
      <button className='p-3 text-xl dark:text-white dark:hover:text-red-500'>
        <ImBin2 />
      </button>
    </div>
  )
}

export default Task
