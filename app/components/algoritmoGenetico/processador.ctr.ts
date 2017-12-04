/// <reference path="../../app.d.ts" />

module Blank {

    export class ProcessadorController {

        private todasAsCidades:any = [
            {nome: "cidade_001"},
            {nome: "cidade_002"},
            {nome: "cidade_003"},
            {nome: "cidade_004"},
            {nome: "cidade_005"},
            {nome: "cidade_006"},
            {nome: "cidade_007"},
            {nome: "cidade_008"},
            {nome: "cidade_009"},
            {nome: "cidade_010"},
            {nome: "cidade_011"},
            {nome: "cidade_012"},
            {nome: "cidade_013"},
            {nome: "cidade_014"},
            {nome: "cidade_015"},
            {nome: "cidade_016"},
            {nome: "cidade_017"},
            {nome: "cidade_018"},
            {nome: "cidade_019"},
            {nome: "cidade_020"},
            {nome: "cidade_021"},
            {nome: "cidade_022"},
            {nome: "cidade_023"},
            {nome: "cidade_024"},
            {nome: "cidade_025"},
            {nome: "cidade_026"},
            {nome: "cidade_027"},
            {nome: "cidade_028"},
            {nome: "cidade_029"},
            {nome: "cidade_030"},
            {nome: "cidade_031"}
        ];
        private todasAsDistancias:any = [
            {de: "cidade_001", para: "cidade_002", distancia: 102},
            {de: "cidade_001", para: "cidade_003", distancia: 103},
            {de: "cidade_001", para: "cidade_004", distancia: 104},
            {de: "cidade_001", para: "cidade_005", distancia: 105},
            {de: "cidade_001", para: "cidade_006", distancia: 106},
            {de: "cidade_001", para: "cidade_007", distancia: 107},
            {de: "cidade_001", para: "cidade_008", distancia: 108},
            {de: "cidade_001", para: "cidade_009", distancia: 109},
            {de: "cidade_001", para: "cidade_010", distancia: 110},
            {de: "cidade_001", para: "cidade_011", distancia: 111},
            {de: "cidade_001", para: "cidade_012", distancia: 112},
            {de: "cidade_001", para: "cidade_013", distancia: 113},
            {de: "cidade_001", para: "cidade_014", distancia: 114},
            {de: "cidade_001", para: "cidade_015", distancia: 115},
            {de: "cidade_001", para: "cidade_016", distancia: 116},
            {de: "cidade_001", para: "cidade_017", distancia: 117},
            {de: "cidade_001", para: "cidade_018", distancia: 118},
            {de: "cidade_001", para: "cidade_019", distancia: 119},
            {de: "cidade_001", para: "cidade_020", distancia: 120},
            {de: "cidade_001", para: "cidade_021", distancia: 121},
            {de: "cidade_001", para: "cidade_022", distancia: 122},
            {de: "cidade_001", para: "cidade_023", distancia: 123},
            {de: "cidade_001", para: "cidade_024", distancia: 124},
            {de: "cidade_001", para: "cidade_025", distancia: 125},
            {de: "cidade_001", para: "cidade_026", distancia: 126},
            {de: "cidade_001", para: "cidade_027", distancia: 127},
            {de: "cidade_001", para: "cidade_028", distancia: 128},
            {de: "cidade_001", para: "cidade_029", distancia: 129},
            {de: "cidade_001", para: "cidade_030", distancia: 130},
            {de: "cidade_001", para: "cidade_031", distancia: 131},
            {de: "cidade_002", para: "cidade_001", distancia: 201},
            {de: "cidade_002", para: "cidade_003", distancia: 203},
            {de: "cidade_002", para: "cidade_004", distancia: 204},
            {de: "cidade_002", para: "cidade_005", distancia: 205},
            {de: "cidade_002", para: "cidade_006", distancia: 206},
            {de: "cidade_002", para: "cidade_007", distancia: 207},
            {de: "cidade_002", para: "cidade_008", distancia: 208},
            {de: "cidade_002", para: "cidade_009", distancia: 209},
            {de: "cidade_002", para: "cidade_010", distancia: 210},
            {de: "cidade_002", para: "cidade_011", distancia: 211},
            {de: "cidade_002", para: "cidade_012", distancia: 212},
            {de: "cidade_002", para: "cidade_013", distancia: 213},
            {de: "cidade_002", para: "cidade_014", distancia: 214},
            {de: "cidade_002", para: "cidade_015", distancia: 215},
            {de: "cidade_002", para: "cidade_016", distancia: 216},
            {de: "cidade_002", para: "cidade_017", distancia: 217},
            {de: "cidade_002", para: "cidade_018", distancia: 218},
            {de: "cidade_002", para: "cidade_019", distancia: 219},
            {de: "cidade_002", para: "cidade_020", distancia: 220},
            {de: "cidade_002", para: "cidade_021", distancia: 221},
            {de: "cidade_002", para: "cidade_022", distancia: 222},
            {de: "cidade_002", para: "cidade_023", distancia: 223},
            {de: "cidade_002", para: "cidade_024", distancia: 224},
            {de: "cidade_002", para: "cidade_025", distancia: 225},
            {de: "cidade_002", para: "cidade_026", distancia: 226},
            {de: "cidade_002", para: "cidade_027", distancia: 227},
            {de: "cidade_002", para: "cidade_028", distancia: 228},
            {de: "cidade_002", para: "cidade_029", distancia: 229},
            {de: "cidade_002", para: "cidade_030", distancia: 230},
            {de: "cidade_002", para: "cidade_031", distancia: 231},
            {de: "cidade_003", para: "cidade_001", distancia: 301},
            {de: "cidade_003", para: "cidade_002", distancia: 302},
            {de: "cidade_003", para: "cidade_004", distancia: 304},
            {de: "cidade_003", para: "cidade_005", distancia: 305},
            {de: "cidade_003", para: "cidade_006", distancia: 306},
            {de: "cidade_003", para: "cidade_007", distancia: 307},
            {de: "cidade_003", para: "cidade_008", distancia: 308},
            {de: "cidade_003", para: "cidade_009", distancia: 309},
            {de: "cidade_003", para: "cidade_010", distancia: 310},
            {de: "cidade_003", para: "cidade_011", distancia: 311},
            {de: "cidade_003", para: "cidade_012", distancia: 312},
            {de: "cidade_003", para: "cidade_013", distancia: 313},
            {de: "cidade_003", para: "cidade_014", distancia: 314},
            {de: "cidade_003", para: "cidade_015", distancia: 315},
            {de: "cidade_003", para: "cidade_016", distancia: 316},
            {de: "cidade_003", para: "cidade_017", distancia: 317},
            {de: "cidade_003", para: "cidade_018", distancia: 318},
            {de: "cidade_003", para: "cidade_019", distancia: 319},
            {de: "cidade_003", para: "cidade_020", distancia: 320},
            {de: "cidade_003", para: "cidade_021", distancia: 321},
            {de: "cidade_003", para: "cidade_022", distancia: 322},
            {de: "cidade_003", para: "cidade_023", distancia: 323},
            {de: "cidade_003", para: "cidade_024", distancia: 324},
            {de: "cidade_003", para: "cidade_025", distancia: 325},
            {de: "cidade_003", para: "cidade_026", distancia: 326},
            {de: "cidade_003", para: "cidade_027", distancia: 327},
            {de: "cidade_003", para: "cidade_028", distancia: 328},
            {de: "cidade_003", para: "cidade_029", distancia: 329},
            {de: "cidade_003", para: "cidade_030", distancia: 330},
            {de: "cidade_003", para: "cidade_031", distancia: 331},
            {de: "cidade_004", para: "cidade_001", distancia: 401},
            {de: "cidade_004", para: "cidade_002", distancia: 402},
            {de: "cidade_004", para: "cidade_003", distancia: 403},
            {de: "cidade_004", para: "cidade_005", distancia: 405},
            {de: "cidade_004", para: "cidade_006", distancia: 406},
            {de: "cidade_004", para: "cidade_007", distancia: 407},
            {de: "cidade_004", para: "cidade_008", distancia: 408},
            {de: "cidade_004", para: "cidade_009", distancia: 409},
            {de: "cidade_004", para: "cidade_010", distancia: 410},
            {de: "cidade_004", para: "cidade_011", distancia: 411},
            {de: "cidade_004", para: "cidade_012", distancia: 412},
            {de: "cidade_004", para: "cidade_013", distancia: 413},
            {de: "cidade_004", para: "cidade_014", distancia: 414},
            {de: "cidade_004", para: "cidade_015", distancia: 415},
            {de: "cidade_004", para: "cidade_016", distancia: 416},
            {de: "cidade_004", para: "cidade_017", distancia: 417},
            {de: "cidade_004", para: "cidade_018", distancia: 418},
            {de: "cidade_004", para: "cidade_019", distancia: 419},
            {de: "cidade_004", para: "cidade_020", distancia: 420},
            {de: "cidade_004", para: "cidade_021", distancia: 421},
            {de: "cidade_004", para: "cidade_022", distancia: 422},
            {de: "cidade_004", para: "cidade_023", distancia: 423},
            {de: "cidade_004", para: "cidade_024", distancia: 424},
            {de: "cidade_004", para: "cidade_025", distancia: 425},
            {de: "cidade_004", para: "cidade_026", distancia: 426},
            {de: "cidade_004", para: "cidade_027", distancia: 427},
            {de: "cidade_004", para: "cidade_028", distancia: 428},
            {de: "cidade_004", para: "cidade_029", distancia: 429},
            {de: "cidade_004", para: "cidade_030", distancia: 430},
            {de: "cidade_004", para: "cidade_031", distancia: 431},
            {de: "cidade_005", para: "cidade_001", distancia: 501},
            {de: "cidade_005", para: "cidade_002", distancia: 502},
            {de: "cidade_005", para: "cidade_003", distancia: 503},
            {de: "cidade_005", para: "cidade_004", distancia: 504},
            {de: "cidade_005", para: "cidade_006", distancia: 506},
            {de: "cidade_005", para: "cidade_007", distancia: 507},
            {de: "cidade_005", para: "cidade_008", distancia: 508},
            {de: "cidade_005", para: "cidade_009", distancia: 509},
            {de: "cidade_005", para: "cidade_010", distancia: 510},
            {de: "cidade_005", para: "cidade_011", distancia: 511},
            {de: "cidade_005", para: "cidade_012", distancia: 512},
            {de: "cidade_005", para: "cidade_013", distancia: 513},
            {de: "cidade_005", para: "cidade_014", distancia: 514},
            {de: "cidade_005", para: "cidade_015", distancia: 515},
            {de: "cidade_005", para: "cidade_016", distancia: 516},
            {de: "cidade_005", para: "cidade_017", distancia: 517},
            {de: "cidade_005", para: "cidade_018", distancia: 518},
            {de: "cidade_005", para: "cidade_019", distancia: 519},
            {de: "cidade_005", para: "cidade_020", distancia: 520},
            {de: "cidade_005", para: "cidade_021", distancia: 521},
            {de: "cidade_005", para: "cidade_022", distancia: 522},
            {de: "cidade_005", para: "cidade_023", distancia: 523},
            {de: "cidade_005", para: "cidade_024", distancia: 524},
            {de: "cidade_005", para: "cidade_025", distancia: 525},
            {de: "cidade_005", para: "cidade_026", distancia: 526},
            {de: "cidade_005", para: "cidade_027", distancia: 527},
            {de: "cidade_005", para: "cidade_028", distancia: 528},
            {de: "cidade_005", para: "cidade_029", distancia: 529},
            {de: "cidade_005", para: "cidade_030", distancia: 530},
            {de: "cidade_005", para: "cidade_031", distancia: 531},
            {de: "cidade_006", para: "cidade_001", distancia: 601},
            {de: "cidade_006", para: "cidade_002", distancia: 602},
            {de: "cidade_006", para: "cidade_003", distancia: 603},
            {de: "cidade_006", para: "cidade_004", distancia: 604},
            {de: "cidade_006", para: "cidade_005", distancia: 605},
            {de: "cidade_006", para: "cidade_007", distancia: 607},
            {de: "cidade_006", para: "cidade_008", distancia: 608},
            {de: "cidade_006", para: "cidade_009", distancia: 609},
            {de: "cidade_006", para: "cidade_010", distancia: 610},
            {de: "cidade_006", para: "cidade_011", distancia: 611},
            {de: "cidade_006", para: "cidade_012", distancia: 612},
            {de: "cidade_006", para: "cidade_013", distancia: 613},
            {de: "cidade_006", para: "cidade_014", distancia: 614},
            {de: "cidade_006", para: "cidade_015", distancia: 615},
            {de: "cidade_006", para: "cidade_016", distancia: 616},
            {de: "cidade_006", para: "cidade_017", distancia: 617},
            {de: "cidade_006", para: "cidade_018", distancia: 618},
            {de: "cidade_006", para: "cidade_019", distancia: 619},
            {de: "cidade_006", para: "cidade_020", distancia: 620},
            {de: "cidade_006", para: "cidade_021", distancia: 621},
            {de: "cidade_006", para: "cidade_022", distancia: 622},
            {de: "cidade_006", para: "cidade_023", distancia: 623},
            {de: "cidade_006", para: "cidade_024", distancia: 624},
            {de: "cidade_006", para: "cidade_025", distancia: 625},
            {de: "cidade_006", para: "cidade_026", distancia: 626},
            {de: "cidade_006", para: "cidade_027", distancia: 627},
            {de: "cidade_006", para: "cidade_028", distancia: 628},
            {de: "cidade_006", para: "cidade_029", distancia: 629},
            {de: "cidade_006", para: "cidade_030", distancia: 630},
            {de: "cidade_006", para: "cidade_031", distancia: 631},
            {de: "cidade_007", para: "cidade_001", distancia: 701},
            {de: "cidade_007", para: "cidade_002", distancia: 702},
            {de: "cidade_007", para: "cidade_003", distancia: 703},
            {de: "cidade_007", para: "cidade_004", distancia: 704},
            {de: "cidade_007", para: "cidade_005", distancia: 705},
            {de: "cidade_007", para: "cidade_006", distancia: 706},
            {de: "cidade_007", para: "cidade_008", distancia: 708},
            {de: "cidade_007", para: "cidade_009", distancia: 709},
            {de: "cidade_007", para: "cidade_010", distancia: 710},
            {de: "cidade_007", para: "cidade_011", distancia: 711},
            {de: "cidade_007", para: "cidade_012", distancia: 712},
            {de: "cidade_007", para: "cidade_013", distancia: 713},
            {de: "cidade_007", para: "cidade_014", distancia: 714},
            {de: "cidade_007", para: "cidade_015", distancia: 715},
            {de: "cidade_007", para: "cidade_016", distancia: 716},
            {de: "cidade_007", para: "cidade_017", distancia: 717},
            {de: "cidade_007", para: "cidade_018", distancia: 718},
            {de: "cidade_007", para: "cidade_019", distancia: 719},
            {de: "cidade_007", para: "cidade_020", distancia: 720},
            {de: "cidade_007", para: "cidade_021", distancia: 721},
            {de: "cidade_007", para: "cidade_022", distancia: 722},
            {de: "cidade_007", para: "cidade_023", distancia: 723},
            {de: "cidade_007", para: "cidade_024", distancia: 724},
            {de: "cidade_007", para: "cidade_025", distancia: 725},
            {de: "cidade_007", para: "cidade_026", distancia: 726},
            {de: "cidade_007", para: "cidade_027", distancia: 727},
            {de: "cidade_007", para: "cidade_028", distancia: 728},
            {de: "cidade_007", para: "cidade_029", distancia: 729},
            {de: "cidade_007", para: "cidade_030", distancia: 730},
            {de: "cidade_007", para: "cidade_031", distancia: 731},
            {de: "cidade_008", para: "cidade_001", distancia: 801},
            {de: "cidade_008", para: "cidade_002", distancia: 802},
            {de: "cidade_008", para: "cidade_003", distancia: 803},
            {de: "cidade_008", para: "cidade_004", distancia: 804},
            {de: "cidade_008", para: "cidade_005", distancia: 805},
            {de: "cidade_008", para: "cidade_006", distancia: 806},
            {de: "cidade_008", para: "cidade_007", distancia: 807},
            {de: "cidade_008", para: "cidade_009", distancia: 809},
            {de: "cidade_008", para: "cidade_010", distancia: 810},
            {de: "cidade_008", para: "cidade_011", distancia: 811},
            {de: "cidade_008", para: "cidade_012", distancia: 812},
            {de: "cidade_008", para: "cidade_013", distancia: 813},
            {de: "cidade_008", para: "cidade_014", distancia: 814},
            {de: "cidade_008", para: "cidade_015", distancia: 815},
            {de: "cidade_008", para: "cidade_016", distancia: 816},
            {de: "cidade_008", para: "cidade_017", distancia: 817},
            {de: "cidade_008", para: "cidade_018", distancia: 818},
            {de: "cidade_008", para: "cidade_019", distancia: 819},
            {de: "cidade_008", para: "cidade_020", distancia: 820},
            {de: "cidade_008", para: "cidade_021", distancia: 821},
            {de: "cidade_008", para: "cidade_022", distancia: 822},
            {de: "cidade_008", para: "cidade_023", distancia: 823},
            {de: "cidade_008", para: "cidade_024", distancia: 824},
            {de: "cidade_008", para: "cidade_025", distancia: 825},
            {de: "cidade_008", para: "cidade_026", distancia: 826},
            {de: "cidade_008", para: "cidade_027", distancia: 827},
            {de: "cidade_008", para: "cidade_028", distancia: 828},
            {de: "cidade_008", para: "cidade_029", distancia: 829},
            {de: "cidade_008", para: "cidade_030", distancia: 830},
            {de: "cidade_008", para: "cidade_031", distancia: 831},
            {de: "cidade_009", para: "cidade_001", distancia: 901},
            {de: "cidade_009", para: "cidade_002", distancia: 902},
            {de: "cidade_009", para: "cidade_003", distancia: 903},
            {de: "cidade_009", para: "cidade_004", distancia: 904},
            {de: "cidade_009", para: "cidade_005", distancia: 905},
            {de: "cidade_009", para: "cidade_006", distancia: 906},
            {de: "cidade_009", para: "cidade_007", distancia: 907},
            {de: "cidade_009", para: "cidade_008", distancia: 908},
            {de: "cidade_009", para: "cidade_010", distancia: 910},
            {de: "cidade_009", para: "cidade_011", distancia: 911},
            {de: "cidade_009", para: "cidade_012", distancia: 912},
            {de: "cidade_009", para: "cidade_013", distancia: 913},
            {de: "cidade_009", para: "cidade_014", distancia: 914},
            {de: "cidade_009", para: "cidade_015", distancia: 915},
            {de: "cidade_009", para: "cidade_016", distancia: 916},
            {de: "cidade_009", para: "cidade_017", distancia: 917},
            {de: "cidade_009", para: "cidade_018", distancia: 918},
            {de: "cidade_009", para: "cidade_019", distancia: 919},
            {de: "cidade_009", para: "cidade_020", distancia: 920},
            {de: "cidade_009", para: "cidade_021", distancia: 921},
            {de: "cidade_009", para: "cidade_022", distancia: 922},
            {de: "cidade_009", para: "cidade_023", distancia: 923},
            {de: "cidade_009", para: "cidade_024", distancia: 924},
            {de: "cidade_009", para: "cidade_025", distancia: 925},
            {de: "cidade_009", para: "cidade_026", distancia: 926},
            {de: "cidade_009", para: "cidade_027", distancia: 927},
            {de: "cidade_009", para: "cidade_028", distancia: 928},
            {de: "cidade_009", para: "cidade_029", distancia: 929},
            {de: "cidade_009", para: "cidade_030", distancia: 930},
            {de: "cidade_009", para: "cidade_031", distancia: 931},
            {de: "cidade_010", para: "cidade_001", distancia: 1001},
            {de: "cidade_010", para: "cidade_002", distancia: 1002},
            {de: "cidade_010", para: "cidade_003", distancia: 1003},
            {de: "cidade_010", para: "cidade_004", distancia: 1004},
            {de: "cidade_010", para: "cidade_005", distancia: 1005},
            {de: "cidade_010", para: "cidade_006", distancia: 1006},
            {de: "cidade_010", para: "cidade_007", distancia: 1007},
            {de: "cidade_010", para: "cidade_008", distancia: 1008},
            {de: "cidade_010", para: "cidade_009", distancia: 1009},
            {de: "cidade_010", para: "cidade_011", distancia: 1011},
            {de: "cidade_010", para: "cidade_012", distancia: 1012},
            {de: "cidade_010", para: "cidade_013", distancia: 1013},
            {de: "cidade_010", para: "cidade_014", distancia: 1014},
            {de: "cidade_010", para: "cidade_015", distancia: 1015},
            {de: "cidade_010", para: "cidade_016", distancia: 1016},
            {de: "cidade_010", para: "cidade_017", distancia: 1017},
            {de: "cidade_010", para: "cidade_018", distancia: 1018},
            {de: "cidade_010", para: "cidade_019", distancia: 1019},
            {de: "cidade_010", para: "cidade_020", distancia: 1020},
            {de: "cidade_010", para: "cidade_021", distancia: 1021},
            {de: "cidade_010", para: "cidade_022", distancia: 1022},
            {de: "cidade_010", para: "cidade_023", distancia: 1023},
            {de: "cidade_010", para: "cidade_024", distancia: 1024},
            {de: "cidade_010", para: "cidade_025", distancia: 1025},
            {de: "cidade_010", para: "cidade_026", distancia: 1026},
            {de: "cidade_010", para: "cidade_027", distancia: 1027},
            {de: "cidade_010", para: "cidade_028", distancia: 1028},
            {de: "cidade_010", para: "cidade_029", distancia: 1029},
            {de: "cidade_010", para: "cidade_030", distancia: 1030},
            {de: "cidade_010", para: "cidade_031", distancia: 1031},
            {de: "cidade_011", para: "cidade_001", distancia: 1101},
            {de: "cidade_011", para: "cidade_002", distancia: 1102},
            {de: "cidade_011", para: "cidade_003", distancia: 1103},
            {de: "cidade_011", para: "cidade_004", distancia: 1104},
            {de: "cidade_011", para: "cidade_005", distancia: 1105},
            {de: "cidade_011", para: "cidade_006", distancia: 1106},
            {de: "cidade_011", para: "cidade_007", distancia: 1107},
            {de: "cidade_011", para: "cidade_008", distancia: 1108},
            {de: "cidade_011", para: "cidade_009", distancia: 1109},
            {de: "cidade_011", para: "cidade_010", distancia: 1110},
            {de: "cidade_011", para: "cidade_012", distancia: 1112},
            {de: "cidade_011", para: "cidade_013", distancia: 1113},
            {de: "cidade_011", para: "cidade_014", distancia: 1114},
            {de: "cidade_011", para: "cidade_015", distancia: 1115},
            {de: "cidade_011", para: "cidade_016", distancia: 1116},
            {de: "cidade_011", para: "cidade_017", distancia: 1117},
            {de: "cidade_011", para: "cidade_018", distancia: 1118},
            {de: "cidade_011", para: "cidade_019", distancia: 1119},
            {de: "cidade_011", para: "cidade_020", distancia: 1120},
            {de: "cidade_011", para: "cidade_021", distancia: 1121},
            {de: "cidade_011", para: "cidade_022", distancia: 1122},
            {de: "cidade_011", para: "cidade_023", distancia: 1123},
            {de: "cidade_011", para: "cidade_024", distancia: 1124},
            {de: "cidade_011", para: "cidade_025", distancia: 1125},
            {de: "cidade_011", para: "cidade_026", distancia: 1126},
            {de: "cidade_011", para: "cidade_027", distancia: 1127},
            {de: "cidade_011", para: "cidade_028", distancia: 1128},
            {de: "cidade_011", para: "cidade_029", distancia: 1129},
            {de: "cidade_011", para: "cidade_030", distancia: 1130},
            {de: "cidade_011", para: "cidade_031", distancia: 1131},
            {de: "cidade_012", para: "cidade_001", distancia: 1201},
            {de: "cidade_012", para: "cidade_002", distancia: 1202},
            {de: "cidade_012", para: "cidade_003", distancia: 1203},
            {de: "cidade_012", para: "cidade_004", distancia: 1204},
            {de: "cidade_012", para: "cidade_005", distancia: 1205},
            {de: "cidade_012", para: "cidade_006", distancia: 1206},
            {de: "cidade_012", para: "cidade_007", distancia: 1207},
            {de: "cidade_012", para: "cidade_008", distancia: 1208},
            {de: "cidade_012", para: "cidade_009", distancia: 1209},
            {de: "cidade_012", para: "cidade_010", distancia: 1210},
            {de: "cidade_012", para: "cidade_011", distancia: 1211},
            {de: "cidade_012", para: "cidade_013", distancia: 1213},
            {de: "cidade_012", para: "cidade_014", distancia: 1214},
            {de: "cidade_012", para: "cidade_015", distancia: 1215},
            {de: "cidade_012", para: "cidade_016", distancia: 1216},
            {de: "cidade_012", para: "cidade_017", distancia: 1217},
            {de: "cidade_012", para: "cidade_018", distancia: 1218},
            {de: "cidade_012", para: "cidade_019", distancia: 1219},
            {de: "cidade_012", para: "cidade_020", distancia: 1220},
            {de: "cidade_012", para: "cidade_021", distancia: 1221},
            {de: "cidade_012", para: "cidade_022", distancia: 1222},
            {de: "cidade_012", para: "cidade_023", distancia: 1223},
            {de: "cidade_012", para: "cidade_024", distancia: 1224},
            {de: "cidade_012", para: "cidade_025", distancia: 1225},
            {de: "cidade_012", para: "cidade_026", distancia: 1226},
            {de: "cidade_012", para: "cidade_027", distancia: 1227},
            {de: "cidade_012", para: "cidade_028", distancia: 1228},
            {de: "cidade_012", para: "cidade_029", distancia: 1229},
            {de: "cidade_012", para: "cidade_030", distancia: 1230},
            {de: "cidade_012", para: "cidade_031", distancia: 1231},
            {de: "cidade_013", para: "cidade_001", distancia: 1301},
            {de: "cidade_013", para: "cidade_002", distancia: 1302},
            {de: "cidade_013", para: "cidade_003", distancia: 1303},
            {de: "cidade_013", para: "cidade_004", distancia: 1304},
            {de: "cidade_013", para: "cidade_005", distancia: 1305},
            {de: "cidade_013", para: "cidade_006", distancia: 1306},
            {de: "cidade_013", para: "cidade_007", distancia: 1307},
            {de: "cidade_013", para: "cidade_008", distancia: 1308},
            {de: "cidade_013", para: "cidade_009", distancia: 1309},
            {de: "cidade_013", para: "cidade_010", distancia: 1310},
            {de: "cidade_013", para: "cidade_011", distancia: 1311},
            {de: "cidade_013", para: "cidade_012", distancia: 1312},
            {de: "cidade_013", para: "cidade_014", distancia: 1314},
            {de: "cidade_013", para: "cidade_015", distancia: 1315},
            {de: "cidade_013", para: "cidade_016", distancia: 1316},
            {de: "cidade_013", para: "cidade_017", distancia: 1317},
            {de: "cidade_013", para: "cidade_018", distancia: 1318},
            {de: "cidade_013", para: "cidade_019", distancia: 1319},
            {de: "cidade_013", para: "cidade_020", distancia: 1320},
            {de: "cidade_013", para: "cidade_021", distancia: 1321},
            {de: "cidade_013", para: "cidade_022", distancia: 1322},
            {de: "cidade_013", para: "cidade_023", distancia: 1323},
            {de: "cidade_013", para: "cidade_024", distancia: 1324},
            {de: "cidade_013", para: "cidade_025", distancia: 1325},
            {de: "cidade_013", para: "cidade_026", distancia: 1326},
            {de: "cidade_013", para: "cidade_027", distancia: 1327},
            {de: "cidade_013", para: "cidade_028", distancia: 1328},
            {de: "cidade_013", para: "cidade_029", distancia: 1329},
            {de: "cidade_013", para: "cidade_030", distancia: 1330},
            {de: "cidade_013", para: "cidade_031", distancia: 1331},
            {de: "cidade_014", para: "cidade_001", distancia: 1401},
            {de: "cidade_014", para: "cidade_002", distancia: 1402},
            {de: "cidade_014", para: "cidade_003", distancia: 1403},
            {de: "cidade_014", para: "cidade_004", distancia: 1404},
            {de: "cidade_014", para: "cidade_005", distancia: 1405},
            {de: "cidade_014", para: "cidade_006", distancia: 1406},
            {de: "cidade_014", para: "cidade_007", distancia: 1407},
            {de: "cidade_014", para: "cidade_008", distancia: 1408},
            {de: "cidade_014", para: "cidade_009", distancia: 1409},
            {de: "cidade_014", para: "cidade_010", distancia: 1410},
            {de: "cidade_014", para: "cidade_011", distancia: 1411},
            {de: "cidade_014", para: "cidade_012", distancia: 1412},
            {de: "cidade_014", para: "cidade_013", distancia: 1413},
            {de: "cidade_014", para: "cidade_015", distancia: 1415},
            {de: "cidade_014", para: "cidade_016", distancia: 1416},
            {de: "cidade_014", para: "cidade_017", distancia: 1417},
            {de: "cidade_014", para: "cidade_018", distancia: 1418},
            {de: "cidade_014", para: "cidade_019", distancia: 1419},
            {de: "cidade_014", para: "cidade_020", distancia: 1420},
            {de: "cidade_014", para: "cidade_021", distancia: 1421},
            {de: "cidade_014", para: "cidade_022", distancia: 1422},
            {de: "cidade_014", para: "cidade_023", distancia: 1423},
            {de: "cidade_014", para: "cidade_024", distancia: 1424},
            {de: "cidade_014", para: "cidade_025", distancia: 1425},
            {de: "cidade_014", para: "cidade_026", distancia: 1426},
            {de: "cidade_014", para: "cidade_027", distancia: 1427},
            {de: "cidade_014", para: "cidade_028", distancia: 1428},
            {de: "cidade_014", para: "cidade_029", distancia: 1429},
            {de: "cidade_014", para: "cidade_030", distancia: 1430},
            {de: "cidade_014", para: "cidade_031", distancia: 1431},
            {de: "cidade_015", para: "cidade_001", distancia: 1501},
            {de: "cidade_015", para: "cidade_002", distancia: 1502},
            {de: "cidade_015", para: "cidade_003", distancia: 1503},
            {de: "cidade_015", para: "cidade_004", distancia: 1504},
            {de: "cidade_015", para: "cidade_005", distancia: 1505},
            {de: "cidade_015", para: "cidade_006", distancia: 1506},
            {de: "cidade_015", para: "cidade_007", distancia: 1507},
            {de: "cidade_015", para: "cidade_008", distancia: 1508},
            {de: "cidade_015", para: "cidade_009", distancia: 1509},
            {de: "cidade_015", para: "cidade_010", distancia: 1510},
            {de: "cidade_015", para: "cidade_011", distancia: 1511},
            {de: "cidade_015", para: "cidade_012", distancia: 1512},
            {de: "cidade_015", para: "cidade_013", distancia: 1513},
            {de: "cidade_015", para: "cidade_014", distancia: 1514},
            {de: "cidade_015", para: "cidade_016", distancia: 1516},
            {de: "cidade_015", para: "cidade_017", distancia: 1517},
            {de: "cidade_015", para: "cidade_018", distancia: 1518},
            {de: "cidade_015", para: "cidade_019", distancia: 1519},
            {de: "cidade_015", para: "cidade_020", distancia: 1520},
            {de: "cidade_015", para: "cidade_021", distancia: 1521},
            {de: "cidade_015", para: "cidade_022", distancia: 1522},
            {de: "cidade_015", para: "cidade_023", distancia: 1523},
            {de: "cidade_015", para: "cidade_024", distancia: 1524},
            {de: "cidade_015", para: "cidade_025", distancia: 1525},
            {de: "cidade_015", para: "cidade_026", distancia: 1526},
            {de: "cidade_015", para: "cidade_027", distancia: 1527},
            {de: "cidade_015", para: "cidade_028", distancia: 1528},
            {de: "cidade_015", para: "cidade_029", distancia: 1529},
            {de: "cidade_015", para: "cidade_030", distancia: 1530},
            {de: "cidade_015", para: "cidade_031", distancia: 1531},
            {de: "cidade_016", para: "cidade_001", distancia: 1601},
            {de: "cidade_016", para: "cidade_002", distancia: 1602},
            {de: "cidade_016", para: "cidade_003", distancia: 1603},
            {de: "cidade_016", para: "cidade_004", distancia: 1604},
            {de: "cidade_016", para: "cidade_005", distancia: 1605},
            {de: "cidade_016", para: "cidade_006", distancia: 1606},
            {de: "cidade_016", para: "cidade_007", distancia: 1607},
            {de: "cidade_016", para: "cidade_008", distancia: 1608},
            {de: "cidade_016", para: "cidade_009", distancia: 1609},
            {de: "cidade_016", para: "cidade_010", distancia: 1610},
            {de: "cidade_016", para: "cidade_011", distancia: 1611},
            {de: "cidade_016", para: "cidade_012", distancia: 1612},
            {de: "cidade_016", para: "cidade_013", distancia: 1613},
            {de: "cidade_016", para: "cidade_014", distancia: 1614},
            {de: "cidade_016", para: "cidade_015", distancia: 1615},
            {de: "cidade_016", para: "cidade_017", distancia: 1617},
            {de: "cidade_016", para: "cidade_018", distancia: 1618},
            {de: "cidade_016", para: "cidade_019", distancia: 1619},
            {de: "cidade_016", para: "cidade_020", distancia: 1620},
            {de: "cidade_016", para: "cidade_021", distancia: 1621},
            {de: "cidade_016", para: "cidade_022", distancia: 1622},
            {de: "cidade_016", para: "cidade_023", distancia: 1623},
            {de: "cidade_016", para: "cidade_024", distancia: 1624},
            {de: "cidade_016", para: "cidade_025", distancia: 1625},
            {de: "cidade_016", para: "cidade_026", distancia: 1626},
            {de: "cidade_016", para: "cidade_027", distancia: 1627},
            {de: "cidade_016", para: "cidade_028", distancia: 1628},
            {de: "cidade_016", para: "cidade_029", distancia: 1629},
            {de: "cidade_016", para: "cidade_030", distancia: 1630},
            {de: "cidade_016", para: "cidade_031", distancia: 1631},
            {de: "cidade_017", para: "cidade_001", distancia: 1701},
            {de: "cidade_017", para: "cidade_002", distancia: 1702},
            {de: "cidade_017", para: "cidade_003", distancia: 1703},
            {de: "cidade_017", para: "cidade_004", distancia: 1704},
            {de: "cidade_017", para: "cidade_005", distancia: 1705},
            {de: "cidade_017", para: "cidade_006", distancia: 1706},
            {de: "cidade_017", para: "cidade_007", distancia: 1707},
            {de: "cidade_017", para: "cidade_008", distancia: 1708},
            {de: "cidade_017", para: "cidade_009", distancia: 1709},
            {de: "cidade_017", para: "cidade_010", distancia: 1710},
            {de: "cidade_017", para: "cidade_011", distancia: 1711},
            {de: "cidade_017", para: "cidade_012", distancia: 1712},
            {de: "cidade_017", para: "cidade_013", distancia: 1713},
            {de: "cidade_017", para: "cidade_014", distancia: 1714},
            {de: "cidade_017", para: "cidade_015", distancia: 1715},
            {de: "cidade_017", para: "cidade_016", distancia: 1716},
            {de: "cidade_017", para: "cidade_018", distancia: 1718},
            {de: "cidade_017", para: "cidade_019", distancia: 1719},
            {de: "cidade_017", para: "cidade_020", distancia: 1720},
            {de: "cidade_017", para: "cidade_021", distancia: 1721},
            {de: "cidade_017", para: "cidade_022", distancia: 1722},
            {de: "cidade_017", para: "cidade_023", distancia: 1723},
            {de: "cidade_017", para: "cidade_024", distancia: 1724},
            {de: "cidade_017", para: "cidade_025", distancia: 1725},
            {de: "cidade_017", para: "cidade_026", distancia: 1726},
            {de: "cidade_017", para: "cidade_027", distancia: 1727},
            {de: "cidade_017", para: "cidade_028", distancia: 1728},
            {de: "cidade_017", para: "cidade_029", distancia: 1729},
            {de: "cidade_017", para: "cidade_030", distancia: 1730},
            {de: "cidade_017", para: "cidade_031", distancia: 1731},
            {de: "cidade_018", para: "cidade_001", distancia: 1801},
            {de: "cidade_018", para: "cidade_002", distancia: 1802},
            {de: "cidade_018", para: "cidade_003", distancia: 1803},
            {de: "cidade_018", para: "cidade_004", distancia: 1804},
            {de: "cidade_018", para: "cidade_005", distancia: 1805},
            {de: "cidade_018", para: "cidade_006", distancia: 1806},
            {de: "cidade_018", para: "cidade_007", distancia: 1807},
            {de: "cidade_018", para: "cidade_008", distancia: 1808},
            {de: "cidade_018", para: "cidade_009", distancia: 1809},
            {de: "cidade_018", para: "cidade_010", distancia: 1810},
            {de: "cidade_018", para: "cidade_011", distancia: 1811},
            {de: "cidade_018", para: "cidade_012", distancia: 1812},
            {de: "cidade_018", para: "cidade_013", distancia: 1813},
            {de: "cidade_018", para: "cidade_014", distancia: 1814},
            {de: "cidade_018", para: "cidade_015", distancia: 1815},
            {de: "cidade_018", para: "cidade_016", distancia: 1816},
            {de: "cidade_018", para: "cidade_017", distancia: 1817},
            {de: "cidade_018", para: "cidade_019", distancia: 1819},
            {de: "cidade_018", para: "cidade_020", distancia: 1820},
            {de: "cidade_018", para: "cidade_021", distancia: 1821},
            {de: "cidade_018", para: "cidade_022", distancia: 1822},
            {de: "cidade_018", para: "cidade_023", distancia: 1823},
            {de: "cidade_018", para: "cidade_024", distancia: 1824},
            {de: "cidade_018", para: "cidade_025", distancia: 1825},
            {de: "cidade_018", para: "cidade_026", distancia: 1826},
            {de: "cidade_018", para: "cidade_027", distancia: 1827},
            {de: "cidade_018", para: "cidade_028", distancia: 1828},
            {de: "cidade_018", para: "cidade_029", distancia: 1829},
            {de: "cidade_018", para: "cidade_030", distancia: 1830},
            {de: "cidade_018", para: "cidade_031", distancia: 1831},
            {de: "cidade_019", para: "cidade_001", distancia: 1901},
            {de: "cidade_019", para: "cidade_002", distancia: 1902},
            {de: "cidade_019", para: "cidade_003", distancia: 1903},
            {de: "cidade_019", para: "cidade_004", distancia: 1904},
            {de: "cidade_019", para: "cidade_005", distancia: 1905},
            {de: "cidade_019", para: "cidade_006", distancia: 1906},
            {de: "cidade_019", para: "cidade_007", distancia: 1907},
            {de: "cidade_019", para: "cidade_008", distancia: 1908},
            {de: "cidade_019", para: "cidade_009", distancia: 1909},
            {de: "cidade_019", para: "cidade_010", distancia: 1910},
            {de: "cidade_019", para: "cidade_011", distancia: 1911},
            {de: "cidade_019", para: "cidade_012", distancia: 1912},
            {de: "cidade_019", para: "cidade_013", distancia: 1913},
            {de: "cidade_019", para: "cidade_014", distancia: 1914},
            {de: "cidade_019", para: "cidade_015", distancia: 1915},
            {de: "cidade_019", para: "cidade_016", distancia: 1916},
            {de: "cidade_019", para: "cidade_017", distancia: 1917},
            {de: "cidade_019", para: "cidade_018", distancia: 1918},
            {de: "cidade_019", para: "cidade_020", distancia: 1920},
            {de: "cidade_019", para: "cidade_021", distancia: 1921},
            {de: "cidade_019", para: "cidade_022", distancia: 1922},
            {de: "cidade_019", para: "cidade_023", distancia: 1923},
            {de: "cidade_019", para: "cidade_024", distancia: 1924},
            {de: "cidade_019", para: "cidade_025", distancia: 1925},
            {de: "cidade_019", para: "cidade_026", distancia: 1926},
            {de: "cidade_019", para: "cidade_027", distancia: 1927},
            {de: "cidade_019", para: "cidade_028", distancia: 1928},
            {de: "cidade_019", para: "cidade_029", distancia: 1929},
            {de: "cidade_019", para: "cidade_030", distancia: 1930},
            {de: "cidade_019", para: "cidade_031", distancia: 1931},
            {de: "cidade_020", para: "cidade_001", distancia: 2001},
            {de: "cidade_020", para: "cidade_002", distancia: 2002},
            {de: "cidade_020", para: "cidade_003", distancia: 2003},
            {de: "cidade_020", para: "cidade_004", distancia: 2004},
            {de: "cidade_020", para: "cidade_005", distancia: 2005},
            {de: "cidade_020", para: "cidade_006", distancia: 2006},
            {de: "cidade_020", para: "cidade_007", distancia: 2007},
            {de: "cidade_020", para: "cidade_008", distancia: 2008},
            {de: "cidade_020", para: "cidade_009", distancia: 2009},
            {de: "cidade_020", para: "cidade_010", distancia: 2010},
            {de: "cidade_020", para: "cidade_011", distancia: 2011},
            {de: "cidade_020", para: "cidade_012", distancia: 2012},
            {de: "cidade_020", para: "cidade_013", distancia: 2013},
            {de: "cidade_020", para: "cidade_014", distancia: 2014},
            {de: "cidade_020", para: "cidade_015", distancia: 2015},
            {de: "cidade_020", para: "cidade_016", distancia: 2016},
            {de: "cidade_020", para: "cidade_017", distancia: 2017},
            {de: "cidade_020", para: "cidade_018", distancia: 2018},
            {de: "cidade_020", para: "cidade_019", distancia: 2019},
            {de: "cidade_020", para: "cidade_021", distancia: 2021},
            {de: "cidade_020", para: "cidade_022", distancia: 2022},
            {de: "cidade_020", para: "cidade_023", distancia: 2023},
            {de: "cidade_020", para: "cidade_024", distancia: 2024},
            {de: "cidade_020", para: "cidade_025", distancia: 2025},
            {de: "cidade_020", para: "cidade_026", distancia: 2026},
            {de: "cidade_020", para: "cidade_027", distancia: 2027},
            {de: "cidade_020", para: "cidade_028", distancia: 2028},
            {de: "cidade_020", para: "cidade_029", distancia: 2029},
            {de: "cidade_020", para: "cidade_030", distancia: 2030},
            {de: "cidade_020", para: "cidade_031", distancia: 2031},
            {de: "cidade_021", para: "cidade_001", distancia: 2101},
            {de: "cidade_021", para: "cidade_002", distancia: 2102},
            {de: "cidade_021", para: "cidade_003", distancia: 2103},
            {de: "cidade_021", para: "cidade_004", distancia: 2104},
            {de: "cidade_021", para: "cidade_005", distancia: 2105},
            {de: "cidade_021", para: "cidade_006", distancia: 2106},
            {de: "cidade_021", para: "cidade_007", distancia: 2107},
            {de: "cidade_021", para: "cidade_008", distancia: 2108},
            {de: "cidade_021", para: "cidade_009", distancia: 2109},
            {de: "cidade_021", para: "cidade_010", distancia: 2110},
            {de: "cidade_021", para: "cidade_011", distancia: 2111},
            {de: "cidade_021", para: "cidade_012", distancia: 2112},
            {de: "cidade_021", para: "cidade_013", distancia: 2113},
            {de: "cidade_021", para: "cidade_014", distancia: 2114},
            {de: "cidade_021", para: "cidade_015", distancia: 2115},
            {de: "cidade_021", para: "cidade_016", distancia: 2116},
            {de: "cidade_021", para: "cidade_017", distancia: 2117},
            {de: "cidade_021", para: "cidade_018", distancia: 2118},
            {de: "cidade_021", para: "cidade_019", distancia: 2119},
            {de: "cidade_021", para: "cidade_020", distancia: 2120},
            {de: "cidade_021", para: "cidade_022", distancia: 2122},
            {de: "cidade_021", para: "cidade_023", distancia: 2123},
            {de: "cidade_021", para: "cidade_024", distancia: 2124},
            {de: "cidade_021", para: "cidade_025", distancia: 2125},
            {de: "cidade_021", para: "cidade_026", distancia: 2126},
            {de: "cidade_021", para: "cidade_027", distancia: 2127},
            {de: "cidade_021", para: "cidade_028", distancia: 2128},
            {de: "cidade_021", para: "cidade_029", distancia: 2129},
            {de: "cidade_021", para: "cidade_030", distancia: 2130},
            {de: "cidade_021", para: "cidade_031", distancia: 2131},
            {de: "cidade_022", para: "cidade_001", distancia: 2201},
            {de: "cidade_022", para: "cidade_002", distancia: 2202},
            {de: "cidade_022", para: "cidade_003", distancia: 2203},
            {de: "cidade_022", para: "cidade_004", distancia: 2204},
            {de: "cidade_022", para: "cidade_005", distancia: 2205},
            {de: "cidade_022", para: "cidade_006", distancia: 2206},
            {de: "cidade_022", para: "cidade_007", distancia: 2207},
            {de: "cidade_022", para: "cidade_008", distancia: 2208},
            {de: "cidade_022", para: "cidade_009", distancia: 2209},
            {de: "cidade_022", para: "cidade_010", distancia: 2210},
            {de: "cidade_022", para: "cidade_011", distancia: 2211},
            {de: "cidade_022", para: "cidade_012", distancia: 2212},
            {de: "cidade_022", para: "cidade_013", distancia: 2213},
            {de: "cidade_022", para: "cidade_014", distancia: 2214},
            {de: "cidade_022", para: "cidade_015", distancia: 2215},
            {de: "cidade_022", para: "cidade_016", distancia: 2216},
            {de: "cidade_022", para: "cidade_017", distancia: 2217},
            {de: "cidade_022", para: "cidade_018", distancia: 2218},
            {de: "cidade_022", para: "cidade_019", distancia: 2219},
            {de: "cidade_022", para: "cidade_020", distancia: 2220},
            {de: "cidade_022", para: "cidade_021", distancia: 2221},
            {de: "cidade_022", para: "cidade_023", distancia: 2223},
            {de: "cidade_022", para: "cidade_024", distancia: 2224},
            {de: "cidade_022", para: "cidade_025", distancia: 2225},
            {de: "cidade_022", para: "cidade_026", distancia: 2226},
            {de: "cidade_022", para: "cidade_027", distancia: 2227},
            {de: "cidade_022", para: "cidade_028", distancia: 2228},
            {de: "cidade_022", para: "cidade_029", distancia: 2229},
            {de: "cidade_022", para: "cidade_030", distancia: 2230},
            {de: "cidade_022", para: "cidade_031", distancia: 2231},
            {de: "cidade_023", para: "cidade_001", distancia: 2301},
            {de: "cidade_023", para: "cidade_002", distancia: 2302},
            {de: "cidade_023", para: "cidade_003", distancia: 2303},
            {de: "cidade_023", para: "cidade_004", distancia: 2304},
            {de: "cidade_023", para: "cidade_005", distancia: 2305},
            {de: "cidade_023", para: "cidade_006", distancia: 2306},
            {de: "cidade_023", para: "cidade_007", distancia: 2307},
            {de: "cidade_023", para: "cidade_008", distancia: 2308},
            {de: "cidade_023", para: "cidade_009", distancia: 2309},
            {de: "cidade_023", para: "cidade_010", distancia: 2310},
            {de: "cidade_023", para: "cidade_011", distancia: 2311},
            {de: "cidade_023", para: "cidade_012", distancia: 2312},
            {de: "cidade_023", para: "cidade_013", distancia: 2313},
            {de: "cidade_023", para: "cidade_014", distancia: 2314},
            {de: "cidade_023", para: "cidade_015", distancia: 2315},
            {de: "cidade_023", para: "cidade_016", distancia: 2316},
            {de: "cidade_023", para: "cidade_017", distancia: 2317},
            {de: "cidade_023", para: "cidade_018", distancia: 2318},
            {de: "cidade_023", para: "cidade_019", distancia: 2319},
            {de: "cidade_023", para: "cidade_020", distancia: 2320},
            {de: "cidade_023", para: "cidade_021", distancia: 2321},
            {de: "cidade_023", para: "cidade_022", distancia: 2322},
            {de: "cidade_023", para: "cidade_024", distancia: 2324},
            {de: "cidade_023", para: "cidade_025", distancia: 2325},
            {de: "cidade_023", para: "cidade_026", distancia: 2326},
            {de: "cidade_023", para: "cidade_027", distancia: 2327},
            {de: "cidade_023", para: "cidade_028", distancia: 2328},
            {de: "cidade_023", para: "cidade_029", distancia: 2329},
            {de: "cidade_023", para: "cidade_030", distancia: 2330},
            {de: "cidade_023", para: "cidade_031", distancia: 2331},
            {de: "cidade_024", para: "cidade_001", distancia: 2401},
            {de: "cidade_024", para: "cidade_002", distancia: 2402},
            {de: "cidade_024", para: "cidade_003", distancia: 2403},
            {de: "cidade_024", para: "cidade_004", distancia: 2404},
            {de: "cidade_024", para: "cidade_005", distancia: 2405},
            {de: "cidade_024", para: "cidade_006", distancia: 2406},
            {de: "cidade_024", para: "cidade_007", distancia: 2407},
            {de: "cidade_024", para: "cidade_008", distancia: 2408},
            {de: "cidade_024", para: "cidade_009", distancia: 2409},
            {de: "cidade_024", para: "cidade_010", distancia: 2410},
            {de: "cidade_024", para: "cidade_011", distancia: 2411},
            {de: "cidade_024", para: "cidade_012", distancia: 2412},
            {de: "cidade_024", para: "cidade_013", distancia: 2413},
            {de: "cidade_024", para: "cidade_014", distancia: 2414},
            {de: "cidade_024", para: "cidade_015", distancia: 2415},
            {de: "cidade_024", para: "cidade_016", distancia: 2416},
            {de: "cidade_024", para: "cidade_017", distancia: 2417},
            {de: "cidade_024", para: "cidade_018", distancia: 2418},
            {de: "cidade_024", para: "cidade_019", distancia: 2419},
            {de: "cidade_024", para: "cidade_020", distancia: 2420},
            {de: "cidade_024", para: "cidade_021", distancia: 2421},
            {de: "cidade_024", para: "cidade_022", distancia: 2422},
            {de: "cidade_024", para: "cidade_023", distancia: 2423},
            {de: "cidade_024", para: "cidade_025", distancia: 2425},
            {de: "cidade_024", para: "cidade_026", distancia: 2426},
            {de: "cidade_024", para: "cidade_027", distancia: 2427},
            {de: "cidade_024", para: "cidade_028", distancia: 2428},
            {de: "cidade_024", para: "cidade_029", distancia: 2429},
            {de: "cidade_024", para: "cidade_030", distancia: 2430},
            {de: "cidade_024", para: "cidade_031", distancia: 2431},
            {de: "cidade_025", para: "cidade_001", distancia: 2501},
            {de: "cidade_025", para: "cidade_002", distancia: 2502},
            {de: "cidade_025", para: "cidade_003", distancia: 2503},
            {de: "cidade_025", para: "cidade_004", distancia: 2504},
            {de: "cidade_025", para: "cidade_005", distancia: 2505},
            {de: "cidade_025", para: "cidade_006", distancia: 2506},
            {de: "cidade_025", para: "cidade_007", distancia: 2507},
            {de: "cidade_025", para: "cidade_008", distancia: 2508},
            {de: "cidade_025", para: "cidade_009", distancia: 2509},
            {de: "cidade_025", para: "cidade_010", distancia: 2510},
            {de: "cidade_025", para: "cidade_011", distancia: 2511},
            {de: "cidade_025", para: "cidade_012", distancia: 2512},
            {de: "cidade_025", para: "cidade_013", distancia: 2513},
            {de: "cidade_025", para: "cidade_014", distancia: 2514},
            {de: "cidade_025", para: "cidade_015", distancia: 2515},
            {de: "cidade_025", para: "cidade_016", distancia: 2516},
            {de: "cidade_025", para: "cidade_017", distancia: 2517},
            {de: "cidade_025", para: "cidade_018", distancia: 2518},
            {de: "cidade_025", para: "cidade_019", distancia: 2519},
            {de: "cidade_025", para: "cidade_020", distancia: 2520},
            {de: "cidade_025", para: "cidade_021", distancia: 2521},
            {de: "cidade_025", para: "cidade_022", distancia: 2522},
            {de: "cidade_025", para: "cidade_023", distancia: 2523},
            {de: "cidade_025", para: "cidade_024", distancia: 2524},
            {de: "cidade_025", para: "cidade_026", distancia: 2526},
            {de: "cidade_025", para: "cidade_027", distancia: 2527},
            {de: "cidade_025", para: "cidade_028", distancia: 2528},
            {de: "cidade_025", para: "cidade_029", distancia: 2529},
            {de: "cidade_025", para: "cidade_030", distancia: 2530},
            {de: "cidade_025", para: "cidade_031", distancia: 2531},
            {de: "cidade_026", para: "cidade_001", distancia: 2601},
            {de: "cidade_026", para: "cidade_002", distancia: 2602},
            {de: "cidade_026", para: "cidade_003", distancia: 2603},
            {de: "cidade_026", para: "cidade_004", distancia: 2604},
            {de: "cidade_026", para: "cidade_005", distancia: 2605},
            {de: "cidade_026", para: "cidade_006", distancia: 2606},
            {de: "cidade_026", para: "cidade_007", distancia: 2607},
            {de: "cidade_026", para: "cidade_008", distancia: 2608},
            {de: "cidade_026", para: "cidade_009", distancia: 2609},
            {de: "cidade_026", para: "cidade_010", distancia: 2610},
            {de: "cidade_026", para: "cidade_011", distancia: 2611},
            {de: "cidade_026", para: "cidade_012", distancia: 2612},
            {de: "cidade_026", para: "cidade_013", distancia: 2613},
            {de: "cidade_026", para: "cidade_014", distancia: 2614},
            {de: "cidade_026", para: "cidade_015", distancia: 2615},
            {de: "cidade_026", para: "cidade_016", distancia: 2616},
            {de: "cidade_026", para: "cidade_017", distancia: 2617},
            {de: "cidade_026", para: "cidade_018", distancia: 2618},
            {de: "cidade_026", para: "cidade_019", distancia: 2619},
            {de: "cidade_026", para: "cidade_020", distancia: 2620},
            {de: "cidade_026", para: "cidade_021", distancia: 2621},
            {de: "cidade_026", para: "cidade_022", distancia: 2622},
            {de: "cidade_026", para: "cidade_023", distancia: 2623},
            {de: "cidade_026", para: "cidade_024", distancia: 2624},
            {de: "cidade_026", para: "cidade_025", distancia: 2625},
            {de: "cidade_026", para: "cidade_027", distancia: 2627},
            {de: "cidade_026", para: "cidade_028", distancia: 2628},
            {de: "cidade_026", para: "cidade_029", distancia: 2629},
            {de: "cidade_026", para: "cidade_030", distancia: 2630},
            {de: "cidade_026", para: "cidade_031", distancia: 2631},
            {de: "cidade_027", para: "cidade_001", distancia: 2701},
            {de: "cidade_027", para: "cidade_002", distancia: 2702},
            {de: "cidade_027", para: "cidade_003", distancia: 2703},
            {de: "cidade_027", para: "cidade_004", distancia: 2704},
            {de: "cidade_027", para: "cidade_005", distancia: 2705},
            {de: "cidade_027", para: "cidade_006", distancia: 2706},
            {de: "cidade_027", para: "cidade_007", distancia: 2707},
            {de: "cidade_027", para: "cidade_008", distancia: 2708},
            {de: "cidade_027", para: "cidade_009", distancia: 2709},
            {de: "cidade_027", para: "cidade_010", distancia: 2710},
            {de: "cidade_027", para: "cidade_011", distancia: 2711},
            {de: "cidade_027", para: "cidade_012", distancia: 2712},
            {de: "cidade_027", para: "cidade_013", distancia: 2713},
            {de: "cidade_027", para: "cidade_014", distancia: 2714},
            {de: "cidade_027", para: "cidade_015", distancia: 2715},
            {de: "cidade_027", para: "cidade_016", distancia: 2716},
            {de: "cidade_027", para: "cidade_017", distancia: 2717},
            {de: "cidade_027", para: "cidade_018", distancia: 2718},
            {de: "cidade_027", para: "cidade_019", distancia: 2719},
            {de: "cidade_027", para: "cidade_020", distancia: 2720},
            {de: "cidade_027", para: "cidade_021", distancia: 2721},
            {de: "cidade_027", para: "cidade_022", distancia: 2722},
            {de: "cidade_027", para: "cidade_023", distancia: 2723},
            {de: "cidade_027", para: "cidade_024", distancia: 2724},
            {de: "cidade_027", para: "cidade_025", distancia: 2725},
            {de: "cidade_027", para: "cidade_026", distancia: 2726},
            {de: "cidade_027", para: "cidade_028", distancia: 2728},
            {de: "cidade_027", para: "cidade_029", distancia: 2729},
            {de: "cidade_027", para: "cidade_030", distancia: 2730},
            {de: "cidade_027", para: "cidade_031", distancia: 2731},
            {de: "cidade_028", para: "cidade_001", distancia: 2801},
            {de: "cidade_028", para: "cidade_002", distancia: 2802},
            {de: "cidade_028", para: "cidade_003", distancia: 2803},
            {de: "cidade_028", para: "cidade_004", distancia: 2804},
            {de: "cidade_028", para: "cidade_005", distancia: 2805},
            {de: "cidade_028", para: "cidade_006", distancia: 2806},
            {de: "cidade_028", para: "cidade_007", distancia: 2807},
            {de: "cidade_028", para: "cidade_008", distancia: 2808},
            {de: "cidade_028", para: "cidade_009", distancia: 2809},
            {de: "cidade_028", para: "cidade_010", distancia: 2810},
            {de: "cidade_028", para: "cidade_011", distancia: 2811},
            {de: "cidade_028", para: "cidade_012", distancia: 2812},
            {de: "cidade_028", para: "cidade_013", distancia: 2813},
            {de: "cidade_028", para: "cidade_014", distancia: 2814},
            {de: "cidade_028", para: "cidade_015", distancia: 2815},
            {de: "cidade_028", para: "cidade_016", distancia: 2816},
            {de: "cidade_028", para: "cidade_017", distancia: 2817},
            {de: "cidade_028", para: "cidade_018", distancia: 2818},
            {de: "cidade_028", para: "cidade_019", distancia: 2819},
            {de: "cidade_028", para: "cidade_020", distancia: 2820},
            {de: "cidade_028", para: "cidade_021", distancia: 2821},
            {de: "cidade_028", para: "cidade_022", distancia: 2822},
            {de: "cidade_028", para: "cidade_023", distancia: 2823},
            {de: "cidade_028", para: "cidade_024", distancia: 2824},
            {de: "cidade_028", para: "cidade_025", distancia: 2825},
            {de: "cidade_028", para: "cidade_026", distancia: 2826},
            {de: "cidade_028", para: "cidade_027", distancia: 2827},
            {de: "cidade_028", para: "cidade_029", distancia: 2829},
            {de: "cidade_028", para: "cidade_030", distancia: 2830},
            {de: "cidade_028", para: "cidade_031", distancia: 2831},
            {de: "cidade_029", para: "cidade_001", distancia: 2901},
            {de: "cidade_029", para: "cidade_002", distancia: 2902},
            {de: "cidade_029", para: "cidade_003", distancia: 2903},
            {de: "cidade_029", para: "cidade_004", distancia: 2904},
            {de: "cidade_029", para: "cidade_005", distancia: 2905},
            {de: "cidade_029", para: "cidade_006", distancia: 2906},
            {de: "cidade_029", para: "cidade_007", distancia: 2907},
            {de: "cidade_029", para: "cidade_008", distancia: 2908},
            {de: "cidade_029", para: "cidade_009", distancia: 2909},
            {de: "cidade_029", para: "cidade_010", distancia: 2910},
            {de: "cidade_029", para: "cidade_011", distancia: 2911},
            {de: "cidade_029", para: "cidade_012", distancia: 2912},
            {de: "cidade_029", para: "cidade_013", distancia: 2913},
            {de: "cidade_029", para: "cidade_014", distancia: 2914},
            {de: "cidade_029", para: "cidade_015", distancia: 2915},
            {de: "cidade_029", para: "cidade_016", distancia: 2916},
            {de: "cidade_029", para: "cidade_017", distancia: 2917},
            {de: "cidade_029", para: "cidade_018", distancia: 2918},
            {de: "cidade_029", para: "cidade_019", distancia: 2919},
            {de: "cidade_029", para: "cidade_020", distancia: 2920},
            {de: "cidade_029", para: "cidade_021", distancia: 2921},
            {de: "cidade_029", para: "cidade_022", distancia: 2922},
            {de: "cidade_029", para: "cidade_023", distancia: 2923},
            {de: "cidade_029", para: "cidade_024", distancia: 2924},
            {de: "cidade_029", para: "cidade_025", distancia: 2925},
            {de: "cidade_029", para: "cidade_026", distancia: 2926},
            {de: "cidade_029", para: "cidade_027", distancia: 2927},
            {de: "cidade_029", para: "cidade_028", distancia: 2928},
            {de: "cidade_029", para: "cidade_030", distancia: 2930},
            {de: "cidade_029", para: "cidade_031", distancia: 2931},
            {de: "cidade_030", para: "cidade_001", distancia: 3001},
            {de: "cidade_030", para: "cidade_002", distancia: 3002},
            {de: "cidade_030", para: "cidade_003", distancia: 3003},
            {de: "cidade_030", para: "cidade_004", distancia: 3004},
            {de: "cidade_030", para: "cidade_005", distancia: 3005},
            {de: "cidade_030", para: "cidade_006", distancia: 3006},
            {de: "cidade_030", para: "cidade_007", distancia: 3007},
            {de: "cidade_030", para: "cidade_008", distancia: 3008},
            {de: "cidade_030", para: "cidade_009", distancia: 3009},
            {de: "cidade_030", para: "cidade_010", distancia: 3010},
            {de: "cidade_030", para: "cidade_011", distancia: 3011},
            {de: "cidade_030", para: "cidade_012", distancia: 3012},
            {de: "cidade_030", para: "cidade_013", distancia: 3013},
            {de: "cidade_030", para: "cidade_014", distancia: 3014},
            {de: "cidade_030", para: "cidade_015", distancia: 3015},
            {de: "cidade_030", para: "cidade_016", distancia: 3016},
            {de: "cidade_030", para: "cidade_017", distancia: 3017},
            {de: "cidade_030", para: "cidade_018", distancia: 3018},
            {de: "cidade_030", para: "cidade_019", distancia: 3019},
            {de: "cidade_030", para: "cidade_020", distancia: 3020},
            {de: "cidade_030", para: "cidade_021", distancia: 3021},
            {de: "cidade_030", para: "cidade_022", distancia: 3022},
            {de: "cidade_030", para: "cidade_023", distancia: 3023},
            {de: "cidade_030", para: "cidade_024", distancia: 3024},
            {de: "cidade_030", para: "cidade_025", distancia: 3025},
            {de: "cidade_030", para: "cidade_026", distancia: 3026},
            {de: "cidade_030", para: "cidade_027", distancia: 3027},
            {de: "cidade_030", para: "cidade_028", distancia: 3028},
            {de: "cidade_030", para: "cidade_029", distancia: 3029},
            {de: "cidade_030", para: "cidade_031", distancia: 3031},
            {de: "cidade_031", para: "cidade_001", distancia: 3101},
            {de: "cidade_031", para: "cidade_002", distancia: 3102},
            {de: "cidade_031", para: "cidade_003", distancia: 3103},
            {de: "cidade_031", para: "cidade_004", distancia: 3104},
            {de: "cidade_031", para: "cidade_005", distancia: 3105},
            {de: "cidade_031", para: "cidade_006", distancia: 3106},
            {de: "cidade_031", para: "cidade_007", distancia: 3107},
            {de: "cidade_031", para: "cidade_008", distancia: 3108},
            {de: "cidade_031", para: "cidade_009", distancia: 3109},
            {de: "cidade_031", para: "cidade_010", distancia: 3110},
            {de: "cidade_031", para: "cidade_011", distancia: 3111},
            {de: "cidade_031", para: "cidade_012", distancia: 3112},
            {de: "cidade_031", para: "cidade_013", distancia: 3113},
            {de: "cidade_031", para: "cidade_014", distancia: 3114},
            {de: "cidade_031", para: "cidade_015", distancia: 3115},
            {de: "cidade_031", para: "cidade_016", distancia: 3116},
            {de: "cidade_031", para: "cidade_017", distancia: 3117},
            {de: "cidade_031", para: "cidade_018", distancia: 3118},
            {de: "cidade_031", para: "cidade_019", distancia: 3119},
            {de: "cidade_031", para: "cidade_020", distancia: 3120},
            {de: "cidade_031", para: "cidade_021", distancia: 3121},
            {de: "cidade_031", para: "cidade_022", distancia: 3122},
            {de: "cidade_031", para: "cidade_023", distancia: 3123},
            {de: "cidade_031", para: "cidade_024", distancia: 3124},
            {de: "cidade_031", para: "cidade_025", distancia: 3125},
            {de: "cidade_031", para: "cidade_026", distancia: 3126},
            {de: "cidade_031", para: "cidade_027", distancia: 3127},
            {de: "cidade_031", para: "cidade_028", distancia: 3128},
            {de: "cidade_031", para: "cidade_029", distancia: 3129},
            {de: "cidade_031", para: "cidade_030", distancia: 3130}
        ];

