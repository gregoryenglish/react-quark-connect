import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";

interface Rollover {
  id: string;
  appointmentAgent: string;
  client: string;
  description: string;
  source: string;
  queue: string;
  timestamp: Date;
  status: 'assigned' | 'unassigned';
  propensity: 'high' | 'medium' | 'low';
}

interface RolloverTableProps {
  rollovers: Rollover[];
}

export function RolloverTable({ rollovers }: RolloverTableProps) {
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
              <TableCell className="font-medium">
                {rollover.appointmentAgent || "Unassigned"}
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