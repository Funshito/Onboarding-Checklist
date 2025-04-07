// import { useState } from "react"


function Employee() {

    // const[name, setName] = useState("")
    // const[email, setEmail] = useState("")
    // const[jobROle, setJobRole] = useState("")
    // const[startDate, setStartDate] = useState("")


  return (
    <>
    <div>
        <form style={{width: '350px'}}>
            <h2 className="text-2xl font-bold mb-6 text-grey-800">Enter new Employee details</h2>
            <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" name="fullname" placeholder="Full name"/>
            <input className="my-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="email" name="email" placeholder="Email"/>
            <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" name="jobrole" placeholder="Job Role"/>
            <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" type="date" name="startdate"/>
        </form>

        <div>
            
        </div>
    </div>
    </>
  )
}

export default Employee