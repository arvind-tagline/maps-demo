import { Component } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Control, defaults as defaultControls, FullScreen } from 'ol/control';
import Interaction from 'ol/interaction/Interaction';
import { Draw, Modify, Snap } from 'ol/interaction';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, Stroke, Circle as CircleStyle, Fill } from 'ol/style';




@Component({
  selector: 'app-simple-map',
  templateUrl: './simple-map.component.html',
  styleUrls: ['./simple-map.component.scss']
})
export class SimpleMapComponent {
  map!: Map;
  draw!: Interaction;

  ngOnInit() {
    this.initMap();
  }
  
  initMap() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      controls: defaultControls().extend([
        new FullScreen(),
      ]),
      view: new View({
        center: [0, 0],
        minZoom:1,
        zoom: 2,
      }),
    });
    const element:any = document.getElementById('customControl');
    const customControl = new Control({ element: element});
    this.map.addControl(customControl);
    // const vectorLayer = new VectorLayer({
    //   source: new VectorSource(),
    //   style: new Style({
    //     fill: new Fill({
    //       color: 'rgba(255, 0, 0, 0.2)',
    //     }),
    //     stroke: new Stroke({
    //       color: 'red',
    //       width: 2,
    //     }),
    //   }),
    // });

    // this.addDrawingInteraction(vectorLayer.getSource());

  }

  onCustomControlClick() {
    console.log('Custom Control Button Clicked in Map Component!');
    // Add your custom control logic here
  }

  // addDrawingInteraction(source:any) {
  //   this.draw = new Draw({
  //     source: source,
  //     type: 'LineString', // Change to 'Point', 'Polygon', etc., as needed
  //   });

  //   this.map.addInteraction(this.draw);

  //   const modify = new Modify({ source: source });
  //   this.map.addInteraction(modify);

  //   const snap = new Snap({ source: source });
  //   this.map.addInteraction(snap);

    // Subscribe to draw end event
    // this.draw.on('drawend', (event:any) => {
    //   const feature = event.feature;
    //   console.log('Drawn Line Coordinates:', feature.getGeometry().getCoordinates());
    // });
  // }
}
