import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/Localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs,setDisplayJobs]=useState([])
  const handleJobsFilter=filter=>{
    if(filter==='all'){
        setDisplayJobs(appliedJobs)
    }
    else if(filter==='remote'){
        const remoteJobs=appliedJobs.filter(job=>job.remote_or_onsite==='Remote');
        setDisplayJobs(remoteJobs)
    }
    else if(filter==="onsite"){
        const onsiteJobs=appliedJobs.filter(job=>job.remote_or_onsite==="Onsite")
        setDisplayJobs(onsiteJobs)
    }
  }
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      console.log(jobs, storedJobIds, jobsApplied);
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied)
    }
  }, [jobs]);
  return (
    <div>
      <h2 className="text-2xl">Jobs I Applied:{appliedJobs.length}</h2>
      <details className="dropdown mb-32">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={()=>handleJobsFilter('all')}>
            <a>All</a>
          </li >
          <li onClick={()=>handleJobsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={()=>handleJobsFilter('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}>
            {job.job_title} {job.company_name}:{job.remote_or_onsite}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
