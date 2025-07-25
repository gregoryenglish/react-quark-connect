import { useState, useMemo } from "react";
import { 
  Box, 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Button, 
  Chip,
  Card,
  CardContent
} from '@mui/material';
import { ExpandMore, Person } from '@mui/icons-material';
import { RolloverTable } from "@/components/RolloverTable";
import { mockRollovers } from "@/data/mockRollovers";
import { mockAgents, currentAgent } from "@/data/mockAgents";
import { Rollover } from "@/types/rollover";

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
    <Box sx={{ minHeight: '100vh' }}>
      {/* Top Navigation */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="h1" sx={{ flexGrow: 1 }}>
            AdMAX
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button 
              variant="text" 
              endIcon={<ExpandMore />}
              sx={{ color: 'text.secondary' }}
            >
              Emails
            </Button>
            <Button 
              variant="text" 
              endIcon={<ExpandMore />}
              sx={{ color: 'text.secondary' }}
            >
              Customers
            </Button>
            <Button 
              variant="text" 
              endIcon={<ExpandMore />}
              sx={{ color: 'text.secondary' }}
            >
              Transactions
            </Button>
            <Button 
              variant="text" 
              endIcon={<ExpandMore />}
              sx={{ color: 'text.secondary' }}
            >
              Employers
            </Button>
            <Chip 
              label="Ready for calls" 
              color="success" 
              variant="outlined"
              size="small"
            />
            <Button variant="text" size="small">
              <Person />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth={false} sx={{ py: 3 }}>
        <Box sx={{ display: 'flex', gap: 3 }}>
          {/* Main Content */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              On demand
            </Typography>
            <RolloverTable 
              rollovers={rollovers} 
              agents={mockAgents}
              currentAgent={currentAgent}
              onAssignAgent={handleAssignAgent}
              onAssignToMe={handleAssignToMe}
            />
          </Box>
          
          {/* Right Sidebar */}
          <Box sx={{ width: 256, flexShrink: 0 }}>
            <Card>
              <CardContent sx={{ p: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Current queue
                </Typography>
                
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      Unassigned
                    </Typography>
                    <Typography variant="h5" fontWeight="bold">
                      {summary.unassignedRollovers}
                    </Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      Unassigned for &gt; 20 mins
                    </Typography>
                    <Typography variant="h5" fontWeight="bold" color="error.main">
                      {summary.unassignedOver15Min}
                    </Typography>
                  </Box>
                </Box>
                
                <Box sx={{ mt: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Today's tally
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        Submitted
                      </Typography>
                      <Typography variant="body1" fontWeight="bold">
                        {summary.totalRollovers}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        In progress
                      </Typography>
                      <Typography variant="body1" fontWeight="bold">
                        5
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        Initiated
                      </Typography>
                      <Typography variant="body1" fontWeight="bold">
                        68
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="body2" color="text.secondary">
                        Processed
                      </Typography>
                      <Typography variant="body1" fontWeight="bold">
                        12
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                
                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      Avg wait time
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                      6 mins
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
