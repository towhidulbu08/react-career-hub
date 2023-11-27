import { Link, useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/Localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt=parseInt(id)
  const job = jobs.find((job) => job.id === idInt );
  const {
    // eslint-disable-next-line no-unused-vars
    job_title,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    // eslint-disable-next-line no-unused-vars
    contact_information,
  } = job;
  console.log(job);
  

  const handleApplyJob=()=>{
    saveJobApplication(idInt)
      toast('You Have Applied Successfully')
  }
  return (
    <div>
      <h2>Job Details Of:</h2>
      <div className="grid gap-4 md:grid-cols-4 mt-10 mb-12">
        <div className="md:col-span-3 border relative">
          <h2 className="text-base mb-3">
            <span className="font-bold">Job Description:</span>
            {job_description}
          </h2>
          <h2 className="text-base mb-3">
            <span className="font-bold">Job Responsibility:</span>
            {job_responsibility}
          </h2>
          <h2 className="text-base mb-3">
            <span className="font-bold">Educational Requirements:</span>
            {educational_requirements}
          </h2>
          <h2 className="text-base mb-3">
            <span className="font-bold">Experiences:</span>
            {experiences}
          </h2>
        </div>
        <div className="border mt-4 mb-6 bg-[#c2b7e2]">
          <div className="pl-3">
            <h3 className="mt-3 mb-4 font-bold ">Job Details</h3>
            <hr className="mb-4 border-[2px] mx-3" />
            <h2 className="flex items-center gap-1">
              <AiOutlineDollar></AiOutlineDollar>Salary:{salary}(Per month)
            </h2>
            <h2 className="flex mt-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.75 3V5.25M17.25 3V5.25M3 18.75V7.5C3 6.90326 3.23705 6.33097 3.65901 5.90901C4.08097 5.48705 4.65326 5.25 5.25 5.25H18.75C19.3467 5.25 19.919 5.48705 20.341 5.90901C20.7629 6.33097 21 6.90326 21 7.5V18.75M3 18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75M3 18.75V11.25C3 10.6533 3.23705 10.081 3.65901 9.65901C4.08097 9.23705 4.65326 9 5.25 9H18.75C19.3467 9 19.919 9.23705 20.341 9.65901C20.7629 10.081 21 10.6533 21 11.25V18.75M12 12.75H12.008V12.758H12V12.75ZM12 15H12.008V15.008H12V15ZM12 17.25H12.008V17.258H12V17.25ZM9.75 15H9.758V15.008H9.75V15ZM9.75 17.25H9.758V17.258H9.75V17.25ZM7.5 15H7.508V15.008H7.5V15ZM7.5 17.25H7.508V17.258H7.5V17.25ZM14.25 12.75H14.258V12.758H14.25V12.75ZM14.25 15H14.258V15.008H14.25V15ZM14.25 17.25H14.258V17.258H14.25V17.25ZM16.5 12.75H16.508V12.758H16.5V12.75ZM16.5 15H16.508V15.008H16.5V15Z"
                  stroke="url(#paint0_linear_7_412)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_7_412"
                    x1="3"
                    y1="11.8615"
                    x2="21"
                    y2="11.8615"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7E90FE" />
                    <stop offset="1" stopColor="#9873FF" />
                  </linearGradient>
                </defs>
              </svg>
              Job Title: {job_title}
            </h2>
            <h2 className="font-bold mt-4 mb-4">Contact Information</h2>
            <hr className="mb-4 border-[2px] mx-3" />
            <h2 className="flex gap-1 items-center">
              <FiPhone></FiPhone>
              Phone: {contact_information.phone}
            </h2>
            <h2 className="flex items-center gap-1">
              <MdOutlineEmail></MdOutlineEmail> Email:{" "}
              {contact_information.email}
            </h2>
            <h2 className="flex  gap-1">
              <CiLocationOn className="text-2xl"></CiLocationOn>
              Address:{contact_information.address}
            </h2>
          </div>
          <div className="mt-9 left-[70%]   absolute bottom-[180px]">
            <Link>
              <button onClick={handleApplyJob} className=" btn w-[276px] text-white bg-[#7E90FE]">Apply Now</button>
            </Link>
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
