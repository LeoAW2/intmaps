var map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: -1,
  maxZoom: 1          
});

//Создание кнопок для выбора корпуса
const buildings = ['A', 'B', 'U'];
const bounds = L.latLngBounds([[0,0], [1452, 1920]]);  

buildings.forEach(building => {
  const control = L.control({position: 'topright'});

  control.onAdd = function(map) {
    const container = L.DomUtil.create('div', 'leaflet-control-custom');
    const button = L.DomUtil.create('button', 'custom-button', container);
    button.innerText = `Корпус ${building}`;
    button.onclick = () => showFloors(building);
    return container;
  };

  control.addTo(map);
});
//Функция для отображения попапа с выбором этажа
function showFloors(building) {
  const floors = [1, 2, 3, 4, 5];
  const popupContent = floors.map(floor => 
    `<button onclick="loadFloorMap('${building}', ${floor})">Этаж ${floor}</button>`
  ).join('<br/>');

  const popup = L.popup()
    .setLatLng(map.getCenter())  // Центр попапа, можно настроить
    .setContent(popupContent)
    .openOn(map);
}

//Загрузка и отображение карты выбранного этажа
function loadFloorMap(building, floor) {
  const imageUrl = `${building}_floor_${floor}.svg`;
  if (window.currentFloorMap) {
    map.removeLayer(window.currentFloorMap);  // Удаляем предыдущую карту, если она есть
  }
  window.currentFloorMap = L.imageOverlay(imageUrl, bounds).addTo(map);  // Загружаем новую карту
}













// var map = L.map('map', {
//     crs: L.CRS.Simple,
//     minZoom: -1,
//     maxZoom: 1
//   });
  
//   // Отдельные границы для каждого этажа
//     var boundsThirdFloor = [[0,0], [1452, 1920]]; // Границы третьего этажа
// //   var boundsFourthFloor = [[0,0], [950, 1768.77]];  // Границы четвертого этажа (предположим, что они отличаются)
  
//   // Слои изображений для каждого этажа с соответствующими границами
//     var thirdFloor = L.imageOverlay('3floor1.svg', boundsThirdFloor).addTo(map);
// //   var fourthFloor = L.imageOverlay('11.svg', boundsFourthFloor);
//     var auditorium301 = L.polygon([
//         [594.84937, 28.860617],                          
//         [594.84937, 28.860617 + 83.464195],
//         [594.84937 + 76.516243, 28.860617 + 83.464195],
//         [594.84937 + 76.516243, 28.860617],
        
//     ], {
//     fillOpacity: 0,  // Изначально прозрачный
//     fillColor: 'blue',  // Цвет при наведении
//     stroke: false,
//     }).addTo(map);
    

//     // Изменение цвета при наведении
//     auditorium301.on('mouseover', function() {
//         this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
//     });
//     auditorium301.on('mouseout', function() {
//         this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
//     });

//     // Добавление всплывающего окна с информацией
//     auditorium301.on('click', function() {
//         this.bindPopup('Информация об аудитории').openPopup();
//     });

//     // Установите область видимости карты так, чтобы вся карта была видна
//     map.fitBounds(bounds);
//   // Полигоны для третьего этажа
//   var thirdFloorLayers = L.layerGroup([
//     L.polygon([
//       [594.84937, 28.860617],                          
//       [594.84937, 28.860617 + 83.464195],
//       [594.84937 + 76.516243, 28.860617 + 83.464195],
//       [594.84937 + 76.516243, 28.860617]
//     ], {fillColor: 'blue', fillOpacity: 0, stroke: false}).addTo(map)
//     // Добавьте другие полигоны третьего этажа здесь
//   ]).addTo(map);
  
//   // Полигоны для четвертого этажа с другими границами
//   var fourthFloorLayers = L.layerGroup([
//     L.polygon([
//       [550, 100], // Примерные координаты, замените на реальные
//       [550, 200],
//       [650, 200],
//       [650, 100]
//     ], {fillColor: 'red', fillOpacity: 0, stroke: false}).addTo(map)
//     // Добавьте другие полигоны четвертого этажа здесь
//   ]);
  
