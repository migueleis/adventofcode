const { insDemo, mapaDemo, inst, mapa, mapaDemo2 } = require('./entry');

const analizarEntrada = () => {
    const lineas = mapa.split('\n');
    let entrada = new Map();
    lineas.forEach(linea => {
        const claveValor = linea.split('=');
        //console.log("claveValor", claveValor);
        const clave = claveValor[0].trim();
        //console.log("clave", clave);
        const izqDer = claveValor[1].trim().split(',');
        //console.log("izqDer", izqDer);
        const izq = izqDer[0].replace('(', '').trim();
        //console.log("izq", izq);
        const der = izqDer[1].replace(')', '').trim();
        //console.log("der", der);
        entrada.set(clave, [izq, der]);
    })
    return entrada;
}

const analizarEntrada2 = () => {
    const lineas = mapaDemo2.split('\n');
    let entrada = [];
    lineas.forEach(linea => {
        const claveValor = linea.split('=');
        //console.log("claveValor", claveValor);
        const clave = claveValor[0].trim();
        //console.log("clave", clave);
        const izqDer = claveValor[1].trim().split(',');
        //console.log("izqDer", izqDer);
        const izq = izqDer[0].replace('(', '').trim();
        //console.log("izq", izq);
        const der = izqDer[1].replace(')', '').trim();
        //console.log("der", der);
        entrada.push({ clave: { L: izq, R: der } });
    })
    return entrada;
}

const calcular = () => {
    const entrada = analizarEntrada();
    const instrucciones = inst;
    //console.log("entrada", entrada);
    let salida = false;
    let i = 0;
    let nodo = "AAA";
    //console.log("nodo", nodo);
    while (nodo !== 'ZZZ') {
        const id = instrucciones.charAt(i % instrucciones.length);
        //console.log("id", id);
        if (id === 'L') {
            let valores = entrada.get(nodo);
            //console.log("valores", valores);
            nodo = valores[0];
            //console.log("nodo", nodo);
        } else {
            let valores = entrada.get(nodo);
            //console.log("valores", valores);
            nodo = valores[1];
            //console.log("nodo", nodo);
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
    //console.log("nodesMeta", nodesMeta);
    return nodesMeta.length === nodes.length;
}

const calcular2 = () => {
    const entrada = analizarEntrada();
    const instrucciones = insDemo;
    //console.log("entrada", entrada);
    let i = 0;
    let nodo1 = "DRA";
    let nodo2 = "AAA";
    let nodo3 = "CMA";
    let nodo4 = "MNA";
    let nodo5 = "NJA";
    let nodo6 = "RVA";
    //console.log("nodo1", nodo1);
    //console.log("nodo2", nodo2);
    while (!salida(nodo1, nodo2, nodo3, nodo4, nodo5, nodo6)) {
        const id = instrucciones.charAt(i % instrucciones.length);
        //console.log("id", id);
        if (id === 'L') {
            let valores1 = entrada.get(nodo1);
            let valores2 = entrada.get(nodo2);
            let valores3 = entrada.get(nodo3);
            let valores4 = entrada.get(nodo4);
            let valores5 = entrada.get(nodo5);
            let valores6 = entrada.get(nodo6);
            //console.log("valores1", valores1);
            //console.log("valores2", valores2);
            nodo1 = valores1[0];
            nodo2 = valores2[0];
            nodo3 = valores3[0];
            nodo4 = valores4[0];
            nodo5 = valores5[0];
            nodo6 = valores6[0];
            // console.log("nodo1", nodo1);
            //console.log("nodo2", nodo2);

            //console.log("nodo", nodo);
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
            //console.log("nodo1", nodo1);
            //console.log("nodo2", nodo2);
            //console.log("nodo", nodo);
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
    console.log("nodes", nodes);
    //console.log("nodo2", nodo2);
    while (!meta(nodes)) {
        nodes = nodes.map(nodo => {
            const id = instrucciones[i % instrucciones.length];
            //console.log("id", id);
            if (id === 'L') {
                let valores = entrada.get(nodo);
                //console.log("valores", valores);
                nodo = valores[0];
                //console.log("nodo", nodo);
            } else {
                let valores = entrada.get(nodo);
                //console.log("valores", valores);
                nodo = valores[1];
                //console.log("nodo", nodo);
            }
            return nodo;
        });
        //console.log("nodesUpdated", nodes);
        i++;
    }
    return i;
}

inicio = new Date();
console.log('salida', calcular3());
//console.log("termina", terminaEnZ("22C"));
//console.log("termina", salida("11Z", "22Z"));
fin = new Date();
tiempoTranscurrido = fin - inicio;
console.log(`Tiempo transcurrido: ${tiempoTranscurrido} milisegundos`);

