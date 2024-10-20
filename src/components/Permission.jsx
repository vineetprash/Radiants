import React, { useState } from 'react';
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Button,
  Typography,
  Tabs,
  Tab,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Alert,
  Snackbar,
  Paper,
  Divider,
  Chip,
  ListSubheader,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';

const EventPermissionComponent = () => {
  // Expanded venues with more details
  const venues = {
    HALLS: [
      { id: 'seminar', name: 'Seminar Hall' , capacity: 200 },
      { id: 'Lrdc', name: 'LRDC Hall', capacity: 200 },
      { id: 'AUDI', name: 'Auditorium', capacity: 500}
    ],
    CLASSROOMS: [
      { id: 'cr-101', name: 'Classroom 6101', capacity: 90  },
      { id: 'cr-102', name: 'Classroom 6102', capacity: 90  },
      { id: 'cr-103', name: 'Classroom 6103', capacity: 90  },
      { id: 'cr-104', name: 'Classroom 6104', capacity: 90  },
      { id: 'cr-201', name: 'Classroom 6201', capacity: 90  },
      { id: 'cr-202', name: 'Classroom 6202', capacity: 90  },
      { id: 'cr-203', name: 'Classroom 6203', capacity: 90  },
      { id: 'cr-204', name: 'Classroom 6204', capacity: 90  }
    ],
    LABS: [
      { id: 'lab-0', name: 'Labs 6009,6010 ', capacity: 40},
      { id: 'lab-10', name: 'Labs 6105,6106 ', capacity: 40},
      { id: 'lab-11', name: 'Labs 6115,6116 ', capacity: 40},
      { id: 'lab-20', name: 'Labs 6207,6207 ', capacity: 40 },
      { id: 'lab-21', name: 'Labs 6220,6221 ', capacity: 40 }
    ],
    MEETING_ROOMS: [
      { id: 'conf-1', name: 'HOD Conference Room 1', capacity: 20  },
      { id: 'conf-2', name: 'Conference Room 2', capacity: 15}
    ]
  };

  // Expanded resources with categories
  const resources = {
    TECHNICAL: [
      { id: 'projector', name: 'Projector', available: 10 },
      { id: 'computer', name: 'Computer', available: 15 },
      { id: 'microphone', name: 'Wireless Microphone', available: 8 },
      { id: 'mic', name: 'MIC', available: 4 }
    ],
    FURNITURE: [
      { id: 'chairs', name: 'Extra Chairs', available: 100 },
      { id: 'tables', name: 'Tables', available: 20 },
      { id: 'podium', name: 'Podium', available: 3 }
    ],
    MISC: [
      { id: 'whiteboard', name: 'Portable Whiteboard', available: 5 },
      { id: 'extension', name: 'Extension Cords', available: 15 },
      { id: 'water', name: 'Water Bottles', available: 30 }
    ]
  };

  const departments = {
    ASH: 'Applied Sciences and Humanities',
    CS: 'Computer Engineering',
    AIML: 'Computer Science & Engineering (AI and ML)',
    IT: 'Information Technology',
    EE: 'Electrical Engineering',
    ME: 'Mechanical Engineering',
    CE: 'Civil Engineering'
  };

  const organizers = {
    ACM: 'ACM',
    GDSC: 'Google Developer Student Club',
    MLSC: 'Machine Learning and Data Science Club',
    ACMW: 'ACM-W',
    ISTE: 'ISTE'
  };

  const [formData, setFormData] = useState({
    eventName: '',
    description: '',
    organizer: '',
    department: '',
    startDate: '',
    endDate: '',
    startTime: '09:00',
    endTime: '17:00',
    venue: '',
    selectedResources: {}
  });

  const [events, setEvents] = useState([]);
  const [tabValue, setTabValue] = useState(0);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleResourceToggle = (resourceId) => {
    setFormData(prev => ({
      ...prev,
      selectedResources: {
        ...prev.selectedResources,
        [resourceId]: !prev.selectedResources[resourceId]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = { ...formData, status: 'pending', id: Date.now() };
    
    // Check for conflicts
    const conflict = events.find(event => 
      event.venue === formData.venue &&
      event.startDate === formData.startDate &&
      ((formData.startTime >= event.startTime && formData.startTime <= event.endTime) ||
       (formData.endTime >= event.startTime && formData.endTime <= event.endTime))
    );

    if (conflict) {
      setSnackbarMessage('This venue is already booked for the selected time slot.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
      return;
    }

    setEvents(prev => [...prev, newEvent]);
    setSnackbarMessage('Event request submitted successfully.');
    setSnackbarSeverity('success');
    setOpenSnackbar(true);
    
    // Reset form
    setFormData({
      eventName: '',
      description: '',
      organizer: '',
      department: '',
      startDate: '',
      endDate: '',
      startTime: '09:00',
      endTime: '17:00',
      venue: '',
      selectedResources: {}
    });
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
          <Tab label="Create Event" />
          <Tab label="View Events" />
        </Tabs>
      </Box>

      {tabValue === 0 && (
        <Card>
          <CardHeader 
            title="Create New Event"
            subheader="Fill in the details to request a new event booking"
          />
          <CardContent>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                {/* Basic Information */}
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Event Name"
                    value={formData.eventName}
                    onChange={(e) => handleInputChange('eventName', e.target.value)}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Department</InputLabel>
                    <Select
                      value={formData.department}
                      onChange={(e) => handleInputChange('department', e.target.value)}
                      label="Department"
                    >
                      {Object.entries(departments).map(([key, value]) => (
                        <MenuItem key={key} value={key}>{value}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    label="Description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Organizer</InputLabel>
                    <Select
                      value={formData.organizer}
                      onChange={(e) => handleInputChange('organizer', e.target.value)}
                      label="Organizer"
                    >
                      {Object.entries(organizers).map(([key, value]) => (
                        <MenuItem key={key} value={key}>{value}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                  <FormControl fullWidth required>
                    <InputLabel>Venue</InputLabel>
                    <Select
                      value={formData.venue}
                      onChange={(e) => handleInputChange('venue', e.target.value)}
                      label="Venue"
                    >
                      {Object.entries(venues).map(([category, venueList]) => [
                        <ListSubheader key={category}>
                          {category.replace('_', ' ')}
                        </ListSubheader>,
                        ...venueList.map(venue => (
                          <MenuItem key={venue.id} value={venue.id}>
                            {venue.name} ({venue.capacity} seats)
                          </MenuItem>
                        ))
                      ])}
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={6} md={3}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Start Date"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </Grid>

                <Grid item xs={6} md={3}>
                  <TextField
                    fullWidth
                    type="time"
                    label="Start Time"
                    value={formData.startTime}
                    onChange={(e) => handleInputChange('startTime', e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </Grid>

                <Grid item xs={6} md={3}>
                  <TextField
                    fullWidth
                    type="date"
                    label="End Date"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </Grid>

                <Grid item xs={6} md={3}>
                  <TextField
                    fullWidth
                    type="time"
                    label="End Time"
                    value={formData.endTime}
                    onChange={(e) => handleInputChange('endTime', e.target.value)}
                    InputLabelProps={{ shrink: true }}
                    required
                  />
                </Grid>

                {/* Resources Section */}
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    Additional Resources
                  </Typography>
                  {Object.entries(resources).map(([category, resourceList]) => (
                    <Accordion key={category}>
                      <AccordionSummary>
                        <Typography>{category.replace('_', ' ')}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <FormGroup>
                          <Grid container spacing={2}>
                            {resourceList.map(resource => (
                              <Grid item xs={12} sm={6} md={4} key={resource.id}>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={formData.selectedResources[resource.id] || false}
                                      onChange={() => handleResourceToggle(resource.id)}
                                    />
                                  }
                                  label={`${resource.name} (${resource.available} available)`}
                                />
                              </Grid>
                            ))}
                          </Grid>
                        </FormGroup>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Grid>

                <Grid item xs={12}>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    fullWidth
                  >
                    Submit Event Request
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      )}

      {tabValue === 1 && (
        <Box>
          {events.map((event, index) => (
            <Paper key={index} sx={{ p: 2, mb: 2 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography variant="h6">{event.eventName}</Typography>
                  <Chip 
                    label={event.status} 
                    color={event.status === 'pending' ? 'warning' : 'success'}
                    size="small"
                    sx={{ ml: 1 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    Date: {event.startDate} to {event.endDate}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Time: {event.startTime} - {event.endTime}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body2" color="text.secondary">
                    Venue: {venues[Object.keys(venues).find(category => 
                      venues[category].some(v => v.id === event.venue)
                    )]?.find(v => v.id === event.venue)?.name || event.venue}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Organizer: {organizers[event.organizer]}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          ))}
          {events.length === 0 && (
            <Typography variant="body1" color="text.secondary" align="center">
              No events submitted yet.
            </Typography>
          )}
        </Box>
      )}

      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={6000} 
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert 
          onClose={() => setOpenSnackbar(false)} 
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default EventPermissionComponent;