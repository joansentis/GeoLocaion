import { MapStyles } from './map-styles';

export class Map {

    constructor() {
        this.mapStyles = new MapStyles();
    }

    init() {
        this.setTemplateValues();
        window.initMap = () => {
            this.map = new google.maps.Map(document.getElementById('map'), {
                zoom: 5,
                center: { lat: 44.5166667, lng: 12.3166667 },
                styles: this.mapStyles.styles                
            });
            this.map.data.loadGeoJson('../../app/data/cartodb-query.geojson');
            this.mapSetStyle();
        }
        this.valuesArray.map((val) => {
            val.addEventListener('change', () => {
                this.updateMap();
            });
        });
    }

    mapSetStyle() {
        this.map.data.setStyle({
            icon: { url: 'data:image/svg+xml;charset=UTF-8;base64,' + btoa(this.svg) }
        });
    }

    setTemplateValues() {
        this.template = [
            '<?xml version="1.0"?>',
            '<svg width="{{ size }}" height="{{ size }}" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">',
            '<circle stroke="{{ strokeColor }}" fill="{{ color }}" cx="50" cy="50" r="35" stroke-width="{{ strokeWidth }}"/>',
            '</svg>'
        ].join('\n');
        this.fillColor = document.getElementById('fillColor');
        this.svgSize = document.getElementById('svgSize');
        this.strokeColor = document.getElementById('strokeColor');
        this.strokeWidth = document.getElementById('strokeWidth');
        this.valuesArray = [this.fillColor, this.svgSize, this.strokeColor, this.strokeWidth];

        this.svg = this.template.replace('{{ color }}', this.fillColor.value).replace('{{ size }}', this.svgSize.value)
            .replace('{{ strokeColor }}', this.strokeColor.value).replace('{{ strokeWidth }}', this.strokeWidth.value);
    }

    updateMap() {
        this.setTemplateValues();
        this.mapSetStyle();
    }
};