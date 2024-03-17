import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useQuery} from 'react-query';
import axiosInstance from '../axios/axiosConfig';

const useGetJobs = () => {
  const getJobs = useCallback(async () => {
    const response = await axiosInstance.get('/jobs/allJobs');
    const jobsData = response.data.data;
    return jobsData;
  }, []);

  return useQuery('jobs', getJobs, {
    onError: (error) => {
      console.error('Error fetching jobs:', error);
      toast.error('Error fetching jobs');
    }
  });
};

export default useGetJobs;

