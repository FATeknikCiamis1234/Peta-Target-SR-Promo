var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_PembagianZonaPemasaran_1 = new ol.format.GeoJSON();
var features_PembagianZonaPemasaran_1 = format_PembagianZonaPemasaran_1.readFeatures(json_PembagianZonaPemasaran_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PembagianZonaPemasaran_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PembagianZonaPemasaran_1.addFeatures(features_PembagianZonaPemasaran_1);
var lyr_PembagianZonaPemasaran_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PembagianZonaPemasaran_1, 
                style: style_PembagianZonaPemasaran_1,
                interactive: true,
    title: 'Pembagian Zona Pemasaran<br />\
    <img src="styles/legend/PembagianZonaPemasaran_1_0.png" /> 1<br />\
    <img src="styles/legend/PembagianZonaPemasaran_1_1.png" /> 2<br />\
    <img src="styles/legend/PembagianZonaPemasaran_1_2.png" /> 3<br />\
    <img src="styles/legend/PembagianZonaPemasaran_1_3.png" /> 4<br />\
    <img src="styles/legend/PembagianZonaPemasaran_1_4.png" /> 5<br />\
    <img src="styles/legend/PembagianZonaPemasaran_1_5.png" /> 6<br />\
    <img src="styles/legend/PembagianZonaPemasaran_1_6.png" /> 7<br />\
    <img src="styles/legend/PembagianZonaPemasaran_1_7.png" /> 8<br />'
        });
var format_PelangganSPAMCiamis_2 = new ol.format.GeoJSON();
var features_PelangganSPAMCiamis_2 = format_PelangganSPAMCiamis_2.readFeatures(json_PelangganSPAMCiamis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PelangganSPAMCiamis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PelangganSPAMCiamis_2.addFeatures(features_PelangganSPAMCiamis_2);
var lyr_PelangganSPAMCiamis_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PelangganSPAMCiamis_2, 
                style: style_PelangganSPAMCiamis_2,
                interactive: true,
                title: '<img src="styles/legend/PelangganSPAMCiamis_2.png" /> Pelanggan SPAM Ciamis'
            });
var format_JaringanPipaSPAMCiamis_3 = new ol.format.GeoJSON();
var features_JaringanPipaSPAMCiamis_3 = format_JaringanPipaSPAMCiamis_3.readFeatures(json_JaringanPipaSPAMCiamis_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanPipaSPAMCiamis_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanPipaSPAMCiamis_3.addFeatures(features_JaringanPipaSPAMCiamis_3);
var lyr_JaringanPipaSPAMCiamis_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanPipaSPAMCiamis_3, 
                style: style_JaringanPipaSPAMCiamis_3,
                interactive: true,
                title: '<img src="styles/legend/JaringanPipaSPAMCiamis_3.png" /> Jaringan Pipa SPAM Ciamis'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_PembagianZonaPemasaran_1.setVisible(true);lyr_PelangganSPAMCiamis_2.setVisible(true);lyr_JaringanPipaSPAMCiamis_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_PembagianZonaPemasaran_1,lyr_PelangganSPAMCiamis_2,lyr_JaringanPipaSPAMCiamis_3];
lyr_PembagianZonaPemasaran_1.set('fieldAliases', {'id': 'id', });
lyr_PelangganSPAMCiamis_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'gid': 'gid', 'nosamw': 'nosamw', 'nama desa': 'nama desa', 'nama kec': 'nama kec', 'dma': 'dma', 'elevasidem': 'elevasidem', 'nama': 'nama', 'alamat': 'alamat', 'gol': 'gol', 'golpel': 'golpel', 'statuspel': 'statuspel', 'statpel': 'statpel', 'merk_met': 'merk_met', 'no_met': 'no_met', 'Demand': 'Demand', });
lyr_JaringanPipaSPAMCiamis_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'gid': 'gid', 'jenis_pipa': 'jenis_pipa', 'dia_pipa': 'dia_pipa', 'pj_pipa': 'pj_pipa', 'stus_pipa': 'stus_pipa', 'thn_pasang': 'thn_pasang', });
lyr_PembagianZonaPemasaran_1.set('fieldImages', {'id': 'TextEdit', });
lyr_PelangganSPAMCiamis_2.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'gid': '', 'nosamw': '', 'nama desa': '', 'nama kec': '', 'dma': '', 'elevasidem': '', 'nama': '', 'alamat': '', 'gol': '', 'golpel': '', 'statuspel': '', 'statpel': '', 'merk_met': '', 'no_met': '', 'Demand': '', });
lyr_JaringanPipaSPAMCiamis_3.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'gid': 'TextEdit', 'jenis_pipa': 'TextEdit', 'dia_pipa': 'TextEdit', 'pj_pipa': 'TextEdit', 'stus_pipa': 'TextEdit', 'thn_pasang': 'TextEdit', });
lyr_PembagianZonaPemasaran_1.set('fieldLabels', {'id': 'inline label', });
lyr_PelangganSPAMCiamis_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'gid': 'no label', 'nosamw': 'no label', 'nama desa': 'no label', 'nama kec': 'no label', 'dma': 'no label', 'elevasidem': 'no label', 'nama': 'no label', 'alamat': 'no label', 'gol': 'no label', 'golpel': 'no label', 'statuspel': 'no label', 'statpel': 'no label', 'merk_met': 'no label', 'no_met': 'no label', 'Demand': 'no label', });
lyr_JaringanPipaSPAMCiamis_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'gid': 'no label', 'jenis_pipa': 'no label', 'dia_pipa': 'inline label', 'pj_pipa': 'no label', 'stus_pipa': 'no label', 'thn_pasang': 'no label', });
lyr_JaringanPipaSPAMCiamis_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});