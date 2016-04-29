;(function() {
    'use strict';

    var eliminacionGaussiana = function(a, o) {
           var i = 0, j = 0, k = 0, maxrow = 0, tmp = 0, n = a.length - 1, x = new Array(o);
           for (i = 0; i < n; i++) {
              maxrow = i;
              for (j = i + 1; j < n; j++) {
                 if (Math.abs(a[i][j]) > Math.abs(a[i][maxrow]))
                    maxrow = j;
              }
              for (k = i; k < n + 1; k++) {
                 tmp = a[k][i];
                 a[k][i] = a[k][maxrow];
                 a[k][maxrow] = tmp;
              }
              for (j = i + 1; j < n; j++) {
                 for (k = n; k >= i; k--) {
                    a[k][j] -= a[k][i] * a[i][j] / a[i][i];
                 }
              }
           }
           for (j = n - 1; j >= 0; j--) {
              tmp = 0;
              for (k = j + 1; k < n; k++)
                 tmp += a[k][j] * x[k];
              x[j] = (a[n][j] - tmp) / a[j][j];
           }
           return (x);
    };

        var metodos = {
            lineal: function(data) {
                var sum = [0, 0, 0, 0, 0], n = 0, resultados = [];

                for (; n < data.length; n++) {
                  if (data[n][1] != null) {
                    sum[0] += data[n][0];
                    sum[1] += data[n][1];
                    sum[2] += data[n][0] * data[n][0];
                    sum[3] += data[n][0] * data[n][1];
                    sum[4] += data[n][1] * data[n][1];
                  }
                }

                var gradiente = (n * sum[3] - sum[0] * sum[1]) / (n * sum[2] - sum[0] * sum[0]);
                var interseccion = (sum[1] / n) - (gradiente * sum[0]) / n;

                for (var i = 0, len = data.length; i < len; i++) {
                    var coordenada = [data[i][0], data[i][0] * gradiente + interseccion];
                    resultados.push(coordenada);
                }

                var string = 'y = ' + Math.round(gradiente*100) / 100 + 'x + ' + Math.round(interseccion*100) / 100;

                return {ecuacion: [gradiente, interseccion], points: resultados, string: string};
            },

            linealPorElOrigen: function(data) {
                var sum = [0, 0], n = 0, resultados = [];

                for (; n < data.length; n++) {
                    if (data[n][1] != null) {
                        sum[0] += data[n][0] * data[n][0]; //sumSqX
                        sum[1] += data[n][0] * data[n][1]; //sumXY
                    }
                }

                var gradiente = sum[1] / sum[0];

                for (var i = 0, len = data.length; i < len; i++) {
                    var coordenada = [data[i][0], data[i][0] * gradiente];
                    resultados.push(coordenada);
                }

                var string = 'y = ' + Math.round(gradiente*100) / 100 + 'x';

                return {ecuacion: [gradiente], points: resultados, string: string};
            },

            exponencial: function(data) {
                var sum = [0, 0, 0, 0, 0, 0], n = 0, resultados = [];

                for (len = data.length; n < len; n++) {
                  if (data[n][1] != null) {
                    sum[0] += data[n][0];
                    sum[1] += data[n][1];
                    sum[2] += data[n][0] * data[n][0] * data[n][1];
                    sum[3] += data[n][1] * Math.log(data[n][1]);
                    sum[4] += data[n][0] * data[n][1] * Math.log(data[n][1]);
                    sum[5] += data[n][0] * data[n][1];
                  }
                }

                var denominador = (sum[1] * sum[2] - sum[5] * sum[5]);
                var A = Math.pow(Math.E, (sum[2] * sum[3] - sum[5] * sum[4]) / denominador);
                var B = (sum[1] * sum[4] - sum[5] * sum[3]) / denominador;

                for (var i = 0, len = data.length; i < len; i++) {
                    var coordenada = [data[i][0], A * Math.pow(Math.E, B * data[i][0])];
                    resultados.push(coordenada);
                }

                var string = 'y = ' + Math.round(A*100) / 100 + 'e^(' + Math.round(B*100) / 100 + 'x)';

                return {ecuacion: [A, B], points: resultados, string: string};
            },

            logaritmica: function(data) {
                var sum = [0, 0, 0, 0], n = 0, resultados = [];

                for (len = data.length; n < len; n++) {
                  if (data[n][1] != null) {
                    sum[0] += Math.log(data[n][0]);
                    sum[1] += data[n][1] * Math.log(data[n][0]);
                    sum[2] += data[n][1];
                    sum[3] += Math.pow(Math.log(data[n][0]), 2);
                  }
                }

                var B = (n * sum[1] - sum[2] * sum[0]) / (n * sum[3] - sum[0] * sum[0]);
                var A = (sum[2] - B * sum[0]) / n;

                for (var i = 0, len = data.length; i < len; i++) {
                    var coordenada = [data[i][0], A + B * Math.log(data[i][0])];
                    resultados.push(coordenada);
                }

                var string = 'y = ' + Math.round(A*100) / 100 + ' + ' + Math.round(B*100) / 100 + ' ln(x)';

                return {ecuacion: [A, B], points: resultados, string: string};
            },

            potencia: function(data) {
                var sum = [0, 0, 0, 0], n = 0, resultados = [];

                for (len = data.length; n < len; n++) {
                  if (data[n][1] != null) {
                    sum[0] += Math.log(data[n][0]);
                    sum[1] += Math.log(data[n][1]) * Math.log(data[n][0]);
                    sum[2] += Math.log(data[n][1]);
                    sum[3] += Math.pow(Math.log(data[n][0]), 2);
                  }
                }

                var B = (n * sum[1] - sum[2] * sum[0]) / (n * sum[3] - sum[0] * sum[0]);
                var A = Math.pow(Math.E, (sum[2] - B * sum[0]) / n);

                for (var i = 0, len = data.length; i < len; i++) {
                    var coordenada = [data[i][0], A * Math.pow(data[i][0] , B)];
                    resultados.push(coordenada);
                }

                 var string = 'y = ' + Math.round(A*100) / 100 + 'x^' + Math.round(B*100) / 100;

                return {ecuacion: [A, B], points: resultados, string: string};
            },

            polinomial: function(data, order) {
                if(typeof order == 'undefined'){
                    order = 2;
                }
                 var lhs = [], rhs = [], resultados = [], a = 0, b = 0, i = 0, k = order + 1;

                        for (; i < k; i++) {
                           for (var l = 0, len = data.length; l < len; l++) {
                              if (data[l][1] != null) {
                               a += Math.pow(data[l][0], i) * data[l][1];
                              }
                            }
                            lhs.push(a), a = 0;
                            var c = [];
                            for (var j = 0; j < k; j++) {
                               for (var l = 0, len = data.length; l < len; l++) {
                                  if (data[l][1] != null) {
                                   b += Math.pow(data[l][0], i + j);
                                  }
                                }
                                c.push(b), b = 0;
                            }
                            rhs.push(c);
                        }
                rhs.push(lhs);

               var ecuacion = eliminacionGaussiana(rhs, k);

                    for (var i = 0, len = data.length; i < len; i++) {
                        var answer = 0;
                        for (var w = 0; w < ecuacion.length; w++) {
                            answer += ecuacion[w] * Math.pow(data[i][0], w);
                        }
                        resultados.push([data[i][0], answer]);
                    }

                    var string = 'y = ';

                    for(var i = ecuacion.length-1; i >= 0; i--){
                      if(i > 1) string += Math.round(ecuacion[i] * Math.pow(10, i)) / Math.pow(10, i)  + 'x^' + i + ' + ';
                      else if (i == 1) string += Math.round(ecuacion[i]*100) / 100 + 'x' + ' + ';
                      else string += Math.round(ecuacion[i]*100) / 100;
                    }

                return {ecuacion: ecuacion, points: resultados, string: string};
            },

            ultimoValor: function(data) {
              var resultados = [];
              var ultimoValor = null;
              for (var i = 0; i < data.length; i++) {
                if (data[i][1]) {
                  ultimoValor = data[i][1];
                  resultados.push([data[i][0], data[i][1]]);
                }
                else {
                  resultados.push([data[i][0], ultimoValor]);
                }
              }

              return {ecuacion: [ultimoValor], points: resultados, string: "" + ultimoValor};
            }
        };

var regresion = (function(method, data, order) {

       if (typeof method == 'string') {
           return metodos[method](data, order);
       }
    });

if (typeof exports !== 'undefined') {
    module.exports = regresion;
} else {
    window.regresion = regresion;
}

}());
