/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    salary,
    job_type,
  } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img className="pt-3" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body my-3">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="mt-3">
          <button className="px-4 text-[#9873FF] mr-3 border-[#7E90FE]  py-2 font font-bold border rounded-md">
            {" "}
            {remote_or_onsite}
          </button>
          <button className="px-4 text-[#9873FF]  py-2 border-[#7E90FE] font font-bold border rounded-md">
            {job_type}
          </button>
        </div>
        <div className="flex items-center text-[#757575] gap-4">
          <h2 className="flex gap-3 text-[20px] items-center">
            <CiLocationOn className="text-2xl"></CiLocationOn>
            {location}
          </h2>
          <h2 className="flex gap-3 text-[20px] items-center">
            <AiOutlineDollar className="text-2xl"></AiOutlineDollar> Salary:
            {salary}
          </h2>
        </div>
        <div className="card-actions my-3">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary bg-[#9873FF] text-white border-none">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
