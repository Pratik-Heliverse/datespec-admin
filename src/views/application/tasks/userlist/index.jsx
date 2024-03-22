import React, { useState } from 'react';

// material-ui
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';

// project imports
import TasksUserList from './TasksUserList';
import MainCard from 'ui-component/cards/MainCard';
import { gridSpacing } from 'store/constant';
import { dispatch, useSelector } from 'store';
import { userActions } from 'store/slices/user';
// assets
import { IconSearch } from '@tabler/icons-react';
import PaginationCustom from 'ui-component/custom/Pagination';
import { usePagination } from 'hooks/usePagination';
import useDebounce from 'hooks/useDebounce';

// ==============================|| USER LIST STYLE 1 ||============================== //

const ListStylePage1 = () => {
    const [data, setData] = React.useState([]);
    const [search, setSearch] = useState();
    const { users, totalEntries, isLoading } = useSelector((state) => state.user);
    const { getUsers } = userActions;
    const { currentPage, handleCurrentPage, handleRowsPerPage, rowsPerPage } = usePagination();

    const debouncedSearch = useDebounce(search);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    React.useEffect(() => {
        setData(users);
    }, [users]);

    React.useEffect(() => {
        dispatch(getUsers({ rowsPerPage, currentPage, search }));
    }, [currentPage, rowsPerPage, debouncedSearch]);

    return (
        <MainCard
            title={
                <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                    <Grid item>
                        <Typography variant="h3">Tasks: User List</Typography>
                    </Grid>
                    <Grid item>
                        <OutlinedInput
                            id="input-search-list-style1"
                            placeholder="Search"
                            onChange={handleSearchChange}
                            startAdornment={
                                <InputAdornment position="start">
                                    <IconSearch stroke={1.5} size="16px" />
                                </InputAdornment>
                            }
                            size="small"
                        />
                    </Grid>
                </Grid>
            }
            content={false}
        >
            <TasksUserList data={data} isLoading={isLoading} rowsPerPage={rowsPerPage} />
            <PaginationCustom
                totalEntries={totalEntries}
                currentPage={currentPage}
                rowsPerPage={rowsPerPage}
                handleCurrentPage={handleCurrentPage}
                handleRowsPerPage={handleRowsPerPage}
            />
        </MainCard>
    );
};

export default ListStylePage1;