//   // Добавление слоев на карту и в элемент управления слоями
//   var baseLayers = {
//     "Третий этаж": thirdFloorLayers,
//     "Четвертый этаж": fourthFloorLayers
//   };
  
//   L.control.layers(baseLayers).addTo(map);
  
 
// var floorsA = {
//     "1-й этаж": createFloor('A/1floorA.svg', bounds),
//     "2-й этаж": createFloor('A/2floorA.svg', bounds)
    
//   };
  
//   var floorsB = {
//     "1-й этаж": createFloor('B/1floorB.svg', bounds),
//     "2-й этаж": createFloor('B/2floorB.svg', bounds)
//   };
  
//   var floorsU = {
//     "1-й этаж": createFloor('4floor1.svg', bounds),
//     "2-й этаж": createFloor('3floorU.svg', bounds)
//   };


document.addEventListener('DOMContentLoaded', function() {
  var map = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -10,
      maxZoom: 10,
      center: [730, 900],
      zoom: -1
  });

  // Границы для SVG карт
  const bounds = L.latLngBounds([[0, 0], [1452, 1920]]);

  // Создание кнопок для выбора корпуса
  const buildings = ['A', 'B', 'U'];

  buildings.forEach(building => {
      const control = L.control({ position: 'topright' });

      control.onAdd = function(map) {
          const container = L.DomUtil.create('div', 'leaflet-control-custom');
          const button = L.DomUtil.create('button', 'custom-button', container);
          button.innerHTML = building;

          const selectDiv = L.DomUtil.create('div', 'floor-select', container);
          for (let i = 1; i <= 5; i++) {
              const option = L.DomUtil.create('div', '', selectDiv);
              option.innerHTML = `Этаж ${i}`;
              option.onclick = () => {
                  selectDiv.style.display = 'none';
                  loadSvgLayer(building, i);
              };
          }

          button.onclick = () => {
              const currentlyVisible = selectDiv.style.display === 'block';
              document.querySelectorAll('.floor-select').forEach(el => el.style.display = 'none');
              selectDiv.style.display = currentlyVisible ? 'none' : 'block';
          };

          return container;
      };

      control.addTo(map);
  });

  // Функция загрузки и отображения SVG карты
  function loadSvgLayer(building, floor) {
      const imageUrl = `${building}_floor_${floor}.svg`;
      if (window.currentFloorMap) {
          map.removeLayer(window.currentFloorMap);
      }
      window.currentFloorMap = L.imageOverlay(imageUrl, bounds).addTo(map);
  }
});




 // Границы карты в пикселях (предположительные размеры изображения этажей)
// var bounds = [[0,0], [1452, 1920]];

// var thirdFloorU = L.imageOverlay('U_floor_3.svg',  bounds).addTo(map);
// var firstfloorA = L.imageOverlay('A_floor_3.svg', bounds);

  
// var auditorium101a = L.polygon([
  
//   [769.6064139999999, 1379.9023],
//   [844.4340639999999, 1440.873],
//   [782.7075539999998, 1491.01],
//   [707.8799139999999, 1430.0394],
    
    
// ], {
//   fillOpacity: 0,  // Изначально прозрачный
//   fillColor: 'blue',  // Цвет при наведении
  
// }).addTo(map);


// // Изменение цвета при наведении
auditorium101a.on('mouseover', function() {
this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
});
 auditorium101a.on('mouseout', function() {
   this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
 });

 // Добавление всплывающего окна с информацией
 auditorium101a.on('click', function() {
   this.bindPopup('Информация об аудитории').openPopup();
 });

 map.on('overlayadd', function(e) {
   if (e.layer === firstfloorA) {
     auditorium101a.addTo(map);
   }
 });

