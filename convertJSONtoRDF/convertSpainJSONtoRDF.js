var config = require('../nightwatch.conf.js');
var util = require('../page-objects/utils/util.js');
var fs = require('fs');
var path = require('path');

var sourcedata_filename = 'dataSpain';
var JSONdata = fs.readFileSync('tmp/'+sourcedata_filename+'.json', { 'encoding': 'utf8'});
var data = JSON.parse(JSONdata);
var download_folder = "downloads/";

var mappingSpain = require('../page-objects/utils/mappingSpain.json');

var time_pause = 1000;
var enable_screenshot = false;

module.exports = {
	'@tags': ['dataSpain'],

	'Fill data': function(browser) {
		var editor = browser.page.Editor();
		var rdfdata = browser.page.RDFData();

		/*Fill the public service information*/
		editor.navigate()
			.waitForElementVisible('body')
			.set_ps_identifier(util.getPublicServiceId(data, "English", "0" ))
			.set_ps_name(util.getPublicServiceName(data, "English", "0" ))
			.set_ps_name_lang("English")
			.set_ps_description(util.getPublicServiceDescription(data, "English", "0" ))
			.set_ps_description_lang("English")
			.set_ps_language(util.getPublicServiceLanguage(data, "English", "0"))
			.set_ps_type(util.getPublicServiceTypeByMapping(data, mappingSpain.mappings[0].ThematicArea[0].English, "English", "0"));		    	

		var keywords = util.getPublicServiceKeywords(data, "English", "0" );
		for (var i = 0; i < keywords.length; i++) {
		    editor
		    	.set_ps_keyword(keywords[i], i+1)
		    	.set_ps_keyword_lang("English", i+1)
		    	.expand_ps_keyword();
		}

		/*Fill the Public Organization information*/
		editor
			.set_ca_preferredlabel(util.getCompetentAuthorityPrefLabel(data, "English", "0"))
			.set_ca_preferredlabel_lang("English")
			.set_ca_spatial(util.getSpatialCodeByMapping(data, mappingSpain.mappings[1].SpatialCode[0].English, "English", "0"));

		/*Fill the channel*/
		editor
			.hch_expand()
			.set_hch_identifier(util.getChannelIdentifier(data, "English", "0"))
			.set_hch_type(util.getChannelTypeByMapping(data, mappingSpain.mappings[2].ChannelType[0].English, "English", "0"));

		/*Fill the event*/


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

		rdfdata
			.download();

		browser
			.pause(time_pause*4);

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'rdfdata-download.png');
		}

		browser
			.end();
	}
	
};
