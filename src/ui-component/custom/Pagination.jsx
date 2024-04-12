import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import { gridSpacing } from 'store/constant';
import Pagination from '@mui/material/Pagination';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

PaginationCustom.propTypes = {
    totalEntries: PropTypes.number,
    currentPage: PropTypes.number,
    rowsPerPage: PropTypes.number,
    handleCurrentPage: PropTypes.func,
    handleRowsPerPage: PropTypes.func,
    rowOpts: PropTypes.array
};

function PaginationCustom({
    totalEntries = 0,
    rowOpts = [10, 20, 30],
    currentPage = 1,
    handleRowsPerPage,
    handleCurrentPage,
    rowsPerPage = 10,
    ...others
}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const rowsChange = (value) => {
        handleClose();
        handleRowsPerPage(value);
    };

    // useEffect(() => {
    //     if (Array.isArray(rowOpts) && rowOpts[0]) {
    //         handleRowsPerPage(rowOpts[0]);
    //     }
    // }, [rowOpts]);

    return (
        <Grid item xs={12} sx={{ p: others?.size === 'small' ? 1 : 3 }}>
            <Grid container justifyContent="space-between" spacing={gridSpacing}>
                <Grid item>
                    <Pagination
                        onChange={handleCurrentPage}
                        page={currentPage}
                        count={Math.floor(totalEntries / rowsPerPage) + 1}
                        color="primary"
                    />
                </Grid>
                <Grid item>
                    <Button
                        size="large"
                        sx={{ color: 'grey.900' }}
                        color="secondary"
                        endIcon={<ExpandMoreRoundedIcon />}
                        onClick={handleClick}
                    >
                        {rowsPerPage} Rows
                    </Button>
                    {anchorEl && (
                        <Menu
                            id="menu-user-list-style1"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            onChange={handleRowsPerPage}
                            variant="selectedMenu"
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            transformOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right'
                            }}
                        >
                            {rowOpts.map((opt, index) => (
                                <MenuItem onClick={() => rowsChange(opt)} key={`${opt} ${index}`}>
                                    {opt} Rows
                                </MenuItem>
                            ))}
                        </Menu>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default PaginationCustom;
