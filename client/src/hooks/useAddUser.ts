import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';
import { IUser } from '../types/user';

export const useAddUser = (): UseMutationResult<any, Error, IUser> => {
  const queryClient = useQueryClient();

  return useMutation(
    (user: IUser) => axios.post(`http://localhost:8001/api/users`, user),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['users']);
      },
    }
  );
};
