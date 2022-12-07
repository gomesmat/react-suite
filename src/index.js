import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import CheckPicker from './components/CheckPicker/CheckPicker.js';
import DateRangePicker from './components/DateRangePicker/DateRangePicker.js';
import Cascader from './components/Cascader/Cascader.js';
import Tooltip from './components/Tooltip/Tooltip.js';

import { CustomProvider } from 'rsuite';
import ptBR from 'rsuite/locales/pt_BR'; // mudar para pt_BR

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <CustomProvider locale={ptBR}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="checkpicker" element={<CheckPicker />} />
          <Route path="daterangepicker" element={<DateRangePicker />} />
          <Route path="cascader" element={<Cascader />} />
          {/* <Route path="tooltip" element={<Tooltip />} /> */}
          <Route path="*" element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CustomProvider>
);
