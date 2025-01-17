import { TextField } from "@mui/material";

export default function TaskInput({label}:{label:string}) {
  return (
    <TextField  id="filled-basic" label={label} variant="filled" className="text-white " />
  )
}
