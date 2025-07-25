import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  const getPropensityVariant = (propensity: string) => {
    switch (propensity) {
      case 'high':
        return 'destructive';
      case 'medium':
        return 'default';
      case 'low':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const getStatusVariant = (status: string) => {
    return status === 'assigned' ? 'default' : 'secondary';
  };

  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Appointment Agent</TableHead>
            <TableHead>Client</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Source</TableHead>
            <TableHead>Queue</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Propensity</TableHead>
            <TableHead>Timestamp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rollovers.map((rollover) => (
            <TableRow key={rollover.id}>
            <TableCell>
              <div className="space-y-2">
                <Select 
                  value={rollover.appointmentAgent ? agents.find(a => a.name === rollover.appointmentAgent)?.id || "" : ""} 
                  onValueChange={(agentId) => onAssignAgent(rollover.id, agentId)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select agent" />
                  </SelectTrigger>
                  <SelectContent>
                    {agents.map((agent) => (
                      <SelectItem key={agent.id} value={agent.id}>
                        {agent.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button 
                  variant="link" 
                  size="sm" 
                  className="h-auto p-0 text-xs"
                  onClick={() => onAssignToMe(rollover.id)}
                >
                  Assign to me
                </Button>
              </div>
            </TableCell>
              <TableCell>{rollover.client}</TableCell>
              <TableCell className="max-w-md truncate">{rollover.description}</TableCell>
              <TableCell>{rollover.source}</TableCell>
              <TableCell>{rollover.queue}</TableCell>
              <TableCell>
                <Badge variant={getStatusVariant(rollover.status)}>
                  {rollover.status}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={getPropensityVariant(rollover.propensity)}>
                  {rollover.propensity}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {format(rollover.timestamp, "MMM dd, yyyy HH:mm")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}