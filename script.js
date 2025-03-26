document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -10,
        maxZoom: 10,
        center: [730, 960],
        zoom: -1,
    });

    const bounds = L.latLngBounds([[0, 0], [1452, 1920]]);
    const territories = {
        'Ульянка': {
            svg: 'teritorU.svg',
            buildings: ['Корпус У', 'МедЦентр', 'Конгресс - центр', 'Спорткомплекс', 'Общежитие1', 'Общежитие2', 'Общежитие3']
        },
        'Лоцманская': {
            svg: 'teritorLoc.svg',
            buildings: ['Корпус А', 'Корпус Б', 'Корпус R']
        },
        'Горьковская': {
            svg: 'figa.svg',
            buildings: []
        }
    };

    let currentTerritoryLayer = null;
    let currentFloorMap = null;
    let allPolygons = L.layerGroup().addTo(map);

    let stateHistory = [];

    function saveState() {
        stateHistory.push({
            currentTerritoryLayer,
            currentFloorMap,
            polygons: allPolygons.getLayers(),
            center: map.getCenter(),
            zoom: map.getZoom()
        });
    }

    function restoreState() {
        if (stateHistory.length > 0) {
            const lastState = stateHistory.pop();
            clearMap();
            currentTerritoryLayer = lastState.currentTerritoryLayer;
            currentFloorMap = lastState.currentFloorMap;
            if (currentTerritoryLayer) {
                map.addLayer(currentTerritoryLayer);
            }
            if (currentFloorMap) {
                map.addLayer(currentFloorMap);
            }
            allPolygons.clearLayers();
            lastState.polygons.forEach(polygon => {
                addInteractivePolygon(polygon);
                allPolygons.addLayer(polygon);
            });
            map.setView(lastState.center, lastState.zoom);
        }
    }

    function loadInitialMap(svgUrl) {
        clearMap();
        currentTerritoryLayer = L.imageOverlay(svgUrl, bounds).addTo(map);
    }

    window.goBack = function() {
        restoreState();
    };

    window.selectTerritory = function(territory) {
        saveState();
        loadTerritorySvg(territories[territory].svg, territories[territory].buildings);
    };

    function loadTerritorySvg(svgUrl, buildings) {
        clearMap();
        currentTerritoryLayer = L.imageOverlay(svgUrl, bounds).addTo(map);

        if (buildings) {
            buildings.forEach(building => {
                addBuildingPolygon(building);
            });
        }
    }

    function addBuildingPolygon(building) {
        let polygonCoords;
        if (building === 'Корпус У') {
            polygonCoords = [
                [-349.77356 + 1080.5, 687.91819 - 109.4],
                [-113.8057 + 1080.5, 877.60409 - 109.4],
                [-113.8057 + 1080.5, 1244.3535 - 109.4],
                [-177.96932 + 1080.5, 1244.0029 - 109.4],
                [-178.31994 + 1080.5, 1342.1768 - 109.4],
                [-230.56245 + 1080.5, 1342.1768 - 109.4],
                [-230.21183 + 1080.5, 1271.3514 - 109.4],
                [-194.79912 + 1080.5, 1270.6501 - 109.4],
                [-195.50037 + 1080.5, 1243.0029 - 109.4],
                [-211.62893 + 1080.5, 1243.0029 - 109.4],
                [-210.57706 + 1080.5, 980.7385 - 109.4],
                [-177.26808 + 1080.5, 981.7904 - 109.4],
                [-177.26808 + 1080.5, 1152.8934 - 109.4],
                [-156.23083 + 1080.5, 1151.8415 - 109.4],
                [-155.8802 + 1080.5, 933.4047 - 109.4],
                [-388.69248 + 1080.5, 747.9262 - 109.4]
            ];
        } else if (building === 'МедЦентр') {
            polygonCoords = [
                [648, 1095], // прав низ
                [680, 1077], // прав верх
                [635.5, 983], // лев верх
                [601, 1001] // лев низ
            ];
        } else if (building === 'Спорткомплекс') {
            polygonCoords = [
                [669.6771899999999 + 140, 853.98252],
                [618.7283199999999 + 140, 810.71936],
                [532.3259599999999 + 140, 932.82312],
                [587.9854399999999 + 140, 975.83835],
                [669.6771899999999 + 140, 853.98252],
                [669.6771899999999 + 140, 853.98252]
            ];
        } else if (building === 'Конгресс - центр') {
            polygonCoords = [
                [930.9916280000001 - 359, 442.30072],
                [842.7298280000001 - 359, 483.4565],
                [808.5159780000001 - 359, 454.44911],
                [813.4745080000001 - 359, 349.32831],
                [930.9916280000001 - 359, 442.30072],
                [930.9916280000001 - 359, 442.30072]
            ];
        } else if (building === 'Общежитие1') {
            polygonCoords = [
                [1053.6408260000003 - 682, 307.86262 + 1],
                [1036.9057860000003 - 682, 331.8495 + 1],
                [986.3287960000002 - 682, 292.4292 + 1],
                [1003.0018560000002 - 682, 268.38034 + 1],
                [1053.6408260000003 - 682, 307.86262 + 1],
                [1053.6408260000003 - 682, 307.86262 + 1]
            ];
        } else if (building === 'Общежитие2') {
            polygonCoords = [
                [1023.679328 - 622, 409.28415 + 0.5],
                [1006.959098 - 622, 433.03872 + 0.5],
                [956.3162980000001 - 622, 393.63769 + 0.5],
                [972.8612180000001 - 622, 369.79547 + 0.5],
                [1023.679328 - 622, 409.28415 + 0.5],
                [1023.679328 - 622, 409.28415 + 0.5]
            ];
        } else if (building === 'Общежитие3') {
            polygonCoords = [
                [992.4959860000002 - 559.8, 509.5179 + 0.5],
                [975.7757560000002 - 559.8, 533.25055 + 0.5],
                [925.1329460000002 - 559.8, 493.82761 + 0.5],
                [941.6778660000002 - 559.8, 469.98539 + 0.5],
                [992.4959860000002 - 559.8, 509.5179 + 0.5],
                [992.4959860000002 - 559.8, 509.5179 + 0.5]
            ];
        } else if (building === 'Корпус А') {
            polygonCoords = [
                [769.9031220000002 + 56.5, 367.84375],
                [800.1843720000002 + 56.5, 403.84375],
                [485.3328120000001 + 56.5, 672.125],
                [459.82500200000015 + 56.5, 640.24219],
                [769.9031220000002 + 56.5, 367.84375],
                [769.9031220000002 + 56.5, 367.84375]
            ];
        } else if (building === 'Корпус Б') {
            polygonCoords = [
                [551.0609479999998 + 332, 522.81482],
                [575.4739479999998 + 332, 551.7679700000001],
                [472.5159179999999 + 332, 639.1757800000001],
                [448.1018579999999 + 332, 610.2265600000002],
                [551.0609479999998 + 332, 522.81482],
                [551.0609479999998 + 332, 522.81482]
            ];
        
        } else if (building === 'Корпус R') {
        polygonCoords = [
                [400.25807199999997 + 518, 563.83479],
                [370.31200199999995 + 518, 589.23437],
                [465.72216199999997 + 518, 701.18359],
                [494.67892199999994 + 518, 676.75643],
                [400.25807199999997 + 518, 563.83479],
                [400.25807199999997 + 518, 563.83479]
        ];
    }


        const polygon = L.polygon(polygonCoords, {
            color: 'blue',
            fillOpacity: 0,
            stroke: false
        });

        polygon.options.name = building;

        addInteractivePolygon(polygon);

        allPolygons.addLayer(polygon);
    }

    function addInteractivePolygon(polygon) {
        polygon.on('mouseover', function() {
            this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
        });
        polygon.on('mouseout', function() {
            this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
        });
        polygon.on('click', function() {
            // Проверяем, чтобы модальное окно не открывалось для аудиторий
            const buildingNames = [
                'Корпус У', 'МедЦентр', 'Конгресс - центр', 'Спорткомплекс', 
                'Общежитие1', 'Общежитие2', 'Общежитие3', 'Корпус А', 'Корпус Б', 'Корпус R'
            ];
            if (buildingNames.includes(this.options.name)) {
                showFloorModal(this.options.name);
            }
        });
    }

    function clearMap() {
        if (currentTerritoryLayer) {
            map.removeLayer(currentTerritoryLayer);
            currentTerritoryLayer = null;
        }
        if (currentFloorMap) {
            map.removeLayer(currentFloorMap);
            currentFloorMap = null;
        }
        allPolygons.clearLayers();
    }

    window.loadSvgLayer = function(building, floor) {
        saveState();
        clearMap();

        const imageUrl = `${building}_floor_${floor}.svg`;
        currentFloorMap = L.imageOverlay(imageUrl, bounds).addTo(map);

        const auditorium433u = [
            [947.0698639999999 - 468, 1292.0314],
            [878.473994 - 468, 1294.5973000000001],
            [878.645054 - 468, 1344.3764],
            [947.411984 - 468, 1341.8104],
            [947.0698639999999 - 468, 1292.0314],
            [947.0698639999999 - 468, 1292.0314]

        ];

        if (building === 'Корпус У' && floor === 4) {
            const polygon = L.polygon(auditorium433u, { fillOpacity: 0, stroke: false });
            polygon.options.name = 'У433';
            addInteractivePolygon(polygon);
            allPolygons.addLayer(polygon);

            polygon.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
            });
            polygon.on('mouseout', function() {
                this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
            });
            polygon.on('click', function() {
                map.fitBounds(polygon.getBounds(), {
                    padding: [50, 50],
                    animate: true,
                    duration: 100.0
                });
                this.bindPopup('У433').openPopup();
            });

            map.on('overlayadd', function(e) {
                if (e.layer === currentFloorMap) {
                    polygon.addTo(map);
                }
            });
            map.on('popupclose', function() {
                map.setView([730, 960], -1, {
                    animate: true,
                    duration: 100.0
                });
            });
        }
        const auditorium434u = [
            [947.21408 - 468, 1239.1051],
            [947.3350399999999 - 468, 1289.9079],
            [878.6302699999999 - 468, 1292.4480999999998],
            [878.7512299999999 - 468, 1242.0080999999998],
            [947.21408 - 468, 1239.1051],
            [947.21408 - 468, 1239.1051]

        ];

        if (building === 'Корпус У' && floor === 4) {
            const polygon = L.polygon(auditorium434u, { fillOpacity: 0, stroke: false });
            polygon.options.name = 'У434';
            addInteractivePolygon(polygon);
            allPolygons.addLayer(polygon);

            polygon.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
            });
            polygon.on('mouseout', function() {
                this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
            });
            polygon.on('click', function() {
                map.fitBounds(polygon.getBounds(), {
                    padding: [50, 50],
                    animate: true,
                    duration: 100.0
                });
                this.bindPopup('У434').openPopup();
            });

            map.on('overlayadd', function(e) {
                if (e.layer === currentFloorMap) {
                    polygon.addTo(map);
                }
            });
            map.on('popupclose', function() {
                map.setView([730, 960], -1, {
                    animate: true,
                    duration: 100.0
                });
            });
        }
        const auditorium435u = [
            [947.226176 - 468, 1165.2596],
            [947.407616 - 468, 1237.0488],
            [878.944766 - 468, 1239.5889],
            [878.823806 - 468, 1167.6182999999999],
            [947.226176 - 468, 1165.2596],
            [947.226176 - 468, 1165.2596]

        ];

        if (building === 'Корпус У' && floor === 4) {
            const polygon = L.polygon(auditorium435u, { fillOpacity: 0, stroke: false });
            polygon.options.name = 'У435';
            addInteractivePolygon(polygon);
            allPolygons.addLayer(polygon);

            polygon.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
            });
            polygon.on('mouseout', function() {
                this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
            });
            polygon.on('click', function() {
                map.fitBounds(polygon.getBounds(), {
                    padding: [50, 50],
                    animate: true,
                    duration: 100.0
                });
                this.bindPopup('У435').openPopup();
            });

            map.on('overlayadd', function(e) {
                if (e.layer === currentFloorMap) {
                    polygon.addTo(map);
                }
            });
            map.on('popupclose', function() {
                map.setView([730, 960], -1, {
                    animate: true,
                    duration: 100.0
                });
            });
        }
        const auditorium432u = [
            [947.1656960000001 - 468, 1343.9767],
            [947.0447360000002 - 468, 1386.1914],
            [878.5818860000002 - 468, 1388.6106],
            [878.4609260000002 - 468, 1346.5167999999999],
            [947.1656960000001 - 468, 1343.9767],
            [947.1656960000001 - 468, 1343.9767]

        ];

        if (building === 'Корпус У' && floor === 4) {
            const polygon = L.polygon(auditorium432u, { fillOpacity: 0, stroke: false });
            polygon.options.name = 'У432';
            addInteractivePolygon(polygon);
            allPolygons.addLayer(polygon);

            polygon.on('mouseover', function() {
                this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
            });
            polygon.on('mouseout', function() {
                this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
            });
            polygon.on('click', function() {
                map.fitBounds(polygon.getBounds(), {
                    padding: [50, 50],
                    animate: true,
                    duration: 100.0
                });
                this.bindPopup('У432').openPopup();
            });

            map.on('overlayadd', function(e) {
                if (e.layer === currentFloorMap) {
                    polygon.addTo(map);
                }
            });
            map.on('popupclose', function() {
                map.setView([730, 960], -1, {
                    animate: true,
                    duration: 100.0
                });
            });
        }
    }

    function showFloorModal(building) {
        const modalHtml = `
            <div class="modal fade" id="floorModal" tabindex="-1" aria-labelledby="floorModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content bg-dark text-white">
                        <div class="modal-header border-0">
                            <h5 class="modal-title" id="floorModalLabel">${building}</h5>
                            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ${getFloorOptions(building)}
                        </div>
                    </div>
                </div>
            </div>
        `;
    
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        const modal = new bootstrap.Modal(document.getElementById('floorModal'));
        modal.show();
    
        document.getElementById('floorModal').addEventListener('hidden.bs.modal', function () {
            document.getElementById('floorModal').remove();
        });
    }
    
    function getFloorOptions(building) {
        let floors = 5;
        if (building === 'Корпус Б') {
            floors = 6;
        }
        if (building === 'Конгресс - центр') {
            floors = 2;
        }
        if (building === 'Спорткомплекс') {
            floors = 2;
        }
        if (building === 'Общежитие1') {
            floors = 12;
        }
        if (building === 'Общежитие2') {
            floors = 12;
        }
        if (building === 'Общежитие3') {
            floors = 12;
        }
        if (building === 'МедЦентр') {
            floors = 3;
        }
        if (building === 'Корпус R') {
            floors = 1;
        }
    
        let floorOptions = '';
        for (let i = 1; i <= floors; i++) {
            floorOptions += `<button class="btn btn-outline-light btn-block mb-2" onclick="selectFloor('${building}', ${i})">Этаж ${i}</button>`;
        }
    
        return floorOptions;
    }
    

    window.selectFloor = function(building, floor) {
        $('#floorModal').modal('hide');
        loadSvgLayer(building, floor);
    }

    function highlightAuditorium(auditorium) {
        const foundPolygon = allPolygons.getLayers().find(polygon => polygon.options.name === auditorium);
        if (foundPolygon) {
            map.fitBounds(foundPolygon.getBounds(), {
                padding: [50, 50],
                animate: true,
                duration: 100.0
            });
            foundPolygon.setStyle({ color: 'red' });
            // Программно вызвать клик на найденном полигоне
            foundPolygon.fire('click');
        }
    }

    window.searchAuditorium = function() {
        const searchBox = document.getElementById('searchBox');
        const query = searchBox.value.trim();
        if (query) {
            highlightAuditorium(query);
        }
    };

    const searchControl = new L.Control.Search({
        layer: allPolygons,
        propertyName: 'name',
        sourceData: function(text, callResponse) {
            const results = {};
            auditoriums.forEach(function(auditorium) {
                if (auditorium.title.toLowerCase().includes(text.toLowerCase())) {
                    results[auditorium.title] = auditorium.loc;
                }
            });
            callResponse(results);
        },
        textPlaceholder: 'Введите номер аудитории',
        moveToLocation: function(latlng, title, map) {
            const foundPolygon = allPolygons.getLayers().find(polygon => polygon.options.name === title);
            if (foundPolygon) {
                map.fitBounds(foundPolygon.getBounds(), {
                    padding: [50, 50],
                    animate: true,
                    duration: 100.0
                });
                foundPolygon.setStyle({ color: 'red' });
                // Программно вызвать клик на найденном полигоне
                foundPolygon.fire('click');
            } else {
                map.setView(latlng, 17);
            }
        }
    });

    const searchContainer = document.getElementById('search');
    searchControl.addTo(map);
    searchContainer.appendChild(searchControl.getContainer());

    L.Control.BackButton = L.Control.extend({
        onAdd: function(map) {
            const container = L.DomUtil.create('div', 'leaflet-control-custom');
            container.innerHTML = '←'; // Текст кнопки "Назад"
            container.style.background = '#0B63F6 51%'; // Цвет фона
            container.style.color = 'white'; // Цвет текста
            container.style.width = '10px';
            container.style.height = '5px';
            container.style.borderRadius = '20px'; // Округленные углы
            container.style.cursor = 'pointer'; // Указатель при наведении
            container.style.fontSize = '16px'; // Размер текста
            container.style.transition = 'background-color 0.3s ease'; // Плавный переход цвета фона
            

            container.onmouseover = function() {
                container.style.backgroundColor = '#0056b3';
            };

            container.onmouseout = function() {
                container.style.backgroundColor = '#0B63F6 51%';
            };

            container.onmousedown = function() {
                container.style.backgroundColor = '#0B63F6 51%';
            };

            container.onmouseup = function() {
                container.style.backgroundColor = '#0B63F6 51%';
            };

            container.onclick = function() {
                goBack();
            };

            return container;
        }
    });
    
    L.control.backButton = function(opts) {
        return new L.Control.BackButton(opts);
    }
    
    L.control.backButton({ position: 'topleft' }).addTo(map);    
});
