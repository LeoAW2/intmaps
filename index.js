document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map', {
        crs: L.CRS.Simple,
        minZoom: -1,
        maxZoom: 1,
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
            svg: 'locmanskaya_territory.svg',
            buildings: ['Корпус А', 'Корпус Б']
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
            map.setView(lastState.center, lastState.zoom);
        }
    }

    // Загрузка начального изображения при загрузке страницы
    loadInitialMap('kk.svg');

    function loadInitialMap(svgUrl) {
        clearMap();
        currentTerritoryLayer = L.imageOverlay(svgUrl, bounds).addTo(map);
    }

    window.goHome = function() {
        saveState();
        loadInitialMap('kk.svg');
    };

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
                [700, 900],
                [750, 900],
                [750, 950],
                [700, 950]
            ];
        } else if (building === 'Корпус Б') {
            polygonCoords = [
                [800, 1000],
                [850, 1000],
                [850, 1050],
                [800, 1050]
            ];
        }

        const polygon = L.polygon(polygonCoords, {
            color: 'blue',
            fillOpacity: 1,
            stroke: false
        });

        polygon.options.name = building;

        polygon.on('mouseover', function() {
            this.setStyle({ fillOpacity: 0.1, fillColor: 'blue' });
        });
        polygon.on('mouseout', function() {
            this.setStyle({ fillOpacity: 0, fillColor: 'blue' });
        });
        polygon.on('click', function() {
            showFloorModal(building);
        });

        allPolygons.addLayer(polygon);
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

        const auditorium101aa = [
            [482.00238, 430.02731],
            [482.00238, 580.00547],
            [710.97888, 580.00547],
            [710.97888, 430.02731],
            [482.00238, 430.02731]
        ];

        if (building === 'Корпус А' && floor === 1) {
            const polygon = L.polygon(auditorium101aa, { fillOpacity: 0, stroke: false });
            polygon.options.name = 'Аудитория 101';
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
                this.bindPopup('Аудитория 101').openPopup();
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
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="floorModalLabel">${building}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ${getFloorOptions(building)}
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHtml);
        $('#floorModal').modal('show');

        $('#floorModal').on('hidden.bs.modal', function () {
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
            floors = 1;
        }
        if (building === 'Общежитие1') {
            floors = 9;
        }
        if (building === 'Общежитие2') {
            floors = 9;
        }
        if (building === 'Общежитие3') {
            floors = 9;
        }
        if (building === 'МедЦентр') {
            floors = 3;
        }

        let floorOptions = '';
        for (let i = 1; i <= floors; i++) {
            floorOptions += `<button class="btn btn-secondary btn-block" onclick="selectFloor('${building}', ${i})">Этаж ${i}</button>`;
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

                if (title === 'Аудитория 101') {
                    selectTerritory('Лоцманская');
                    setTimeout(function() {
                        selectFloor('Корпус А', 1);
                    }, 500);
                }
            } else {
                map.setView(latlng, 17);
            }
        }
    });

    const searchContainer = document.getElementById('search');
    searchControl.addTo(map);
    searchContainer.appendChild(searchControl.getContainer());

    // Добавление кнопок "Домой" и "Назад" в контроллер Leaflet
    L.Control.HomeButton = L.Control.extend({
        onAdd: function(map) {
            const container = L.DomUtil.create('div', 'home-button');
            const img = L.DomUtil.create('img', '', container);
            img.src = 'image.png'; // замените на путь к вашему изображению домика
            container.onclick = function() {
                goHome();
            };
            return container;
        }
    });

    L.control.homeButton = function(opts) {
        return new L.Control.HomeButton(opts);
    }

    L.control.homeButton({ position: 'topright' }).addTo(map);

    L.Control.BackButton = L.Control.extend({
        onAdd: function(map) {
            const container = L.DomUtil.create('div', 'back-button');
            const img = L.DomUtil.create('img', '', container);
            img.src = 'back_icon.png'; // замените на путь к вашему изображению стрелки "Назад"
            container.onclick = function() {
                goBack();
            };
            return container;
        }
    });

    L.control.backButton = function(opts) {
        return new L.Control.BackButton(opts);
    }

    L.control.backButton({ position: 'topright' }).addTo(map);
});
