var config = require('../nightwatch.conf.js');
var util = require('../page-objects/utils/util.js');
var fs = require('fs');
var path = require('path');

var sourcedata_filename = 'dataPortugal';
var JSONdata = fs.readFileSync('tmp/'+sourcedata_filename+'.json', { 'encoding': 'utf8'});
var data = JSON.parse(JSONdata);
var download_folder = "downloads/";

var mappingPortugal = require('../page-objects/utils/mappingPortugal.json');
var languages = ["Portuguese"];

var time_pause = 1000;
var enable_screenshot = false;

module.exports = {
	'@tags': ['dataPortugal'],

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
				.set_ps_language(j)
				.set_ps_spatial(util.getSpatialCodeByMapping(data, mappingPortugal.mappings[0].SpatialCode[0], languages[i], j))
				.set_ca_identifier(util.getCompotentAuthorityIdentifier(data, languages[i], j));

			/*Fill all has inputs */
			var hasInputs = util.getHasInputs(data, languages[i], j );
			for (var h = 0; h < hasInputs.length; h++) {
				if (h == 0) {
					expand = 1
				} else {
					expand = h
				}
			    editor
			    	.ip_expand(expand)
			    	.set_ip_identifier(util.getHasInputIdentifier(data, languages[i], h, j), h+1)
					.set_ip_name(util.getHasInputName(data, languages[i], h, j), h+1)
					.set_ip_name_lang(languages[i], h+1)
					.set_ip_description(util.getHasInputDescription(data, languages[i], h, j), h+1)
					.set_ip_description_lang(languages[i], h+1);
			}

			/*Fill all formal frameworks */
			var formalFrameworks = util.getFormalFrameworks(data, languages[i], j );
			for (var f = 0; f < formalFrameworks.length; f++) {
				if (f == 0) {
					expand = 1
				} else {
					expand = f
				}
			    editor
			    	.ff_expand(expand)
			    	.set_ff_identifier(util.getFormalFrameworkIdentifier(data, languages[i], f, j), f+1)
					.set_ff_name(util.getFormalFrameworkName(data, languages[i], f, j), f+1)
					.set_ff_name_lang(languages[i], f+1)
					.set_ff_description(util.getFormalFrameworkDescription(data, languages[i], f, j), f+1)
					.set_ff_description_lang(languages[i], f+1);
			}

			/*Fill all follows - rules */
			var rules = util.getFollows(data, languages[i], j );
			for (var r = 0; r < rules.length; r++) {
				if (r == 0) {
					expand = 1
				} else {
					expand = r
				}
			    editor
			    	.fo_expand(expand)
			    	.set_fo_identifier(util.getFollowsIdentifier(data, languages[i], r, j), r+1)
					.set_fo_name(util.getFollowsName(data, languages[i], r, j), r+1)
					.set_fo_name_lang(languages[i], r+1)
					.set_fo_description(util.getFollowsDescription(data, languages[i], r, j), r+1)
					.set_fo_description_lang(languages[i], r+1);
			}

			/*Fill all has costs */
			var hasCosts = util.getHasCosts(data, languages[i], j );
			for (var c = 0; c < hasCosts.length; c++) {
				if (c == 0) {
					expand = 1
				} else {
					expand = c
				}
			    editor
			    	.hc_expand(expand)
			    	.set_hc_identifier(util.getHasCostIdentifier(data, languages[i], c, j), c+1)
			    	.set_hc_description(util.getHasCostDescription(data, languages[i], c, j), c+1)
			    	.set_hc_description_lang(languages[i], c+1)
					.set_hc_value(util.getHasCostValue(data, languages[i], c, j), c+1)
					.set_hc_currency("EUR-Euro", c+1);
			}

			/*Fill all related */
			var related = util.getRelated(data, languages[i], j );
			for (var p = 0; p < related.length; p++) {
			    editor
			    	.set_ps_related(util.getPublicServiceRelated(data, languages[i], p, j), p+1)
			    	.expand_ps_related();
			}

			/*Fill Life or Business Event*/
			var eventClass = String(util.getEventClassByMapping(data, mappingPortugal.mappings[1].EventClass[0], languages[i], j));

			if (eventClass == "Business Event") {
				editor
					.be_expand()
					.set_be_identifier("BusinessEvent")
					.set_be_description(eventClass);
			} else if (eventClass == "Life Event") {
				editor
					.le_expand()
					.set_le_identifier("LifeEvent")
					.set_le_description(eventClass);
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