// map.on('overlayremove', function(e) {
//   if (e.layer === firstfloorA) {
//     auditorium101a.remove();
//   }
// });

// map.fitBounds(bounds);


  // [672.200, 1301.044],
  // [766.427, 1377.887],
  // [705.456, 1427.772],
  // [610.473, 1351.181],
  // [672.200, 1301.044],

// L.Control.BuildingButton = L.Control.extend({
//   options: {
//     position: 'topright',
//     building: 'A' // значение по умолчанию
//   },

//   onAdd: function(map) {
//     var container = L.DomUtil.create('div', 'leaflet-bar');
//     var button = L.DomUtil.create('button', 'custom-button', container);
//     button.innerHTML = this.options.building; // отображаем букву корпуса
//     button.title = "Выбрать корпус " + this.options.building;
    
//     button.onclick = () => {
//       console.log('Выбран корпус ' + this.options.building);
//       // Добавьте ваш код здесь, например, обновление карты или отображение информации о корпусе
//     };

//     L.DomEvent.disableClickPropagation(button);
//     return container;
//   }
// });

// // Создаём кнопки для каждого корпуса
// new L.Control.BuildingButton({ building: 'Корпус А'}).addTo(map);
// new L.Control.BuildingButton({ building: 'Корпус Б', position: 'topright' }).addTo(map);
// new L.Control.BuildingButton({ building: 'Корпус У', position: 'topright' }).addTo(map);











//   // var auditorium301 = L.polygon([
//   //   [594.84937, 28.860617],                          
//   //   [594.84937, 28.860617 + 83.464195],
//   //   [594.84937 + 76.516243, 28.860617 + 83.464195],
//   //   [594.84937 + 76.516243, 28.860617],
    
//   // ], {
//   // fillOpacity: 0,  // Изначально прозрачный
//   // fillColor: 'blue',  // Цвет при наведении
//   // stroke: false,
//   // }).addTo(map);
 

//   // // Изменение цвета при наведении
//   // auditorium301.on('mouseover', function() {
//   //   this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
//   // });
//   // auditorium301.on('mouseout', function() {
//   //   this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
//   // });

//   // // Добавление всплывающего окна с информацией
//   // auditorium301.on('click', function() {
//   //   this.bindPopup('Информация об аудитории').openPopup();
//   // });

//   // // Установите область видимости карты так, чтобы вся карта была видна
//   // map.fitBounds(bounds);


//   // var auditorium302 = L.polygon([
//   //   [594.84943, 114.55171],
//   //   [594.84943, 114.55171 + 25.832035],
//   //   [594.84943 + 76.427193, 114.55171 + 25.832035],
//   //   [594.84943 + 76.427193, 114.55171],
//   // ], {
//   //   fillOpacity: 0,  // Изначально прозрачный
//   //   fillColor: 'blue',  // Цвет при наведении
//   //   stroke: false,
//   // }).addTo(map);
  

//   // // Изменение цвета при наведении
//   // auditorium302.on('mouseover', function() {
//   //   this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
//   // });
//   // auditorium302.on('mouseout', function() {
//   //   this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
//   // });

//   // // Добавление всплывающего окна с информацией
//   // auditorium302.on('click', function() {
//   //   this.bindPopup('Информация об аудитории').openPopup();
//   // });

//   // // Установите область видимости карты так, чтобы вся карта была видна
//   // map.fitBounds(bounds);

//   // var auditorium301a = L.polygon([
//   //   [585.35364, 477.0892],
//   //   [585.35364, 477.0892 + 125.8427],
//   //   [585.35364 + 86.260513, 477.0892 + 125.8427],
//   //   [585.35364 + 86.260513, 477.0892],
//   // ], {
//   //   fillOpacity: 0,  // Изначально прозрачный
//   //   fillColor: 'blue',  // Цвет при наведении
//   //   stroke: false,
//   // }).addTo(map);
  

