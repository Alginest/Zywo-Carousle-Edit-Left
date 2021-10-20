import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Box } from '@mui/system'

const useStyles = makeStyles((theme) => ({}))

const Info = () => {
  const classes = useStyles()
  return <Box className={classes.aboutHero}>blah</Box>
}

export default Info
