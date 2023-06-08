import {useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const AsideSelects = ({title, state, setState, array}) => {

    const handleChange = (event) => {
        setState(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }} className="catalog__aside-slect">
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state}
                    label={title}
                    onChange={handleChange}
                >
                    {
                        array.map(item => (
                            <MenuItem key={item} value={item}>
                                {
                                item === 'asc' ? 'по возрастанию цены' : item === 'desc' ? 'по убыванию цены' : item === 'rate' ? 'по популярности' : item
                                }
                            </MenuItem>
                        ))
                    }
    
                    <MenuItem value={''}>По умолчанию</MenuItem>

                </Select>
            </FormControl>
        </Box>    );
};

export default AsideSelects;