//   // // Изменение цвета при наведении
//   // auditorium301a.on('mouseover', function() {
//   //   this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
//   // });
//   // auditorium301a.on('mouseout', function() {
//   //   this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
//   // });

//   // // Добавление всплывающего окна с информацией
//   // auditorium301a.on('click', function() {
//   //   this.bindPopup('Информация об аудитории').openPopup();
//   // });

//   // // Установите область видимости карты так, чтобы вся карта была видна
//   // map.fitBounds(bounds);

//   // var auditoriumWC1 = L.polygon([
//   //   [585.35364, 605.08923],
//   //   [585.35364, 605.08923 + 43.499916],
//   //   [585.35364 + 86.260063, 605.08923 + 43.499916],
//   //   [585.35364 + 86.260063, 605.08923],
//   // ], {
//   //   fillOpacity: 0,  // Изначально прозрачный
//   //   fillColor: 'blue',  // Цвет при наведении
//   //   stroke: false,
//   // }).addTo(map);


//   // // Изменение цвета при наведении
//   // auditoriumWC1.on('mouseover', function() {
//   //   this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
//   // });
//   // auditoriumWC1.on('mouseout', function() {
//   //   this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
//   // });

//   // // Добавление всплывающего окна с информацией
//   // auditoriumWC1.on('click', function() {
//   //   this.bindPopup('Информация об аудитории').openPopup();
//   // });

//   // // Установите область видимости карты так, чтобы вся карта была видна
//   // map.fitBounds(bounds);

  
// // var x = 17.458893;
// // var y = 468.7178;
// // var width = 78.743164;
// // var height = 60.571667;

// // var polygonCoordinates = [
// //     [y, x],  // Левый верхний угол
// //     [y, x + width],  // Правый верхний угол
// //     [y + height, x + width],  // Правый нижний угол
// //     [y + height, x],  // Левый нижний угол
// //     [y, x]  // Замыкание полигона (возвращаемся к начальной точке)
// // ];
// // var bounds = [[0,0], [950, 1768.77]];

// // var fourthFloor = L.imageOverlay('11.svg',  bounds);


const auditorium310u = [
  [769.6064139999999, 1379.9023],
  [844.4340639999999, 1440.873],
  [782.7075539999998, 1491.01],
  [707.8799139999999, 1430.0394]
];

if (building === 'U' && floor === 3) {
    const polygon = L.polygon(auditorium310u, {fillOpacity: 0, stroke: false}).addTo(map);
    window.currentPolygons.push(polygon);

    // Добавление событий
    polygon.on('mouseover', function() {
        this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
    });
    polygon.on('mouseout', function() {
        this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
    });
    polygon.on('click', function() {
        this.bindPopup('Информация об аудитории').openPopup();
    });

    map.on('overlayadd', function(e) {
        if (e.layer === window.currentFloorMap) {
            polygon.addTo(map);
        }
    });
}

/////////////////////////////////////////////////////////////////////da
/////////////////////////////////
///////////////////////////////
////////////////////////////////////adsasdsadnasnbdkasjkdhasjdhskahdasjdhajdsa











