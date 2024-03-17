import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import axiosInstance from '../axios/axiosConfig';

const useGetJobById = (jobId) => {
  const getJobById = async () => {
    const response = await axiosInstance.get(`/jobs/${jobId}`);
    const jobData = response.data.data;
    return jobData;
  };

  return useQuery(['job', jobId], getJobById, {
    onError: (error) => {
      console.error('Error fetching job:', error);
      toast.error('Error fetching job');
    }
  });
};

export default useGetJobById;
