import { Card, CardContent, Typography, Box } from '@mui/material';

interface RolloverSummaryProps {
  totalRollovers: number;
  unassignedRollovers: number;
  unassignedOver15Min: number;
}

export function RolloverSummary({ totalRollovers, unassignedRollovers, unassignedOver15Min }: RolloverSummaryProps) {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2, mb: 3 }}>
      <Card sx={{ p: 2 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Total Rollovers
        </Typography>
        <Typography variant="h4" component="div" fontWeight="bold">
          {totalRollovers}
        </Typography>
      </Card>

      <Card sx={{ p: 2 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Unassigned
        </Typography>
        <Typography variant="h4" component="div" fontWeight="bold" color="warning.main">
          {unassignedRollovers}
        </Typography>
      </Card>

      <Card sx={{ p: 2 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Unassigned &gt;15 Min
        </Typography>
        <Typography variant="h4" component="div" fontWeight="bold" color="error.main">
          {unassignedOver15Min}
        </Typography>
      </Card>
    </Box>
  );
}