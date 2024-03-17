import React, { useState, useEffect } from "react";
import JobCard from "../Components/JobCard";
import useGetJobs from "../hooks/useGetJobs";
import CircularProgress from "@mui/material/CircularProgress";
import { GrPowerReset } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import WhyJoin from "../Components/WhyJoin";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import ScrollToTop from "../utils/ScrollToTop";

const Careers = () => {
  const { data: jobs, isLoading, isError } = useGetJobs();
  const [filterData, setFilterData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchType, setSearchType] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState("Full Time");

  const typeOptions = ["Full Time", "Internship"];

  useEffect(() => {
    if (jobs) {
      setFilterData(jobs);
    }
  }, [jobs]);

  const filterJobs = () => {
    if (jobs) {
      const filteredJobs = jobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          job.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
          job.type.toLowerCase().includes(searchType.toLowerCase())
      );
      setFilterData(filteredJobs);
    }
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSearchLocation("");
    setSearchType("");
    setFilterData(jobs);
  };

  const handleApply = (_id) => {
    console.log("Applying for job with ID:", _id);
    window.open(`/job/${_id}`, "_blank");
  };

  const handlePageChange = (selectedPage) => {
    setPage(selectedPage.selected);
  };

  return (
    <div className="font-main flex flex-col relative w-full h-full items-center overflow-x-hidden mt-20">
      {/* Banner section */}
      <div className="bg-gray-200 flex relative w-full h-72 banner text-center overflow-x-hidden">
        <img
          src="/career.jpg"
          className="object-cover h-72 w-full filter brightness-50 saturate-150   z-0"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <p className="text-2xl md:text-3xl lg:text-4xl w-full font-semibold">
            Become part of our team!
          </p>
          <p className="text-xl hidden md:block">
            Browse through our careers to be a part of Raudra Technologies
          </p>
        </div>
      </div>

      {/* Job openings section */}
      <div className="w-full  py-8 px-1 flex flex-col justify-center items-center">
        <p className="text-3xl font-semibold py-8 flex items-center gap-4">
          <PiSuitcaseSimpleBold />
          Open Job Positions
        </p>
        {/* Search form */}
        <div className="flex flex-row flex-wrap px-4 md:flex-row justify-center bg-gray-300 rounded-lg  p-8  w-screen md:w-1/2 gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
            <input
              type="text"
              placeholder="Title"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 border  border-gray-400 rounded-md w-full md:w-1/3 md:rounded-l-full"
            />
            <input
              type="text"
              placeholder="Location"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="p-2 border  border-gray-400 w-full md:w-1/3 md:rounded-none rounded-md  "
            />
            <select
              name=""
              id=""
              value={searchType}
              className="p-[9.5px] w-full md:w-1/3 border border-gray-400 md:rounded-none rounded-md"
              onChange={(e) => setSearchType(e.target.value)}
            >
              <option value="select type" className="text-gray-500 p-2">
                select type
              </option>
              {typeOptions.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <div className="flex">
              <button
                onClick={filterJobs}
                className="bg-blue-600  hover:bg-blue-700 text-white text-center px-4 py-2 md:rounded-none rounded-l-full flex items-center justify-center gap-2"
              >
                <p>Search</p> <IoSearch />
              </button>

              <button
                onClick={resetFilters}
                className="bg-zinc-700 hover:bg-zinc-900 text-white p-3 md:rounded-r-full rounded-r-full flex items-center justify-center gap-2"
              >
                <span className="md:hidden">Reset</span>
                <GrPowerReset />
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center pb-16 gap-4"></div>
        {/* Job data table */}
        {isLoading ? (
          <CircularProgress />
        ) : isError ? (
          <p>Error fetching data</p>
        ) : filterData.length > 0 ? (
          <div className="w-full md:w-1/2  px-2 ">
            {filterData.map((job) => (
              <JobCard
                key={job._id}
                title={job.title}
                openings={job.openings}
                location={job.location}
                date={job.postedOn}
                type={job.type}
                apply={() => handleApply(job._id)}
              />
            ))}
          </div>
        ) : (
          <p className="text-lg bg-neutral-200 p-4 rounded">
            No matching positions found.
          </p>
        )}
      </div>

      <WhyJoin />
      <ScrollToTop />
    </div>
  );
};

export default Careers;
