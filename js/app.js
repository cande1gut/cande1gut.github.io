//--------------------------Variables y arrays inciales-------------------
var info;
var number;
var ene;
var feb;
var mar;
var abr;
var may;
var jun;
var jul;
var ago;
var sep;
var oct;
var nov;
var dic;
var mes;
var map;
var marker1;
var marker2;
var marker3;
var marker4;
var marker5;
var marker6;
var marker7;
var marker8;
var cicle1;
var circle2;
var cicle3;
var circle4;
var cicle5;
var circle6;
var cicle7;
var circle8;
var data;
var dataN;
var dataS;
var dataE;
var dataO;
var mediaEnero;
var mediaFebrero;
var mediaMarzo;
var mediaAbril;
var mediaMayo;
var mediaJunio;
var mediaJulio;
var mediaAgosto;
var mediaSeptiembre;
var mediaOctubre;
var mediaNoviembre;
var mediaDiciembre;
var regresion;

var locations = [
      ['Zona 1: Rio verde', 20.69526, -103.28330],
      ['Zona 2: Oblatos', 20.66763, -103.31970],
      ['Zona 3: 18 de Marzo', 20.63358, -103.37532],
      ['Zona 4: Providencia', 20.70662, -103.38321],
      ['Zona 5: De la cruz', 20.70276, -103.31180],
      ['Zona 6: Nueva Galicia', 20.65137, -103.44364],
      ['Zona 7: Nueva España', 20.61153, -103.38871],
      ['Zona 8: Tlaquepaque', 20.64366, -103.31729]
    ];
//-------------------------Fin de variables y arrays iniciales---------------------------

//-------------------------Creacion del mapa y marcadores con informacion-------------------------
map = new GMaps({
  div: '#map-canvas',
  lat: 20.65970,
  lng: -103.34961,
  zoom: 11,
  disableDefaultUI: true
});

circle1 = map.drawCircle({
  radius: 1300,
  strokeOpacity: 0.35,
  strokeWeight: 2,
  fillOpacity: 0.35,
  strokeColor: 'transparent',
  fillColor: "transparent"
});

circle2 = map.drawCircle({
  radius: 1300,
  strokeOpacity: 0.35,
  strokeWeight: 2,
  fillOpacity: 0.35,
  strokeColor: 'transparent',
  fillColor: "transparent"
});

circle3 = map.drawCircle({
  radius: 1300,
  strokeOpacity: 0.35,
  strokeWeight: 2,
  fillOpacity: 0.35,
  strokeColor: 'transparent',
  fillColor: "transparent"
});

circle4 = map.drawCircle({
  radius: 1300,
  strokeOpacity: 0.35,
  strokeWeight: 2,
  fillOpacity: 0.35,
  strokeColor: 'transparent',
  fillColor: "transparent"
});

circle5 = map.drawCircle({
  radius: 1300,
  strokeOpacity: 0.35,
  strokeWeight: 2,
  fillOpacity: 0.35,
  strokeColor: 'transparent',
  fillColor: "transparent"
});

circle6 = map.drawCircle({
  radius: 1300,
  strokeOpacity: 0.35,
  strokeWeight: 2,
  fillOpacity: 0.35,
  strokeColor: 'transparent',
  fillColor: "transparent"
});

circle7 = map.drawCircle({
  radius: 1300,
  strokeOpacity: 0.35,
  strokeWeight: 2,
  fillOpacity: 0.35,
  strokeColor: 'transparent',
  fillColor: "transparent"
});

circle8 = map.drawCircle({
  radius: 1300,
  strokeOpacity: 0.35,
  strokeWeight: 2,
  fillOpacity: 0.35,
  strokeColor: 'transparent',
  fillColor: "transparent"
});

document.getElementById("calendario").disabled = true;
//-------------------------Fin de la creacion del mapa y marcadores con informacion-------------------------

