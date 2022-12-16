import React from 'react'
import { Input, MaskedInput, SelectPicker } from 'rsuite'

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
  {
    name: 'CEP',
    mask: [/\d/, /\d/, /\d/, /\d/, /\d/,'-', /\d/, /\d/, /\d/],
    placeholder: '00000-000'
  },
];

export default function Mascara () {
  const [value, setValue] = React.useState([]);
  const [showMask] = React.useState(false);
  const [guide] = React.useState(true);
  const [option, setOption] = React.useState(options[0]);

  return (
    <div style={{marginTop: '2rem'}}>
      <label>Campo normal</label>
      <Input
        value={value[0]}
        guide={guide}
        showMask={showMask}
        placeholder={''}
        placeholderChar={'_'}
        onChange={setValue[0]}
        />
      <br/>
      <label>Data</label>
      <MaskedInput
        value={value[1]}
        mask={options[0].mask}
        guide={guide}
        showMask={showMask}
        placeholder={options[0].placeholder}
        placeholderChar={'_'}
        onChange={setValue[1]}
      />
      <br/>
      <label>CPF</label>
      <MaskedInput
        value={value[2]}
        mask={options[1].mask}
        guide={guide}
        showMask={showMask}
        placeholder={options[1].placeholder}
        placeholderChar={'_'}
        onChange={setValue[2]}
      />
      <br/>
      <label>CNPJ</label>
      <MaskedInput
        value={value[3]}
        mask={options[2].mask}
        guide={guide}
        showMask={showMask}
        placeholder={options[2].placeholder}
        placeholderChar={'_'}
        onChange={setValue[3]}
        />
        <br/>
        <br/>
        <br/>
        <label><b>CAMPO PERSONALIZADO</b></label>
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
        <MaskedInput
          value={value[4]}
          mask={option.mask}
          guide={guide}
          showMask={showMask}
          placeholder={option.placeholder}
          placeholderChar={'_'}
          onChange={setValue[4]}
          />
    </div>
  );
};