        private quantidadeCromossomos:number = 80;
        private quantidadeCidades:number = 30;
        
        private qtdVezesQueNaoMelhorou:number = 0;
        private qtdVezesQuePodeMelhorar:number = 40;
        private solucaoOtimaAnterior:any = [];
        private solucaoOtimaAtual:any = [];

        private populacao:any = [];
        private novoCromossomo:any = [];

        private idCromossomos:any = [];
        private idCidades:any = [];

        constructor(private $scope: ng.IScope,
                    private $http: ng.IHttpService,
                    private $q: ng.IQService) {

            this.inicializa();

            while (true) {
                if (this.naoMelhorouPorNVezes()) {
                    break;
                }
                
                this.processaCrossOver();
                this.processaMutacao();
                this.processaHelitismo();
                this.solucaoOtimaAtual = this.populacao[0]; // Primeiro cromossomo
                console.log(this.solucaoOtimaAtual);
            }
        }

        // Metodos Genericos
        public ordenaCromossomosDaPopulacao(p_populacao:any):any { // QuickSort para ordenar
            return this.quickSort(p_populacao);
        }

        private quickSort(p_populacao:any):any {
                if (p_populacao.length <= 1) {
                    return p_populacao;
                }

                var pivot = p_populacao[0];

                var left = []; 
                var right = [];

                for (var i = 1; i < p_populacao.length; i++) {
                    p_populacao[i].fitness < pivot.fitness ? left.push(p_populacao[i]) : right.push(p_populacao[i]);
                }

                return this.quickSort(left).concat(pivot, this.quickSort(right));
        }

