import React from 'react'
import { Autocomplete, TextField } from '@mui/material';

export const MyAutocomplete = () => {
  return (
    <div>
        <div>MyAutocomplete</div>
        <div>
            <Autocomplete
            options={["青森県","宮城県","秋田県", "山形県"]}
            renderInput={(params)=><TextField {...params} />}
            />
        </div>
    </div>
  )
}
