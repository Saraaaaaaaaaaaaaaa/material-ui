import React from 'react'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import logo from 'assets/icons/logo.png'
import colors from 'utils/global'

const Header = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box borderRadius="25%" sx={{ width: '80%' }}>
        <AppBar position="static" style={{ marginTop: -20, marginBottom: 100, height: 150, border: 0, borderRadius: 15, boxShadow: '0 3px 5px 2px rgba(1, 1, 1, .3)', background: colors.purple }}>
          <Toolbar>
            <div style={{ marginTop: 15 }}>
              <img src={logo} alt="Deversity!" height="130" width="130"/>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header
