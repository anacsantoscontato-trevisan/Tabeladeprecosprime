// 1. Variável que armazena todos os dados da tabela,
//    substituindo o carregamento do arquivo JSON.
const dadosTabela = [
  {
    "MODELO": "D-01",
    "DESCRICAO": "D-01 CHANFRADA DIAMANTEIRA 3MM",
    "LARGURA (mm)": "3MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 33,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "D-03",
    "DESCRICAO": "D-03 RETA DIAMANTADEIRA 3MM",
    "LARGURA (mm)": "3MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 33,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "D-05",
    "DESCRICAO": "D-05 DIAMANTADA/ INFINITO 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "D-06",
    "DESCRICAO": "D-06 DIAMANTADA/RETA/DOIS FRIZOS 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "D-08",
    "DESCRICAO": "D-08 RETA/DIAMANTADA/FLECHA 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "D-09",
    "DESCRICAO": "D-09 RETA/1CHANFRO LATERAL/DIAMANTADA/FRIZO LATERAL 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-01",
    "DESCRICAO": "P-01 LISO (POLIDO) 2MM",
    "LARGURA (mm)": "2MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 23,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-02",
    "DESCRICAO": "P-02 LISO (POLIDO) 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": 7,
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": "R$ 60,40"
  },
  {
    "MODELO": "P-03",
    "DESCRICAO": "P-03 POLIDA FRIZO TORTO 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": 1,
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": "R$ 45,40"
  },
  {
    "MODELO": "P-04",
    "DESCRICAO": "P-04 MEIA CANA POLIDA 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": 1,
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": "R$ 45,40"
  },
  {
    "MODELO": "P-05",
    "DESCRICAO": "P-05 LISO (POLIDO) 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": 15,
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": "R$ 80,40"
  },
  {
    "MODELO": "P-06",
    "DESCRICAO": "P-06 RETA 2FRIZOS ACETINADA 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": 5,
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": "R$ 55,40"
  },
  {
    "MODELO": "P-07",
    "DESCRICAO": "P-07 JATEADO 3MM",
    "LARGURA (mm)": "3MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 32,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-08",
    "DESCRICAO": "P-08 CHANFRADO / JATEADO 3MM",
    "LARGURA (mm)": "3MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 32,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-09",
    "DESCRICAO": "P-09 ABAULADA/JATEADO 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-10",
    "DESCRICAO": "P-10 RETA/CHANFRADA/JATEADA INFINITO 5MM",
    "LARGURA (mm)": "5MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-11",
    "DESCRICAO": "P-11 RETA/JATEADA/2FRIZOS 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-12",
    "DESCRICAO": "P-12 ACETINADO 3MM",
    "LARGURA (mm)": "3MM",
    "PEDRAS": 2,
    "PRECO VENDA UNIT": "R$ 33,90",
    "COM PEDRA": "R$ 38,90"
  },
  {
    "MODELO": "P-13",
    "DESCRICAO": "P-13 LISO (POLIDO) 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-14",
    "DESCRICAO": "P-14 MEIA CANA FRIZO TORTO JATEADO 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-15",
    "DESCRICAO": "P-15 RETA FRIZO JATEADO 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-16",
    "DESCRICAO": "P-16 MEIA CANA JATEADO DOIS FRIZOS 5MM",
    "LARGURA (mm)": "5MM",
    "PEDRAS": 3,
    "PRECO VENDA UNIT": "R$ 53,90",
    "COM PEDRA": "R$ 61,40"
  },
  {
    "MODELO": "P-17",
    "DESCRICAO": "P-17 JATEADO 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-18",
    "DESCRICAO": "P-18 TRADICIONAL MEIA CANA POLIDA 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-19",
    "DESCRICAO": "P-19 JATEADO 2MM",
    "LARGURA (mm)": "2MM",
    "PEDRAS": 1,
    "PRECO VENDA UNIT": "R$ 23,90",
    "COM PEDRA": "R$ 26,40"
  },
  {
    "MODELO": "P-20",
    "DESCRICAO": "P-20 LISO (POLIDO)/JATEADO 3MM",
    "LARGURA (mm)": "3MM",
    "PEDRAS": 1,
    "PRECO VENDA UNIT": "R$ 33,90",
    "COM PEDRA": "R$ 36,40"
  },
  {
    "MODELO": "P-21",
    "DESCRICAO": "P-21 RETA POLIDA 2MM",
    "LARGURA (mm)": "2MM",
    "PEDRAS": 10,
    "PRECO VENDA UNIT": "R$ 23,90",
    "COM PEDRA": "R$ 48,90"
  },
  {
    "MODELO": "P-22",
    "DESCRICAO": "P-22 RETA DOIS FRIZOS JATEADO 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-23",
    "DESCRICAO": "P-23 MEIA CANA ACETINADO FRIZO CENTRAL 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": 3,
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": "R$ 50,40"
  },
  {
    "MODELO": "P-24",
    "DESCRICAO": "P-24 LISO (POLIDO)/JATEADO NA CAVA 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": 1,
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": "R$ 45,40"
  },
  {
    "MODELO": "P-25",
    "DESCRICAO": "P-25 LISO/JATEADO/ABAULADA 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": 1,
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": "R$ 45,40"
  },
  {
    "MODELO": "P-26",
    "DESCRICAO": "P-26 ACETINADO 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": 1,
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": "R$ 45,40"
  },
  {
    "MODELO": "P-28",
    "DESCRICAO": "P-28 ABALOADA POLIDA 5MM",
    "LARGURA (mm)": "5MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 53,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-29",
    "DESCRICAO": "P-29 LISO/JATEADO 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-30",
    "DESCRICAO": "P-30 ABALOADA/JATEADA 2MM",
    "LARGURA (mm)": "2MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 23,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-32",
    "DESCRICAO": "P-32 LISO/JATEADO NA CAVA 5MM",
    "LARGURA (mm)": "5MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 53,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-33",
    "DESCRICAO": "P-33 CHANFRADA JATEADO 2MM",
    "LARGURA (mm)": "2MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 23,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-34",
    "DESCRICAO": "P-34 ABALOADA/POLIDA/FRIZO JATEADO 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-35",
    "DESCRICAO": "P-35 RETA/JATEADA 2MM",
    "LARGURA (mm)": "2MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 23,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-36",
    "DESCRICAO": "P-36 RETA / JATEADA INFINITO 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-37",
    "DESCRICAO": "P-37 JATEADO 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-38",
    "DESCRICAO": "P-38 LISO/JATEADO NA CAVA/MEIA CANA 2MM",
    "LARGURA (mm)": "2MM",
    "PEDRAS": 3,
    "PRECO VENDA UNIT": "R$ 23,90",
    "COM PEDRA": "R$ 31,40"
  },
  {
    "MODELO": "P-39",
    "DESCRICAO": "P-39 MEIA CANA/JATEADO 5MM",
    "LARGURA (mm)": "5MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 53,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-40",
    "DESCRICAO": "P-40 LISO/JATEADO NA CAVA 3MM",
    "LARGURA (mm)": "3MM",
    "PEDRAS": 1,
    "PRECO VENDA UNIT": "R$ 33,90",
    "COM PEDRA": "R$ 36,40"
  },
  {
    "MODELO": "P-41",
    "DESCRICAO": "P-41 LISO/ACETINADO ROLO DE LIXA PQ 6MM",
    "LARGURA (mm)": "6MM",
    "PEDRAS": 3,
    "PRECO VENDA UNIT": "R$ 62,90",
    "COM PEDRA": "R$ 70,40"
  },
  {
    "MODELO": "P-42",
    "DESCRICAO": "P-42 ABALOADA/POLIDA 2MM",
    "LARGURA (mm)": "2MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 23,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-43",
    "DESCRICAO": "P-43 LISO/ACETINADO 6MM",
    "LARGURA (mm)": "6MM",
    "PEDRAS": 15,
    "PRECO VENDA UNIT": "R$ 62,90",
    "COM PEDRA": "R$ 100,40"
  },
  {
    "MODELO": "P-44",
    "DESCRICAO": "P-44 ACETINADO 6MM",
    "LARGURA (mm)": "6MM",
    "PEDRAS": 3,
    "PRECO VENDA UNIT": "R$ 62,90",
    "COM PEDRA": "R$ 70,40"
  },
  {
    "MODELO": "P-45",
    "DESCRICAO": "P-45 ACETINADO/JATEADO NA CAVA 5MM",
    "LARGURA (mm)": "5MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 53,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-46",
    "DESCRICAO": "P-46 LISO (POLIDO) 5MM",
    "LARGURA (mm)": "5MM",
    "PEDRAS": 3,
    "PRECO VENDA UNIT": "R$ 53,90",
    "COM PEDRA": "R$ 61,40"
  },
  {
    "MODELO": "P-47",
    "DESCRICAO": "P-47 JATEADO/LISO 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-48",
    "DESCRICAO": "P-48 JATEADO 3MM",
    "LARGURA (mm)": "3MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 33,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-49",
    "DESCRICAO": "P-49 CHANFRADA / POLIDA 3MM",
    "LARGURA (mm)": "3MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 33,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-50",
    "DESCRICAO": "P-50  2MM",
    "LARGURA (mm)": "2MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 23,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-51",
    "DESCRICAO": "P-51 ABALOADA POLIDA 2MM",
    "LARGURA (mm)": "2MM",
    "PEDRAS": 1,
    "PRECO VENDA UNIT": "R$ 23,90",
    "COM PEDRA": "R$ 26,40"
  },
  {
    "MODELO": "P-52",
    "DESCRICAO": "P-52  2,5MM",
    "LARGURA (mm)": "2,5MM",
    "PEDRAS": 7,
    "PRECO VENDA UNIT": "R$ 38,90",
    "COM PEDRA": "R$ 56,40"
  },
  {
    "MODELO": "P-53",
    "DESCRICAO": "P-53 LISO/JATEADO 5MM",
    "LARGURA (mm)": "5MM",
    "PEDRAS": 1,
    "PRECO VENDA UNIT": "R$ 53,90",
    "COM PEDRA": "R$ 56,40"
  },
  {
    "MODELO": "P-54",
    "DESCRICAO": "P-54 LISO/JATEADO 6MM",
    "LARGURA (mm)": "6MM",
    "PEDRAS": 2,
    "PRECO VENDA UNIT": "R$ 62,90",
    "COM PEDRA": "R$ 67,90"
  },
  {
    "MODELO": "P-55",
    "DESCRICAO": "P-55 LISO/ACETINADO/JATEADO NA CAVA 5MM",
    "LARGURA (mm)": "5MM",
    "PEDRAS": 2,
    "PRECO VENDA UNIT": "R$ 53,90",
    "COM PEDRA": "R$ 58,90"
  },
  {
    "MODELO": "P-56",
    "DESCRICAO": "P-56 LISO (POLIDO) 3MM",
    "LARGURA (mm)": "3MM",
    "PEDRAS": 10,
    "PRECO VENDA UNIT": "R$ 33,90",
    "COM PEDRA": "R$ 58,90"
  },
  {
    "MODELO": "P-57",
    "DESCRICAO": "P-57 LISO (POLIDO)/MEIA CANA 5MM",
    "LARGURA (mm)": "5MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 53,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-58",
    "DESCRICAO": "P-58 JATEADO 5MM",
    "LARGURA (mm)": "5MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 53,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-59",
    "DESCRICAO": "P-59 LISO/JATEADO/MEIA CANA 5MM",
    "LARGURA (mm)": "5MM",
    "PEDRAS": "",
    "PRECO VENDA UNIT": "R$ 53,90",
    "COM PEDRA": ""
  },
  {
    "MODELO": "P-60",
    "DESCRICAO": "P-60 MEIA CANA/ACETINADO/DOIS FRIZOS 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": 1,
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": "R$ 45,40"
  },
  {
    "MODELO": "P-61",
    "DESCRICAO": "P-61 LISO/JATEADO NA CAVA 4MM",
    "LARGURA (mm)": "4MM",
    "PEDRAS": 1,
    "PRECO VENDA UNIT": "R$ 42,90",
    "COM PEDRA": "R$ 45,40"
  },
  {
    "MODELO": "P-65",
    "DESCRICAO": "P-65 POLIDA/CAVA LATERAL JATEADA 6MM",
    "LARGURA (mm)": "6MM",
    "PEDRAS": 10,
    "PRECO VENDA UNIT": "R$ 62,90",
    "COM PEDRA": "R$ 87,90"
  },
  {
    "MODELO": "P-66",
    "DESCRICAO": "P-66 JATEADO/FRISO 7MM",
    "LARGURA (mm)": "7MM",
    "PEDRAS": 10,
    "PRECO VENDA UNIT": "R$ 71,90",
    "COM PEDRA": "R$ 96,60"
  }
];

