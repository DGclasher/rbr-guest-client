import { useCallback } from 'react';
import { useQuery} from 'react-query';
import axios from 'axios';
import axiosInstance from '../axios/axiosConfig';
const useGetJobs = () => {
  const getJobs = useCallback(async () => {
    console.log('Fetching all jobs');
    const response = await axiosInstance.get('/jobs/allJobs');
    const jobsData = response.data.data;
    console.log('Jobs:', jobsData);
    return jobsData;
  }, []);

  return useQuery('jobs', getJobs, {
    onError: (error) => {
      console.error('Error fetching jobs:', error);
    }
  });
};

export default useGetJobs;

