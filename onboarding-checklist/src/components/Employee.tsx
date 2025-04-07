

function Employee() {
  return (
    <>
    <div>
        <form style={{width: '350px'}}>
            <input className="" type="text" name="fullname" placeholder="Full name"/>
            <input type="email" name="email" placeholder="Email"/>
            <input type="text" name="jobrole" placeholder="Job Role"/>
            <input type="date" name="startdate"/>
        </form>
    </div>
    </>
  )
}

export default Employee