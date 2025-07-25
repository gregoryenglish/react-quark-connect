import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow, 
  Paper, 
  TableContainer,
  Select,
  MenuItem,
  FormControl,
  Button,
  Box,
  Chip
} from '@mui/material';
import { format } from "date-fns";
import { Agent } from "@/data/mockAgents";
import { Rollover } from "@/types/rollover";

interface RolloverTableProps {
  rollovers: Rollover[];
  agents: Agent[];
  currentAgent: Agent;
  onAssignAgent: (rolloverId: string, agentId: string) => void;
  onAssignToMe: (rolloverId: string) => void;
}

export function RolloverTable({ rollovers, agents, currentAgent, onAssignAgent, onAssignToMe }: RolloverTableProps) {
  const getPropensityColor = (propensity: string) => {
    switch (propensity) {
      case 'high':
        return 'error';
      case 'medium':
        return 'warning';
      case 'low':
        return 'success';
      default:
        return 'default';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'assigned' ? 'success' : 'default';
  };

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Appointment Agent</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Source</TableCell>
              <TableCell>Queue</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Propensity</TableCell>
              <TableCell>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rollovers.map((rollover) => (
              <TableRow key={rollover.id}>
                <TableCell>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, minWidth: 150 }}>
                    <FormControl size="small" fullWidth>
                      <Select
                        value={rollover.appointmentAgent ? agents.find(a => a.name === rollover.appointmentAgent)?.id || "" : ""}
                        onChange={(e) => onAssignAgent(rollover.id, e.target.value)}
                        displayEmpty
                      >
                        <MenuItem value="">
                          <em>Select agent</em>
                        </MenuItem>
                        {agents.map((agent) => (
                          <MenuItem key={agent.id} value={agent.id}>
                            {agent.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <Button
                      variant="text"
                      size="small"
                      onClick={() => onAssignToMe(rollover.id)}
                      sx={{ fontSize: '0.75rem', p: 0, minHeight: 'auto' }}
                    >
                      Assign to me
                    </Button>
                  </Box>
                </TableCell>
                <TableCell>{rollover.client}</TableCell>
                <TableCell sx={{ maxWidth: 300, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {rollover.description}
                </TableCell>
                <TableCell>{rollover.source}</TableCell>
                <TableCell>{rollover.queue}</TableCell>
                <TableCell>
                  <Chip 
                    label={rollover.status} 
                    color={getStatusColor(rollover.status)} 
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip 
                    label={rollover.propensity} 
                    color={getPropensityColor(rollover.propensity)} 
                    size="small"
                  />
                </TableCell>
                <TableCell sx={{ color: 'text.secondary' }}>
                  {format(rollover.timestamp, "MMM dd, yyyy HH:mm")}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}