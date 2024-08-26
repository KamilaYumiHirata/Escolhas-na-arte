const nomes = ["Fernanda", "Kamila", "Giovana", "Daviana", "Nathan", "Raphael", "Rebeca"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)