//-------------------------Funcion para leer por OCR la imagen y alimentar al sistema con los datos para calculos----------------------------------
function load_file () {
  var reader = new FileReader();
  reader.onload = function(){
    var img = new Image();
    img.src = reader.result;
    img.onload = function(){
      OCRAD(img, function(text){
        map.removeMarkers();
        ene = [];
        feb = [];
        mar = [];
        abr = [];
        may = [];
        jun = [];
        jul = [];
        ago = [];
        sep = [];
        oct = [];
        nov = [];
        dic = [];
        dataN = [];
        dataS = [];
        dataE = [];
        dataO = [];
        mediaEnero = 0;
        mediaFebrero = 0;
        mediaMarzo = 0;
        mediaAbril = 0;
        mediaMayo = 0;
        mediaJunio = 0;
        mediaJulio = 0;
        mediaAgosto = 0;
        mediaSeptiembre = 0;
        mediaOctubre = 0;
        mediaNoviembre = 0;
        mediaDiciembre = 0;
        info = "";
        document.getElementById("calendario").disabled = false;
        info = text.match(/[^\s]+/g);
        console.log(info);
        for (i = 0; i < info.length; i++)
        {
          number = parseFloat(info[i]);
          if(i > 9 && i <= 17)
          {
            ene.push(number);
          }
          else if(i > 18 && i <= 26)
          {
            feb.push(number);
          }
          else if(i > 27 && i <= 35)
          {
            mar.push(number);
          }
          else if(i > 36 && i <= 44)
          {
            abr.push(number);
          }
          else if(i > 45 && i <= 53)
          {
            may.push(number);
          }
          else if(i > 54 && i <= 62)
          {
            jun.push(number);
          }
          else if(i > 63 && i <= 71)
          {
            jul.push(number);
          }
          else if(i > 72 && i <= 80)
          {
            ago.push(number);
          }
          else if(i > 81 && i <= 89)
          {
            sep.push(number);
          }
          else if(i > 90 && i <= 98)
          {
            oct.push(number);
          }
          else if(i > 99 && i <= 107)
          {
            nov.push(number);
          }
          else if(i > 108 && i <= 116)
          {
            dic.push(number);
          }
        }

        for (i = 0; i < 8; i++)
        {
            locations[i].push(ene[i]);
            locations[i].push(feb[i]);
            locations[i].push(mar[i]);
            locations[i].push(abr[i]);
            locations[i].push(may[i]);
            locations[i].push(jun[i]);
            locations[i].push(jul[i]);
            locations[i].push(ago[i]);
            locations[i].push(sep[i]);
            locations[i].push(oct[i]);
            locations[i].push(nov[i]);
            locations[i].push(dic[i]);
        }


        for (i = 0; i < ene.length; i++)
        {
          mediaEnero += ene[i];
          mediaFebrero += feb[i];
          mediaMarzo += mar[i];
          mediaAbril += abr[i];
          mediaMayo += may[i];
          mediaJunio += jun[i];
          mediaJulio += jul[i];
          mediaAgosto += ago[i];
          mediaSeptiembre += sep[i];
          mediaOctubre += oct[i];
          mediaNoviembre += nov[i];
          mediaDiciembre += dic[i];
        }

        dataN.push([1, (ene[3]+ene[4])/2]);
        dataN.push([2, (feb[3]+feb[4])/2]);
        dataN.push([3, (mar[3]+mar[4])/2]);
        dataN.push([4, (abr[3]+abr[4])/2]);
        dataN.push([5, (may[3]+may[4])/2]);
        dataN.push([6, (jun[3]+jun[4])/2]);
        dataN.push([7, (jul[3]+jul[4])/2]);
        dataN.push([8, (ago[3]+ago[4])/2]);
        dataN.push([9, (sep[3]+sep[4])/2]);
        dataN.push([10, (oct[3]+oct[4])/2]);
        dataN.push([11, (nov[3]+nov[4])/2]);
        dataN.push([12, (dic[3]+dic[4])/2]);

        dataS.push([1, (ene[0]+ene[1]+ene[7])/3]);
        dataS.push([2, (feb[0]+feb[1]+feb[7])/3]);
        dataS.push([3, (mar[0]+mar[1]+mar[7])/3]);
        dataS.push([4, (abr[0]+abr[1]+abr[7])/3]);
        dataS.push([5, (may[0]+may[1]+may[7])/3]);
        dataS.push([6, (jun[0]+jun[1]+jun[7])/3]);
        dataS.push([7, (jul[0]+jul[1]+jul[7])/3]);
        dataS.push([8, (ago[0]+ago[1]+ago[7])/3]);
        dataS.push([9, (sep[0]+sep[1]+sep[7])/3]);
        dataS.push([10, (oct[0]+oct[1]+oct[7])/3]);
        dataS.push([11, (nov[0]+nov[1]+nov[7])/3]);
        dataS.push([12, (dic[0]+dic[1]+dic[7])/3]);

        dataE.push([1, (ene[0]+ene[1])/3]);
        dataE.push([2, (feb[0]+feb[1])/3]);
        dataE.push([3, (mar[0]+mar[1])/3]);
        dataE.push([4, (abr[0]+abr[1])/3]);
        dataE.push([5, (may[0]+may[1])/3]);
        dataE.push([6, (jun[0]+jun[1])/3]);
        dataE.push([7, (jul[0]+jul[1])/3]);
        dataE.push([8, (ago[0]+ago[1])/3]);
        dataE.push([9, (sep[0]+sep[1])/3]);
        dataE.push([10, (oct[0]+oct[1])/3]);
        dataE.push([11, (nov[0]+nov[1])/3]);
        dataE.push([12, (dic[0]+dic[1])/3]);

        dataO.push([1, ene[0]]);
        dataO.push([2, feb[0]]);
        dataO.push([3, mar[0]]);
        dataO.push([4, abr[0]]);
        dataO.push([5, may[0]]);
        dataO.push([6, jun[0]]);
        dataO.push([7, jul[0]]);
        dataO.push([8, ago[0]]);
        dataO.push([9, sep[0]]);
        dataO.push([10, oct[0]]);
        dataO.push([11, nov[0]]);
        dataO.push([12, dic[0]]);

        marker1 = map.addMarker({
          position: new google.maps.LatLng(locations[0][1], locations[0][2]),
          icon: 'img/pin.png',
        });

        marker2 = map.addMarker({
          position: new google.maps.LatLng(locations[1][1], locations[1][2]),
          icon: 'img/pin.png'
        });

        marker3 = map.addMarker({
          position: new google.maps.LatLng(locations[2][1], locations[2][2]),
          icon: 'img/pin.png'
        });

        marker4 = map.addMarker({
          position: new google.maps.LatLng(locations[3][1], locations[3][2]),
          icon: 'img/pin.png'
        });

        marker5 = map.addMarker({
          position: new google.maps.LatLng(locations[4][1], locations[4][2]),
          icon: 'img/pin.png'
        });

        marker6 = map.addMarker({
          position: new google.maps.LatLng(locations[5][1], locations[5][2]),
          icon: 'img/pin.png'
        });

        marker7 = map.addMarker({
          position: new google.maps.LatLng(locations[6][1], locations[6][2]),
          icon: 'img/pin.png'
        });

        marker8 = map.addMarker({
          position: new google.maps.LatLng(locations[7][1], locations[7][2]),
          icon: 'img/pin.png'
        });

        circle1.bindTo('center', marker1, 'position');
        circle2.bindTo('center', marker2, 'position');
        circle3.bindTo('center', marker3, 'position');
        circle3.bindTo('center', marker3, 'position');
        circle4.bindTo('center', marker4, 'position');
        circle5.bindTo('center', marker5, 'position');
        circle6.bindTo('center', marker6, 'position');
        circle7.bindTo('center', marker7, 'position');
        circle8.bindTo('center', marker8, 'position');

        circle1.setOptions({
          strokeColor: 'transparent',
          fillColor: "transparent"
        });
        circle2.setOptions({
          strokeColor: 'transparent',
          fillColor: "transparent"
        });
        circle3.setOptions({
          strokeColor: 'transparent',
          fillColor: "transparent"
        });
        circle4.setOptions({
          strokeColor: 'transparent',
          fillColor: "transparent"
        });
        circle5.setOptions({
          strokeColor: 'transparent',
          fillColor: "transparent"
        });
        circle6.setOptions({
          strokeColor: 'transparent',
          fillColor: "transparent"
        });
        circle7.setOptions({
          strokeColor: 'transparent',
          fillColor: "transparent"
        });
        circle8.setOptions({
          strokeColor: 'transparent',
          fillColor: "transparent"
        });
      })
    }
  }
  reader.readAsDataURL(document.getElementById('picker').files[0])
}
//-------------------------Fin de funcion para leer por OCR la imagen y alimentar al sistema con los datos para calculos----------------------------------

