import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { MOCK_DATA } from '../mock';
import { IUserData } from '../../interfaces';

interface IAutocompleteUserForm {
  recipient: IUserData | null;
  setRecipient: (recipient: IUserData) => void;
}

export const AutocompleteUserForm = ({ recipient, setRecipient }: IAutocompleteUserForm) => {
  return (
    <Autocomplete
      disablePortal
      options={MOCK_DATA}
      value={recipient}
      onChange={(_, value) => setRecipient(value as IUserData)}
      getOptionLabel={(option) => option.recepient || ''}
      renderInput={(params) => <TextField {...params} label="Recepient" />}
    />
  );
};
