import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <div
          style={{
            display: "flex",
            padding: "10px",
          }}
        >
          <Typography variant="h6">Explore new places</Typography>
          <Autocomplete
            onLoad={props.onLoad}
            onPlaceChanged={props.onPlaceChanged}
          >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Autocomplete>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