document.addEventListener('DOMContentLoaded', function() {
  var map = L.map('map', {
      crs: L.CRS.Simple,
      minZoom: -10,
      maxZoom: 10,
      center: [730, 960],
      zoom: -1,
      
  });
  
  
  
  const bounds = L.latLngBounds([[0, 0], [1452, 1920]]);
  const buildings = ['Корпус А', 'Корпус Б', 'Корпус У'];

  buildings.forEach(building => {
      const control = L.control({ position: 'topright' });
      
      control.onAdd = function(map) {
          const container = L.DomUtil.create('div', 'leaflet-control-custom');
          const button = L.DomUtil.create('button', 'custom-button', container);
          button.innerHTML = building;

          const selectDiv = L.DomUtil.create('div', 'floor-select', container);
          for (let i = 1; i <= 5; i++) {
              const option = L.DomUtil.create('div', '', selectDiv);
              option.innerHTML = `Этаж ${i}`;
              option.onclick = () => {
                  selectDiv.style.display = 'none';
                  loadSvgLayer(building, i);
              };
          }

          button.onclick = () => {
              const currentlyVisible = selectDiv.style.display === 'block';
              document.querySelectorAll('.floor-select').forEach(el => el.style.display = 'none');
              selectDiv.style.display = currentlyVisible ? 'none' : 'block';
          };

          return container;
      };

      control.addTo(map);
  });

  window.currentPolygons = [];

  window.loadSvgLayer = function (building, floor) {
      const imageUrl = `${building}_floor_${floor}.svg`;
      if (window.currentFloorMap) {
          map.removeLayer(window.currentFloorMap);
          window.currentPolygons.forEach(polygon => map.removeLayer(polygon));
      }
      window.currentFloorMap = L.imageOverlay(imageUrl, bounds).addTo(map);

  
  
// Полигоны для здания A, этаж 1

      const auditorium101aa = [
          [482.00238, 430.02731],
          [482.00238, 580.0054700000001],
          [710.97888, 580.0054700000001],
          [710.97888, 430.02731],
          [482.00238, 430.02731]

      ];
  
      if (building === 'Корпус А' && floor === 1) {
          const polygon = L.polygon(auditorium101aa, {fillOpacity: 0, stroke: false}).addTo(map);
          window.currentPolygons.push(polygon);
  
          
          polygon.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
          });
          polygon.on('mouseout', function() {
                this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
            });
          polygon.on('click', function() {
              map.fitBounds(polygon.getBounds(), {
                  padding: [50, 50], // Добавляет отступы от краев карты
                  animate: true,
                  duration: 100.0
              });
                this.bindPopup('Информация об аудитории').openPopup();
          });
  
          map.on('overlayadd', function(e) {
              if (e.layer === window.currentFloorMap) {
                  polygon.addTo(map);
              }
          });
          map.on('popupclose', function() {
              map.setView([730, 960], -1, {
                  animate: true,
                  duration: 100.0

              });
      });
      };

      const auditorium101a = [
          [482.00238, 582.00623],
          [482.00238, 769.0062899999999],
          [710.97888, 769.0062899999999],
          [710.97888, 582.00623],
          [482.00238, 582.00623]

      ];
  
      if (building === 'Корпус А' && floor === 1) {
          const polygon = L.polygon(auditorium101a, {fillOpacity: 0, stroke: false}).addTo(map);
          window.currentPolygons.push(polygon);
  
          
          polygon.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
          });
          polygon.on('mouseout', function() {
                this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
            });
          polygon.on('click', function() {
              map.fitBounds(polygon.getBounds(), {
                  padding: [50, 50], // Добавляет отступы от краев карты
                  animate: true,
                  duration: 100.0
              });
                this.bindPopup('Информация об аудитории').openPopup();
          });
  
          map.on('overlayadd', function(e) {
              if (e.layer === window.currentFloorMap) {
                  polygon.addTo(map);
              }
          });
          map.on('popupclose', function() {
              map.setView([730, 960], -1, {
                  animate: true,
                  duration: 100.0

              });
      });
      };

      const garderobA = [
          [482.00238, 1096.0222],
          [482.00238, 1278.99811],
          [710.97888, 1278.99811],
          [710.97888, 1096.0222],
          [482.00238, 1096.0222]

      ];
  
      if (building === 'Корпус А' && floor === 1) {
          const polygon = L.polygon(garderobA, {fillOpacity: 0, stroke: false}).addTo(map);
          window.currentPolygons.push(polygon);
  
          
          polygon.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
          });
          polygon.on('mouseout', function() {
                this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
            });
          polygon.on('click', function() {
              map.fitBounds(polygon.getBounds(), {
                  padding: [50, 50], // Добавляет отступы от краев карты
                  animate: true,
                  duration: 100.0
              });
                this.bindPopup('Информация об аудитории').openPopup();
          });
          
          
          map.on('overlayadd', function(e) {
              if (e.layer === window.currentFloorMap) {
                  polygon.addTo(map);
              }
          
          });
          map.on('popupclose', function() {
              map.setView([730, 960], -1, {
                  animate: true,
                  duration: 100.0

              });
      });
      };

      const unnamed1 = [
          [482.00238, 1281.006],
          [482.00238, 1407.0168800000001],
          [710.97888, 1407.0168800000001],
          [710.97888, 1281.006],
          [482.00238, 1281.006]


          


      ];
  
      if (building === 'Корпус А' && floor === 1) {
          const polygon = L.polygon(unnamed1, {fillOpacity: 0, stroke: false}).addTo(map);
          window.currentPolygons.push(polygon);
  
          
          polygon.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
          });
          polygon.on('mouseout', function() {
                this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
            });
          polygon.on('click', function() {
              map.fitBounds(polygon.getBounds(), {
                  padding: [50, 50], // Добавляет отступы от краев карты
                  animate: true,
                  duration: 100.0
              });
                this.bindPopup('Информация об аудитории').openPopup();
          });
  
          map.on('overlayadd', function(e) {
              if (e.layer === window.currentFloorMap) {
                  polygon.addTo(map);
              }
          });
          map.on('popupclose', function() {
              map.setView([730, 960], -1, {
                  animate: true,
                  duration: 100.0

              });
      });
      };
      
      
      
      const auditorium107a = [
          [793.00513, 1324.0416],
          [793.00513, 1406.940945],
          [1008.96320000000003, 1406.940945],
          [1008.96320000000003, 1324.0416],
          [793.00513, 1324.0416]


      ];
  
      if (building === 'Корпус А' && floor === 1) {
          const polygon = L.polygon(auditorium107a, {fillOpacity: 0, stroke: false}).addTo(map);
          window.currentPolygons.push(polygon);
  
          
          polygon.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
          });
          polygon.on('mouseout', function() {
                this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
            });
          polygon.on('click', function() {
              map.fitBounds(polygon.getBounds(), {
                  padding: [50, 50], // Добавляет отступы от краев карты
                  animate: true,
                  duration: 100.0
              });
                this.bindPopup('Информация об аудитории').openPopup();
          });
  
          map.on('overlayadd', function(e) {
              if (e.layer === window.currentFloorMap) {
                  polygon.addTo(map);
              }
          });
          map.on('popupclose', function() {
              map.setView([730, 960], -1, {
                  animate: true,
                  duration: 100.0

              });
      });
      };

      const auditorium106a = [
          [793.00513, 1249.9635],
          [793.00513, 1322.023421],
          [1008.93573000000004, 1322.023421],
          [1008.93573000000004, 1249.9635],
          [793.00513, 1249.9635]

      ];
  
      if (building === 'Корпус А' && floor === 1) {
          const polygon = L.polygon(auditorium106a, {fillOpacity: 0, stroke: false}).addTo(map);
          window.currentPolygons.push(polygon);
  
          
          polygon.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
          });
          polygon.on('mouseout', function() {
                this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
            });
          polygon.on('click', function() {
              map.fitBounds(polygon.getBounds(), {
                  padding: [50, 50], // Добавляет отступы от краев карты
                  animate: true,
                  duration: 100.0
              });
                this.bindPopup('Информация об аудитории').openPopup();
          });
  
          map.on('overlayadd', function(e) {
              if (e.layer === window.currentFloorMap) {
                  polygon.addTo(map);
              }
          });
          map.on('popupclose', function() {
              map.setView([730, 960], -1, {
                  animate: true,
                  duration: 100.0

              });
      });
      };

      const auditorium105a = [
          [793.00513, 1172.0123],
          [793.00513, 1247.859827],
          [1008.93573000000004, 1247.859827],
          [1008.93573000000004, 1172.0123],
          [793.00513, 1172.0123]
          

      ];
  
      if (building === 'Корпус А' && floor === 1) {
          const polygon = L.polygon(auditorium105a, {fillOpacity: 0, stroke: false}).addTo(map);
          window.currentPolygons.push(polygon);
  
          
          polygon.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
          });
          polygon.on('mouseout', function() {
                this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
            });
          polygon.on('click', function() {
              map.fitBounds(polygon.getBounds(), {
                  padding: [50, 50], // Добавляет отступы от краев карты
                  animate: true,
                  duration: 100.0
              });
                this.bindPopup('Информация об аудитории').openPopup();
          });
  
          map.on('overlayadd', function(e) {
              if (e.layer === window.currentFloorMap) {
                  polygon.addTo(map);
              }
          });
          map.on('popupclose', function() {
              map.setView([730, 960], -1, {
                  animate: true,
                  duration: 100.0

              });
      });
      };

      const auditorium104a = [
          [793.00513, 1096.0087],
          [793.00513, 1170.0190300000002],
          [1008.93573000000004, 1170.0190300000002],
          [1008.93573000000004, 1096.0087],
          [793.00513, 1096.0087]
  
          

      ];
  
      if (building === 'Корпус А' && floor === 1) {
          const polygon = L.polygon(auditorium104a, {fillOpacity: 0, stroke: false}).addTo(map);
          window.currentPolygons.push(polygon);
  
          
          polygon.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
          });
          polygon.on('mouseout', function() {
                this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
            });
          polygon.on('click', function() {
              map.fitBounds(polygon.getBounds(), {
                  padding: [50, 50], // Добавляет отступы от краев карты
                  animate: true,
                  duration: 100.0
              });
                this.bindPopup('Информация об аудитории').openPopup();
          });
  
          map.on('overlayadd', function(e) {
              if (e.layer === window.currentFloorMap) {
                  polygon.addTo(map);
              }
          });
          map.on('popupclose', function() {
              map.setView([730, 960], -1, {
                  animate: true,
                  duration: 100.0

              });
      });
      };

      const womenToiletA1 = [
          [793.01215, 1016.0022],
          [793.01215, 1094.027179],
          [1008.93573000000004, 1094.027179],
          [1008.93573000000004, 1016.0022],
          [793.01215, 1016.0022]
  
          

      ];
  
      if (building === 'Корпус А' && floor === 1) {
          const polygon = L.polygon(womenToiletA1, {fillOpacity: 0, stroke: false}).addTo(map);
          window.currentPolygons.push(polygon);
  
          
          polygon.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
          });
          polygon.on('mouseout', function() {
                this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
            });
          polygon.on('click', function() {
              map.fitBounds(polygon.getBounds(), {
                  padding: [50, 50], // Добавляет отступы от краев карты
                  animate: true,
                  duration: 100.0
              });
                this.bindPopup('Информация об аудитории').openPopup();
          });
  
          map.on('overlayadd', function(e) {
              if (e.layer === window.currentFloorMap) {
                  polygon.addTo(map);
              }
          });
          map.on('popupclose', function() {
              map.setView([730, 960], -1, {
                  animate: true,
                  duration: 100.0

              });
      });
      };

      const unnamed2 = [
          [793.01215, 778.02777],
          [793.01215, 838.982058],
          [1008.99053000000004, 838.982058],
          [1008.99053000000004, 778.02777],
          [793.01215, 778.02777]

  
          

      ];
  
      if (building === 'Корпус А' && floor === 1) {
          const polygon = L.polygon(unnamed2, {fillOpacity: 0, stroke: false}).addTo(map);
          window.currentPolygons.push(polygon);
  
          
          polygon.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
          });
          polygon.on('mouseout', function() {
                this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
            });
          polygon.on('click', function() {
              map.fitBounds(polygon.getBounds(), {
                  padding: [50, 50], // Добавляет отступы от краев карты
                  animate: true,
                  duration: 100.0
              });
                this.bindPopup('Информация об аудитории').openPopup();
          });
  
          map.on('overlayadd', function(e) {
              if (e.layer === window.currentFloorMap) {
                  polygon.addTo(map);
              }
          });
          map.on('popupclose', function() {
              map.setView([730, 960], -1, {
                  animate: true,
                  duration: 100.0

              });
      });
      };

      const unnamed3 = [
          [793.01215, 694.00269],
          [793.01215, 775.960324],
          [1008.99805000000003, 775.960324],
          [1008.99805000000003, 694.00269],
          [793.01215, 694.00269]


  
          

      ];
  
      if (building === 'Корпус А' && floor === 1) {
          const polygon = L.polygon(unnamed3, {fillOpacity: 0, stroke: false}).addTo(map);
          window.currentPolygons.push(polygon);
  
          
          polygon.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
          });
          polygon.on('mouseout', function() {
                this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
            });
          polygon.on('click', function() {
              map.fitBounds(polygon.getBounds(), {
                  padding: [50, 50], // Добавляет отступы от краев карты
                  animate: true,
                  duration: 100.0
              });
                this.bindPopup('Информация об аудитории').openPopup();
          });
  
          map.on('overlayadd', function(e) {
              if (e.layer === window.currentFloorMap) {
                  polygon.addTo(map);
              }
          });
          map.on('popupclose', function() {
              map.setView([730, 960], -1, {
                  animate: true,
                  duration: 100.0

              });
      });
      };

      const auditorium103a = [
          [793.01215, 429.99667],
          [793.01215, 691.96042],
          [1008.99805000000003, 691.96042],
          [1008.99805000000003, 429.99667],
          [793.01215, 429.99667]


      ];
  
      if (building === 'Корпус А' && floor === 1) {
          const polygon = L.polygon(auditorium103a, {fillOpacity: 0, stroke: false}).addTo(map);
          window.currentPolygons.push(polygon);
  
          
          polygon.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
          });
          polygon.on('mouseout', function() {
                this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
            });
          polygon.on('click', function() {
              map.fitBounds(polygon.getBounds(), {
                  padding: [50, 50], // Добавляет отступы от краев карты
                  animate: true,
                  duration: 100.0
              });
                this.bindPopup('Информация об аудитории').openPopup();
          });
  
          map.on('overlayadd', function(e) {
              if (e.layer === window.currentFloorMap) {
                  polygon.addTo(map);
              }
          });
          map.on('popupclose', function() {
              map.setView([730, 960], -1, {
                  animate: true,
                  duration: 100.0

              });
      });
      };

      // Полигоны для здания У, этаж 4
      const auditorium401u = [
          [1120.523878, 157.37705],
          [1157.47326799999996, 206.81396999999998],
          [1118.30006799999998, 255.90876999999998],
          [1081.350678, 206.98502999999997],
          [1120.523878, 157.37705],
          [1120.523878, 157.37705]

      ];
  
      if (building === 'Корпус У' && floor === 4) {
          const polygon = L.polygon(auditorium401u, {fillOpacity: 0, stroke: false }).addTo(map);
          window.currentPolygons.push(polygon);
  
          
          polygon.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
          });
          polygon.on('mouseout', function() {
                this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
            });
          polygon.on('click', function() {
              map.fitBounds(polygon.getBounds(), {
                  padding: [50, 50], // Добавляет отступы от краев карты
                  animate: true,
                  duration: 100.0
              });
                this.bindPopup('Информация об аудитории').openPopup();
          });
  
          map.on('overlayadd', function(e) {
              if (e.layer === window.currentFloorMap) {
                  polygon.addTo(map);
              }
          });
          map.on('popupclose', function() {
              map.setView([730, 960], -1, {
                  animate: true,
                  duration: 100.0

              });
      });
      };


      
  }

  
  
});