        public randomizarCidades(p_todasAsCidades:any):any {

            var copiaCidades = angular.copy(p_todasAsCidades);
            var cidadesRand = [];

            // Gera nova ordem de cidades
            while (copiaCidades.length > 0) {
                // Pega uma cidade randomica
                var indiceCidade = Math.floor(Math.random() * copiaCidades.length);
                var cidade = copiaCidades[indiceCidade];

                // Remove essa cidade, para nao ser escolhida novamente
                copiaCidades.splice(indiceCidade, 1);

                // Adiciona na nova ordem
                cidadesRand.push(cidade);
            }

            return cidadesRand;
        }

        public calculaFitness(p_cidades:any, p_distancias:any):number {
            var fitness = 0;

            // Ida
            for (var i = 0; i < p_cidades.length - 1; i++) {
                var origem = p_cidades[i].nome;
                var destino = p_cidades[i+1].nome;
                p_distancias.forEach((d) => {
                    if (d.de == origem, d.para === destino) {
                        fitness += d.distancia;
                    }
                });
            }

            // Volta
            for (var i = p_cidades.length - 1; i > 0; i--) {
                var origem = p_cidades[i].nome;
                var destino = p_cidades[i-1].nome;
                p_distancias.forEach((d) => {
                    if (d.de == origem, d.para === destino) {
                        fitness += d.distancia;
                    }
                });
            }

            return fitness;
        }

