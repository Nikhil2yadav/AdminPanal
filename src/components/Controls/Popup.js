import React from 'react'
import {Dialog,DialogTitle,DialogContent,DialogActions} from "@mui/material";



export default function Popup(props) {
    const {title,children,openPopup,setOpenPopup}=props;

  return (
    
      <Dialog open={openPopup} maxWidth="md">
        <DialogTitle>{title}
        </DialogTitle>
        <DialogContent dividers >
            {children}
        </DialogContent>

      </Dialog>
    
  )
}
