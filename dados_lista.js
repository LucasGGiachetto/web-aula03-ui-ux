const lista = document.querySelector('main');

fetch('./dados.json')
    .then(resp => resp.json())
    .then(resp => {
        resp.forEach(p => {
            const product = document.createElement('div');
            product.className = 'product';
            product.innerHTML = `
                <h3>${p.nome}</h3>
                <img src="${p.imagem}" alt="Imagem">
                <p>${p.descricao}</p>
                <p>R$ ${p.preco.toFixed(2)}</p>
            `;
            lista.appendChild(product);
        });
    });