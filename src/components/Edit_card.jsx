import { DialogContent, DialogTitle, FormGroup, TextField } from "@mui/material";
import { forwardRef } from "react";
const Edit_Card = forwardRef((props, ref) => (
    <>
        <DialogTitle>Edit Form</DialogTitle>
        <DialogContent>
            <FormGroup sx={{ pt: "1rem", gap: '1rem' }} ref={ref}>
                <TextField
                    helperText="Video Name (required)"
                    label="Name"
                    required
                />
                <TextField
                    helperText="Video Link (required)"
                    label="Link"
                    required
                />
            </FormGroup>
        </DialogContent>
    </>
))

export default Edit_Card
