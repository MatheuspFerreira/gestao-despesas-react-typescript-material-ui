import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import ISelect from '../../interfaces/select';
import './mySelect.css';





export default function MySelect ({label, date, setDate, data}:ISelect) {

    const handleChange = async (event: SelectChangeEvent) => {
      await setDate(event.target.value as string);
    };

    return (
     
        <div>
            <InputLabel id="demo-simple-select-label">{label}</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={date}
                label="Age"
                onChange={handleChange}
                className="min-w-custom"
                
            >
                {
                    data.map((current:string, index:number) =>{
                        return (
                            <MenuItem key={index} value={current}>{current}</MenuItem>

                        );
                    })
                }
            </Select>     
        </div>

    );
}