import Task from "../Components/Task"
import {BsFillPlusCircleFill} from 'react-icons/bs'

const arr = [
{
  id:1,
  task:'take out th trash',
  compeleted:false
},
{
  id:2,
  task:'go to school',
  compeleted:true
},
{
  id:3,
  task:'play tennis',
  compeleted:true
},
{
  id:3,
  task:'practice chess',
  compeleted:false
},
]
const Main = () => {
  return (
    <>
      <div className='gird mt-14 h-auto text-center'>
        <div className='grid justify-center '>
        {arr.map(task=><Task status={task.compeleted}>{task.task}</Task>)}
        </div>
        <button className="text-blue-500 text-[50px] fixed top-[600px] right-[100px]"><BsFillPlusCircleFill/></button>
      </div>
    </>
  )
}

export default Main
