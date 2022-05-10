import * as React from 'react';
import {Input, InputAdornment,makeStyles} from '@material-ui/core';


// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
// }));


export default function SearchAppBar(props) {
    const [search, setSearch] = React.useState('')
    const [focused, setFocused] = React.useState(false)
    // const classes = useStyles()
    const handleSearch = (e) => {
        setSearch(e ? e.target.value.toLowerCase() : '')
        props.onAction(e.target.value.toLowerCase())
    }
  return (
    <Input
    onFocus={() => {
        setFocused(true)
    }}
    onBlur={() => {
        setFocused(false)
    }}
    size="small"
    disableUnderline={!focused}
    classes={{
        // root: classes.inputRoot,
        // input: classes.inputInput,
    }}
    onChange={handleSearch}
    startAdornment={
        <InputAdornment style={{ fontSize: 17, pointerEvents: "none", cursor: 'pointer' }} position="start" >
            <i className='material-icons'>search</i>
        </InputAdornment>
    }
    value={search}
    placeholder={'Search'} />
  );
}
