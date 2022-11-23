import React from 'react';
import { Tooltip, Whisper } from 'rsuite';

import './tooltip.css';

const data = {
  saldo: 700000,
  total: 1000000,
  liberado: 300000,
  agendado: 100000,
  executado: 200000,
};

const tooltip = (
  <Tooltip visible className="tooltip-texto">
    Liberado: {`${data.liberado.toLocaleString('pt-BR')} TON`}
    <br />
    Agendado: {`${data.agendado.toLocaleString('pt-BR')} TON`}
    <br />
    Executado: {`${data.executado.toLocaleString('pt-BR')} TON`}
  </Tooltip>
);

export default function TerminalSaldoDia() {
  return (
    <div className="barraSaldo">
      <Whisper
        trigger="hover"
        placement="bottomEnd"
        controlId={`control-id-bottomEnd`}
        speaker={tooltip}
        enterable
      >
        <main>
          <span className="saldoBar-left">Saldo</span>
          <span className="saldoBar-right">
            <span className="saldoBar-values">
              {data.saldo.toLocaleString('pt-BR')}/
              {data.total.toLocaleString('pt-BR')} TON
            </span>
            <span className="material-symbols-outlined">arrow_drop_down</span>
          </span>
        </main>
      </Whisper>
    </div>
  );
}
