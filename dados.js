const cards = document.querySelector('main');
fetch('./dados.json')
.then(resp => resp.json())
.then(resp => {
    resp.forEach(p => {
        const card = document.createElement('div');
        card.innerHTML = `
            <h3>${p.nome}</h3>
            <p>${p.descricao}</p>
            <p>${p.preco}</p>
            <img src="${p.imagem}" alt="Imagem">
        `;
        cards.appendChild(card);
    });
})