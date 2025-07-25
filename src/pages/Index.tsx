import { useState, useMemo } from "react";
import { RolloverTable } from "@/components/RolloverTable";
import { mockRollovers } from "@/data/mockRollovers";
import { mockAgents, currentAgent } from "@/data/mockAgents";
import { Rollover } from "@/types/rollover";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, User } from "lucide-react";

const Index = () => {
  const [rollovers, setRollovers] = useState<Rollover[]>(mockRollovers);

  const summary = useMemo(() => {
    const totalRollovers = rollovers.length;
    const unassignedRollovers = rollovers.filter(r => r.status === 'unassigned').length;
    const now = new Date();
    const unassignedOver15Min = rollovers.filter(r => 
      r.status === 'unassigned' && 
      (now.getTime() - r.timestamp.getTime()) > 15 * 60 * 1000
    ).length;

    return {
      totalRollovers,
      unassignedRollovers,
      unassignedOver15Min
    };
  }, [rollovers]);

  const handleAssignAgent = (rolloverId: string, agentId: string) => {
    const agent = mockAgents.find(a => a.id === agentId);
    if (agent) {
      setRollovers(prev => prev.map(rollover => 
        rollover.id === rolloverId 
          ? { ...rollover, appointmentAgent: agent.name, status: 'assigned' as const }
          : rollover
      ));
    }
  };

  const handleAssignToMe = (rolloverId: string) => {
    setRollovers(prev => prev.map(rollover => 
      rollover.id === rolloverId 
        ? { ...rollover, appointmentAgent: currentAgent.name, status: 'assigned' as const }
        : rollover
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold">AdMAX</h1>
              <nav className="flex items-center space-x-6">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  Emails <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  Customers <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  Transactions <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  Employers <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Ready for calls
              </Badge>
              <Button variant="ghost" size="sm">
                <User className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-6">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-6">On demand</h2>
            <RolloverTable 
              rollovers={rollovers} 
              agents={mockAgents}
              currentAgent={currentAgent}
              onAssignAgent={handleAssignAgent}
              onAssignToMe={handleAssignToMe}
            />
          </div>
          
          {/* Right Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-card border rounded-lg p-4">
              <h3 className="font-semibold mb-4">Current queue</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Unassigned</span>
                  <span className="font-bold text-lg">{summary.unassignedRollovers}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Unassigned for &gt; 20 mins</span>
                  <span className="font-bold text-lg text-red-600">{summary.unassignedOver15Min}</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-3">Today's tally</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Submitted</span>
                    <span className="font-bold">{summary.totalRollovers}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">In progress</span>
                    <span className="font-bold">5</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Initiated</span>
                    <span className="font-bold">68</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Processed</span>
                    <span className="font-bold">12</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Avg wait time</span>
                  <span className="font-bold">6 mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
