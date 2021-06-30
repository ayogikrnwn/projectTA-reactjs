import { TextField } from "@material-ui/core";

const InputForm = ({id, label, name,type,value,onChange}) => {
  
    return (
<div>
<TextField
            value={value}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id={id}
            label={label}
            name={name}
            autoComplete="email"
            onChange={onChange}
            autoFocus
          />
        
  </div>
    )
    
}

export default InputForm;