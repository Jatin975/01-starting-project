import { Box, Modal } from '@mui/material'
import React from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    bgcolor: '#e4ddd4',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'black',
    borderRadius: "6px"
  };

export default function Dialog({ children, ...props }) {
    return (
        <Modal
            {...props}
        >
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
    )
}
