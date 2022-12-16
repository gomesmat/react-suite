import React from 'react'
import { MaskedInput, SelectPicker } from 'rsuite'

const options = [
  {
    name: 'Data',
    mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    placeholder: '25/09/1970'
  },
  {
    name: 'CPF',
    mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
    placeholder: '000.000.000-00'
  },
  {
    name: 'CNPJ',
    mask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/],
    placeholder: '00.000.000/0000-00'
  },
  {
    name: 'Telefone',
    mask: [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/],
    placeholder: '00.000.000/0000-00'
  },
];

export default function Mascara () {
  const [value, setValue] = React.useState('');
  const [showMask] = React.useState(false);
  const [guide] = React.useState(true);
  const [option, setOption] = React.useState(options[0]);

  return (
    <div style={{marginTop: '2rem'}}>
      <label>Data</label>
      <MaskedInput
        value={value}
        mask={options[0].mask}
        guide={guide}
        showMask={showMask}
        placeholder={options[0].placeholder}
        placeholderChar={'_'}
        onChange={setValue}
      />
      <br/>
      <label>CPF</label>
      <MaskedInput
        value={value}
        mask={options[1].mask}
        guide={guide}
        showMask={showMask}
        placeholder={options[1].placeholder}
        placeholderChar={'_'}
        onChange={setValue}
      />
      <br/>
      <label>CNPJ</label>
      <MaskedInput
        value={value}
        mask={options[2].mask}
        guide={guide}
        showMask={showMask}
        placeholder={options[2].placeholder}
        placeholderChar={'_'}
        onChange={setValue}
        />
        <br/>
        <br/>
        <br/>
        <label>Tipo de campo</label>
        <SelectPicker
          defaultValue={option.name}
          cleanable={false}
          searchable={false}
          data={options}
          labelKey="name"
          valueKey="name"
          onSelect={(_v, item) => {
            setOption(item);
            setValue('');
          }}
          style={{ marginLeft: 10, width: 200 }}
        />
        <br/>
        <br/>
        <label>CAMPO PERSONALIZADO</label>
        <MaskedInput
          value={value}
          mask={option.mask}
          guide={guide}
          showMask={showMask}
          placeholder={option.placeholder}
          placeholderChar={'_'}
          onChange={setValue}
          />
    </div>
  );
};