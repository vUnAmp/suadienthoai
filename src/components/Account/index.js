import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import RecoverPassword from "./RecoverPassword"

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
  },
}))

export default function Account() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [acc, setAcc] = React.useState(true)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      {acc ? (
        <>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="simple tabs example"
              className="header-account__nav"
            >
              <Tab label="Anmeldung" {...a11yProps(0)} />
              <Tab label="Konto Anlegen" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <SignIn
              handleChange={() => setValue(1)}
              handleRecover={() => setAcc(!acc)}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SignUp handleChange={() => setValue(0)} />
          </TabPanel>{" "}
        </>
      ) : (
        <RecoverPassword handleRecover={() => setAcc(!acc)} />
      )}
    </div>
  )
}
