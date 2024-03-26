document.addEventListener('DOMContentLoaded', function () {
    // Mapeando os dashs para os URLs
    const links = {
        'portal-chat': 'https://totvssuporte.zendesk.com/chat/agent#visitors/visitor_list/state#!888110-1KCmTott1KBBWZo',
        'validador-sefaz-rs': 'https://www.sefaz.rs.gov.br/NFE/NFE-VAL.aspx',
        'portal-suporte': 'https://totvscst.zendesk.com/hc/pt-br/#home',
        'manuais-totvs': 'https://tdn.totvs.com',
        'portal-nfe': 'https://www.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=7PhJ+gAVw2g=',
        'portal-cte': 'https://www.cte.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=cktLvUUKqh0=',
        'portal-dfe-rs': 'https://www.sefaz.rs.gov.br/dfe/Consultas/ConsultaPublicaDfe',
        'portal-sintegra': 'http://www.sintegra.gov.br/',
        'portal-receita': 'https://www.gov.br/receitafederal/pt-br',
        'portal-antt': 'https://consultapublica.antt.gov.br/Site/ConsultaRNTRC.aspx/consultapublica',
        'validador-tecnospeed-xml': 'https://validador.nfe.tecnospeed.com.br/',
        'monitor-sefaz': 'https://monitor.tecnospeed.com.br/',
        'sefazhmg': 'https://hom.nfe.fazenda.gov.br/portal/consultaRecaptcha.aspx?tipoConsulta=resumo&tipoConteudo=7PhJ+gAVw2g='
    };

    // Adiciona o evento de clique para cada dash
    Object.keys(links).forEach(function (id) {
        const dash = document.getElementById(id);
        if (dash) {
            dash.addEventListener('click', function () {
                window.open(links[id], '_blank');
            });
        }
    });

    // Tratando o popup para Consultar UF
    const consultarUFDash = document.getElementById('consultar-uf');
    if (consultarUFDash) {
        consultarUFDash.addEventListener('click', function () {
            const estados = {
                "11": "Rondônia",
                "12": "Acre",
                "13": "Amazonas",
                "14": "Roraima",
                "15": "Pará",
                "16": "Amapá",
                "17": "Tocantins",
                "21": "Maranhão",
                "22": "Piauí",
                "23": "Ceará",
                "24": "Rio Grande do Norte",
                "25": "Paraíba",
                "26": "Pernambuco",
                "27": "Alagoas",
                "28": "Sergipe",
                "29": "Bahia",
                "31": "Minas Gerais",
                "32": "Espírito Santo",
                "33": "Rio de Janeiro",
                "35": "São Paulo",
                "41": "Paraná",
                "42": "Santa Catarina",
                "43": "Rio Grande do Sul",
                "50": "Mato Grosso do Sul",
                "51": "Mato Grosso",
                "52": "Goiás",
                "53": "Distrito Federal"
            };
            let popupContent = '<ul>';
            Object.keys(estados).forEach(function (codigo) {
                popupContent += '<li>' + codigo + ' - ' + estados[codigo] + '</li>';
            });
            popupContent += '</ul>';
            // Cria e exibe o popup
            let popupWindow = window.open("", "Popup", "width=300,height=510");
            popupWindow.document.write(popupContent);
        });
    }
});




