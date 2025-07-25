import { useState } from "react";
import { 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Button,
  Box
} from '@mui/material';

interface RolloverFiltersProps {
  onApplyFilters?: (filters: any) => void;
}

export function RolloverFilters({ onApplyFilters }: RolloverFiltersProps) {
  const [filters, setFilters] = useState({
    deadline: "",
    agent: "",
    queue: "",
    source: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    origin: "",
    destination: "",
    employer: "",
    originType: "",
    propensity: "",
    affiliate: ""
  });

  const handleApplyFilters = () => {
    onApplyFilters?.(filters);
  };

  return (
    <Card sx={{ height: 'fit-content' }}>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Filters
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Deadline Date"
            type="date"
            value={filters.deadline}
            onChange={(e) => setFilters({ ...filters, deadline: e.target.value })}
            InputLabelProps={{ shrink: true }}
            fullWidth
            size="small"
          />

          <TextField
            label="Agent"
            placeholder="Agent name"
            value={filters.agent}
            onChange={(e) => setFilters({ ...filters, agent: e.target.value })}
            fullWidth
            size="small"
          />

          <TextField
            label="Queue"
            placeholder="Queue name"
            value={filters.queue}
            onChange={(e) => setFilters({ ...filters, queue: e.target.value })}
            fullWidth
            size="small"
          />

          <TextField
            label="Source"
            placeholder="Source"
            value={filters.source}
            onChange={(e) => setFilters({ ...filters, source: e.target.value })}
            fullWidth
            size="small"
          />

          <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
              label="First Name"
              placeholder="First name"
              value={filters.firstName}
              onChange={(e) => setFilters({ ...filters, firstName: e.target.value })}
              fullWidth
              size="small"
            />
            <TextField
              label="Last Name"
              placeholder="Last name"
              value={filters.lastName}
              onChange={(e) => setFilters({ ...filters, lastName: e.target.value })}
              fullWidth
              size="small"
            />
          </Box>

          <TextField
            label="Email"
            type="email"
            placeholder="Email"
            value={filters.email}
            onChange={(e) => setFilters({ ...filters, email: e.target.value })}
            fullWidth
            size="small"
          />

          <TextField
            label="Phone"
            placeholder="Phone number"
            value={filters.phone}
            onChange={(e) => setFilters({ ...filters, phone: e.target.value })}
            fullWidth
            size="small"
          />

          <TextField
            label="Origin"
            placeholder="Origin"
            value={filters.origin}
            onChange={(e) => setFilters({ ...filters, origin: e.target.value })}
            fullWidth
            size="small"
          />

          <TextField
            label="Destination"
            placeholder="Destination"
            value={filters.destination}
            onChange={(e) => setFilters({ ...filters, destination: e.target.value })}
            fullWidth
            size="small"
          />

          <TextField
            label="Employer"
            placeholder="Employer"
            value={filters.employer}
            onChange={(e) => setFilters({ ...filters, employer: e.target.value })}
            fullWidth
            size="small"
          />

          <FormControl fullWidth size="small">
            <InputLabel>Origin Type</InputLabel>
            <Select
              value={filters.originType}
              label="Origin Type"
              onChange={(e) => setFilters({ ...filters, originType: e.target.value })}
            >
              <MenuItem value="401k">401k</MenuItem>
              <MenuItem value="403b">403b</MenuItem>
              <MenuItem value="IRA">IRA</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth size="small">
            <InputLabel>Propensity</InputLabel>
            <Select
              value={filters.propensity}
              label="Propensity"
              onChange={(e) => setFilters({ ...filters, propensity: e.target.value })}
            >
              <MenuItem value="high">High</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="low">Low</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Affiliate"
            placeholder="Affiliate"
            value={filters.affiliate}
            onChange={(e) => setFilters({ ...filters, affiliate: e.target.value })}
            fullWidth
            size="small"
          />

          <Button onClick={handleApplyFilters} variant="contained" fullWidth>
            Apply Filters
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}