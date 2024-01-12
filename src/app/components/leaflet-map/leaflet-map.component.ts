import { FullScreen } from 'ol/control';
import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-fullscreen';
import 'leaflet-search';
import 'leaflet-control-geocoder';
import 'leaflet-routing-machine';



@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements AfterViewInit {

  private map: any;
  private markers: any = [];
  private markersLayer: any;
  private polygon: any;
  private startingLatLng: L.LatLng | null = null;
  private details = [
    {
      "altitudeKm": -0.0269407148,
      "azimuthDegs": 357.3852504233,
      "elevationDegs": -0.352151634,
      "lat": 28.5834710222,
      "lng": -80.58283693,
      "rangeKm": 12.1441369866,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 0
    },
    {
      "altitudeKm": -0.0269407148,
      "azimuthDegs": 357.3852504233,
      "elevationDegs": -0.352151634,
      "lat": 28.5834710222,
      "lng": -80.58283693,
      "rangeKm": 12.1441369866,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 0
    },
    {
      "altitudeKm": -0.0269407148,
      "azimuthDegs": 357.3852504233,
      "elevationDegs": -0.352151634,
      "lat": 28.5834710222,
      "lng": -80.58283693,
      "rangeKm": 12.1441369866,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 0
    },
    {
      "altitudeKm": -0.0269407148,
      "azimuthDegs": 357.3852504233,
      "elevationDegs": -0.352151634,
      "lat": 28.5834710222,
      "lng": -80.58283693,
      "rangeKm": 12.1441369866,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 1
    },
    {
      "altitudeKm": -0.0269407148,
      "azimuthDegs": 357.3852504233,
      "elevationDegs": -0.352151634,
      "lat": 28.5834710222,
      "lng": -80.58283693,
      "rangeKm": 12.1441369866,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 1
    },
    {
      "altitudeKm": -0.0269030786,
      "azimuthDegs": 357.4239112465,
      "elevationDegs": -0.3519816397,
      "lat": 28.5834708372,
      "lng": -80.5827530719,
      "rangeKm": 12.1437445824,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 1
    },
    {
      "altitudeKm": -0.02681645,
      "azimuthDegs": 357.4238241049,
      "elevationDegs": -0.351573214,
      "lat": 28.5834704113,
      "lng": -80.5827532391,
      "rangeKm": 12.1436980444,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 1
    },
    {
      "altitudeKm": -0.026547505,
      "azimuthDegs": 357.4236871054,
      "elevationDegs": -0.3503037315,
      "lat": 28.5834711442,
      "lng": -80.5827535737,
      "rangeKm": 12.1437802825,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 2
    },
    {
      "altitudeKm": -0.0262397751,
      "azimuthDegs": 357.4234443215,
      "elevationDegs": -0.3488521296,
      "lat": 28.5834706589,
      "lng": -80.5827540754,
      "rangeKm": 12.1437283355,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 2
    },
    {
      "altitudeKm": -0.0257353609,
      "azimuthDegs": 357.4236150051,
      "elevationDegs": -0.3464718487,
      "lat": 28.5834712618,
      "lng": -80.582753736,
      "rangeKm": 12.1437929052,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 2
    },
    {
      "altitudeKm": -0.0251921618,
      "azimuthDegs": 357.4236799033,
      "elevationDegs": -0.3439094019,
      "lat": 28.5834706464,
      "lng": -80.5827535639,
      "rangeKm": 12.143723308,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 2
    },
    {
      "altitudeKm": -0.0244666464,
      "azimuthDegs": 357.4236949448,
      "elevationDegs": -0.3404859763,
      "lat": 28.5834711898,
      "lng": -80.582753559,
      "rangeKm": 12.143782542,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 2
    },
    {
      "altitudeKm": -0.0235678736,
      "azimuthDegs": 357.4235357024,
      "elevationDegs": -0.3362456218,
      "lat": 28.5834708815,
      "lng": -80.5827538886,
      "rangeKm": 12.143748789,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 3
    },
    {
      "altitudeKm": -0.0226691009,
      "azimuthDegs": 357.4233764592,
      "elevationDegs": -0.3320052437,
      "lat": 28.5834705732,
      "lng": -80.5827542182,
      "rangeKm": 12.1437151027,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 3
    },
    {
      "altitudeKm": -0.0215013831,
      "azimuthDegs": 357.4230802197,
      "elevationDegs": -0.3264955193,
      "lat": 28.5834709977,
      "lng": -80.5827548824,
      "rangeKm": 12.1437638331,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 3
    },
    {
      "altitudeKm": -0.0203671412,
      "azimuthDegs": 357.423228657,
      "elevationDegs": -0.3211442555,
      "lat": 28.5834705593,
      "lng": -80.5827545381,
      "rangeKm": 12.1437127222,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 3
    },
    {
      "altitudeKm": -0.0189639542,
      "azimuthDegs": 357.4232400987,
      "elevationDegs": -0.314523703,
      "lat": 28.5834708538,
      "lng": -80.5827545283,
      "rangeKm": 12.1437441236,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 3
    },
    {
      "altitudeKm": -0.0175607672,
      "azimuthDegs": 357.4232515404,
      "elevationDegs": -0.3079031848,
      "lat": 28.5834711483,
      "lng": -80.5827545185,
      "rangeKm": 12.1437756872,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 4
    },
    {
      "altitudeKm": -0.0159843228,
      "azimuthDegs": 357.4230886947,
      "elevationDegs": -0.3004654624,
      "lat": 28.5834705911,
      "lng": -80.5827548432,
      "rangeKm": 12.1437144911,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 4
    },
    {
      "altitudeKm": -0.0142255622,
      "azimuthDegs": 357.4228759989,
      "elevationDegs": -0.2921672287,
      "lat": 28.5834711926,
      "lng": -80.5827553352,
      "rangeKm": 12.1437824605,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 4
    },
    {
      "altitudeKm": -0.0124280167,
      "azimuthDegs": 357.4225575098,
      "elevationDegs": -0.2836862313,
      "lat": 28.5834705759,
      "lng": -80.5827559945,
      "rangeKm": 12.143716538,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 4
    },
    {
      "altitudeKm": -0.0104337868,
      "azimuthDegs": 357.4226524959,
      "elevationDegs": -0.274277167,
      "lat": 28.5834710474,
      "lng": -80.5827558125,
      "rangeKm": 12.1437676371,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 4
    },
    {
      "altitudeKm": -0.0083529282,
      "azimuthDegs": 357.422660336,
      "elevationDegs": -0.2644594255,
      "lat": 28.583471093,
      "lng": -80.5827557979,
      "rangeKm": 12.1437726576,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 5
    },
    {
      "altitudeKm": -0.006185441,
      "azimuthDegs": 357.4225810305,
      "elevationDegs": -0.2542328953,
      "lat": 28.5834707127,
      "lng": -80.5827559505,
      "rangeKm": 12.1437316442,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 5
    },
    {
      "altitudeKm": -0.0038834812,
      "azimuthDegs": 357.4224332292,
      "elevationDegs": -0.243371918,
      "lat": 28.5834706989,
      "lng": -80.5827562703,
      "rangeKm": 12.1437323888,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 5
    },
    {
      "altitudeKm": -0.001447049,
      "azimuthDegs": 357.4222169338,
      "elevationDegs": -0.2318766054,
      "lat": 28.5834710515,
      "lng": -80.5827567574,
      "rangeKm": 12.1437749681,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 5
    },
    {
      "altitudeKm": 0.0011770087,
      "azimuthDegs": 357.4222896644,
      "elevationDegs": -0.2194957346,
      "lat": 28.5834704817,
      "lng": -80.5827565706,
      "rangeKm": 12.1437131105,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 5
    },
    {
      "altitudeKm": 0.003896754,
      "azimuthDegs": 357.4223996994,
      "elevationDegs": -0.2066641934,
      "lat": 28.5834714966,
      "lng": -80.5827563837,
      "rangeKm": 12.143827372,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 6
    },
    {
      "altitudeKm": 0.0067419128,
      "azimuthDegs": 357.4223167895,
      "elevationDegs": -0.1932400157,
      "lat": 28.5834708674,
      "lng": -80.5827565314,
      "rangeKm": 12.1437618588,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 6
    },
    {
      "altitudeKm": 0.0097215441,
      "azimuthDegs": 357.4221653846,
      "elevationDegs": -0.1791815349,
      "lat": 28.5834706047,
      "lng": -80.5827568464,
      "rangeKm": 12.1437385341,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 6
    },
    {
      "altitudeKm": 0.0266617745,
      "azimuthDegs": 357.4215220015,
      "elevationDegs": -0.0992555249,
      "lat": 28.5834705547,
      "lng": -80.5827582392,
      "rangeKm": 12.1437779264,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 7
    },
    {
      "altitudeKm": 0.0471004185,
      "azimuthDegs": 357.4213612266,
      "elevationDegs": -0.0028251438,
      "lat": 28.5834707743,
      "lng": -80.5827585991,
      "rangeKm": 12.1438820669,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 8
    },
    {
      "altitudeKm": 0.0711097367,
      "azimuthDegs": 357.4211325919,
      "elevationDegs": 0.1104497514,
      "lat": 28.583470908,
      "lng": -80.5827591017,
      "rangeKm": 12.1440349469,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 9
    },
    {
      "altitudeKm": 0.0990118271,
      "azimuthDegs": 357.4210566198,
      "elevationDegs": 0.242089531,
      "lat": 28.5834704001,
      "lng": -80.5827592406,
      "rangeKm": 12.1441968383,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 10
    },
    {
      "altitudeKm": 0.1308444847,
      "azimuthDegs": 357.4221843948,
      "elevationDegs": 0.3922608066,
      "lat": 28.5834711196,
      "lng": -80.5827568314,
      "rangeKm": 12.1445923312,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 11
    },
    {
      "altitudeKm": 0.1668341199,
      "azimuthDegs": 357.4246991072,
      "elevationDegs": 0.5620378974,
      "lat": 28.5834709261,
      "lng": -80.5827513677,
      "rangeKm": 12.1450164115,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 12
    },
    {
      "altitudeKm": 0.1863836197,
      "azimuthDegs": 357.4265321669,
      "elevationDegs": 0.6542590901,
      "lat": 28.5834703792,
      "lng": -80.5827473644,
      "rangeKm": 12.145238001,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 12
    },
    {
      "altitudeKm": 0.2070429447,
      "azimuthDegs": 357.4290827367,
      "elevationDegs": 0.7517052572,
      "lat": 28.5834705413,
      "lng": -80.5827418412,
      "rangeKm": 12.1455826407,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 13
    },
    {
      "altitudeKm": 0.2515475392,
      "azimuthDegs": 357.4362805192,
      "elevationDegs": 0.9616091214,
      "lat": 28.5834706162,
      "lng": -80.582726235,
      "rangeKm": 12.1463978703,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 14
    },
    {
      "altitudeKm": 0.3005067931,
      "azimuthDegs": 357.4456549408,
      "elevationDegs": 1.1924930121,
      "lat": 28.5834703697,
      "lng": -80.5827058923,
      "rangeKm": 12.147432948,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 15
    },
    {
      "altitudeKm": 0.3538527661,
      "azimuthDegs": 357.4592519106,
      "elevationDegs": 1.4440020469,
      "lat": 28.5834711632,
      "lng": -80.5826764451,
      "rangeKm": 12.1488715875,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 16
    },
    {
      "altitudeKm": 0.4116486608,
      "azimuthDegs": 357.4763973313,
      "elevationDegs": 1.7164465561,
      "lat": 28.5834706311,
      "lng": -80.5826392367,
      "rangeKm": 12.150518255,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 17
    },
    {
      "altitudeKm": 0.4739179058,
      "azimuthDegs": 357.4976784951,
      "elevationDegs": 2.0098788433,
      "lat": 28.5834707132,
      "lng": -80.5825930917,
      "rangeKm": 12.1526475686,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 18
    },
    {
      "altitudeKm": 0.5407758684,
      "azimuthDegs": 357.5239353405,
      "elevationDegs": 2.3248160955,
      "lat": 28.5834708424,
      "lng": -80.5825361611,
      "rangeKm": 12.1552636695,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 19
    },
    {
      "altitudeKm": 0.6121024474,
      "azimuthDegs": 357.5557005925,
      "elevationDegs": 2.6606603424,
      "lat": 28.5834705816,
      "lng": -80.5824672696,
      "rangeKm": 12.1583840118,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 20
    },
    {
      "altitudeKm": 0.68818096,
      "azimuthDegs": 357.5933004873,
      "elevationDegs": 3.0186748473,
      "lat": 28.583470593,
      "lng": -80.5823857441,
      "rangeKm": 12.162175471,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 21
    },
    {
      "altitudeKm": 0.7687903099,
      "azimuthDegs": 357.6368909544,
      "elevationDegs": 3.3977482676,
      "lat": 28.5834709359,
      "lng": -80.5822912506,
      "rangeKm": 12.166720064,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 22
    },
    {
      "altitudeKm": 0.8541181285,
      "azimuthDegs": 357.6867636297,
      "elevationDegs": 3.7987140135,
      "lat": 28.5834706881,
      "lng": -80.582183116,
      "rangeKm": 12.1720186244,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 23
    },
    {
      "altitudeKm": 0.8984853619,
      "azimuthDegs": 357.7141059715,
      "elevationDegs": 4.0070664117,
      "lat": 28.5834704108,
      "lng": -80.582123829,
      "rangeKm": 12.1749843801,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 24
    },
    {
      "altitudeKm": 0.9440777941,
      "azimuthDegs": 357.7430061967,
      "elevationDegs": 4.2210590476,
      "lat": 28.5834702754,
      "lng": -80.5820611739,
      "rangeKm": 12.1782124193,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 24
    },
    {
      "altitudeKm": 1.0384960573,
      "azimuthDegs": 357.8057913683,
      "elevationDegs": 4.66382444,
      "lat": 28.5834705494,
      "lng": -80.5819250907,
      "rangeKm": 12.1854844633,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 25
    },
    {
      "altitudeKm": 1.0871874182,
      "azimuthDegs": 357.8397462017,
      "elevationDegs": 4.8919518907,
      "lat": 28.5834705923,
      "lng": -80.5818514955,
      "rangeKm": 12.1895010436,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 26
    },
    {
      "altitudeKm": 1.1369695099,
      "azimuthDegs": 357.8753291697,
      "elevationDegs": 5.1250425131,
      "lat": 28.5834704107,
      "lng": -80.5817743655,
      "rangeKm": 12.1937799615,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 26
    },
    {
      "altitudeKm": 1.2393971638,
      "azimuthDegs": 357.9512428399,
      "elevationDegs": 5.6040820149,
      "lat": 28.5834703559,
      "lng": -80.5816098402,
      "rangeKm": 12.2032474872,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 27
    },
    {
      "altitudeKm": 1.3455579285,
      "azimuthDegs": 358.0336887749,
      "elevationDegs": 6.0997549636,
      "lat": 28.5834704442,
      "lng": -80.5814311814,
      "rangeKm": 12.2139700269,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 28
    },
    {
      "altitudeKm": 1.4555671846,
      "azimuthDegs": 358.1235115215,
      "elevationDegs": 6.6124682891,
      "lat": 28.5834701086,
      "lng": -80.5812365409,
      "rangeKm": 12.2259930218,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 29
    },
    {
      "altitudeKm": 1.5692085775,
      "azimuthDegs": 358.2194891358,
      "elevationDegs": 7.1409582997,
      "lat": 28.5834704125,
      "lng": -80.58102861,
      "rangeKm": 12.2395207632,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 30
    },
    {
      "altitudeKm": 1.6863429168,
      "azimuthDegs": 358.3230732244,
      "elevationDegs": 7.6844720571,
      "lat": 28.5834699853,
      "lng": -80.5808041979,
      "rangeKm": 12.254477075,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 31
    },
    {
      "altitudeKm": 1.8069893202,
      "azimuthDegs": 358.433349634,
      "elevationDegs": 8.242814444,
      "lat": 28.5834697605,
      "lng": -80.5805653223,
      "rangeKm": 12.2710758827,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 32
    },
    {
      "altitudeKm": 1.9309410752,
      "azimuthDegs": 358.5509383901,
      "elevationDegs": 8.8147935035,
      "lat": 28.5834697266,
      "lng": -80.5803106417,
      "rangeKm": 12.2893848856,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 33
    },
    {
      "altitudeKm": 2.0581503559,
      "azimuthDegs": 358.6758300608,
      "elevationDegs": 9.4000022255,
      "lat": 28.5834690916,
      "lng": -80.5800401574,
      "rangeKm": 12.3094111223,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 34
    },
    {
      "altitudeKm": 2.1886650255,
      "azimuthDegs": 358.8080359536,
      "elevationDegs": 9.9983237797,
      "lat": 28.5834686474,
      "lng": -80.5797538709,
      "rangeKm": 12.3313519194,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 35
    },
    {
      "altitudeKm": 2.3223118487,
      "azimuthDegs": 358.9477183167,
      "elevationDegs": 10.6085880473,
      "lat": 28.5834692453,
      "lng": -80.5794514489,
      "rangeKm": 12.3553717425,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 36
    },
    {
      "altitudeKm": 2.459096161,
      "azimuthDegs": 359.0952439934,
      "elevationDegs": 11.2307081023,
      "lat": 28.5834688048,
      "lng": -80.5791320522,
      "rangeKm": 12.3813450371,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 37
    },
    {
      "altitudeKm": 2.5988159834,
      "azimuthDegs": 359.2498466708,
      "elevationDegs": 11.863348978,
      "lat": 28.5834683185,
      "lng": -80.5787973639,
      "rangeKm": 12.4094430848,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 38
    },
    {
      "altitudeKm": 2.6697665062,
      "azimuthDegs": 359.330217454,
      "elevationDegs": 12.1834879282,
      "lat": 28.5834678516,
      "lng": -80.578623383,
      "rangeKm": 12.4242933976,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 39
    },
    {
      "altitudeKm": 2.7414134606,
      "azimuthDegs": 359.4125355243,
      "elevationDegs": 12.5058835823,
      "lat": 28.5834680707,
      "lng": -80.5784452022,
      "rangeKm": 12.4397780393,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 39
    },
    {
      "altitudeKm": 2.887109719,
      "azimuthDegs": 359.5831529722,
      "elevationDegs": 13.1589475317,
      "lat": 28.5834680019,
      "lng": -80.5780759032,
      "rangeKm": 12.4724916379,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 40
    },
    {
      "altitudeKm": 3.0358425675,
      "azimuthDegs": 359.7612283276,
      "elevationDegs": 13.8219589425,
      "lat": 28.5834673906,
      "lng": -80.5776904767,
      "rangeKm": 12.5075957299,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 41
    },
    {
      "altitudeKm": 3.1876020034,
      "azimuthDegs": 359.9477701425,
      "elevationDegs": 14.4943368507,
      "lat": 28.583467313,
      "lng": -80.5772867411,
      "rangeKm": 12.5453051563,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 42
    },
    {
      "altitudeKm": 3.3425613144,
      "azimuthDegs": 0.1426178223,
      "elevationDegs": 15.1765186479,
      "lat": 28.5834669176,
      "lng": -80.5768650329,
      "rangeKm": 12.5856779502,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 43
    },
    {
      "altitudeKm": 3.5006195297,
      "azimuthDegs": 0.3453776518,
      "elevationDegs": 15.8675361626,
      "lat": 28.5834667006,
      "lng": -80.5764261946,
      "rangeKm": 12.628847927,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 44
    },
    {
      "altitudeKm": 3.6620409162,
      "azimuthDegs": 0.5572856767,
      "elevationDegs": 16.5680907731,
      "lat": 28.5834663904,
      "lng": -80.5759675393,
      "rangeKm": 12.6749696883,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 45
    },
    {
      "altitudeKm": 3.8266622858,
      "azimuthDegs": 0.7774817985,
      "elevationDegs": 17.2769949874,
      "lat": 28.583465762,
      "lng": -80.5754909174,
      "rangeKm": 12.724084337,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 46
    },
    {
      "altitudeKm": 3.9947813779,
      "azimuthDegs": 1.0067293752,
      "elevationDegs": 17.9948982889,
      "lat": 28.5834654062,
      "lng": -80.57499465,
      "rangeKm": 12.7764586262,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 47
    },
    {
      "altitudeKm": 4.1662015414,
      "azimuthDegs": 1.2446391522,
      "elevationDegs": 18.7205614531,
      "lat": 28.5834642356,
      "lng": -80.5744795801,
      "rangeKm": 12.8320322708,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 48
    },
    {
      "altitudeKm": 4.3411817409,
      "azimuthDegs": 1.4920318879,
      "elevationDegs": 19.4541933985,
      "lat": 28.5834640584,
      "lng": -80.5739438618,
      "rangeKm": 12.8911977563,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 49
    },
    {
      "altitudeKm": 4.5196119562,
      "azimuthDegs": 1.7484435571,
      "elevationDegs": 20.1949540492,
      "lat": 28.5834633615,
      "lng": -80.5733885053,
      "rangeKm": 12.9538762644,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 50
    },
    {
      "altitudeKm": 4.7016889334,
      "azimuthDegs": 2.014227435,
      "elevationDegs": 20.94282592,
      "lat": 28.5834632319,
      "lng": -80.5728126728,
      "rangeKm": 13.0203692207,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 51
    },
    {
      "altitudeKm": 4.8873170379,
      "azimuthDegs": 2.2893912,
      "elevationDegs": 21.6970192639,
      "lat": 28.5834620859,
      "lng": -80.5722163672,
      "rangeKm": 13.0905980454,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 52
    },
    {
      "altitudeKm": 5.076740867,
      "azimuthDegs": 2.5742618973,
      "elevationDegs": 22.4574902292,
      "lat": 28.5834618021,
      "lng": -80.5715987508,
      "rangeKm": 13.1649697731,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 53
    },
    {
      "altitudeKm": 5.2698791783,
      "azimuthDegs": 2.8693127229,
      "elevationDegs": 23.2234765125,
      "lat": 28.5834607263,
      "lng": -80.5709588191,
      "rangeKm": 13.2434101606,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 54
    },
    {
      "altitudeKm": 5.4668133368,
      "azimuthDegs": 3.1740061332,
      "elevationDegs": 23.9942529848,
      "lat": 28.5834605121,
      "lng": -80.5702975828,
      "rangeKm": 13.3262351344,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 55
    },
    {
      "altitudeKm": 5.6675965756,
      "azimuthDegs": 3.4887276536,
      "elevationDegs": 24.7695015534,
      "lat": 28.5834598714,
      "lng": -80.5696142049,
      "rangeKm": 13.4134587548,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 56
    },
    {
      "altitudeKm": 5.8723299769,
      "azimuthDegs": 3.8138448844,
      "elevationDegs": 25.5489236572,
      "lat": 28.5834583077,
      "lng": -80.5689078486,
      "rangeKm": 13.5051992161,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 57
    },
    {
      "altitudeKm": 6.0809360515,
      "azimuthDegs": 4.1493828602,
      "elevationDegs": 26.3309181993,
      "lat": 28.5834582549,
      "lng": -80.5681781826,
      "rangeKm": 13.6017860497,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 58
    },
    {
      "altitudeKm": 6.2936269069,
      "azimuthDegs": 4.49513129,
      "elevationDegs": 27.1158983786,
      "lat": 28.5834576445,
      "lng": -80.5674257128,
      "rangeKm": 13.7032204137,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 59
    },
    {
      "altitudeKm": 6.510431405,
      "azimuthDegs": 4.8519708932,
      "elevationDegs": 27.9031366341,
      "lat": 28.5834563349,
      "lng": -80.566648428,
      "rangeKm": 13.8096345495,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 60
    },
    {
      "altitudeKm": 6.7312342212,
      "azimuthDegs": 5.2189714671,
      "elevationDegs": 28.6912806608,
      "lat": 28.5834548924,
      "lng": -80.5658481795,
      "rangeKm": 13.9211308476,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 61
    },
    {
      "altitudeKm": 6.9562609348,
      "azimuthDegs": 5.5973261515,
      "elevationDegs": 29.4800424189,
      "lat": 28.5834542622,
      "lng": -80.5650221169,
      "rangeKm": 14.0380408166,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 62
    },
    {
      "altitudeKm": 7.1855216298,
      "azimuthDegs": 5.9860094719,
      "elevationDegs": 30.268869069,
      "lat": 28.5834533683,
      "lng": -80.5641724264,
      "rangeKm": 14.160358764,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 63
    },
    {
      "altitudeKm": 7.4189585679,
      "azimuthDegs": 6.3859223687,
      "elevationDegs": 31.0565981972,
      "lat": 28.5834524942,
      "lng": -80.5632969303,
      "rangeKm": 14.2882070939,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 64
    },
    {
      "altitudeKm": 7.6567306991,
      "azimuthDegs": 6.7964081564,
      "elevationDegs": 31.843136472,
      "lat": 28.5834508594,
      "lng": -80.5623969752,
      "rangeKm": 14.4216851198,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 65
    },
    {
      "altitudeKm": 7.8988615874,
      "azimuthDegs": 7.2177851844,
      "elevationDegs": 32.62723122,
      "lat": 28.5834504009,
      "lng": -80.5614713911,
      "rangeKm": 14.5610979241,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 66
    },
    {
      "altitudeKm": 8.1453422751,
      "azimuthDegs": 7.6499941058,
      "elevationDegs": 33.4084829245,
      "lat": 28.5834491101,
      "lng": -80.5605203503,
      "rangeKm": 14.7063478871,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 67
    },
    {
      "altitudeKm": 8.3960862485,
      "azimuthDegs": 8.0929722039,
      "elevationDegs": 34.1856940352,
      "lat": 28.5834474118,
      "lng": -80.5595436901,
      "rangeKm": 14.8575186926,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 68
    },
    {
      "altitudeKm": 8.6513481487,
      "azimuthDegs": 8.5459295883,
      "elevationDegs": 34.9587264023,
      "lat": 28.5834461082,
      "lng": -80.5585427576,
      "rangeKm": 15.0148959383,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 69
    },
    {
      "altitudeKm": 8.9109358093,
      "azimuthDegs": 9.0097957693,
      "elevationDegs": 35.7261341006,
      "lat": 28.5834451165,
      "lng": -80.5575152089,
      "rangeKm": 15.1784695481,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 70
    },
    {
      "altitudeKm": 9.042380832,
      "azimuthDegs": 9.2455423828,
      "elevationDegs": 36.1077313264,
      "lat": 28.5834442104,
      "lng": -80.5569920632,
      "rangeKm": 15.2625659444,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 71
    },
    {
      "altitudeKm": 9.1750081898,
      "azimuthDegs": 9.4838812072,
      "elevationDegs": 36.4878834989,
      "lat": 28.5834436565,
      "lng": -80.5564623911,
      "rangeKm": 15.348321569,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 71
    },
    {
      "altitudeKm": 9.4435410419,
      "azimuthDegs": 9.9684617943,
      "elevationDegs": 37.2428412934,
      "lat": 28.583442873,
      "lng": -80.5553831352,
      "rangeKm": 15.5246245182,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 72
    },
    {
      "altitudeKm": 9.716587683,
      "azimuthDegs": 10.4638556342,
      "elevationDegs": 37.9907342247,
      "lat": 28.5834414785,
      "lng": -80.5542766076,
      "rangeKm": 15.7073767071,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 73
    },
    {
      "altitudeKm": 9.9941482493,
      "azimuthDegs": 10.9698870293,
      "elevationDegs": 38.7308755986,
      "lat": 28.5834394724,
      "lng": -80.5531428141,
      "rangeKm": 15.8966430602,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 74
    },
    {
      "altitudeKm": 10.2761985179,
      "azimuthDegs": 11.4867729935,
      "elevationDegs": 39.4622118805,
      "lat": 28.5834379994,
      "lng": -80.5519805864,
      "rangeKm": 16.0925806159,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 75
    },
    {
      "altitudeKm": 10.5626763776,
      "azimuthDegs": 12.0139256569,
      "elevationDegs": 40.1841838477,
      "lat": 28.5834363385,
      "lng": -80.5507909373,
      "rangeKm": 16.2951248276,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 76
    },
    {
      "altitudeKm": 10.8537596945,
      "azimuthDegs": 12.5523666151,
      "elevationDegs": 40.8965194062,
      "lat": 28.5834346426,
      "lng": -80.5495710208,
      "rangeKm": 16.5044953469,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 77
    },
    {
      "altitudeKm": 11.1494342152,
      "azimuthDegs": 13.1013984773,
      "elevationDegs": 41.5986433713,
      "lat": 28.5834329817,
      "lng": -80.5483218501,
      "rangeKm": 16.7207194001,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 78
    },
    {
      "altitudeKm": 11.4496279069,
      "azimuthDegs": 13.6612342172,
      "elevationDegs": 42.2897047584,
      "lat": 28.5834317093,
      "lng": -80.5470422579,
      "rangeKm": 16.9438365766,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 79
    },
    {
      "altitudeKm": 11.7545430323,
      "azimuthDegs": 14.2324434944,
      "elevationDegs": 42.9698727059,
      "lat": 28.5834298327,
      "lng": -80.5457305734,
      "rangeKm": 17.1739708015,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 80
    },
    {
      "altitudeKm": 11.9087073523,
      "azimuthDegs": 14.5225486898,
      "elevationDegs": 43.3053747294,
      "lat": 28.5834292373,
      "lng": -80.5450617764,
      "rangeKm": 17.2916986804,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 80
    },
    {
      "altitudeKm": 12.0640353955,
      "azimuthDegs": 14.8156538741,
      "elevationDegs": 43.6380156817,
      "lat": 28.5834280597,
      "lng": -80.5443844561,
      "rangeKm": 17.4111587831,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 81
    },
    {
      "altitudeKm": 12.3770142775,
      "azimuthDegs": 15.40898459,
      "elevationDegs": 44.2913373144,
      "lat": 28.5834266141,
      "lng": -80.543007437,
      "rangeKm": 17.6546189826,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 82
    },
    {
      "altitudeKm": 12.6918366562,
      "azimuthDegs": 16.010619948,
      "elevationDegs": 44.9264770911,
      "lat": 28.5834243278,
      "lng": -80.5416033814,
      "rangeKm": 17.9030197276,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 83
    },
    {
      "altitudeKm": 13.0070030117,
      "azimuthDegs": 16.6184528614,
      "elevationDegs": 45.5402442658,
      "lat": 28.583422405,
      "lng": -80.5401761523,
      "rangeKm": 18.1552531224,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 84
    },
    {
      "altitudeKm": 13.0699520055,
      "azimuthDegs": 16.7404663682,
      "elevationDegs": 45.6601947243,
      "lat": 28.5834222289,
      "lng": -80.5398885097,
      "rangeKm": 18.2060624236,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 84
    },
    {
      "altitudeKm": 13.1328677132,
      "azimuthDegs": 16.8628728734,
      "elevationDegs": 45.779418348,
      "lat": 28.5834211906,
      "lng": -80.5395998665,
      "rangeKm": 18.2569231983,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 84
    },
    {
      "altitudeKm": 13.195711362,
      "azimuthDegs": 16.9855651739,
      "elevationDegs": 45.8975327814,
      "lat": 28.5834205059,
      "lng": -80.5393100551,
      "rangeKm": 18.3078999049,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 85
    },
    {
      "altitudeKm": 13.258617415,
      "azimuthDegs": 17.1084148339,
      "elevationDegs": 46.0147576467,
      "lat": 28.5834205405,
      "lng": -80.5390192431,
      "rangeKm": 18.3591120354,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 85
    },
    {
      "altitudeKm": 13.3214757512,
      "azimuthDegs": 17.2312171479,
      "elevationDegs": 46.1312861,
      "lat": 28.5834197837,
      "lng": -80.5387284369,
      "rangeKm": 18.4103483155,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 85
    },
    {
      "altitudeKm": 13.3844109285,
      "azimuthDegs": 17.3546059889,
      "elevationDegs": 46.2469141492,
      "lat": 28.5834196754,
      "lng": -80.538435624,
      "rangeKm": 18.4618439806,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 85
    },
    {
      "altitudeKm": 13.4474472876,
      "azimuthDegs": 17.4782536235,
      "elevationDegs": 46.3620448799,
      "lat": 28.5834190707,
      "lng": -80.5381419784,
      "rangeKm": 18.5135092305,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 85
    },
    {
      "altitudeKm": 13.5104982122,
      "azimuthDegs": 17.6021653902,
      "elevationDegs": 46.4763832052,
      "lat": 28.5834183945,
      "lng": -80.5378473324,
      "rangeKm": 18.5653152095,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 86
    },
    {
      "altitudeKm": 13.5736259838,
      "azimuthDegs": 17.7266514233,
      "elevationDegs": 46.5898253322,
      "lat": 28.5834183667,
      "lng": -80.5375506798,
      "rangeKm": 18.617379417,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 86
    },
    {
      "altitudeKm": 13.636840505,
      "azimuthDegs": 17.850956966,
      "elevationDegs": 46.702794265,
      "lat": 28.5834179134,
      "lng": -80.5372542009,
      "rangeKm": 18.6695864158,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 86
    },
    {
      "altitudeKm": 13.7000840328,
      "azimuthDegs": 17.9759506832,
      "elevationDegs": 46.8149575079,
      "lat": 28.5834173178,
      "lng": -80.5369557155,
      "rangeKm": 18.7219588581,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 86
    },
    {
      "altitudeKm": 13.7634765932,
      "azimuthDegs": 18.1010708438,
      "elevationDegs": 46.9265421395,
      "lat": 28.5834170164,
      "lng": -80.5366563976,
      "rangeKm": 18.7745916216,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 86
    },
    {
      "altitudeKm": 13.8268115476,
      "azimuthDegs": 18.2268755018,
      "elevationDegs": 47.0370328372,
      "lat": 28.5834169977,
      "lng": -80.5363549056,
      "rangeKm": 18.8273596266,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 87
    },
    {
      "altitudeKm": 13.8903198724,
      "azimuthDegs": 18.3524893111,
      "elevationDegs": 47.1473483649,
      "lat": 28.5834161285,
      "lng": -80.5360537551,
      "rangeKm": 18.8802988074,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 87
    },
    {
      "altitudeKm": 13.9538572119,
      "azimuthDegs": 18.4787788705,
      "elevationDegs": 47.2568642411,
      "lat": 28.5834151169,
      "lng": -80.5357505984,
      "rangeKm": 18.9334025239,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 87
    },
    {
      "altitudeKm": 14.0174569728,
      "azimuthDegs": 18.6051858532,
      "elevationDegs": 47.3655177487,
      "lat": 28.5834148245,
      "lng": -80.5354464415,
      "rangeKm": 18.9867351623,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 87
    },
    {
      "altitudeKm": 14.0810713127,
      "azimuthDegs": 18.7318316346,
      "elevationDegs": 47.4734004168,
      "lat": 28.5834144605,
      "lng": -80.5351412847,
      "rangeKm": 19.0402045591,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 87
    },
    {
      "altitudeKm": 14.1448491341,
      "azimuthDegs": 18.859013425,
      "elevationDegs": 47.5806877204,
      "lat": 28.58341432,
      "lng": -80.5348342895,
      "rangeKm": 19.0939592096,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 88
    },
    {
      "altitudeKm": 14.2086415381,
      "azimuthDegs": 18.98642741,
      "elevationDegs": 47.6872078177,
      "lat": 28.5834141078,
      "lng": -80.5345262944,
      "rangeKm": 19.1478499535,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 88
    },
    {
      "altitudeKm": 14.2725351426,
      "azimuthDegs": 19.1140707585,
      "elevationDegs": 47.7932478542,
      "lat": 28.5834133993,
      "lng": -80.5342174672,
      "rangeKm": 19.2019072835,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 88
    },
    {
      "altitudeKm": 14.3364577742,
      "azimuthDegs": 19.2423682549,
      "elevationDegs": 47.8984991025,
      "lat": 28.5834125485,
      "lng": -80.533906634,
      "rangeKm": 19.2561274967,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 88
    },
    {
      "altitudeKm": 14.4005294535,
      "azimuthDegs": 19.3707611616,
      "elevationDegs": 48.0031832571,
      "lat": 28.5834119917,
      "lng": -80.5335949688,
      "rangeKm": 19.3106050212,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 88
    },
    {
      "altitudeKm": 14.4646157217,
      "azimuthDegs": 19.4993754301,
      "elevationDegs": 48.1071090241,
      "lat": 28.5834113635,
      "lng": -80.5332823038,
      "rangeKm": 19.3652172618,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 89
    },
    {
      "altitudeKm": 14.5287644239,
      "azimuthDegs": 19.6280773587,
      "elevationDegs": 48.2101906929,
      "lat": 28.5834114541,
      "lng": -80.5329686391,
      "rangeKm": 19.4200543343,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 89
    },
    {
      "altitudeKm": 14.5930287777,
      "azimuthDegs": 19.7574198465,
      "elevationDegs": 48.3127708953,
      "lat": 28.5834109776,
      "lng": -80.5326531364,
      "rangeKm": 19.4750847826,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 89
    },
    {
      "altitudeKm": 14.9153383378,
      "azimuthDegs": 20.4084266646,
      "elevationDegs": 48.8156381272,
      "lat": 28.5834078507,
      "lng": -80.5310576122,
      "rangeKm": 19.7529009741,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 90
    },
    {
      "altitudeKm": 15.2395020175,
      "azimuthDegs": 21.0672299464,
      "elevationDegs": 49.3015485962,
      "lat": 28.5834058817,
      "lng": -80.529428721,
      "rangeKm": 20.0355264433,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 91
    },
    {
      "altitudeKm": 15.5657320632,
      "azimuthDegs": 21.7335310977,
      "elevationDegs": 49.7716112073,
      "lat": 28.5834030045,
      "lng": -80.5277669727,
      "rangeKm": 20.3229405061,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 92
    },
    {
      "altitudeKm": 15.8940044048,
      "azimuthDegs": 22.4071344034,
      "elevationDegs": 50.2256317888,
      "lat": 28.5834003621,
      "lng": -80.5260712004,
      "rangeKm": 20.615201518,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 93
    },
    {
      "altitudeKm": 16.2241993018,
      "azimuthDegs": 23.0880946463,
      "elevationDegs": 50.6636149862,
      "lat": 28.5833975168,
      "lng": -80.5243402374,
      "rangeKm": 20.9121894395,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 94
    },
    {
      "altitudeKm": 16.5566870168,
      "azimuthDegs": 23.7760556065,
      "elevationDegs": 51.0863207613,
      "lat": 28.5833947029,
      "lng": -80.5225735887,
      "rangeKm": 21.2141949116,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 95
    },
    {
      "altitudeKm": 16.8913478397,
      "azimuthDegs": 24.471029043,
      "elevationDegs": 51.4937384172,
      "lat": 28.5833914825,
      "lng": -80.5207700883,
      "rangeKm": 21.5211056972,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 96
    },
    {
      "altitudeKm": 17.2281965355,
      "azimuthDegs": 25.172867861,
      "elevationDegs": 51.8860289364,
      "lat": 28.5833877833,
      "lng": -80.5189287382,
      "rangeKm": 21.8329357564,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 97
    },
    {
      "altitudeKm": 17.567415719,
      "azimuthDegs": 25.8807083442,
      "elevationDegs": 52.2634691173,
      "lat": 28.5833847594,
      "lng": -80.5170497143,
      "rangeKm": 22.149878783,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 98
    },
    {
      "altitudeKm": 17.9089244932,
      "azimuthDegs": 26.5946866555,
      "elevationDegs": 52.6263932303,
      "lat": 28.5833807581,
      "lng": -80.5151320193,
      "rangeKm": 22.4717798797,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 99
    },
    {
      "altitudeKm": 18.2529822822,
      "azimuthDegs": 27.3145073803,
      "elevationDegs": 52.9748787516,
      "lat": 28.5833775815,
      "lng": -80.5131738187,
      "rangeKm": 22.7989899205,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 100
    },
    {
      "altitudeKm": 18.5993448267,
      "azimuthDegs": 28.0396422105,
      "elevationDegs": 53.3092166281,
      "lat": 28.5833733533,
      "lng": -80.5111759586,
      "rangeKm": 23.1311676644,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 101
    },
    {
      "altitudeKm": 18.9482860644,
      "azimuthDegs": 28.7701139513,
      "elevationDegs": 53.6294287912,
      "lat": 28.5833698044,
      "lng": -80.5091356,
      "rangeKm": 23.468701778,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 102
    },
    {
      "altitudeKm": 19.2996962176,
      "azimuthDegs": 29.505240353,
      "elevationDegs": 53.9359559271,
      "lat": 28.5833654238,
      "lng": -80.5070537575,
      "rangeKm": 23.8113801205,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 103
    },
    {
      "altitudeKm": 19.6537724592,
      "azimuthDegs": 30.2444230232,
      "elevationDegs": 54.229012415,
      "lat": 28.5833612941,
      "lng": -80.5049296034,
      "rangeKm": 24.1594397662,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 104
    },
    {
      "altitudeKm": 20.0105296847,
      "azimuthDegs": 30.9873564758,
      "elevationDegs": 54.5087580779,
      "lat": 28.5833573423,
      "lng": -80.5027621422,
      "rangeKm": 24.5129104704,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 105
    },
    {
      "altitudeKm": 20.3698628519,
      "azimuthDegs": 31.7342118444,
      "elevationDegs": 54.7751612682,
      "lat": 28.5833530587,
      "lng": -80.5005492058,
      "rangeKm": 24.8717367969,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 106
    },
    {
      "altitudeKm": 20.7319934746,
      "azimuthDegs": 32.4841893219,
      "elevationDegs": 55.0287856184,
      "lat": 28.5833483824,
      "lng": -80.498291141,
      "rangeKm": 25.2360843293,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 107
    },
    {
      "altitudeKm": 21.0969220139,
      "azimuthDegs": 33.236596445,
      "elevationDegs": 55.2698568165,
      "lat": 28.583343311,
      "lng": -80.4959879583,
      "rangeKm": 25.6059513913,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 108
    },
    {
      "altitudeKm": 21.4645768366,
      "azimuthDegs": 33.9910346684,
      "elevationDegs": 55.498343409,
      "lat": 28.5833381956,
      "lng": -80.4936384955,
      "rangeKm": 25.9813310332,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 109
    },
    {
      "altitudeKm": 21.835121897,
      "azimuthDegs": 34.7473248924,
      "elevationDegs": 55.714471347,
      "lat": 28.5833332569,
      "lng": -80.4912409223,
      "rangeKm": 26.3624259668,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 110
    },
    {
      "altitudeKm": 22.2459665735,
      "azimuthDegs": 35.7075014448,
      "elevationDegs": 55.896138747,
      "lat": 28.5833274915,
      "lng": -80.4881325347,
      "rangeKm": 26.8013705646,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 111
    },
    {
      "altitudeKm": 22.6228496118,
      "azimuthDegs": 36.4631636945,
      "elevationDegs": 56.0875157086,
      "lat": 28.5833211993,
      "lng": -80.4856346483,
      "rangeKm": 27.1947616449,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 112
    },
    {
      "altitudeKm": 23.0030714631,
      "azimuthDegs": 37.2189948006,
      "elevationDegs": 56.2674345705,
      "lat": 28.5833159582,
      "lng": -80.4830861799,
      "rangeKm": 27.5943699233,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 113
    },
    {
      "altitudeKm": 23.3867871187,
      "azimuthDegs": 37.9752078224,
      "elevationDegs": 56.4364066533,
      "lat": 28.5833099851,
      "lng": -80.4804854704,
      "rangeKm": 28.0002976715,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 114
    },
    {
      "altitudeKm": 23.7738239891,
      "azimuthDegs": 38.7309585561,
      "elevationDegs": 56.594302093,
      "lat": 28.5833041254,
      "lng": -80.4778321967,
      "rangeKm": 28.4124608017,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 115
    },
    {
      "altitudeKm": 24.1643704398,
      "azimuthDegs": 39.4859557779,
      "elevationDegs": 56.7416347547,
      "lat": 28.5832974567,
      "lng": -80.475125705,
      "rangeKm": 28.8310031987,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 116
    },
    {
      "altitudeKm": 24.5585040366,
      "azimuthDegs": 40.2398752645,
      "elevationDegs": 56.8784209578,
      "lat": 28.5832906228,
      "lng": -80.4723640011,
      "rangeKm": 29.2560980709,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 117
    },
    {
      "altitudeKm": 24.9561243305,
      "azimuthDegs": 40.9916554738,
      "elevationDegs": 57.0048166816,
      "lat": 28.5832841156,
      "lng": -80.4695479354,
      "rangeKm": 29.6876641101,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 118
    },
    {
      "altitudeKm": 25.3573477016,
      "azimuthDegs": 41.7412442036,
      "elevationDegs": 57.1210842992,
      "lat": 28.5832773652,
      "lng": -80.4666756831,
      "rangeKm": 30.1258457771,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 119
    },
    {
      "altitudeKm": 25.7622760277,
      "azimuthDegs": 42.4883033999,
      "elevationDegs": 57.2275562052,
      "lat": 28.5832698729,
      "lng": -80.4637464242,
      "rangeKm": 30.570747002,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 120
    },
    {
      "altitudeKm": 26.1708858631,
      "azimuthDegs": 43.232158846,
      "elevationDegs": 57.3241899262,
      "lat": 28.5832627769,
      "lng": -80.4607590019,
      "rangeKm": 31.0224515217,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 121
    },
    {
      "altitudeKm": 26.583216749,
      "azimuthDegs": 43.972432834,
      "elevationDegs": 57.4114574181,
      "lat": 28.5832548603,
      "lng": -80.4577136014,
      "rangeKm": 31.4809448058,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 122
    },
    {
      "altitudeKm": 26.9992452941,
      "azimuthDegs": 44.708480115,
      "elevationDegs": 57.4893332983,
      "lat": 28.583247261,
      "lng": -80.4546090664,
      "rangeKm": 31.9463101258,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 123
    },
    {
      "altitudeKm": 27.4191600884,
      "azimuthDegs": 45.4400852687,
      "elevationDegs": 57.5583065877,
      "lat": 28.5832390559,
      "lng": -80.451444748,
      "rangeKm": 32.4187039979,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 124
    },
    {
      "altitudeKm": 27.8428899659,
      "azimuthDegs": 46.1668297074,
      "elevationDegs": 57.6184085628,
      "lat": 28.5832305933,
      "lng": -80.4482194909,
      "rangeKm": 32.8981371897,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 125
    },
    {
      "altitudeKm": 28.2704503939,
      "azimuthDegs": 46.8883768553,
      "elevationDegs": 57.6698268297,
      "lat": 28.5832217976,
      "lng": -80.4449323097,
      "rangeKm": 33.3846705067,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 126
    },
    {
      "altitudeKm": 28.7019767318,
      "azimuthDegs": 47.604041878,
      "elevationDegs": 57.7129326693,
      "lat": 28.5832130294,
      "lng": -80.4415833914,
      "rangeKm": 33.8784397038,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 127
    },
    {
      "altitudeKm": 29.1374512468,
      "azimuthDegs": 48.3139636948,
      "elevationDegs": 57.7478718426,
      "lat": 28.5832033527,
      "lng": -80.4381707481,
      "rangeKm": 34.3794829489,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 128
    },
    {
      "altitudeKm": 29.5769852038,
      "azimuthDegs": 49.0174364722,
      "elevationDegs": 57.7747507839,
      "lat": 28.5831942687,
      "lng": -80.4346933956,
      "rangeKm": 34.8880070596,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 129
    },
    {
      "altitudeKm": 30.0205705269,
      "azimuthDegs": 49.7144558517,
      "elevationDegs": 57.7940565323,
      "lat": 28.5831837714,
      "lng": -80.431151523,
      "rangeKm": 35.4039351707,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 130
    },
    {
      "altitudeKm": 30.4681307601,
      "azimuthDegs": 50.4040046844,
      "elevationDegs": 57.8057174849,
      "lat": 28.5831742805,
      "lng": -80.4275448122,
      "rangeKm": 35.9273220445,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 131
    },
    {
      "altitudeKm": 30.9199227118,
      "azimuthDegs": 51.0867068464,
      "elevationDegs": 57.8101904707,
      "lat": 28.5831635169,
      "lng": -80.4238707817,
      "rangeKm": 36.4584138392,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 132
    },
    {
      "altitudeKm": 31.3758221718,
      "azimuthDegs": 51.7617771943,
      "elevationDegs": 57.8074502421,
      "lat": 28.5831531109,
      "lng": -80.4201291146,
      "rangeKm": 36.9971952674,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 133
    },
    {
      "altitudeKm": 31.8359702382,
      "azimuthDegs": 52.4293741851,
      "elevationDegs": 57.7979717632,
      "lat": 28.58314135,
      "lng": -80.4163191682,
      "rangeKm": 37.5437660704,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 134
    },
    {
      "altitudeKm": 32.3003771925,
      "azimuthDegs": 53.0886514843,
      "elevationDegs": 57.7818330011,
      "lat": 28.5831302287,
      "lng": -80.4124407956,
      "rangeKm": 38.0982291627,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 135
    },
    {
      "altitudeKm": 32.7689778153,
      "azimuthDegs": 53.7400372813,
      "elevationDegs": 57.759198501,
      "lat": 28.5831180215,
      "lng": -80.4084920136,
      "rangeKm": 38.6605663636,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 136
    },
    {
      "altitudeKm": 33.2419556391,
      "azimuthDegs": 54.3828883761,
      "elevationDegs": 57.7303963,
      "lat": 28.5831058754,
      "lng": -80.4044730151,
      "rangeKm": 39.2309826982,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 137
    },
    {
      "altitudeKm": 33.7193265887,
      "azimuthDegs": 55.0170889229,
      "elevationDegs": 57.6956078971,
      "lat": 28.5830937125,
      "lng": -80.4003828213,
      "rangeKm": 39.8095462584,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 138
    },
    {
      "altitudeKm": 34.2010734432,
      "azimuthDegs": 55.6428958594,
      "elevationDegs": 57.6549558355,
      "lat": 28.5830805951,
      "lng": -80.3962194515,
      "rangeKm": 40.3963125218,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 139
    },
    {
      "altitudeKm": 34.6872307726,
      "azimuthDegs": 56.2596915274,
      "elevationDegs": 57.6087541765,
      "lat": 28.5830673763,
      "lng": -80.3919839331,
      "rangeKm": 40.9913128078,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 140
    },
    {
      "altitudeKm": 35.1779305333,
      "azimuthDegs": 56.8678073088,
      "elevationDegs": 57.5571271043,
      "lat": 28.5830534111,
      "lng": -80.3876734541,
      "rangeKm": 41.5947769699,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 141
    },
    {
      "altitudeKm": 35.6731354577,
      "azimuthDegs": 57.466753135,
      "elevationDegs": 57.5001958662,
      "lat": 28.5830399036,
      "lng": -80.3832878711,
      "rangeKm": 42.2067369154,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 142
    },
    {
      "altitudeKm": 36.1729004523,
      "azimuthDegs": 58.0567528593,
      "elevationDegs": 57.4382606487,
      "lat": 28.5830255636,
      "lng": -80.3788263784,
      "rangeKm": 42.8272509985,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 143
    },
    {
      "altitudeKm": 36.6773136323,
      "azimuthDegs": 58.6377085206,
      "elevationDegs": 57.3716679168,
      "lat": 28.5830099607,
      "lng": -80.3742891732,
      "rangeKm": 43.4563898354,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 144
    },
    {
      "altitudeKm": 37.186280632,
      "azimuthDegs": 59.2094120568,
      "elevationDegs": 57.300272032,
      "lat": 28.582994578,
      "lng": -80.3696739396,
      "rangeKm": 44.0942418129,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 145
    },
    {
      "altitudeKm": 37.7000387762,
      "azimuthDegs": 59.7718338908,
      "elevationDegs": 57.2244268849,
      "lat": 28.5829792771,
      "lng": -80.3649800441,
      "rangeKm": 44.7410496889,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 146
    },
    {
      "altitudeKm": 38.2184940569,
      "azimuthDegs": 60.3252122297,
      "elevationDegs": 57.1443945394,
      "lat": 28.5829624746,
      "lng": -80.3602075161,
      "rangeKm": 45.3967034061,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 147
    },
    {
      "altitudeKm": 38.74177329,
      "azimuthDegs": 60.8693428036,
      "elevationDegs": 57.0602189432,
      "lat": 28.5829455939,
      "lng": -80.355354382,
      "rangeKm": 46.0614618024,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 148
    },
    {
      "altitudeKm": 39.2698064032,
      "azimuthDegs": 61.40418215,
      "elevationDegs": 56.9719556571,
      "lat": 28.5829289774,
      "lng": -80.3504195006,
      "rangeKm": 46.7353472592,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 149
    },
    {
      "altitudeKm": 39.8027205256,
      "azimuthDegs": 61.92997679,
      "elevationDegs": 56.8800322252,
      "lat": 28.5829109829,
      "lng": -80.3454032437,
      "rangeKm": 47.4184208938,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 150
    },
    {
      "altitudeKm": 40.3406279345,
      "azimuthDegs": 62.4464405285,
      "elevationDegs": 56.7845643003,
      "lat": 28.5828931044,
      "lng": -80.3403046418,
      "rangeKm": 48.110883629,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 151
    },
    {
      "altitudeKm": 40.8833777723,
      "azimuthDegs": 62.9540193125,
      "elevationDegs": 56.6855436722,
      "lat": 28.5828740368,
      "lng": -80.3351215544,
      "rangeKm": 48.8126924131,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 152
    },
    {
      "altitudeKm": 41.431154282,
      "azimuthDegs": 63.452407004,
      "elevationDegs": 56.5832527819,
      "lat": 28.5828549223,
      "lng": -80.3298541854,
      "rangeKm": 49.5240432459,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 153
    },
    {
      "altitudeKm": 41.9839890006,
      "azimuthDegs": 63.9417951045,
      "elevationDegs": 56.4777518262,
      "lat": 28.5828356071,
      "lng": -80.3245005665,
      "rangeKm": 50.2450715,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 154
    },
    {
      "altitudeKm": 42.5418361865,
      "azimuthDegs": 64.4223274753,
      "elevationDegs": 56.3692490619,
      "lat": 28.5828152938,
      "lng": -80.3190607327,
      "rangeKm": 50.9757352593,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 155
    },
    {
      "altitudeKm": 43.1048471532,
      "azimuthDegs": 64.8940088372,
      "elevationDegs": 56.2579474383,
      "lat": 28.5827942646,
      "lng": -80.3135338893,
      "rangeKm": 51.7162265053,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 156
    },
    {
      "altitudeKm": 43.6729670977,
      "azimuthDegs": 65.3569652388,
      "elevationDegs": 56.1438114866,
      "lat": 28.5827727873,
      "lng": -80.3079179002,
      "rangeKm": 52.466630687,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 157
    },
    {
      "altitudeKm": 44.246419258,
      "azimuthDegs": 65.8111893159,
      "elevationDegs": 56.0271929469,
      "lat": 28.5827507925,
      "lng": -80.3022131444,
      "rangeKm": 53.2271328183,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 158
    },
    {
      "altitudeKm": 44.8250145867,
      "azimuthDegs": 66.2568989897,
      "elevationDegs": 55.9079743474,
      "lat": 28.5827281831,
      "lng": -80.2964173168,
      "rangeKm": 53.9977069582,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 159
    },
    {
      "altitudeKm": 45.4089764401,
      "azimuthDegs": 66.6941021875,
      "elevationDegs": 55.786495795,
      "lat": 28.5827048892,
      "lng": -80.2905307983,
      "rangeKm": 54.7785378897,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 160
    },
    {
      "altitudeKm": 45.9982355159,
      "azimuthDegs": 67.122852562,
      "elevationDegs": 55.6627823962,
      "lat": 28.5826812494,
      "lng": -80.2845524568,
      "rangeKm": 55.5696523097,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 161
    },
    {
      "altitudeKm": 46.5929105232,
      "azimuthDegs": 67.5434238781,
      "elevationDegs": 55.5369511716,
      "lat": 28.5826566844,
      "lng": -80.2784805033,
      "rangeKm": 56.3712449169,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 162
    },
    {
      "altitudeKm": 47.1930667322,
      "azimuthDegs": 67.9557905032,
      "elevationDegs": 55.4091020615,
      "lat": 28.5826318961,
      "lng": -80.2723139793,
      "rangeKm": 57.1834553116,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 163
    },
    {
      "altitudeKm": 47.7986589583,
      "azimuthDegs": 68.3601455169,
      "elevationDegs": 55.2793982681,
      "lat": 28.5826060851,
      "lng": -80.2660529269,
      "rangeKm": 58.0062446305,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 164
    },
    {
      "altitudeKm": 48.4098540021,
      "azimuthDegs": 68.7566167991,
      "elevationDegs": 55.1479438032,
      "lat": 28.5825794579,
      "lng": -80.2596955609,
      "rangeKm": 58.8398673083,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 165
    },
    {
      "altitudeKm": 49.02656811,
      "azimuthDegs": 69.1451970646,
      "elevationDegs": 55.0148180155,
      "lat": 28.5825524233,
      "lng": -80.2532417536,
      "rangeKm": 59.6842896542,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 166
    },
    {
      "altitudeKm": 49.6489352925,
      "azimuthDegs": 69.5262250959,
      "elevationDegs": 54.8800581936,
      "lat": 28.5825243278,
      "lng": -80.2466887225,
      "rangeKm": 60.539772666,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 167
    },
    {
      "altitudeKm": 50.2769198156,
      "azimuthDegs": 69.8995611999,
      "elevationDegs": 54.7437434084,
      "lat": 28.5824963655,
      "lng": -80.2400363418,
      "rangeKm": 61.4063403467,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 168
    },
    {
      "altitudeKm": 50.9106499324,
      "azimuthDegs": 70.2655341952,
      "elevationDegs": 54.6061569559,
      "lat": 28.5824668917,
      "lng": -80.233285002,
      "rangeKm": 62.2840606033,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 169
    },
    {
      "altitudeKm": 51.5502212542,
      "azimuthDegs": 70.6242740421,
      "elevationDegs": 54.4672575742,
      "lat": 28.5824364598,
      "lng": -80.226431753,
      "rangeKm": 63.1732004834,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 170
    },
    {
      "altitudeKm": 52.1955504315,
      "azimuthDegs": 70.9757881503,
      "elevationDegs": 54.3271132061,
      "lat": 28.5824054768,
      "lng": -80.2194764717,
      "rangeKm": 64.0737270667,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 171
    },
    {
      "altitudeKm": 52.8468049365,
      "azimuthDegs": 71.3202052765,
      "elevationDegs": 54.1858126636,
      "lat": 28.5823741453,
      "lng": -80.2124173818,
      "rangeKm": 64.9858966391,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 172
    },
    {
      "altitudeKm": 53.5038537395,
      "azimuthDegs": 71.6576673919,
      "elevationDegs": 54.0434160167,
      "lat": 28.5823420853,
      "lng": -80.2052543619,
      "rangeKm": 65.9096208563,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 173
    },
    {
      "altitudeKm": 54.1669897328,
      "azimuthDegs": 71.9885382507,
      "elevationDegs": 53.9001320788,
      "lat": 28.5823078697,
      "lng": -80.1979859834,
      "rangeKm": 66.845206966,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 174
    },
    {
      "altitudeKm": 54.8360674714,
      "azimuthDegs": 72.312529489,
      "elevationDegs": 53.7558417537,
      "lat": 28.5822742453,
      "lng": -80.1906107832,
      "rangeKm": 67.7926918794,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 175
    },
    {
      "altitudeKm": 55.5113172661,
      "azimuthDegs": 72.6300676738,
      "elevationDegs": 53.6107983476,
      "lat": 28.5822390712,
      "lng": -80.1831283347,
      "rangeKm": 68.7522629991,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 176
    },
    {
      "altitudeKm": 56.1925847166,
      "azimuthDegs": 72.9411681764,
      "elevationDegs": 53.4649364081,
      "lat": 28.5822031004,
      "lng": -80.1755373493,
      "rangeKm": 69.7239011622,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 177
    },
    {
      "altitudeKm": 56.8801244673,
      "azimuthDegs": 73.2460047747,
      "elevationDegs": 53.318393311,
      "lat": 28.5821661107,
      "lng": -80.1678362322,
      "rangeKm": 70.7079165916,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 178
    },
    {
      "altitudeKm": 57.5738538735,
      "azimuthDegs": 73.5446012498,
      "elevationDegs": 53.171218472,
      "lat": 28.5821285055,
      "lng": -80.1600248685,
      "rangeKm": 71.7042762899,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 179
    },
    {
      "altitudeKm": 58.2738219296,
      "azimuthDegs": 73.8371797451,
      "elevationDegs": 53.0233649144,
      "lat": 28.5820900462,
      "lng": -80.1521003221,
      "rangeKm": 72.7132001535,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 180
    },
    {
      "altitudeKm": 58.9801520646,
      "azimuthDegs": 74.123715466,
      "elevationDegs": 52.8750576733,
      "lat": 28.5820511502,
      "lng": -80.1440638245,
      "rangeKm": 73.7347454702,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 181
    },
    {
      "altitudeKm": 59.6927978408,
      "azimuthDegs": 74.4046395982,
      "elevationDegs": 52.7262320784,
      "lat": 28.5820100079,
      "lng": -80.1359124432,
      "rangeKm": 74.7690283354,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 182
    },
    {
      "altitudeKm": 60.4120086362,
      "azimuthDegs": 74.6797972517,
      "elevationDegs": 52.5770187667,
      "lat": 28.5819684595,
      "lng": -80.1276454166,
      "rangeKm": 75.8163453357,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 183
    },
    {
      "altitudeKm": 61.1376544727,
      "azimuthDegs": 74.94932381,
      "elevationDegs": 52.4274509913,
      "lat": 28.5819261203,
      "lng": -80.1192626352,
      "rangeKm": 76.8766112944,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 184
    },
    {
      "altitudeKm": 61.8698715447,
      "azimuthDegs": 75.2134692747,
      "elevationDegs": 52.2775349142,
      "lat": 28.5818823277,
      "lng": -80.110761345,
      "rangeKm": 77.9501017841,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 185
    },
    {
      "altitudeKm": 62.6085779576,
      "azimuthDegs": 75.4722571982,
      "elevationDegs": 52.1273095385,
      "lat": 28.5818374809,
      "lng": -80.102141439,
      "rangeKm": 79.0367851592,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 186
    },
    {
      "altitudeKm": 63.3540772993,
      "azimuthDegs": 75.725738023,
      "elevationDegs": 51.9768979045,
      "lat": 28.5817921376,
      "lng": -80.0934013381,
      "rangeKm": 80.1370235073,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 187
    },
    {
      "altitudeKm": 64.1062224385,
      "azimuthDegs": 75.9742100564,
      "elevationDegs": 51.8262258027,
      "lat": 28.5817449797,
      "lng": -80.0845389438,
      "rangeKm": 81.2508207277,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 188
    },
    {
      "altitudeKm": 64.865185387,
      "azimuthDegs": 76.2175617051,
      "elevationDegs": 51.675496521,
      "lat": 28.581697205,
      "lng": -80.0755554978,
      "rangeKm": 82.3782800373,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 189
    },
    {
      "altitudeKm": 65.630897383,
      "azimuthDegs": 76.4560575755,
      "elevationDegs": 51.5245529439,
      "lat": 28.5816481316,
      "lng": -80.0664469105,
      "rangeKm": 83.519596459,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 190
    },
    {
      "altitudeKm": 66.4035693182,
      "azimuthDegs": 76.689731688,
      "elevationDegs": 51.3736358049,
      "lat": 28.5815977511,
      "lng": -80.0572146012,
      "rangeKm": 84.6748726669,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 191
    },
    {
      "altitudeKm": 67.1831806423,
      "azimuthDegs": 76.9187412231,
      "elevationDegs": 51.2225990802,
      "lat": 28.5815461639,
      "lng": -80.0478544843,
      "rangeKm": 85.8443564639,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 192
    },
    {
      "altitudeKm": 67.969721649,
      "azimuthDegs": 77.1431222625,
      "elevationDegs": 51.0715670834,
      "lat": 28.581493418,
      "lng": -80.0383676328,
      "rangeKm": 87.0279976141,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 193
    },
    {
      "altitudeKm": 68.7633777965,
      "azimuthDegs": 77.3629922703,
      "elevationDegs": 50.920548935,
      "lat": 28.5814396286,
      "lng": -80.0287513111,
      "rangeKm": 88.2261270469,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 194
    },
    {
      "altitudeKm": 69.5641069549,
      "azimuthDegs": 77.5785064509,
      "elevationDegs": 50.7696109096,
      "lat": 28.5813839846,
      "lng": -80.0190055989,
      "rangeKm": 89.4387150223,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 195
    },
    {
      "altitudeKm": 70.3720410613,
      "azimuthDegs": 77.7896161745,
      "elevationDegs": 50.6187632848,
      "lat": 28.581327878,
      "lng": -80.0091285854,
      "rangeKm": 90.6660204131,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 196
    },
    {
      "altitudeKm": 71.1872704567,
      "azimuthDegs": 77.9966010088,
      "elevationDegs": 50.4679956488,
      "lat": 28.5812698539,
      "lng": -79.999117542,
      "rangeKm": 91.9082780074,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 197
    },
    {
      "altitudeKm": 72.0096995574,
      "azimuthDegs": 78.1994522824,
      "elevationDegs": 50.3173725332,
      "lat": 28.5812103779,
      "lng": -79.9889733736,
      "rangeKm": 93.1653858415,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 198
    },
    {
      "altitudeKm": 72.8395147219,
      "azimuthDegs": 78.398272192,
      "elevationDegs": 50.1669015475,
      "lat": 28.5811495608,
      "lng": -79.9786933554,
      "rangeKm": 94.4376768628,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 199
    },
    {
      "altitudeKm": 73.6768719721,
      "azimuthDegs": 78.5931076083,
      "elevationDegs": 50.0166677269,
      "lat": 28.5810876609,
      "lng": -79.9682767565,
      "rangeKm": 95.7253403957,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 200
    },
    {
      "altitudeKm": 74.521539851,
      "azimuthDegs": 78.78415032,
      "elevationDegs": 49.8665511754,
      "lat": 28.5810237724,
      "lng": -79.9577213245,
      "rangeKm": 97.0283442159,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 201
    },
    {
      "altitudeKm": 75.3739433385,
      "azimuthDegs": 78.9713635209,
      "elevationDegs": 49.7167448462,
      "lat": 28.5809588779,
      "lng": -79.9470266845,
      "rangeKm": 98.3470734407,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 202
    },
    {
      "altitudeKm": 76.2338360163,
      "azimuthDegs": 79.1549087238,
      "elevationDegs": 49.5671659928,
      "lat": 28.5808921446,
      "lng": -79.9361915827,
      "rangeKm": 99.6814247853,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 203
    },
    {
      "altitudeKm": 77.1014531061,
      "azimuthDegs": 79.3347975568,
      "elevationDegs": 49.4178329204,
      "lat": 28.5808244612,
      "lng": -79.9252133067,
      "rangeKm": 101.0317803421,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 204
    },
    {
      "altitudeKm": 77.9767693738,
      "azimuthDegs": 79.5111839522,
      "elevationDegs": 49.2687622981,
      "lat": 28.5807549359,
      "lng": -79.9140909596,
      "rangeKm": 102.3981859694,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 205
    },
    {
      "altitudeKm": 78.8599418792,
      "azimuthDegs": 79.6841064043,
      "elevationDegs": 49.1200319048,
      "lat": 28.5806838221,
      "lng": -79.902823823,
      "rangeKm": 103.7808307978,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 206
    },
    {
      "altitudeKm": 79.7510089535,
      "azimuthDegs": 79.853661209,
      "elevationDegs": 48.9716305444,
      "lat": 28.5806109346,
      "lng": -79.8914100101,
      "rangeKm": 105.1798808353,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 207
    },
    {
      "altitudeKm": 80.6500091612,
      "azimuthDegs": 80.0199410583,
      "elevationDegs": 48.8235479829,
      "lat": 28.5805360873,
      "lng": -79.8798476364,
      "rangeKm": 106.595503044,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 208
    },
    {
      "altitudeKm": 81.5570136965,
      "azimuthDegs": 80.1829459069,
      "elevationDegs": 48.675818546,
      "lat": 28.5804599501,
      "lng": -79.8681358132,
      "rangeKm": 108.0278369429,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 209
    },
    {
      "altitudeKm": 82.4721634577,
      "azimuthDegs": 80.3428202541,
      "elevationDegs": 48.5284392953,
      "lat": 28.5803818402,
      "lng": -79.856271845,
      "rangeKm": 109.4771734698,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 210
    },
    {
      "altitudeKm": 83.3953803189,
      "azimuthDegs": 80.4995772598,
      "elevationDegs": 48.3814263372,
      "lat": 28.5803021379,
      "lng": -79.8442556638,
      "rangeKm": 110.9434833777,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 211
    },
    {
      "altitudeKm": 84.3268379855,
      "azimuthDegs": 80.653269906,
      "elevationDegs": 48.2348191173,
      "lat": 28.5802210154,
      "lng": -79.8320855722,
      "rangeKm": 112.42702935,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 212
    },
    {
      "altitudeKm": 85.2666302453,
      "azimuthDegs": 80.8040986198,
      "elevationDegs": 48.088603747,
      "lat": 28.580137005,
      "lng": -79.8197588834,
      "rangeKm": 113.9280588108,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 213
    },
    {
      "altitudeKm": 86.2147907838,
      "azimuthDegs": 80.9519604294,
      "elevationDegs": 47.9427849512,
      "lat": 28.5800519723,
      "lng": -79.807274543,
      "rangeKm": 115.4467077416,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 214
    },
    {
      "altitudeKm": 87.1713828212,
      "azimuthDegs": 81.097015495,
      "elevationDegs": 47.7974107968,
      "lat": 28.5799645981,
      "lng": -79.7946318551,
      "rangeKm": 116.9830746417,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 215
    },
    {
      "altitudeKm": 88.1365101636,
      "azimuthDegs": 81.239293386,
      "elevationDegs": 47.6524514735,
      "lat": 28.5798753937,
      "lng": -79.7818279633,
      "rangeKm": 118.5374495087,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 216
    },
    {
      "altitudeKm": 89.110213528,
      "azimuthDegs": 81.3788686278,
      "elevationDegs": 47.5078984733,
      "lat": 28.5797841632,
      "lng": -79.7688610066,
      "rangeKm": 120.1100033843,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 217
    },
    {
      "altitudeKm": 90.0925182886,
      "azimuthDegs": 81.5157976526,
      "elevationDegs": 47.3637727907,
      "lat": 28.5796907847,
      "lng": -79.7557301189,
      "rangeKm": 121.7008322362,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 218
    },
    {
      "altitudeKm": 91.0836477444,
      "azimuthDegs": 81.6500622632,
      "elevationDegs": 47.2201223304,
      "lat": 28.5795962036,
      "lng": -79.7424336238,
      "rangeKm": 123.3102434977,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 219
    },
    {
      "altitudeKm": 92.0836341105,
      "azimuthDegs": 81.7818817954,
      "elevationDegs": 47.0769517963,
      "lat": 28.579498239,
      "lng": -79.7289698486,
      "rangeKm": 124.9383694233,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 220
    },
    {
      "altitudeKm": 93.0924420127,
      "azimuthDegs": 81.9111452848,
      "elevationDegs": 46.9342036573,
      "lat": 28.5793990896,
      "lng": -79.7153365848,
      "rangeKm": 126.5853738481,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 221
    },
    {
      "altitudeKm": 94.1102227888,
      "azimuthDegs": 82.0380222734,
      "elevationDegs": 46.7919559804,
      "lat": 28.5792970109,
      "lng": -79.7015333366,
      "rangeKm": 128.2514055802,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 222
    },
    {
      "altitudeKm": 95.1370980018,
      "azimuthDegs": 82.1625464704,
      "elevationDegs": 46.6501563432,
      "lat": 28.5791924284,
      "lng": -79.6875562788,
      "rangeKm": 129.936834318,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 223
    },
    {
      "altitudeKm": 96.1730403248,
      "azimuthDegs": 82.2846689452,
      "elevationDegs": 46.5088278357,
      "lat": 28.5790864881,
      "lng": -79.673405373,
      "rangeKm": 131.6416758297,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 224
    },
    {
      "altitudeKm": 97.2182969657,
      "azimuthDegs": 82.4045354748,
      "elevationDegs": 46.3679770883,
      "lat": 28.5789779944,
      "lng": -79.659077162,
      "rangeKm": 133.3663529015,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 225
    },
    {
      "altitudeKm": 98.2728796742,
      "azimuthDegs": 82.5221788435,
      "elevationDegs": 46.2276481583,
      "lat": 28.5788668922,
      "lng": -79.6445717939,
      "rangeKm": 135.1108857555,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 226
    },
    {
      "altitudeKm": 99.3367771891,
      "azimuthDegs": 82.6376547687,
      "elevationDegs": 46.0877505276,
      "lat": 28.5787532378,
      "lng": -79.6298852773,
      "rangeKm": 136.8755568508,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 227
    },
    {
      "altitudeKm": 100.4101360366,
      "azimuthDegs": 82.7509693275,
      "elevationDegs": 45.9483707686,
      "lat": 28.5786373353,
      "lng": -79.6150179467,
      "rangeKm": 138.6604763301,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 228
    },
    {
      "altitudeKm": 101.4930320731,
      "azimuthDegs": 82.8622025375,
      "elevationDegs": 45.8094528327,
      "lat": 28.5785188195,
      "lng": -79.599965999,
      "rangeKm": 140.4659751773,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 229
    },
    {
      "altitudeKm": 102.5857146174,
      "azimuthDegs": 82.971397218,
      "elevationDegs": 45.6710875481,
      "lat": 28.5783974975,
      "lng": -79.5847289683,
      "rangeKm": 142.2922873123,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 230
    },
    {
      "altitudeKm": 103.6879853352,
      "azimuthDegs": 83.078540591,
      "elevationDegs": 45.5331522851,
      "lat": 28.5782743303,
      "lng": -79.5693035039,
      "rangeKm": 144.1395270296,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 231
    },
    {
      "altitudeKm": 104.800100787,
      "azimuthDegs": 83.183809509,
      "elevationDegs": 45.3957241984,
      "lat": 28.5781470682,
      "lng": -79.5536883399,
      "rangeKm": 146.0079703667,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 232
    },
    {
      "altitudeKm": 105.9222501036,
      "azimuthDegs": 83.2871057252,
      "elevationDegs": 45.2588276634,
      "lat": 28.5780178313,
      "lng": -79.5378816686,
      "rangeKm": 147.8979186462,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 233
    },
    {
      "altitudeKm": 107.0543610445,
      "azimuthDegs": 83.3885135886,
      "elevationDegs": 45.1223952159,
      "lat": 28.5778859602,
      "lng": -79.5218805148,
      "rangeKm": 149.8095404726,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 234
    },
    {
      "altitudeKm": 108.1964640382,
      "azimuthDegs": 83.4880705255,
      "elevationDegs": 44.9864458298,
      "lat": 28.5777513097,
      "lng": -79.5056840663,
      "rangeKm": 151.7429359844,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 235
    },
    {
      "altitudeKm": 109.348842342,
      "azimuthDegs": 83.585834514,
      "elevationDegs": 44.8510211396,
      "lat": 28.5776135233,
      "lng": -79.4892899043,
      "rangeKm": 153.6984956976,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 236
    },
    {
      "altitudeKm": 110.5115591347,
      "azimuthDegs": 83.6818598868,
      "elevationDegs": 44.7160950791,
      "lat": 28.5774722984,
      "lng": -79.4726952493,
      "rangeKm": 155.6764776069,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 237
    },
    {
      "altitudeKm": 111.6846235035,
      "azimuthDegs": 83.7761217507,
      "elevationDegs": 44.5816461184,
      "lat": 28.5773286031,
      "lng": -79.4558981303,
      "rangeKm": 157.6770561362,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 238
    },
    {
      "altitudeKm": 112.8680516953,
      "azimuthDegs": 83.8687175681,
      "elevationDegs": 44.4476415719,
      "lat": 28.5771813516,
      "lng": -79.4388957757,
      "rangeKm": 159.7004509109,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 239
    },
    {
      "altitudeKm": 114.0622785205,
      "azimuthDegs": 83.959615844,
      "elevationDegs": 44.314211861,
      "lat": 28.5770314753,
      "lng": -79.4216879461,
      "rangeKm": 161.7470200268,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 240
    },
    {
      "altitudeKm": 115.2670303755,
      "azimuthDegs": 84.0488962118,
      "elevationDegs": 44.1812116274,
      "lat": 28.5768782789,
      "lng": -79.40427034,
      "rangeKm": 163.8168867936,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 241
    },
    {
      "altitudeKm": 116.4826633753,
      "azimuthDegs": 84.1366210007,
      "elevationDegs": 44.0487306835,
      "lat": 28.5767210551,
      "lng": -79.386641741,
      "rangeKm": 165.9104089353,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 242
    },
    {
      "altitudeKm": 117.7091024341,
      "azimuthDegs": 84.2227433294,
      "elevationDegs": 43.9167233107,
      "lat": 28.5765611782,
      "lng": -79.3688000142,
      "rangeKm": 168.0277173223,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 243
    },
    {
      "altitudeKm": 118.9466506008,
      "azimuthDegs": 84.3073207502,
      "elevationDegs": 43.7852119638,
      "lat": 28.5763981971,
      "lng": -79.3507417961,
      "rangeKm": 170.169283771,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 244
    },
    {
      "altitudeKm": 120.195310748,
      "azimuthDegs": 84.3904310439,
      "elevationDegs": 43.6541864838,
      "lat": 28.5762310922,
      "lng": -79.332465332,
      "rangeKm": 172.3352514723,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 245
    },
    {
      "altitudeKm": 121.4551118355,
      "azimuthDegs": 84.4720566896,
      "elevationDegs": 43.523611713,
      "lat": 28.5760607352,
      "lng": -79.3139676996,
      "rangeKm": 174.5258785445,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 246
    },
    {
      "altitudeKm": 122.7262944325,
      "azimuthDegs": 84.55228159,
      "elevationDegs": 43.3935207602,
      "lat": 28.5758859691,
      "lng": -79.2952465399,
      "rangeKm": 176.7415187073,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 247
    },
    {
      "altitudeKm": 124.0088722639,
      "azimuthDegs": 84.6310800118,
      "elevationDegs": 43.2638983358,
      "lat": 28.575707739,
      "lng": -79.2762999268,
      "rangeKm": 178.9823503283,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 248
    },
    {
      "altitudeKm": 124.6545352574,
      "azimuthDegs": 84.6699336559,
      "elevationDegs": 43.1992692499,
      "lat": 28.5756177215,
      "lng": -79.2667409869,
      "rangeKm": 180.1123715033,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 248
    },
    {
      "altitudeKm": 125.3030648273,
      "azimuthDegs": 84.7084825744,
      "elevationDegs": 43.1347436805,
      "lat": 28.5755259977,
      "lng": -79.2571243414,
      "rangeKm": 181.2488025387,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 249
    },
    {
      "altitudeKm": 126.6089732211,
      "azimuthDegs": 84.7844851046,
      "elevationDegs": 43.0060675575,
      "lat": 28.5753412685,
      "lng": -79.237718055,
      "rangeKm": 183.5410985054,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 250
    },
    {
      "altitudeKm": 127.9264214201,
      "azimuthDegs": 84.8592129477,
      "elevationDegs": 42.8778204786,
      "lat": 28.5751513808,
      "lng": -79.2180791555,
      "rangeKm": 185.8592642982,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 251
    },
    {
      "altitudeKm": 129.2556126656,
      "azimuthDegs": 84.9326276919,
      "elevationDegs": 42.7500807555,
      "lat": 28.5749573737,
      "lng": -79.1982080784,
      "rangeKm": 188.2034439212,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 252
    },
    {
      "altitudeKm": 130.5961756367,
      "azimuthDegs": 85.0047090166,
      "elevationDegs": 42.6227793737,
      "lat": 28.5747600322,
      "lng": -79.1781043224,
      "rangeKm": 190.5734464999,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 253
    },
    {
      "altitudeKm": 131.948321206,
      "azimuthDegs": 85.0755200836,
      "elevationDegs": 42.4959810062,
      "lat": 28.5745583442,
      "lng": -79.1577675305,
      "rangeKm": 192.9694641321,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 254
    },
    {
      "altitudeKm": 133.3117980556,
      "azimuthDegs": 85.1450725685,
      "elevationDegs": 42.3696080035,
      "lat": 28.5743525168,
      "lng": -79.137195425,
      "rangeKm": 195.391514545,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 255
    },
    {
      "altitudeKm": 134.6866340665,
      "azimuthDegs": 85.2134244407,
      "elevationDegs": 42.24374019,
      "lat": 28.5741414135,
      "lng": -79.1163904174,
      "rangeKm": 197.8394634866,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 256
    },
    {
      "altitudeKm": 136.0726742658,
      "azimuthDegs": 85.2805187319,
      "elevationDegs": 42.1183179789,
      "lat": 28.5739267902,
      "lng": -79.0953502321,
      "rangeKm": 200.3134051889,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 257
    },
    {
      "altitudeKm": 137.4699802141,
      "azimuthDegs": 85.3464263096,
      "elevationDegs": 41.9933866878,
      "lat": 28.5737073486,
      "lng": -79.0740753182,
      "rangeKm": 202.8133686791,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 258
    },
    {
      "altitudeKm": 138.8784195357,
      "azimuthDegs": 85.41113708,
      "elevationDegs": 41.8689169018,
      "lat": 28.5734837295,
      "lng": -79.0525645764,
      "rangeKm": 205.3393729197,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 259
    },
    {
      "altitudeKm": 140.2979370567,
      "azimuthDegs": 85.4747408621,
      "elevationDegs": 41.7449066038,
      "lat": 28.5732541917,
      "lng": -79.0308172889,
      "rangeKm": 207.8914495213,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 260
    },
    {
      "altitudeKm": 141.7284633907,
      "azimuthDegs": 85.5371512405,
      "elevationDegs": 41.6213737931,
      "lat": 28.5730210837,
      "lng": -79.0088343234,
      "rangeKm": 210.4695275969,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 261
    },
    {
      "altitudeKm": 143.1698745401,
      "azimuthDegs": 85.5984465825,
      "elevationDegs": 41.4982795865,
      "lat": 28.5727829955,
      "lng": -78.9866137934,
      "rangeKm": 213.0736791855,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 262
    },
    {
      "altitudeKm": 144.6222814805,
      "azimuthDegs": 85.6586611198,
      "elevationDegs": 41.3756733821,
      "lat": 28.5725393984,
      "lng": -78.9641561604,
      "rangeKm": 215.7039704161,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 263
    },
    {
      "altitudeKm": 146.0854028239,
      "azimuthDegs": 85.7177950357,
      "elevationDegs": 41.2535114542,
      "lat": 28.5722906447,
      "lng": -78.941461123,
      "rangeKm": 218.3602607091,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 264
    },
    {
      "altitudeKm": 147.5593454778,
      "azimuthDegs": 85.7758466093,
      "elevationDegs": 41.1318011243,
      "lat": 28.5720372299,
      "lng": -78.9185269933,
      "rangeKm": 221.0427761323,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 265
    },
    {
      "altitudeKm": 149.0439843053,
      "azimuthDegs": 85.832843672,
      "elevationDegs": 41.01055428,
      "lat": 28.5717787552,
      "lng": -78.8953548364,
      "rangeKm": 223.7513785754,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 266
    },
    {
      "altitudeKm": 150.5392112616,
      "azimuthDegs": 85.8888185536,
      "elevationDegs": 40.8897681516,
      "lat": 28.5715147406,
      "lng": -78.871944737,
      "rangeKm": 226.4860132138,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 267
    },
    {
      "altitudeKm": 152.0450173651,
      "azimuthDegs": 85.9437883778,
      "elevationDegs": 40.769407845,
      "lat": 28.5712452342,
      "lng": -78.8482938425,
      "rangeKm": 229.2469119697,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 268
    },
    {
      "altitudeKm": 153.5613475708,
      "azimuthDegs": 85.9977893807,
      "elevationDegs": 40.6495170584,
      "lat": 28.5709695022,
      "lng": -78.8244043944,
      "rangeKm": 232.0338959457,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 269
    },
    {
      "altitudeKm": 155.0881383827,
      "azimuthDegs": 86.0507899333,
      "elevationDegs": 40.5300624901,
      "lat": 28.5706888577,
      "lng": -78.8002743308,
      "rangeKm": 234.8471083011,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 270
    },
    {
      "altitudeKm": 156.6252661184,
      "azimuthDegs": 86.1028169473,
      "elevationDegs": 40.4110539519,
      "lat": 28.5704028961,
      "lng": -78.7759047218,
      "rangeKm": 237.6864119428,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 271
    },
    {
      "altitudeKm": 158.1727618981,
      "azimuthDegs": 86.1539291029,
      "elevationDegs": 40.2924691666,
      "lat": 28.5701104708,
      "lng": -78.7512929185,
      "rangeKm": 240.5520468486,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 272
    },
    {
      "altitudeKm": 159.7304472686,
      "azimuthDegs": 86.2041050607,
      "elevationDegs": 40.1743188006,
      "lat": 28.5698124432,
      "lng": -78.726440778,
      "rangeKm": 243.4437868659,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 273
    },
    {
      "altitudeKm": 161.2983848648,
      "azimuthDegs": 86.2533707278,
      "elevationDegs": 40.05660077,
      "lat": 28.5695085186,
      "lng": -78.7013466345,
      "rangeKm": 246.361824109,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 274
    },
    {
      "altitudeKm": 162.8763182769,
      "azimuthDegs": 86.3017635229,
      "elevationDegs": 39.9392975362,
      "lat": 28.5691979278,
      "lng": -78.6760113674,
      "rangeKm": 249.3059464656,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 275
    },
    {
      "altitudeKm": 164.4644927222,
      "azimuthDegs": 86.3492690812,
      "elevationDegs": 39.8224401233,
      "lat": 28.5688815055,
      "lng": -78.6504335117,
      "rangeKm": 252.2764575747,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 276
    },
    {
      "altitudeKm": 166.0625836284,
      "azimuthDegs": 86.3959149542,
      "elevationDegs": 39.7059809644,
      "lat": 28.5685588092,
      "lng": -78.624612776,
      "rangeKm": 255.2731896495,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 277
    },
    {
      "altitudeKm": 167.6706206968,
      "azimuthDegs": 86.4417170235,
      "elevationDegs": 39.5899414696,
      "lat": 28.5682297028,
      "lng": -78.5985494572,
      "rangeKm": 258.2961673716,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 278
    },
    {
      "altitudeKm": 169.288517389,
      "azimuthDegs": 86.4867067901,
      "elevationDegs": 39.4743059886,
      "lat": 28.5678936061,
      "lng": -78.5722426815,
      "rangeKm": 261.3454248377,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 279
    },
    {
      "altitudeKm": 170.9162658198,
      "azimuthDegs": 86.5308615946,
      "elevationDegs": 39.3590847899,
      "lat": 28.567551564,
      "lng": -78.5456925525,
      "rangeKm": 264.4209808403,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 280
    },
    {
      "altitudeKm": 172.5537324222,
      "azimuthDegs": 86.5742371516,
      "elevationDegs": 39.244255236,
      "lat": 28.5672022211,
      "lng": -78.5188981993,
      "rangeKm": 267.5228359408,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 281
    },
    {
      "altitudeKm": 174.2007761463,
      "azimuthDegs": 86.6168226186,
      "elevationDegs": 39.1298034529,
      "lat": 28.5668462589,
      "lng": -78.4918595296,
      "rangeKm": 270.6509352661,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 282
    },
    {
      "altitudeKm": 175.8575798107,
      "azimuthDegs": 86.6586254477,
      "elevationDegs": 39.0157622928,
      "lat": 28.5664838097,
      "lng": -78.4645760721,
      "rangeKm": 273.8054629736,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 283
    },
    {
      "altitudeKm": 177.5239934861,
      "azimuthDegs": 86.6996951518,
      "elevationDegs": 38.9021198058,
      "lat": 28.566113598,
      "lng": -78.4370479365,
      "rangeKm": 276.9863358332,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 284
    },
    {
      "altitudeKm": 179.1997911098,
      "azimuthDegs": 86.7400090292,
      "elevationDegs": 38.7888453644,
      "lat": 28.5657367114,
      "lng": -78.4092748335,
      "rangeKm": 280.1934600275,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 285
    },
    {
      "altitudeKm": 180.8849749405,
      "azimuthDegs": 86.7796079818,
      "elevationDegs": 38.6759408072,
      "lat": 28.565352147,
      "lng": -78.3812560982,
      "rangeKm": 283.42691279,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 286
    },
    {
      "altitudeKm": 182.579643308,
      "azimuthDegs": 86.8184864021,
      "elevationDegs": 38.5634213154,
      "lat": 28.5649604417,
      "lng": -78.3529910692,
      "rangeKm": 286.6868387653,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 287
    },
    {
      "altitudeKm": 184.2835439671,
      "azimuthDegs": 86.8566759293,
      "elevationDegs": 38.4512693319,
      "lat": 28.5645608102,
      "lng": -78.3244806324,
      "rangeKm": 289.9730320062,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 288
    },
    {
      "altitudeKm": 185.9967759243,
      "azimuthDegs": 86.8941710389,
      "elevationDegs": 38.3394993992,
      "lat": 28.5641537861,
      "lng": -78.2957241291,
      "rangeKm": 293.2856371787,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 289
    },
    {
      "altitudeKm": 187.71910288,
      "azimuthDegs": 86.9309792777,
      "elevationDegs": 38.2280563508,
      "lat": 28.5637395065,
      "lng": -78.2667193265,
      "rangeKm": 296.6247013673,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 290
    },
    {
      "altitudeKm": 189.4505615846,
      "azimuthDegs": 86.9671402539,
      "elevationDegs": 38.1169860689,
      "lat": 28.5633168063,
      "lng": -78.2374686879,
      "rangeKm": 299.990084623,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 291
    },
    {
      "altitudeKm": 191.1911661959,
      "azimuthDegs": 87.0026372926,
      "elevationDegs": 38.0062869366,
      "lat": 28.5628866236,
      "lng": -78.2079713581,
      "rangeKm": 303.381892824,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 292
    },
    {
      "altitudeKm": 192.940719945,
      "azimuthDegs": 87.0375093778,
      "elevationDegs": 37.8959139628,
      "lat": 28.5624479104,
      "lng": -78.1782253096,
      "rangeKm": 306.8001809947,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 293
    },
    {
      "altitudeKm": 194.6991361982,
      "azimuthDegs": 87.0717515978,
      "elevationDegs": 37.7858875773,
      "lat": 28.5620010882,
      "lng": -78.1482326025,
      "rangeKm": 310.2447647867,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 294
    },
    {
      "altitudeKm": 196.4664865556,
      "azimuthDegs": 87.105382233,
      "elevationDegs": 37.6762060721,
      "lat": 28.5615458243,
      "lng": -78.1179916177,
      "rangeKm": 313.7158430753,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 295
    },
    {
      "altitudeKm": 198.2426054377,
      "azimuthDegs": 87.1384150222,
      "elevationDegs": 37.5668413461,
      "lat": 28.5610819201,
      "lng": -78.0875013017,
      "rangeKm": 317.2134197825,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 296
    },
    {
      "altitudeKm": 200.0274548217,
      "azimuthDegs": 87.1708256688,
      "elevationDegs": 37.4578190209,
      "lat": 28.5606105614,
      "lng": -78.0567637149,
      "rangeKm": 320.737343042,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 297
    },
    {
      "altitudeKm": 201.821030234,
      "azimuthDegs": 87.2026743577,
      "elevationDegs": 37.3491164586,
      "lat": 28.5601297863,
      "lng": -78.0257762747,
      "rangeKm": 324.2878343269,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 298
    },
    {
      "altitudeKm": 203.4426181973,
      "azimuthDegs": 87.2308553543,
      "elevationDegs": 37.2515661924,
      "lat": 28.559689318,
      "lng": -77.997675306,
      "rangeKm": 327.5058541146,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 299
    },
    {
      "altitudeKm": 203.6232646689,
      "azimuthDegs": 87.233958844,
      "elevationDegs": 37.2407437627,
      "lat": 28.5596399235,
      "lng": -77.9945400742,
      "rangeKm": 327.864796023,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 299
    },
    {
      "altitudeKm": 203.9845904735,
      "azimuthDegs": 87.2401436937,
      "elevationDegs": 37.2191221614,
      "lat": 28.5595409864,
      "lng": -77.9882660547,
      "rangeKm": 328.5830265241,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 299
    },
    {
      "altitudeKm": 204.3458307544,
      "azimuthDegs": 87.2463079872,
      "elevationDegs": 37.1975271331,
      "lat": 28.5594414719,
      "lng": -77.9819884486,
      "rangeKm": 329.3015462316,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 299
    },
    {
      "altitudeKm": 204.7068448284,
      "azimuthDegs": 87.2524335938,
      "elevationDegs": 37.1759694888,
      "lat": 28.5593420495,
      "lng": -77.9757099554,
      "rangeKm": 330.0200569757,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 300
    },
    {
      "altitudeKm": 205.0676525206,
      "azimuthDegs": 87.2585471917,
      "elevationDegs": 37.1544651201,
      "lat": 28.5592416297,
      "lng": -77.9694317495,
      "rangeKm": 330.7384772759,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 300
    },
    {
      "altitudeKm": 205.4280637143,
      "azimuthDegs": 87.2646261232,
      "elevationDegs": 37.1329940775,
      "lat": 28.5591411172,
      "lng": -77.9631543856,
      "rangeKm": 331.4566450875,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 300
    },
    {
      "altitudeKm": 205.7882980005,
      "azimuthDegs": 87.2706716389,
      "elevationDegs": 37.1115899445,
      "lat": 28.5590404622,
      "lng": -77.9568782756,
      "rangeKm": 332.174667596,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 300
    },
    {
      "altitudeKm": 206.1482399845,
      "azimuthDegs": 87.2766956566,
      "elevationDegs": 37.0902241314,
      "lat": 28.5589392188,
      "lng": -77.9506022439,
      "rangeKm": 332.8925620584,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 300
    },
    {
      "altitudeKm": 206.5077670893,
      "azimuthDegs": 87.2826830159,
      "elevationDegs": 37.0688989005,
      "lat": 28.5588379701,
      "lng": -77.944328019,
      "rangeKm": 333.6101170665,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 301
    },
    {
      "altitudeKm": 206.8671355743,
      "azimuthDegs": 87.2886403337,
      "elevationDegs": 37.0476312524,
      "lat": 28.5587364921,
      "lng": -77.9380540772,
      "rangeKm": 334.3276135692,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 301
    },
    {
      "altitudeKm": 207.2261639382,
      "azimuthDegs": 87.294595542,
      "elevationDegs": 37.0263949706,
      "lat": 28.5586336584,
      "lng": -77.9317802108,
      "rangeKm": 335.0449500156,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 301
    },
    {
      "altitudeKm": 207.5849110547,
      "azimuthDegs": 87.3005058126,
      "elevationDegs": 37.0052180884,
      "lat": 28.5585311788,
      "lng": -77.9255083549,
      "rangeKm": 335.7620164166,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 301
    },
    {
      "altitudeKm": 207.9433658349,
      "azimuthDegs": 87.3063954966,
      "elevationDegs": 36.9840779806,
      "lat": 28.5584281113,
      "lng": -77.9192365725,
      "rangeKm": 336.4789548067,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 301
    },
    {
      "altitudeKm": 208.3015577004,
      "azimuthDegs": 87.3122434256,
      "elevationDegs": 36.9629884566,
      "lat": 28.5583253106,
      "lng": -77.9129658306,
      "rangeKm": 337.1957101076,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 302
    },
    {
      "altitudeKm": 208.659409422,
      "azimuthDegs": 87.31808979,
      "elevationDegs": 36.9419291349,
      "lat": 28.5582211547,
      "lng": -77.9066951605,
      "rangeKm": 337.9123054695,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 302
    },
    {
      "altitudeKm": 209.0169797969,
      "azimuthDegs": 87.3238921833,
      "elevationDegs": 36.9209278006,
      "lat": 28.5581173533,
      "lng": -77.9004264965,
      "rangeKm": 338.6286305956,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 302
    },
    {
      "altitudeKm": 209.3742578122,
      "azimuthDegs": 87.3296747007,
      "elevationDegs": 36.8999620598,
      "lat": 28.5580129644,
      "lng": -77.8941579023,
      "rangeKm": 339.3448277538,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 302
    },
    {
      "altitudeKm": 209.7312912809,
      "azimuthDegs": 87.3354189868,
      "elevationDegs": 36.8790376214,
      "lat": 28.557908755,
      "lng": -77.8878893772,
      "rangeKm": 340.0609288801,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 302
    },
    {
      "altitudeKm": 210.0879477239,
      "azimuthDegs": 87.341157011,
      "elevationDegs": 36.8581582294,
      "lat": 28.5578033661,
      "lng": -77.881622855,
      "rangeKm": 340.7766958657,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 303
    },
    {
      "altitudeKm": 210.4444454737,
      "azimuthDegs": 87.3468668873,
      "elevationDegs": 36.8373330737,
      "lat": 28.5576977488,
      "lng": -77.8753566077,
      "rangeKm": 341.4924039788,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 303
    },
    {
      "altitudeKm": 210.8005465255,
      "azimuthDegs": 87.352545258,
      "elevationDegs": 36.8165367718,
      "lat": 28.55759204,
      "lng": -77.8690911861,
      "rangeKm": 342.2078598003,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 303
    },
    {
      "altitudeKm": 211.1563367359,
      "azimuthDegs": 87.3582019928,
      "elevationDegs": 36.7957825791,
      "lat": 28.5574858318,
      "lng": -77.862826797,
      "rangeKm": 342.9231005243,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 303
    },
    {
      "altitudeKm": 211.5119682343,
      "azimuthDegs": 87.3638311602,
      "elevationDegs": 36.7750816861,
      "lat": 28.5573793953,
      "lng": -77.8565626804,
      "rangeKm": 343.6382822863,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 303
    },
    {
      "altitudeKm": 211.8672029999,
      "azimuthDegs": 87.3694294259,
      "elevationDegs": 36.7544088402,
      "lat": 28.5572728675,
      "lng": -77.8502993862,
      "rangeKm": 344.3532118282,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 304
    },
    {
      "altitudeKm": 212.2222127482,
      "azimuthDegs": 87.3750161656,
      "elevationDegs": 36.7337906286,
      "lat": 28.5571654326,
      "lng": -77.8440373299,
      "rangeKm": 345.0679633123,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 304
    },
    {
      "altitudeKm": 212.5768257284,
      "azimuthDegs": 87.3805723512,
      "elevationDegs": 36.7131999226,
      "lat": 28.5570579067,
      "lng": -77.8377760937,
      "rangeKm": 345.7824626303,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 304
    },
    {
      "altitudeKm": 214.3459201555,
      "azimuthDegs": 87.4080072696,
      "elevationDegs": 36.6108862036,
      "lat": 28.5565144708,
      "lng": -77.8064803399,
      "rangeKm": 349.352562971,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 305
    },
    {
      "altitudeKm": 216.1077586873,
      "azimuthDegs": 87.4349311104,
      "elevationDegs": 36.5073966055,
      "lat": 28.5559630693,
      "lng": -77.7749951681,
      "rangeKm": 352.9345237399,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 306
    },
    {
      "altitudeKm": 217.8623652311,
      "azimuthDegs": 87.4612033789,
      "elevationDegs": 36.4070312628,
      "lat": 28.5554026003,
      "lng": -77.7437373714,
      "rangeKm": 356.4956011126,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 307
    },
    {
      "altitudeKm": 219.6097637843,
      "azimuthDegs": 87.4869404971,
      "elevationDegs": 36.3075953073,
      "lat": 28.5548329555,
      "lng": -77.7124995205,
      "rangeKm": 360.0520896862,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 308
    },
    {
      "altitudeKm": 221.3498856399,
      "azimuthDegs": 87.5121536508,
      "elevationDegs": 36.2090374905,
      "lat": 28.5542544665,
      "lng": -77.6812803205,
      "rangeKm": 363.6040418842,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 309
    },
    {
      "altitudeKm": 223.0827963651,
      "azimuthDegs": 87.5368667224,
      "elevationDegs": 36.1113483969,
      "lat": 28.5536668274,
      "lng": -77.6500808276,
      "rangeKm": 367.1514082428,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 310
    },
    {
      "altitudeKm": 224.8084751885,
      "azimuthDegs": 87.5610727107,
      "elevationDegs": 36.0144852342,
      "lat": 28.5530711344,
      "lng": -77.6188997472,
      "rangeKm": 370.6942734519,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 311
    },
    {
      "altitudeKm": 226.5269586706,
      "azimuthDegs": 87.5848133176,
      "elevationDegs": 35.9184278127,
      "lat": 28.5524662268,
      "lng": -77.5877371724,
      "rangeKm": 374.2326451368,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 312
    },
    {
      "altitudeKm": 228.2382742378,
      "azimuthDegs": 87.6080847434,
      "elevationDegs": 35.8231623559,
      "lat": 28.5518529716,
      "lng": -77.5565939493,
      "rangeKm": 377.7664689387,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 313
    },
    {
      "altitudeKm": 229.9422579371,
      "azimuthDegs": 87.6309279613,
      "elevationDegs": 35.728633332,
      "lat": 28.5512301676,
      "lng": -77.5254687837,
      "rangeKm": 381.2957382892,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 314
    },
    {
      "altitudeKm": 231.4697889101,
      "azimuthDegs": 87.6511097748,
      "elevationDegs": 35.6441997011,
      "lat": 28.5506625253,
      "lng": -77.4974722808,
      "rangeKm": 384.4682612322,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 315
    },
    {
      "altitudeKm": 231.639118499,
      "azimuthDegs": 87.6533144082,
      "elevationDegs": 35.6348520869,
      "lat": 28.5505998048,
      "lng": -77.4943627334,
      "rangeKm": 384.8204968558,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 315
    },
    {
      "altitudeKm": 231.9775936616,
      "azimuthDegs": 87.6577497434,
      "elevationDegs": 35.616179686,
      "lat": 28.5504722721,
      "lng": -77.4881439138,
      "rangeKm": 385.5248721971,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 315
    },
    {
      "altitudeKm": 232.315909683,
      "azimuthDegs": 87.6621659573,
      "elevationDegs": 35.5975457077,
      "lat": 28.5503445155,
      "lng": -77.4819253182,
      "rangeKm": 386.2291879884,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 315
    },
    {
      "altitudeKm": 232.6538472742,
      "azimuthDegs": 87.6665622878,
      "elevationDegs": 35.5789204628,
      "lat": 28.5502165824,
      "lng": -77.4757065185,
      "rangeKm": 386.9333423333,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 316
    },
    {
      "altitudeKm": 232.9915399909,
      "azimuthDegs": 87.6709313143,
      "elevationDegs": 35.5603212804,
      "lat": 28.5500888315,
      "lng": -77.4694877275,
      "rangeKm": 387.6374016017,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 316
    },
    {
      "altitudeKm": 233.328958936,
      "azimuthDegs": 87.6753113106,
      "elevationDegs": 35.5417559546,
      "lat": 28.5499594178,
      "lng": -77.4632701207,
      "rangeKm": 388.3412518334,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 316
    },
    {
      "altitudeKm": 233.6661998717,
      "azimuthDegs": 87.6796504223,
      "elevationDegs": 35.5232150261,
      "lat": 28.5498308604,
      "lng": -77.4570515588,
      "rangeKm": 389.0451259715,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 316
    },
    {
      "altitudeKm": 234.0030812867,
      "azimuthDegs": 87.6839922144,
      "elevationDegs": 35.50469562,
      "lat": 28.5497010464,
      "lng": -77.4508339656,
      "rangeKm": 389.7487556105,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 316
    },
    {
      "altitudeKm": 234.339870469,
      "azimuthDegs": 87.6883017858,
      "elevationDegs": 35.4862122782,
      "lat": 28.5495716826,
      "lng": -77.4446156301,
      "rangeKm": 390.4524447383,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 317
    },
    {
      "altitudeKm": 234.6762334939,
      "azimuthDegs": 87.6926079297,
      "elevationDegs": 35.4677315808,
      "lat": 28.5494413779,
      "lng": -77.4383970853,
      "rangeKm": 391.1559423694,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 317
    },
    {
      "altitudeKm": 235.0124374326,
      "azimuthDegs": 87.6968957703,
      "elevationDegs": 35.449287951,
      "lat": 28.5493108493,
      "lng": -77.4321787592,
      "rangeKm": 391.8593806541,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 317
    },
    {
      "altitudeKm": 235.3484822881,
      "azimuthDegs": 87.7011654174,
      "elevationDegs": 35.4308811804,
      "lat": 28.5491800967,
      "lng": -77.425960651,
      "rangeKm": 392.5627595572,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 317
    },
    {
      "altitudeKm": 235.68412015,
      "azimuthDegs": 87.7054339127,
      "elevationDegs": 35.4124701226,
      "lat": 28.5490483127,
      "lng": -77.4197413694,
      "rangeKm": 393.2660356788,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 317
    },
    {
      "altitudeKm": 236.0196467536,
      "azimuthDegs": 87.7096686912,
      "elevationDegs": 35.3941009641,
      "lat": 28.548917069,
      "lng": -77.4135223045,
      "rangeKm": 393.9692830241,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 318
    },
    {
      "altitudeKm": 236.3548807921,
      "azimuthDegs": 87.7138929776,
      "elevationDegs": 35.3757510494,
      "lat": 28.5487852428,
      "lng": -77.4073032411,
      "rangeKm": 394.6724052334,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 318
    },
    {
      "altitudeKm": 236.6898222753,
      "azimuthDegs": 87.7181068332,
      "elevationDegs": 35.3574202568,
      "lat": 28.5486528341,
      "lng": -77.4010841783,
      "rangeKm": 395.3754023941,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 318
    },
    {
      "altitudeKm": 237.024538173,
      "azimuthDegs": 87.7222968226,
      "elevationDegs": 35.3391072354,
      "lat": 28.5485205164,
      "lng": -77.3948641539,
      "rangeKm": 396.078393501,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 318
    },
    {
      "altitudeKm": 237.3590472754,
      "azimuthDegs": 87.7264847548,
      "elevationDegs": 35.3208248726,
      "lat": 28.5483872106,
      "lng": -77.3886443439,
      "rangeKm": 396.7812950063,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 318
    },
    {
      "altitudeKm": 237.6933308446,
      "azimuthDegs": 87.7306490108,
      "elevationDegs": 35.3025600356,
      "lat": 28.5482539955,
      "lng": -77.382423571,
      "rangeKm": 397.48419058,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 319
    },
    {
      "altitudeKm": 238.0274076486,
      "azimuthDegs": 87.7348113147,
      "elevationDegs": 35.2843255583,
      "lat": 28.5481197922,
      "lng": -77.3762030115,
      "rangeKm": 398.1869966324,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 319
    },
    {
      "altitudeKm": 238.3611732554,
      "azimuthDegs": 87.7389419764,
      "elevationDegs": 35.2660966621,
      "lat": 28.5479860851,
      "lng": -77.3699812727,
      "rangeKm": 398.889761671,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 319
    },
    {
      "altitudeKm": 238.6947321312,
      "azimuthDegs": 87.7430708212,
      "elevationDegs": 35.2478978694,
      "lat": 28.5478513897,
      "lng": -77.3637597459,
      "rangeKm": 399.5924373158,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 319
    },
    {
      "altitudeKm": 239.0279985676,
      "azimuthDegs": 87.7471897371,
      "elevationDegs": 35.2297173426,
      "lat": 28.5477161118,
      "lng": -77.3575382151,
      "rangeKm": 400.2949884276,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 319
    },
    {
      "altitudeKm": 239.3611730975,
      "azimuthDegs": 87.7512782092,
      "elevationDegs": 35.2115706763,
      "lat": 28.5475812825,
      "lng": -77.351315934,
      "rangeKm": 400.9975994378,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 320
    },
    {
      "altitudeKm": 239.6940074333,
      "azimuthDegs": 87.7553722739,
      "elevationDegs": 35.1934367802,
      "lat": 28.5474451068,
      "lng": -77.3450936476,
      "rangeKm": 401.7000557149,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 320
    },
    {
      "altitudeKm": 240.0266164159,
      "azimuthDegs": 87.7594433291,
      "elevationDegs": 35.1753196284,
      "lat": 28.5473090211,
      "lng": -77.3388703943,
      "rangeKm": 402.4025065678,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 320
    },
    {
      "altitudeKm": 241.6862696957,
      "azimuthDegs": 87.7795728261,
      "elevationDegs": 35.085058853,
      "lat": 28.5466240593,
      "lng": -77.3077483683,
      "rangeKm": 405.9139666547,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 321
    },
    {
      "altitudeKm": 243.3401453777,
      "azimuthDegs": 87.7993807099,
      "elevationDegs": 34.9952949521,
      "lat": 28.5459291673,
      "lng": -77.2766143766,
      "rangeKm": 409.424213645,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 322
    },
    {
      "altitudeKm": 244.9882270165,
      "azimuthDegs": 87.8188738222,
      "elevationDegs": 34.906020471,
      "lat": 28.5452244288,
      "lng": -77.2454693066,
      "rangeKm": 412.9331675443,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 323
    },
    {
      "altitudeKm": 246.630586841,
      "azimuthDegs": 87.8380135637,
      "elevationDegs": 34.8190103131,
      "lat": 28.544510497,
      "lng": -77.2145209604,
      "rangeKm": 416.424181039,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 324
    },
    {
      "altitudeKm": 248.2672805687,
      "azimuthDegs": 87.8568660458,
      "elevationDegs": 34.7306537151,
      "lat": 28.5437881024,
      "lng": -77.1833505839,
      "rangeKm": 419.9309115603,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 325
    },
    {
      "altitudeKm": 249.8982476065,
      "azimuthDegs": 87.8754347731,
      "elevationDegs": 34.6427304989,
      "lat": 28.5430555591,
      "lng": -77.1521660354,
      "rangeKm": 423.436642856,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 326
    },
    {
      "altitudeKm": 251.5235194227,
      "azimuthDegs": 87.8937110168,
      "elevationDegs": 34.5552400882,
      "lat": 28.5423137126,
      "lng": -77.1209682033,
      "rangeKm": 426.9413252801,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 327
    },
    {
      "altitudeKm": 253.1431187782,
      "azimuthDegs": 87.911704261,
      "elevationDegs": 34.4681653042,
      "lat": 28.5415624605,
      "lng": -77.0897560585,
      "rangeKm": 430.4450574354,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 328
    },
    {
      "altitudeKm": 254.7569436669,
      "azimuthDegs": 87.929412578,
      "elevationDegs": 34.3814903029,
      "lat": 28.5408022892,
      "lng": -77.0585302689,
      "rangeKm": 433.9477257324,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 329
    },
    {
      "altitudeKm": 256.3651882057,
      "azimuthDegs": 87.9468598051,
      "elevationDegs": 34.2952204837,
      "lat": 28.540032288,
      "lng": -77.0272902459,
      "rangeKm": 437.4494973793,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 330
    },
    {
      "altitudeKm": 257.967730537,
      "azimuthDegs": 87.9640417197,
      "elevationDegs": 34.2093461269,
      "lat": 28.5392530368,
      "lng": -76.996037614,
      "rangeKm": 440.9501693502,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 331
    },
    {
      "altitudeKm": 259.5646331367,
      "azimuthDegs": 87.9809703016,
      "elevationDegs": 34.1238403965,
      "lat": 28.5384642461,
      "lng": -76.9647694318,
      "rangeKm": 444.450019639,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 332
    },
    {
      "altitudeKm": 261.1558119728,
      "azimuthDegs": 87.9976619446,
      "elevationDegs": 34.0387002626,
      "lat": 28.5376653305,
      "lng": -76.933487543,
      "rangeKm": 447.9488502873,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 333
    },
    {
      "altitudeKm": 262.7413657868,
      "azimuthDegs": 88.0140956296,
      "elevationDegs": 33.9539260299,
      "lat": 28.5368578028,
      "lng": -76.9021918769,
      "rangeKm": 451.4467298536,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 334
    },
    {
      "altitudeKm": 264.3212221907,
      "azimuthDegs": 88.0303060659,
      "elevationDegs": 33.8694937267,
      "lat": 28.5360400362,
      "lng": -76.8708814076,
      "rangeKm": 454.9436996938,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 335
    },
    {
      "altitudeKm": 265.8954600795,
      "azimuthDegs": 88.0462705711,
      "elevationDegs": 33.7854096266,
      "lat": 28.5352136362,
      "lng": -76.8395570204,
      "rangeKm": 458.4397387048,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 336
    },
    {
      "altitudeKm": 267.4639216493,
      "azimuthDegs": 88.0620160422,
      "elevationDegs": 33.7016403425,
      "lat": 28.5343773789,
      "lng": -76.8082174665,
      "rangeKm": 461.9348556534,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 337
    },
    {
      "altitudeKm": 269.0268291245,
      "azimuthDegs": 88.0775484592,
      "elevationDegs": 33.6182030533,
      "lat": 28.5335312087,
      "lng": -76.7768631235,
      "rangeKm": 465.4291566388,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 338
    },
    {
      "altitudeKm": 270.5839946867,
      "azimuthDegs": 88.0928576282,
      "elevationDegs": 33.5350748056,
      "lat": 28.5326760146,
      "lng": -76.745494428,
      "rangeKm": 468.9224960804,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 339
    },
    {
      "altitudeKm": 272.1355926272,
      "azimuthDegs": 88.1079623352,
      "elevationDegs": 33.4522680824,
      "lat": 28.531810981,
      "lng": -76.7141117587,
      "rangeKm": 472.4149505101,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 340
    },
    {
      "altitudeKm": 273.6814956648,
      "azimuthDegs": 88.1228571455,
      "elevationDegs": 33.3697452326,
      "lat": 28.5309367115,
      "lng": -76.6827126885,
      "rangeKm": 475.9066447296,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 341
    },
    {
      "altitudeKm": 275.2217045386,
      "azimuthDegs": 88.1375629738,
      "elevationDegs": 33.2875148591,
      "lat": 28.5300522227,
      "lng": -76.65129928,
      "rangeKm": 479.3974139392,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 342
    },
    {
      "altitudeKm": 276.7563180567,
      "azimuthDegs": 88.1520592451,
      "elevationDegs": 33.2055790322,
      "lat": 28.5291590234,
      "lng": -76.6198714631,
      "rangeKm": 482.8873260123,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 343
    },
    {
      "altitudeKm": 278.2852847459,
      "azimuthDegs": 88.1663785646,
      "elevationDegs": 33.1239120551,
      "lat": 28.5282553919,
      "lng": -76.5884272628,
      "rangeKm": 486.3765151072,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 344
    },
    {
      "altitudeKm": 279.8086151031,
      "azimuthDegs": 88.1805095984,
      "elevationDegs": 33.0425218579,
      "lat": 28.5273422676,
      "lng": -76.556968515,
      "rangeKm": 489.8648403796,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 345
    },
    {
      "altitudeKm": 281.3263329139,
      "azimuthDegs": 88.1944580962,
      "elevationDegs": 32.9613971976,
      "lat": 28.5264195433,
      "lng": -76.525494198,
      "rangeKm": 493.3524030445,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 346
    },
    {
      "altitudeKm": 282.8383356926,
      "azimuthDegs": 88.2082202466,
      "elevationDegs": 32.8805272018,
      "lat": 28.5254877047,
      "lng": -76.4940049657,
      "rangeKm": 496.8390916874,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 347
    },
    {
      "altitudeKm": 284.3447704578,
      "azimuthDegs": 88.221826306,
      "elevationDegs": 32.799915832,
      "lat": 28.5245450828,
      "lng": -76.4625002534,
      "rangeKm": 500.3250439561,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 348
    },
    {
      "altitudeKm": 285.8455176,
      "azimuthDegs": 88.2352552283,
      "elevationDegs": 32.7195427689,
      "lat": 28.5235932269,
      "lng": -76.4309795349,
      "rangeKm": 503.8102352187,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 349
    },
    {
      "altitudeKm": 287.3406660454,
      "azimuthDegs": 88.2485171162,
      "elevationDegs": 32.639411957,
      "lat": 28.5226317238,
      "lng": -76.3994429698,
      "rangeKm": 507.2947088426,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 350
    },
    {
      "altitudeKm": 288.8301339111,
      "azimuthDegs": 88.2616093901,
      "elevationDegs": 32.5595086778,
      "lat": 28.5216609619,
      "lng": -76.3678902587,
      "rangeKm": 510.7784444554,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 351
    },
    {
      "altitudeKm": 290.314074745,
      "azimuthDegs": 88.2745465598,
      "elevationDegs": 32.4798508247,
      "lat": 28.5206802253,
      "lng": -76.3363227428,
      "rangeKm": 514.2614261731,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 352
    },
    {
      "altitudeKm": 291.792294222,
      "azimuthDegs": 88.2873326612,
      "elevationDegs": 32.4004058651,
      "lat": 28.5196894476,
      "lng": -76.3047389418,
      "rangeKm": 517.7436649643,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 353
    },
    {
      "altitudeKm": 293.2648645099,
      "azimuthDegs": 88.2999608457,
      "elevationDegs": 32.3211688609,
      "lat": 28.5186892767,
      "lng": -76.2731378367,
      "rangeKm": 521.2252913272,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 354
    },
    {
      "altitudeKm": 294.7319182264,
      "azimuthDegs": 88.3124436728,
      "elevationDegs": 32.2421621827,
      "lat": 28.517679095,
      "lng": -76.2415217199,
      "rangeKm": 524.7061979909,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 355
    },
    {
      "altitudeKm": 296.1932403432,
      "azimuthDegs": 88.3247835065,
      "elevationDegs": 32.1633586164,
      "lat": 28.5166589332,
      "lng": -76.2098900578,
      "rangeKm": 528.1863061339,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 356
    },
    {
      "altitudeKm": 297.6490571109,
      "azimuthDegs": 88.3369695878,
      "elevationDegs": 32.0847623585,
      "lat": 28.5156296977,
      "lng": -76.1782411167,
      "rangeKm": 531.6658956997,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 357
    },
    {
      "altitudeKm": 299.0992557291,
      "azimuthDegs": 88.349025921,
      "elevationDegs": 32.006364977,
      "lat": 28.5145899589,
      "lng": -76.1465757767,
      "rangeKm": 535.1448323686,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 358
    },
    {
      "altitudeKm": 300.5437544883,
      "azimuthDegs": 88.3609493018,
      "elevationDegs": 31.9281533601,
      "lat": 28.5135401039,
      "lng": -76.1148937351,
      "rangeKm": 538.6230971597,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 359
    },
    {
      "altitudeKm": 301.9827166526,
      "azimuthDegs": 88.3727250222,
      "elevationDegs": 31.8501447132,
      "lat": 28.5124813333,
      "lng": -76.0831961032,
      "rangeKm": 542.1006964099,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 360
    },
    {
      "altitudeKm": 303.4160925808,
      "azimuthDegs": 88.3843803955,
      "elevationDegs": 31.7723182619,
      "lat": 28.5114119228,
      "lng": -76.0514809189,
      "rangeKm": 545.5777694831,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 361
    },
    {
      "altitudeKm": 304.8437583118,
      "azimuthDegs": 88.3959094988,
      "elevationDegs": 31.6946697336,
      "lat": 28.5103324566,
      "lng": -76.0197497711,
      "rangeKm": 549.0541154313,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 362
    },
    {
      "altitudeKm": 306.2658553845,
      "azimuthDegs": 88.4072960069,
      "elevationDegs": 31.6171952792,
      "lat": 28.5092442361,
      "lng": -75.9880006978,
      "rangeKm": 552.5299832166,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 363
    },
    {
      "altitudeKm": 307.6824413262,
      "azimuthDegs": 88.4185739722,
      "elevationDegs": 31.5399044644,
      "lat": 28.5081450368,
      "lng": -75.9562350484,
      "rangeKm": 556.0053001568,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 364
    },
    {
      "altitudeKm": 309.0933279144,
      "azimuthDegs": 88.4297330526,
      "elevationDegs": 31.4627804405,
      "lat": 28.507035743,
      "lng": -75.9244532272,
      "rangeKm": 559.4799261376,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 365
    },
    {
      "altitudeKm": 310.4986092697,
      "azimuthDegs": 88.4407675827,
      "elevationDegs": 31.3858157697,
      "lat": 28.5059168976,
      "lng": -75.892653274,
      "rangeKm": 562.9540832632,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 366
    },
    {
      "altitudeKm": 311.8983529895,
      "azimuthDegs": 88.4516842376,
      "elevationDegs": 31.3090195682,
      "lat": 28.5047881886,
      "lng": -75.8608363025,
      "rangeKm": 566.4277223762,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 367
    },
    {
      "altitudeKm": 313.2924560386,
      "azimuthDegs": 88.4624785717,
      "elevationDegs": 31.2323839231,
      "lat": 28.5036501007,
      "lng": -75.82900295,
      "rangeKm": 569.9007339221,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 368
    },
    {
      "altitudeKm": 314.6810025988,
      "azimuthDegs": 88.4731710613,
      "elevationDegs": 31.1559022497,
      "lat": 28.502501266,
      "lng": -75.7971514975,
      "rangeKm": 573.3733164594,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 369
    },
    {
      "altitudeKm": 316.0638897311,
      "azimuthDegs": 88.4837569985,
      "elevationDegs": 31.0795669947,
      "lat": 28.5013421692,
      "lng": -75.7652825818,
      "rangeKm": 576.8453609521,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 370
    },
    {
      "altitudeKm": 317.4412757341,
      "azimuthDegs": 88.4942348183,
      "elevationDegs": 31.003383547,
      "lat": 28.5001730532,
      "lng": -75.7333954301,
      "rangeKm": 580.3170278288,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 371
    },
    {
      "altitudeKm": 318.8130359077,
      "azimuthDegs": 88.5045988263,
      "elevationDegs": 30.9273482247,
      "lat": 28.4989945034,
      "lng": -75.7014916204,
      "rangeKm": 583.788116191,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 372
    },
    {
      "altitudeKm": 320.179233068,
      "azimuthDegs": 88.5148676025,
      "elevationDegs": 30.8514586472,
      "lat": 28.4978052525,
      "lng": -75.6695703807,
      "rangeKm": 587.2587331116,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 373
    },
    {
      "altitudeKm": 321.5398553412,
      "azimuthDegs": 88.5250288751,
      "elevationDegs": 30.7757039772,
      "lat": 28.4966063372,
      "lng": -75.6376304597,
      "rangeKm": 590.7289798807,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 374
    },
    {
      "altitudeKm": 322.8948371059,
      "azimuthDegs": 88.5350933052,
      "elevationDegs": 30.7000814246,
      "lat": 28.4953970894,
      "lng": -75.6056727306,
      "rangeKm": 594.1987508481,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 375
    },
    {
      "altitudeKm": 324.2443149931,
      "azimuthDegs": 88.5450580478,
      "elevationDegs": 30.6246002081,
      "lat": 28.494177853,
      "lng": -75.5736973663,
      "rangeKm": 597.668113955,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 376
    },
    {
      "altitudeKm": 325.5881599738,
      "azimuthDegs": 88.5549294701,
      "elevationDegs": 30.5492458459,
      "lat": 28.4929482558,
      "lng": -75.5417040561,
      "rangeKm": 601.1370262679,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 377
    },
    {
      "altitudeKm": 326.9264455729,
      "azimuthDegs": 88.5647007078,
      "elevationDegs": 30.4740160736,
      "lat": 28.4917089352,
      "lng": -75.5096917901,
      "rangeKm": 604.6056186959,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 378
    },
    {
      "altitudeKm": 328.259191111,
      "azimuthDegs": 88.5743871159,
      "elevationDegs": 30.3989161976,
      "lat": 28.4904588283,
      "lng": -75.4776616839,
      "rangeKm": 608.073814494,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 379
    },
    {
      "altitudeKm": 329.5863630359,
      "azimuthDegs": 88.5839755879,
      "elevationDegs": 30.3239396103,
      "lat": 28.4891990708,
      "lng": -75.4456134255,
      "rangeKm": 611.5416233924,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 380
    },
    {
      "altitudeKm": 330.9079175082,
      "azimuthDegs": 88.5934773309,
      "elevationDegs": 30.2490802585,
      "lat": 28.4879288941,
      "lng": -75.4135469458,
      "rangeKm": 615.00903208,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 381
    },
    {
      "altitudeKm": 332.223880585,
      "azimuthDegs": 88.6028949484,
      "elevationDegs": 30.1743324779,
      "lat": 28.4866481802,
      "lng": -75.3814612361,
      "rangeKm": 618.476145669,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 382
    },
    {
      "altitudeKm": 333.5343667952,
      "azimuthDegs": 88.6122244118,
      "elevationDegs": 30.0997089842,
      "lat": 28.4853573752,
      "lng": -75.3493574128,
      "rangeKm": 621.942938845,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 383
    },
    {
      "altitudeKm": 334.8392472795,
      "azimuthDegs": 88.6214716091,
      "elevationDegs": 30.025196126,
      "lat": 28.4840561063,
      "lng": -75.3172351622,
      "rangeKm": 625.4093699946,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 384
    },
    {
      "altitudeKm": 336.1384886221,
      "azimuthDegs": 88.6306238056,
      "elevationDegs": 29.9507878144,
      "lat": 28.482745507,
      "lng": -75.2850941687,
      "rangeKm": 628.8754494422,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 385
    },
    {
      "altitudeKm": 337.4323244631,
      "azimuthDegs": 88.6397074933,
      "elevationDegs": 29.8764980031,
      "lat": 28.481423519,
      "lng": -75.2529341646,
      "rangeKm": 632.3413412508,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 386
    },
    {
      "altitudeKm": 338.7205291003,
      "azimuthDegs": 88.6486991055,
      "elevationDegs": 29.8023087282,
      "lat": 28.4800921696,
      "lng": -75.22075528,
      "rangeKm": 635.8069069385,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 387
    },
    {
      "altitudeKm": 340.0031185866,
      "azimuthDegs": 88.6576242014,
      "elevationDegs": 29.7282152263,
      "lat": 28.478749438,
      "lng": -75.1885567551,
      "rangeKm": 639.2722291061,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 388
    },
    {
      "altitudeKm": 341.2801698692,
      "azimuthDegs": 88.6664648072,
      "elevationDegs": 29.6542261255,
      "lat": 28.4773969185,
      "lng": -75.1563394588,
      "rangeKm": 642.7372790736,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 389
    },
    {
      "altitudeKm": 342.551709473,
      "azimuthDegs": 88.6752233661,
      "elevationDegs": 29.5803363416,
      "lat": 28.4760344907,
      "lng": -75.1241023854,
      "rangeKm": 646.2021622922,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 390
    },
    {
      "altitudeKm": 343.8176858721,
      "azimuthDegs": 88.6839217306,
      "elevationDegs": 29.5065507869,
      "lat": 28.474660449,
      "lng": -75.091847589,
      "rangeKm": 649.6666831807,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 391
    },
    {
      "altitudeKm": 345.0780963547,
      "azimuthDegs": 88.6925368127,
      "elevationDegs": 29.4328504175,
      "lat": 28.4732767566,
      "lng": -75.0595716934,
      "rangeKm": 653.1311283683,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 392
    },
    {
      "altitudeKm": 346.3329143511,
      "azimuthDegs": 88.7010804293,
      "elevationDegs": 29.3592469299,
      "lat": 28.4718825659,
      "lng": -75.0272776877,
      "rangeKm": 656.5952348694,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 393
    },
    {
      "altitudeKm": 347.5823445842,
      "azimuthDegs": 88.7095526326,
      "elevationDegs": 29.2857401244,
      "lat": 28.4704779031,
      "lng": -74.9949629464,
      "rangeKm": 660.0593465204,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 394
    },
    {
      "altitudeKm": 348.826057769,
      "azimuthDegs": 88.7179597519,
      "elevationDegs": 29.2123160237,
      "lat": 28.4690623524,
      "lng": -74.9626297069,
      "rangeKm": 663.5230930349,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 395
    },
    {
      "altitudeKm": 350.0642837646,
      "azimuthDegs": 88.7262920969,
      "elevationDegs": 29.1389812211,
      "lat": 28.4676367964,
      "lng": -74.9302762802,
      "rangeKm": 666.9867506505,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 396
    },
    {
      "altitudeKm": 351.2969790893,
      "azimuthDegs": 88.7345594552,
      "elevationDegs": 29.0657307348,
      "lat": 28.4662004665,
      "lng": -74.8979025983,
      "rangeKm": 670.4503074868,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 397
    },
    {
      "altitudeKm": 352.5241726532,
      "azimuthDegs": 88.742753339,
      "elevationDegs": 28.9925695446,
      "lat": 28.4647542041,
      "lng": -74.8655095276,
      "rangeKm": 673.9137084333,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 398
    },
    {
      "altitudeKm": 353.7457113481,
      "azimuthDegs": 88.7508883514,
      "elevationDegs": 28.9194791598,
      "lat": 28.4632967763,
      "lng": -74.8330958124,
      "rangeKm": 677.3769833085,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 399
    },
    {
      "altitudeKm": 354.9618413823,
      "azimuthDegs": 88.758956526,
      "elevationDegs": 28.8464823271,
      "lat": 28.4618289896,
      "lng": -74.8006628241,
      "rangeKm": 680.8401552027,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 400
    },
    {
      "altitudeKm": 356.1723018409,
      "azimuthDegs": 88.7669667799,
      "elevationDegs": 28.773556529,
      "lat": 28.4603501112,
      "lng": -74.7682099873,
      "rangeKm": 684.3031344602,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 401
    },
    {
      "altitudeKm": 357.3773232799,
      "azimuthDegs": 88.7749096239,
      "elevationDegs": 28.7007085611,
      "lat": 28.4588610196,
      "lng": -74.7357356207,
      "rangeKm": 687.7661967184,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 402
    },
    {
      "altitudeKm": 358.5768160575,
      "azimuthDegs": 88.7827925247,
      "elevationDegs": 28.6279395201,
      "lat": 28.4573611607,
      "lng": -74.7032415226,
      "rangeKm": 691.2291440446,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 403
    },
    {
      "altitudeKm": 359.7706995085,
      "azimuthDegs": 88.7906120151,
      "elevationDegs": 28.5552410985,
      "lat": 28.4558509102,
      "lng": -74.6707273688,
      "rangeKm": 694.6919633474,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 404
    },
    {
      "altitudeKm": 360.9591335213,
      "azimuthDegs": 88.7983661396,
      "elevationDegs": 28.4826195717,
      "lat": 28.4543305017,
      "lng": -74.6381924134,
      "rangeKm": 698.1548119321,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 405
    },
    {
      "altitudeKm": 362.1420037565,
      "azimuthDegs": 88.8060712937,
      "elevationDegs": 28.4100698293,
      "lat": 28.4527985244,
      "lng": -74.6056375201,
      "rangeKm": 701.6175608378,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 406
    },
    {
      "altitudeKm": 363.3194087988,
      "azimuthDegs": 88.8137219033,
      "elevationDegs": 28.3375884537,
      "lat": 28.451255496,
      "lng": -74.5730607582,
      "rangeKm": 705.0804346293,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 407
    },
    {
      "altitudeKm": 364.491245698,
      "azimuthDegs": 88.8213037122,
      "elevationDegs": 28.2651790522,
      "lat": 28.4497028654,
      "lng": -74.5404645959,
      "rangeKm": 708.5431644778,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 408
    },
    {
      "altitudeKm": 365.6575784349,
      "azimuthDegs": 88.8288407628,
      "elevationDegs": 28.1928324998,
      "lat": 28.4481383979,
      "lng": -74.5078464287,
      "rangeKm": 712.0060217743,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 409
    },
    {
      "altitudeKm": 366.8183749859,
      "azimuthDegs": 88.8363117161,
      "elevationDegs": 28.1205529714,
      "lat": 28.4465641846,
      "lng": -74.475207792,
      "rangeKm": 715.4688553863,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 410
    },
    {
      "altitudeKm": 367.973629031,
      "azimuthDegs": 88.843737647,
      "elevationDegs": 28.0483396142,
      "lat": 28.4449783163,
      "lng": -74.4425488746,
      "rangeKm": 718.9316561459,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 411
    },
    {
      "altitudeKm": 369.1234873175,
      "azimuthDegs": 88.8511051731,
      "elevationDegs": 27.9761925511,
      "lat": 28.4433820575,
      "lng": -74.409867749,
      "rangeKm": 722.3946727171,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 412
    },
    {
      "altitudeKm": 370.2677746935,
      "azimuthDegs": 88.8584170794,
      "elevationDegs": 27.9041061134,
      "lat": 28.4417752493,
      "lng": -74.3771659472,
      "rangeKm": 725.857681706,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 413
    },
    {
      "altitudeKm": 371.4065324845,
      "azimuthDegs": 88.865686129,
      "elevationDegs": 27.8320827706,
      "lat": 28.4401567333,
      "lng": -74.3444436596,
      "rangeKm": 729.3206980254,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 414
    },
    {
      "altitudeKm": 372.5399077511,
      "azimuthDegs": 88.8728991173,
      "elevationDegs": 27.7601227701,
      "lat": 28.4385277718,
      "lng": -74.3116989606,
      "rangeKm": 732.7839702524,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 415
    },
    {
      "altitudeKm": 373.6676775105,
      "azimuthDegs": 88.8800664795,
      "elevationDegs": 27.6882173042,
      "lat": 28.4368874575,
      "lng": -74.2789333789,
      "rangeKm": 736.2472515718,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 416
    },
    {
      "altitudeKm": 374.7899413195,
      "azimuthDegs": 88.8871734947,
      "elevationDegs": 27.6163718786,
      "lat": 28.435237271,
      "lng": -74.2461468446,
      "rangeKm": 739.7106029437,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 417
    },
    {
      "altitudeKm": 375.9067883528,
      "azimuthDegs": 88.8942344241,
      "elevationDegs": 27.5445838945,
      "lat": 28.4335758335,
      "lng": -74.213337695,
      "rangeKm": 743.1742269155,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 418
    },
    {
      "altitudeKm": 377.0181276501,
      "azimuthDegs": 88.9012558287,
      "elevationDegs": 27.4728543667,
      "lat": 28.4319025982,
      "lng": -74.1805077181,
      "rangeKm": 746.6379254768,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 419
    },
    {
      "altitudeKm": 378.1239505697,
      "azimuthDegs": 88.9082275024,
      "elevationDegs": 27.4011765674,
      "lat": 28.4302185756,
      "lng": -74.1476556553,
      "rangeKm": 750.1018049776,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 420
    },
    {
      "altitudeKm": 379.2242851592,
      "azimuthDegs": 88.9151417909,
      "elevationDegs": 27.3295553319,
      "lat": 28.4285246062,
      "lng": -74.1147823646,
      "rangeKm": 753.5658083901,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 421
    },
    {
      "altitudeKm": 380.3191733899,
      "azimuthDegs": 88.9220200906,
      "elevationDegs": 27.2579851104,
      "lat": 28.4268185618,
      "lng": -74.0818861875,
      "rangeKm": 757.0301151593,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 422
    },
    {
      "altitudeKm": 381.4085346218,
      "azimuthDegs": 88.9288498421,
      "elevationDegs": 27.1864667311,
      "lat": 28.4251017842,
      "lng": -74.0489686451,
      "rangeKm": 760.4945496071,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 423
    },
    {
      "altitudeKm": 382.4924820195,
      "azimuthDegs": 88.9356364634,
      "elevationDegs": 27.1150034028,
      "lat": 28.4233737536,
      "lng": -74.0160290071,
      "rangeKm": 763.9592437324,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 424
    },
    {
      "altitudeKm": 383.5709355738,
      "azimuthDegs": 88.9423766218,
      "elevationDegs": 27.0435879824,
      "lat": 28.4216348402,
      "lng": -73.9830669405,
      "rangeKm": 767.4241868779,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 425
    },
    {
      "altitudeKm": 384.6438755428,
      "azimuthDegs": 88.9490701471,
      "elevationDegs": 26.9722221514,
      "lat": 28.4198851365,
      "lng": -73.9500833015,
      "rangeKm": 770.8892984722,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 426
    },
    {
      "altitudeKm": 385.7113676475,
      "azimuthDegs": 88.9557296365,
      "elevationDegs": 26.9009060763,
      "lat": 28.4181233741,
      "lng": -73.9170773625,
      "rangeKm": 774.3546873506,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 427
    },
    {
      "altitudeKm": 386.7734515503,
      "azimuthDegs": 88.962337957,
      "elevationDegs": 26.829636571,
      "lat": 28.4163513067,
      "lng": -73.8840478643,
      "rangeKm": 777.8204836254,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 428
    },
    {
      "altitudeKm": 387.8300479261,
      "azimuthDegs": 88.9689117126,
      "elevationDegs": 26.7584201044,
      "lat": 28.4145673667,
      "lng": -73.8509977795,
      "rangeKm": 781.2863956249,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 429
    },
    {
      "altitudeKm": 388.8811132524,
      "azimuthDegs": 88.9754388817,
      "elevationDegs": 26.6872396049,
      "lat": 28.4127727226,
      "lng": -73.817923731,
      "rangeKm": 784.7526958055,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 430
    },
    {
      "altitudeKm": 389.9267967041,
      "azimuthDegs": 88.9819269046,
      "elevationDegs": 26.6161092812,
      "lat": 28.4109666898,
      "lng": -73.7848271104,
      "rangeKm": 788.2193507905,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 431
    },
    {
      "altitudeKm": 390.9669462607,
      "azimuthDegs": 88.9883788473,
      "elevationDegs": 26.545021518,
      "lat": 28.4091490022,
      "lng": -73.7517085046,
      "rangeKm": 791.6862334266,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 432
    },
    {
      "altitudeKm": 392.001770683,
      "azimuthDegs": 88.9947855568,
      "elevationDegs": 26.4739856465,
      "lat": 28.4073206343,
      "lng": -73.7185671905,
      "rangeKm": 795.1535206717,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 433
    },
    {
      "altitudeKm": 393.0310106197,
      "azimuthDegs": 89.0011542203,
      "elevationDegs": 26.4029827416,
      "lat": 28.4054808469,
      "lng": -73.685402561,
      "rangeKm": 798.6211343225,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 434
    },
    {
      "altitudeKm": 394.0548871842,
      "azimuthDegs": 89.0074857713,
      "elevationDegs": 26.3320275541,
      "lat": 28.4036295914,
      "lng": -73.6522150869,
      "rangeKm": 802.0891572929,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 435
    },
    {
      "altitudeKm": 395.0732730798,
      "azimuthDegs": 89.0137839456,
      "elevationDegs": 26.2611104144,
      "lat": 28.4017664881,
      "lng": -73.61900443,
      "rangeKm": 805.5575576392,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 436
    },
    {
      "altitudeKm": 396.08622059,
      "azimuthDegs": 89.0200422249,
      "elevationDegs": 26.1902337896,
      "lat": 28.3998922638,
      "lng": -73.5857705218,
      "rangeKm": 809.0263717205,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 437
    },
    {
      "altitudeKm": 397.0937344403,
      "azimuthDegs": 89.0262611199,
      "elevationDegs": 26.1193971643,
      "lat": 28.3980068981,
      "lng": -73.5525132935,
      "rangeKm": 812.495613325,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 438
    },
    {
      "altitudeKm": 398.0957944131,
      "azimuthDegs": 89.0324403924,
      "elevationDegs": 26.0486021626,
      "lat": 28.3961104847,
      "lng": -73.5192335977,
      "rangeKm": 815.9652014272,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 439
    },
    {
      "altitudeKm": 399.0924669039,
      "azimuthDegs": 89.0385917534,
      "elevationDegs": 25.9778491846,
      "lat": 28.3942017548,
      "lng": -73.4859307169,
      "rangeKm": 819.4352449154,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 440
    },
    {
      "altitudeKm": 400.0836605963,
      "azimuthDegs": 89.0447022301,
      "elevationDegs": 25.9071266131,
      "lat": 28.3922820937,
      "lng": -73.4526031168,
      "rangeKm": 822.9058295862,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 441
    },
    {
      "altitudeKm": 401.0694145609,
      "azimuthDegs": 89.0507744852,
      "elevationDegs": 25.8364441929,
      "lat": 28.3903513232,
      "lng": -73.4192528424,
      "rangeKm": 826.3768021569,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 442
    },
    {
      "altitudeKm": 402.0497953503,
      "azimuthDegs": 89.0568200427,
      "elevationDegs": 25.7658023699,
      "lat": 28.388408174,
      "lng": -73.3858791788,
      "rangeKm": 829.848271519,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 443
    },
    {
      "altitudeKm": 403.0246867015,
      "azimuthDegs": 89.0628253779,
      "elevationDegs": 25.6951917626,
      "lat": 28.3864541452,
      "lng": -73.3524815091,
      "rangeKm": 833.3202290091,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 444
    },
    {
      "altitudeKm": 403.9942144822,
      "azimuthDegs": 89.0688047674,
      "elevationDegs": 25.6246208619,
      "lat": 28.3844876961,
      "lng": -73.3190603142,
      "rangeKm": 836.7927109489,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 445
    },
    {
      "altitudeKm": 404.9582625023,
      "azimuthDegs": 89.0747448044,
      "elevationDegs": 25.5540803785,
      "lat": 28.3825103247,
      "lng": -73.285614975,
      "rangeKm": 840.2657089632,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 446
    },
    {
      "altitudeKm": 405.9169198926,
      "azimuthDegs": 89.0806494943,
      "elevationDegs": 25.4835757889,
      "lat": 28.380521623,
      "lng": -73.252145698,
      "rangeKm": 843.7392590269,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 447
    },
    {
      "altitudeKm": 406.870143979,
      "azimuthDegs": 89.0865258473,
      "elevationDegs": 25.4131038328,
      "lat": 28.3785208234,
      "lng": -73.2186524147,
      "rangeKm": 847.2133532305,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 448
    },
    {
      "altitudeKm": 407.8179871658,
      "azimuthDegs": 89.0923676469,
      "elevationDegs": 25.3426669849,
      "lat": 28.3765086505,
      "lng": -73.1851350566,
      "rangeKm": 850.6880272421,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 449
    },
    {
      "altitudeKm": 408.7604068114,
      "azimuthDegs": 89.0981818288,
      "elevationDegs": 25.2722620229,
      "lat": 28.3744843368,
      "lng": -73.1515935551,
      "rangeKm": 854.1632732769,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 450
    },
    {
      "altitudeKm": 409.6974553404,
      "azimuthDegs": 89.1039622252,
      "elevationDegs": 25.2018914206,
      "lat": 28.3724486065,
      "lng": -73.1180278418,
      "rangeKm": 857.6391268861,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 451
    },
    {
      "altitudeKm": 410.6290059616,
      "azimuthDegs": 89.1097122622,
      "elevationDegs": 25.1315462761,
      "lat": 28.3704010772,
      "lng": -73.0844375693,
      "rangeKm": 861.1155590581,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 452
    },
    {
      "altitudeKm": 411.5552794982,
      "azimuthDegs": 89.115432709,
      "elevationDegs": 25.0612405162,
      "lat": 28.3683417021,
      "lng": -73.0508232263,
      "rangeKm": 864.5926480297,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 453
    },
    {
      "altitudeKm": 412.4760650228,
      "azimuthDegs": 89.1211234988,
      "elevationDegs": 24.9909595798,
      "lat": 28.3662704841,
      "lng": -73.0171841862,
      "rangeKm": 868.0703436631,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 454
    },
    {
      "altitudeKm": 413.3913417824,
      "azimuthDegs": 89.1267843016,
      "elevationDegs": 24.9207050828,
      "lat": 28.3641875185,
      "lng": -72.9835212952,
      "rangeKm": 871.548564862,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 455
    },
    {
      "altitudeKm": 414.3013820032,
      "azimuthDegs": 89.1324172173,
      "elevationDegs": 24.8504870667,
      "lat": 28.3620925234,
      "lng": -72.9498332124,
      "rangeKm": 875.0275798643,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 456
    },
    {
      "altitudeKm": 415.2059966881,
      "azimuthDegs": 89.138015177,
      "elevationDegs": 24.7802958027,
      "lat": 28.3599863637,
      "lng": -72.9161202246,
      "rangeKm": 878.5072651336,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 457
    },
    {
      "altitudeKm": 416.1052274701,
      "azimuthDegs": 89.1435882218,
      "elevationDegs": 24.7101338625,
      "lat": 28.3578678867,
      "lng": -72.8823825437,
      "rangeKm": 881.9876344259,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 458
    },
    {
      "altitudeKm": 416.9989952732,
      "azimuthDegs": 89.1491332993,
      "elevationDegs": 24.6399953898,
      "lat": 28.3557374546,
      "lng": -72.848619819,
      "rangeKm": 885.4686811123,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 459
    },
    {
      "altitudeKm": 417.8873892382,
      "azimuthDegs": 89.1546540414,
      "elevationDegs": 24.5698857165,
      "lat": 28.3535946602,
      "lng": -72.8148322634,
      "rangeKm": 888.9504400534,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 460
    },
    {
      "altitudeKm": 418.7704618922,
      "azimuthDegs": 89.1601445165,
      "elevationDegs": 24.499807304,
      "lat": 28.3514402261,
      "lng": -72.7810198085,
      "rangeKm": 892.4329462092,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 461
    },
    {
      "altitudeKm": 419.6481342309,
      "azimuthDegs": 89.1656017853,
      "elevationDegs": 24.4297543515,
      "lat": 28.3492745132,
      "lng": -72.7471821019,
      "rangeKm": 895.9161930753,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 462
    },
    {
      "altitudeKm": 420.5204265751,
      "azimuthDegs": 89.1710424377,
      "elevationDegs": 24.3597249401,
      "lat": 28.3470955055,
      "lng": -72.7133184445,
      "rangeKm": 899.4002690719,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 463
    },
    {
      "altitudeKm": 421.3873026972,
      "azimuthDegs": 89.1764498602,
      "elevationDegs": 24.2897223078,
      "lat": 28.3449052919,
      "lng": -72.6794303107,
      "rangeKm": 902.8850184393,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 464
    },
    {
      "altitudeKm": 422.2488303557,
      "azimuthDegs": 89.1818344087,
      "elevationDegs": 24.219747228,
      "lat": 28.3427026018,
      "lng": -72.645517002,
      "rangeKm": 906.3705503057,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 465
    },
    {
      "altitudeKm": 423.1050044403,
      "azimuthDegs": 89.1871876709,
      "elevationDegs": 24.1497950117,
      "lat": 28.3404884199,
      "lng": -72.6115772514,
      "rangeKm": 909.8569751896,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 466
    },
    {
      "altitudeKm": 423.9557665916,
      "azimuthDegs": 89.1925240266,
      "elevationDegs": 24.0798689412,
      "lat": 28.3382610903,
      "lng": -72.5776131011,
      "rangeKm": 913.3440943429,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 467
    },
    {
      "altitudeKm": 424.8011855755,
      "azimuthDegs": 89.197829677,
      "elevationDegs": 24.0099653639,
      "lat": 28.3360222214,
      "lng": -72.5436223707,
      "rangeKm": 916.8321348975,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 468
    },
    {
      "altitudeKm": 425.6411928095,
      "azimuthDegs": 89.2031103262,
      "elevationDegs": 23.9400831366,
      "lat": 28.3337711651,
      "lng": -72.5096059032,
      "rangeKm": 920.3209947336,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 469
    },
    {
      "altitudeKm": 426.4758983881,
      "azimuthDegs": 89.2083628367,
      "elevationDegs": 23.870231768,
      "lat": 28.3315083799,
      "lng": -72.475564828,
      "rangeKm": 923.8106321766,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 470
    },
    {
      "altitudeKm": 427.3051816068,
      "azimuthDegs": 89.2135974657,
      "elevationDegs": 23.8003970683,
      "lat": 28.3292324949,
      "lng": -72.4414969651,
      "rangeKm": 927.3011927635,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 471
    },
    {
      "altitudeKm": 428.1292000646,
      "azimuthDegs": 89.2188051032,
      "elevationDegs": 23.7305911814,
      "lat": 28.3269447127,
      "lng": -72.4074034452,
      "rangeKm": 930.7926549942,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 472
    },
    {
      "altitudeKm": 428.9477437208,
      "azimuthDegs": 89.2239856611,
      "elevationDegs": 23.6608006566,
      "lat": 28.3246450299,
      "lng": -72.3732836214,
      "rangeKm": 934.2849740206,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 473
    },
    {
      "altitudeKm": 429.7610123468,
      "azimuthDegs": 89.2291462812,
      "elevationDegs": 23.5910343703,
      "lat": 28.322332536,
      "lng": -72.3391370916,
      "rangeKm": 937.7782987733,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 474
    },
    {
      "altitudeKm": 430.568957814,
      "azimuthDegs": 89.2342859543,
      "elevationDegs": 23.5212953528,
      "lat": 28.3200074502,
      "lng": -72.3049656086,
      "rangeKm": 941.2724511742,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 475
    },
    {
      "altitudeKm": 431.3714711297,
      "azimuthDegs": 89.239399915,
      "elevationDegs": 23.4515697444,
      "lat": 28.3176702687,
      "lng": -72.2707667018,
      "rangeKm": 944.7675995365,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 476
    },
    {
      "altitudeKm": 432.1685879142,
      "azimuthDegs": 89.2444903184,
      "elevationDegs": 23.3818658676,
      "lat": 28.3153208288,
      "lng": -72.2365424111,
      "rangeKm": 948.2635850786,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 477
    },
    {
      "altitudeKm": 432.9604509765,
      "azimuthDegs": 89.2495616732,
      "elevationDegs": 23.3121856725,
      "lat": 28.3129584801,
      "lng": -72.2022911393,
      "rangeKm": 951.7606331137,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 478
    },
    {
      "altitudeKm": 433.7470024152,
      "azimuthDegs": 89.254604784,
      "elevationDegs": 23.2425279627,
      "lat": 28.3105844453,
      "lng": -72.1680134355,
      "rangeKm": 955.2586627654,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 479
    },
    {
      "altitudeKm": 434.5281527244,
      "azimuthDegs": 89.2596313793,
      "elevationDegs": 23.1728874529,
      "lat": 28.3081972123,
      "lng": -72.1337092298,
      "rangeKm": 958.7576485474,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 480
    },
    {
      "altitudeKm": 435.3040021128,
      "azimuthDegs": 89.2646302401,
      "elevationDegs": 23.1032691992,
      "lat": 28.3057982434,
      "lng": -72.0993784524,
      "rangeKm": 962.2576444351,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 481
    },
    {
      "altitudeKm": 436.0744882304,
      "azimuthDegs": 89.2696135764,
      "elevationDegs": 23.0336664556,
      "lat": 28.3033859034,
      "lng": -72.0650201256,
      "rangeKm": 965.7587214945,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 482
    },
    {
      "altitudeKm": 436.8396097162,
      "azimuthDegs": 89.2745747281,
      "elevationDegs": 22.9640847151,
      "lat": 28.3009611569,
      "lng": -72.0306359958,
      "rangeKm": 969.2607212289,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 483
    },
    {
      "altitudeKm": 437.5994736584,
      "azimuthDegs": 89.2795094613,
      "elevationDegs": 22.8945234427,
      "lat": 28.2985244754,
      "lng": -71.9962241774,
      "rangeKm": 972.7638701674,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 484
    },
    {
      "altitudeKm": 438.3539635482,
      "azimuthDegs": 89.2844286678,
      "elevationDegs": 22.8249789511,
      "lat": 28.2960744702,
      "lng": -71.9617855087,
      "rangeKm": 976.268047094,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 485
    },
    {
      "altitudeKm": 439.1031322312,
      "azimuthDegs": 89.2893269194,
      "elevationDegs": 22.7554537087,
      "lat": 28.2936118592,
      "lng": -71.9273199199,
      "rangeKm": 979.7732859276,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 486
    },
    {
      "altitudeKm": 439.846901463,
      "azimuthDegs": 89.2942014697,
      "elevationDegs": 22.6859425835,
      "lat": 28.2911369971,
      "lng": -71.8928270447,
      "rangeKm": 983.2795831482,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 487
    },
    {
      "altitudeKm": 440.5854715296,
      "azimuthDegs": 89.2990590171,
      "elevationDegs": 22.6164541899,
      "lat": 28.2886489733,
      "lng": -71.8583064995,
      "rangeKm": 986.7870852669,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 488
    },
    {
      "altitudeKm": 441.3186257511,
      "azimuthDegs": 89.3038927286,
      "elevationDegs": 22.5469812357,
      "lat": 28.2861487712,
      "lng": -71.8237594337,
      "rangeKm": 990.2955780743,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 489
    },
    {
      "altitudeKm": 442.046591854,
      "azimuthDegs": 89.3087098131,
      "elevationDegs": 22.4775308596,
      "lat": 28.2836353558,
      "lng": -71.7891845599,
      "rangeKm": 993.805304204,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 490
    },
    {
      "altitudeKm": 442.7691332337,
      "azimuthDegs": 89.3135095088,
      "elevationDegs": 22.4080919097,
      "lat": 28.2811088425,
      "lng": -71.7545821191,
      "rangeKm": 997.3161271693,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 491
    },
    {
      "altitudeKm": 443.4863304685,
      "azimuthDegs": 89.3182870973,
      "elevationDegs": 22.3386654995,
      "lat": 28.2785698224,
      "lng": -71.719951135,
      "rangeKm": 1000.8281774419,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 492
    },
    {
      "altitudeKm": 444.1983011602,
      "azimuthDegs": 89.3230474651,
      "elevationDegs": 22.2692642953,
      "lat": 28.276017761,
      "lng": -71.6852939454,
      "rangeKm": 1004.3413107831,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 493
    },
    {
      "altitudeKm": 444.9049389318,
      "azimuthDegs": 89.3277861266,
      "elevationDegs": 22.1998755694,
      "lat": 28.2734531399,
      "lng": -71.6506080725,
      "rangeKm": 1007.8557002347,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 494
    },
    {
      "altitudeKm": 445.606277574,
      "azimuthDegs": 89.3325050642,
      "elevationDegs": 22.1305069637,
      "lat": 28.2708758045,
      "lng": -71.6158955545,
      "rangeKm": 1011.3711840273,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 495
    },
    {
      "altitudeKm": 446.3022750785,
      "azimuthDegs": 89.3372086051,
      "elevationDegs": 22.0611470261,
      "lat": 28.2682849871,
      "lng": -71.5811533083,
      "rangeKm": 1014.8880308148,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 496
    },
    {
      "altitudeKm": 446.9929846743,
      "azimuthDegs": 89.3418927695,
      "elevationDegs": 21.9918071566,
      "lat": 28.2656814023,
      "lng": -71.5463842764,
      "rangeKm": 1018.4060007852,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 497
    },
    {
      "altitudeKm": 447.6784397522,
      "azimuthDegs": 89.3465582847,
      "elevationDegs": 21.9224859641,
      "lat": 28.2630648977,
      "lng": -71.5115874849,
      "rangeKm": 1021.9252049061,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 498
    },
    {
      "altitudeKm": 448.3585430582,
      "azimuthDegs": 89.3512083358,
      "elevationDegs": 21.8531748114,
      "lat": 28.2604349559,
      "lng": -71.4767616587,
      "rangeKm": 1025.4457189936,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 499
    },
    {
      "altitudeKm": 449.033403261,
      "azimuthDegs": 89.3558400657,
      "elevationDegs": 21.7838823225,
      "lat": 28.25779204,
      "lng": -71.4419079327,
      "rangeKm": 1028.9674961086,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 500
    },
    {
      "altitudeKm": 449.7029425329,
      "azimuthDegs": 89.3604508501,
      "elevationDegs": 21.7146036359,
      "lat": 28.2551365014,
      "lng": -71.4070259339,
      "rangeKm": 1032.4905341028,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 501
    },
    {
      "altitudeKm": 450.3672500666,
      "azimuthDegs": 89.3650436783,
      "elevationDegs": 21.6453435746,
      "lat": 28.2524679346,
      "lng": -71.3721158949,
      "rangeKm": 1036.0148638076,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 502
    },
    {
      "altitudeKm": 451.0261816202,
      "azimuthDegs": 89.3696268855,
      "elevationDegs": 21.5760912359,
      "lat": 28.2497850784,
      "lng": -71.3371765396,
      "rangeKm": 1039.5405433492,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 503
    },
    {
      "altitudeKm": 451.6798568668,
      "azimuthDegs": 89.374184453,
      "elevationDegs": 21.5068551662,
      "lat": 28.2470902589,
      "lng": -71.3022086989,
      "rangeKm": 1043.0675458496,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 504
    },
    {
      "altitudeKm": 452.3282703411,
      "azimuthDegs": 89.3787297275,
      "elevationDegs": 21.4376353377,
      "lat": 28.2443815866,
      "lng": -71.2672126073,
      "rangeKm": 1046.5958650172,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 505
    },
    {
      "altitudeKm": 452.9713916995,
      "azimuthDegs": 89.3832549184,
      "elevationDegs": 21.3684293873,
      "lat": 28.2416601536,
      "lng": -71.2321878887,
      "rangeKm": 1050.1255176217,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 506
    },
    {
      "altitudeKm": 453.6092078202,
      "azimuthDegs": 89.3877658619,
      "elevationDegs": 21.2992337406,
      "lat": 28.2389250615,
      "lng": -71.1971335714,
      "rangeKm": 1053.6565970459,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 507
    },
    {
      "altitudeKm": 454.2417511719,
      "azimuthDegs": 89.3922643751,
      "elevationDegs": 21.2300556066,
      "lat": 28.2361761619,
      "lng": -71.1620516925,
      "rangeKm": 1057.1889395787,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 508
    },
    {
      "altitudeKm": 454.8690483333,
      "azimuthDegs": 89.3967437836,
      "elevationDegs": 21.1608902313,
      "lat": 28.233414289,
      "lng": -71.1269400737,
      "rangeKm": 1060.7227562411,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 509
    },
    {
      "altitudeKm": 455.4911053047,
      "azimuthDegs": 89.4012042645,
      "elevationDegs": 21.0917376764,
      "lat": 28.2306394139,
      "lng": -71.0917986446,
      "rangeKm": 1064.2580616205,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 510
    },
    {
      "altitudeKm": 456.1078235994,
      "azimuthDegs": 89.4056500294,
      "elevationDegs": 21.0225979992,
      "lat": 28.2278510242,
      "lng": -71.0566291336,
      "rangeKm": 1067.7946580117,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 511
    },
    {
      "altitudeKm": 456.7192662602,
      "azimuthDegs": 89.4100822176,
      "elevationDegs": 20.9534688931,
      "lat": 28.2250488333,
      "lng": -71.0214296701,
      "rangeKm": 1071.3327543932,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 512
    },
    {
      "altitudeKm": 457.3255412357,
      "azimuthDegs": 89.4144980999,
      "elevationDegs": 20.8843585886,
      "lat": 28.2222333072,
      "lng": -70.9862013924,
      "rangeKm": 1074.8723013018,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 513
    },
    {
      "altitudeKm": 457.9264405245,
      "azimuthDegs": 89.418897491,
      "elevationDegs": 20.8152554798,
      "lat": 28.2194044283,
      "lng": -70.9509436101,
      "rangeKm": 1078.4132650003,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 514
    },
    {
      "altitudeKm": 458.5222127489,
      "azimuthDegs": 89.4232813661,
      "elevationDegs": 20.7461700999,
      "lat": 28.2165620269,
      "lng": -70.9156559737,
      "rangeKm": 1081.9558053774,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 515
    },
    {
      "altitudeKm": 459.1126213038,
      "azimuthDegs": 89.4276490358,
      "elevationDegs": 20.6770920714,
      "lat": 28.2137062144,
      "lng": -70.8803386895,
      "rangeKm": 1085.4997919906,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 516
    },
    {
      "altitudeKm": 459.6978386904,
      "azimuthDegs": 89.4320059106,
      "elevationDegs": 20.6080306783,
      "lat": 28.21083621,
      "lng": -70.8449923083,
      "rangeKm": 1089.0452693211,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 517
    },
    {
      "altitudeKm": 460.2777043938,
      "azimuthDegs": 89.4363468264,
      "elevationDegs": 20.5389767914,
      "lat": 28.2079527364,
      "lng": -70.8096161357,
      "rangeKm": 1092.5922223768,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 518
    },
    {
      "altitudeKm": 460.8524381481,
      "azimuthDegs": 89.4406722493,
      "elevationDegs": 20.4699419464,
      "lat": 28.2050557544,
      "lng": -70.7742107245,
      "rangeKm": 1096.140712698,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 519
    },
    {
      "altitudeKm": 461.4218613329,
      "azimuthDegs": 89.4449824764,
      "elevationDegs": 20.4009136696,
      "lat": 28.2021451133,
      "lng": -70.7387744813,
      "rangeKm": 1099.6908054946,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 520
    },
    {
      "altitudeKm": 461.9860342426,
      "azimuthDegs": 89.4492797486,
      "elevationDegs": 20.3318977105,
      "lat": 28.1992205389,
      "lng": -70.7033085446,
      "rangeKm": 1103.2424326999,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 521
    },
    {
      "altitudeKm": 462.544992104,
      "azimuthDegs": 89.4535646549,
      "elevationDegs": 20.2628930719,
      "lat": 28.1962818701,
      "lng": -70.6678119467,
      "rangeKm": 1106.7957063845,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 522
    },
    {
      "altitudeKm": 463.0987299292,
      "azimuthDegs": 89.4578315026,
      "elevationDegs": 20.1939042492,
      "lat": 28.1933300815,
      "lng": -70.632286409,
      "rangeKm": 1110.3504635113,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 523
    },
    {
      "altitudeKm": 463.64718182,
      "azimuthDegs": 89.4620836576,
      "elevationDegs": 20.1249224049,
      "lat": 28.1903645136,
      "lng": -70.5967297525,
      "rangeKm": 1113.9068822072,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 524
    },
    {
      "altitudeKm": 464.1904078643,
      "azimuthDegs": 89.4663233256,
      "elevationDegs": 20.0559532001,
      "lat": 28.1873848932,
      "lng": -70.5611431167,
      "rangeKm": 1117.4648938697,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 525
    },
    {
      "altitudeKm": 464.7284141788,
      "azimuthDegs": 89.4705506076,
      "elevationDegs": 19.98699671,
      "lat": 28.1843911903,
      "lng": -70.5255264299,
      "rangeKm": 1121.0245130882,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 526
    },
    {
      "altitudeKm": 465.2611532501,
      "azimuthDegs": 89.4747635356,
      "elevationDegs": 19.9180475384,
      "lat": 28.1813836166,
      "lng": -70.4898784093,
      "rangeKm": 1124.5858382778,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 527
    },
    {
      "altitudeKm": 465.7886850111,
      "azimuthDegs": 89.4789642898,
      "elevationDegs": 19.849111281,
      "lat": 28.1783618997,
      "lng": -70.4542001946,
      "rangeKm": 1128.1488004345,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 528
    },
    {
      "altitudeKm": 466.3110156284,
      "azimuthDegs": 89.4831529674,
      "elevationDegs": 19.7801880169,
      "lat": 28.1753260093,
      "lng": -70.4184917146,
      "rangeKm": 1131.713414127,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 529
    },
    {
      "altitudeKm": 466.8281450569,
      "azimuthDegs": 89.4873229066,
      "elevationDegs": 19.7112746588,
      "lat": 28.1722768966,
      "lng": -70.3827516853,
      "rangeKm": 1135.279794949,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 530
    },
    {
      "altitudeKm": 467.3400089959,
      "azimuthDegs": 89.491485238,
      "elevationDegs": 19.6423732394,
      "lat": 28.1692129415,
      "lng": -70.346982141,
      "rangeKm": 1138.8477421154,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 531
    },
    {
      "altitudeKm": 467.8466371198,
      "azimuthDegs": 89.4956337614,
      "elevationDegs": 19.5734797216,
      "lat": 28.1661349611,
      "lng": -70.3111809033,
      "rangeKm": 1142.4174691473,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 532
    },
    {
      "altitudeKm": 468.3481363005,
      "azimuthDegs": 89.4997659553,
      "elevationDegs": 19.5046018157,
      "lat": 28.1630434251,
      "lng": -70.2753491132,
      "rangeKm": 1145.9889230143,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 533
    },
    {
      "altitudeKm": 468.8443652226,
      "azimuthDegs": 89.503889229,
      "elevationDegs": 19.4357298402,
      "lat": 28.1599370602,
      "lng": -70.239485486,
      "rangeKm": 1149.5621696201,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 534
    },
    {
      "altitudeKm": 469.3353477034,
      "azimuthDegs": 89.5079985597,
      "elevationDegs": 19.3668671211,
      "lat": 28.1568167095,
      "lng": -70.2035908419,
      "rangeKm": 1153.1371427929,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 535
    },
    {
      "altitudeKm": 469.8211730152,
      "azimuthDegs": 89.5120965223,
      "elevationDegs": 19.2980181184,
      "lat": 28.1536819687,
      "lng": -70.1676654297,
      "rangeKm": 1156.7138701865,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 536
    },
    {
      "altitudeKm": 470.3017645363,
      "azimuthDegs": 89.5161807527,
      "elevationDegs": 19.229178597,
      "lat": 28.1505331794,
      "lng": -70.1317088559,
      "rangeKm": 1160.2923535798,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 537
    },
    {
      "altitudeKm": 470.7771286342,
      "azimuthDegs": 89.5202513631,
      "elevationDegs": 19.1603486832,
      "lat": 28.1473703101,
      "lng": -70.0957210473,
      "rangeKm": 1163.8726077791,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 538
    },
    {
      "altitudeKm": 471.2473017652,
      "azimuthDegs": 89.5243089116,
      "elevationDegs": 19.0915275904,
      "lat": 28.1441931937,
      "lng": -70.0597010399,
      "rangeKm": 1167.45474545,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 539
    },
    {
      "altitudeKm": 471.7122960746,
      "azimuthDegs": 89.5283600303,
      "elevationDegs": 19.0227184816,
      "lat": 28.1410008201,
      "lng": -70.0236499763,
      "rangeKm": 1171.0386797624,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 540
    },
    {
      "altitudeKm": 472.1721124272,
      "azimuthDegs": 89.5323982488,
      "elevationDegs": 18.9539184706,
      "lat": 28.1377941351,
      "lng": -69.9875665701,
      "rangeKm": 1174.6245271261,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 541
    },
    {
      "altitudeKm": 472.6267441114,
      "azimuthDegs": 89.5364182687,
      "elevationDegs": 18.8851316583,
      "lat": 28.1345741181,
      "lng": -69.9514525298,
      "rangeKm": 1178.2121226166,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 542
    },
    {
      "altitudeKm": 473.0761165269,
      "azimuthDegs": 89.5404346307,
      "elevationDegs": 18.81634988,
      "lat": 28.1313382437,
      "lng": -69.9153060016,
      "rangeKm": 1181.801628534,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 543
    },
    {
      "altitudeKm": 473.5203474307,
      "azimuthDegs": 89.5444334468,
      "elevationDegs": 18.7475806722,
      "lat": 28.1280888369,
      "lng": -69.8791278029,
      "rangeKm": 1185.3930100353,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 544
    },
    {
      "altitudeKm": 473.9593490179,
      "azimuthDegs": 89.5484238067,
      "elevationDegs": 18.678819843,
      "lat": 28.1248243842,
      "lng": -69.8429178609,
      "rangeKm": 1188.9862498393,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 545
    },
    {
      "altitudeKm": 474.3932053885,
      "azimuthDegs": 89.5524017469,
      "elevationDegs": 18.6100688327,
      "lat": 28.1215454569,
      "lng": -69.8066752133,
      "rangeKm": 1192.5814767542,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 546
    },
    {
      "altitudeKm": 474.8218927296,
      "azimuthDegs": 89.5563669306,
      "elevationDegs": 18.5413286452,
      "lat": 28.1182521585,
      "lng": -69.770400677,
      "rangeKm": 1196.1786075305,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 547
    },
    {
      "altitudeKm": 475.2453704589,
      "azimuthDegs": 89.5603238824,
      "elevationDegs": 18.4725972762,
      "lat": 28.1149437157,
      "lng": -69.7340941788,
      "rangeKm": 1199.7776411438,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 548
    },
    {
      "altitudeKm": 475.6636922705,
      "azimuthDegs": 89.5642682472,
      "elevationDegs": 18.4038770065,
      "lat": 28.1116208362,
      "lng": -69.6977556458,
      "rangeKm": 1203.3786081723,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 549
    },
    {
      "altitudeKm": 476.0767655786,
      "azimuthDegs": 89.5682025997,
      "elevationDegs": 18.3351608571,
      "lat": 28.1082829799,
      "lng": -69.6613837877,
      "rangeKm": 1206.981594399,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 550
    },
    {
      "altitudeKm": 476.4847789825,
      "azimuthDegs": 89.5721268801,
      "elevationDegs": 18.2664602772,
      "lat": 28.1049302492,
      "lng": -69.624980078,
      "rangeKm": 1210.5865551081,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 551
    },
    {
      "altitudeKm": 476.8875736989,
      "azimuthDegs": 89.5760365024,
      "elevationDegs": 18.1977670854,
      "lat": 28.1015633525,
      "lng": -69.5885437848,
      "rangeKm": 1214.1934822764,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 552
    },
    {
      "altitudeKm": 477.2851919673,
      "azimuthDegs": 89.5799382569,
      "elevationDegs": 18.1290834702,
      "lat": 28.0981811452,
      "lng": -69.5520751641,
      "rangeKm": 1217.8023865374,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 553
    },
    {
      "altitudeKm": 477.6775886853,
      "azimuthDegs": 89.5838303002,
      "elevationDegs": 18.0604046752,
      "lat": 28.0947838256,
      "lng": -69.5155729249,
      "rangeKm": 1221.4133699347,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 554
    },
    {
      "altitudeKm": 478.0648695321,
      "azimuthDegs": 89.5877102662,
      "elevationDegs": 17.9917378981,
      "lat": 28.0913718681,
      "lng": -69.4790382116,
      "rangeKm": 1225.0263756791,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 555
    },
    {
      "altitudeKm": 478.4470411931,
      "azimuthDegs": 89.5915782473,
      "elevationDegs": 17.923083275,
      "lat": 28.0879452387,
      "lng": -69.4424709513,
      "rangeKm": 1228.641418417,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 556
    },
    {
      "altitudeKm": 478.8240632942,
      "azimuthDegs": 89.5954386271,
      "elevationDegs": 17.8544388533,
      "lat": 28.0845031634,
      "lng": -69.405871071,
      "rangeKm": 1232.2584975772,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 557
    },
    {
      "altitudeKm": 479.1958910893,
      "azimuthDegs": 89.599289583,
      "elevationDegs": 17.7857999546,
      "lat": 28.0810458388,
      "lng": -69.3692372784,
      "rangeKm": 1235.8777156545,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 558
    },
    {
      "altitudeKm": 479.5625163328,
      "azimuthDegs": 89.603126092,
      "elevationDegs": 17.7171703719,
      "lat": 28.0775742486,
      "lng": -69.3325712705,
      "rangeKm": 1239.4989063055,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 559
    },
    {
      "altitudeKm": 479.9240435362,
      "azimuthDegs": 89.6069556085,
      "elevationDegs": 17.6485507395,
      "lat": 28.0740869702,
      "lng": -69.2958715361,
      "rangeKm": 1243.1222763737,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 560
    },
    {
      "altitudeKm": 480.2803971354,
      "azimuthDegs": 89.6107759117,
      "elevationDegs": 17.5799371962,
      "lat": 28.0705843378,
      "lng": -69.259137668,
      "rangeKm": 1246.7478304122,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 561
    },
    {
      "altitudeKm": 480.6316511022,
      "azimuthDegs": 89.6145842822,
      "elevationDegs": 17.5113374998,
      "lat": 28.0670669671,
      "lng": -69.222371697,
      "rangeKm": 1250.3754119279,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 562
    },
    {
      "altitudeKm": 480.9777452719,
      "azimuthDegs": 89.6183835826,
      "elevationDegs": 17.442744249,
      "lat": 28.0635341725,
      "lng": -69.1855714445,
      "rangeKm": 1254.0052072626,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 563
    },
    {
      "altitudeKm": 481.3187377627,
      "azimuthDegs": 89.6221757093,
      "elevationDegs": 17.3741623717,
      "lat": 28.0599856898,
      "lng": -69.1487380574,
      "rangeKm": 1257.6371431062,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 564
    },
    {
      "altitudeKm": 481.6545175781,
      "azimuthDegs": 89.6259520607,
      "elevationDegs": 17.3055860847,
      "lat": 28.0564229617,
      "lng": -69.1118707881,
      "rangeKm": 1261.2712291734,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 565
    },
    {
      "altitudeKm": 481.9852095258,
      "azimuthDegs": 89.6297213801,
      "elevationDegs": 17.2370215132,
      "lat": 28.0528444753,
      "lng": -69.0749702358,
      "rangeKm": 1264.9074854955,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 566
    },
    {
      "altitudeKm": 482.3108520827,
      "azimuthDegs": 89.6334841078,
      "elevationDegs": 17.1684681189,
      "lat": 28.0492500546,
      "lng": -69.0380354443,
      "rangeKm": 1268.5460252382,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 567
    },
    {
      "altitudeKm": 482.6312242883,
      "azimuthDegs": 89.6372350656,
      "elevationDegs": 17.0999195291,
      "lat": 28.0456406825,
      "lng": -69.0010674294,
      "rangeKm": 1272.1866470793,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 568
    },
    {
      "altitudeKm": 482.9464787683,
      "azimuthDegs": 89.6409773355,
      "elevationDegs": 17.0313785348,
      "lat": 28.0420156727,
      "lng": -68.9640646882,
      "rangeKm": 1275.8295727133,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 569
    },
    {
      "altitudeKm": 483.2567050599,
      "azimuthDegs": 89.6447131706,
      "elevationDegs": 16.9628492826,
      "lat": 28.0383746208,
      "lng": -68.9270274868,
      "rangeKm": 1279.4748265458,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 570
    },
    {
      "altitudeKm": 483.5617290408,
      "azimuthDegs": 89.6484333418,
      "elevationDegs": 16.8943274398,
      "lat": 28.03471925,
      "lng": -68.8899568358,
      "rangeKm": 1283.1222220919,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 571
    },
    {
      "altitudeKm": 483.861691985,
      "azimuthDegs": 89.6521512958,
      "elevationDegs": 16.8258156824,
      "lat": 28.0310470249,
      "lng": -68.8528515768,
      "rangeKm": 1286.7719611762,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 572
    },
    {
      "altitudeKm": 484.1564666569,
      "azimuthDegs": 89.6558537485,
      "elevationDegs": 16.7573117054,
      "lat": 28.0273604086,
      "lng": -68.815712717,
      "rangeKm": 1290.4238719369,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 573
    },
    {
      "altitudeKm": 484.4461945382,
      "azimuthDegs": 89.659554059,
      "elevationDegs": 16.6888181902,
      "lat": 28.0236568654,
      "lng": -68.7785391015,
      "rangeKm": 1294.0781560799,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 574
    },
    {
      "altitudeKm": 484.7307802704,
      "azimuthDegs": 89.6632394139,
      "elevationDegs": 16.6203321908,
      "lat": 28.0199387157,
      "lng": -68.7413308533,
      "rangeKm": 1297.7347404169,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 575
    },
    {
      "altitudeKm": 485.0102983629,
      "azimuthDegs": 89.6669165053,
      "elevationDegs": 16.5518551628,
      "lat": 28.0162046725,
      "lng": -68.7040873589,
      "rangeKm": 1301.3937332891,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 576
    },
    {
      "altitudeKm": 485.2846449274,
      "azimuthDegs": 89.6705886428,
      "elevationDegs": 16.4833865667,
      "lat": 28.0124542448,
      "lng": -68.6668103046,
      "rangeKm": 1305.0549383728,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 577
    },
    {
      "altitudeKm": 485.5539382893,
      "azimuthDegs": 89.6742526012,
      "elevationDegs": 16.4149273382,
      "lat": 28.0086878495,
      "lng": -68.6294978552,
      "rangeKm": 1308.718581945,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 578
    },
    {
      "altitudeKm": 485.8182005283,
      "azimuthDegs": 89.6779040539,
      "elevationDegs": 16.3464802716,
      "lat": 28.004906333,
      "lng": -68.5921508162,
      "rangeKm": 1312.3845941613,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 579
    },
    {
      "altitudeKm": 486.0772627549,
      "azimuthDegs": 89.6815489365,
      "elevationDegs": 16.2780377554,
      "lat": 28.0011085442,
      "lng": -68.5547687675,
      "rangeKm": 1316.0529537047,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 580
    },
    {
      "altitudeKm": 486.3312613737,
      "azimuthDegs": 89.6851854343,
      "elevationDegs": 16.2096058136,
      "lat": 27.9972948194,
      "lng": -68.5173519787,
      "rangeKm": 1319.7236979309,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 581
    },
    {
      "altitudeKm": 486.5801214862,
      "azimuthDegs": 89.6888114863,
      "elevationDegs": 16.1411808195,
      "lat": 27.9934654873,
      "lng": -68.4799000285,
      "rangeKm": 1323.3968335463,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 582
    },
    {
      "altitudeKm": 486.8239649855,
      "azimuthDegs": 89.6924296481,
      "elevationDegs": 16.0727662109,
      "lat": 27.9896199997,
      "lng": -68.442412309,
      "rangeKm": 1327.0724824633,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 583
    },
    {
      "altitudeKm": 487.0627198961,
      "azimuthDegs": 89.6960435314,
      "elevationDegs": 16.0043608105,
      "lat": 27.9857577229,
      "lng": -68.4048896245,
      "rangeKm": 1330.7505472055,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 584
    },
    {
      "altitudeKm": 487.2963258155,
      "azimuthDegs": 89.6996467612,
      "elevationDegs": 15.9359635547,
      "lat": 27.9818798699,
      "lng": -68.3673324299,
      "rangeKm": 1334.4309496903,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 585
    },
    {
      "altitudeKm": 487.5249372521,
      "azimuthDegs": 89.7032422418,
      "elevationDegs": 15.8675772892,
      "lat": 27.9779857473,
      "lng": -68.3297392414,
      "rangeKm": 1338.1139102723,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 586
    },
    {
      "altitudeKm": 487.748446998,
      "azimuthDegs": 89.706827569,
      "elevationDegs": 15.7991990107,
      "lat": 27.9740758271,
      "lng": -68.2921105132,
      "rangeKm": 1341.7993373521,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 587
    },
    {
      "altitudeKm": 487.966848294,
      "azimuthDegs": 89.7104070674,
      "elevationDegs": 15.7308264481,
      "lat": 27.9701491851,
      "lng": -68.2544452918,
      "rangeKm": 1345.4873314709,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 588
    },
    {
      "altitudeKm": 488.1802121236,
      "azimuthDegs": 89.713978229,
      "elevationDegs": 15.6624666065,
      "lat": 27.9662064488,
      "lng": -68.2167456054,
      "rangeKm": 1349.177730966,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 589
    },
    {
      "altitudeKm": 488.3884965612,
      "azimuthDegs": 89.7175394083,
      "elevationDegs": 15.5941153836,
      "lat": 27.9622477991,
      "lng": -68.179010151,
      "rangeKm": 1352.870642062,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 590
    },
    {
      "altitudeKm": 488.5916950925,
      "azimuthDegs": 89.7210948881,
      "elevationDegs": 15.5257705401,
      "lat": 27.9582723109,
      "lng": -68.1412379759,
      "rangeKm": 1356.5661654877,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 591
    },
    {
      "altitudeKm": 488.7899112986,
      "azimuthDegs": 89.7246425458,
      "elevationDegs": 15.4574384763,
      "lat": 27.9542804665,
      "lng": -68.1034302324,
      "rangeKm": 1360.2642378414,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 592
    },
    {
      "altitudeKm": 488.9829418934,
      "azimuthDegs": 89.7281821682,
      "elevationDegs": 15.3891100541,
      "lat": 27.9502722158,
      "lng": -68.0655861406,
      "rangeKm": 1363.9648467436,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 593
    },
    {
      "altitudeKm": 489.171005204,
      "azimuthDegs": 89.7317140659,
      "elevationDegs": 15.3207948258,
      "lat": 27.9462475306,
      "lng": -68.0277063286,
      "rangeKm": 1367.6680344951,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 594
    },
    {
      "altitudeKm": 489.3539799765,
      "azimuthDegs": 89.7352400589,
      "elevationDegs": 15.2524873841,
      "lat": 27.942205996,
      "lng": -67.9897903678,
      "rangeKm": 1371.3737960282,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 595
    },
    {
      "altitudeKm": 489.5319206657,
      "azimuthDegs": 89.7387563838,
      "elevationDegs": 15.1841898557,
      "lat": 27.9381483125,
      "lng": -67.9518381818,
      "rangeKm": 1375.0821593653,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 596
    },
    {
      "altitudeKm": 489.7047880314,
      "azimuthDegs": 89.7422668877,
      "elevationDegs": 15.1159005541,
      "lat": 27.9340737002,
      "lng": -67.913849694,
      "rangeKm": 1378.7931266482,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 597
    },
    {
      "altitudeKm": 489.8726365576,
      "azimuthDegs": 89.7457678294,
      "elevationDegs": 15.0476215965,
      "lat": 27.9299828594,
      "lng": -67.875824828,
      "rangeKm": 1382.5067257518,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 598
    },
    {
      "altitudeKm": 490.0353785607,
      "azimuthDegs": 89.7492613757,
      "elevationDegs": 14.9793471809,
      "lat": 27.9258752253,
      "lng": -67.8377622775,
      "rangeKm": 1386.2230514928,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 599
    },
    {
      "altitudeKm": 490.1931187969,
      "azimuthDegs": 89.7527508732,
      "elevationDegs": 14.9110857922,
      "lat": 27.9217503268,
      "lng": -67.7996644252,
      "rangeKm": 1389.9419339156,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 600
    },
    {
      "altitudeKm": 490.3458966637,
      "azimuthDegs": 89.7562313018,
      "elevationDegs": 14.8428349286,
      "lat": 27.9176089311,
      "lng": -67.7615290919,
      "rangeKm": 1393.6635921521,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 601
    },
    {
      "altitudeKm": 490.4935244587,
      "azimuthDegs": 89.7597037587,
      "elevationDegs": 14.7745902438,
      "lat": 27.9134509171,
      "lng": -67.7233575902,
      "rangeKm": 1397.3878244674,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 602
    },
    {
      "altitudeKm": 490.63615868,
      "azimuthDegs": 89.7631709723,
      "elevationDegs": 14.7063546695,
      "lat": 27.9092755841,
      "lng": -67.6851484539,
      "rangeKm": 1401.1148502508,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 603
    },
    {
      "altitudeKm": 490.7737868485,
      "azimuthDegs": 89.7666285709,
      "elevationDegs": 14.6381312071,
      "lat": 27.9050839291,
      "lng": -67.6469033521,
      "rangeKm": 1404.8444988656,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 604
    },
    {
      "altitudeKm": 490.9064371056,
      "azimuthDegs": 89.7700810007,
      "elevationDegs": 14.5699173001,
      "lat": 27.9008748732,
      "lng": -67.6086204632,
      "rangeKm": 1408.5769709141,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 605
    },
    {
      "altitudeKm": 491.0340020184,
      "azimuthDegs": 89.7735259746,
      "elevationDegs": 14.5017100422,
      "lat": 27.8966488866,
      "lng": -67.5703002236,
      "rangeKm": 1412.3121766763,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 606
    },
    {
      "altitudeKm": 491.1565711539,
      "azimuthDegs": 89.7769654984,
      "elevationDegs": 14.4335132511,
      "lat": 27.8924055657,
      "lng": -67.5319429153,
      "rangeKm": 1416.0501370356,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 607
    },
    {
      "altitudeKm": 491.2740707145,
      "azimuthDegs": 89.7803976426,
      "elevationDegs": 14.3653235843,
      "lat": 27.8881452311,
      "lng": -67.4935481009,
      "rangeKm": 1419.7908614871,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 608
    },
    {
      "altitudeKm": 491.3866031505,
      "azimuthDegs": 89.7838204116,
      "elevationDegs": 14.2971471037,
      "lat": 27.8838683699,
      "lng": -67.4551169346,
      "rangeKm": 1423.5342836539,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 609
    },
    {
      "altitudeKm": 491.4940689257,
      "azimuthDegs": 89.7872398772,
      "elevationDegs": 14.2289759463,
      "lat": 27.8795735214,
      "lng": -67.4166472357,
      "rangeKm": 1427.2805871853,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 610
    },
    {
      "altitudeKm": 491.5966173125,
      "azimuthDegs": 89.7906503912,
      "elevationDegs": 14.1608180019,
      "lat": 27.8752619127,
      "lng": -67.3781401597,
      "rangeKm": 1431.0297175169,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 611
    },
    {
      "altitudeKm": 491.6941279097,
      "azimuthDegs": 89.7940536954,
      "elevationDegs": 14.0926681165,
      "lat": 27.870933123,
      "lng": -67.339595267,
      "rangeKm": 1434.7816723984,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 612
    },
    {
      "altitudeKm": 491.7866902975,
      "azimuthDegs": 89.7974517592,
      "elevationDegs": 14.0245300493,
      "lat": 27.8665867489,
      "lng": -67.3010128429,
      "rangeKm": 1438.53647201,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 613
    },
    {
      "altitudeKm": 491.8741026543,
      "azimuthDegs": 89.8008443603,
      "elevationDegs": 13.9563951771,
      "lat": 27.8622227299,
      "lng": -67.2623920823,
      "rangeKm": 1442.2941097055,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 614
    },
    {
      "altitudeKm": 491.9566296174,
      "azimuthDegs": 89.8042281848,
      "elevationDegs": 13.8882744189,
      "lat": 27.8578417821,
      "lng": -67.2237336351,
      "rangeKm": 1446.0546341518,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 615
    },
    {
      "altitudeKm": 492.034232476,
      "azimuthDegs": 89.8076068645,
      "elevationDegs": 13.8201661602,
      "lat": 27.8534431227,
      "lng": -67.1850374248,
      "rangeKm": 1449.8180483505,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 616
    },
    {
      "altitudeKm": 492.1067219882,
      "azimuthDegs": 89.8109762822,
      "elevationDegs": 13.7520640264,
      "lat": 27.8490275824,
      "lng": -67.1463035111,
      "rangeKm": 1453.5842587972,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 617
    },
    {
      "altitudeKm": 492.1742911783,
      "azimuthDegs": 89.8143445111,
      "elevationDegs": 13.6839726687,
      "lat": 27.8445933526,
      "lng": -67.1075308099,
      "rangeKm": 1457.3534767219,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 618
    },
    {
      "altitudeKm": 492.2367977062,
      "azimuthDegs": 89.8177038777,
      "elevationDegs": 13.6158875689,
      "lat": 27.8401420034,
      "lng": -67.0687193793,
      "rangeKm": 1461.1256206828,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 619
    },
    {
      "altitudeKm": 492.2944593396,
      "azimuthDegs": 89.8210546811,
      "elevationDegs": 13.5478177004,
      "lat": 27.8356735115,
      "lng": -67.0298698746,
      "rangeKm": 1464.9007260326,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 620
    },
    {
      "altitudeKm": 492.347074862,
      "azimuthDegs": 89.8244018162,
      "elevationDegs": 13.4797565748,
      "lat": 27.8311868653,
      "lng": -66.9909827185,
      "rangeKm": 1468.6786812009,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 621
    },
    {
      "altitudeKm": 492.3946402167,
      "azimuthDegs": 89.8277440636,
      "elevationDegs": 13.4117002993,
      "lat": 27.8266820756,
      "lng": -66.9520557286,
      "rangeKm": 1472.4596958988,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 622
    },
    {
      "altitudeKm": 492.4373506022,
      "azimuthDegs": 89.8310775351,
      "elevationDegs": 13.3436602758,
      "lat": 27.8221601662,
      "lng": -66.9130912985,
      "rangeKm": 1476.2436175331,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 623
    },
    {
      "altitudeKm": 492.4750275035,
      "azimuthDegs": 89.8344061837,
      "elevationDegs": 13.2756256112,
      "lat": 27.8176200247,
      "lng": -66.8740868774,
      "rangeKm": 1480.0306291279,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 624
    },
    {
      "altitudeKm": 492.5077378533,
      "azimuthDegs": 89.8377277664,
      "elevationDegs": 13.2076024426,
      "lat": 27.813062295,
      "lng": -66.8350444895,
      "rangeKm": 1483.8205624847,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 625
    },
    {
      "altitudeKm": 492.5356059424,
      "azimuthDegs": 89.8410445007,
      "elevationDegs": 13.1395940674,
      "lat": 27.8084864205,
      "lng": -66.7959635608,
      "rangeKm": 1487.6135355353,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 626
    },
    {
      "altitudeKm": 492.5583844822,
      "azimuthDegs": 89.8443546347,
      "elevationDegs": 13.0715884232,
      "lat": 27.8038925391,
      "lng": -66.7568420338,
      "rangeKm": 1491.4096406459,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 627
    },
    {
      "altitudeKm": 492.5763026229,
      "azimuthDegs": 89.8476596554,
      "elevationDegs": 13.0035983703,
      "lat": 27.7992805782,
      "lng": -66.7176826754,
      "rangeKm": 1495.2087162049,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 628
    },
    {
      "altitudeKm": 492.5892060456,
      "azimuthDegs": 89.8509559028,
      "elevationDegs": 12.9356173464,
      "lat": 27.7946512113,
      "lng": -66.6784846622,
      "rangeKm": 1499.0107701502,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 629
    },
    {
      "altitudeKm": 492.5972077952,
      "azimuthDegs": 89.854249335,
      "elevationDegs": 12.8676465973,
      "lat": 27.7900029851,
      "lng": -66.6392465575,
      "rangeKm": 1502.8160088118,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 630
    },
    {
      "altitudeKm": 492.6002001646,
      "azimuthDegs": 89.85753781,
      "elevationDegs": 12.7996833182,
      "lat": 27.7853363672,
      "lng": -66.599968774,
      "rangeKm": 1506.6243448142,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 631
    },
    {
      "altitudeKm": 492.5982842791,
      "azimuthDegs": 89.8608194469,
      "elevationDegs": 12.7317331716,
      "lat": 27.7806518502,
      "lng": -66.5606524708,
      "rangeKm": 1510.4357079116,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 632
    },
    {
      "altitudeKm": 492.5914577909,
      "azimuthDegs": 89.8640930852,
      "elevationDegs": 12.6637924564,
      "lat": 27.7759494365,
      "lng": -66.5212954656,
      "rangeKm": 1514.2503088033,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 633
    },
    {
      "altitudeKm": 492.5796933556,
      "azimuthDegs": 89.8673633664,
      "elevationDegs": 12.5958635936,
      "lat": 27.7712282923,
      "lng": -66.4818997822,
      "rangeKm": 1518.0679561295,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 634
    },
    {
      "altitudeKm": 492.5630001868,
      "azimuthDegs": 89.8706254085,
      "elevationDegs": 12.5279449464,
      "lat": 27.7664893156,
      "lng": -66.4424641019,
      "rangeKm": 1521.8887721049,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 635
    },
    {
      "altitudeKm": 492.5412937338,
      "azimuthDegs": 89.8738860203,
      "elevationDegs": 12.4600332926,
      "lat": 27.761730978,
      "lng": -66.4029883445,
      "rangeKm": 1525.7127509182,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 636
    },
    {
      "altitudeKm": 492.5148034588,
      "azimuthDegs": 89.8771368854,
      "elevationDegs": 12.392137417,
      "lat": 27.7569550993,
      "lng": -66.3634728077,
      "rangeKm": 1529.5399418131,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 637
    },
    {
      "altitudeKm": 492.4832816531,
      "azimuthDegs": 89.880386046,
      "elevationDegs": 12.3242493041,
      "lat": 27.752159924,
      "lng": -66.3239178974,
      "rangeKm": 1533.37022649,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 638
    },
    {
      "altitudeKm": 492.4469011728,
      "azimuthDegs": 89.8836274044,
      "elevationDegs": 12.2563721519,
      "lat": 27.7473465746,
      "lng": -66.2843218085,
      "rangeKm": 1537.2038398381,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 639
    },
    {
      "altitudeKm": 492.4056340456,
      "azimuthDegs": 89.8868655272,
      "elevationDegs": 12.1885082894,
      "lat": 27.7425142201,
      "lng": -66.2446865647,
      "rangeKm": 1541.0405900312,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 640
    },
    {
      "altitudeKm": 492.3594090679,
      "azimuthDegs": 89.8900938284,
      "elevationDegs": 12.1206528541,
      "lat": 27.7376641119,
      "lng": -66.2050104657,
      "rangeKm": 1544.8805973698,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 641
    },
    {
      "altitudeKm": 492.3083504478,
      "azimuthDegs": 89.8933192489,
      "elevationDegs": 12.0528109426,
      "lat": 27.7327947484,
      "lng": -66.1652941906,
      "rangeKm": 1548.723871101,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 642
    },
    {
      "altitudeKm": 492.2522226817,
      "azimuthDegs": 89.8965412633,
      "elevationDegs": 11.9849747905,
      "lat": 27.7279062119,
      "lng": -66.12553776,
      "rangeKm": 1552.5703127608,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 643
    },
    {
      "altitudeKm": 492.1913717908,
      "azimuthDegs": 89.8997537981,
      "elevationDegs": 11.9171560721,
      "lat": 27.7229998089,
      "lng": -66.0857409938,
      "rangeKm": 1556.4200710669,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 644
    },
    {
      "altitudeKm": 492.1255051761,
      "azimuthDegs": 89.9029632785,
      "elevationDegs": 11.849343397,
      "lat": 27.7180739806,
      "lng": -66.0459030493,
      "rangeKm": 1560.2731272938,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 645
    },
    {
      "altitudeKm": 492.054840058,
      "azimuthDegs": 89.9061699389,
      "elevationDegs": 11.7815452302,
      "lat": 27.7131287083,
      "lng": -66.0060246104,
      "rangeKm": 1564.1295101482,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 646
    },
    {
      "altitudeKm": 491.9792700501,
      "azimuthDegs": 89.909366998,
      "elevationDegs": 11.7137570384,
      "lat": 27.7081653977,
      "lng": -65.966104832,
      "rangeKm": 1567.9892412507,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 647
    },
    {
      "altitudeKm": 491.8987558567,
      "azimuthDegs": 89.9125625096,
      "elevationDegs": 11.6459791372,
      "lat": 27.7031823207,
      "lng": -65.9261448758,
      "rangeKm": 1571.8522182069,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 648
    },
    {
      "altitudeKm": 491.8134354079,
      "azimuthDegs": 89.9157502401,
      "elevationDegs": 11.5782149458,
      "lat": 27.6981807538,
      "lng": -65.8861438017,
      "rangeKm": 1575.7185751646,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 649
    },
    {
      "altitudeKm": 491.7231439104,
      "azimuthDegs": 89.918935001,
      "elevationDegs": 11.51045813,
      "lat": 27.6931595209,
      "lng": -65.8461011446,
      "rangeKm": 1579.5883065409,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 650
    },
    {
      "altitudeKm": 491.628108631,
      "azimuthDegs": 89.9221134866,
      "elevationDegs": 11.4427189303,
      "lat": 27.6881195058,
      "lng": -65.8060184527,
      "rangeKm": 1583.46134967,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 651
    },
    {
      "altitudeKm": 491.5281202592,
      "azimuthDegs": 89.925289033,
      "elevationDegs": 11.3749876208,
      "lat": 27.6830597278,
      "lng": -65.765894016,
      "rangeKm": 1587.337797596,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 652
    },
    {
      "altitudeKm": 491.423234378,
      "azimuthDegs": 89.928458419,
      "elevationDegs": 11.3072661586,
      "lat": 27.6779808793,
      "lng": -65.7257277527,
      "rangeKm": 1591.2176752642,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 653
    },
    {
      "altitudeKm": 491.3135508057,
      "azimuthDegs": 89.9316198894,
      "elevationDegs": 11.2395598431,
      "lat": 27.6728834585,
      "lng": -65.6855208262,
      "rangeKm": 1595.1009085962,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 654
    },
    {
      "altitudeKm": 491.1989414081,
      "azimuthDegs": 89.9347784822,
      "elevationDegs": 11.1718622188,
      "lat": 27.6677661274,
      "lng": -65.6452719102,
      "rangeKm": 1598.9875925647,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 655
    },
    {
      "altitudeKm": 491.0795424828,
      "azimuthDegs": 89.9379327136,
      "elevationDegs": 11.1041783887,
      "lat": 27.6626292239,
      "lng": -65.6049813116,
      "rangeKm": 1602.8777524642,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 656
    },
    {
      "altitudeKm": 490.9552361158,
      "azimuthDegs": 89.9410840865,
      "elevationDegs": 11.0365037875,
      "lat": 27.6574723109,
      "lng": -65.5646485611,
      "rangeKm": 1606.7713935242,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 657
    },
    {
      "altitudeKm": 490.8261683079,
      "azimuthDegs": 89.9442276545,
      "elevationDegs": 10.9688453132,
      "lat": 27.6522966294,
      "lng": -65.5242748234,
      "rangeKm": 1610.6684502509,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 658
    },
    {
      "altitudeKm": 490.6921746538,
      "azimuthDegs": 89.9473681162,
      "elevationDegs": 10.901196745,
      "lat": 27.6471010003,
      "lng": -65.483859627,
      "rangeKm": 1614.5689188667,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 659
    },
    {
      "altitudeKm": 490.5533843147,
      "azimuthDegs": 89.9505028802,
      "elevationDegs": 10.8335596839,
      "lat": 27.6418857929,
      "lng": -65.4434011776,
      "rangeKm": 1618.4730229252,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 660
    },
    {
      "altitudeKm": 490.4097330307,
      "azimuthDegs": 89.9536314076,
      "elevationDegs": 10.7659347096,
      "lat": 27.6366512796,
      "lng": -65.4029011056,
      "rangeKm": 1622.3805784057,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 661
    },
    {
      "altitudeKm": 490.2612641156,
      "azimuthDegs": 89.956758567,
      "elevationDegs": 10.6983235454,
      "lat": 27.6313963151,
      "lng": -65.3623597204,
      "rangeKm": 1626.2915914902,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 662
    },
    {
      "altitudeKm": 490.1079090629,
      "azimuthDegs": 89.9598781302,
      "elevationDegs": 10.630721712,
      "lat": 27.6261221358,
      "lng": -65.3217753006,
      "rangeKm": 1630.2061858637,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 663
    },
    {
      "altitudeKm": 489.9498382994,
      "azimuthDegs": 89.9629934924,
      "elevationDegs": 10.5631356921,
      "lat": 27.6208279847,
      "lng": -65.2811485495,
      "rangeKm": 1634.1243764741,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 664
    },
    {
      "altitudeKm": 489.7868972488,
      "azimuthDegs": 89.9661058447,
      "elevationDegs": 10.4955611349,
      "lat": 27.6155135841,
      "lng": -65.2404798476,
      "rangeKm": 1638.0460700686,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 665
    },
    {
      "altitudeKm": 489.6190982755,
      "azimuthDegs": 89.969210687,
      "elevationDegs": 10.4279967125,
      "lat": 27.6101798155,
      "lng": -65.1997678635,
      "rangeKm": 1641.9713905929,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 666
    },
    {
      "altitudeKm": 489.4465281855,
      "azimuthDegs": 89.9723142204,
      "elevationDegs": 10.3604473602,
      "lat": 27.6048253431,
      "lng": -65.1590141579,
      "rangeKm": 1645.9002440838,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 667
    },
    {
      "altitudeKm": 489.2690727512,
      "azimuthDegs": 89.9754133976,
      "elevationDegs": 10.292907053,
      "lat": 27.5994506571,
      "lng": -65.1182170049,
      "rangeKm": 1649.8327463133,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 668
    },
    {
      "altitudeKm": 489.0869949717,
      "azimuthDegs": 89.978505358,
      "elevationDegs": 10.2253854383,
      "lat": 27.5940564867,
      "lng": -65.0773771139,
      "rangeKm": 1653.7689282803,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 669
    },
    {
      "altitudeKm": 488.8999672613,
      "azimuthDegs": 89.9815958223,
      "elevationDegs": 10.1578719017,
      "lat": 27.5886414201,
      "lng": -65.0364944637,
      "rangeKm": 1657.7086812018,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 670
    },
    {
      "altitudeKm": 488.7081720689,
      "azimuthDegs": 89.9846802771,
      "elevationDegs": 10.0903729954,
      "lat": 27.5832065389,
      "lng": -64.9955693676,
      "rangeKm": 1661.6520364933,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 671
    },
    {
      "altitudeKm": 488.511529742,
      "azimuthDegs": 89.9877604538,
      "elevationDegs": 10.0228842121,
      "lat": 27.5777512362,
      "lng": -64.9546004926,
      "rangeKm": 1665.5991014472,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 672
    },
    {
      "altitudeKm": 488.3101765695,
      "azimuthDegs": 89.990834945,
      "elevationDegs": 9.9554104731,
      "lat": 27.5722758505,
      "lng": -64.9135881538,
      "rangeKm": 1669.5498985732,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 673
    },
    {
      "altitudeKm": 488.1040382847,
      "azimuthDegs": 89.9939065611,
      "elevationDegs": 9.8879505253,
      "lat": 27.5667797511,
      "lng": -64.8725331215,
      "rangeKm": 1673.5043349111,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 674
    },
    {
      "altitudeKm": 487.8930441804,
      "azimuthDegs": 89.996973679,
      "elevationDegs": 9.8205015993,
      "lat": 27.5612632371,
      "lng": -64.8314349129,
      "rangeKm": 1677.4624268415,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 675
    },
    {
      "altitudeKm": 487.6773681154,
      "azimuthDegs": 90.0000351742,
      "elevationDegs": 9.7530684834,
      "lat": 27.5557264825,
      "lng": -64.7902929933,
      "rangeKm": 1681.4242959792,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 676
    },
    {
      "altitudeKm": 487.4568555615,
      "azimuthDegs": 90.0030922144,
      "elevationDegs": 9.6856469151,
      "lat": 27.5501692076,
      "lng": -64.7491077305,
      "rangeKm": 1685.3898510158,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 677
    },
    {
      "altitudeKm": 487.2316342433,
      "azimuthDegs": 90.0061467033,
      "elevationDegs": 9.618240082,
      "lat": 27.544590843,
      "lng": -64.7078785916,
      "rangeKm": 1689.3592052539,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 678
    },
    {
      "altitudeKm": 487.0015958925,
      "azimuthDegs": 90.0091967642,
      "elevationDegs": 9.5508453251,
      "lat": 27.5389918516,
      "lng": -64.6666059426,
      "rangeKm": 1693.332275733,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 679
    },
    {
      "altitudeKm": 486.7667882417,
      "azimuthDegs": 90.0122426818,
      "elevationDegs": 9.4834628414,
      "lat": 27.5333720138,
      "lng": -64.6252888494,
      "rangeKm": 1697.3091773663,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 680
    },
    {
      "altitudeKm": 486.5272632664,
      "azimuthDegs": 90.0152858113,
      "elevationDegs": 9.4160959483,
      "lat": 27.5277310917,
      "lng": -64.5839284818,
      "rangeKm": 1701.2898237497,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 681
    },
    {
      "altitudeKm": 486.2829086585,
      "azimuthDegs": 90.0183232213,
      "elevationDegs": 9.3487388905,
      "lat": 27.5220695651,
      "lng": -64.5425230994,
      "rangeKm": 1705.2743335592,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 682
    },
    {
      "altitudeKm": 486.0338644223,
      "azimuthDegs": 90.0213546213,
      "elevationDegs": 9.2813995692,
      "lat": 27.5163877566,
      "lng": -64.5010751247,
      "rangeKm": 1709.262526262,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 683
    },
    {
      "altitudeKm": 485.7800824341,
      "azimuthDegs": 90.0243851919,
      "elevationDegs": 9.2140719597,
      "lat": 27.5106839751,
      "lng": -64.459581523,
      "rangeKm": 1713.254702641,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 684
    },
    {
      "altitudeKm": 485.521550417,
      "azimuthDegs": 90.0274081981,
      "elevationDegs": 9.146759627,
      "lat": 27.5049601534,
      "lng": -64.4180447566,
      "rangeKm": 1717.2505940272,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 685
    },
    {
      "altitudeKm": 485.2583424129,
      "azimuthDegs": 90.0304317143,
      "elevationDegs": 9.0794625424,
      "lat": 27.499214067,
      "lng": -64.3764634511,
      "rangeKm": 1721.2503973164,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 686
    },
    {
      "altitudeKm": 484.9903163194,
      "azimuthDegs": 90.0334493438,
      "elevationDegs": 9.0121766946,
      "lat": 27.4934472699,
      "lng": -64.3348375581,
      "rangeKm": 1725.2540403177,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 687
    },
    {
      "altitudeKm": 484.7176005724,
      "azimuthDegs": 90.0364629525,
      "elevationDegs": 8.9449052523,
      "lat": 27.4876591905,
      "lng": -64.2931665519,
      "rangeKm": 1729.261635435,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 688
    },
    {
      "altitudeKm": 484.4401667946,
      "azimuthDegs": 90.0394722966,
      "elevationDegs": 8.8776485169,
      "lat": 27.4818499411,
      "lng": -64.2514511963,
      "rangeKm": 1733.2730980222,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 689
    },
    {
      "altitudeKm": 484.1579451131,
      "azimuthDegs": 90.0424758237,
      "elevationDegs": 8.8104038307,
      "lat": 27.476019815,
      "lng": -64.209690998,
      "rangeKm": 1737.2884459623,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 690
    },
    {
      "altitudeKm": 483.8711440173,
      "azimuthDegs": 90.0454769505,
      "elevationDegs": 8.7431772571,
      "lat": 27.4701678917,
      "lng": -64.1678858438,
      "rangeKm": 1741.3077883321,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 691
    },
    {
      "altitudeKm": 483.579490451,
      "azimuthDegs": 90.0484749627,
      "elevationDegs": 8.6759617443,
      "lat": 27.464294405,
      "lng": -64.126036524,
      "rangeKm": 1745.3309394221,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 692
    },
    {
      "altitudeKm": 483.2832440226,
      "azimuthDegs": 90.0514661154,
      "elevationDegs": 8.6087634945,
      "lat": 27.4584001018,
      "lng": -64.0841416709,
      "rangeKm": 1749.3581250161,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 693
    },
    {
      "altitudeKm": 482.9821969187,
      "azimuthDegs": 90.0544576021,
      "elevationDegs": 8.541575277,
      "lat": 27.452483041,
      "lng": -64.0422007894,
      "rangeKm": 1753.3893421477,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 694
    },
    {
      "altitudeKm": 482.6764998349,
      "azimuthDegs": 90.0574417581,
      "elevationDegs": 8.4744048802,
      "lat": 27.4465453892,
      "lng": -64.0002158974,
      "rangeKm": 1757.4244244309,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 695
    },
    {
      "altitudeKm": 482.3661485034,
      "azimuthDegs": 90.0604249085,
      "elevationDegs": 8.407249469,
      "lat": 27.4405852633,
      "lng": -63.9581852198,
      "rangeKm": 1761.4635722254,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 696
    },
    {
      "altitudeKm": 482.0510806787,
      "azimuthDegs": 90.0634023688,
      "elevationDegs": 8.3401079724,
      "lat": 27.4346038675,
      "lng": -63.9161091045,
      "rangeKm": 1765.5067112599,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 697
    },
    {
      "altitudeKm": 481.7313793827,
      "azimuthDegs": 90.0663788321,
      "elevationDegs": 8.2729819993,
      "lat": 27.4285998834,
      "lng": -63.8739870354,
      "rangeKm": 1769.5539459587,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 698
    },
    {
      "altitudeKm": 481.4069431916,
      "azimuthDegs": 90.0693493864,
      "elevationDegs": 8.2058704701,
      "lat": 27.4225746855,
      "lng": -63.8318202025,
      "rangeKm": 1773.6051023815,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 699
    },
    {
      "altitudeKm": 481.0778607053,
      "azimuthDegs": 90.0723145609,
      "elevationDegs": 8.1387736586,
      "lat": 27.4165278761,
      "lng": -63.7896068317,
      "rangeKm": 1777.6603950371,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 700
    },
    {
      "altitudeKm": 480.7440572022,
      "azimuthDegs": 90.0752769856,
      "elevationDegs": 8.0716903169,
      "lat": 27.4104588232,
      "lng": -63.7473476811,
      "rangeKm": 1781.7197327212,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 701
    },
    {
      "altitudeKm": 480.4056227307,
      "azimuthDegs": 90.0782381905,
      "elevationDegs": 8.0046235504,
      "lat": 27.4043671227,
      "lng": -63.7050430816,
      "rangeKm": 1785.7831265956,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 702
    },
    {
      "altitudeKm": 480.0625341534,
      "azimuthDegs": 90.0811938097,
      "elevationDegs": 7.9375722896,
      "lat": 27.3982538081,
      "lng": -63.6626925318,
      "rangeKm": 1789.8506022,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 703
    },
    {
      "altitudeKm": 479.71475595,
      "azimuthDegs": 90.0841467034,
      "elevationDegs": 7.8705352951,
      "lat": 27.3921180765,
      "lng": -63.6202959458,
      "rangeKm": 1793.9221681445,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 704
    },
    {
      "altitudeKm": 479.3623841755,
      "azimuthDegs": 90.0870942968,
      "elevationDegs": 7.8035143628,
      "lat": 27.3859604427,
      "lng": -63.5778523957,
      "rangeKm": 1797.9979456353,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 705
    },
    {
      "altitudeKm": 479.0053044268,
      "azimuthDegs": 90.0900389435,
      "elevationDegs": 7.7365082047,
      "lat": 27.3797804467,
      "lng": -63.5353634801,
      "rangeKm": 1802.0777439488,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 706
    },
    {
      "altitudeKm": 478.6436858606,
      "azimuthDegs": 90.0929826457,
      "elevationDegs": 7.6695199478,
      "lat": 27.3735773408,
      "lng": -63.492827849,
      "rangeKm": 1806.1617730323,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 707
    },
    {
      "altitudeKm": 478.2773866102,
      "azimuthDegs": 90.0959193422,
      "elevationDegs": 7.6025457137,
      "lat": 27.3673526738,
      "lng": -63.4502454199,
      "rangeKm": 1810.2499634871,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 708
    },
    {
      "altitudeKm": 477.9063651293,
      "azimuthDegs": 90.0988559242,
      "elevationDegs": 7.5355855511,
      "lat": 27.3611047235,
      "lng": -63.4076173668,
      "rangeKm": 1814.3422138306,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 709
    },
    {
      "altitudeKm": 477.5308034937,
      "azimuthDegs": 90.1017872782,
      "elevationDegs": 7.4686427801,
      "lat": 27.3548345761,
      "lng": -63.3649419221,
      "rangeKm": 1818.4387507688,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 710
    },
    {
      "altitudeKm": 477.1505933382,
      "azimuthDegs": 90.1047116949,
      "elevationDegs": 7.4017148419,
      "lat": 27.3485426896,
      "lng": -63.3222194188,
      "rangeKm": 1822.5394944233,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 711
    },
    {
      "altitudeKm": 476.7657329466,
      "azimuthDegs": 90.1076362569,
      "elevationDegs": 7.3348018239,
      "lat": 27.3422271684,
      "lng": -63.2794501922,
      "rangeKm": 1826.6444429961,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 712
    },
    {
      "altitudeKm": 476.3763190579,
      "azimuthDegs": 90.1105584168,
      "elevationDegs": 7.2679055265,
      "lat": 27.3358885247,
      "lng": -63.236633317,
      "rangeKm": 1830.7537171964,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 713
    },
    {
      "altitudeKm": 475.9823284578,
      "azimuthDegs": 90.1134749334,
      "elevationDegs": 7.2010275694,
      "lat": 27.3295277913,
      "lng": -63.1937703869,
      "rangeKm": 1834.8671383876,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 714
    },
    {
      "altitudeKm": 475.5836867387,
      "azimuthDegs": 90.1163873547,
      "elevationDegs": 7.1341640409,
      "lat": 27.3231443329,
      "lng": -63.1508600516,
      "rangeKm": 1838.9848206518,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 715
    },
    {
      "altitudeKm": 475.1804382049,
      "azimuthDegs": 90.1192999231,
      "elevationDegs": 7.067316496,
      "lat": 27.3167369991,
      "lng": -63.107902649,
      "rangeKm": 1843.1067680315,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 716
    },
    {
      "altitudeKm": 474.7726063434,
      "azimuthDegs": 90.1222056613,
      "elevationDegs": 7.0004853868,
      "lat": 27.3103075649,
      "lng": -63.0648976674,
      "rangeKm": 1847.2330124098,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 717
    },
    {
      "altitudeKm": 474.3601895887,
      "azimuthDegs": 90.1251115508,
      "elevationDegs": 6.9336707926,
      "lat": 27.3038541336,
      "lng": -63.0218454458,
      "rangeKm": 1851.3635519575,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 718
    },
    {
      "altitudeKm": 473.943211501,
      "azimuthDegs": 90.1280106473,
      "elevationDegs": 6.8668731638,
      "lat": 27.2973784798,
      "lng": -62.9787454716,
      "rangeKm": 1855.4984184708,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 719
    },
    {
      "altitudeKm": 473.5215914285,
      "azimuthDegs": 90.1309084394,
      "elevationDegs": 6.8000898606,
      "lat": 27.2908790495,
      "lng": -62.9355976571,
      "rangeKm": 1859.6376159913,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 720
    },
    {
      "altitudeKm": 473.0955113059,
      "azimuthDegs": 90.1338009387,
      "elevationDegs": 6.7333267707,
      "lat": 27.2843569311,
      "lng": -62.8924023435,
      "rangeKm": 1863.7811645654,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 721
    },
    {
      "altitudeKm": 472.6648114214,
      "azimuthDegs": 90.1366921444,
      "elevationDegs": 6.6665785414,
      "lat": 27.2778109127,
      "lng": -62.8491590161,
      "rangeKm": 1867.929074205,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 722
    },
    {
      "altitudeKm": 472.2295081794,
      "azimuthDegs": 90.1395791121,
      "elevationDegs": 6.5998468024,
      "lat": 27.2712418547,
      "lng": -62.8058684238,
      "rangeKm": 1872.0812657161,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 723
    },
    {
      "altitudeKm": 471.7896481556,
      "azimuthDegs": 90.1424650244,
      "elevationDegs": 6.5331305609,
      "lat": 27.2646485966,
      "lng": -62.7625288063,
      "rangeKm": 1876.2379482444,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 724
    },
    {
      "altitudeKm": 471.34529366,
      "azimuthDegs": 90.1453442539,
      "elevationDegs": 6.4664328781,
      "lat": 27.2580327448,
      "lng": -62.7191409128,
      "rangeKm": 1880.3990475691,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 725
    },
    {
      "altitudeKm": 470.8963235449,
      "azimuthDegs": 90.1482219812,
      "elevationDegs": 6.3997510423,
      "lat": 27.2513929198,
      "lng": -62.6757054916,
      "rangeKm": 1884.5644686377,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 726
    },
    {
      "altitudeKm": 470.4429145606,
      "azimuthDegs": 90.151097188,
      "elevationDegs": 6.3330895252,
      "lat": 27.2447292879,
      "lng": -62.6322220514,
      "rangeKm": 1888.7343246723,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 727
    },
    {
      "altitudeKm": 469.9848743358,
      "azimuthDegs": 90.1539696894,
      "elevationDegs": 6.2664418105,
      "lat": 27.2380417224,
      "lng": -62.5886896411,
      "rangeKm": 1892.908638679,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 728
    },
    {
      "altitudeKm": 469.5223847662,
      "azimuthDegs": 90.1568355814,
      "elevationDegs": 6.1998136978,
      "lat": 27.2313313124,
      "lng": -62.5451086051,
      "rangeKm": 1897.0874290505,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 729
    },
    {
      "altitudeKm": 469.0553199749,
      "azimuthDegs": 90.159702888,
      "elevationDegs": 6.1332011742,
      "lat": 27.2245957531,
      "lng": -62.5014788562,
      "rangeKm": 1901.2706959227,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 730
    },
    {
      "altitudeKm": 468.5836629613,
      "azimuthDegs": 90.1625646214,
      "elevationDegs": 6.0666045891,
      "lat": 27.2178369937,
      "lng": -62.4578007061,
      "rangeKm": 1905.4583714018,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 731
    },
    {
      "altitudeKm": 468.1075862688,
      "azimuthDegs": 90.165422681,
      "elevationDegs": 6.0000270937,
      "lat": 27.211054274,
      "lng": -62.4140728333,
      "rangeKm": 1909.6506627976,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 732
    },
    {
      "altitudeKm": 467.6269733742,
      "azimuthDegs": 90.1682792723,
      "elevationDegs": 5.9334672948,
      "lat": 27.2042471383,
      "lng": -62.3702968181,
      "rangeKm": 1913.8473809441,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 733
    },
    {
      "altitudeKm": 467.1419226638,
      "azimuthDegs": 90.1711319795,
      "elevationDegs": 5.8669269853,
      "lat": 27.1974160923,
      "lng": -62.3264717393,
      "rangeKm": 1918.0486450255,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 734
    },
    {
      "altitudeKm": 466.65227989,
      "azimuthDegs": 90.1739818154,
      "elevationDegs": 5.800402259,
      "lat": 27.1905608425,
      "lng": -62.2825979052,
      "rangeKm": 1922.2543729794,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 735
    },
    {
      "altitudeKm": 466.1581851237,
      "azimuthDegs": 90.1768266084,
      "elevationDegs": 5.7338950587,
      "lat": 27.1836817145,
      "lng": -62.2386735614,
      "rangeKm": 1926.4647837291,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 736
    },
    {
      "altitudeKm": 465.6596002824,
      "azimuthDegs": 90.1796699582,
      "elevationDegs": 5.667406603,
      "lat": 27.1767779131,
      "lng": -62.1947007223,
      "rangeKm": 1930.6796809978,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 737
    },
    {
      "altitudeKm": 465.1565368699,
      "azimuthDegs": 90.1825118626,
      "elevationDegs": 5.6009371434,
      "lat": 27.1698493738,
      "lng": -62.1506793001,
      "rangeKm": 1934.8990796303,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 738
    },
    {
      "altitudeKm": 464.6490110345,
      "azimuthDegs": 90.1853513664,
      "elevationDegs": 5.5344846152,
      "lat": 27.1628960122,
      "lng": -62.1066071043,
      "rangeKm": 1939.1232014339,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 739
    },
    {
      "altitudeKm": 464.1369970748,
      "azimuthDegs": 90.1881854276,
      "elevationDegs": 5.4680504054,
      "lat": 27.1559188695,
      "lng": -62.0624857089,
      "rangeKm": 1943.3518665265,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 740
    },
    {
      "altitudeKm": 463.6205027622,
      "azimuthDegs": 90.1910168892,
      "elevationDegs": 5.4016335302,
      "lat": 27.1489169519,
      "lng": -62.0183141936,
      "rangeKm": 1947.585185196,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 741
    },
    {
      "altitudeKm": 463.099498192,
      "azimuthDegs": 90.1938455365,
      "elevationDegs": 5.3352341118,
      "lat": 27.1418903735,
      "lng": -61.9740932998,
      "rangeKm": 1951.8230728796,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 742
    },
    {
      "altitudeKm": 462.5741611267,
      "azimuthDegs": 90.1966703955,
      "elevationDegs": 5.2688565297,
      "lat": 27.1348392978,
      "lng": -61.9298225504,
      "rangeKm": 1956.0656400704,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 743
    },
    {
      "altitudeKm": 462.0443337338,
      "azimuthDegs": 90.199495257,
      "elevationDegs": 5.2024956958,
      "lat": 27.1277624998,
      "lng": -61.8855014154,
      "rangeKm": 1960.3129015105,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 744
    },
    {
      "altitudeKm": 461.5099987564,
      "azimuthDegs": 90.2023133656,
      "elevationDegs": 5.1361519201,
      "lat": 27.1206619291,
      "lng": -61.8411301917,
      "rangeKm": 1964.5647890427,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 745
    },
    {
      "altitudeKm": 460.9712758991,
      "azimuthDegs": 90.2051328583,
      "elevationDegs": 5.0698280029,
      "lat": 27.1135351639,
      "lng": -61.7967088477,
      "rangeKm": 1968.8213925407,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 746
    },
    {
      "altitudeKm": 460.4281899047,
      "azimuthDegs": 90.2079472178,
      "elevationDegs": 5.0035243956,
      "lat": 27.106383973,
      "lng": -61.7522368516,
      "rangeKm": 1973.0827430273,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 747
    },
    {
      "altitudeKm": 459.8805867186,
      "azimuthDegs": 90.2107574377,
      "elevationDegs": 4.9372372689,
      "lat": 27.0992080592,
      "lng": -61.7077144972,
      "rangeKm": 1977.3487605352,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 748
    },
    {
      "altitudeKm": 459.3285111985,
      "azimuthDegs": 90.2135674505,
      "elevationDegs": 4.8709680719,
      "lat": 27.0920062683,
      "lng": -61.6631421397,
      "rangeKm": 1981.6194477261,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 749
    },
    {
      "altitudeKm": 458.7722294049,
      "azimuthDegs": 90.2163739496,
      "elevationDegs": 4.8047226851,
      "lat": 27.0847793301,
      "lng": -61.6185184814,
      "rangeKm": 1985.8950171315,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 750
    },
    {
      "altitudeKm": 458.211346043,
      "azimuthDegs": 90.2191747626,
      "elevationDegs": 4.738491866,
      "lat": 27.0775279851,
      "lng": -61.5738445754,
      "rangeKm": 1990.1752077635,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 751
    },
    {
      "altitudeKm": 457.6461898149,
      "azimuthDegs": 90.2219771613,
      "elevationDegs": 4.672282654,
      "lat": 27.0702498577,
      "lng": -61.5291191917,
      "rangeKm": 1994.4603028325,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 752
    },
    {
      "altitudeKm": 457.0765346126,
      "azimuthDegs": 90.2247752484,
      "elevationDegs": 4.6060910743,
      "lat": 27.0629468501,
      "lng": -61.4843438267,
      "rangeKm": 1998.750040199,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 753
    },
    {
      "altitudeKm": 456.5025201888,
      "azimuthDegs": 90.2275696791,
      "elevationDegs": 4.5399179492,
      "lat": 27.0556183454,
      "lng": -61.4395159093,
      "rangeKm": 2003.0447334376,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 754
    },
    {
      "altitudeKm": 455.9241094464,
      "azimuthDegs": 90.2303611779,
      "elevationDegs": 4.4737654991,
      "lat": 27.0482644871,
      "lng": -61.3946382783,
      "rangeKm": 2007.3440896208,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 755
    },
    {
      "altitudeKm": 455.3413543405,
      "azimuthDegs": 90.2331526864,
      "elevationDegs": 4.4076330033,
      "lat": 27.0408840904,
      "lng": -61.3497091924,
      "rangeKm": 2011.6483191284,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 756
    },
    {
      "altitudeKm": 454.754280101,
      "azimuthDegs": 90.235937841,
      "elevationDegs": 4.34152092,
      "lat": 27.0334789218,
      "lng": -61.3047281118,
      "rangeKm": 2015.9574528168,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 757
    },
    {
      "altitudeKm": 454.1627655295,
      "azimuthDegs": 90.2387214611,
      "elevationDegs": 4.2754266299,
      "lat": 27.026047595,
      "lng": -61.2596957711,
      "rangeKm": 2020.2713995461,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 758
    },
    {
      "altitudeKm": 453.5668230523,
      "azimuthDegs": 90.2415035454,
      "elevationDegs": 4.2093504036,
      "lat": 27.0185900402,
      "lng": -61.2146120793,
      "rangeKm": 2024.5901743795,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 759
    },
    {
      "altitudeKm": 452.9666315589,
      "azimuthDegs": 90.2442831466,
      "elevationDegs": 4.143296531,
      "lat": 27.0111064182,
      "lng": -61.1694765748,
      "rangeKm": 2028.9138850231,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 760
    },
    {
      "altitudeKm": 452.3620825732,
      "azimuthDegs": 90.247058731,
      "elevationDegs": 4.0772625826,
      "lat": 27.0035971786,
      "lng": -61.1242895392,
      "rangeKm": 2033.2424564929,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 761
    },
    {
      "altitudeKm": 451.7531862923,
      "azimuthDegs": 90.249832999,
      "elevationDegs": 4.0112476963,
      "lat": 26.9960613155,
      "lng": -61.0790500579,
      "rangeKm": 2037.5760000921,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 762
    },
    {
      "altitudeKm": 451.139957706,
      "azimuthDegs": 90.252603269,
      "elevationDegs": 3.9452532619,
      "lat": 26.9884996938,
      "lng": -61.0337588643,
      "rangeKm": 2041.9144341998,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 763
    },
    {
      "altitudeKm": 450.5223640165,
      "azimuthDegs": 90.2553720225,
      "elevationDegs": 3.8792782102,
      "lat": 26.9809114918,
      "lng": -60.9884158676,
      "rangeKm": 2046.2577707331,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 764
    },
    {
      "altitudeKm": 449.9005065093,
      "azimuthDegs": 90.2581370032,
      "elevationDegs": 3.813324346,
      "lat": 26.973297204,
      "lng": -60.9430201543,
      "rangeKm": 2050.6061267868,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 765
    },
    {
      "altitudeKm": 449.2742659783,
      "azimuthDegs": 90.2609002697,
      "elevationDegs": 3.7473901691,
      "lat": 26.9656563793,
      "lng": -60.8975732792,
      "rangeKm": 2054.9593154849,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 766
    },
    {
      "altitudeKm": 448.6437851879,
      "azimuthDegs": 90.2636624366,
      "elevationDegs": 3.6814766041,
      "lat": 26.9579883886,
      "lng": -60.8520726849,
      "rangeKm": 2059.3176499151,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 767
    },
    {
      "altitudeKm": 448.0089143478,
      "azimuthDegs": 90.2664191323,
      "elevationDegs": 3.6155821276,
      "lat": 26.950294803,
      "lng": -60.8065202884,
      "rangeKm": 2063.6808598955,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 768
    },
    {
      "altitudeKm": 447.3698634593,
      "azimuthDegs": 90.2691758426,
      "elevationDegs": 3.5497110035,
      "lat": 26.9425737595,
      "lng": -60.760915273,
      "rangeKm": 2068.0491350967,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 769
    },
    {
      "altitudeKm": 446.7264916278,
      "azimuthDegs": 90.2719273105,
      "elevationDegs": 3.4838597109,
      "lat": 26.9348267908,
      "lng": -60.7152574513,
      "rangeKm": 2072.4224147519,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 770
    },
    {
      "altitudeKm": 446.0787211984,
      "azimuthDegs": 90.2746784173,
      "elevationDegs": 3.418025901,
      "lat": 26.9270523209,
      "lng": -60.6695467308,
      "rangeKm": 2076.8007088729,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 771
    },
    {
      "altitudeKm": 445.4267334436,
      "azimuthDegs": 90.2774256057,
      "elevationDegs": 3.3522148744,
      "lat": 26.9192514474,
      "lng": -60.6237834808,
      "rangeKm": 2081.1840263082,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 772
    },
    {
      "altitudeKm": 444.7705398085,
      "azimuthDegs": 90.28017151,
      "elevationDegs": 3.2864258156,
      "lat": 26.9114231584,
      "lng": -60.577966791,
      "rangeKm": 2085.5724786055,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 773
    },
    {
      "altitudeKm": 444.1100319552,
      "azimuthDegs": 90.2829146336,
      "elevationDegs": 3.2206563407,
      "lat": 26.9035679006,
      "lng": -60.5320969286,
      "rangeKm": 2089.9659922833,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 774
    },
    {
      "altitudeKm": 443.445300597,
      "azimuthDegs": 90.2856562741,
      "elevationDegs": 3.1549091143,
      "lat": 26.8956852681,
      "lng": -60.4861742648,
      "rangeKm": 2094.3645709141,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 775
    },
    {
      "altitudeKm": 442.7762812045,
      "azimuthDegs": 90.2883951429,
      "elevationDegs": 3.0891819955,
      "lat": 26.8877755196,
      "lng": -60.4401982452,
      "rangeKm": 2098.7682405256,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 776
    },
    {
      "altitudeKm": 442.1030321687,
      "azimuthDegs": 90.2911288496,
      "elevationDegs": 3.0234765407,
      "lat": 26.8798393335,
      "lng": -60.3941687776,
      "rangeKm": 2103.1770180393,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 777
    },
    {
      "altitudeKm": 441.4255204005,
      "azimuthDegs": 90.2938624001,
      "elevationDegs": 2.9577906826,
      "lat": 26.871874942,
      "lng": -60.3480849517,
      "rangeKm": 2107.5910133923,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 778
    },
    {
      "altitudeKm": 440.743793674,
      "azimuthDegs": 90.2965942806,
      "elevationDegs": 2.8921278496,
      "lat": 26.8638830689,
      "lng": -60.3019487782,
      "rangeKm": 2112.0100331636,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 779
    },
    {
      "altitudeKm": 440.0579212341,
      "azimuthDegs": 90.2993212277,
      "elevationDegs": 2.8264877089,
      "lat": 26.8558643465,
      "lng": -60.2557580645,
      "rangeKm": 2116.4343041389,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 780
    },
    {
      "altitudeKm": 439.3677819196,
      "azimuthDegs": 90.3020478193,
      "elevationDegs": 2.7608676997,
      "lat": 26.8478173829,
      "lng": -60.2095135365,
      "rangeKm": 2120.8637379207,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 781
    },
    {
      "altitudeKm": 438.6733568887,
      "azimuthDegs": 90.3047704042,
      "elevationDegs": 2.6952670076,
      "lat": 26.8397431864,
      "lng": -60.163214634,
      "rangeKm": 2125.2983631945,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 782
    },
    {
      "altitudeKm": 437.9748143806,
      "azimuthDegs": 90.3074915343,
      "elevationDegs": 2.6296906146,
      "lat": 26.8316410204,
      "lng": -60.1168622013,
      "rangeKm": 2129.7381706888,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 783
    },
    {
      "altitudeKm": 437.2720452889,
      "azimuthDegs": 90.3102123045,
      "elevationDegs": 2.5641351404,
      "lat": 26.8235103866,
      "lng": -60.0704556787,
      "rangeKm": 2134.183185331,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 784
    },
    {
      "altitudeKm": 436.5650314627,
      "azimuthDegs": 90.3129265356,
      "elevationDegs": 2.4986007746,
      "lat": 26.8153532367,
      "lng": -60.0239953197,
      "rangeKm": 2138.6333382068,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 785
    },
    {
      "altitudeKm": 435.8539399552,
      "azimuthDegs": 90.3156418715,
      "elevationDegs": 2.4330904597,
      "lat": 26.8071669469,
      "lng": -59.9774803415,
      "rangeKm": 2143.0888145832,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 786
    },
    {
      "altitudeKm": 435.1385852589,
      "azimuthDegs": 90.3183555855,
      "elevationDegs": 2.3675995072,
      "lat": 26.7989522907,
      "lng": -59.9309105267,
      "rangeKm": 2147.5495547014,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 787
    },
    {
      "altitudeKm": 434.419148472,
      "azimuthDegs": 90.321064249,
      "elevationDegs": 2.3021330449,
      "lat": 26.7907103694,
      "lng": -59.8842862542,
      "rangeKm": 2152.0155637949,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 788
    },
    {
      "altitudeKm": 433.6954758936,
      "azimuthDegs": 90.323771305,
      "elevationDegs": 2.236686474,
      "lat": 26.7824399277,
      "lng": -59.8376069595,
      "rangeKm": 2156.4868661825,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 789
    },
    {
      "altitudeKm": 432.9677035408,
      "azimuthDegs": 90.3264756712,
      "elevationDegs": 2.1712636419,
      "lat": 26.7741413133,
      "lng": -59.7908730229,
      "rangeKm": 2160.9634653063,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 790
    },
    {
      "altitudeKm": 432.2358001023,
      "azimuthDegs": 90.3291796815,
      "elevationDegs": 2.1058635425,
      "lat": 26.7658136949,
      "lng": -59.7440843531,
      "rangeKm": 2165.4453743711,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 791
    },
    {
      "altitudeKm": 431.4997473094,
      "azimuthDegs": 90.3318797611,
      "elevationDegs": 2.0404853759,
      "lat": 26.757458078,
      "lng": -59.6972403837,
      "rangeKm": 2169.9326221591,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 792
    },
    {
      "altitudeKm": 430.7594689296,
      "azimuthDegs": 90.3345780516,
      "elevationDegs": 1.9751278642,
      "lat": 26.7490738221,
      "lng": -59.6503418341,
      "rangeKm": 2174.4251230929,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 793
    },
    {
      "altitudeKm": 430.0151911383,
      "azimuthDegs": 90.337273861,
      "elevationDegs": 1.9097953963,
      "lat": 26.7406608914,
      "lng": -59.6033874619,
      "rangeKm": 2178.9230781486,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 794
    },
    {
      "altitudeKm": 429.2667155308,
      "azimuthDegs": 90.3399678866,
      "elevationDegs": 1.8444840979,
      "lat": 26.7322191655,
      "lng": -59.5563783239,
      "rangeKm": 2183.4263156884,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 795
    },
    {
      "altitudeKm": 428.5141012846,
      "azimuthDegs": 90.3426603185,
      "elevationDegs": 1.7791945243,
      "lat": 26.7237483732,
      "lng": -59.5093135144,
      "rangeKm": 2187.9349496122,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 796
    },
    {
      "altitudeKm": 427.7574074534,
      "azimuthDegs": 90.3453488588,
      "elevationDegs": 1.7139281791,
      "lat": 26.7152491908,
      "lng": -59.4621929404,
      "rangeKm": 2192.4489955511,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 797
    },
    {
      "altitudeKm": 426.9966800973,
      "azimuthDegs": 90.3480370439,
      "elevationDegs": 1.648686357,
      "lat": 26.7067204565,
      "lng": -59.4150169883,
      "rangeKm": 2196.9684536182,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 798
    },
    {
      "altitudeKm": 426.2318244866,
      "azimuthDegs": 90.3507201247,
      "elevationDegs": 1.5834659965,
      "lat": 26.6981635009,
      "lng": -59.3677846074,
      "rangeKm": 2201.4933663396,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 799
    },
    {
      "altitudeKm": 425.4628731591,
      "azimuthDegs": 90.3534049514,
      "elevationDegs": 1.518269128,
      "lat": 26.6895762729,
      "lng": -59.3204974744,
      "rangeKm": 2206.0236204418,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 800
    },
    {
      "altitudeKm": 424.6898219634,
      "azimuthDegs": 90.3560846891,
      "elevationDegs": 1.4530942413,
      "lat": 26.6809606641,
      "lng": -59.2731537252,
      "rangeKm": 2210.5593585662,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 801
    },
    {
      "altitudeKm": 423.9127939221,
      "azimuthDegs": 90.3587640715,
      "elevationDegs": 1.387944887,
      "lat": 26.6723151854,
      "lng": -59.225754229,
      "rangeKm": 2215.1005668698,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 802
    },
    {
      "altitudeKm": 423.1316497962,
      "azimuthDegs": 90.361440658,
      "elevationDegs": 1.322816805,
      "lat": 26.6636404091,
      "lng": -59.1782979302,
      "rangeKm": 2219.6472877568,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 803
    },
    {
      "altitudeKm": 422.3465256425,
      "azimuthDegs": 90.3641134054,
      "elevationDegs": 1.2577137336,
      "lat": 26.6549366845,
      "lng": -59.1307852175,
      "rangeKm": 2224.199522363,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 804
    },
    {
      "altitudeKm": 421.5573002303,
      "azimuthDegs": 90.3667866633,
      "elevationDegs": 1.1926331631,
      "lat": 26.6462026131,
      "lng": -59.083216807,
      "rangeKm": 2228.7571851794,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 805
    },
    {
      "altitudeKm": 420.7640468805,
      "azimuthDegs": 90.3694548832,
      "elevationDegs": 1.127575865,
      "lat": 26.6374397575,
      "lng": -59.0355913125,
      "rangeKm": 2233.3204049458,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 806
    },
    {
      "altitudeKm": 419.9667210785,
      "azimuthDegs": 90.372123611,
      "elevationDegs": 1.0625415787,
      "lat": 26.628646393,
      "lng": -58.9879099329,
      "rangeKm": 2237.8890821873,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 807
    },
    {
      "altitudeKm": 419.1654742737,
      "azimuthDegs": 90.3747909535,
      "elevationDegs": 0.9975324158,
      "lat": 26.6198228039,
      "lng": -58.9401709605,
      "rangeKm": 2242.4634296469,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 808
    },
    {
      "altitudeKm": 418.3601509331,
      "azimuthDegs": 90.3774529196,
      "elevationDegs": 0.9325466413,
      "lat": 26.6109705773,
      "lng": -58.8923762381,
      "rangeKm": 2247.0431797351,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 809
    },
    {
      "altitudeKm": 417.550814567,
      "azimuthDegs": 90.380114552,
      "elevationDegs": 0.8675830696,
      "lat": 26.6020875296,
      "lng": -58.8445232501,
      "rangeKm": 2251.6286434443,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 810
    },
    {
      "altitudeKm": 416.7375087961,
      "azimuthDegs": 90.3827744447,
      "elevationDegs": 0.8026447301,
      "lat": 26.5931744028,
      "lng": -58.7966140041,
      "rangeKm": 2256.2196229585,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 811
    },
    {
      "altitudeKm": 415.9202180848,
      "azimuthDegs": 90.3854315855,
      "elevationDegs": 0.7377299888,
      "lat": 26.5842312425,
      "lng": -58.7486471125,
      "rangeKm": 2260.8162464179,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 812
    },
    {
      "altitudeKm": 415.0989872561,
      "azimuthDegs": 90.3880869934,
      "elevationDegs": 0.6728409707,
      "lat": 26.5752578386,
      "lng": -58.7006237765,
      "rangeKm": 2265.4184144645,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 813
    },
    {
      "altitudeKm": 414.273679952,
      "azimuthDegs": 90.3907406889,
      "elevationDegs": 0.6079726601,
      "lat": 26.5662538013,
      "lng": -58.652542118,
      "rangeKm": 2270.0262705678,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 814
    },
    {
      "altitudeKm": 413.4445086811,
      "azimuthDegs": 90.3933928329,
      "elevationDegs": 0.543130913,
      "lat": 26.5572191571,
      "lng": -58.6044030232,
      "rangeKm": 2274.6397990603,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 815
    },
    {
      "altitudeKm": 412.611365355,
      "azimuthDegs": 90.3960420621,
      "elevationDegs": 0.478313442,
      "lat": 26.5481543435,
      "lng": -58.5562067132,
      "rangeKm": 2279.2589306031,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 816
    },
    {
      "altitudeKm": 411.7742648096,
      "azimuthDegs": 90.3986883849,
      "elevationDegs": 0.4135204947,
      "lat": 26.5390592772,
      "lng": -58.5079530936,
      "rangeKm": 2283.8836796558,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 817
    },
    {
      "altitudeKm": 410.9332240592,
      "azimuthDegs": 90.4013341881,
      "elevationDegs": 0.3487514758,
      "lat": 26.529932918,
      "lng": -58.4596412664,
      "rangeKm": 2288.514159765,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 818
    },
    {
      "altitudeKm": 410.0882582738,
      "azimuthDegs": 90.4039794654,
      "elevationDegs": 0.2840066442,
      "lat": 26.520775181,
      "lng": -58.4112711386,
      "rangeKm": 2293.150385457,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 819
    },
    {
      "altitudeKm": 409.2393488195,
      "azimuthDegs": 90.4066184754,
      "elevationDegs": 0.2192861056,
      "lat": 26.5115880192,
      "lng": -58.362842925,
      "rangeKm": 2297.7922872855,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 820
    },
    {
      "altitudeKm": 408.3865291988,
      "azimuthDegs": 90.4092601538,
      "elevationDegs": 0.1545908937,
      "lat": 26.5023684276,
      "lng": -58.3143575199,
      "rangeKm": 2302.4398496035,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 821
    },
    {
      "altitudeKm": 407.5298431165,
      "azimuthDegs": 90.4118957624,
      "elevationDegs": 0.0899208228,
      "lat": 26.493119043,
      "lng": -58.2658130377,
      "rangeKm": 2307.093215617,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 822
    },
    {
      "altitudeKm": 406.6691250079,
      "azimuthDegs": 90.4145316879,
      "elevationDegs": 0.025272264,
      "lat": 26.4838377017,
      "lng": -58.2172101849,
      "rangeKm": 2311.75230281,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 823
    },
    {
      "altitudeKm": 405.8046786778,
      "azimuthDegs": 90.417166078,
      "elevationDegs": -0.0393475147,
      "lat": 26.4745249935,
      "lng": -58.168549059,
      "rangeKm": 2316.4171912236,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 824
    },
    {
      "altitudeKm": 404.9363201043,
      "azimuthDegs": 90.4197964312,
      "elevationDegs": -0.1039429303,
      "lat": 26.4651816755,
      "lng": -58.1198293743,
      "rangeKm": 2321.0878284247,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 825
    },
    {
      "altitudeKm": 404.0639755202,
      "azimuthDegs": 90.4224270933,
      "elevationDegs": -0.1685160683,
      "lat": 26.4558061421,
      "lng": -58.071051035,
      "rangeKm": 2325.7642304632,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 826
    },
    {
      "altitudeKm": 403.1878728304,
      "azimuthDegs": 90.425055064,
      "elevationDegs": -0.2330618351,
      "lat": 26.4463993051,
      "lng": -58.0222136449,
      "rangeKm": 2330.4464926927,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 827
    },
    {
      "altitudeKm": 402.3079041631,
      "azimuthDegs": 90.4276790206,
      "elevationDegs": -0.2975824855,
      "lat": 26.4369615989,
      "lng": -57.9733174111,
      "rangeKm": 2335.1345470227,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 828
    },
    {
      "altitudeKm": 401.4241194093,
      "azimuthDegs": 90.4303046096,
      "elevationDegs": -0.3620776026,
      "lat": 26.4274908957,
      "lng": -57.9243619399,
      "rangeKm": 2339.8284918015,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 829
    },
    {
      "altitudeKm": 400.536499791,
      "azimuthDegs": 90.432926192,
      "elevationDegs": -0.4265471062,
      "lat": 26.4179891491,
      "lng": -57.8753474363,
      "rangeKm": 2344.5282573997,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 830
    },
    {
      "altitudeKm": 399.6450163921,
      "azimuthDegs": 90.4355459265,
      "elevationDegs": -0.4909919081,
      "lat": 26.4084555116,
      "lng": -57.8262738052,
      "rangeKm": 2349.233859206,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 831
    },
    {
      "altitudeKm": 398.7496848638,
      "azimuthDegs": 90.4381638153,
      "elevationDegs": -0.555411758,
      "lat": 26.3988898954,
      "lng": -57.7771409513,
      "rangeKm": 2353.9453116701,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 832
    },
    {
      "altitudeKm": 397.8505687334,
      "azimuthDegs": 90.4407800314,
      "elevationDegs": -0.6198060304,
      "lat": 26.3892920108,
      "lng": -57.7279479821,
      "rangeKm": 2358.6627277559,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 833
    },
    {
      "altitudeKm": 396.9477117588,
      "azimuthDegs": 90.443395548,
      "elevationDegs": -0.6841727489,
      "lat": 26.3796616519,
      "lng": -57.6786961053,
      "rangeKm": 2363.3860062267,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 834
    },
    {
      "altitudeKm": 396.0409782815,
      "azimuthDegs": 90.4460080794,
      "elevationDegs": -0.7485158727,
      "lat": 26.3699993683,
      "lng": -57.6293842182,
      "rangeKm": 2368.1151954261,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 835
    },
    {
      "altitudeKm": 395.1304598789,
      "azimuthDegs": 90.4486187729,
      "elevationDegs": -0.8128330511,
      "lat": 26.3603047522,
      "lng": -57.5800127295,
      "rangeKm": 2372.8502927286,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 836
    },
    {
      "altitudeKm": 394.2162205403,
      "azimuthDegs": 90.4512277996,
      "elevationDegs": -0.8771236561,
      "lat": 26.3505775123,
      "lng": -57.5305807488,
      "rangeKm": 2377.591410901,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 837
    },
    {
      "altitudeKm": 393.2982282265,
      "azimuthDegs": 90.4538349918,
      "elevationDegs": -0.9413878246,
      "lat": 26.3408177614,
      "lng": -57.4810889783,
      "rangeKm": 2382.338465689,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 838
    },
    {
      "altitudeKm": 392.3763790269,
      "azimuthDegs": 90.4564413299,
      "elevationDegs": -1.0056285303,
      "lat": 26.3310249662,
      "lng": -57.4315368157,
      "rangeKm": 2387.0914903752,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 839
    },
    {
      "altitudeKm": 391.4509287882,
      "azimuthDegs": 90.4590448576,
      "elevationDegs": -1.069839095,
      "lat": 26.3211999249,
      "lng": -57.381925182,
      "rangeKm": 2391.8504611908,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 840
    },
    {
      "altitudeKm": 390.5215783976,
      "azimuthDegs": 90.4616464044,
      "elevationDegs": -1.1340277717,
      "lat": 26.3113419764,
      "lng": -57.332252457,
      "rangeKm": 2396.6154482695,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 841
    },
    {
      "altitudeKm": 389.588614815,
      "azimuthDegs": 90.4642472509,
      "elevationDegs": -1.1981869657,
      "lat": 26.3014508402,
      "lng": -57.2825200727,
      "rangeKm": 2401.3864113651,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 842
    },
    {
      "altitudeKm": 388.6518764551,
      "azimuthDegs": 90.4668441905,
      "elevationDegs": -1.2623222367,
      "lat": 26.2915271731,
      "lng": -57.2327256113,
      "rangeKm": 2406.1635163465,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 843
    },
    {
      "altitudeKm": 387.7114645472,
      "azimuthDegs": 90.4694423565,
      "elevationDegs": -1.3264290722,
      "lat": 26.2815695786,
      "lng": -57.1828720971,
      "rangeKm": 2410.9465289443,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 844
    },
    {
      "altitudeKm": 386.767310719,
      "azimuthDegs": 90.4720366241,
      "elevationDegs": -1.3905114793,
      "lat": 26.2715792701,
      "lng": -57.1329563147,
      "rangeKm": 2415.7357121687,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 845
    },
    {
      "altitudeKm": 385.8194847987,
      "azimuthDegs": 90.4746289094,
      "elevationDegs": -1.4545659018,
      "lat": 26.2615559315,
      "lng": -57.0829807785,
      "rangeKm": 2420.5308475434,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 846
    },
    {
      "altitudeKm": 384.8679810623,
      "azimuthDegs": 90.4772205082,
      "elevationDegs": -1.5185944697,
      "lat": 26.2514986155,
      "lng": -57.0329432962,
      "rangeKm": 2425.3321659544,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 847
    },
    {
      "altitudeKm": 383.9128379565,
      "azimuthDegs": 90.4798101262,
      "elevationDegs": -1.5825945808,
      "lat": 26.2414080868,
      "lng": -56.982845871,
      "rangeKm": 2430.1394647568,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 848
    },
    {
      "altitudeKm": 382.9539750645,
      "azimuthDegs": 90.4823979437,
      "elevationDegs": -1.6465703785,
      "lat": 26.2312837111,
      "lng": -56.9326857961,
      "rangeKm": 2434.9529934612,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 849
    },
    {
      "altitudeKm": 381.9915548051,
      "azimuthDegs": 90.4849839494,
      "elevationDegs": -1.7105168355,
      "lat": 26.221125733,
      "lng": -56.8824647978,
      "rangeKm": 2439.7726290957,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 850
    },
    {
      "altitudeKm": 381.0253502755,
      "azimuthDegs": 90.4875678323,
      "elevationDegs": -1.7744392906,
      "lat": 26.2109341322,
      "lng": -56.8321825405,
      "rangeKm": 2444.5983268025,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 851
    },
    {
      "altitudeKm": 380.0555956523,
      "azimuthDegs": 90.4901489682,
      "elevationDegs": -1.838333541,
      "lat": 26.2007088528,
      "lng": -56.7818378632,
      "rangeKm": 2449.4302765526,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 852
    },
    {
      "altitudeKm": 379.0822403447,
      "azimuthDegs": 90.4927301944,
      "elevationDegs": -1.9021992613,
      "lat": 26.1904491347,
      "lng": -56.7314327695,
      "rangeKm": 2454.2682794812,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 853
    },
    {
      "altitudeKm": 378.1052494943,
      "azimuthDegs": 90.4953096274,
      "elevationDegs": -1.9660394169,
      "lat": 26.1801551008,
      "lng": -56.6809645501,
      "rangeKm": 2459.112583743,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 854
    },
    {
      "altitudeKm": 377.1246165483,
      "azimuthDegs": 90.4978880433,
      "elevationDegs": -2.0298525745,
      "lat": 26.169826755,
      "lng": -56.6304352063,
      "rangeKm": 2463.9629884082,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 855
    },
    {
      "altitudeKm": 376.1403768546,
      "azimuthDegs": 90.5004624647,
      "elevationDegs": -2.093638982,
      "lat": 26.1594648754,
      "lng": -56.579843334,
      "rangeKm": 2468.8196223898,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 856
    },
    {
      "altitudeKm": 375.1525782862,
      "azimuthDegs": 90.5030360365,
      "elevationDegs": -2.1573974942,
      "lat": 26.1490682887,
      "lng": -56.5291893579,
      "rangeKm": 2473.6824832465,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 857
    },
    {
      "altitudeKm": 374.1612378956,
      "azimuthDegs": 90.5056087553,
      "elevationDegs": -2.2211278729,
      "lat": 26.1386369003,
      "lng": -56.4784731838,
      "rangeKm": 2478.5515850365,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 858
    },
    {
      "altitudeKm": 373.1662979807,
      "azimuthDegs": 90.508179529,
      "elevationDegs": -2.2848318686,
      "lat": 26.1281709279,
      "lng": -56.4276941954,
      "rangeKm": 2483.4269611844,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 859
    },
    {
      "altitudeKm": 372.1678505737,
      "azimuthDegs": 90.5107494473,
      "elevationDegs": -2.3485072493,
      "lat": 26.1176699632,
      "lng": -56.3768528198,
      "rangeKm": 2488.3086064696,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 860
    },
    {
      "altitudeKm": 371.1658323635,
      "azimuthDegs": 90.5133152416,
      "elevationDegs": -2.4121550976,
      "lat": 26.1071351967,
      "lng": -56.3259492259,
      "rangeKm": 2493.1964536167,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 861
    },
    {
      "altitudeKm": 370.1602970301,
      "azimuthDegs": 90.5158822043,
      "elevationDegs": -2.4757749484,
      "lat": 26.0965644811,
      "lng": -56.2749830555,
      "rangeKm": 2498.0906007516,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 862
    },
    {
      "altitudeKm": 369.1511565904,
      "azimuthDegs": 90.5184461456,
      "elevationDegs": -2.5393694192,
      "lat": 26.0859591097,
      "lng": -56.2239531646,
      "rangeKm": 2502.9910985724,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 863
    },
    {
      "altitudeKm": 368.13857786,
      "azimuthDegs": 90.5210092315,
      "elevationDegs": -2.6029343222,
      "lat": 26.0753183618,
      "lng": -56.1728605077,
      "rangeKm": 2507.8979217642,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 864
    },
    {
      "altitudeKm": 367.1224975312,
      "azimuthDegs": 90.5235682188,
      "elevationDegs": -2.6664707428,
      "lat": 26.0646434279,
      "lng": -56.1217052495,
      "rangeKm": 2512.8110031462,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 865
    },
    {
      "altitudeKm": 366.1028952135,
      "azimuthDegs": 90.5261272848,
      "elevationDegs": -2.729980171,
      "lat": 26.0539324694,
      "lng": -56.0704865097,
      "rangeKm": 2517.7304607625,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 866
    },
    {
      "altitudeKm": 365.0797885803,
      "azimuthDegs": 90.528686421,
      "elevationDegs": -2.7934623606,
      "lat": 26.0431853881,
      "lng": -56.0192041932,
      "rangeKm": 2522.65630882,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 867
    },
    {
      "altitudeKm": 364.0532831332,
      "azimuthDegs": 90.5312416291,
      "elevationDegs": -2.8569149206,
      "lat": 26.03240362,
      "lng": -55.9678582054,
      "rangeKm": 2527.5885551044,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 868
    },
    {
      "altitudeKm": 363.0232584475,
      "azimuthDegs": 90.53379675,
      "elevationDegs": -2.9203402012,
      "lat": 26.021585743,
      "lng": -55.9164492345,
      "rangeKm": 2532.5271220581,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 869
    },
    {
      "altitudeKm": 361.9898264233,
      "azimuthDegs": 90.5363499442,
      "elevationDegs": -2.983736455,
      "lat": 26.0107322163,
      "lng": -55.8649764022,
      "rangeKm": 2537.4721183793,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 870
    },
    {
      "altitudeKm": 360.9529543898,
      "azimuthDegs": 90.5389010598,
      "elevationDegs": -3.0471038899,
      "lat": 25.999843152,
      "lng": -55.8134403965,
      "rangeKm": 2542.4234601548,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 871
    },
    {
      "altitudeKm": 359.912592459,
      "azimuthDegs": 90.5414511729,
      "elevationDegs": -3.1104448282,
      "lat": 25.9889177832,
      "lng": -55.7618398083,
      "rangeKm": 2547.3812831394,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 872
    },
    {
      "altitudeKm": 358.8688768094,
      "azimuthDegs": 90.5439993654,
      "elevationDegs": -3.1737560296,
      "lat": 25.9779564684,
      "lng": -55.7101750742,
      "rangeKm": 2552.3455774358,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 873
    },
    {
      "altitudeKm": 357.8217511967,
      "azimuthDegs": 90.5465445817,
      "elevationDegs": -3.2370391858,
      "lat": 25.9669594175,
      "lng": -55.6584455669,
      "rangeKm": 2557.3163776387,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 874
    },
    {
      "altitudeKm": 356.7711626275,
      "azimuthDegs": 90.5490895491,
      "elevationDegs": -3.3002940914,
      "lat": 25.9559258759,
      "lng": -55.6066532854,
      "rangeKm": 2562.2934850363,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 875
    },
    {
      "altitudeKm": 355.7172072458,
      "azimuthDegs": 90.5516336661,
      "elevationDegs": -3.3635210838,
      "lat": 25.9448554189,
      "lng": -55.5547952591,
      "rangeKm": 2567.2772277596,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 876
    },
    {
      "altitudeKm": 354.659919568,
      "azimuthDegs": 90.5541757152,
      "elevationDegs": -3.4267178527,
      "lat": 25.9337488287,
      "lng": -55.5028734884,
      "rangeKm": 2572.2673997437,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 877
    },
    {
      "altitudeKm": 353.5992945081,
      "azimuthDegs": 90.5567148022,
      "elevationDegs": -3.4898856291,
      "lat": 25.922606102,
      "lng": -55.4508865636,
      "rangeKm": 2577.2641335452,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 878
    },
    {
      "altitudeKm": 352.535329701,
      "azimuthDegs": 90.5592537866,
      "elevationDegs": -3.5530237783,
      "lat": 25.9114262733,
      "lng": -55.398835705,
      "rangeKm": 2582.2673279875,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 879
    },
    {
      "altitudeKm": 351.4678952953,
      "azimuthDegs": 90.5617905681,
      "elevationDegs": -3.6161358698,
      "lat": 25.9002098569,
      "lng": -55.3467197429,
      "rangeKm": 2587.2770395993,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 880
    },
    {
      "altitudeKm": 350.3972088658,
      "azimuthDegs": 90.564327392,
      "elevationDegs": -3.6792174102,
      "lat": 25.8889559239,
      "lng": -55.2945388786,
      "rangeKm": 2592.2933374437,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 881
    },
    {
      "altitudeKm": 349.3232586082,
      "azimuthDegs": 90.5668612642,
      "elevationDegs": -3.7422690185,
      "lat": 25.8776654494,
      "lng": -55.2422924804,
      "rangeKm": 2597.3162527661,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 882
    },
    {
      "altitudeKm": 348.245850612,
      "azimuthDegs": 90.5693948813,
      "elevationDegs": -3.8052948897,
      "lat": 25.8663373114,
      "lng": -55.1899806904,
      "rangeKm": 2602.345731488,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 883
    },
    {
      "altitudeKm": 347.1652820378,
      "azimuthDegs": 90.5719245075,
      "elevationDegs": -3.8682878954,
      "lat": 25.8549731044,
      "lng": -55.1376044926,
      "rangeKm": 2607.3817323044,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 884
    },
    {
      "altitudeKm": 346.0814181315,
      "azimuthDegs": 90.5744550669,
      "elevationDegs": -3.9312523511,
      "lat": 25.8435705095,
      "lng": -55.0851624763,
      "rangeKm": 2612.4244003065,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 885
    },
    {
      "altitudeKm": 344.994195985,
      "azimuthDegs": 90.5769834335,
      "elevationDegs": -3.9941893193,
      "lat": 25.8321307131,
      "lng": -55.0326547808,
      "rangeKm": 2617.4736697072,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 886
    },
    {
      "altitudeKm": 343.9037080831,
      "azimuthDegs": 90.5795106454,
      "elevationDegs": -4.0570966904,
      "lat": 25.8206533063,
      "lng": -54.9800818518,
      "rangeKm": 2622.5295326569,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 887
    },
    {
      "altitudeKm": 342.8100683934,
      "azimuthDegs": 90.5820349282,
      "elevationDegs": -4.1199727386,
      "lat": 25.8091387429,
      "lng": -54.9274428201,
      "rangeKm": 2627.5920961047,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 888
    },
    {
      "altitudeKm": 341.7132087972,
      "azimuthDegs": 90.5845601267,
      "elevationDegs": -4.1828192955,
      "lat": 25.7975853774,
      "lng": -54.8747375923,
      "rangeKm": 2632.6613823624,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 889
    },
    {
      "altitudeKm": 340.6130145319,
      "azimuthDegs": 90.5870829908,
      "elevationDegs": -4.2456378972,
      "lat": 25.7859946106,
      "lng": -54.8219670773,
      "rangeKm": 2637.73722835,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 890
    },
    {
      "altitudeKm": 339.5096517471,
      "azimuthDegs": 90.5896019097,
      "elevationDegs": -4.3084263433,
      "lat": 25.7743666806,
      "lng": -54.7691296308,
      "rangeKm": 2642.8198383852,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 891
    },
    {
      "altitudeKm": 338.403074218,
      "azimuthDegs": 90.5921215895,
      "elevationDegs": -4.3711850706,
      "lat": 25.7626998501,
      "lng": -54.7162264775,
      "rangeKm": 2647.9091154939,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 892
    },
    {
      "altitudeKm": 337.293323044,
      "azimuthDegs": 90.5946392394,
      "elevationDegs": -4.4339142002,
      "lat": 25.7509948751,
      "lng": -54.6632562036,
      "rangeKm": 2653.0051887641,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 893
    },
    {
      "altitudeKm": 336.1803432745,
      "azimuthDegs": 90.5971574909,
      "elevationDegs": -4.4966136269,
      "lat": 25.7392510053,
      "lng": -54.6102208065,
      "rangeKm": 2658.1078594585,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 894
    },
    {
      "altitudeKm": 335.0642717434,
      "azimuthDegs": 90.5996718133,
      "elevationDegs": -4.5592819781,
      "lat": 25.7274695527,
      "lng": -54.5571180997,
      "rangeKm": 2663.2173492505,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 895
    },
    {
      "altitudeKm": 333.9450411054,
      "azimuthDegs": 90.6021860077,
      "elevationDegs": -4.6219210533,
      "lat": 25.7156488665,
      "lng": -54.5039479889,
      "rangeKm": 2668.3336812632,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 896
    },
    {
      "altitudeKm": 332.8226095624,
      "azimuthDegs": 90.6046978868,
      "elevationDegs": -4.6845305635,
      "lat": 25.7037900452,
      "lng": -54.4507119212,
      "rangeKm": 2673.4566701211,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 897
    },
    {
      "altitudeKm": 331.6971012016,
      "azimuthDegs": 90.607207746,
      "elevationDegs": -4.7471093216,
      "lat": 25.6918925504,
      "lng": -54.39740826,
      "rangeKm": 2678.5865240525,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 898
    },
    {
      "altitudeKm": 330.5684398183,
      "azimuthDegs": 90.6097173274,
      "elevationDegs": -4.8096585883,
      "lat": 25.6799557189,
      "lng": -54.3440376814,
      "rangeKm": 2683.7231644695,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 899
    },
    {
      "altitudeKm": 329.4367181557,
      "azimuthDegs": 90.6122276346,
      "elevationDegs": -4.8721763176,
      "lat": 25.6679791419,
      "lng": -54.2906006435,
      "rangeKm": 2688.8665820515,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 900
    },
    {
      "altitudeKm": 328.3018228645,
      "azimuthDegs": 90.6147318819,
      "elevationDegs": -4.9346657192,
      "lat": 25.6559651649,
      "lng": -54.2370953934,
      "rangeKm": 2694.016850066,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 901
    },
    {
      "altitudeKm": 327.1638632291,
      "azimuthDegs": 90.6172387302,
      "elevationDegs": -4.997124135,
      "lat": 25.6439104547,
      "lng": -54.1835234952,
      "rangeKm": 2699.1739277323,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 902
    },
    {
      "altitudeKm": 326.0229684567,
      "azimuthDegs": 90.619741689,
      "elevationDegs": -5.059549661,
      "lat": 25.6318173094,
      "lng": -54.1298835345,
      "rangeKm": 2704.3379337566,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 903
    },
    {
      "altitudeKm": 324.8787768836,
      "azimuthDegs": 90.6222440816,
      "elevationDegs": -5.1219496496,
      "lat": 25.619684336,
      "lng": -54.0761758415,
      "rangeKm": 2709.5087500605,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 904
    },
    {
      "altitudeKm": 323.7317197689,
      "azimuthDegs": 90.6247454632,
      "elevationDegs": -5.1843154918,
      "lat": 25.6075116364,
      "lng": -54.022400453,
      "rangeKm": 2714.6865037358,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 905
    },
    {
      "altitudeKm": 322.5815218878,
      "azimuthDegs": 90.6272454111,
      "elevationDegs": -5.2466525394,
      "lat": 25.5952993651,
      "lng": -53.9685576971,
      "rangeKm": 2719.8710666798,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 906
    },
    {
      "altitudeKm": 321.4283093606,
      "azimuthDegs": 90.6297442094,
      "elevationDegs": -5.3089595748,
      "lat": 25.5830469764,
      "lng": -53.9146459453,
      "rangeKm": 2725.0626467997,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 907
    },
    {
      "altitudeKm": 320.272112176,
      "azimuthDegs": 90.6322407162,
      "elevationDegs": -5.3712345796,
      "lat": 25.5707552732,
      "lng": -53.8606671934,
      "rangeKm": 2730.2610346343,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 908
    },
    {
      "altitudeKm": 319.1128874618,
      "azimuthDegs": 90.6347359347,
      "elevationDegs": -5.4334796144,
      "lat": 25.5584234526,
      "lng": -53.8066200228,
      "rangeKm": 2735.4663700372,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 909
    },
    {
      "altitudeKm": 317.9505929503,
      "azimuthDegs": 90.6372308604,
      "elevationDegs": -5.4956967122,
      "lat": 25.5460507089,
      "lng": -53.752503014,
      "rangeKm": 2740.6787933072,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 910
    },
    {
      "altitudeKm": 316.7853741892,
      "azimuthDegs": 90.6397235,
      "elevationDegs": -5.5578811115,
      "lat": 25.5336383226,
      "lng": -53.6983187216,
      "rangeKm": 2745.8980652589,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 911
    },
    {
      "altitudeKm": 315.6171888947,
      "azimuthDegs": 90.642214851,
      "elevationDegs": -5.6200348552,
      "lat": 25.5211854882,
      "lng": -53.6440657269,
      "rangeKm": 2751.1243259999,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 912
    },
    {
      "altitudeKm": 314.446057519,
      "azimuthDegs": 90.6447049133,
      "elevationDegs": -5.6821577171,
      "lat": 25.508692095,
      "lng": -53.5897439358,
      "rangeKm": 2756.3575891993,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 913
    },
    {
      "altitudeKm": 313.2718849399,
      "azimuthDegs": 90.6471945356,
      "elevationDegs": -5.7442522097,
      "lat": 25.4961575533,
      "lng": -53.5353526911,
      "rangeKm": 2761.5978986948,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 914
    },
    {
      "altitudeKm": 312.0948693455,
      "azimuthDegs": 90.6496818799,
      "elevationDegs": -5.8063131335,
      "lat": 25.4835829292,
      "lng": -53.4808937873,
      "rangeKm": 2766.8451110508,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 915
    },
    {
      "altitudeKm": 310.9147812295,
      "azimuthDegs": 90.6521678013,
      "elevationDegs": -5.8683469854,
      "lat": 25.4709672308,
      "lng": -53.4263646754,
      "rangeKm": 2772.099421825,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 916
    },
    {
      "altitudeKm": 309.7319019736,
      "azimuthDegs": 90.6546534136,
      "elevationDegs": -5.9303472991,
      "lat": 25.4583102304,
      "lng": -53.3717669551,
      "rangeKm": 2777.3607651881,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 917
    },
    {
      "altitudeKm": 308.5460534278,
      "azimuthDegs": 90.6571366196,
      "elevationDegs": -5.9923178632,
      "lat": 25.4456126313,
      "lng": -53.3171001632,
      "rangeKm": 2782.6291072702,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 918
    },
    {
      "altitudeKm": 307.3573214088,
      "azimuthDegs": 90.6596195173,
      "elevationDegs": -6.0542584014,
      "lat": 25.4328731014,
      "lng": -53.2623626834,
      "rangeKm": 2787.9046612414,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 919
    },
    {
      "altitudeKm": 306.1656078584,
      "azimuthDegs": 90.662099876,
      "elevationDegs": -6.1161692397,
      "lat": 25.4200929682,
      "lng": -53.2075567011,
      "rangeKm": 2793.1871448667,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 920
    },
    {
      "altitudeKm": 304.9711681895,
      "azimuthDegs": 90.6645790853,
      "elevationDegs": -6.1780468923,
      "lat": 25.4072711592,
      "lng": -53.1526804105,
      "rangeKm": 2798.4768367241,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 921
    },
    {
      "altitudeKm": 303.7738000195,
      "azimuthDegs": 90.6670577082,
      "elevationDegs": -6.2398948558,
      "lat": 25.3944075217,
      "lng": -53.097734669,
      "rangeKm": 2803.7735882706,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 922
    },
    {
      "altitudeKm": 302.5734521873,
      "azimuthDegs": 90.6695347724,
      "elevationDegs": -6.3017146284,
      "lat": 25.3815022373,
      "lng": -53.0427188107,
      "rangeKm": 2809.0774385763,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 923
    },
    {
      "altitudeKm": 301.370387462,
      "azimuthDegs": 90.6720105486,
      "elevationDegs": -6.3635010584,
      "lat": 25.3685551578,
      "lng": -52.9876331229,
      "rangeKm": 2814.3884412456,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 924
    },
    {
      "altitudeKm": 300.1645121047,
      "azimuthDegs": 90.6744858692,
      "elevationDegs": -6.4252566081,
      "lat": 25.3555656854,
      "lng": -52.9324769428,
      "rangeKm": 2819.7066413094,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 925
    },
    {
      "altitudeKm": 298.9557209581,
      "azimuthDegs": 90.6769596309,
      "elevationDegs": -6.4869832816,
      "lat": 25.342534222,
      "lng": -52.877250361,
      "rangeKm": 2825.0319814385,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 926
    },
    {
      "altitudeKm": 297.7441502412,
      "azimuthDegs": 90.6794310063,
      "elevationDegs": -6.5486781842,
      "lat": 25.3294611375,
      "lng": -52.8219538544,
      "rangeKm": 2830.3644435019,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 927
    },
    {
      "altitudeKm": 296.5298331751,
      "azimuthDegs": 90.6819019238,
      "elevationDegs": -6.6103415315,
      "lat": 25.316345315,
      "lng": -52.7665865733,
      "rangeKm": 2835.7041439334,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 928
    },
    {
      "altitudeKm": 295.312664702,
      "azimuthDegs": 90.6843712865,
      "elevationDegs": -6.6719753235,
      "lat": 25.3031871554,
      "lng": -52.7111486056,
      "rangeKm": 2841.0510256433,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 929
    },
    {
      "altitudeKm": 294.092666434,
      "azimuthDegs": 90.686839096,
      "elevationDegs": -6.733579331,
      "lat": 25.2899865424,
      "lng": -52.6556398554,
      "rangeKm": 2846.4051024698,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 930
    },
    {
      "altitudeKm": 292.8699868053,
      "azimuthDegs": 90.6893064427,
      "elevationDegs": -6.7951511086,
      "lat": 25.2767428432,
      "lng": -52.6000600495,
      "rangeKm": 2851.766458599,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 931
    },
    {
      "altitudeKm": 291.6445208599,
      "azimuthDegs": 90.6917722357,
      "elevationDegs": -6.8566926522,
      "lat": 25.2634564579,
      "lng": -52.5444092728,
      "rangeKm": 2857.1350371802,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 932
    },
    {
      "altitudeKm": 290.4163621478,
      "azimuthDegs": 90.6942374283,
      "elevationDegs": -6.9182020488,
      "lat": 25.2501269773,
      "lng": -52.4886880083,
      "rangeKm": 2862.5108258099,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 933
    },
    {
      "altitudeKm": 289.1854441549,
      "azimuthDegs": 90.6967002498,
      "elevationDegs": -6.9796819277,
      "lat": 25.2367546446,
      "lng": -52.4328942533,
      "rangeKm": 2867.8939866159,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 934
    },
    {
      "altitudeKm": 287.9518220361,
      "azimuthDegs": 90.699162338,
      "elevationDegs": -7.0411297445,
      "lat": 25.2233392071,
      "lng": -52.3770305759,
      "rangeKm": 2873.2842883588,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 935
    },
    {
      "altitudeKm": 286.7154848163,
      "azimuthDegs": 90.7016220611,
      "elevationDegs": -7.1025475898,
      "lat": 25.2098806817,
      "lng": -52.3210942188,
      "rangeKm": 2878.6819896761,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 936
    },
    {
      "altitudeKm": 285.4764285387,
      "azimuthDegs": 90.7040819982,
      "elevationDegs": -7.1639350169,
      "lat": 25.1963781014,
      "lng": -52.2650864195,
      "rangeKm": 2884.0869886939,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 937
    },
    {
      "altitudeKm": 284.2347179501,
      "azimuthDegs": 90.706540385,
      "elevationDegs": -7.225290871,
      "lat": 25.1828321297,
      "lng": -52.2090070845,
      "rangeKm": 2889.4992920477,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 938
    },
    {
      "altitudeKm": 282.9903752483,
      "azimuthDegs": 90.708997223,
      "elevationDegs": -7.2866149345,
      "lat": 25.1692426484,
      "lng": -52.1528561202,
      "rangeKm": 2894.9189132487,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 939
    },
    {
      "altitudeKm": 281.7433087678,
      "azimuthDegs": 90.7114533245,
      "elevationDegs": -7.347909579,
      "lat": 25.1556090466,
      "lng": -52.0966328503,
      "rangeKm": 2900.3458997049,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 940
    },
    {
      "altitudeKm": 280.4936124175,
      "azimuthDegs": 90.7139096259,
      "elevationDegs": -7.4091729148,
      "lat": 25.1419309146,
      "lng": -52.0403377639,
      "rangeKm": 2905.780238443,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 941
    },
    {
      "altitudeKm": 279.2413222599,
      "azimuthDegs": 90.7163616928,
      "elevationDegs": -7.4704045315,
      "lat": 25.1282099879,
      "lng": -51.9839701834,
      "rangeKm": 2911.2219553698,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 942
    },
    {
      "altitudeKm": 277.9863893409,
      "azimuthDegs": 90.7188148962,
      "elevationDegs": -7.5316064385,
      "lat": 25.1144435716,
      "lng": -51.9275292665,
      "rangeKm": 2916.6711819897,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 943
    },
    {
      "altitudeKm": 276.7288250295,
      "azimuthDegs": 90.7212662914,
      "elevationDegs": -7.5927765223,
      "lat": 25.1006335013,
      "lng": -51.8710177495,
      "rangeKm": 2922.1276023139,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 944
    },
    {
      "altitudeKm": 275.4686770573,
      "azimuthDegs": 90.7237144049,
      "elevationDegs": -7.6539162552,
      "lat": 25.0867795551,
      "lng": -51.814432122,
      "rangeKm": 2927.5915720161,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 945
    },
    {
      "altitudeKm": 274.9639899406,
      "azimuthDegs": 90.7246945227,
      "elevationDegs": -7.6783617636,
      "lat": 25.0812249545,
      "lng": -51.7917775354,
      "rangeKm": 2929.7792813506,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 945
    },
    {
      "altitudeKm": 274.7113578205,
      "azimuthDegs": 90.7251849609,
      "elevationDegs": -7.6905851624,
      "lat": 25.0784447767,
      "lng": -51.7804459003,
      "rangeKm": 2930.8735431549,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 946
    },
    {
      "altitudeKm": 274.4586990725,
      "azimuthDegs": 90.7256740037,
      "elevationDegs": -7.7028052733,
      "lat": 25.0756636014,
      "lng": -51.7691121532,
      "rangeKm": 2931.9680277642,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 946
    },
    {
      "altitudeKm": 274.2059714441,
      "azimuthDegs": 90.7261633855,
      "elevationDegs": -7.7150230128,
      "lat": 25.0728806442,
      "lng": -51.7577762936,
      "rangeKm": 2933.0627427261,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 946
    },
    {
      "altitudeKm": 273.9531750731,
      "azimuthDegs": 90.726653106,
      "elevationDegs": -7.7272383813,
      "lat": 25.0700959042,
      "lng": -51.7464383209,
      "rangeKm": 2934.1576881129,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 946
    },
    {
      "altitudeKm": 273.7001828806,
      "azimuthDegs": 90.7271421059,
      "elevationDegs": -7.7394535558,
      "lat": 25.0673098957,
      "lng": -51.7350983922,
      "rangeKm": 2935.2527954039,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 946
    },
    {
      "altitudeKm": 273.4471372086,
      "azimuthDegs": 90.7276322455,
      "elevationDegs": -7.7516652598,
      "lat": 25.0645220423,
      "lng": -51.7237576837,
      "rangeKm": 2936.3480100858,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 947
    },
    {
      "altitudeKm": 273.1939670193,
      "azimuthDegs": 90.7281225942,
      "elevationDegs": -7.7638751332,
      "lat": 25.0617326312,
      "lng": -51.7124156061,
      "rangeKm": 2937.4433595411,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 947
    },
    {
      "altitudeKm": 272.9407709028,
      "azimuthDegs": 90.7286115506,
      "elevationDegs": -7.7760817248,
      "lat": 25.0589422188,
      "lng": -51.7010714126,
      "rangeKm": 2938.5389321844,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 947
    },
    {
      "altitudeKm": 272.687394317,
      "azimuthDegs": 90.7291005882,
      "elevationDegs": -7.7882870273,
      "lat": 25.0561504748,
      "lng": -51.6897265942,
      "rangeKm": 2939.6345438674,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 947
    },
    {
      "altitudeKm": 272.4339496553,
      "azimuthDegs": 90.7295899641,
      "elevationDegs": -7.8004899634,
      "lat": 25.0533569441,
      "lng": -51.6783796586,
      "rangeKm": 2940.730386446,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 947
    },
    {
      "altitudeKm": 272.1803957415,
      "azimuthDegs": 90.7300803493,
      "elevationDegs": -7.8126899785,
      "lat": 25.0505617931,
      "lng": -51.6670326856,
      "rangeKm": 2941.8262408404,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 948
    },
    {
      "altitudeKm": 271.9266890275,
      "azimuthDegs": 90.7305682878,
      "elevationDegs": -7.8248888914,
      "lat": 25.0477661534,
      "lng": -51.65568375,
      "rangeKm": 2942.9222502289,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 948
    },
    {
      "altitudeKm": 271.6729442013,
      "azimuthDegs": 90.7310581636,
      "elevationDegs": -7.8370832554,
      "lat": 25.0449686052,
      "lng": -51.6443353651,
      "rangeKm": 2944.0182441297,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 948
    },
    {
      "altitudeKm": 271.4191177462,
      "azimuthDegs": 90.731546522,
      "elevationDegs": -7.8492748891,
      "lat": 25.0421702799,
      "lng": -51.6329856055,
      "rangeKm": 2945.1143657054,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 948
    },
    {
      "altitudeKm": 271.1651674174,
      "azimuthDegs": 90.7320350906,
      "elevationDegs": -7.8614647051,
      "lat": 25.0393703926,
      "lng": -51.6216344704,
      "rangeKm": 2946.2106226501,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 948
    },
    {
      "altitudeKm": 270.9110933074,
      "azimuthDegs": 90.732523869,
      "elevationDegs": -7.8736527042,
      "lat": 25.0365689428,
      "lng": -51.6102819589,
      "rangeKm": 2947.3070150535,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 949
    },
    {
      "altitudeKm": 270.6569525495,
      "azimuthDegs": 90.7330119308,
      "elevationDegs": -7.8858368885,
      "lat": 25.0337666548,
      "lng": -51.5989294056,
      "rangeKm": 2948.4034119943,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 949
    },
    {
      "altitudeKm": 270.4027028377,
      "azimuthDegs": 90.7335010008,
      "elevationDegs": -7.8980181723,
      "lat": 25.0309627438,
      "lng": -51.5875768097,
      "rangeKm": 2949.4998211642,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 949
    },
    {
      "altitudeKm": 270.1483295147,
      "azimuthDegs": 90.7339902803,
      "elevationDegs": -7.9101976462,
      "lat": 25.0281572689,
      "lng": -51.576222835,
      "rangeKm": 2950.5963659944,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 949
    },
    {
      "altitudeKm": 269.8938896257,
      "azimuthDegs": 90.7344788438,
      "elevationDegs": -7.9223733163,
      "lat": 25.0253509549,
      "lng": -51.5648688163,
      "rangeKm": 2951.6929154967,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 949
    },
    {
      "altitudeKm": 269.6393262527,
      "azimuthDegs": 90.734967617,
      "elevationDegs": -7.9345471809,
      "lat": 25.0225430761,
      "lng": -51.5535134173,
      "rangeKm": 2952.7896007943,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 950
    },
    {
      "altitudeKm": 269.3846963824,
      "azimuthDegs": 90.7354556753,
      "elevationDegs": -7.9467172486,
      "lat": 25.0197343575,
      "lng": -51.5421579728,
      "rangeKm": 2953.8862908545,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 950
    },
    {
      "altitudeKm": 269.1300141043,
      "azimuthDegs": 90.735944868,
      "elevationDegs": -7.9588838896,
      "lat": 25.0169237864,
      "lng": -51.5308017377,
      "rangeKm": 2954.9830892211,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 950
    },
    {
      "altitudeKm": 267.8547572126,
      "azimuthDegs": 90.7383866173,
      "elevationDegs": -8.0196800367,
      "lat": 25.0028541071,
      "lng": -51.474014366,
      "rangeKm": 2960.4675334591,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 951
    },
    {
      "altitudeKm": 266.5771207439,
      "azimuthDegs": 90.7408263955,
      "elevationDegs": -8.0804028545,
      "lat": 24.9887538749,
      "lng": -51.4172157808,
      "rangeKm": 2965.9530975922,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 952
    },
    {
      "altitudeKm": 265.2969958001,
      "azimuthDegs": 90.7432639679,
      "elevationDegs": -8.1410538377,
      "lat": 24.9746235048,
      "lng": -51.3604073724,
      "rangeKm": 2971.4395966766,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 953
    },
    {
      "altitudeKm": 264.0144570173,
      "azimuthDegs": 90.7457002729,
      "elevationDegs": -8.2016317827,
      "lat": 24.9604626707,
      "lng": -51.3035896373,
      "rangeKm": 2976.9270094128,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 954
    },
    {
      "altitudeKm": 262.7293385184,
      "azimuthDegs": 90.7481359901,
      "elevationDegs": -8.2621401569,
      "lat": 24.9462710607,
      "lng": -51.2467626257,
      "rangeKm": 2982.4152826286,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 955
    },
    {
      "altitudeKm": 261.4418558849,
      "azimuthDegs": 90.7505687654,
      "elevationDegs": -8.3225754137,
      "lat": 24.9320496924,
      "lng": -51.1899260929,
      "rangeKm": 2987.9044746729,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 956
    },
    {
      "altitudeKm": 260.151928613,
      "azimuthDegs": 90.7530020245,
      "elevationDegs": -8.3829397558,
      "lat": 24.9177969532,
      "lng": -51.1330799428,
      "rangeKm": 2993.3946080484,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 957
    },
    {
      "altitudeKm": 258.8595742826,
      "azimuthDegs": 90.755431466,
      "elevationDegs": -8.4432333939,
      "lat": 24.9035146595,
      "lng": -51.0762234819,
      "rangeKm": 2998.8857014182,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 958
    },
    {
      "altitudeKm": 257.5647261397,
      "azimuthDegs": 90.7578612942,
      "elevationDegs": -8.503457463,
      "lat": 24.8892011426,
      "lng": -51.0193579498,
      "rangeKm": 3004.3776538616,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 959
    },
    {
      "altitudeKm": 256.2674587427,
      "azimuthDegs": 90.7602873473,
      "elevationDegs": -8.5636116187,
      "lat": 24.8748579896,
      "lng": -50.9624819107,
      "rangeKm": 3009.8705796285,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 960
    },
    {
      "altitudeKm": 254.9677052403,
      "azimuthDegs": 90.7627138156,
      "elevationDegs": -8.6236969913,
      "lat": 24.8604835313,
      "lng": -50.9055966046,
      "rangeKm": 3015.3643779353,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 961
    },
    {
      "altitudeKm": 253.6655114718,
      "azimuthDegs": 90.7651390195,
      "elevationDegs": -8.6837130839,
      "lat": 24.8460785141,
      "lng": -50.8487019338,
      "rangeKm": 3020.8590472315,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 962
    },
    {
      "altitudeKm": 252.3608682688,
      "azimuthDegs": 90.7675621939,
      "elevationDegs": -8.7436613132,
      "lat": 24.8316429496,
      "lng": -50.7917964619,
      "rangeKm": 3026.3547183399,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 963
    },
    {
      "altitudeKm": 251.0537352026,
      "azimuthDegs": 90.7699840139,
      "elevationDegs": -8.8035415874,
      "lat": 24.8171769744,
      "lng": -50.7348821662,
      "rangeKm": 3031.8511785269,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 964
    },
    {
      "altitudeKm": 249.7441607112,
      "azimuthDegs": 90.7724038406,
      "elevationDegs": -8.8633547553,
      "lat": 24.8026803682,
      "lng": -50.6779568719,
      "rangeKm": 3037.3486542008,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 965
    },
    {
      "altitudeKm": 248.4321040251,
      "azimuthDegs": 90.7748223469,
      "elevationDegs": -8.9231007289,
      "lat": 24.7881532689,
      "lng": -50.6210225557,
      "rangeKm": 3042.8469326145,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 966
    },
    {
      "altitudeKm": 247.1177260783,
      "azimuthDegs": 90.7772381215,
      "elevationDegs": -8.9827778974,
      "lat": 24.7735959622,
      "lng": -50.564077648,
      "rangeKm": 3048.3462025528,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 967
    },
    {
      "altitudeKm": 245.8008317064,
      "azimuthDegs": 90.7796542821,
      "elevationDegs": -9.0423895057,
      "lat": 24.7590072911,
      "lng": -50.5071235217,
      "rangeKm": 3053.8462973648,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 968
    },
    {
      "altitudeKm": 244.4814543791,
      "azimuthDegs": 90.7820683952,
      "elevationDegs": -9.1019360501,
      "lat": 24.7443880523,
      "lng": -50.4501587372,
      "rangeKm": 3059.3473398248,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 969
    },
    {
      "altitudeKm": 243.1596682255,
      "azimuthDegs": 90.7844813742,
      "elevationDegs": -9.1614163335,
      "lat": 24.7297379225,
      "lng": -50.3931838013,
      "rangeKm": 3064.8493076441,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 970
    },
    {
      "altitudeKm": 241.8354192989,
      "azimuthDegs": 90.7868931123,
      "elevationDegs": -9.2208312827,
      "lat": 24.7150570919,
      "lng": -50.336199349,
      "rangeKm": 3070.3521124679,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 971
    },
    {
      "altitudeKm": 240.5086996148,
      "azimuthDegs": 90.7893028548,
      "elevationDegs": -9.2801822513,
      "lat": 24.7003455661,
      "lng": -50.2792039399,
      "rangeKm": 3075.8558858541,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 972
    },
    {
      "altitudeKm": 239.1795251152,
      "azimuthDegs": 90.7917113894,
      "elevationDegs": -9.3394686057,
      "lat": 24.6856032548,
      "lng": -50.2221988149,
      "rangeKm": 3081.3605102076,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 973
    },
    {
      "altitudeKm": 237.8478997007,
      "azimuthDegs": 90.7941187312,
      "elevationDegs": -9.3986907055,
      "lat": 24.6708301162,
      "lng": -50.1651838745,
      "rangeKm": 3086.8659924818,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 974
    },
    {
      "altitudeKm": 236.5138855904,
      "azimuthDegs": 90.7965250159,
      "elevationDegs": -9.4578483435,
      "lat": 24.6560258752,
      "lng": -50.1081582882,
      "rangeKm": 3092.372434688,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 975
    },
    {
      "altitudeKm": 235.1773005705,
      "azimuthDegs": 90.7989291315,
      "elevationDegs": -9.516944537,
      "lat": 24.6411912333,
      "lng": -50.051122807,
      "rangeKm": 3097.8796835378,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 976
    },
    {
      "altitudeKm": 233.838404698,
      "azimuthDegs": 90.8013331064,
      "elevationDegs": -9.5759754322,
      "lat": 24.6263251251,
      "lng": -49.9940770926,
      "rangeKm": 3103.3878764914,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 977
    },
    {
      "altitudeKm": 232.4970044025,
      "azimuthDegs": 90.8037350648,
      "elevationDegs": -9.6349450105,
      "lat": 24.611428297,
      "lng": -49.9370205521,
      "rangeKm": 3108.8969852874,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 978
    },
    {
      "altitudeKm": 231.1531564553,
      "azimuthDegs": 90.8061341469,
      "elevationDegs": -9.6938517921,
      "lat": 24.5965014535,
      "lng": -49.8799544261,
      "rangeKm": 3114.4068829556,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 979
    },
    {
      "altitudeKm": 229.8068987872,
      "azimuthDegs": 90.8085338905,
      "elevationDegs": -9.7526966995,
      "lat": 24.5815425008,
      "lng": -49.8228771569,
      "rangeKm": 3119.9177848586,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 980
    },
    {
      "altitudeKm": 228.4581320526,
      "azimuthDegs": 90.8109299139,
      "elevationDegs": -9.8114810171,
      "lat": 24.5665537239,
      "lng": -49.7657894861,
      "rangeKm": 3125.4295199658,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 981
    },
    {
      "altitudeKm": 227.1069747373,
      "azimuthDegs": 90.8133273834,
      "elevationDegs": -9.8702031787,
      "lat": 24.5515327075,
      "lng": -49.7086918156,
      "rangeKm": 3130.9421485028,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 982
    },
    {
      "altitudeKm": 225.7533164478,
      "azimuthDegs": 90.8157211701,
      "elevationDegs": -9.9288654214,
      "lat": 24.5364817806,
      "lng": -49.65158354,
      "rangeKm": 3136.4556246126,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 983
    },
    {
      "altitudeKm": 224.3972757812,
      "azimuthDegs": 90.818116424,
      "elevationDegs": -9.9874661782,
      "lat": 24.5213985273,
      "lng": -49.5944650655,
      "rangeKm": 3141.9700083634,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 984
    },
    {
      "altitudeKm": 223.038742362,
      "azimuthDegs": 90.8205080323,
      "elevationDegs": -10.0460076763,
      "lat": 24.5062852764,
      "lng": -49.5373357826,
      "rangeKm": 3147.4852541173,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 985
    },
    {
      "altitudeKm": 221.6778071748,
      "azimuthDegs": 90.8228986337,
      "elevationDegs": -10.1044890072,
      "lat": 24.4911406804,
      "lng": -49.480195482,
      "rangeKm": 3153.0014428429,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 986
    },
    {
      "altitudeKm": 220.3144153358,
      "azimuthDegs": 90.8252881247,
      "elevationDegs": -10.1629110677,
      "lat": 24.4759649302,
      "lng": -49.423044788,
      "rangeKm": 3158.5184870355,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 987
    },
    {
      "altitudeKm": 218.9485709664,
      "azimuthDegs": 90.8276765198,
      "elevationDegs": -10.2212741808,
      "lat": 24.4607579818,
      "lng": -49.365883599,
      "rangeKm": 3164.0363939635,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 988
    },
    {
      "altitudeKm": 217.5802188671,
      "azimuthDegs": 90.8300637168,
      "elevationDegs": -10.2795792418,
      "lat": 24.4455200267,
      "lng": -49.3087125366,
      "rangeKm": 3169.5550763116,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 989
    },
    {
      "altitudeKm": 216.2094818556,
      "azimuthDegs": 90.8324499637,
      "elevationDegs": -10.3378254193,
      "lat": 24.4302505497,
      "lng": -49.2515300523,
      "rangeKm": 3175.0747306081,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 990
    },
    {
      "altitudeKm": 214.836346208,
      "azimuthDegs": 90.8348335476,
      "elevationDegs": -10.3960127665,
      "lat": 24.414950537,
      "lng": -49.1943367681,
      "rangeKm": 3180.5952596692,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 991
    },
    {
      "altitudeKm": 213.4607334835,
      "azimuthDegs": 90.8372177054,
      "elevationDegs": -10.4541432699,
      "lat": 24.3996183538,
      "lng": -49.1371325823,
      "rangeKm": 3186.1166905026,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 992
    },
    {
      "altitudeKm": 212.0826709528,
      "azimuthDegs": 90.8395991176,
      "elevationDegs": -10.5122161468,
      "lat": 24.3842557822,
      "lng": -49.079918114,
      "rangeKm": 3191.638916198,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 993
    },
    {
      "altitudeKm": 210.7021811049,
      "azimuthDegs": 90.8419795244,
      "elevationDegs": -10.5702319644,
      "lat": 24.3688617461,
      "lng": -49.0226925395,
      "rangeKm": 3197.1620485118,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 994
    },
    {
      "altitudeKm": 209.31926829,
      "azimuthDegs": 90.8443589397,
      "elevationDegs": -10.6281910277,
      "lat": 24.3534362005,
      "lng": -48.965455757,
      "rangeKm": 3202.6860948142,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 995
    },
    {
      "altitudeKm": 207.9338770056,
      "azimuthDegs": 90.8467372623,
      "elevationDegs": -10.6860942191,
      "lat": 24.3379793366,
      "lng": -48.9082083838,
      "rangeKm": 3208.2109681167,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 996
    },
    {
      "altitudeKm": 206.5460800565,
      "azimuthDegs": 90.8491153639,
      "elevationDegs": -10.7439403717,
      "lat": 24.3224908385,
      "lng": -48.8509509445,
      "rangeKm": 3213.7366443474,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 997
    },
    {
      "altitudeKm": 205.1558455793,
      "azimuthDegs": 90.8514900644,
      "elevationDegs": -10.8017313205,
      "lat": 24.3069717634,
      "lng": -48.7936813622,
      "rangeKm": 3219.2632781566,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 998
    },
    {
      "altitudeKm": 203.7631042611,
      "azimuthDegs": 90.8538653099,
      "elevationDegs": -10.8594681216,
      "lat": 24.2914204376,
      "lng": -48.7364008797,
      "rangeKm": 3224.7907715993,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 999
    },
    {
      "altitudeKm": 202.3680111513,
      "azimuthDegs": 90.8562387845,
      "elevationDegs": -10.9171479621,
      "lat": 24.2758381397,
      "lng": -48.6791100238,
      "rangeKm": 3230.3190799107,
      "stageName": "Centaur V",
      "stageNumber": 2,
      "time": 1000
    }
  ];

  public startSelectedLatlng: any;
  public endSelectedLatlng: any;
  public startSelectedValName: any;
  public endSelectedValName: any;
  private circle!: L.Circle;
  private waypoints: L.LatLng[] = [];

  public matchedArea: any = {};


  constructor() { }

  ngAfterViewInit(): void {
    this.initMap();
    this.addGeocoderControl();
    // this.addSearchControl();
    // this.addGeocodingControl();
    // this.addZoomControl();
  }

  initMap() {
    const osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Arvind Maurya'
    });
    this.map = new L.Map('leaflet', {
      center: [22.024154834056592, 69.59705836928788],
      zoom: 5,
      fullscreenControl: true,
      layers: [osm],
      zoomControl: true
    });

    this.markersLayer = L.featureGroup().addTo(this.map);

    // this.map = L.map('leaflet',{fullscreenControl: true}).setView([22.024154834056592, 69.59705836928788], 5);

    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   attribution: '© Arvind Maurya'
    // }).addTo(this.map);

    this.addMultipleMapLayer(osm);

    const lanlat: any = [
      [22.958005179088214, 73.64002711928788],
      [22.024154834056592, 69.59705836928788],
      [19.435116830335605, 70.12440211928788],
      [19.600797059747915, 76.18885524428788]];
    // L.polygon(lanlat, { fillColor: 'red', color: 'red' }).addTo(this.map);
    // lanlat.forEach((val: any, i: number) => {
    //   this.addMarker(val, `Marker ${i + 1}`, `Remove the marker ${i + 1} on click marker`);
    // });
    this.details.forEach((val: any) => {
      this.addCircle([val.lat, val.lng]);
    });
    this.addCustomControl();
    this.addMarkerOnClickMap();
    // this.addSearchInputs();
    // this.createWay();
  }

  // private addSearchControl() {
  //   const searchControl = new (L.Control as any).Search({
  //     position: 'topright',
  //     layer: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
  //     propertyName: 'name',
  //     marker: false,
  //     moveToLocation: (latlng: any, title: any, map: any) => {
  //       map.setView(latlng, 13);
  //     }
  //   });

  //   this.map.addControl(searchControl);

  //   this.map.on('search:locationfound', (e: any) => {
  //     if (e.layer) {
  //       e.layer.openPopup();
  //     }
  //   });
  // }


  //Start add multiple map layer
  private addMultipleMapLayer(osm: any) {
    const osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Arvind Maurya'
    });

    const baseMaps = {
      "OpenStreetMap": osm,
      "OpenStreetMap.HOT": osmHOT
    };
    const openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Arvind Maurya'
    });

    const overlays = {//add any overlays here

    };

    const layerControl = L.control.layers(baseMaps, overlays, { position: 'topright' }).addTo(this.map);
    layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
  }
  //End add multiple map layer


  //Start create the circle on the map
  private addCircle(lanlat: any) {
    const circle = L.circle(lanlat, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 35
    }).addTo(this.map);
    const popupContentWithTitle = `<b> Lat: ${lanlat[0]} <br> Lan: ${lanlat[1]}</b>`;

    circle.bindPopup(popupContentWithTitle, { closeButton: true, autoClose: false });

    // Show popup on hover
    circle.on('mouseover', (event: any) => {
      circle.openPopup();
    });

    // Hide popup on mouseout
    circle.on('mouseout', (event: any) => {
      circle.closePopup();
    });
  }
  //End create the circle on the map


  //Start Single marker and remove marker on click marker

  private addMarker(latlng: [number, number], title: string, popupContent: string) {
    //Add custom icon

    // const customIcon = L.icon({
    //   iconUrl: '../../../assets/icons/pngwing.com.png', // path to your custom icon
    //   iconSize: [45, 45], // size of the icon
    //   iconAnchor: [22, 40], // point of the icon which will correspond to marker's location
    //   popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
    // });
    // const marker = L.marker(latlng, { icon: customIcon }).addTo(this.map);


    const marker = L.marker(latlng).addTo(this.map);
    this.markersLayer.addLayer(marker);
    const popupContentWithTitle = `<b>${title}</b><br>${popupContent}`;

    marker.bindPopup(popupContentWithTitle, { closeButton: true, autoClose: false });

    //Start for open popup on mouse enter and close on mouse leave

    marker.on('mouseover', (e) => {
      marker.openPopup();
    });

    marker.on('mouseout', (e) => {
      marker.closePopup();
    });

    //End for open popup on mouse enter and close on mouse leave

    marker.on('click', (e) => {
      this.removeMarker(marker);
    });
    this.markers.push(marker);
  }

  // Open by default popup after map loaded
  // getMarkerDetails(value: any) {
  //   console.log('value :>> ', value);
  //   L.popup()
  //     .setLatLng(value.latlng)
  //     .setContent("You clicked the map at " + value.latlng.toString())
  //     .openOn(this.map);
  // }

  private removeMarker(marker: L.Marker) {
    marker.remove();
    // Remove the marker from the array
    const index = this.markers.indexOf(marker);
    if (index !== -1) {
      this.markers.splice(index, 1);
    }
  }

  //End Single marker and remove marker on click marker


  // private addZoomControl() {
  //   L.control.zoom().addTo(this.map);
  // }

  //Start Add custom control

  private addCustomControl() {
    const customControl = L.Control.extend({
      options: {
        position: 'bottomleft'  // Adjust the position as needed
      },

      onAdd: () => {
        const container = L.DomUtil.create('div', 'leaflet-bar leaflet-control leaflet-control-custom');
        container.innerHTML = `<img id="custom-control-button" src='../../../assets/icons/distance.png' data-bs-toggle="modal" data-bs-target="#exampleModal">`;  // Use the custom control component
        L.DomEvent.disableClickPropagation(container);
        // Attach click event listener to the button
        const button: any = container.querySelector('#custom-control-button');
        button.addEventListener('click', this.handleButtonClick.bind(this));

        return container;
      }
    });

    this.map.addControl(new customControl());
  }

  private handleButtonClick(event: Event) {
    const button = event.target as HTMLButtonElement;
    console.log('button :>> ', button);
    // Get the button's position on the map
  }

  //End Add custom control

  //Start Add marker and create polygon on click map

  addMarkerOnClickMap() {
    // this.map.on('click', (event:any)=>{
    //   const clickedLatLng = event.latlng;
    //   this.addMarker(clickedLatLng,'Added by Click', `This marker is added by the click event.<br><b> Lat: ${clickedLatLng.lat} <br> Lan: ${clickedLatLng.lng}</b>`);
    //   this.createPolygon(clickedLatLng);
    // });
    this.map.on('click', (event: any) => {
      const clickedLatLng = event.latlng;

      if (!this.startingLatLng) {
        // First click, set the starting point and create a marker
        this.startingLatLng = clickedLatLng;
        this.addMarker(clickedLatLng, 'Added by Click', `This marker is added by the click event.<br><b> Lat: ${clickedLatLng.lat} <br> Lan: ${clickedLatLng.lng}</b>`);
        this.startNewPolygon(clickedLatLng);
      } else {
        // Subsequent clicks, check if it's close to the starting point
        const distance = this.startingLatLng.distanceTo(clickedLatLng);
        if (distance < 500) {
          // Close enough to the starting point, stop the current polygon and start a new one
          this.stopCreatingPolygon();
        } else {
          // Continue adding points to the current polygon
          this.addMarker(clickedLatLng, 'Added by Click', `This marker is added by the click event.<br><b> Lat: ${clickedLatLng.lat} <br> Lan: ${clickedLatLng.lng}</b>`);
          this.addPointToPolygon(clickedLatLng);
        }
      }
    });

  }

  private startNewPolygon(latlng: L.LatLng) {
    // Start a new polygon
    this.polygon = L.polygon([latlng], { color: 'red' }).addTo(this.map);
  }

  private addPointToPolygon(latlng: L.LatLng) {
    // Add a new point to the existing polygon
    if (this.polygon) {
      this.polygon.addLatLng(latlng);
    }
  }

  private stopCreatingPolygon() {
    // Finalize the current polygon
    this.startingLatLng = null;
    console.log('Polygon creation completed.');
    alert('Polygon creation completed.');
  }

  //End Add marker and create polygon on click map

  //Start area search

  private addGeocoderControl() {
    const geocoderControl = (L.Control as any).geocoder({
      defaultMarkGeocode: true
    }).on('markgeocode', (event: any) => {
      console.log('event :>> ', event);
      const { center } = event.geocode;
      // Clear existing markers
      // this.map.eachLayer((layer: any) => {
      //   if (layer instanceof L.Marker) {
      //     this.map.removeLayer(layer);
      //   }
      // });
      // Create a new marker at the geocoded location
      const marker = L.marker(center);
      marker.addTo(this.map).bindPopup(event.geocode.name).openPopup();
      this.map.setView(center, 15);
    });

    this.map.addControl(geocoderControl);
  }

  //End area search

  //Start custome search model
  public onSearchInputForm(event: any, isStart: boolean): void {
    const inputText = event.target.value ? event.target.value : event.clipboardData.getData('text/plain');
    console.log('inputText :>> ', inputText);
    // Use a geocoder to get the coordinates from the location name
    (L.Control as any).Geocoder.nominatim().geocode(inputText, (results: any) => {
      console.log('results :>> ', results);
      if (isStart) {
        this.matchedArea.startList = results;
      } else {
        this.matchedArea.endList = results;
      }
    });
  }


  public getValue(area: any, isStart: boolean) {
    if (isStart) {
      this.startSelectedLatlng = area.center;
      this.startSelectedValName = area.name;
      this.matchedArea.startList = [];
    } else {
      this.endSelectedLatlng = area.center;
      this.endSelectedValName = area.name;
      this.matchedArea.endList = [];
    }
  }

  public onSearch() {
    if (this.startSelectedLatlng && this.endSelectedLatlng) {
      const startLatLng = L.latLng(this.startSelectedLatlng);
      const endLatLng = L.latLng(this.endSelectedLatlng);
     
    L.circle(startLatLng, {
      color: 'blue',
      fillColor: 'blue',
      radius: 300
    }).addTo(this.map);
      // L.marker(startLatLng,{icon :customIcon}).addTo(this.map).bindPopup(this.startSelectedValName);
      L.marker(endLatLng).addTo(this.map).bindPopup(this.endSelectedValName,{closeButton:true,closeOnClick:true}).openPopup();

      // Use Leaflet Routing Machine to display the route
      const control = L.Routing.control({
        waypoints: [
          startLatLng,
          endLatLng
        ],
        routeWhileDragging: true,
        // lineOptions: {
        //   styles: [
        //     {
        //       color: 'blue', // Set the color of the route line
        //       opacity: 0.8,  // Set the opacity (0 to 1)
        //       weight: 5       // Set the weight or thickness of the line
        //     }
        //   ]
        // }
      }).addTo(this.map);
      this.clearForm();
      this.map.setView(startLatLng, 15);
      control.on('routesfound', (event: any) => {
        const routes = event.routes;
      if (routes && routes.length > 0) {
        const firstRoute = routes[0];
        this.waypoints = firstRoute.coordinates;
        // Initialize the circle at the start of the route...
        this.circle = L.circle(this.waypoints[0], {
          color: 'green',
          fillColor: 'green',
          fillOpacity: 1,
          radius: 30, // Adjust the radius as needed
        }).addTo(this.map).bindPopup('I am here!').openPopup();

        // Update the circle position every second...
        setInterval(() => {
          this.moveCircleToNextWaypoint();
        }, 1000); // Update every 1000 milliseconds (1 second)
      }
      });
    } else {
      alert("Both starting and ending points must be selected");
    }
  }

  private moveCircleToNextWaypoint(): void {
    if (this.circle && this.waypoints.length > 1) {
      // Move the circle to the next waypoint
      this.waypoints.shift(); // Remove the first waypoint
      console.log('this.waypoints :>> ', this.waypoints[0]);
      console.log('this.waypoints :>> ', this.waypoints);
      console.log('this.circle :>> ', this.circle);
      this.circle.setLatLng(this.waypoints[0]);
    }
  }

  public clearForm() {
    this.startSelectedLatlng = '';
    this.startSelectedValName = '';
    this.endSelectedLatlng = '';
    this.endSelectedValName = '';
    this.matchedArea = {};
  }


  //End custome search model
}
