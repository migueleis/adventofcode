const { insDemo, mapaDemo, inst, mapa, mapaDemo2 } = require('./entry');

const analizarEntrada = () => {
    const lineas = mapa.split('\n');
    let entrada = new Map();
    lineas.forEach(linea => {
        const claveValor = linea.split('=');
        const clave = claveValor[0].trim();
        const izqDer = claveValor[1].trim().split(',');
        const izq = izqDer[0].replace('(', '').trim();
        const der = izqDer[1].replace(')', '').trim();
        entrada.set(clave, [izq, der]);
    })
    return entrada;
}

const analizarEntrada2 = () => {
    const lineas = mapaDemo2.split('\n');
    let entrada = [];
    lineas.forEach(linea => {
        const claveValor = linea.split('=');
        const clave = claveValor[0].trim();
        const izqDer = claveValor[1].trim().split(',');
        const izq = izqDer[0].replace('(', '').trim();
        const der = izqDer[1].replace(')', '').trim();
        entrada.push({ clave: { L: izq, R: der } });
    })
    return entrada;
}

const calcular = () => {
    const entrada = analizarEntrada();
    const instrucciones = inst;
    let salida = false;
    let i = 0;
    let nodo = "AAA";
    while (nodo !== 'ZZZ') {
        const id = instrucciones.charAt(i % instrucciones.length);
        if (id === 'L') {
            let valores = entrada.get(nodo);
            nodo = valores[0];
        } else {
            let valores = entrada.get(nodo);
            nodo = valores[1];
        }
        i++;
    }
    return i;
}

const terminaEnZ = (nodo) => {
    return nodo.charAt(2) === 'Z';
}

const salidaDemo = (nodo1, nodo2) => {
    return terminaEnZ(nodo1) && terminaEnZ(nodo2);
}

const salida = (nodo1, nodo2, nodo3, nodo4, nodo5, nodo6) => {
    return terminaEnZ(nodo1) && terminaEnZ(nodo2) && terminaEnZ(nodo3)
        && terminaEnZ(nodo4) && terminaEnZ(nodo5) && terminaEnZ(nodo6);
}

const meta = (nodes) => {
    const nodesMeta = nodes.filter(node => node.endsWith("Z"));
    return nodesMeta.length === nodes.length;
}

const calcular2 = () => {
    const entrada = analizarEntrada();
    const instrucciones = insDemo;
    let i = 0;
    let nodo1 = "DRA";
    let nodo2 = "AAA";
    let nodo3 = "CMA";
    let nodo4 = "MNA";
    let nodo5 = "NJA";
    let nodo6 = "RVA";
    while (!salida(nodo1, nodo2, nodo3, nodo4, nodo5, nodo6)) {
        const id = instrucciones.charAt(i % instrucciones.length);
        if (id === 'L') {
            let valores1 = entrada.get(nodo1);
            let valores2 = entrada.get(nodo2);
            let valores3 = entrada.get(nodo3);
            let valores4 = entrada.get(nodo4);
            let valores5 = entrada.get(nodo5);
            let valores6 = entrada.get(nodo6);
            nodo1 = valores1[0];
            nodo2 = valores2[0];
            nodo3 = valores3[0];
            nodo4 = valores4[0];
            nodo5 = valores5[0];
            nodo6 = valores6[0];
        } else {
            let valores1 = entrada.get(nodo1);
            let valores2 = entrada.get(nodo2);
            let valores3 = entrada.get(nodo3);
            let valores4 = entrada.get(nodo4);
            let valores5 = entrada.get(nodo5);
            let valores6 = entrada.get(nodo6);
            nodo1 = valores1[1];
            nodo2 = valores2[1];
            nodo3 = valores3[1];
            nodo4 = valores4[1];
            nodo5 = valores5[1];
            nodo6 = valores6[1];
        }
        i++;
    }
    return i;
}

const calcular3 = () => {
    const entrada = analizarEntrada();
    const instrucciones = [...inst];
    console.log("entrada", entrada);
    console.log("instrucciones", instrucciones);
    let i = 0;
    let nodes = Array.from(entrada.keys()).filter(k => k.endsWith('A'));
    while (!meta(nodes)) {
        nodes = nodes.map(nodo => {
            const id = instrucciones[i % instrucciones.length];
            if (id === 'L') {
                let valores = entrada.get(nodo);
                nodo = valores[0];
            } else {
                let valores = entrada.get(nodo);
                nodo = valores[1];
            }
            return nodo;
        });
        i++;
    }
    return i;
}

inicio = new Date();
console.log('salida', calcular3());
fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);

