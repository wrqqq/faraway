import * as React from "react"
import {styled, alpha} from "@mui/material/styles"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import InputBase from "@mui/material/InputBase"
import SearchIcon from "@mui/icons-material/Search"
import {Link} from "react-router-dom"
import {useAppDispatch} from "../hooks"
import {fetchCharacters} from "../redux/slices/charactersSlice"

const Search = styled("div")(({theme}) => ({
    "position": "relative",
    "borderRadius": theme.shape.borderRadius,
    "backgroundColor": alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    "marginLeft": 0,
    "width": "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}))

const SearchIconWrapper = styled("div")(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({theme}) => ({
    "color": "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            "width": "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}))

export default function Header() {
    const [search, setSearch] = React.useState("hulk")
    const dispatch = useAppDispatch()
    const searchHandler = (e: React.SyntheticEvent): void => {
        const target = e.target as HTMLInputElement
        setSearch(target.value)
        dispatch(fetchCharacters(target.value))
    }
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: "none", sm: "block"}}}>
                        <Link to="/" style={{color: "white", textDecoration: "none"}}>
                            Marvel Characters
                        </Link>
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            onChange={(e) => searchHandler(e)}
                            value={search}
                            inputProps={{"aria-label": "search"}}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
