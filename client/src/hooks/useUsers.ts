import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { IUser } from '../types/user';
import { useState, useEffect } from 'react';

const fetchUsers = async (searchTerm: string) => {
  const response = await axios.get(`http://localhost:8001/api/users`);

  const filteredData = response.data.filter(
    (user: IUser) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(user.lastName).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(user.age).toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(user.email).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return filteredData;
};

const useUsers = (searchTerm: string) => {
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  const queryInfo = useQuery<IUser[], Error>(
    ['users', debouncedSearchTerm],
    () => fetchUsers(debouncedSearchTerm)
  );

  if (queryInfo.error) {
    console.error(queryInfo.error);
  }

  return {
    users: queryInfo.data,
    ...queryInfo,
  };
};

export default useUsers;
