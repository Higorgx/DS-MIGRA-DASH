<script>
import appConfig from "~/app.config";
import ActiveUsers from "~/components/dashboard/analytics/ActiveUsers.vue";
import { CountTo } from "vue3-count-to";
import {
  pageViewChart,
  clicksChart,
  conversationsChart,
  salesReportChart,
  totalSessionsChart,
  avgVisitDurationChart,
  impressionsChart,
  totalViewsChart,
  timeOnSalesChart,
  goalCompletionsChart,
  bounceRateChart,
  newSessionsChart,
  getChartColorsArray
} from "~/components/dashboard/analytics/chartsData.js";
import { useLayoutStore } from "~/stores/layout";

export default {
  page: {
    title: "Analytics",
    meta: [{ name: "description", content: appConfig.description }]
  },
  data() {
    return {
      title: "Analytics",
      kanban: {
      count: 38,
      results: [
              {
              id: 0,
              count: 38,
              collapsed: false,
              name: "Todas",
              columns: [
                      {
                      id: 722604,
                      orderNo: 0,
                      orders: "[{\"id\:320006842,\"od\:0},{\"id\:335293086,\"od\:1},{\"id\:337364573,\"od\:2},{\"id\:337701120,\"od\:3},{\"id\:337368027,\"od\:4},{\"id\:339085521,\"od\:5},{\"id\:337367080,\"od\:6},{\"id\:333582278,\"od\:7},{\"id\:336577088,\"od\:8},{\"id\:338722747,\"od\:9},{\"id\:336835510,\"od\:10},{\"id\:339722975,\"od\:11},{\"id\:335842375,\"od\:12},{\"id\:336591260,\"od\:13},{\"id\:324916221,\"od\:14},{\"id\:337802636,\"od\:15},{\"id\:325442829,\"od\:16},{\"id\:334983625,\"od\:17},{\"id\:333579707,\"od\:18},{\"id\:333534322,\"od\:19},{\"id\:337365926,\"od\:20},{\"id\:311052514,\"od\:21},{\"id\:333206686,\"od\:22},{\"id\:325607203,\"od\:23},{\"id\:315618357,\"od\:24},{\"id\:251791482,\"od\:25},{\"id\:299189019,\"od\:26},{\"id\:318247626,\"od\:27},{\"id\:322070784,\"od\:28},{\"id\:322057719,\"od\:29},{\"id\:322786452,\"od\:30},{\"id\:325602117,\"od\:31},{\"id\:309078883,\"od\:32},{\"id\:337445238,\"od\:33},{\"id\:177016179,\"od\:34},{\"id\:337504720,\"od\:35},{\"id\:338323504,\"od\:36}]",
                      hasMore: false,
                      tickets: [
                              {
                              id: 320006842,
                              number: "550997",
                              hiddenNumber: 550997,
                              subject: "Coleta - 10186 - VKL MODAS - LOJA 01 - MATRIZ",
                              owner: "Vitor Guimarães",
                              typeId: 1,
                              slaSolutionDate: "12/04/2024 11:23",
                              slaSolutionExpiryType: 4,
                              client: "10186 - VKL MODAS - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 335293086,
                              number: "580831",
                              hiddenNumber: 580831,
                              subject: "Coleta - 10480 - FLORENZA - LOJA 02",
                              owner: "Aline Silva",
                              typeId: 1,
                              slaSolutionDate: "12/06/2024 14:41",
                              slaSolutionExpiryType: 4,
                              client: "DATA SYSTEM SOFTWARE » Karen Fernandes\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 337364573,
                              number: "584724",
                              hiddenNumber: 584724,
                              subject: "Coleta - 10521 - GARDEN CLOTHING STORE - LOJA 01 - MATRIZ",
                              owner: "Aline Silva",
                              typeId: 1,
                              slaSolutionDate: "21/06/2024 08:15",
                              slaSolutionExpiryType: 2,
                              client: "10521 - GARDEN CLOTHING STORE - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 337701120,
                              number: "585373",
                              hiddenNumber: 585373,
                              subject: "Coleta - 10510 - LEAO DE OURO - ESCRITORIO - 99 - MATRIZ",
                              owner: "Aline Silva",
                              typeId: 1,
                              slaSolutionDate: "21/06/2024 17:34",
                              slaSolutionExpiryType: 2,
                              client: "10510 - LEAO DE OURO - ESCRITORIO - 99 - MATRIZ » 10500 - LEAO DE OURO - LOJA 01\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              }
                          ]
                      },
                      {
                      id: 722599,
                      orderNo: 1,
                      orders: "[{\"id\:320006842,\"od\:0},{\"id\:335293086,\"od\:1},{\"id\:337364573,\"od\:2},{\"id\:337701120,\"od\:3},{\"id\:337368027,\"od\:4},{\"id\:339085521,\"od\:5},{\"id\:337367080,\"od\:6},{\"id\:333582278,\"od\:7},{\"id\:336577088,\"od\:8},{\"id\:338722747,\"od\:9},{\"id\:336835510,\"od\:10},{\"id\:339722975,\"od\:11},{\"id\:335842375,\"od\:12},{\"id\:336591260,\"od\:13},{\"id\:324916221,\"od\:14},{\"id\:337802636,\"od\:15},{\"id\:325442829,\"od\:16},{\"id\:334983625,\"od\:17},{\"id\:333579707,\"od\:18},{\"id\:333534322,\"od\:19},{\"id\:337365926,\"od\:20},{\"id\:311052514,\"od\:21},{\"id\:333206686,\"od\:22},{\"id\:325607203,\"od\:23},{\"id\:315618357,\"od\:24},{\"id\:251791482,\"od\:25},{\"id\:299189019,\"od\:26},{\"id\:318247626,\"od\:27},{\"id\:322070784,\"od\:28},{\"id\:322057719,\"od\:29},{\"id\:322786452,\"od\:30},{\"id\:325602117,\"od\:31},{\"id\:309078883,\"od\:32},{\"id\:337445238,\"od\:33},{\"id\:177016179,\"od\:34},{\"id\:337504720,\"od\:35},{\"id\:338323504,\"od\:36}]",
                      hasMore: false,
                      tickets: [
                              {
                              id: 337367080,
                              number: "584735",
                              hiddenNumber: 584735,
                              subject: "Coleta - 10520 - LUCIANO MAGAZINE - LOJA 01 - MATRIZ",
                              owner: "Lucas Scheunemann",
                              typeId: 1,
                              slaSolutionDate: "21/06/2024 08:21",
                              slaSolutionExpiryType: 2,
                              client: "10520 - LUCIANO MAGAZINE - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 336577088,
                              number: "583313",
                              hiddenNumber: 583313,
                              subject: "Coleta - 10484 - SONHO COLORIDO - LOJA 01 - MATRIZ",
                              owner: "Lucas Scheunemann",
                              typeId: 1,
                              slaSolutionDate: "18/06/2024 11:14",
                              slaSolutionExpiryType: 2,
                              client: "10484 - SONHO COLORIDO - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 337368027,
                              number: "584739",
                              hiddenNumber: 584739,
                              subject: "Coleta - 10513 - ANABELLA - LOJA 01 - MATRIZ",
                              owner: "Aline Silva",
                              typeId: 1,
                              slaSolutionDate: "21/06/2024 08:24",
                              slaSolutionExpiryType: 2,
                              client: "10513 - ANABELLA - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 339085521,
                              number: "587981",
                              hiddenNumber: 587981,
                              subject: "N2 | Correção de contas abertas de clientes migração",
                              owner: "Vitor Guimarães",
                              typeId: 2,
                              slaSolutionDate: "27/06/2024 08:21",
                              slaSolutionExpiryType: 2,
                              client: "10307 - ESTILO ROUPARIA - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 159238,
                                  text: "EP2 - Média",
                                  backgroundColor: "#5DC559"
                                  },
                              pendingApproval: false,
                              protocol: null
                              }
                          ]
                      },
                      {
                      id: 722605,
                      orderNo: 2,
                      orders: "[{\"id\:320006842,\"od\:0},{\"id\:335293086,\"od\:1},{\"id\:337364573,\"od\:2},{\"id\:337701120,\"od\:3},{\"id\:337368027,\"od\:4},{\"id\:339085521,\"od\:5},{\"id\:337367080,\"od\:6},{\"id\:333582278,\"od\:7},{\"id\:336577088,\"od\:8},{\"id\:338722747,\"od\:9},{\"id\:336835510,\"od\:10},{\"id\:339722975,\"od\:11},{\"id\:335842375,\"od\:12},{\"id\:336591260,\"od\:13},{\"id\:324916221,\"od\:14},{\"id\:337802636,\"od\:15},{\"id\:325442829,\"od\:16},{\"id\:334983625,\"od\:17},{\"id\:333579707,\"od\:18},{\"id\:333534322,\"od\:19},{\"id\:337365926,\"od\:20},{\"id\:311052514,\"od\:21},{\"id\:333206686,\"od\:22},{\"id\:325607203,\"od\:23},{\"id\:315618357,\"od\:24},{\"id\:251791482,\"od\:25},{\"id\:299189019,\"od\:26},{\"id\:318247626,\"od\:27},{\"id\:322070784,\"od\:28},{\"id\:322057719,\"od\:29},{\"id\:322786452,\"od\:30},{\"id\:325602117,\"od\:31},{\"id\:309078883,\"od\:32},{\"id\:337445238,\"od\:33},{\"id\:177016179,\"od\:34},{\"id\:337504720,\"od\:35},{\"id\:338323504,\"od\:36}]",
                      hasMore: false,
                      tickets: [
                              {
                              id: 336835510,
                              number: "583633",
                              hiddenNumber: 583633,
                              subject: "Parcelas Renegociadas",
                              owner: "Andre Jovetta",
                              typeId: 2,
                              slaSolutionDate: "19/06/2024 08:04",
                              slaSolutionExpiryType: 2,
                              client: "8805 - MONJUA - LOJA 900 - MATRIZ » SUELEN - GERENTE T.I\r\n",
                              urgency: {
                                  id: 159238,
                                  text: "EP2 - Média",
                                  backgroundColor: "#5DC559"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 338722747,
                              number: "587355",
                              hiddenNumber: 587355,
                              subject: "Produtos migrados sem estoque e com valor de venda zerado",
                              owner: "Lucas Scheunemann",
                              typeId: 2,
                              slaSolutionDate: "26/06/2024 10:35",
                              slaSolutionExpiryType: 2,
                              client: "3424 - IMPACTO CALCADOS - MATRIZ » 10051 - IMPACTO TECIDOS - LOJA 02\r\n",
                              urgency: {
                                  id: 159238,
                                  text: "EP2 - Média",
                                  backgroundColor: "#5DC559"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 339722975,
                              number: "589182",
                              hiddenNumber: 589182,
                              subject: "Parcelas faltantes Meu crediário\\Monjua",
                              owner: "Andre Jovetta",
                              typeId: 2,
                              slaSolutionDate: "28/06/2024 16:18",
                              slaSolutionExpiryType: 2,
                              client: "8805 - MONJUA - LOJA 900 - MATRIZ » SUELEN - GERENTE T.I\r\n",
                              urgency: {
                                  id: 159238,
                                  text: "EP2 - Média",
                                  backgroundColor: "#5DC559"
                                  },
                              pendingApproval: false,
                              protocol: null
                              }
                          ]
                      },
                      {
                      id: 877024,
                      orderNo: 3,
                      orders: "[{\"id\:320006842,\"od\:0},{\"id\:335293086,\"od\:1},{\"id\:337364573,\"od\:2},{\"id\:337701120,\"od\:3},{\"id\:337368027,\"od\:4},{\"id\:339085521,\"od\:5},{\"id\:337367080,\"od\:6},{\"id\:333582278,\"od\:7},{\"id\:336577088,\"od\:8},{\"id\:338722747,\"od\:9},{\"id\:336835510,\"od\:10},{\"id\:339722975,\"od\:11},{\"id\:335842375,\"od\:12},{\"id\:336591260,\"od\:13},{\"id\:324916221,\"od\:14},{\"id\:337802636,\"od\:15},{\"id\:325442829,\"od\:16},{\"id\:334983625,\"od\:17},{\"id\:333579707,\"od\:18},{\"id\:333534322,\"od\:19},{\"id\:337365926,\"od\:20},{\"id\:311052514,\"od\:21},{\"id\:333206686,\"od\:22},{\"id\:325607203,\"od\:23},{\"id\:315618357,\"od\:24},{\"id\:251791482,\"od\:25},{\"id\:299189019,\"od\:26},{\"id\:318247626,\"od\:27},{\"id\:322070784,\"od\:28},{\"id\:322057719,\"od\:29},{\"id\:322786452,\"od\:30},{\"id\:325602117,\"od\:31},{\"id\:309078883,\"od\:32},{\"id\:337445238,\"od\:33},{\"id\:177016179,\"od\:34},{\"id\:337504720,\"od\:35},{\"id\:338323504,\"od\:36}]",
                      hasMore: false,
                      tickets: [
                              {
                              id: 336591260,
                              number: "583338",
                              hiddenNumber: 583338,
                              subject: "N2 | Parcela baixa no sistema antigo consta em aberto no USE",
                              owner: "Vitor Guimarães",
                              typeId: 2,
                              slaSolutionDate: "17/06/2024 13:42",
                              slaSolutionExpiryType: 2,
                              client: "10205 - TROPICAL CALCADOS - LOJA 01 - MATRIZ » 10207 - TROPICAL CALCADOS - LOJA 04\r\n",
                              urgency: {
                                  id: 159238,
                                  text: "EP2 - Média",
                                  backgroundColor: "#5DC559"
                                  },
                              pendingApproval: false,
                              protocol: null
                              }
                          ]
                      },
                      {
                      id: 722600,
                      orderNo: 4,
                      orders: "[{\"id\:320006842,\"od\:0},{\"id\:335293086,\"od\:1},{\"id\:337364573,\"od\:2},{\"id\:337701120,\"od\:3},{\"id\:337368027,\"od\:4},{\"id\:339085521,\"od\:5},{\"id\:337367080,\"od\:6},{\"id\:333582278,\"od\:7},{\"id\:336577088,\"od\:8},{\"id\:338722747,\"od\:9},{\"id\:336835510,\"od\:10},{\"id\:339722975,\"od\:11},{\"id\:335842375,\"od\:12},{\"id\:336591260,\"od\:13},{\"id\:324916221,\"od\:14},{\"id\:337802636,\"od\:15},{\"id\:325442829,\"od\:16},{\"id\:334983625,\"od\:17},{\"id\:333579707,\"od\:18},{\"id\:333534322,\"od\:19},{\"id\:337365926,\"od\:20},{\"id\:311052514,\"od\:21},{\"id\:333206686,\"od\:22},{\"id\:325607203,\"od\:23},{\"id\:315618357,\"od\:24},{\"id\:251791482,\"od\:25},{\"id\:299189019,\"od\:26},{\"id\:318247626,\"od\:27},{\"id\:322070784,\"od\:28},{\"id\:322057719,\"od\:29},{\"id\:322786452,\"od\:30},{\"id\:325602117,\"od\:31},{\"id\:309078883,\"od\:32},{\"id\:337445238,\"od\:33},{\"id\:177016179,\"od\:34},{\"id\:337504720,\"od\:35},{\"id\:338323504,\"od\:36}]",
                      hasMore: false,
                      tickets: [
                              {
                              id: 333582278,
                              number: "577350",
                              hiddenNumber: 577350,
                              subject: "Coleta - 10389 - MARIA ROSA - LOJA 01 - MATRIZ",
                              owner: "Gabriel Babler Campos",
                              typeId: 1,
                              slaSolutionDate: "05/06/2024 16:10",
                              slaSolutionExpiryType: 4,
                              client: "10389 - MARIA ROSA - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 335842375,
                              number: "581843",
                              hiddenNumber: 581843,
                              subject: "Coleta - 10462 - NOSSA SENHORA DO ROSARIO - LOJA 01 - MATRIZ",
                              owner: "Aline Silva",
                              typeId: 1,
                              slaSolutionDate: "14/06/2024 09:00",
                              slaSolutionExpiryType: 2,
                              client: "10462 - NOSSA SENHORA DO ROSARIO - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              }
                          ]
                      },
                      {
                      id: 752744,
                      orderNo: 5,
                      orders: "[{\"id\:320006842,\"od\:0},{\"id\:335293086,\"od\:1},{\"id\:337364573,\"od\:2},{\"id\:337701120,\"od\:3},{\"id\:337368027,\"od\:4},{\"id\:339085521,\"od\:5},{\"id\:337367080,\"od\:6},{\"id\:333582278,\"od\:7},{\"id\:336577088,\"od\:8},{\"id\:338722747,\"od\:9},{\"id\:336835510,\"od\:10},{\"id\:339722975,\"od\:11},{\"id\:335842375,\"od\:12},{\"id\:336591260,\"od\:13},{\"id\:324916221,\"od\:14},{\"id\:337802636,\"od\:15},{\"id\:325442829,\"od\:16},{\"id\:334983625,\"od\:17},{\"id\:333579707,\"od\:18},{\"id\:333534322,\"od\:19},{\"id\:337365926,\"od\:20},{\"id\:311052514,\"od\:21},{\"id\:333206686,\"od\:22},{\"id\:325607203,\"od\:23},{\"id\:315618357,\"od\:24},{\"id\:251791482,\"od\:25},{\"id\:299189019,\"od\:26},{\"id\:318247626,\"od\:27},{\"id\:322070784,\"od\:28},{\"id\:322057719,\"od\:29},{\"id\:322786452,\"od\:30},{\"id\:325602117,\"od\:31},{\"id\:309078883,\"od\:32},{\"id\:337445238,\"od\:33},{\"id\:177016179,\"od\:34},{\"id\:337504720,\"od\:35},{\"id\:338323504,\"od\:36}]",
                      hasMore: false,
                      tickets: [
                              {
                              id: 251791482,
                              number: "412161",
                              hiddenNumber: 412161,
                              subject: "COLETA - 8803 - MAGNUM SURF E GRIFE - LOJA 01 - MATRIZ",
                              owner: "Lucas Scheunemann",
                              typeId: 1,
                              slaSolutionDate: "04/07/2023 11:18",
                              slaSolutionExpiryType: 4,
                              client: "8803 - MAGNUM SURF E GRIFE - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 299189019,
                              number: "514431",
                              hiddenNumber: 514431,
                              subject: "Coleta - 9667 - JET SET - LOJA 01 - MATRIZ",
                              owner: "Higor Freitas",
                              typeId: 1,
                              slaSolutionDate: "26/01/2024 14:53",
                              slaSolutionExpiryType: 4,
                              client: "9667 - JET SET - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 309078883,
                              number: "531125",
                              hiddenNumber: 531125,
                              subject: "Coleta | 9175 - GAMMA - LOJA 98 - ESCRITORIO",
                              owner: "Lucas Scheunemann",
                              typeId: 1,
                              slaSolutionDate: "",
                              slaSolutionExpiryType: 1,
                              client: "9171 - GAMMA - LOJA 01 - MATRIZ » 9175 - GAMMA - LOJA 98 - ESCRITORIO\r\n",
                              urgency: {
                                  id: 105085,
                                  text: "Projeto",
                                  backgroundColor: "#10EFD1"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 311052514,
                              number: "534782",
                              hiddenNumber: 534782,
                              subject: "Coleta - 10016 - MARCELO CALCADOS - LOJA 01 - MATRIZ",
                              owner: "Higor Freitas",
                              typeId: 1,
                              slaSolutionDate: "12/03/2024 11:17",
                              slaSolutionExpiryType: 4,
                              client: "10016 - MARCELO CALCADOS - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 315618357,
                              number: "543102",
                              hiddenNumber: 543102,
                              subject: "Coleta - 10082 - CALCE CHARM - LOJA 01 - MATRIZ",
                              owner: "Andre Jovetta",
                              typeId: 1,
                              slaSolutionDate: "28/03/2024 16:01",
                              slaSolutionExpiryType: 4,
                              client: "10082 - CALCE CHARM - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 318247626,
                              number: "547827",
                              hiddenNumber: 547827,
                              subject: "Coleta - 10092 - KAE MODAS - LOJA 01 - MATRIZ",
                              owner: "Lucas Scheunemann",
                              typeId: 1,
                              slaSolutionDate: "05/04/2024 15:29",
                              slaSolutionExpiryType: 4,
                              client: "10092 - KAE MODAS - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 322057719,
                              number: "554244",
                              hiddenNumber: 554244,
                              subject: "Coleta - 10213 - FOFINHA MODAS - LOJA 01 - MATRIZ",
                              owner: "Gabriel Babler Campos",
                              typeId: 1,
                              slaSolutionDate: "19/04/2024 17:05",
                              slaSolutionExpiryType: 4,
                              client: "10213 - FOFINHA MODAS - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 322070784,
                              number: "554296",
                              hiddenNumber: 554296,
                              subject: "Coleta - 10210 - ESPACO BORBOLETA - LOJA 01 - MATRIZ",
                              owner: "Lucas Scheunemann",
                              typeId: 1,
                              slaSolutionDate: "19/04/2024 17:28",
                              slaSolutionExpiryType: 4,
                              client: "10210 - EB BOUTIQUE - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 322786452,
                              number: "555647",
                              hiddenNumber: 555647,
                              subject: "Coleta - 10167 - LUKAFE - LOJA 01 - MATRIZ",
                              owner: "Lucas Scheunemann",
                              typeId: 1,
                              slaSolutionDate: "24/04/2024 08:28",
                              slaSolutionExpiryType: 4,
                              client: "10167 - LUKAFE - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 324916221,
                              number: "559403",
                              hiddenNumber: 559403,
                              subject: "Coleta - 10268 - BEBE MANIA - LOJA 01 - MATRIZ",
                              owner: "Higor Freitas",
                              typeId: 1,
                              slaSolutionDate: "03/05/2024 08:02",
                              slaSolutionExpiryType: 4,
                              client: "10268 - BEBE MANIA - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 325442829,
                              number: "560466",
                              hiddenNumber: 560466,
                              subject: "Coleta - 10244 - PALACIO STORE - LOJA 01 - MATRIZ",
                              owner: "Lucas Scheunemann",
                              typeId: 1,
                              slaSolutionDate: "06/05/2024 11:41",
                              slaSolutionExpiryType: 4,
                              client: "10244 - PALACIO STORE - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 325602117,
                              number: "560750",
                              hiddenNumber: 560750,
                              subject: "Double Count  - 9981 - VIA SERRA CALCADOS - LOJA 01 - MATRIZ",
                              owner: "Lucas Scheunemann",
                              typeId: 1,
                              slaSolutionDate: "26/04/2024 09:31",
                              slaSolutionExpiryType: 4,
                              client: "9981 - VIA SERRA CALCADOS - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 101733,
                                  text: "REQ - 10 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 333534322,
                              number: "577233",
                              hiddenNumber: 577233,
                              subject: "Coleta - 10393 - VR E MODAS - LOJA 01 - MATRIZ",
                              owner: "Lucas Scheunemann",
                              typeId: 1,
                              slaSolutionDate: "05/06/2024 14:46",
                              slaSolutionExpiryType: 4,
                              client: "10393 - VR E MODAS - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 325607203,
                              number: "560764",
                              hiddenNumber: 560764,
                              subject: "Coleta - 10298 - PASSOS CALCADOS - LOJA 01 - MATRIZ",
                              owner: "Romulo Cristovam",
                              typeId: 1,
                              slaSolutionDate: "06/05/2024 16:10",
                              slaSolutionExpiryType: 4,
                              client: "10298 - PASSOS CALCADOS - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 333206686,
                              number: "576579",
                              hiddenNumber: 576579,
                              subject: "Coleta - 10378 - ROMULO DE CEZARO - LOJA 01 - MATRIZ",
                              owner: "Gabriel Babler Campos",
                              typeId: 1,
                              slaSolutionDate: "04/06/2024 15:29",
                              slaSolutionExpiryType: 4,
                              client: "10378 - ROMULO DE CEZARO - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 333579707,
                              number: "577343",
                              hiddenNumber: 577343,
                              subject: "Coleta - 10441 - PAR PERFEITO - LOJA 01 - MATRIZ",
                              owner: "Andre Jovetta",
                              typeId: 1,
                              slaSolutionDate: "05/06/2024 16:06",
                              slaSolutionExpiryType: 4,
                              client: "10441 - PAR PERFEITO - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 334983625,
                              number: "580204",
                              hiddenNumber: 580204,
                              subject: "Coleta - 10468 - CASA MEGA MAIS - LOJA ",
                              owner: "Romulo Cristovam",
                              typeId: 1,
                              slaSolutionDate: "11/06/2024 14:43",
                              slaSolutionExpiryType: 4,
                              client: "10012 - BIANA WEAR - LOJA 01 - MATRIZ » 10468 - CASA MEGA MAIS - LOJA 03\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 337365926,
                              number: "584731",
                              hiddenNumber: 584731,
                              subject: "Coleta - 10515 - CASA DAS CALCAS E CIA - LOJA 01 - MATRIZ",
                              owner: "Lucas Scheunemann",
                              typeId: 1,
                              slaSolutionDate: "21/06/2024 08:18",
                              slaSolutionExpiryType: 2,
                              client: "10515 - CASA DAS CALCAS E CIA - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 337445238,
                              number: "584916",
                              hiddenNumber: 584916,
                              subject: "Implantação sistema USE - 9960 - GRIFFE CALCADOS - LOJA 01 - MATRIZ - [CONVERSÃO DE DADOS]",
                              owner: "Lucas Scheunemann",
                              typeId: 1,
                              slaSolutionDate: "",
                              slaSolutionExpiryType: 1,
                              client: "9960 - GRIFFE CALCADOS - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 105085,
                                  text: "Projeto",
                                  backgroundColor: "#10EFD1"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 337802636,
                              number: "585570",
                              hiddenNumber: 585570,
                              subject: "Coleta - 10527 - ALGODAO DOCE - LOJA 01 - MATRIZ",
                              owner: "Lucas Scheunemann",
                              typeId: 1,
                              slaSolutionDate: "24/06/2024 11:26",
                              slaSolutionExpiryType: 2,
                              client: "10527 - ALGODAO DOCE - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              }
                          ]
                      },
                      {
                      id: 969225,
                      orderNo: 6,
                      orders: "[{\"id\:320006842,\"od\:0},{\"id\:335293086,\"od\:1},{\"id\:337364573,\"od\:2},{\"id\:337701120,\"od\:3},{\"id\:337368027,\"od\:4},{\"id\:339085521,\"od\:5},{\"id\:337367080,\"od\:6},{\"id\:333582278,\"od\:7},{\"id\:336577088,\"od\:8},{\"id\:338722747,\"od\:9},{\"id\:336835510,\"od\:10},{\"id\:339722975,\"od\:11},{\"id\:335842375,\"od\:12},{\"id\:336591260,\"od\:13},{\"id\:324916221,\"od\:14},{\"id\:337802636,\"od\:15},{\"id\:325442829,\"od\:16},{\"id\:334983625,\"od\:17},{\"id\:333579707,\"od\:18},{\"id\:333534322,\"od\:19},{\"id\:337365926,\"od\:20},{\"id\:311052514,\"od\:21},{\"id\:333206686,\"od\:22},{\"id\:325607203,\"od\:23},{\"id\:315618357,\"od\:24},{\"id\:251791482,\"od\:25},{\"id\:299189019,\"od\:26},{\"id\:318247626,\"od\:27},{\"id\:322070784,\"od\:28},{\"id\:322057719,\"od\:29},{\"id\:322786452,\"od\:30},{\"id\:325602117,\"od\:31},{\"id\:309078883,\"od\:32},{\"id\:337445238,\"od\:33},{\"id\:177016179,\"od\:34},{\"id\:337504720,\"od\:35},{\"id\:338323504,\"od\:36}]",
                      hasMore: false,
                      tickets: []
                      },
                      {
                      id: 722601,
                      orderNo: 7,
                      orders: "[{\"id\:320006842,\"od\:0},{\"id\:335293086,\"od\:1},{\"id\:337364573,\"od\:2},{\"id\:337701120,\"od\:3},{\"id\:337368027,\"od\:4},{\"id\:339085521,\"od\:5},{\"id\:337367080,\"od\:6},{\"id\:333582278,\"od\:7},{\"id\:336577088,\"od\:8},{\"id\:338722747,\"od\:9},{\"id\:336835510,\"od\:10},{\"id\:339722975,\"od\:11},{\"id\:335842375,\"od\:12},{\"id\:336591260,\"od\:13},{\"id\:324916221,\"od\:14},{\"id\:337802636,\"od\:15},{\"id\:325442829,\"od\:16},{\"id\:334983625,\"od\:17},{\"id\:333579707,\"od\:18},{\"id\:333534322,\"od\:19},{\"id\:337365926,\"od\:20},{\"id\:311052514,\"od\:21},{\"id\:333206686,\"od\:22},{\"id\:325607203,\"od\:23},{\"id\:315618357,\"od\:24},{\"id\:251791482,\"od\:25},{\"id\:299189019,\"od\:26},{\"id\:318247626,\"od\:27},{\"id\:322070784,\"od\:28},{\"id\:322057719,\"od\:29},{\"id\:322786452,\"od\:30},{\"id\:325602117,\"od\:31},{\"id\:309078883,\"od\:32},{\"id\:337445238,\"od\:33},{\"id\:177016179,\"od\:34},{\"id\:337504720,\"od\:35},{\"id\:338323504,\"od\:36}]",
                      hasMore: false,
                      tickets: [
                              {
                              id: 177016179,
                              number: "283412",
                              hiddenNumber: 283412,
                              subject: "PMO - TITANA CALÇADOS - Migração",
                              owner: "Romulo Cristovam",
                              typeId: 1,
                              slaSolutionDate: "09/08/2022 12:00",
                              slaSolutionExpiryType: 1,
                              client: "DATA SYSTEM SOFTWARE\r\n",
                              urgency: {
                                  id: 55331,
                                  text: "P2 - Média",
                                  backgroundColor: "#EF9904"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 319077588,
                              number: "549412",
                              hiddenNumber: 549412,
                              subject: "Coleta - 10121 - TIGRE - LOJA 01 - MATRIZ",
                              owner: "Aline Silva",
                              typeId: 1,
                              slaSolutionDate: "10/04/2024 08:52",
                              slaSolutionExpiryType: 1,
                              client: "10121 - TIGRE - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 109923,
                                  text: "REQ - 17 D",
                                  backgroundColor: "#039BA3"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 337504720,
                              number: "585063",
                              hiddenNumber: 585063,
                              subject: "N2 | Saldo em aberto para o cliente no USE é maior que no sistema antigo",
                              owner: "Aline Silva",
                              typeId: 1,
                              slaSolutionDate: "20/06/2024 15:13",
                              slaSolutionExpiryType: 1,
                              client: "10307 - ESTILO ROUPARIA - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 159238,
                                  text: "EP2 - Média",
                                  backgroundColor: "#5DC559"
                                  },
                              pendingApproval: false,
                              protocol: null
                              },
                              {
                              id: 338323504,
                              number: "586537",
                              hiddenNumber: 586537,
                              subject: " Cadastro de código de barras no item com espaço no final. ",
                              owner: "Lucas Scheunemann",
                              typeId: 1,
                              slaSolutionDate: "24/06/2024 17:48",
                              slaSolutionExpiryType: 1,
                              client: "10248 - WORLD TENNIS - LOJA 01 - MATRIZ\r\n",
                              urgency: {
                                  id: 159238,
                                  text: "EP2 - Média",
                                  backgroundColor: "#5DC559"
                                  },
                              pendingApproval: false,
                              protocol: null
                              }
                          ]
                      }
                  ]
              }
          ],
      useProtocol: true,
      generatedAt: "2024-06-12 19:59:28",
      columns: [
              {
              id: 722604,
              name: "Preparado",
              count: 4,
              orderNo: 0,
              status: [
                      {
                      id: 3108902,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 134849,
                      justificationName: "Preparado",
                      columnId: 722604,
                      close: false
                      }
                  ]
              },
              {
              id: 722599,
              name: "Desenvolvimento",
              count: 4,
              orderNo: 1,
              status: [
                      {
                      id: 3108894,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 135214,
                      justificationName: "Desenvolvimento - Fazendo",
                      columnId: 722599,
                      close: false
                      },
                      {
                      id: 3108895,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 135215,
                      justificationName: "Desenvolvimento - Feito",
                      columnId: 722599,
                      close: false
                      },
                      {
                      id: 3264653,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 139957,
                      justificationName: "Desenvolvimento - Pausado",
                      columnId: 722599,
                      close: false
                      }
                  ]
              },
              {
              id: 722605,
              name: "Pendência",
              count: 3,
              orderNo: 2,
              status: [
                      {
                      id: 3108903,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 135216,
                      justificationName: "Pendência - Verificando",
                      columnId: 722605,
                      close: false
                      },
                      {
                      id: 3264479,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 139969,
                      justificationName: "Pendência - Liberado",
                      columnId: 722605,
                      close: false
                      },
                      {
                      id: 3264478,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 139970,
                      justificationName: "Pendência - Aguard. Terceiro",
                      columnId: 722605,
                      close: false
                      },
                      {
                      id: 4340459,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 179703,
                      justificationName: "Pendência - Pausado",
                      columnId: 722605,
                      close: false
                      }
                  ]
              },
              {
              id: 877024,
              name: "Data Review",
              count: 1,
              orderNo: 3,
              status: [
                      {
                      id: 3881730,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 159204,
                      justificationName: "Data Review Fazendo",
                      columnId: 877024,
                      close: false
                      },
                      {
                      id: 3881731,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 159205,
                      justificationName: "Data Review Liberado",
                      columnId: 877024,
                      close: false
                      },
                      {
                      id: 4340478,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 179704,
                      justificationName: "Data Review Pausado",
                      columnId: 877024,
                      close: false
                      }
                  ]
              },
              {
              id: 722600,
              name: "Validação",
              count: 2,
              orderNo: 4,
              status: [
                      {
                      id: 3108896,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 135217,
                      justificationName: "Validação - Validando",
                      columnId: 722600,
                      close: false
                      },
                      {
                      id: 3264489,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 139958,
                      justificationName: "Validação - Em Correção",
                      columnId: 722600,
                      close: false
                      },
                      {
                      id: 4340494,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 179705,
                      justificationName: "Validação - Pausado",
                      columnId: 722600,
                      close: false
                      }
                  ]
              },
              {
              id: 752744,
              name: "Validado",
              count: 20,
              orderNo: 5,
              status: [
                      {
                      id: 3264500,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 135218,
                      justificationName: "Validado Sem Termo",
                      columnId: 752744,
                      close: false
                      },
                      {
                      id: 5590022,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 209274,
                      justificationName: "Validado Com Termo",
                      columnId: 752744,
                      close: false
                      }
                  ]
              },
              {
              id: 969225,
              name: "Implantação",
              count: 0,
              orderNo: 6,
              status: [
                      {
                      id: 4340510,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 179706,
                      justificationName: "Implantação - Pausado",
                      columnId: 969225,
                      close: false
                      },
                      {
                      id: 4340509,
                      name: "Migração",
                      statusId: 180277,
                      justificationId: 179707,
                      justificationName: "Implantação - Migrando",
                      columnId: 969225,
                      close: false
                      }
                  ]
              },
              {
              id: 722601,
              name: "Implantado",
              count: 4,
              orderNo: 7,
              status: [
                      {
                      id: 3108898,
                      name: "Resolvido",
                      statusId: 88106,
                      justificationId: null,
                      justificationName: null,
                      columnId: 722601,
                      close: true
                      }
                  ]
              }
          ],
      },
      items: [
        {
          text: "Dashboards",
          href: "/"
        },
        {
          text: "Analytics",
          active: true
        }
      ],
      pageViewChart,
      clicksChart,
      conversationsChart,
      salesReportChart,
      totalSessionsChart,
      avgVisitDurationChart,
      impressionsChart,
      totalViewsChart,
      timeOnSalesChart,
      goalCompletionsChart,
      bounceRateChart,
      newSessionsChart,
      activeChart: "pageView"
    };
  },
  components: {
    CountTo,
    ActiveUsers
  },
  computed: {
    layoutTheme() {
      return useLayoutStore().layoutTheme;
    }
  },
  mounted() {
    this.handleUpdate();
  },
  watch: {
    layoutTheme: {
      handler() {
        this.handleUpdate();
      },
      deep: true
    }
  },
  methods: {
    countPrep(kanban) {
      console.log('teste',kanban);
      console.log(kanban.columns[0].count)
    },
    handleUpdate() {
      this.pageViewChart = {
        ...this.pageViewChart,
        chartOptions: {
          ...this.pageViewChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-light", "--tb-primary", "--tb-secondary"]'
          )
        }
      };
      this.totalSessionsChart = {
        ...this.totalSessionsChart,
        chartOptions: {
          ...this.totalSessionsChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary", "--tb-secondary"]')
        }
      };

      this.avgVisitDurationChart = {
        ...this.avgVisitDurationChart,
        chartOptions: {
          ...this.avgVisitDurationChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary", "--tb-secondary"]')
        }
      };
      this.impressionsChart = {
        ...this.impressionsChart,
        chartOptions: {
          ...this.impressionsChart.chartOptions,
          colors: getChartColorsArray('["--tb-secondary"]')
        }
      };
      this.totalViewsChart = {
        ...this.totalViewsChart,
        chartOptions: {
          ...this.totalViewsChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary"]')
        }
      };
      this.clicksChart = {
        ...this.clicksChart,
        chartOptions: {
          ...this.clicksChart.chartOptions,
          colors: getChartColorsArray(
            '["--tb-light", "--tb-secondary", "--tb-primary"]'
          )
        }
      };
      this.conversationsChart = {
        ...this.conversationsChart,
        chartOptions: {
          ...this.conversationsChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary-text-emphasis"]')
        }
      };
      this.timeOnSalesChart = {
        ...this.timeOnSalesChart,
        chartOptions: {
          ...this.timeOnSalesChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary"]')
        }
      };
      this.goalCompletionsChart = {
        ...this.goalCompletionsChart,
        chartOptions: {
          ...this.goalCompletionsChart.chartOptions,
          colors: getChartColorsArray('["--tb-dark"]')
        }
      };
      this.bounceRateChart = {
        ...this.bounceRateChart,
        chartOptions: {
          ...this.bounceRateChart.chartOptions,
          colors: getChartColorsArray('["--tb-danger"]')
        }
      };
      this.newSessionsChart = {
        ...this.newSessionsChart,
        chartOptions: {
          ...this.newSessionsChart.chartOptions,
          colors: getChartColorsArray('["--tb-info"]')
        }
      };
      this.salesReportChart = {
        ...this.salesReportChart,
        chartOptions: {
          ...this.salesReportChart.chartOptions,
          colors: getChartColorsArray('["--tb-primary", "--tb-secondary"]')
        }
      };
    }
  }
};
</script>

<template>
  <PageHeader :title="title" :items="items" />
  <BRow>
    <BCol xl="6">
      <BCard no-body class="card-height-300 border-0 overflow-hidden">
        <BCardBody class="p-0">
          <BRow class="g-0">
            <BCol md="6">
              <BCard
                no-body
                class="shadow-none border-end-md border-bottom rounded-0 mb-0"
              >
                <BCardBody>
                  <BDropdown
                    class="dropdown float-end"
                    toggle-class="text-reset dropdown-btn p-0"
                    no-caret
                    end
                    variant="ghost-dark"
                  >
                    <template #button-content>
                      <span class="text-muted fs-lg">
                        <i class="mdi mdi-dots-vertical align-middle" />
                      </span>
                    </template>
                    <div class="dropdown-menu-end">
                      <BLink class="dropdown-item" href="#">Today</BLink>
                      <BLink class="dropdown-item" href="#">Last Week</BLink>
                      <BLink class="dropdown-item" href="#">Last Month</BLink>
                      <BLink class="dropdown-item" href="#">Current Year</BLink>
                    </div>
                  </BDropdown>
                  <apexchart
                    height="200"
                    dir="ltr"
                    :series="[((kanban.columns[0].count/kanban.count)*100).toFixed(2)]"
                    :options="timeOnSalesChart.chartOptions"
                  >
                  </apexchart>
                  <div class="mt-2 text-center">
                    <p
                      class="text-uppercase fw-medium text-muted text-truncate fs-sm text-center"
                    >
                    {{kanban.columns[0].name}} 
                    </p>
                    <div class="align-items-center gap-2">
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-muted text-truncate mb-0">
                          Analise semanal
                        </p>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
            <BCol md="6">
              <BCard no-body class="shadow-none border-bottom rounded-0 mb-0">
                <BCardBody>
                  <BDropdown
                    class="dropdown float-end"
                    toggle-class="text-reset dropdown-btn p-0"
                    no-caret
                    end
                    variant="ghost-dark"
                  >
                    <template #button-content>
                      <span class="text-muted fs-lg">
                        <i class="mdi mdi-dots-vertical align-middle" />
                      </span>
                    </template>
                    <div class="dropdown-menu-end">
                      <BLink class="dropdown-item" href="#">Today</BLink>
                      <BLink class="dropdown-item" href="#">Last Week</BLink>
                      <BLink class="dropdown-item" href="#">Last Month</BLink>
                      <BLink class="dropdown-item" href="#">Current Year</BLink>
                    </div>
                  </BDropdown>
                  <apexchart
                    height="200"
                    dir="ltr"
                    :series="[((kanban.columns[1].count/kanban.count)*100).toFixed(2)]"
                    :options="goalCompletionsChart.chartOptions"
                  />
                  <div class="mt-2 text-center">
                    <p
                      class="text-uppercase fw-medium text-muted text-truncate fs-sm text-center"
                    >
                      {{kanban.columns[1].name}} 
                    </p>
                    <div class="align-items-center gap-2">
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-muted text-truncate mb-0">
                          Analise semanal
                        </p>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
            <BCol md="6">
              <BCard no-body class="shadow-none border-end-md rounded-0 mb-0">
                <BCardBody>
                  <BDropdown
                    class="dropdown float-end"
                    toggle-class="text-reset dropdown-btn p-0"
                    no-caret
                    end
                    variant="ghost-dark"
                  >
                    <template #button-content>
                      <span class="text-muted fs-lg">
                        <i class="mdi mdi-dots-vertical align-middle" />
                      </span>
                    </template>
                    <div class="dropdown-menu-end">
                      <BLink class="dropdown-item" href="#">Today</BLink>
                      <BLink class="dropdown-item" href="#">Last Week</BLink>
                      <BLink class="dropdown-item" href="#">Last Month</BLink>
                      <BLink class="dropdown-item" href="#">Current Year</BLink>
                    </div>
                  </BDropdown>
                  <apexchart
                    height="200"
                    dir="ltr"
                    :series="[((kanban.columns[2].count/kanban.count)*100).toFixed(2)]"
                    :options="bounceRateChart.chartOptions"
                  >
                  </apexchart>
                  <div class="mt-2 text-center">
                    <p
                      class="text-uppercase fw-medium text-muted text-truncate fs-sm text-center"
                    >
                    {{kanban.columns[2].name}}
                      Pendencia
                    </p>
                    <div class="align-items-center gap-2">
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-muted text-truncate mb-0">
                          Analise semanal
                        </p>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
            <BCol md="6">
              <BCard
                no-body
                class="shadow-none border-top border-top-md-0 rounded-0 mb-0"
              >
                <BCardBody>
                  <BDropdown
                    class="dropdown float-end"
                    toggle-class="text-reset dropdown-btn p-0"
                    no-caret
                    end
                    variant="ghost-dark"
                  >
                    <template #button-content>
                      <span class="text-muted fs-lg">
                        <i class="mdi mdi-dots-vertical align-middle" />
                      </span>
                    </template>
                    <div class="dropdown-menu-end">
                      <BLink class="dropdown-item" href="#">Today</BLink>
                      <BLink class="dropdown-item" href="#">Last Week</BLink>
                      <BLink class="dropdown-item" href="#">Last Month</BLink>
                      <BLink class="dropdown-item" href="#">Current Year</BLink>
                    </div>
                  </BDropdown>
                  <apexchart
                    height="200"
                    dir="ltr"
                    :series="[((kanban.columns[3].count/kanban.count)*100).toFixed(2)]"
                    :options="newSessionsChart.chartOptions"
                  >
                  </apexchart>
                  <div class="mt-2 text-center">
                    <p
                      class="text-uppercase fw-medium text-muted text-truncate fs-sm text-center"
                    >
                      {{kanban.columns[3].name}}
                    </p>
                  
                    <div class="align-items-center gap-2">
                    
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-muted text-truncate mb-0">
                          Analise semanal
                        </p>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>
        </BCardBody>
      </BCard>
    </BCol>
    <BCol xl="6">
      <BCard no-body class="card-height-300 border-0 overflow-hidden">
        <BCardBody class="p-0">
          <BRow class="g-0">
            <BCol md="6">
              <BCard
                no-body
                class="shadow-none border-end-md border-bottom rounded-0 mb-0"
              >
                <BCardBody>
                  <BDropdown
                    class="dropdown float-end"
                    toggle-class="text-reset dropdown-btn p-0"
                    no-caret
                    end
                    variant="ghost-dark"
                  >
                    <template #button-content>
                      <span class="text-muted fs-lg">
                        <i class="mdi mdi-dots-vertical align-middle" />
                      </span>
                    </template>
                    <div class="dropdown-menu-end">
                      <BLink class="dropdown-item" href="#">Today</BLink>
                      <BLink class="dropdown-item" href="#">Last Week</BLink>
                      <BLink class="dropdown-item" href="#">Last Month</BLink>
                      <BLink class="dropdown-item" href="#">Current Year</BLink>
                    </div>
                  </BDropdown>
                  <apexchart
                    height="200"
                    dir="ltr"
                    :series="[((kanban.columns[4].count/kanban.count)*100).toFixed(2)]"
                    :options="timeOnSalesChart.chartOptions"
                  >
                  </apexchart>
                  <div class="mt-2 text-center">
                    <p
                      class="text-uppercase fw-medium text-muted text-truncate fs-sm text-center"
                    >
                      {{kanban.columns[4].name}}
                    </p>
                    <div class="align-items-center gap-2">
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-muted text-truncate mb-0">
                          Analise semanal
                        </p>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
            <BCol md="6">
              <BCard no-body class="shadow-none border-bottom rounded-0 mb-0">
                <BCardBody>
                  <BDropdown
                    class="dropdown float-end"
                    toggle-class="text-reset dropdown-btn p-0"
                    no-caret
                    end
                    variant="ghost-dark"
                  >
                    <template #button-content>
                      <span class="text-muted fs-lg">
                        <i class="mdi mdi-dots-vertical align-middle" />
                      </span>
                    </template>
                    <div class="dropdown-menu-end">
                      <BLink class="dropdown-item" href="#">Today</BLink>
                      <BLink class="dropdown-item" href="#">Last Week</BLink>
                      <BLink class="dropdown-item" href="#">Last Month</BLink>
                      <BLink class="dropdown-item" href="#">Current Year</BLink>
                    </div>
                  </BDropdown>
                  <apexchart
                    height="200"
                    dir="ltr"
                    :series="[((kanban.columns[5].count/kanban.count)*100).toFixed(2)]"
                    :options="goalCompletionsChart.chartOptions"
                  />
                  <div class="mt-2 text-center">
                    <p
                      class="text-uppercase fw-medium text-muted text-truncate fs-sm text-center"
                    >
                      {{kanban.columns[5].name}}
                    </p>
                    <div class="align-items-center gap-2">
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-muted text-truncate mb-0">
                          Analise semanal
                        </p>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
            <BCol md="6">
              <BCard no-body class="shadow-none border-end-md rounded-0 mb-0">
                <BCardBody>
                  <BDropdown
                    class="dropdown float-end"
                    toggle-class="text-reset dropdown-btn p-0"
                    no-caret
                    end
                    variant="ghost-dark"
                  >
                    <template #button-content>
                      <span class="text-muted fs-lg">
                        <i class="mdi mdi-dots-vertical align-middle" />
                      </span>
                    </template>
                    <div class="dropdown-menu-end">
                      <BLink class="dropdown-item" href="#">Today</BLink>
                      <BLink class="dropdown-item" href="#">Last Week</BLink>
                      <BLink class="dropdown-item" href="#">Last Month</BLink>
                      <BLink class="dropdown-item" href="#">Current Year</BLink>
                    </div>
                  </BDropdown>
                  <apexchart
                    height="200"
                    dir="ltr"
                    :series="[((kanban.columns[6].count/kanban.count)*100).toFixed(2)]"
                    :options="bounceRateChart.chartOptions"
                  >
                  </apexchart>
                  <div class="mt-2 text-center">
                    <p
                      class="text-uppercase fw-medium text-muted text-truncate fs-sm text-center"
                    >
                     {{kanban.columns[6].name}}
                    </p>
                    <div class="align-items-center gap-2">
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-muted text-truncate mb-0">
                          Analise semanal
                        </p>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
            <BCol md="6">
              <BCard
                no-body
                class="shadow-none border-top border-top-md-0 rounded-0 mb-0"
              >
                <BCardBody>
                  <BDropdown
                    class="dropdown float-end"
                    toggle-class="text-reset dropdown-btn p-0"
                    no-caret
                    end
                    variant="ghost-dark"
                  >
                    <template #button-content>
                      <span class="text-muted fs-lg">
                        <i class="mdi mdi-dots-vertical align-middle" />
                      </span>
                    </template>
                    <div class="dropdown-menu-end">
                      <BLink class="dropdown-item" href="#">Today</BLink>
                      <BLink class="dropdown-item" href="#">Last Week</BLink>
                      <BLink class="dropdown-item" href="#">Last Month</BLink>
                      <BLink class="dropdown-item" href="#">Current Year</BLink>
                    </div>
                  </BDropdown>
                  <apexchart
                    height="200"
                    dir="ltr"
                    :series="[((kanban.columns[7].count/kanban.count)*100).toFixed(2)]"
                    :options="newSessionsChart.chartOptions"
                  >
                  </apexchart>
                  <div class="mt-2 text-center">
                    <p
                      class="text-uppercase fw-medium text-muted text-truncate fs-sm text-center"
                    >
                      {{kanban.columns[7].name}}
                    </p>
                    <div class="align-items-center gap-2">
                      <div class="flex-grow-1 overflow-hidden">
                        <p class="text-muted text-truncate mb-0">
                          analise geral
                        </p>
                      </div>
                    </div>
                  </div>
                </BCardBody>
              </BCard>
            </BCol>
          </BRow>
        </BCardBody>
      </BCard>
    </BCol>
  </BRow>
</template>
../../../components/dashboard/eCommerce/analytics/chartsData
