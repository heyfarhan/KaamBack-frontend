import Timing from  "../assets/timing.png"
import Loc from  "../assets/loc.png"
const style={
  dropdown:`bg-blue-200 border border-black text-gray-600 py-2 px-4 rounded-xl focus:outline-none shadow-xl`,
  card:`rounded-xl shadow-xl py-7 px-4 mb-4 relative`,
  role:`font-semibold text-xl ml-5 `,
  viewrole:`absolute right-4 top-4 bg-[#97C8F9] text-black font-semibold py-2 px-4 rounded-3xl`
}
const Team = () => {
    const teamMembers = [
        { role: "Role Name", department: "Dept Type", location: "Loc Type", employment: "Emp Type " },
        { role: "Role Name", department: "Dept Type", location: "Loc Type", employment: "Emp Type " },
        { role: "Role Name", department: "Dept Type", location: "Loc Type", employment: "Emp Type " },
        { role: "Role Name", department: "Dept Type", location: "Loc Type", employment: "Emp Type " },
        { role: "Role Name", department: "Dept Type", location: "Loc Type", employment: "Emp Type " },
      ];
    return (
      <div className="mx-auto flex justify-center mt-2 px-4">
      <div className="bg-blue-200 w-full lg:w-[75%] py-10 rounded-2xl overflow-x-auto">
        <div className="px-7">
          <h1 className="font-bold text-left mb-6 text-2xl">Join the Team</h1>
          <div className="flex justify-start mt-4">
              <select className={style.dropdown}>
                <option>All Departments</option>
                <option>Design</option>
                <option>Development</option>
                <option>Marketing</option>
                <option>Sales</option>
              </select>
            </div>
          {teamMembers.map((item,index)=>(
            <div className={style.card}>
            <h1 key={index} className={style.role}>{item.role}</h1>
            <div className="flex ml-2 mt-2">
              <img src={Loc} alt="Loc" className="w-3 h-3 mt-1 ml-2"/>
              <h1 className="ml-1 font-semibold text-sm">Remote</h1>
              <img src={Timing} alt="Timing" className="w-3 h-3 mt-1 ml-3"/>
              <h1 className="ml-1 font-semibold text-sm ">Internship</h1>
            </div>
            <button className={style.viewrole}>
              View Role
            </button>
          </div>
          ))}
          
        </div>
      </div>
    </div>
    );
  }
  
  export default Team;
  