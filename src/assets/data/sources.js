import agulles from "./agulles";
import regulacio from "./regulacio";
import regulacio_point from "./regulacio_point";
import limitsparc from "./limitsparc";
import limitsparc_point from "./limitsparc_point";
import seccions from "./seccions";
import seccions_point from "./seccions_point";
import caminsPNMM from "./caminsPNMM";
import regions from "./regions";
import regions_point from "./regions_point";
import fitxes_foer from "./fitxes_foer";
import senyal_112 from "./senyal_112";
import boixar from "./boixar";
import tanques_vehicle from "./tanques_vehicle";
import aparcaments_point from "./aparcaments_point";
import aparcaments from "./aparcaments";
import areesdescans from "./areesdescans";
import Font_B from "./Font_B";
import Font_C_D from "./Font_C_D";
import Font_CP from "./Font_CP";
import Font_DGT from "./Font_DGT";
import Font_M from "./Font_M";
import Font_R from "./Font_R";
import Font_R_X from "./Font_R_X";
import Ermites from "./Ermites";
import Capella from "./Capella";

export default {
    "agulles-point": {"type": "geojson","data": agulles, "generateId": true},
    "regulacio-json": {"type": "geojson","data": regulacio, "generateId": true},
    "regulacio-point": {"type": "geojson","data": regulacio_point, "generateId": true},
    "limits-json": {"type": "geojson","data": limitsparc, "generateId": true},
    "limits-point": {"type": "geojson","data": limitsparc_point, "generateId": true},
    "seccions-json": {"type": "geojson","data": seccions, "generateId": true},
    "seccions-point": {"type": "geojson","data": seccions_point, "generateId": true},
    "camins-json": {"type": "geojson","data": caminsPNMM, "generateId": true},
    "regions-json": {"type": "geojson","data": regions, "generateId": true},
    "regions-point": {"type": "geojson","data": regions_point, "generateId": true},
    "foer-point": {"type": "geojson","data": fitxes_foer, "generateId": true},
    "112-point": {"type": "geojson","data": senyal_112, "generateId": true},
    "boixar-point": {"type": "geojson","data": boixar, "generateId": true},
    "tanques_vehicle-point": {"type": "geojson","data": tanques_vehicle, "generateId": true},
    "aparcaments-point": {"type": "geojson","data": aparcaments_point, "generateId": true},
    "areesdescans-point": {"type": "geojson","data": areesdescans, "generateId": true},
    "aparcaments-json": {"type": "geojson","data": aparcaments, "generateId": true},
    "Font_B": {"type": "geojson","data": Font_B, "generateId": true},
    "Font_C_D": {"type": "geojson","data": Font_C_D, "generateId": true},
    "Font_CP": {"type": "geojson","data": Font_CP, "generateId": true},
    "Font_DGT": {"type": "geojson","data": Font_DGT, "generateId": true},
    "Font_M": {"type": "geojson","data": Font_M, "generateId": true},
    "Font_R": {"type": "geojson","data": Font_R, "generateId": true},
    "Font_R_X": {"type": "geojson","data": Font_R_X, "generateId": true},
    "Ermites": {"type": "geojson","data": Ermites, "generateId": true},
    "Capella": {"type": "geojson","data": Capella, "generateId": true},
}
