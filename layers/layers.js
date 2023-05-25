var wms_layers = [];


        var lyr_googleSatellite_0 = new ol.layer.Tile({
            'title': 'googleSatellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1, 
                style: style__1,
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> ตำบลสันมะเค็ด'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> ข้าวแปลงใหญ่สันมะเค็ด'
            });

lyr_googleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_googleSatellite_0,lyr__1,lyr__2];
lyr__1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'POLYTYPE': 'POLYTYPE', 'PROV_CODE': 'PROV_CODE', 'AMP_CODE': 'AMP_CODE', 'TAM_CODE': 'TAM_CODE', 'PROV_NAMT': 'PROV_NAMT', 'PROV_NAME': 'PROV_NAME', 'AMP_NAMT': 'AMP_NAMT', 'AMP_NAME': 'AMP_NAME', 'TAM_NAMT': 'TAM_NAMT', 'TAM_NAME': 'TAM_NAME', 'YEAR': 'YEAR', 'MALE': 'MALE', 'FEMALE': 'FEMALE', 'TOTAL': 'TOTAL', 'HOUSE': 'HOUSE', 'VERSION': 'VERSION', 'Shape_Leng': 'Shape_Leng', 'dis_amp': 'dis_amp', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr__2.set('fieldAliases', {'FID_big_fa': 'FID_big_fa', 'id': 'id', 'profile_na': 'profile_na', 'profile_mo': 'profile_mo', 'profile_zo': 'profile_zo', 'profile_la': 'profile_la', 'profile_lo': 'profile_lo', 'province_c': 'province_c', 'profile_am': 'profile_am', 'profile_ta': 'profile_ta', 'plang_f_na': 'plang_f_na', 'plang_l_na': 'plang_l_na', 'plang_posi': 'plang_posi', 'plang_tel': 'plang_tel', 'plang_type': 'plang_type', 'plang_unit': 'plang_unit', 'q311': 'q311', 'q312': 'q312', 'q313': 'q313', 'o311': 'o311', 'o312': 'o312', 'o313': 'o313', 'profile_id': 'profile_id', 'president_': 'president_', 'presiden_1': 'presiden_1', 'presiden_2': 'presiden_2', 'datesc': 'datesc', 'alcn': 'alcn', 'PROFILE_AR': 'PROFILE_AR', 'IDBIGFARM': 'IDBIGFARM', 'chk_locati': 'chk_locati', 'IRR': 'IRR', 'FID_region': 'FID_region', 'PROV_NAMT': 'PROV_NAMT', 'PROV_NAME': 'PROV_NAME', 'Region': 'Region', 'code_re': 'code_re', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr__1.set('fieldImages', {'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'POLYTYPE': 'Range', 'PROV_CODE': 'TextEdit', 'AMP_CODE': 'TextEdit', 'TAM_CODE': 'TextEdit', 'PROV_NAMT': 'TextEdit', 'PROV_NAME': 'TextEdit', 'AMP_NAMT': 'TextEdit', 'AMP_NAME': 'TextEdit', 'TAM_NAMT': 'TextEdit', 'TAM_NAME': 'TextEdit', 'YEAR': 'Range', 'MALE': 'Range', 'FEMALE': 'Range', 'TOTAL': 'TextEdit', 'HOUSE': 'TextEdit', 'VERSION': 'TextEdit', 'Shape_Leng': 'TextEdit', 'dis_amp': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__2.set('fieldImages', {'FID_big_fa': 'TextEdit', 'id': 'TextEdit', 'profile_na': 'TextEdit', 'profile_mo': 'TextEdit', 'profile_zo': 'TextEdit', 'profile_la': 'TextEdit', 'profile_lo': 'TextEdit', 'province_c': 'TextEdit', 'profile_am': 'TextEdit', 'profile_ta': 'TextEdit', 'plang_f_na': 'TextEdit', 'plang_l_na': 'TextEdit', 'plang_posi': 'TextEdit', 'plang_tel': 'TextEdit', 'plang_type': 'TextEdit', 'plang_unit': 'TextEdit', 'q311': 'TextEdit', 'q312': 'TextEdit', 'q313': 'TextEdit', 'o311': 'TextEdit', 'o312': 'TextEdit', 'o313': 'TextEdit', 'profile_id': 'TextEdit', 'president_': 'TextEdit', 'presiden_1': 'TextEdit', 'presiden_2': 'TextEdit', 'datesc': 'TextEdit', 'alcn': 'TextEdit', 'PROFILE_AR': 'TextEdit', 'IDBIGFARM': 'TextEdit', 'chk_locati': 'TextEdit', 'IRR': 'TextEdit', 'FID_region': 'TextEdit', 'PROV_NAMT': 'TextEdit', 'PROV_NAME': 'TextEdit', 'Region': 'TextEdit', 'code_re': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr__1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'POLYTYPE': 'no label', 'PROV_CODE': 'no label', 'AMP_CODE': 'no label', 'TAM_CODE': 'no label', 'PROV_NAMT': 'no label', 'PROV_NAME': 'no label', 'AMP_NAMT': 'no label', 'AMP_NAME': 'no label', 'TAM_NAMT': 'no label', 'TAM_NAME': 'no label', 'YEAR': 'no label', 'MALE': 'no label', 'FEMALE': 'no label', 'TOTAL': 'no label', 'HOUSE': 'no label', 'VERSION': 'no label', 'Shape_Leng': 'no label', 'dis_amp': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr__2.set('fieldLabels', {'FID_big_fa': 'no label', 'id': 'no label', 'profile_na': 'no label', 'profile_mo': 'no label', 'profile_zo': 'no label', 'profile_la': 'no label', 'profile_lo': 'no label', 'province_c': 'no label', 'profile_am': 'no label', 'profile_ta': 'no label', 'plang_f_na': 'no label', 'plang_l_na': 'no label', 'plang_posi': 'no label', 'plang_tel': 'no label', 'plang_type': 'no label', 'plang_unit': 'no label', 'q311': 'no label', 'q312': 'no label', 'q313': 'no label', 'o311': 'no label', 'o312': 'no label', 'o313': 'no label', 'profile_id': 'no label', 'president_': 'no label', 'presiden_1': 'no label', 'presiden_2': 'no label', 'datesc': 'no label', 'alcn': 'no label', 'PROFILE_AR': 'no label', 'IDBIGFARM': 'no label', 'chk_locati': 'no label', 'IRR': 'no label', 'FID_region': 'no label', 'PROV_NAMT': 'no label', 'PROV_NAME': 'no label', 'Region': 'no label', 'code_re': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});