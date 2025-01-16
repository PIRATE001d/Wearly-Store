import { useState } from 'react';
import { Tabs, Tab, Box, Card, CardContent, Button, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';

const SizeGuide = () => {
  const [unit, setUnit] = useState('cm');
  const [tabValue, setTabValue] = useState(0);

  const mensData = {
    cm: [
      { size: 'XS', chest: '86-91', waist: '71-76', hip: '86-91', inseam: '81' },
      { size: 'S', chest: '91-97', waist: '76-81', hip: '91-97', inseam: '81' },
      { size: 'M', chest: '97-102', waist: '81-86', hip: '97-102', inseam: '82' },
      { size: 'L', chest: '102-107', waist: '86-91', hip: '102-107', inseam: '82' },
      { size: 'XL', chest: '107-112', waist: '91-97', hip: '107-112', inseam: '83' },
      { size: 'XXL', chest: '112-117', waist: '97-102', hip: '112-117', inseam: '83' }
    ],
    inches: [
      { size: 'XS', chest: '34-36', waist: '28-30', hip: '34-36', inseam: '32' },
      { size: 'S', chest: '36-38', waist: '30-32', hip: '36-38', inseam: '32' },
      { size: 'M', chest: '38-40', waist: '32-34', hip: '38-40', inseam: '32' },
      { size: 'L', chest: '40-42', waist: '34-36', hip: '40-42', inseam: '32' },
      { size: 'XL', chest: '42-44', waist: '36-38', hip: '42-44', inseam: '33' },
      { size: 'XXL', chest: '44-46', waist: '38-40', hip: '44-46', inseam: '33' }
    ]
  };

  const womensData = {
    cm: [
      { size: 'XS', bust: '81-84', waist: '61-64', hip: '89-92', inseam: '76' },
      { size: 'S', bust: '84-89', waist: '64-69', hip: '92-97', inseam: '76' },
      { size: 'M', bust: '89-94', waist: '69-74', hip: '97-102', inseam: '77' },
      { size: 'L', bust: '94-99', waist: '74-79', hip: '102-107', inseam: '77' },
      { size: 'XL', bust: '99-104', waist: '79-84', hip: '107-112', inseam: '78' },
      { size: 'XXL', bust: '104-109', waist: '84-89', hip: '112-117', inseam: '78' }
    ],
    inches: [
      { size: 'XS', bust: '32-33', waist: '24-25', hip: '35-36', inseam: '30' },
      { size: 'S', bust: '33-35', waist: '25-27', hip: '36-38', inseam: '30' },
      { size: 'M', bust: '35-37', waist: '27-29', hip: '38-40', inseam: '30' },
      { size: 'L', bust: '37-39', waist: '29-31', hip: '40-42', inseam: '30' },
      { size: 'XL', bust: '39-41', waist: '31-33', hip: '42-44', inseam: '31' },
      { size: 'XXL', bust: '41-43', waist: '33-35', hip: '44-46', inseam: '31' }
    ]
  };

  const MeasurementGuide = () => (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        How to Measure
      </Typography>
      <Typography variant="body2">
        <strong>Chest/Bust:</strong> Measure around the fullest part of your chest/bust, keeping the tape horizontal.
      </Typography>
      <Typography variant="body2">
        <strong>Waist:</strong> Measure around your natural waistline, keeping the tape comfortably loose.
      </Typography>
      <Typography variant="body2">
        <strong>Hip:</strong> Measure around the fullest part of your hips.
      </Typography>
      <Typography variant="body2">
        <strong>Inseam:</strong> Measure from the crotch to the bottom of the ankle.
      </Typography>
    </Box>
  );

  const SizeTable = ({ data }) => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Size</TableCell>
          <TableCell>{data === mensData ? 'Chest' : 'Bust'}</TableCell>
          <TableCell>Waist</TableCell>
          <TableCell>Hip</TableCell>
          <TableCell>Inseam</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data[unit].map((row) => (
          <TableRow key={row.size}>
            <TableCell>{row.size}</TableCell>
            <TableCell>{data === mensData ? row.chest : row.bust}</TableCell>
            <TableCell>{row.waist}</TableCell>
            <TableCell>{row.hip}</TableCell>
            <TableCell>{row.inseam}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <Box p={4} >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4">Size Guide</Typography>
        <Box>
          <Button
            variant={unit === 'cm' ? 'contained' : 'outlined'}
            onClick={() => setUnit('cm')}
          >
            CM
          </Button>
          <Button
            variant={unit === 'inches' ? 'contained' : 'outlined'}
            onClick={() => setUnit('inches')}
            sx={{ ml: 2 }}
          >
            Inches
          </Button>
        </Box>
      </Box>
      <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)}>
        <Tab label="Men's Sizes" />
        <Tab label="Women's Sizes" />
      </Tabs>
      <Card>
        <CardContent>
          {tabValue === 0 && (
            <>
              <SizeTable data={mensData} />
              <MeasurementGuide />
            </>
          )}
          {tabValue === 1 && (
            <>
              <SizeTable data={womensData} />
              <MeasurementGuide />
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default SizeGuide;