        public aconteceuCrossOver():boolean {
            //75% de change de acontecer
            return (Math.floor(Math.random() * 4)) <= 2;
        }

        public sorteiaIdsDiferentes(p_quantidade):any {
            var idA = Math.floor(Math.random() * p_quantidade);
            var idB = Math.floor(Math.random() * p_quantidade);

            while(idA === idB) {
                idB = Math.floor(Math.random() * p_quantidade);
            }

            return [idA, idB];
        }

        public substituiNulos(p_cidades:any, p_cidadesNaoAdicionadas:any):any {
            for (var i = 0; i < p_cidades.length; ++i) {
                if (p_cidades[i] == null) {
                    // Adiciona em null uma cidade que ainda nao foi adicionada
                    p_cidades[i] = p_cidadesNaoAdicionadas[0];
                    p_cidadesNaoAdicionadas.shift();
                }
            }

            return p_cidades;
        }



        private carregaPopulacao():void {
            for (var i = 0; i < this.quantidadeCromossomos; ++i) {

                var cromossomo = {fitness: 0, cidades: []};
                cromossomo.cidades = this.randomizarCidades(this.todasAsCidades);
                cromossomo.fitness = this.calculaFitness(cromossomo.cidades, this.todasAsDistancias);
                this.populacao.push(cromossomo);

            }
        }

