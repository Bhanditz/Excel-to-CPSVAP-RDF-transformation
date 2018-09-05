var fs = require('fs');
var langs = require('./Languages.json').languages;
var codelist = require('./CPSVtemplateWithCodelists.json');
var entities = require('./Entities.json').entities;
var sectors = codelist.templates[0].content[4].choices;
var types = codelist.templates[0].content[5].choices;
var languages = codelist.templates[0].content[6].choices;
var statuses = codelist.templates[0].content[7].choices;
var spatials = codelist.templates[0].content[8].choices;
var betypes = codelist.templates[14].content[0].choices;
var letypes = codelist.templates[15].content[0].choices;
var fftypes = codelist.templates[8].content[3].choices;
var ffstatuses = codelist.templates[8].content[5].choices;
var ffsubjects = codelist.templates[8].content[6].choices;
var ffapplications = codelist.templates[8].content[7].choices;
var hchtypes = codelist.templates[3].content[1].choices;
var hccurrencies = codelist.templates[2].content[3].choices;
var prodtypes = codelist.templates[7].content[3].choices;

module.exports = { 
	escapeSpecialChars : function(string) {
    return string.replace(/&/g, '&amp;')
	   .replace(/</g, '&lt;')
	   .replace(/>/g, '&gt;')
	   .replace(/"/g, '&quot;')
	   .replace(/'/g, '&apos;');
	},
	extractNodeID: function( str, entity ){
		var nodeid = 'rdf:nodeID';
		var found_nodeids = new RegExp(entity + ' ' + nodeid + '="');
		var get_nodeid = new RegExp(entity + ' ' + nodeid + '="(.*?)"');
		var ret = "";
		if ( found_nodeids.test( str ) ){
			ret = str.match(get_nodeid)[1];
		}
		return ret;
	},
	getEntity: function(entity ){
		var ret = "";
		var base = "test";
		var entitytofind = entity.slice(entity.indexOf(base) + base.length);
		ret = entities.find(o => o.value === entitytofind).label;
		return ret;
	},
	extractRDFPrefix: function( str ){
		var ret = "";
		if ( /rdf:RDF /.test( str ) ){
			ret = str.match( /rdf:RDF ([\s\S]*?)>/ )[1];
		}
		return ret;
	},
	getDefaultLanguageAttribute: function() {
		var def_language = langs.find(o => o.label.en === 'English');
		return def_language;
	},
	getRandomLanguageAttribute: function() {
		var language = langs[Math.floor(Math.random() * langs.length)];
		if (language.label.en == "") {
			language = module.exports.getDefaultLanguageAttribute();
		}
		return language;
	},
	getDefaultSector: function() {
		var def_sector = sectors.find(o => o.label === 'A - Agriculture, forestry and fishing');
		return def_sector;
	},
	getRandomSector: function() {
		var sector = sectors[Math.floor(Math.random() * sectors.length)];
		return sector;
	},
	getDefaultType: function() {
		var def_type = types.find(o => o.label === '01 - General public services');
		return def_type;
	},
	getRandomType: function() {
		var type = types[Math.floor(Math.random() * types.length)];
		return type;
	},
	getDefaultLanguage: function() {
		var def_language = languages.find(o => o.label === 'Albanian');
		return def_language;
	},
	getRandomLanguage: function() {
		var language = languages[Math.floor(Math.random() * languages.length)];
		return language;
	},
	getDefaultStatus: function() {
		var def_status = statuses.find(o => o.label === 'Completed');
		return def_status;
	},
	getRandomStatus: function() {
		var status = statuses[Math.floor(Math.random() * statuses.length)];
		return status;
	},
	getDefaultSpatial: function() {
		var def_spatial = spatials.find(o => o.label === 'ALA-Åland Islands');
		return def_spatial;
	},
	getRandomSpatial: function() {
		var spatial = spatials[Math.floor(Math.random() * spatials.length)];
		return spatial;
	},
	getDefaultProcessingTime: function() {
		var processingtime = {
			years : "1",
			months : "1",
			days : "1",
			hours : "1",
			minutes : "1",
			text : function() {
				return "P" + this.years + "Y" + this.months + "M" + this.days + "D" + "T" + this.hours + "H" + this.minutes + "M";
			}
		};
		return processingtime;
	},
	getRandomProcessingTime: function() {
		var processingtime = {
			years : Math.floor((Math.random() * 100) + 1),
			months : Math.floor((Math.random() * 12) + 1),
			days : Math.floor((Math.random() * 31) + 1),
			hours : Math.floor((Math.random() * 24) + 1),
			minutes : Math.floor((Math.random() * 60) + 1),
			text : function () {
				return "P" + this.years + "Y" + this.months + "M" + this.days + "D" + "T" + this.hours + "H" + this.minutes + "M";
			}
		};
		return processingtime;
	},
	getDefaultBEType: function() {
		var def_type = betypes.find(o => o.label.en === '1. Starting business');
		return def_type;
	},
	getRandomBEType: function() {
		var type = betypes[Math.floor(Math.random() * betypes.length)];
		return type;
	},
	getDefaultLEType: function() {
		var def_type = letypes.find(o => o.label === 'Becoming a (social) caretaker');
		return def_type;
	},
	getRandomLEType: function() {
		var type = letypes[Math.floor(Math.random() * letypes.length)];
		return type;
	},
	getDefaultFFType: function() {
		var def_type = fftypes.find(o => o.label === 'Abstract');
		return def_type;
	},
	getRandomFFType: function() {
		var type = fftypes[Math.floor(Math.random() * fftypes.length)];
		return type;
	},
	getDefaultFFStatus: function() {
		var def_status = ffstatuses.find(o => o.label === 'Expired');
		return def_status;
	},
	getRandomFFStatus: function() {
		var status = ffstatuses[Math.floor(Math.random() * ffstatuses.length)];
		return status;
	},
	getDefaultFFSubject: function() {
		var def_subject = ffsubjects.find(o => o.label === 'AGRI-FOODSTUFFS');
		return def_subject;
	},
	getRandomFFSubject: function() {
		var subject = ffsubjects[Math.floor(Math.random() * ffsubjects.length)];
		return subject;
	},
	getDefaultFFApplication: function() {
		var def_application = ffapplications.find(o => o.label === 'AT - ÖSTERREICH');
		return def_application;
	},
	getRandomFFApplication: function() {
		var application = ffapplications[Math.floor(Math.random() * ffapplications.length)];
		return application;
	},
	getDefaultPRODType: function() {
		var def_type = prodtypes.find(o => o.label === 'Code');
		return def_type;
	},
	getRandomPRODType: function() {
		var type = prodtypes[Math.floor(Math.random() * prodtypes.length)];
		return type;
	},
	getDefaultHCHType: function() {
		var def_type = hchtypes.find(o => o.label === 'Assistant');
		return def_type;
	},
	getRandomHCHType: function() {
		var type = hchtypes[Math.floor(Math.random() * hchtypes.length)];
		return type;
	},
	getDefaultHCCurrency: function() {
		var def_type = hccurrencies.find(o => o.label === 'ALL-Lek (pl. Leks)');
		return def_type;
	},
	getRandomHCCurrency: function() {
		var type = hccurrencies[Math.floor(Math.random() * hccurrencies.length)];
		return type;
	},
	getLengthData: function(data, language) {
		if (language == "English") {
			var result = data.English.length;
		} else if (language == "Spanish") {
			var result = data.Spanish.length;
		} else if (language == "Portuguese") {
			var result = data.length;
		}
		return result;
	},
	getPublicServiceId: function(data, language, index) {
		if (language == "English") {
			var result = data.English[index].PublicService_id;
			if (module.exports.isURL(result) == false) {
				result = "http://www.publicServiceSpain.es/" + result;
			}
		} else if (language == "Spanish") {
			var result = data.Spanish[index].PublicService_id;
			if (module.exports.isURL(result) == false) {
				result = "http://www.publicServiceSpain.es/" + result;
			}
		} else if (language == "Portuguese") {
			var result = data[index].PublicService[0].PublicService_id;
			if (module.exports.isURL(result) == false) {
				result = "http://www.publicServicePortugal.pt/" + result;
			}
		}	
		return result;
	},
	getPublicServiceName: function(data, language, index) {
		if (language == "English") {
			var result = data.English[index].PublicService_name;
		} else if (language == "Spanish") {
			var result = data.Spanish[index].PublicService_name;
		} else if (language == "Portuguese") {
			var result = data[index].PublicService[0].PublicService_name;
		}
		return result;
	},
	getPublicServiceDescription: function(data, language, index) {
		if (language == "English") {
			var result = data.English[index].PublicService_description;
		} else if (language == "Spanish") {
			var result = data.Spanish[index].PublicService_description;
		} else if (language == "Portuguese") {
			var result = data[index].PublicService[0].PublicService_description;
		}
		return result;
	},
	getPublicServiceKeywords: function(data, language, index) {
		if (language == "English") {
			var result = data.English[index].PublicService_keywords;
		} else if (language == "Spanish") {
			var result = data.Spanish[index].PublicService_keywords;
		}
		result = result.split(", ");
		return result;
	},
	getPublicServiceLanguage: function(data, language, index) {
		if (language == "English") {
			var result = data.English[index].PublicService_language;
		} else if (language == "Spanish") {
			var result = data.Spanish[index].PublicService_language;
		}
		return result;
	},
	getPublicServiceTypeByMapping: function(data, mapping, language, index) {
		if (language == "English") {
			var value = data.English[index].PublicService_type;
			var result = mapping.English.find(o => o.value === value).label;
		} else if (language == "Spanish") {
			var value = data.Spanish[index].PublicService_type;
			var result = mapping.Spanish.find(o => o.value === value).label;
		}
		return result;
	},
	getCompetentAuthorityPrefLabel: function(data, language, index) {
		if (language == "English") {
			var result = data.English[index].PublicOrganization_prefLabel;
		} else if (language == "Spanish") {
			var result = data.Spanish[index].PublicOrganization_prefLabel;
		}
		return result;
	},
	getSpatialCodeByMapping: function(data, mapping, language, index) {
		if (language == "English") {
			var value = data.English[index].PublicOrganization_spatialCode;
			var result = mapping.English.find(o => o.value === value).label;
		} else if (language == "Spanish") {
			var value = data.Spanish[index].PublicOrganization_spatialCode;
			var result = mapping.Spanish.find(o => o.value === value).label;
		} else if (language == "Portuguese") {
			try {
				var value = data[index].Spatial[0].PublicService_spatial;
				var result = mapping.Portuguese.find(o => o.value === value).label;
			}
			catch (err) { 
				var result = "";
			}
		}
		return result;
	},
	getChannelIdentifier: function(data, language, index) {
		if (language == "English") {
			var result = data.English[index].Channel_id;
		} else if (language == "Spanish") {
			var result = data.Spanish[index].Channel_id;
		}
		return result;
	},
	getChannelTypeByMapping: function(data, mapping, language, index) {
		if (language == "English") {
			var value = data.English[index].Channel_type;
			var result = mapping.English.find(o => o.value === value).label;
		} else if (language == "Spanish") {
			var value = data.Spanish[index].Channel_type;
			var result = mapping.Spanish.find(o => o.value === value).label;
		}
		return result;
	},
	getEventClass: function(data, language, index) {
		if (language == "English") {
			var result = data.English[index].Event_class;
		} else if (language == "Spanish") {
			var result = data.Spanish[index].Event_class;
		}
		return result;
	},
	getEventIdentifier: function(data, language, index) {
		if (language == "English") {
			var result = data.English[index].Event_id;
		} else if (language == "Spanish") {
			var result = data.Spanish[index].Event_id;
		}

		if (String(result) == "undefined") {
			result = data.Spanish[index].Event_class;
		}

		return result;
	},
	getEventName: function(data, language, index) {
		if (language == "English") {
				var result = data.English[index].Event_name;
		} else if (language == "Spanish") {
				var result = data.Spanish[index].Event_name;
		}

		if (String(result) == "undefined") {
			result = data.Spanish[index].Event_class
		}
		return result;
	},
	getEventTypeByMapping: function(data, mapping, language, index) {
		if (language == "English") {
			var value = data.English[index].Event_type;
			var result = mapping.English.find(o => o.value === value).label;
		} else if (language == "Spanish") {
			var value = data.Spanish[index].Event_type;
			var result = mapping.Spanish.find(o => o.value === value).label;
		}
		return result;
	},
	getCompotentAuthorityIdentifier: function(data, language, index) {
		if (language == "Portuguese") {
			try {
				var result = data[index].CompetentAuthority[0].PublicOrganization_id;
			}
			catch (err) { 
				var result = "";
			}
		}
		return result;
	},
	getHasInputIdentifier: function(data, language, indexInput, indexPS) {
		if (language == "Portuguese") {
			try {
				var result = data[indexPS].hasInput[indexInput].hasInput_id;
			}
			catch (err) { 
				var result = "";
			}
		}
		return result;
	},
	getHasInputName: function(data, language, indexInput, indexPS) {
		if (language == "Portuguese") {
			try {
				var result = data[indexPS].hasInput[indexInput].hasInput_name;
			}
			catch (err) { 
				var result = "";
			}
		}
		return result;
	},
	getHasInputDescription: function(data, language, indexInput, indexPS) {
		if (language == "Portuguese") {
			try {
				var result = data[indexPS].hasInput[indexInput].hasInput_description;
			}
			catch (err) { 
				var result = "";
			}
		}
		return result;
	},
	getFormalFrameworkIdentifier: function(data, language, indexFF, indexPS) {
		if (language == "Portuguese") {
			try {
				var result = data[indexPS].hasFormalFramework[indexFF].hasFormalFramework_id;
			}
			catch (err) { 
				var result = "";
			}
		}
		return result;
	},
	getFormalFrameworkName: function(data, language, indexFF, indexPS) {
		if (language == "Portuguese") {
			try {
				var result = data[indexPS].hasFormalFramework[indexFF].hasFormalFramework_name;
			}
			catch (err) { 
				var result = "";
			}
		}
		return result;
	},
	getFormalFrameworkDescription: function(data, language, indexFF, indexPS) {
		if (language == "Portuguese") {
			try {
				var result = data[indexPS].hasFormalFramework[indexFF].hasFormalFramework_description;
			}
			catch (err) { 
				var result = "";
			}
		}
		return result;
	},
	getFollowsIdentifier: function(data, language, indexF, indexPS) {
		if (language == "Portuguese") {
			try {
				var result = data[indexPS].follows[indexF].follows_id;
			}
			catch (err) { 
				var result = "";
			}
		}
		return result;
	},
	getFollowsName: function(data, language, indexF, indexPS) {
		if (language == "Portuguese") {
			try {
				var result = data[indexPS].follows[indexF].follows_name;
			}
			catch (err) { 
				var result = "";
			}
		}
		return result;
	},
	getFollowsDescription: function(data, language, indexF, indexPS) {
		if (language == "Portuguese") {
			try {
				var result = data[indexPS].follows[indexF].follows_description;
			}
			catch (err) { 
				var result = "";
			}
		}
		return result;
	},
	getHasCostIdentifier: function(data, language, indexCost, indexPS) {
		if (language == "Portuguese") {
			try {
				var result = data[indexPS].hasCost[indexCost].hasCost_id;
			}
			catch (err) { 
				var result = "";
			}
		}
		return result;
	},
	getHasCostValue: function(data, language, indexCost, indexPS) {
		if (language == "Portuguese") {
			try {
				var result = data[indexPS].hasCost[indexCost].hasCost_value;
			}
			catch (err) { 
				var result = "";
			}
		}
		return result;
	},
	getHasCostDescription: function(data, language, indexCost, indexPS) {
		if (language == "Portuguese") {
			try {
				var result = data[indexPS].hasCost[indexCost].hasCost_description;
			}
			catch (err) { 
				var result = "";
			}
		}
		return result;
	},
	getPublicServiceRelated: function(data, language, indexRelated, indexPS) {
		if (language == "Portuguese") {
			try {
				var result = "http://www.publicServicePortugal.pt/" + data[indexPS].related[indexRelated].related_id;
			}
			catch (err) { 
				var result = "";
			}
		}
		return result;
	},
	getHasInputs: function(data, language, index) {
		if (language == "Portuguese") {
			var result = data[index].hasInput;
		}
		return result;
	},
	getFormalFrameworks: function(data, language, index) {
		if (language == "Portuguese") {
			var result = data[index].hasFormalFramework;
		}
		return result;
	},
	getHasCosts: function(data, language, index) {
		if (language == "Portuguese") {
			var result = data[index].hasCost;
		}
		return result;
	},
	getFollows: function(data, language, index) {
		if (language == "Portuguese") {
			var result = data[index].follows;
		}
		return result;
	},
	getRelated: function(data, language, index) {
		if (language == "Portuguese") {
			var result = data[index].related;
		}
		return result;
	},
	getEventClassByMapping: function(data, mapping, language, index) {
		if (language == "Portuguese") {
			try {
				var value = data[index].PublicService[0].PublicService_name;
				var result = mapping.Portuguese.find(o => o.value === value).label;
			}
			catch (err) { 
				var result = "";
			}
		}
		return result;
	},
	isURL: function(str) {
	  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
	  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name and extension
	  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
	  '(\\:\\d+)?'+ // port
	  '(\\/[-a-z\\d%@_.~+&:]*)*'+ // path
	  '(\\?[;&a-z\\d%@_.,~+&:=-]*)?'+ // query string
	  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
 	 return pattern.test(str);
	},
	caesarCipher: function(str, num) {
		var alphabet = "abcdefghijklmnopqrstuvwxyz";
		var newStr = "";
		
		for (var i = 0; i < str.length; i++) {
			var chars = str[i],
				isUpper = chars === chars.toUpperCase() ? true : false;
			
			chars = chars.toLowerCase();
			
			if (alphabet.indexOf(chars) > -1) {
				var newIndex = alphabet.indexOf(chars) + num;
				if(newIndex < alphabet.length) {
					isUpper ? newStr += alphabet[newIndex].toUpperCase() : newStr += alphabet[newIndex];
				} else {
					var shiftedIndex = -(alphabet.length - newIndex);
					isUpper ? newStr += alphabet[shiftedIndex].toUpperCase() : newStr += alphabet[shiftedIndex];
				}
			} else {
			   newStr += chars;
			}
		}
		return newStr;
	},
	removespaces: function(str) {
		//var pattern = new RegExp('[\s]*','g');
		return str.replace(/ /g,'');
	}
}