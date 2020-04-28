export default [
    {
        id: "regulacio-geojson-polygon",
        type: "fill",
        source: "regulacio-json",
        layout: { visibility: "visible" },
        paint: {
            "fill-color": [
                "match",
                ["get", "atr"],
                ["A"],
                "hsla(0, 100%, 44%, 0.5)",
                ["B"],
                "hsla(120, 100%, 27%, 0.5)",
                ["C"],
                "hsla(206, 100%, 48%, 0.5)",
                ["D"],
                "hsla(54, 100%, 74%, 0.5)",
                ["G"],
                "hsla(240, 100%, 27%, 0.5)",
                ["E"],
                "hsla(323, 70%, 48%, 0.5)",
                "#000000"
            ],
            "fill-opacity": ["interpolate", ["linear"], ["zoom"], 12, 0, 13.2, 1]
        },
        filter: ["==", "$type", "Polygon"]
    },
    {
        id: "regulacio-point-point",
        type: "symbol",
        source: "regulacio-point",
        layout: {
            visibility: "visible",
            "text-font": ["Open Sans Bold"],
            "text-field": [
                "step",
                ["zoom"],
                ["to-string", ["concat", ["get", "Codi"], " - ", ["get", "Nom"], " ", ["get", "Regulacio"]]],
                22,
                ""
            ],
            "symbol-placement": "point",
            "text-size": 14,
            "text-letter-spacing": ["interpolate", ["linear"], ["zoom"], 0, 0, 22, 0],
            "text-line-height": 1.2,
            "text-max-width": 10,
            "text-allow-overlap": true,
            "text-justify": "center",
            "text-anchor": "center",
            visibility: "visible"
        },
        paint: {
            "text-opacity": ["interpolate", ["linear"], ["zoom"], 12, 0, 13.2, 1],
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "agulles-point",
        type: "symbol",
        source: "agulles-point",
        layout: {
            "text-font": ["Open Sans Regular"],
            "text-field": ["to-string", ["get", "nom"]],
            "symbol-placement": "point",
            "text-size": 12,
            "icon-image": "mountain",
            "icon-size": 0.25,
            "text-justify": "center",
            "text-anchor": ["step", ["zoom"], "center", 14, "top"],
            "text-offset": [0, 0.3],
            visibility: "visible"
        },
        paint: {
            "text-opacity": ["interpolate", ["linear"], ["zoom"], 14, 0, 15, 1],
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5,
            "icon-opacity": [
                "interpolate",
                ["linear"],
                ["zoom"],
                1,
                0,
                14,
                0,
                14.04,
                1
            ]
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "camins-geojson-LineString",
        type: "line",
        source: "camins-json",
        layout: { visibility: "none", "line-join": "round", "line-cap": "round" },
        paint: {
            "line-width": [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                6,
                3
            ],
            "line-color": [
                "match",
                ["get", "Municipi"], // get the property
                "Altres",
                "#223b53",
                "Bruc",
                "#b16618",
                "Collbató",
                "#7685bc",
                "Marganell",
                "#207969",
                "Montserrat",
                "#a90230",
                "Monistrol",
                "#0063ac",
                "#223b53"
            ] //else
        },
        filter: ["==", "$type", "LineString"]
    },
      {
        id: "GR_PR_PNMM",
        type: "line",
        source: "GR_PR_PNMM",
        layout: { visibility: "none", "line-join": "round", "line-cap": "round" },
        paint: {
            "line-width": [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                6,
                3
            ],
            "line-color": "#223b53",
        },
        filter: ["==", "$type", "LineString"]
    },
    {
        id: "limits-geojson-polygon",
        type: "fill",
        source: "limits-json",
        layout: { visibility: "none" },
        paint: {
            "fill-color": [
                "match",
                ["get", "CODI"],
                ["zpnat"],
                "rgba(200, 153, 72, 0.5)",
                ["rnp"],
                "rgba(46, 128, 113, 0.5)",
                ["pnat"],
                "rgba(191, 68, 85, 0.5)",
                "#000000"
            ],
            "fill-opacity": ["interpolate", ["linear"], ["zoom"], 10, 0, 13.8, 1]
        },
        filter: ["==", "$type", "Polygon"]
    },
    {
        id: "limits-point",
        type: "symbol",
        source: "limits-point",
        layout: {
            "text-font": ["Open Sans Bold"],
            "text-field": ["to-string", ["get", "NOM"]],
            "symbol-placement": "point",
            "text-size": 18,
            "text-letter-spacing": ["interpolate", ["linear"], ["zoom"], 0, 0, 22, 0],
            "text-line-height": 1.2,
            "text-max-width": 15,
            "text-justify": "center",
            "text-anchor": "center",
            "text-allow-overlap": true,
            visibility: "none"
        },
        paint: {
            "text-opacity": ["interpolate", ["linear"], ["zoom"], 10, 0, 13.8, 1],
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "foer-point",
        type: "symbol",
        source: "foer-point",
        layout: {
            "text-font": ["Open Sans Regular"],
            "text-field": "{CODI}",
            "text-size": 12,
            "text-offset": [0, 1.5],
            "text-allow-overlap": false,
            visibility: "none"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "foer-point2",
        type: "circle",
        source: "foer-point",
        layout: { visibility: "none" },
        paint: {
            "circle-stroke-width": 3,
            "circle-stroke-color": "white",
            "circle-opacity": 0.7,
            "circle-radius": 8,
            "circle-color": "#eb073b"
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "112-point",
        type: "symbol",
        source: "112-point",
        layout: {
            "text-font": ["Open Sans Regular"],
            "text-field": "{MATRICULA}",
            "text-size": 12,
            "text-offset": [0, 1.5],
            "text-allow-overlap": false,
            visibility: "none"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "112-point2",
        type: "circle",
        source: "112-point",
        layout: { visibility: "none" },
        paint: {
            "circle-stroke-width": 3,
            "circle-stroke-color": "white",
            "circle-opacity": 0.7,
            "circle-radius": 8,
            "circle-color": "#2c2f43"
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "aparcaments-polygon",
        type: "fill",
        source: "aparcaments-json",
        layout: {
            visibility: "visible"
        },
        paint: {
            "fill-opacity": 0.8,
            "fill-color": "#1fa0d3"
        },
        filter: ["==", "$type", "Polygon"]
    },
    {
        id: "tanques_vehicle-point",
        type: "symbol",
        source: "tanques_vehicle-point",
        layout: {
            "icon-image": "no_entry",
            "icon-size": 0.8,
            "icon-allow-overlap": false,
            visibility: "visible"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "areesdescans-point",
        type: "symbol",
        source: "areesdescans-point",
        layout: {
            "text-font": ["Open Sans Regular"],
            "text-field": "Area d'aturada" + "  " + "{Nom}",
            "symbol-placement": "point",
            "text-size": 12,
            "text-offset": [0, 2],
            "icon-image": "park_bench",
            "icon-size": 0.7,
            "icon-allow-overlap": false,
            visibility: "visible"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "aparcaments-point",
        type: "symbol",
        source: "aparcaments-point",
        layout: {
            "icon-image": "parking",
            "icon-size": 0.7,
            "icon-allow-overlap": false,
            visibility: "visible"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "Font_B",
        type: "symbol",
        source: "Font_B",
        layout: {
            "symbol-placement": "point",
            "text-size": 12,
            "text-offset": [0, 2],
            "icon-image": "Font_1",
            "icon-size": 0.7,
            "icon-allow-overlap": false,
            visibility: "none"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "Font_C_D",
        type: "symbol",
        source: "Font_C_D",
        layout: {
            "symbol-placement": "point",
            "text-size": 12,
            "text-offset": [0, 2],
            "icon-image": "Font_2",
            "icon-size": 0.7,
            "icon-allow-overlap": false,
            visibility: "none"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "Font_CP",
        type: "symbol",
        source: "Font_CP",
        layout: {
            "symbol-placement": "point",
            "text-size": 12,
            "text-offset": [0, 2],
            "icon-image": "Font_3",
            "icon-size": 0.7,
            "icon-allow-overlap": false,
            visibility: "none"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "Font_DGT",
        type: "symbol",
        source: "Font_DGT",
        layout: {
            "symbol-placement": "point",
            "text-size": 12,
            "text-offset": [0, 2],
            "icon-image": "Font_4",
            "icon-size": 0.7,
            "icon-allow-overlap": false,
            visibility: "none"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "Font_M",
        type: "symbol",
        source: "Font_M",
        layout: {
            "symbol-placement": "point",
            "text-size": 12,
            "text-offset": [0, 2],
            "icon-image": "Font_5",
            "icon-size": 0.7,
            "icon-allow-overlap": false,
            visibility: "none"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "Font_R",
        type: "symbol",
        source: "Font_R",
        layout: {
            "symbol-placement": "point",
            "text-size": 12,
            "text-offset": [0, 2],
            "icon-image": "Font_6",
            "icon-size": 0.7,
            "icon-allow-overlap": false,
            visibility: "none"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "Font_R_X",
        type: "symbol",
        source: "Font_R_X",
        layout: {
            "symbol-placement": "point",
            "text-size": 12,
            "text-offset": [0, 2],
            "icon-image": "Font_7",
            "icon-size": 0.7,
            "icon-allow-overlap": false,
            visibility: "none"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
    {
         id: "Ermites",
        type: "symbol",
        source: "Ermites",
        layout: {
            "symbol-placement": "point",
            "icon-image": "Ermita",
            "icon-size": 0.7,
            "icon-allow-overlap": false,
            visibility: "none"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "Capella",
        type: "symbol",
        source: "Capella",
        layout: {
            "symbol-placement": "point",
            "icon-image": "Capella",
            "icon-size": 0.7,
            "icon-allow-overlap": false,
            visibility: "none"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
     {
         id: "dea",
        type: "symbol",
        source: "dea",
        layout: {
            "symbol-placement": "point",
            "icon-image": "DEA",
            "icon-size": 0.7,
            "icon-allow-overlap": false,
            visibility: "none"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
     {
         id: "Coves",
        type: "symbol",
        source: "Coves",
        layout: {
            "symbol-placement": "point",
            "icon-image": "Cova",
            "icon-size": 0.7,
            "icon-allow-overlap": false,
            visibility: "none"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
     {
         id: "refugis",
        type: "symbol",
        source: "refugis",
        layout: {
            "symbol-placement": "point",
            "icon-image": "Refugi",
            "icon-size": 0.7,
            "icon-allow-overlap": false,
            visibility: "none"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
     {
         id: "ZonaAcampada",
        type: "symbol",
        source: "ZonaAcampada",
        layout: {
            "symbol-placement": "point",
            "icon-image": "Tenda",
            "icon-size": 0.7,
            "icon-allow-overlap": false,
            visibility: "none"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
    {
        id: "PuntsInteres",
        type: "symbol",
        source: "PuntsInteres",
        layout: {
            "symbol-placement": "point",
            "icon-image": "PuntInteres",
            "icon-size": 0.7,
            "icon-allow-overlap": false,
            visibility: "none"
        },
        paint: {
            "text-color": "#000000",
            "text-halo-color": "#fff",
            "text-halo-width": 1.5
        },
        filter: ["==", "$type", "Point"]
    },
];
