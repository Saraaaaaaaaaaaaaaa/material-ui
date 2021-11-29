import React from 'react'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import logo from 'assets/icons/logo.png'
import colors from 'utils/global'
import { makeStyles } from '@mui/styles'

import './Header.css'

const useStyles = makeStyles({
  appBar: {
    marginTop: -20,
    marginBottom: 50,
    height: 150,
    border: 0,
    borderRadius: 15,
    boxShadow: '0 3px 5px 2px rgba(1, 1, 1, .3)'
  }
})

const Header = () => {
  const classes = useStyles()

  return (
    <div className="headerContainer" >
      <Box borderRadius="25%" sx={{ width: '80%' }}>
        <AppBar position="static" className={classes.appBar} style={{ background: colors.purple }}>
          <Toolbar>
            <div style={{ marginTop: 15 }}>
              <img src={logo} alt="Deversity!" height="130" width="130" />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  )
}

export default Header
