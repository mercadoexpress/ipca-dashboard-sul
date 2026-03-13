// ══════════════════════════════════════════
// DATA.JS — Dados do IPCA para o Dashboard
// Fonte: IBGE, Investidor10, Fecomércio PR/SC, Udesc Esag
// Última atualização: 12/03/2026
// ══════════════════════════════════════════

const ipcaData = {

  // ── GRÁFICO 1: Variação Mensal do IPCA Brasil (Jan/2019 – Fev/2026) ──
  ipcaGeral: {
    labels: [
      // 2019
      'Jan/19','Fev/19','Mar/19','Abr/19','Mai/19','Jun/19',
      'Jul/19','Ago/19','Set/19','Out/19','Nov/19','Dez/19',
      // 2020
      'Jan/20','Fev/20','Mar/20','Abr/20','Mai/20','Jun/20',
      'Jul/20','Ago/20','Set/20','Out/20','Nov/20','Dez/20',
      // 2021
      'Jan/21','Fev/21','Mar/21','Abr/21','Mai/21','Jun/21',
      'Jul/21','Ago/21','Set/21','Out/21','Nov/21','Dez/21',
      // 2022
      'Jan/22','Fev/22','Mar/22','Abr/22','Mai/22','Jun/22',
      'Jul/22','Ago/22','Set/22','Out/22','Nov/22','Dez/22',
      // 2023
      'Jan/23','Fev/23','Mar/23','Abr/23','Mai/23','Jun/23',
      'Jul/23','Ago/23','Set/23','Out/23','Nov/23','Dez/23',
      // 2024
      'Jan/24','Fev/24','Mar/24','Abr/24','Mai/24','Jun/24',
      'Jul/24','Ago/24','Set/24','Out/24','Nov/24','Dez/24',
      // 2025
      'Jan/25','Fev/25','Mar/25','Abr/25','Mai/25','Jun/25',
      'Jul/25','Ago/25','Set/25','Out/25','Nov/25','Dez/25',
      // 2026
      'Jan/26','Fev/26'
    ],
    values: [
      // 2019
      0.32, 0.43, 0.75, 0.57, 0.13, 0.01,
      0.19, 0.11, -0.04, 0.10, 0.14, 1.15,
      // 2020
      0.21, 0.25, 0.07, -0.31, -0.38, 0.26,
      0.36, 0.24, 0.64, 0.86, 0.89, 1.35,
      // 2021
      0.25, 0.86, 0.93, 0.31, 0.83, 0.53,
      0.96, 0.87, 1.16, 1.25, 0.95, 0.73,
      // 2022
      0.54, 1.01, 1.62, 1.06, 0.47, 0.67,
      -0.68, -0.73, -0.29, 0.59, 0.41, 0.54,
      // 2023
      0.53, 0.84, 0.71, 0.61, 0.23, -0.08,
      0.12, -0.02, 0.26, 0.24, 0.28, 0.62,
      // 2024
      0.42, 0.83, 0.16, 0.38, 0.46, 0.20,
      0.38, -0.02, 0.44, 0.56, 0.39, 0.52,
      // 2025
      0.16, 1.31, 0.56, 0.43, 0.43, 0.24,
      0.38, -0.44, 0.44, 0.56, 0.39, 0.52,
      // 2026
      0.33, 0.70
    ]
  },

  // ── GRÁFICO 2: IPCA Acumulado Anual por Região (2024–2026) — Incluindo Florianópolis ──
  ipcaAnual: {
    anos: ['2024','2025','2026*'],
    brasil:      [4.83, 4.26, 0.70],
    portoAlegre: [5.20, 4.79, 0.55],
    curitiba:    [4.60, 3.84, 0.41],
    florianopolis: [5.10, 5.17, 0.65]
  },

  // ── GRÁFICO 3: IPCA por Cidade — Fevereiro 2026 (RS, PR, SC e Brasil) ──
  ipcaCidadeFev2026: {
    cidades: ['Curitiba (PR)', 'Porto Alegre (RS)', 'Florianópolis (SC)', 'Brasil'],
    valores: [0.41, 0.55, 0.65, 0.70]
  },

  // ── GRÁFICO 4: IPCA Geral vs. Alimentação e Bebidas (2019–2025) ──
  comparacaoGeralAlimentacao: {
    anos: ['2019','2020','2021','2022','2023','2024','2025'],
    ipcaGeral:              [4.31, 4.52, 10.06, 5.79, 4.62, 4.83, 4.26],
    ipcaAlimentacao:        [5.20, 14.10, 14.00, 11.70, 0.61, 1.64, 2.95],
    ipcaAlimDomicilio:      [5.70, 18.00, 17.70, 13.40, -0.50, 0.82, 1.90],
    ipcaAlimForaDomicilio:  [4.10, 6.50,  7.90,  8.10,  3.50, 3.69, 6.97]
  },

  // ── GRÁFICO 5: Alimentos que Mais Subiram em Fevereiro 2026 — Brasil ──
  topItensAlimentacao2025: {
    itens: [
      'Açaí',
      'Feijão-carioca',
      'Batata-doce',
      'Tomate',
      'Café moído',
      'Banana-prata',
      'Laranja-pera',
      'Cenoura',
      'Cebola',
      'Maçã'
    ],
    variacoes: [25.29, 11.73, 8.45, 7.82, 5.63, 4.21, 3.89, 2.76, 2.34, 1.98]
  },

  // ── GRÁFICO 6: Alimentos que Mais Caíram em Fevereiro 2026 — RS, PR e SC ──
  quedaAlimentosCuritiba2025: {
    regioes: ['Curitiba (PR)', 'Porto Alegre (RS)', 'Florianópolis (SC)'],
    itens: [
      ['Arroz', 'Feijão', 'Leite longa vida', 'Óleo de soja', 'Macarrão', 'Açúcar', 'Manteiga', 'Pão francês'],
      ['Arroz', 'Feijão', 'Leite integral', 'Óleo de soja', 'Macarrão', 'Açúcar', 'Manteiga', 'Carne bovina (2ª)'],
      ['Arroz', 'Leite longa vida', 'Feijão', 'Óleo de soja', 'Macarrão', 'Açúcar', 'Ovos', 'Pão francês']
    ],
    variacoes: [
      [-2.15, -1.89, -1.22, -0.85, -0.76, -0.50, -0.43, -0.30],
      [-1.98, -2.20, -1.58, -0.91, -0.65, -0.43, -0.48, -0.38],
      [-2.68, -1.85, -2.89, -1.02, -0.87, -0.64, -0.72, -0.51]
    ]
  },

  // ── GRÁFICO 7: IPCA Acumulado em 12 Meses (Mar/2025 – Fev/2026) ──
  ipcaAcumulado12m: {
    labels: [
      'Mar/25','Abr/25','Mai/25','Jun/25','Jul/25','Ago/25',
      'Set/25','Out/25','Nov/25','Dez/25','Jan/26','Fev/26'
    ],
    values: [5.48, 5.53, 5.32, 5.22, 4.50, 4.24, 4.42, 4.76, 4.77, 4.26, 4.56, 3.81]
  }

};
