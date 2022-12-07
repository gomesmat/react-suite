import React from 'react';
import { Cascader, MultiCascader } from 'rsuite';

const dataForm = [
  {
    label: 'BID',
    value: 'bid',
    children: [
      {
        label: 'Nova negociação avulsa',
        value: 'bid-negociacaoAvulsa',
      },
      {
        label: 'Nova negociação por demanda',
        value: 'bid-negociacaoDemanda',
      },
      {
        label: 'Nova negociação simplificada',
        value: 'bid-negociacaoSimplificada',
      },
    ],
  },
  {
    label: 'Cargas',
    value: 'cargas',
    children: [
      {
        label: 'Fechamento de acordo',
        value: 'cargas-fechamentoAcordo',
      },
      {
        label: 'Lote Múltiplas Entregas',
        value: 'cargas-novoLoteViagem',
      },
      {
        label: 'Lote por viagem',
        value: 'cargas-novoLoteVolume',
      },
      {
        label: 'Lote por volume',
        value: 'cargas-novoLoteVolume',
      },
      {
        label: 'Reservar motorista',
        value: 'cargas-reservarMotorista',
      },
    ],
  },
  {
    label: 'Plataforma',
    value: 'plataforma',
    children: [
      {
        label: 'Credenciamento de motoristas - Dados pessoais',
        value: 'plataforma-credenciamentoMotoristaDadosPessoais',
      },
      {
        label: 'Cadastro de transportadores',
        value: 'plataforma-cadastroTransportadores',
      },
      {
        label: 'Revisão de motoristas - ANTT de tração e placas',
        value: 'plataforma-revisaoMotoristaANTT',
      },
      {
        label: 'Revisão de motoristas - CNH',
        value: 'plataforma-revisaoMotoristaCNH',
      },
      {
        label: 'Revisão de motoristas - Documentos de tração e placas',
        value: 'plataforma-revisaoMotoristaDocs',
      },
      {
        label: 'Revisão de motoristas - Proprietário PF',
        value: 'plataforma-revisaoMotoristaProprietarioPF',
      },
      {
        label: 'Revisão de motoristas - Proprietário PJ',
        value: 'plataforma-revisaoMotoristaProprietarioPJ',
      },
    ],
  },
  {
    label: 'TSM',
    value: 'tsm',
    children: [
      {
        label: 'Aprovação de agendamento',
        value: 'tsm-aprovacaoAgendamento',
      },
      {
        label: 'Cadastro de agendamento',
        value: 'tsm-cadastroAgendamento',
      },
      {
        label: 'Eventos',
        value: 'tsm-eventos',
      },
      {
        label: 'Visualização de agendamento',
        value: 'tsm-visualizacaoAgendamento',
      },
    ],
  },
];

const dataFormTSM = [
  {
    label: 'TSM',
    value: 'tsm',
    children: [
      {
        label: 'Agendamento',
        value: 'tsm-agendamento',
      },
      {
        label: 'Eventos da máquina de estados',
        value: 'tsm-eventos',
      },
    ],
  },
];

const dataOp = [
  {
    label: '001 - Ponta Grossa',
    value: '1',
    children: [
      {
        label: 'Carga',
        value: '1carga',
      },
      {
        label: 'Descarga',
        value: '1descarga',
      },
      {
        label: 'Carga FDS',
        value: '1cargafds',
      },
      {
        label: 'Descarga FDS',
        value: '1descargafds',
      },
    ],
  },
  {
    label: '002 - Curitiba',
    value: '2',
    children: [
      {
        label: 'Carga',
        value: '2carga',
      },
      {
        label: 'Descarga',
        value: '2descarga',
      },
      {
        label: 'Carga FDS',
        value: '2cargafds',
      },
      {
        label: 'Descarga FDS',
        value: '2descargafds',
      },
    ],
  },
  {
    label: '003 - Maringá',
    value: '3',
    children: [
      {
        label: 'Carga',
        value: '3carga',
      },
      {
        label: 'Descarga',
        value: '3descarga',
      },
      {
        label: 'Carga FDS',
        value: '3cargafds',
      },
      {
        label: 'Descarga FDS',
        value: '3descargafds',
      },
    ],
  },
];

const dataUni = [
  {
    label: '001 - Ponta Grossa',
    value: '1',
  },
  {
    label: '002 - Curitiba',
    value: '2',
  },
  {
    label: '003 - Maringá',
    value: '3',
  },
];

const style = {
  width: 255
};

export default function MultiCascaderApp() {
  return (
    <div className="multicascader">
      <br />
      Seleção de formulário
      <br />
      <Cascader
        placeholder="Formulário"
        data={dataForm}
        menuWidth={'auto'}
        menuHeight={'auto'}
        style={style}
        />
      <br />
      <br />
        Seleção de formulário TSM
      <br />
      <Cascader
        placeholder="Formulário TSM"
        data={dataFormTSM}
        menuWidth={'auto'}
        menuHeight={'auto'}
        style={style}
      />
      <br />
      <br />
      Seleção de Operação (agrupado por Unidade) (TSM)
      <br />
      <MultiCascader
        placeholder="Operação"
        data={dataOp}
        menuWidth={225}
        style={style}
      />
      <br />
      ou seleção de unidade (Cargas e outros)
      <br />
      <MultiCascader
        placeholder="Unidade"
        data={dataUni}
        menuWidth={225}
        style={style}
      />
    </div>
  );
}