//----------------AR, cracion de puntos y objetos 3D---------------------------------
window.addEventListener('load', function() {
  // Iniciar la libreria de AR
  window.awe.init({
    // Detectar el tipo de dispositvo mobil
    device_type: awe.AUTO_DETECT_DEVICE_TYPE,
    // Cargar algunas configuraciones por default
    settings: {
      container_id: 'container',
      fps: 30,
      default_camera_position: { x:0, y:0, z:0 },
      default_lights:[
        {
          id: 'point_light',
          type: 'point',
          color: 0xFFFFFF
        },
      ],
    },
    ready: function() {
      // Cargar un js para detectar el tipo de capabilidad y deteccion del dispositivo
      awe.util.require([
        {
          capabilities: ['gum','gyro','webgl'],
          files: [
            [ 'awe/awe-standard-dependencies.js', 'awe/awe-standard.js' ], // Dependencias core para la app
            'awe/awe-standard-window_resized.js', // Responsivness de la app
            'awe/awe-standard-object_clicked.js', // trigger de touch
            'awe/awe.geo_ar.js', // plugin para ordenar por coordenadas las imagenes
          ],
          success: function() {
            // limit demo to supported devices
            // NOTE: only Chrome and Firefox has implemented the DeviceOrientation API in a workable way
            //       so for now we are excluding all others to make sure your first experience is a happy one
            var device_type = awe.device_type();
            var browser_unsupported = false;
            if (device_type != 'android') {
              browser_unsupported = true;
            } else if (!navigator.userAgent.match(/chrome|firefox/i)) {
              browser_unsupported = true;
            }
            if (browser_unsupported) {
              document.body.innerHTML = '<p>This demo currently requires a standards compliant Android browser (e.g. Chrome M33).</p>';
              return;
            }

            // Iniciar la escena de la app
            window.awe.setup_scene();

            // Trigger para cuando el usuario toca un objeto y devolver la grafica con la respectiva regresion
            window.addEventListener('object_clicked', function(e) {
              var p = awe.projections.view(e.detail.projection_id);
              $('#popupRegresion').popup('open');
              if(p.id == "n")
              {
                data = dataN.slice();
                if($("#select-choice-mini").val() == "lineal")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('lineal', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('lineal', data).string);
                }
                else if($("#select-choice-mini").val() == "exponencial")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('exponencial', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('exponencial', data).string);
                }
                else if($("#select-choice-mini").val() == "logaritmica")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('logaritmica', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('logaritmica', data).string);
                }
                else if($("#select-choice-mini").val() == "potencia")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('potencia', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('potencia', data).string);
                }
                else if($("#select-choice-mini").val() == "polinomial")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('polinomial', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('polinomial', data).string);
                }
              }
              else if(p.id == "s")
              {
                data = dataS.slice();
                if($("#select-choice-mini").val() == "lineal")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('lineal', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('lineal', data).string);
                }
                else if($("#select-choice-mini").val() == "exponencial")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('exponencial', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('exponencial', data).string);
                }
                else if($("#select-choice-mini").val() == "logaritmica")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('logaritmica', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('logaritmica', data).string);
                }
                else if($("#select-choice-mini").val() == "potencia")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('potencia', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('potencia', data).string);
                }
                else if($("#select-choice-mini").val() == "polinomial")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('polinomial', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('polinomial', data).string);
                }
              }
              else if(p.id == "e")
              {
                data = dataE.slice();
                if($("#select-choice-mini").val() == "lineal")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('lineal', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('lineal', data).string);
                }
                else if($("#select-choice-mini").val() == "exponencial")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('exponencial', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('exponencial', data).string);
                }
                else if($("#select-choice-mini").val() == "logaritmica")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('logaritmica', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('logaritmica', data).string);
                }
                else if($("#select-choice-mini").val() == "potencia")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('potencia', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('potencia', data).string);
                }
                else if($("#select-choice-mini").val() == "polinomial")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('polinomial', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('polinomial', data).string);
                }
              }
              else if(p.id == "w")
              {
                data = dataO.slice();
                if($("#select-choice-mini").val() == "lineal")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('lineal', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('lineal', data).string);
                }
                else if($("#select-choice-mini").val() == "exponencial")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('exponencial', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('exponencial', data).string);
                }
                else if($("#select-choice-mini").val() == "logaritmica")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('logaritmica', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('logaritmica', data).string);
                }
                else if($("#select-choice-mini").val() == "potencia")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('potencia', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('potencia', data).string);
                }
                else if($("#select-choice-mini").val() == "polinomial")
                {
            			$.plot($('#grafica'), [
            				{data: regresion('polinomial', data).points},
            				{data: data, lines: { show: false }, points: { show: true }},
            			]);

            			$('#funcion').text(regresion('polinomial', data).string);
                }
              }
            }, false);

            // Agregar puntos de interes para empezar a poner en la escena objetos
            awe.pois.add({ id:'north', position: { x:0, y:0, z:200 } });
            awe.pois.add({ id:'north_east', position: { x:200, y:0, z:200 } });
            awe.pois.add({ id:'east', position: { x:200, y:0, z:0 } });
            awe.pois.add({ id:'south_east', position: { x:200, y:0, z:-200 } });
            awe.pois.add({ id:'south', position: { x:0, y:0, z:-200 } });
            awe.pois.add({ id:'south_west', position: { x:-200, y:0, z:-200 } });
            awe.pois.add({ id:'west', position: { x:-200, y:0, z:0 } });
            awe.pois.add({ id:'north_west', position: { x:-200, y:0, z:200 } });

            // Agregar proyecciones de los objetos por cada punto de interes para ponerlo en el munod real
            awe.projections.add({
              id:'n',
              geometry:{ shape:'cube', x:50, y:50, z:0 },
              material:{
                color:0xCCCCCC,
                transparent: true
              },
              texture: { path: 'img/north.png' },
            }, { poi_id: 'north' });

            awe.projections.add({
              id:'ne',
              geometry:{ shape:'sphere', radius:10 },
              material:{
                color:0x000000,
              },
            }, { poi_id: 'north_east' });

            awe.projections.add({
              id:'e',
              geometry:{ shape:'cube', x:50, y:50, z:50 },
              material:{
                color:0xCCCCCC,
                transparent: true
              },
              texture: { path: 'img/east.png' },
            }, { poi_id: 'east' });

            awe.projections.add({
              id:'se',
              geometry:{ shape:'sphere', radius:10 },
              material:{
                color:0x000000,
              },
            }, { poi_id: 'south_east' });

            awe.projections.add({
              id:'s',
              geometry:{ shape:'cube', x:50, y:50, z:0 },
              material:{
                color:0xCCCCCC,
                transparent: true
              },
              texture: { path: 'img/south.png' },
            }, { poi_id: 'south' });

            awe.projections.add({
              id:'sw',
              geometry:{ shape:'sphere', radius:10 },
              material:{
                color:0x000000,
              },
            }, { poi_id: 'south_west' });

            awe.projections.add({
              id:'w',
              geometry:{ shape:'cube', x:50, y:50, z:50 },
              material:{
                type: 'phong',
                color:0xCCCCCC,
                transparent: true
              },
              texture: { path: 'img/west.png' },
            }, { poi_id: 'west' });

            awe.projections.add({
              id:'nw',
              geometry:{ shape:'sphere', radius:10 },
              material:{
                type: 'phong',
                color:0x000000,
              },
            }, { poi_id: 'north_west' });

          },
        },
        { // else create a fallback
          capabilities: [],
          files: [],
          success: function() {
            document.body.innerHTML = '<p>This demo currently requires a standards compliant mobile browser (e.g. Firefox on Android). NOTE: iOS does not currently support WebGL or WebRTC and has not implemented the DeviceOrientation API correctly. Please see <a href="http://lists.w3.org/Archives/Public/public-geolocation/2014Jan/0000.html">this post to the W3C GeoLocation Working Group</a> for more detailed information.</p>';
            return;
          },
        },
      ]);
    }
  });
});
//----------------Fin de AR, cracion de puntos y objetos 3D---------------------------------

