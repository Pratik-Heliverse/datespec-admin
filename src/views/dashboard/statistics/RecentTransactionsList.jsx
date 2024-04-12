// material-ui
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import Chip from 'ui-component/extended/Chip';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { CSVExport } from 'views/forms/tables/TableExports';
import { header } from 'views/forms/tables/TableBasic';
import PaginationCustom from 'ui-component/custom/Pagination';

// styles
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-of-type td, &:last-of-type th': {
        border: 0
    }
}));

// eslint-disable-next-line react/prop-types
const GetChip = ({ status }) => {
    return (
        <Chip
            label={status}
            variant="outlined"
            chipcolor={status === 'COMPLETED' ? 'success' : status === 'FAILED' ? 'error' : 'secondary'}
        />
    );
};

const rows = [
    {
        name: 'John Doe',
        email: 'john@example.com',
        plan: '6 Month',
        transactionId: 'TXN123456789',
        datetime: 'April 12, 2024 08:30 AM',
        status: 'COMPLETED'
    },
    {
        name: 'Jane Smith',
        email: 'jane@example.com',
        plan: '12 Month',
        transactionId: 'TXN987654321',
        datetime: 'April 11, 2024 02:45 PM',
        status: 'PENDING'
    },
    {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        plan: '6 Month',
        transactionId: 'TXN456789012',
        datetime: 'April 10, 2024 11:20 AM',
        status: 'FAILED'
    },
    // Add more transactions here
    {
        name: 'Michael Brown',
        email: 'michael@example.com',
        plan: '12 Month',
        transactionId: 'TXN789012345',
        datetime: 'April 9, 2024 09:15 AM',
        status: 'COMPLETED'
    },
    {
        name: 'Emily Davis',
        email: 'emily@example.com',
        plan: '6 Month',
        transactionId: 'TXN012345678',
        datetime: 'April 8, 2024 04:55 PM',
        status: 'PENDING'
    },
    {
        name: 'David Wilson',
        email: 'david@example.com',
        plan: '12 Month',
        transactionId: 'TXN345678901',
        datetime: 'April 7, 2024 01:10 PM',
        status: 'FAILED'
    },
    {
        name: 'Emma Martinez',
        email: 'emma@example.com',
        plan: '6 Month',
        transactionId: 'TXN678901234',
        datetime: 'April 6, 2024 10:25 AM',
        status: 'COMPLETED'
    },
    {
        name: 'James Anderson',
        email: 'james@example.com',
        plan: '12 Month',
        transactionId: 'TXN901234567',
        datetime: 'April 5, 2024 05:40 PM',
        status: 'PENDING'
    },
    {
        name: 'Sophia Thomas',
        email: 'sophia@example.com',
        plan: '6 Month',
        transactionId: 'TXN234567890',
        datetime: 'April 4, 2024 12:50 PM',
        status: 'FAILED'
    },
    {
        name: 'William Garcia',
        email: 'william@example.com',
        plan: '12 Month',
        transactionId: 'TXN567890123',
        datetime: 'April 3, 2024 02:30 PM',
        status: 'COMPLETED'
    }
    // Add more transactions here
];
// ==============================|| TABLE - CUSTOMIZED ||============================== //

export default function RecentTransactionsList() {
    return (
        <MainCard
            content={false}
            title="Recent Transactions"
            secondary={
                <Stack direction="row" spacing={2} alignItems="center">
                    <CSVExport data={rows} filename={'table-customized.csv'} header={header} />
                    <SecondaryAction link="https://next.material-ui.com/components/tables/" />
                </Stack>
            }
        >
            <TableContainer>
                <Table sx={{ minWidth: 320 }} aria-label="recent transactions">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell sx={{ pl: 3 }}>#</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="left">Email</StyledTableCell>
                            <StyledTableCell align="left">Plan</StyledTableCell>
                            <StyledTableCell align="left">Transaction Id</StyledTableCell>
                            <StyledTableCell align="left">Date-time</StyledTableCell>
                            <StyledTableCell sx={{ pr: 3 }} align="left">
                                Status
                            </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <StyledTableRow hover key={row.name}>
                                <StyledTableCell sx={{ pl: 3 }} component="th" scope="row">
                                    {index + 1}.
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.name}</StyledTableCell>
                                <StyledTableCell align="left">{row.email}</StyledTableCell>
                                <StyledTableCell align="left">{row.plan}</StyledTableCell>
                                <StyledTableCell align="left">{row.transactionId}</StyledTableCell>
                                <StyledTableCell align="left">{row.datetime}</StyledTableCell>
                                <StyledTableCell sx={{ pr: 3 }} align="left">
                                    <GetChip status={row.status} />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
                <PaginationCustom size={'small'} />
            </TableContainer>
        </MainCard>
    );
}