        private inicializa():void {
            this.carregaPopulacao();
            this.populacao = this.ordenaCromossomosDaPopulacao(this.populacao);
        }

        private naoMelhorouPorNVezes():boolean {
            if (this.solucaoOtimaAtual.lenght == 0 && this.solucaoOtimaAnterior.lenght  == 0) {
                return false;
            }


            if (this.solucaoOtimaAnterior.fitness === this.solucaoOtimaAtual.fitness) { 
                // não melhorou
                this.qtdVezesQueNaoMelhorou++;
            } else if (this.solucaoOtimaAnterior.fitness < this.solucaoOtimaAtual.fitness) { 
                // melhorou, zera o contador de vezes que nao melhorou
                this.solucaoOtimaAnterior = angular.copy(this.solucaoOtimaAtual);
                this.qtdVezesQueNaoMelhorou = 0;
            }

            if (this.qtdVezesQueNaoMelhorou === this.qtdVezesQuePodeMelhorar) {
                return true;
            }
            return false;
        }

        private processaCrossOver():any {
            for (var i = 0; i < 40; ++i) {
                if (this.aconteceuCrossOver()) {
                    this.executaCrossOver();
                }
            }
        }

        private executaCrossOver():void {
            // Sorteia dois cromossomos
            this.idCromossomos = this.sorteiaIdsDiferentes(this.quantidadeCromossomos);

            var cidadesNaoAdicionadas = angular.copy(this.todasAsCidades);

            // Inicializa cromossomoX
            var cromossomoX = {fitness: 0, cidades: []};

            // Monta o cromossomo X
            for (var i = 0; i < this.quantidadeCidades; i++) {
                var deQualCromossomoVouPegar = Math.floor(Math.random() * 2);

                var cidadeA = this.populacao[this.idCromossomos[0]].cidades[i];
                var cidadeB = this.populacao[this.idCromossomos[1]].cidades[i];

                var cidade = null;

                if (cidadeA !== cidadeB) {
                    if (deQualCromossomoVouPegar == 0) {
                        cidade = cidadeA; // Pega cridade do cromossomoA
                    } else {
                        cidade = cidadeB; // Pega cridade do cromossomoB
                    }
                }

                // Remove cidade da lista de Cidades Nao Adicionadas
                cidadesNaoAdicionadas.splice(cidadesNaoAdicionadas.indexOf(cidade), 1);

                // Adiciona cidade no novo cromossomo
                cromossomoX.cidades.push(cidade);
            }


            // Substitui cidades nulas do cromossomo
            cromossomoX.cidades = this.substituiNulos(cromossomoX.cidades, cidadesNaoAdicionadas);

            // Calcula o fitness do novo cromossomo
            cromossomoX.fitness = this.calculaFitness(cromossomoX.cidades, this.todasAsDistancias);

            // Adiciona na população
            this.populacao.push(cromossomoX);
        }

        private processaMutacao():void {
            // Mutação
            // 10% de change de acontecer
            var aconteceuMutacao = (Math.floor(Math.random() * 10)) == 0;
            if (aconteceuMutacao) {
                // Sorteia um cromossomo
                var idCromossomo = Math.floor(Math.random() * this.quantidadeCromossomos);
                var cromossomoMutado = this.populacao[idCromossomo];

                // Sorteia duas cidades
                this.idCidades = this.sorteiaIdsDiferentes(this.quantidadeCidades);
                
                // Altera o cromossomo mutado
                var aux = cromossomoMutado.cidades[this.idCidades[0]];
                cromossomoMutado.cidades[this.idCidades[0]] = cromossomoMutado.cidades[this.idCidades[1]];
                cromossomoMutado.cidades[this.idCidades[1]] = aux;

                // Altera na população
                this.populacao[idCromossomo] = cromossomoMutado;
            }
        }

        private processaHelitismo():void {
            this.ordenaCromossomosDaPopulacao(this.populacao);

            // Deixa apenas a quantidade correta da população
            this.populacao.slice(0, this.quantidadeCromossomos);
        }
        
    }

}

app.controller('ProcessadorController', ['$scope', "$http", "$q", Blank.ProcessadorController]);