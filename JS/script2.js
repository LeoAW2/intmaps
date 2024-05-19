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