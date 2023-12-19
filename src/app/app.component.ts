import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('lightPreset') checkboxRef!: ElementRef<HTMLInputElement>;
  layerId: any = 'basic';
  style!: string;

  title = 'minex';
  // paint = { 'background-color': 'green', 'background-opacity': 0.1 };
  zoom = 0;
  map!: any;
  geojson = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-77.032, 38.913] as [number, number],
        },
        'properties': {
          'title': 'Mapbox',
          'description': 'Washington, D.C.'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [-122.414, 37.776] as [number, number],
        },
        'properties': {
          'title': 'Mapbox',
          'description': 'San Francisco, California'
        }
      }
    ]
  };
  ngOnInit(): void {
    this.changeStyle(this.layerId)
    //     * `mapbox://styles/mapbox/standard`
    // * `mapbox://styles/mapbox/streets-v12`
    // * `mapbox://styles/mapbox/outdoors-v12`
    // * `mapbox://styles/mapbox/light-v11`
    // * `mapbox://styles/mapbox/dark-v11`
    // * `mapbox://styles/mapbox/satellite-v9`
    // * `mapbox://styles/mapbox/satellite-streets-v12`
    // * `mapbox://styles/mapbox/navigation-day-v1`
    // * `mapbox://styles/mapbox/navigation-night-v1`.

    // this.map = new mapboxgl.Map({
    //   container: 'map', // container ID
    //   // center: [76.962842, 11.001812], // starting position [lng, lat]
    //   center: [-96, 37.8],
    //   zoom: 3, // starting zoom,
    //   style: 'mapbox://styles/mapbox/satellite-streets-v12',
    //   // hash: true,
    //   accessToken: 'pk.eyJ1Ijoia2VzYXYtc3BhcmtvdXQiLCJhIjoiY2xxYnhrbmVsMDVkODJrbzcyYmk1b2ZrOSJ9.eqRN_iBeEDzyWtx3r79bwQ',
    //   // projection: { name: 'globe' },
    // })
    // for (const feature of this.geojson.features) {
    //   // create a HTML element for each feature
    //   const el = document.createElement('div');
    //   el.className = 'marker';

    //   // make a marker for each feature and add it to the map
    //   new mapboxgl.Marker(el)
    //     .setLngLat(feature.geometry.coordinates)
    //     .setPopup(
    //       new mapboxgl.Popup({ offset: 25 }) // add popups
    //         .setHTML(
    //           `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
    //         )
    //     )
    //     .addTo(this.map);
    // }

  }
  changeStyle(layerId: Event) {
    console.log(layerId);

    this.style = `mapbox://styles/mapbox/${layerId}-v9`;
  }

  ngAfterViewInit(): void {
    // this.map.on('style.load', () => {
    //   this.checkboxRef.nativeElement.addEventListener('change', (event: Event) => {
    //     debugger
    //     const checkbox = event.target as HTMLInputElement;
    //     this.map.setConfigProperty('basemap', 'lightPreset', checkbox.value);
    //   });
    //   //   document
    //   //     .getElementById('lightPreset')!
    //   //     .addEventListener('change', (event: any) => {
    //   //       this.map.setConfigProperty('basemap', 'lightPreset', event.target!.value);
    //   //     });

    //   //   document
    //   //     .querySelectorAll('.map-overlay-inner input[type="checkbox"]')
    //   //     .forEach((checkbox) => {
    //   //       checkbox.addEventListener('change', (event: any) => {
    //   //         this.map.setConfigProperty('basemap', event.id, event.target!.checked);
    //   //       });
    //   //     });
    // });
  }
}