// 2. Inicialização: Renderiza a tabela inicial e configura o filtro
document.addEventListener('DOMContentLoaded', () => {
    // O JS agora apenas renderiza a tabela imediatamente, sem precisar do 'fetch'
    renderizarTabela(dadosTabela);
    document.getElementById("campoBusca").addEventListener('input', filtrarTabela);
});


// 3. RENDERIZAÇÃO: Constrói as linhas da tabela no HTML
function renderizarTabela(dados) {
    const corpoTabela = document.getElementById("corpoTabela");
    corpoTabela.innerHTML = '';

    if (dados.length === 0) {
        corpoTabela.innerHTML = '<tr><td colspan="5">Nenhum item corresponde à sua pesquisa.</td></tr>';
        return;
    }

    dados.forEach(item => {
        const linha = document.createElement('tr');
        
        // As chaves são as mesmas do seu JSON/Array:
        linha.innerHTML = `
            <td>${item.MODELO}</td>
            <td>${item.DESCRICAO}</td>
            <td>${item['LARGURA (mm)']}</td>
            <td>${item['PRECO VENDA UNIT']}</td>
            <td>${item['COM PEDRA']}</td>
        `;
        corpoTabela.appendChild(linha);
    });
}


// 4. FILTRAGEM: Faz a pesquisa no array de dados
function filtrarTabela() {
    const input = document.getElementById("campoBusca");
    const filtro = input.value.toUpperCase();

    // Filtra o array original de dadosTabela
    const dadosFiltrados = dadosTabela.filter(item => {
        // Concatena as chaves que você deseja pesquisar
        const textoCompleto = (
            item.MODELO + " " + 
            item.DESCRICAO + " " + 
            item['LARGURA (mm)'] + " " +
            item['PRECO VENDA UNIT'] + " " +
            item['COM PEDRA']
        ).toUpperCase();
        
        return textoCompleto.includes(filtro);
    });

    renderizarTabela(dadosFiltrados);
}