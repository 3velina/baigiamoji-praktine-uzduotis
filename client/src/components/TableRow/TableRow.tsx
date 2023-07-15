import { useState } from 'react';
import useDeleteUser from '../../hooks/useDeleteUser';
import { useEditUser } from '../../hooks/useEditUser';
import { IUser } from '../../types/user';
import AlertModal from '../AlertModal';
import Button from '../Button';
import {
  StyledButtonContainer,
  StyledTableRow,
  StyledTableRowInputs,
} from './style';
import Input from '../Input';
import { DeleteConfirmation } from './style';

const TableRow = ({ _id, firstName, lastName, email, age }: IUser) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [isBeingDeleted, setIsBeingDeleted] = useState(false);

  const [newFirstName, setNewFirstName] = useState(firstName);
  const [newLastName, setNewLastName] = useState(lastName);
  const [newEmail, setNewEmail] = useState(email);
  const [newAge, setNewAge] = useState(age);

  const deleteUserMutation = useDeleteUser();
  const editUserMutation = useEditUser();

  const handleDeleteUser = () => {
    if (isBeingDeleted) {
      if (_id) deleteUserMutation.mutate(_id);
      setIsOpen(true);
      setIsBeingDeleted(false);
    } else {
      setIsBeingDeleted(true);
    }
  };

  const handleEditUser = () => {
    setIsBeingEdited(true);
  };

  const handleSaveChange = () => {
    const dataToBeEdited: IUser = {
      _id: _id,
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
      age: newAge,
    };

    setIsBeingDeleted(false);

    editUserMutation.mutate(dataToBeEdited);
    setIsBeingEdited(false);
  };

  const handleCancellation = () => {
    if (isBeingEdited) {
      setIsBeingEdited(false);
      setNewFirstName(firstName);
      setNewLastName(lastName);
      setNewEmail(email);
      setNewAge(age);
    }

    if (isBeingDeleted) {
      setIsBeingDeleted(false);
    }
  };

  return (
    <>
      <StyledTableRow isBeingDeleted={isBeingDeleted}>
        {isBeingEdited ? (
          <StyledTableRowInputs>
            <Input
              type='text'
              id='firstName'
              value={newFirstName}
              onChange={(e) => setNewFirstName(e.target.value)}
            />
            <Input
              type='text'
              id='lastName'
              value={newLastName}
              onChange={(e) => setNewLastName(e.target.value)}
            />
            <Input
              type='email'
              id='email'
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
            <Input
              type='number'
              id='age'
              value={newAge}
              onChange={(e) => setNewAge(e.target.value)}
            />
          </StyledTableRowInputs>
        ) : (
          <>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <p>{age}</p>
          </>
        )}
        {isBeingDeleted && (
          <DeleteConfirmation>Ar tikrai norite ištrinti?</DeleteConfirmation>
        )}
        <StyledButtonContainer>
          {isBeingEdited ? (
            <>
              <Button
                color='#083e8a'
                bgColor='#FFF'
                text='Išsaugoti'
                onClick={handleSaveChange}
              />
              <Button
                color='#083e8a'
                bgColor='#FFF'
                text='Atšaukti'
                onClick={handleCancellation}
              />
            </>
          ) : isBeingDeleted ? (
            <>
              <Button
                color='#083e8a'
                bgColor='#FFF'
                text='Taip'
                onClick={handleDeleteUser}
              />
              <Button
                color='#083e8a'
                bgColor='#FFF'
                text='Atšaukti'
                onClick={handleCancellation}
              />
            </>
          ) : (
            <>
              <Button
                color='#083e8a'
                bgColor='#FFF'
                text='Redaguoti'
                onClick={handleEditUser}
              />
              <Button
                color='#083e8a'
                bgColor='#FFF'
                text='Ištrinti'
                onClick={handleDeleteUser}
              />
            </>
          )}
        </StyledButtonContainer>
      </StyledTableRow>
      {isOpen && (
        <AlertModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          text='Vartotojas ištrintas sėkmingai!'
        />
      )}
    </>
  );
};

export default TableRow;
