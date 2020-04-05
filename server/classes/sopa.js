class Sopa {

    constructor(sopa, palabra) {
        let sopaArray = [];
        let palabraArray = [];
        
        sopa.split('\r\n').forEach(letra => sopaArray.push(letra.split('')));
        palabra.split('').forEach(letra => palabraArray.push(letra))

        this.sopa = sopaArray;
        this.palabra = palabraArray;
        this.coincidencias = [];
    }

    getLetraPosicion(x, y){

    };

    descifrarArriba(){
        let total = 0;
        let { sopa, palabra, coincidencias } = this;

        sopa.forEach( (linea, x) => linea.forEach( (letra, y) => {
                
                // Tiene espacio la plabra
                let tieneEspacio = (x + 1 - palabra.length) >= 0;
                
                // Comprobar si existe la palabra
                let coincide = true;
                if(tieneEspacio){
                    palabra.forEach((letraPalabra, i) => {
                        // Comprobar si coinciden las letras en orden
                        coincide = sopa[x-i][y] === letraPalabra && coincide;
                        if(coincide) {
                            // Si la palabra ha sido examinada totalmente 
                            if(i === palabra.length - 1){
                                // Guarda la coincidencia final
                                coincidencias.push({x1:x-i, y1: y, x, y, tipo: 'Arriba'});
                                coincide = true;
                            }
                        }
                    })
                }
            })
        )
    }

    descifrarArribaVerticalDerecha(){
        let total = 0;
        let { sopa, palabra, coincidencias } = this;

        sopa.forEach( (linea, x) => linea.forEach( (letra, y) => {
                // Tiene espacio la plabra
                let tieneEspacio = typeof sopa[x-palabra.length + 1] !== 'undefined' && typeof sopa[x-palabra.length + 1][y+palabra.length - 1] !== 'undefined';
                
                // Comprobar si existe la palabra
                let coincide = true;
                if(tieneEspacio){
                    palabra.forEach((letraPalabra, i) => {
                        // Comprobar si coinciden las letras en orden
                        coincide = typeof sopa[x-i] !== 'undefined' && sopa[x-i][y+i] === letraPalabra && coincide;
                        if(coincide) {
                            // Si la palabra ha sido examinada totalmente 
                            if(i === palabra.length - 1){
                                // Guarda la coincidencia final
                                coincidencias.push({x1: x-i, y1: y+i, x, y, tipo: 'ArribaVerticalDerecha'});
                                coincide = true;
                            }
                        }
                    })
                }
            })
        )
    }

    descifrarDerecha(){
        let total = 0;
        let { sopa, palabra, coincidencias } = this;

        sopa.forEach( (linea, x) => linea.forEach( (letra, y) => {
                // Tiene espacio la plabra
                let tieneEspacio = typeof sopa[x] !== 'undefined' && typeof sopa[x][y+palabra.length - 1] !== 'undefined';
                // console.log({letra: sopa[x][y], x, y, x1: x, y1: y+palabra.length - 1, tieneEspacio});
                
                // Comprobar si existe la palabra
                let coincide = true;
                if(tieneEspacio){
                    palabra.forEach((letraPalabra, i) => {
                        // Comprobar si coinciden las letras en orden
                        coincide = typeof sopa[x] !== 'undefined' && sopa[x][y+i] === letraPalabra && coincide;
                        if(coincide) {
                            // Si la palabra ha sido examinada totalmente 
                            if(i === palabra.length - 1){
                                // Guarda la coincidencia final
                                coincidencias.push({x1: x, y1: y+i, x, y, tipo: 'Derecha'});
                                coincide = true;
                            }
                        }
                    })
                }
            })
        )

    }

    descifrarAbajoVerticalDerecha(){
        let total = 0;
        let { sopa, palabra, coincidencias } = this;

        sopa.forEach( (linea, x) => linea.forEach( (letra, y) => {
                // Tiene espacio la plabra
                let tieneEspacio = typeof sopa[x+palabra.length - 1] !== 'undefined' && typeof sopa[x+palabra.length - 1][y+palabra.length - 1] !== 'undefined';
                
                // Comprobar si existe la palabra
                let coincide = true;
                if(tieneEspacio){
                    palabra.forEach((letraPalabra, i) => {
                        // Comprobar si coinciden las letras en orden
                        coincide = typeof sopa[x+i] !== 'undefined' && sopa[x+i][y+i] === letraPalabra && coincide;
                        if(coincide) {
                            // Si la palabra ha sido examinada totalmente 
                            if(i === palabra.length - 1){
                                // Guarda la coincidencia final
                                coincidencias.push({x1: x+i, y1: y+i, x, y, tipo: 'AbajoVerticalDerecha'});
                                coincide = true;
                            }
                        }
                    })
                }
            })
        )
    }

    descifrarAbajo(){
        let total = 0;
        let { sopa, palabra, coincidencias } = this;

        sopa.forEach( (linea, x) => linea.forEach( (letra, y) => {
                
                // Tiene espacio la plabra
                let tieneEspacio = (x + 1 + palabra.length) >= 0;
                
                // Comprobar si existe la palabra
                let coincide = true;
                if(tieneEspacio){
                    palabra.forEach((letraPalabra, i) => {
                        // Comprobar si coinciden las letras en orden
                        coincide = typeof sopa[x+i] !== 'undefined' && sopa[x+i][y] === letraPalabra && coincide;
                        if(coincide) {
                            // Si la palabra ha sido examinada totalmente 
                            if(i === palabra.length - 1){
                                // Guarda la coincidencia final
                                coincidencias.push({x1:x+i, y1: y, x, y, tipo: 'Abajo'});
                                coincide = true;
                            }
                        }
                    })
                }
            })
        )
    }

    descifrarAbajoVerticalIzquierda(){
        let total = 0;
        let { sopa, palabra, coincidencias } = this;

        sopa.forEach( (linea, x) => linea.forEach( (letra, y) => {
                // Tiene espacio la plabra
                let tieneEspacio = typeof sopa[x + palabra.length - 1] !== 'undefined' && typeof sopa[x + palabra.length - 1][y - palabra.length + 1] !== 'undefined';
                
                // Comprobar si existe la palabra
                let coincide = true;
                if(tieneEspacio){
                    palabra.forEach((letraPalabra, i) => {
                        // Comprobar si coinciden las letras en orden
                        coincide = typeof sopa[x+i] !== 'undefined' && sopa[x+i][y-i] === letraPalabra && coincide;
                        if(coincide) {
                            // Si la palabra ha sido examinada totalmente 
                            if(i === palabra.length - 1){
                                // Guarda la coincidencia final
                                coincidencias.push({x1: x+i, y1: y-i, x, y, tipo: 'AbajoVerticalIzquierda'});
                                coincide = true;
                            }
                        }
                    })
                }
            })
        )
    }

    descifrarIzquierda(){
        let total = 0;
        let { sopa, palabra, coincidencias } = this;
        console.log(sopa);
        
        sopa.forEach( (linea, x) => linea.forEach( (letra, y) => {
                // Tiene espacio la plabra
                let tieneEspacio = typeof sopa[x] !== 'undefined' && typeof sopa[x][y - palabra.length + 1] !== 'undefined';
                
                // Comprobar si existe la palabra
                let coincide = true;
                if(tieneEspacio){
                    palabra.forEach((letraPalabra, i) => {
                        // Comprobar si coinciden las letras en orden
                        coincide = typeof sopa[x] !== 'undefined' && sopa[x][y-i] === letraPalabra && coincide;
                        if(coincide) {
                            // Si la palabra ha sido examinada totalmente 
                            if(i === palabra.length - 1){
                                // Guarda la coincidencia final
                                coincidencias.push({x1: x, y1: y-i, x, y, tipo: 'Izquierda'});
                                coincide = true;
                            }
                        }
                    })
                }
            })
        )
    }

    descifrarArribaVerticalIzquierda(){
        let total = 0;
        let { sopa, palabra, coincidencias } = this;

        sopa.forEach( (linea, x) => linea.forEach( (letra, y) => {
                // Tiene espacio la plabra
                let tieneEspacio = (x - palabra.length + 1) >= 0 && typeof sopa[x - palabra.length + 1] !== 'undefined' && typeof sopa[x - palabra.length + 1][y - palabra.length + 1] !== 'undefined';
                // console.log({x1: x - palabra.length + 1, y1: y - palabra.length + 1, x, y, tieneEspacio});
                // Comprobar si existe la palabra
                let coincide = true;
                if(tieneEspacio){
                    palabra.forEach((letraPalabra, i) => {
                        // Comprobar si coinciden las letras en orden
                        coincide = typeof sopa[x-i] !== 'undefined' && sopa[x-i][y-i] === letraPalabra && coincide;
                        console.log({letra: sopa[x][y], lp: letraPalabra,x1: x - palabra.length + 1, y1: y - palabra.length + 1, x, y, coincide});
                        if(coincide) {
                            // Si la palabra ha sido examinada totalmente 
                            if(i === palabra.length - 1){
                                // Guarda la coincidencia final
                                coincidencias.push({x1: x-i, y1: y-i, x, y, tipo: 'ArribaVerticalIzquierda'});
                                coincide = true;
                            }
                        }
                    })
                }
            })
        )
    }

    descifrar(){
        this.descifrarArriba();
        this.descifrarArribaVerticalDerecha();
        this.descifrarDerecha();
        this.descifrarAbajoVerticalDerecha();
        this.descifrarAbajo();
        this.descifrarAbajoVerticalIzquierda();
        this.descifrarIzquierda();
        this.descifrarArribaVerticalIzquierda();
        
        return {
            resultado: this.coincidencias.length, 
            coincidencias: this.coincidencias
        };
    }
}

module.exports = {
    Sopa
}