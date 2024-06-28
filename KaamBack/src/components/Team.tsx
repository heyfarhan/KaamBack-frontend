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
            <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 font-bold text-xl">Role</th>
                <th className="py-2 px-4 font-bold text-xl">Department</th>
                <th className="py-2 px-4 font-bold text-xl">Location Type</th>
                <th className="py-2 px-4 font-bold text-xl">Employment Type</th>
                <th className="py-2 px-4 font-bold text-xl">Action</th>
              </tr>
            </thead>
              <tbody>
              {teamMembers.map((member,index)=>(
                 <tr key={index}>
                 <td className="py-1 px-4 font-semibold">{member.role}</td>
                 <td className="py-1 px-4 font-semibold">{member.department}</td>
                 <td className="py-1 px-4 font-semibold">{member.location}</td>
                 <td className="py-1 px-4 font-semibold">{member.employment}</td>
                 <td className="py-1 px-4 font-semibold">
                   <button className="bg-blue-300 text-black px-3 text-sm py-1 rounded-2xl">View Role</button>
                 </td>
               </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  
  export default Team;
  