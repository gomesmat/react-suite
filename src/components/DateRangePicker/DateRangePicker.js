import { DateRangePicker } from "rsuite";
import * as dateFns from "date-fns";

const today = new Date();
const { combine, beforeToday, allowedMaxDays } = DateRangePicker;

const DateRangePickerCustomToolbar = (props) => (
  <div className="field">
    <br />
    <DateRangePicker
      showOneCalendar
      format="dd/MM/yyyy"
      placeholder="Selecione o período de exibição"
      disabledDate={combine(allowedMaxDays(7), beforeToday())}
      ranges={[
        {
          label: "Hoje",
          value: [today, today]
        },
        {
          label: "Amanhã",
          value: [dateFns.addDays(today, 1), dateFns.addDays(today, 1)]
        },
        {
          label: "D+6",
          value: [today, dateFns.addDays(today, 6)]
        }
      ]}
      onOk={(e) => {
        document.querySelector(
          "#date-picked"
        ).textContent = `Período selecionado: ${e}`;
      }}
    />
  </div>
);

export default function DateRangePickerApp() {
  return (
    <div className="daterangepicker">
      <DateRangePickerCustomToolbar>Teste</DateRangePickerCustomToolbar>
      <br />
      <div id="date-picked"></div>
    </div>
  );
}