//-------------------------Triggers de botones, para seleccionar el tipo de mes y cambiarlo dinamicamente, y cambio de datos para marcadores y circulos de google maps------------------------
$( document ).ready(function() {

  $( "#calendario" ).bind( "click", function(event, ui) {
    $('#popupCalendar').popup('open');
  });

  $("#bene, #bfeb, #bmar, #babr, #bmay, #bjun, #bjul, #bago, #bsep, #boct, #bnov, #bdic").bind( "click", function(event, ui) {
    map.removeMarkers();

    if($(this).val() == "Ene")
    {
      mes = 3;
    }
    else if($(this).val() == "Feb")
    {
        mes = 4;
    }
    else if($(this).val() == "Mar")
    {
        mes = 5;
    }
    else if($(this).val() == "Abr")
    {
        mes = 6;
    }
    else if($(this).val() == "May")
    {
        mes = 7;
    }
    else if($(this).val() == "Jun")
    {
        mes = 8;
    }
    else if($(this).val() == "Jul")
    {
        mes = 9;
    }
    else if($(this).val() == "Ago")
    {
        mes = 10;
    }
    else if($(this).val() == "Sep")
    {
        mes = 11;
    }
    else if($(this).val() == "Oct")
    {
        mes = 12;
    }
    else if($(this).val() == "Nov")
    {
        mes = 13;
    }
    else
    {
        mes = 14;
    }

    if(locations[0][mes] >= 30)
    {
      circle1.setOptions({
        fillColor: "red"
      });
    }
    else if(locations[0][mes] < 30 && locations[0][mes] > 0)
    {
      circle1.setOptions({
        fillColor: "yellow"
      });
    }
    else if(locations[0][mes] < 0 && locations[0][mes] >= -15)
    {
      circle1.setOptions({
        fillColor: "green"
      });
    }
    else if(locations[0][mes] < -15 && locations[0][mes] >= -30)
    {
      circle1.setOptions({
        fillColor: "blue"
      });
    }

    if(locations[1][mes] >= 30)
    {
      circle2.setOptions({
        fillColor: "red"
      });
    }
    else if(locations[1][mes] < 30 && locations[1][mes] > 0)
    {
      circle2.setOptions({
        fillColor: "yellow"
      });
    }
    else if(locations[1][mes] < 0 && locations[1][mes] >= -15)
    {
      circle2.setOptions({
        fillColor: "green"
      });
    }
    else if(locations[1][mes] < -15 && locations[1][mes] >= -30)
    {
      circle2.setOptions({
        fillColor: "blue"
      });
    }

    if(locations[2][mes] >= 30)
    {
      circle3.setOptions({
        fillColor: "red"
      });
    }
    else if(locations[2][mes] < 30 && locations[2][mes] > 0)
    {
      circle3.setOptions({
        fillColor: "yellow"
      });
    }
    else if(locations[2][mes] < 0 && locations[2][mes] >= -15)
    {
      circle3.setOptions({
        fillColor: "green"
      });
    }
    else if(locations[2][mes] < -15 && locations[2][mes] >= -30)
    {
      circle3.setOptions({
        fillColor: "blue"
      });
    }

    if(locations[3][mes] >= 30)
    {
      circle4.setOptions({
        fillColor: "red"
      });
    }
    else if(locations[3][mes] < 30 && locations[3][mes] > 0)
    {
      circle4.setOptions({
        fillColor: "yellow"
      });
    }
    else if(locations[3][mes] < 0 && locations[3][mes] >= -15)
    {
      circle4.setOptions({
        fillColor: "green"
      });
    }
    else if(locations[3][mes] < -15 && locations[3][mes] >= -30)
    {
      circle4.setOptions({
        fillColor: "blue"
      });
    }

    if(locations[4][mes] >= 30)
    {
      circle5.setOptions({
        fillColor: "red"
      });
    }
    else if(locations[4][mes] < 30 && locations[4][mes] > 0)
    {
      circle5.setOptions({
        fillColor: "yellow"
      });
    }
    else if(locations[4][mes] < 0 && locations[4][mes] >= -15)
    {
      circle5.setOptions({
        fillColor: "green"
      });
    }
    else if(locations[4][mes] < -15 && locations[4][mes] >= -30)
    {
      circle5.setOptions({
        fillColor: "blue"
      });
    }

    if(locations[5][mes] >= 30)
    {
      circle6.setOptions({
        fillColor: "red"
      });
    }
    else if(locations[5][mes] < 30 && locations[5][mes] > 0)
    {
      circle6.setOptions({
        fillColor: "yellow"
      });
    }
    else if(locations[5][mes] < 0 && locations[5][mes] >= -15)
    {
      circle6.setOptions({
        fillColor: "green"
      });
    }
    else if(locations[5][mes] < -15 && locations[5][mes] >= -30)
    {
      circle6.setOptions({
        fillColor: "blue"
      });
    }

    if(locations[6][mes] >= 30)
    {
      circle7.setOptions({
        fillColor: "red"
      });
    }
    else if(locations[6][mes] < 30 && locations[6][mes] > 0)
    {
      circle7.setOptions({
        fillColor: "yellow"
      });
    }
    else if(locations[6][mes] < 0 && locations[6][mes] >= -15)
    {
      circle7.setOptions({
        fillColor: "green"
      });
    }
    else if(locations[6][mes] < -15 && locations[6][mes] >= -30)
    {
      circle7.setOptions({
        fillColor: "blue"
      });
    }

    if(locations[7][mes] >= 30)
    {
      circle8.setOptions({
        fillColor: "red"
      });
    }
    else if(locations[7][mes] < 30 && locations[7][mes] > 0)
    {
      circle8.setOptions({
        fillColor: "yellow"
      });
    }
    else if(locations[7][mes] < 0 && locations[7][mes] >= -15)
    {
      circle8.setOptions({
        fillColor: "green"
      });
    }
    else if(locations[7][mes] < -15 && locations[7][mes] >= -30)
    {
      circle8.setOptions({
        fillColor: "blue"
      });
    }

    marker1 = map.addMarker({
      position: new google.maps.LatLng(locations[0][1], locations[0][2]),
      icon: 'img/pin.png',
      infoWindow: {
        content: "<b><h4>" + locations[0][0] + "</h4></b>" +  "<h5>" + String(locations[0][mes]) + " Grados Celsius" + "</h5>"
      }
    });

    marker2 = map.addMarker({
      position: new google.maps.LatLng(locations[1][1], locations[1][2]),
      icon: 'img/pin.png',
      infoWindow: {
        content: "<b><h4>" + locations[1][0] + "</h4></b>" +  "<h5>" + String(locations[1][mes]) + " Grados Celsius" + "</h5>"
      }
    });

    marker3 = map.addMarker({
      position: new google.maps.LatLng(locations[2][1], locations[2][2]),
      icon: 'img/pin.png',
      infoWindow: {
        content: "<b><h4>" + locations[2][0] + "</h4></b>" +  "<h5>" + String(locations[2][mes]) + " Grados Celsius" + "</h5>"
      }
    });

    marker4 = map.addMarker({
      position: new google.maps.LatLng(locations[3][1], locations[3][2]),
      icon: 'img/pin.png',
      infoWindow: {
        content: "<b><h4>" + locations[3][0] + "</h4></b>" +  "<h5>" + String(locations[3][mes]) + " Grados Celsius" + "</h5>"
      }
    });

    marker5 = map.addMarker({
      position: new google.maps.LatLng(locations[4][1], locations[4][2]),
      icon: 'img/pin.png',
      infoWindow: {
        content: "<b><h4>" + locations[4][0] + "</h4></b>" +  "<h5>" + String(locations[4][mes]) + " Grados Celsius" + "</h5>"
      }
    });

    marker6 = map.addMarker({
      position: new google.maps.LatLng(locations[5][1], locations[5][2]),
      icon: 'img/pin.png',
      infoWindow: {
        content: "<b><h4>" + locations[5][0] + "</h4></b>" +  "<h5>" + String(locations[5][mes]) + " Grados Celsius" + "</h5>"
      }
    });

    marker7 = map.addMarker({
      position: new google.maps.LatLng(locations[6][1], locations[6][2]),
      icon: 'img/pin.png',
      infoWindow: {
        content: "<b><h4>" + locations[6][0] + "</h4></b>" +  "<h5>" + String(locations[6][mes]) + " Grados Celsius" + "</h5>"
      }
    });

    marker8 = map.addMarker({
      position: new google.maps.LatLng(locations[7][1], locations[7][2]),
      icon: 'img/pin.png',
      infoWindow: {
        content: "<b><h4>" + locations[7][0] + "</h4></b>" +  "<h5>" + String(locations[7][mes]) + " Grados Celsius" + "</h5>"
      }
    });

    $('#popupCalendar').popup('close');
  });
//-------------------------Fin de triggers de botones, para seleccionar el tipo de mes y cambiarlo dinamicamente, y cambio de datos para marcadores y circulos de google maps------------------------

});
