import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RolloverSummaryProps {
  totalRollovers: number;
  unassignedRollovers: number;
  unassignedOver15Min: number;
}

export function RolloverSummary({ totalRollovers, unassignedRollovers, unassignedOver15Min }: RolloverSummaryProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Rollovers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalRollovers}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Unassigned
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-amber-600">{unassignedRollovers}</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Unassigned &gt;15 Min
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-destructive">{unassignedOver15Min}</div>
        </CardContent>
      </Card>
    </div>
  );
}