var config = require('../nightwatch.conf.js');
var util = require('../page-objects/utils/util.js');
var fs = require('fs');
var path = require('path');

var sourcedata_filename = 'dataSpain';
var JSONdata = fs.readFileSync('tmp/'+sourcedata_filename+'.json', { 'encoding': 'utf8'});
var data = JSON.parse(JSONdata);
var download_folder = "downloads/";

var mappingSpain = require('../page-objects/utils/mappingSpain.json');
var languages = ["Spanish"];

var time_pause = 1000;
var enable_screenshot = false;

module.exports = {
	'@tags': ['dataSpain'],

	'Fill data': function(browser) {


		var editor = browser.page.Editor();
		var rdfdata = browser.page.RDFData();

		for (var i=0; i < languages.length; i++) {

			for (var j=0; j < util.getLengthData(data, languages[i]); j++) {

			/*Fill the public service information*/
			editor.navigate()
				.waitForElementVisible('body')
				.set_ps_identifier(util.getPublicServiceId(data, languages[i], j))
				.set_ps_name(util.getPublicServiceName(data, languages[i], j))
				.set_ps_name_lang(languages[i])
				.set_ps_description(util.getPublicServiceDescription(data, languages[i], j))
				.set_ps_description_lang(languages[i])
				.set_ps_language(util.getPublicServiceLanguage(data, languages[i], j))
				.set_ps_type(util.getPublicServiceTypeByMapping(data, mappingSpain.mappings[0].ThematicArea[0], languages[i], j));		    	

			var keywords = util.getPublicServiceKeywords(data, languages[i], j );
			for (var k = 0; k < keywords.length; k++) {
			    editor
			    	.set_ps_keyword(keywords[k], k+1)
			    	.set_ps_keyword_lang(languages[i], k+1)
			    	.expand_ps_keyword();
			}

			/*Fill the Public Organization information*/
			var ca_preferredlabel = util.getCompetentAuthorityPrefLabel(data, languages[i], j);
			var ca_preferredlabel_lang = languages[i];
			var ca_spatial = util.getSpatialCodeByMapping(data, mappingSpain.mappings[1].SpatialCode[0], languages[i], j);
			var ca_identifier_tmp = [ca_preferredlabel, ca_preferredlabel_lang, ca_spatial].join('');
			var caesar = util.caesarCipher(ca_identifier_tmp, 1);
			var ca_identifier = caesar;
			editor
				.set_ca_identifier(ca_identifier)
				.set_ca_preferredlabel(ca_preferredlabel)
				.set_ca_preferredlabel_lang(ca_preferredlabel_lang)
				.set_ca_spatial(ca_spatial);

			/*Fill the channel*/
			editor
				.hch_expand()
				.set_hch_identifier(util.escapeSpecialChars(util.getChannelIdentifier(data, languages[i], j)))
				.set_hch_type(util.getChannelTypeByMapping(data, mappingSpain.mappings[2].ChannelType[0], languages[i], j));


			/*Fill the event*/
			if (util.getEventClass(data, languages[i], j) == "Business Event") {
				editor
					.be_expand()
					.set_be_identifier(util.getEventIdentifier(data, languages[i], j))
					.set_be_name(util.getEventName(data, languages[i], j))
					.set_be_name_lang(languages[i])
					.set_be_type(util.getEventTypeByMapping(data, mappingSpain.mappings[3].BusinessEventType[0], languages[i], j));

			} else if (util.getEventClass(data, languages[i], j) == "Life Event") {
				editor
					.le_expand()
					.set_le_identifier(util.getEventIdentifier(data, languages[i], j))
					.set_le_name(util.getEventName(data, languages[i], j))
					.set_le_name_lang(languages[i])
					.set_le_type(util.getEventTypeByMapping(data, mappingSpain.mappings[4].LifeEventType[0], languages[i], j));
					
					
					console.log("*"+ util.getEventIdentifier(data, languages[i], j) + "*");

			}

			/*Download the result*/
			editor.select();

			if(enable_screenshot){
				browser
					.saveScreenshot(config.imgpath(browser) + 'editor.png');
			}

			rdfdata
				.select();

			if(enable_screenshot){
				browser
					.pause(time_pause)
					.saveScreenshot(config.imgpath(browser) + 'rdfdata.png');
			}

			browser
				.pause(time_pause);

			rdfdata
				.download();

			browser
				.pause(time_pause*4);

			if(enable_screenshot){
				browser
					.saveScreenshot(config.imgpath(browser) + 'rdfdata-download.png');
			}

			};
			
		}	

		browser
			.end();	

	}
	
};
