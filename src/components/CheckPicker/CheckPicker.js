import { CheckPicker, SelectPicker } from "rsuite";

import { dataOps, dataNomes, dataDistribuir } from "./data.json";

export default function CheckPickerSelect() {
  return (
    <div className="checkPicker">
      <br />
      <SelectPicker
        placeholder=" "
        searchable={false}
        cleanable={false}
        label="Distribuir por"
        data={dataDistribuir}
        style={{ width: 300 }}
      />
      <br />
      <br />
      <CheckPicker
        placeholder="Selecione"
        label="Filtrar por cliente"
        data={dataNomes}
        style={{ width: 300 }}
      />
      <br />
      <br />
      <SelectPicker
        label="Operação"
        searchable={false}
        placeholder="Selecione"
        data={dataOps}
        style={{ width: 300 }}
      />
    </div>
  );
}
