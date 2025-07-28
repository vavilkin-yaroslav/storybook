import React, { useState } from 'react';
import { Box, Typography, Paper, SelectChangeEvent } from '@mui/material';

import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { Checkbox } from '../Checkbox/Checkbox';
import { COUNTRY_OPTIONS } from '../../mocks/Form';

import { IFormData, TSelectEvent } from './interfaces';

export const Form = () => {
  const [formData, setFormData] = useState<IFormData>({
    name: '',
    email: '',
    country: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    country: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSelectChange = (e: TSelectEvent) => {
    const { value } = e.target;
    setFormData(prev => ({
      ...prev,
      country: value
    }));
  };

  const validateForm = () => {
    const newErrors = {
      name: formData.name.trim() === '',
      email: !/^\S+@\S+\.\S+$/.test(formData.email),
      country: formData.country === '',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Форма успешно отправлена!');
    } else {
      alert('Ошибки валидации!');
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 600, margin: '0 auto' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Регистрационная форма
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
      >
        <Input
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          helperText={errors.name ? "Поле обязательно для заполнения" : ""}
          fullWidth
        />
        <Input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          helperText={errors.email ? "Введите корректный email" : ""}
          fullWidth
        />
        <Select
          options={COUNTRY_OPTIONS}
          value={formData.country}
          onChange={handleSelectChange}
          label="Страна"
          error={errors.country}
          helperText={errors.country ? "Выберите страну" : ""}
          fullWidth
        />
        <Checkbox
          name="agreeTerms"
          label="Я согласен с условиями использования"
          checked={formData.agreeTerms}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          text="Отправить"
          variant="contained"
          fullWidth
          size="large"
        />
      </Box>
    </Paper>
  );
};
