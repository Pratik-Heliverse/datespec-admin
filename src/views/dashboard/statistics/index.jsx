import React from 'react';
import { Grid, Box, Stack } from '@mui/material';
import NewUsersChart from './NewUsersChart';
import { gridSpacing } from 'store/constant';

import AccountCircleTwoTone from '@mui/icons-material/AccountCircleTwoTone';
import SellTwoToneIcon from '@mui/icons-material/SellTwoTone';
import WorkspacePremiumTwoToneIcon from '@mui/icons-material/WorkspacePremiumTwoTone';
import ErrorTwoToneIcon from '@mui/icons-material/ErrorTwoTone';
import { AndroidOutlined, Apple, SupervisedUserCircleTwoTone, LockClockOutlined } from '@mui/icons-material';
import UserSIgninSourcesChart from './UsersSignUpSourcesChart';
import RecentlySignedupUsersList from './RecentlySignedupUsersList';
import RevenueCard from 'ui-component/cards/RevenueCard';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import NewSubscriptionsChart from './NewSubscriptionsChart';
import TotalRevenueGeneratedChart from './TotalRevenueGeneratedChart';
import { totalRevenueGeneratedData } from './chart-data/totalRevenueGenerated.data';
import ReportCard from 'ui-component/cards/ReportCard';
// import PaymentMethodDistributionChart from './PaymentMethodsDistributionChart';
import SideIconCard from 'ui-component/cards/SideIconCard';
import RecentTransactionsList from './RecentTransactionsList';

function Statistics() {
    return (
        <Box>
            <Stack gap={gridSpacing}>
                <Grid container spacing={gridSpacing} xs={12} md={12}>
                    <Grid item xs={12} md={9}>
                        <NewUsersChart />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Stack gap={gridSpacing}>
                            <ReportCard
                                primary="15000"
                                secondary="Total Users"
                                color="secondary.main"
                                iconPrimary={SupervisedUserCircleTwoTone}
                            />
                            <ReportCard primary="10000" secondary="Android Users" color="primary.main" iconPrimary={AndroidOutlined} />
                            <ReportCard primary="5000" secondary="iOS Users" color="orange.main" iconPrimary={Apple} />
                            <ReportCard
                                primary="15.53"
                                secondary="Avg. Session Duration (in Mins)"
                                color="success.main"
                                iconPrimary={LockClockOutlined}
                            />
                        </Stack>
                    </Grid>
                </Grid>
                <Stack gap={gridSpacing}>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} lg={4} md={12}>
                            <RevenueCard
                                primary="Subscriptions"
                                secondary="3452"
                                content="Total active subscriptions"
                                iconPrimary={MonetizationOnTwoToneIcon}
                                color="secondary.main"
                            />
                        </Grid>
                        <Grid item xs={12} lg={4} sm={6}>
                            <RevenueCard
                                primary="12 Months"
                                secondary="486"
                                content="Users with 12-Month Subscription"
                                iconPrimary={AccountCircleTwoTone}
                                color="primary.dark"
                            />
                        </Grid>
                        <Grid item xs={12} lg={4} sm={6}>
                            <RevenueCard
                                primary="6 Month"
                                secondary="1641"
                                content="Users with 6-month subscription"
                                iconPrimary={LocalMallTwoToneIcon}
                                color="orange.dark"
                            />
                        </Grid>
                    </Grid>
                </Stack>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={4}>
                        {/* <NewSubscriptionsChart /> */}
                        {/* <PaymentMethodDistributionChart /> */}
                        <UserSIgninSourcesChart />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <TotalRevenueGeneratedChart chartData={totalRevenueGeneratedData} />
                    </Grid>
                </Grid>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <NewSubscriptionsChart />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item xs={12}>
                                <SideIconCard
                                    iconPrimary={SellTwoToneIcon}
                                    primary="563"
                                    secondary="Total accounts with"
                                    secondarySub="free trial"
                                    color="warning.dark"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <SideIconCard
                                    iconPrimary={ErrorTwoToneIcon}
                                    primary="245"
                                    secondary="Total"
                                    secondarySub="expired free trials"
                                    color="error.dark"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <SideIconCard
                                    iconPrimary={WorkspacePremiumTwoToneIcon}
                                    primary="330"
                                    secondary="Free trials"
                                    secondarySub="converted to premium"
                                    color="success.dark"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box>
                    <RecentTransactionsList />
                </Box>
                <Box>
                    <RecentlySignedupUsersList />
                </Box>
            </Stack>
        </Box>
    );
}

export default Statistics;
