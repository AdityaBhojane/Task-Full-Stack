import ButtonUsage from "../components/ButtonUsage";
import TaskInput from "../components/TaskInput";
import TaskCard from "../components/TaskModel";


export default function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-200 via-gray-200 to-gray-200 min-h-screen flex">
      <div className="m-5">
        <h1 className=" text-3xl font-bold mb-5">Task Management for Developers</h1>
        <div className="mt-2 flex gap-4"> 
          <TaskInput label="Title" />
          <TaskInput label="Description"/>
          <ButtonUsage/>
        </div>
        <div className="grid grid-cols-5 gap-3 mt-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 ">
          <TaskCard id={1} title={"Developer task app"} description={"This evening is the right time to build that"} />
          <TaskCard id={1} title={"Developer task app"} description={"This evening is the right time to build that"} />
          <TaskCard id={1} title={"Developer task app"} description={"This evening is the right time to build that"} />
          <TaskCard id={1} title={"Developer task app"} description={"This evening is the right time to build that"} />
          <TaskCard id={1} title={"Developer task app"} description={"This evening is the right time to build that"} />
          <TaskCard id={1} title={"Developer task app"} description={"This evening is the right time to build that"} />
        </div>
      </div>
    </div>
  )
}
