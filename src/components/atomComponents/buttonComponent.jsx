import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function ContainedButtons({color,size, name}) {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" size = {size} color = {color}>{name}</Button>
    </Stack>
  );
}