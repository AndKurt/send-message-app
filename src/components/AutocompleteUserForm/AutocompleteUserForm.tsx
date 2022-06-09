import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { IUser } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getUsersAsync } from '../../redux/actions/usersAction';

interface IAutocompleteUserForm {
  recipient: IUser | null;
  setRecipient: (recipient: IUser) => void;
}

export const AutocompleteUserForm = ({ recipient, setRecipient }: IAutocompleteUserForm) => {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);

  return (
    <Autocomplete
      disablePortal
      options={users}
      value={recipient}
      onChange={(_, value) => setRecipient(value as IUser)}
      getOptionLabel={(option) => option.name || ''}
      renderInput={(params) => <TextField {...params} label="Recepient" />}
    />
  );
};
