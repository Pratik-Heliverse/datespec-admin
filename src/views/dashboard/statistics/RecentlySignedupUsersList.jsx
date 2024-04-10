// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { CSVExport } from 'views/forms/tables/TableExports';

// table data

const rows = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        contact: '123-456-7890',
        subscriptionType: 'Premium',
        signupMethod: 'Email'
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        contact: '987-654-3210',
        subscriptionType: 'Basic',
        signupMethod: 'Google'
    },
    {
        id: 3,
        name: 'Alice Johnson',
        email: 'alice@example.com',
        contact: '456-789-0123',
        subscriptionType: 'Premium',
        signupMethod: 'Facebook'
    },
    {
        id: 4,
        name: 'Michael Brown',
        email: 'michael@example.com',
        contact: '789-012-3456',
        subscriptionType: 'Basic',
        signupMethod: 'Email'
    },
    {
        id: 5,
        name: 'Emily Davis',
        email: 'emily@example.com',
        contact: '012-345-6789',
        subscriptionType: 'Premium',
        signupMethod: 'Google'
    },
    {
        id: 6,
        name: 'David Wilson',
        email: 'david@example.com',
        contact: '345-678-9012',
        subscriptionType: 'Basic',
        signupMethod: 'Facebook'
    },
    {
        id: 7,
        name: 'Emma Martinez',
        email: 'emma@example.com',
        contact: '678-901-2345',
        subscriptionType: 'Premium',
        signupMethod: 'Email'
    },
    {
        id: 8,
        name: 'James Anderson',
        email: 'james@example.com',
        contact: '901-234-5678',
        subscriptionType: 'Basic',
        signupMethod: 'Google'
    },
    {
        id: 9,
        name: 'Sophia Thomas',
        email: 'sophia@example.com',
        contact: '234-567-8901',
        subscriptionType: 'Premium',
        signupMethod: 'Facebook'
    },
    {
        id: 10,
        name: 'William Garcia',
        email: 'william@example.com',
        contact: '567-890-1234',
        subscriptionType: 'Basic',
        signupMethod: 'Email'
    }
];

export const header = [
    { label: '#', key: 1 },
    { label: 'Name', key: 2 },
    { label: 'Email', key: 3 },
    { label: 'Contact', key: 4 },
    { label: 'Subscription', key: 5 },
    { label: 'Signup Method', key: 6 }
];
// ==============================|| TABLE - BASIC ||============================== //

export default function RecentlySignedupUsersList() {
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <MainCard
                    content={false}
                    title="Recently Onboared Userlist"
                    secondary={
                        <Stack direction="row" spacing={2} alignItems="center">
                            <CSVExport data={rows} filename={'basic-table.csv'} header={header} />
                            <SecondaryAction link="https://next.material-ui.com/components/tables/" />
                        </Stack>
                    }
                >
                    {/* table */}
                    <TableContainer>
                        <Table sx={{ minWidth: 350 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ px: 4 }}>
                                    {header.map((ele, index) => (
                                        <TableCell key={ele.key + '' + index}>{ele.label}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow hover key={row.id}>
                                        <TableCell sx={{ pl: 3 }} component="th" scope="row">
                                            {row.id}.
                                        </TableCell>
                                        <TableCell align="left">{row.name}</TableCell>
                                        <TableCell align="left">{row.email}</TableCell>
                                        <TableCell align="left">{row.contact}</TableCell>
                                        <TableCell align="left">{row.subscriptionType}</TableCell>
                                        <TableCell align="left">{row.signupMethod}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </MainCard>
            </Grid>
        </Grid>
    );
}
