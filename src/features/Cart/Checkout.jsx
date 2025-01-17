import { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Divider,
  Box,
  Card,

} from '@mui/material';
import { CreditCard, LocalShipping, LockOutlined } from '@mui/icons-material';
import { useAtom } from 'jotai';
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form';

import { cartItemAtom, subtotalAtom } from '../../hooks/UseCart';

const Checkout = () => {
  const [selectedPayment, setSelectedPayment] = useState('credit');
  const [cartItems] = useAtom(cartItemAtom);
  const [subtotal] = useAtom(subtotalAtom);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const handleApplyCoupon = () => {
    if (couponCode === 'FIT40') {
      setDiscount(10); // 10% discount
      toast.success('Coupon applied successfully!');
    } else {
      setDiscount(0);
      toast.error('Invalid coupon code');
    }
  };

  const orderSummary = {
    subtotal: subtotal,
    shipping: 0,
    discount: discount,
    total: subtotal - (subtotal * discount) / 100 + 0, // Apply discount and shipping
    items: cartItems,
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  const SubmitTheForm = (data) => {
    const orderData = {
      ...data,
      orderSummary,
    };
    console.log(orderData);
    // Submit to your backend or API here
  };

  return (
    <form onSubmit={handleSubmit(SubmitTheForm)}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ mb: 4, fontWeight: 700 }}
        >
          Checkout - Almost There!
        </Typography>

        <Grid container spacing={4}>
          {/* Main Checkout Form */}
          <Grid item xs={12} md={8}>
            {/* Shipping Information */}
            <Paper sx={{ p: 4, mb: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <LocalShipping sx={{ mr: 2, color: 'primary.main' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Shipping Information
                </Typography>
              </Box>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    placeholder="John"
                    {...register('firstName', { required: 'First Name is required' })}
                    error={!!errors.firstName}
                    helperText={errors.firstName && errors.firstName.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    placeholder="Doe"
                    {...register('lastName', { required: 'Last Name is required' })}
                    error={!!errors.lastName}
                    helperText={errors.lastName && errors.lastName.message}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address"
                    variant="outlined"
                    placeholder="123 Main St"
                    {...register('address', { required: 'Address is required' })}
                    error={!!errors.address}
                    helperText={errors.address && errors.address.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="City"
                    variant="outlined"
                    placeholder="New York"
                    {...register('city', { required: 'City is required' })}
                    error={!!errors.city}
                    helperText={errors.city && errors.city.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="ZIP Code"
                    variant="outlined"
                    placeholder="10001"
                    {...register('zipCode', { required: 'ZIP Code is required' })}
                    error={!!errors.zipCode}
                    helperText={errors.zipCode && errors.zipCode.message}
                  />
                </Grid>
              </Grid>
            </Paper>

            {/* Payment Method */}
            <Paper sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <CreditCard sx={{ mr: 2, color: 'primary.main' }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  Payment Method
                </Typography>
              </Box>

              <RadioGroup
                value={selectedPayment}
                onChange={(e) => setSelectedPayment(e.target.value)}
              >
                <FormControlLabel
                  value="credit"
                  control={<Radio />}
                  label="Credit Card"
                />
              </RadioGroup>

              {selectedPayment === 'credit' && (
                <Box sx={{ mt: 3 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Card Number"
                        variant="outlined"
                        placeholder="4242 4242 4242 4242"
                        {...register('cardNumber', { required: 'Card Number is required' })}
                        error={!!errors.cardNumber}
                        helperText={errors.cardNumber && errors.cardNumber.message}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Expiry Date"
                        variant="outlined"
                        placeholder="MM/YY"
                        {...register('expiryDate', { required: 'Expiry Date is required' })}
                        error={!!errors.expiryDate}
                        helperText={errors.expiryDate && errors.expiryDate.message}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="CVV"
                        variant="outlined"
                        placeholder="123"
                        {...register('cvv', { required: 'CVV is required' })}
                        error={!!errors.cvv}
                        helperText={errors.cvv && errors.cvv.message}
                      />
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Paper>
          </Grid>

          {/* Order Summary */}
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Order Summary
              </Typography>

              {orderSummary.items.map((item, index) => (
                <Box
                  key={index}
                  sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}
                >
                  <Typography variant="body2">
                    {item.quantity}x {item.title}
                  </Typography>
                  <Typography variant="body2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </Typography>
                </Box>
              ))}

              <Divider sx={{ my: 2 }} />

              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}
                >
                  <Typography variant="body2">Subtotal</Typography>
                  <Typography variant="body2">
                    ${orderSummary.subtotal.toFixed(2)}
                  </Typography>
                </Box>
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}
                >
                  <Typography variant="body2">Shipping</Typography>
                  <Typography variant="body2">
                    ${orderSummary.shipping.toFixed(2)}
                  </Typography>
                </Box>

                {/* Coupon Input */}
                <Box sx={{ mt: 2 }}>
                  <TextField
                    fullWidth
                    label="Coupon Code"
                    variant="outlined"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter coupon code"
                  />

                  <Button
                    variant="contained"
                    onClick={handleApplyCoupon}
                    sx={{ mt: 2, bgcolor: 'black', color: 'white' }}
                  >
                    Apply Coupon
                  </Button>
                </Box>
              </Box>

              <Box
                sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  Total
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                  ${orderSummary.total.toFixed(2)}
                </Typography>
              </Box>

              <Button
                variant="contained"
                fullWidth
                size="large"
                startIcon={<LockOutlined />}
                type="submit"
                sx={{
                  mt: 3,
                  bgcolor: 'black', // Set background color to black
                  color: 'white', // Set text color to white for contrast
                  '&:hover': {
                    bgcolor: 'gray', // Change to gray on hover for effect
                  },
                }}
              >
                Place Order
              </Button>

              <Typography
                variant="caption"
                display="block"
                textAlign="center"
                sx={{ mt: 2 }}
                color="text.secondary"
              >
                Your payment information is encrypted and secure
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default Checkout;
