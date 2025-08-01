import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import {
  Typography, 
  Box, 
  Paper, 
  Button, 
  Select, 
  MenuItem, 
  TextField
} from '@mui/material';

import { ThemeProvider } from './ThemeProvider';

export default {
  title: 'Theme/Theme',
  component: ThemeProvider,
} satisfies Meta<typeof ThemeProvider>;

export const Template: StoryObj<typeof ThemeProvider> = {
  render: () => (
  <ThemeProvider>
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>Theme Showcase</Typography>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Color Palette</Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Box sx={{ bgcolor: 'primary.main', p: 2, color: 'primary.contrastText' }}>Primary</Box>
          <Box sx={{ bgcolor: 'secondary.main', p: 2, color: 'secondary.contrastText' }}>Secondary</Box>
          <Box sx={{ bgcolor: 'custom.main', p: 2, color: 'custom.contrastText' }}>Custom</Box>
        </Box>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Buttons</Typography>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" sx={{ bgcolor: 'custom.main', color: 'custom.contrastText' }}>Custom</Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button variant="outlined" color="primary">Outlined</Button>
          <Button variant="text" color="primary">Text</Button>
        </Box>
      </Paper>

      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>Inputs</Typography>
        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', maxWidth: 300 }}>
          <TextField label="Outlined Input" variant="outlined" />
          <Select value="" label="Select" variant="outlined">
            <MenuItem value="">None</MenuItem>
            <MenuItem value={1}>Option 1</MenuItem>
            <MenuItem value={2}>Option 2</MenuItem>
          </Select>
        </Box>
      </Paper>
    </Box>
  </ThemeProvider>
  )
};