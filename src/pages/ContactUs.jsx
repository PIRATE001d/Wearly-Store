import { useState } from 'react';

import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  MenuItem,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  AccessTime as TimeIcon,
} from '@mui/icons-material';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    orderNumber: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const subjects = [
    { value: 'order', label: 'Order Status' },
    { value: 'returns', label: 'Returns & Refunds' },
    { value: 'product', label: 'Product Inquiry' },
    { value: 'other', label: 'Other' },
  ];

  const contactInfo = [
    {
      icon: <PhoneIcon color="primary" />,
      title: 'Phone',
      content: '+212 770 4930 32',
    },
    {
      icon: <EmailIcon color="primary" />,
      title: 'Email',
      content: 'support@WearlyShop.com',
    },
    {
      icon: <LocationIcon color="primary" />,
      title: 'Address',
      content: '123 WearlyShop Street, City, Country',
    },
    {
      icon: <TimeIcon color="primary" />,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
    },
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{ py: 8, bgcolor: '#ffffff', color: '#333333' }}
    >
      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} md={5}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Get in Touch
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              We&apos;re here to help! Fill out the form and our team will get
              back to you within 24 hours.
            </Typography>
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: 3,
              bgcolor: '#f9f9f9',
              color: '#333333',
              borderRadius: 2,
            }}
          >
            <List>
              {contactInfo.map((item, index) => (
                <ListItem key={index} sx={{ py: 2 }}>
                  <ListItemIcon sx={{ color: '#333333' }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1">{item.title}</Typography>
                    }
                    secondary={
                      <Typography color="text.secondary">
                        {item.content}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Card
            elevation={0}
            sx={{
              bgcolor: '#f9f9f9',
              color: '#333333',
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Send us a Message
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                Please fill in all the required fields
              </Typography>

              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="filled"
                      sx={{
                        bgcolor: '#ffffff',
                        borderRadius: 1,
                        input: { color: '#333333' },
                        label: { color: 'gray' },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="filled"
                      sx={{
                        bgcolor: '#ffffff',
                        borderRadius: 1,
                        input: { color: '#333333' },
                        label: { color: 'gray' },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Order Number (if applicable)"
                      name="orderNumber"
                      value={formData.orderNumber}
                      onChange={handleChange}
                      variant="filled"
                      sx={{
                        bgcolor: '#ffffff',
                        borderRadius: 1,
                        input: { color: '#333333' },
                        label: { color: 'gray' },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      select
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="filled"
                      sx={{
                        bgcolor: '#ffffff',
                        borderRadius: 1,
                        input: { color: '#333333' },
                        label: { color: 'gray' },
                      }}
                    >
                      {subjects.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      required
                      multiline
                      rows={4}
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="filled"
                      sx={{
                        bgcolor: '#ffffff',
                        borderRadius: 1,
                        input: { color: '#333333' },
                        label: { color: 'gray' },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      midwidth
                      sx={{
                        bgcolor: 'black',
                        color: '#ffffff',
                        '&:hover': {
                          bgcolor: '#555555',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
