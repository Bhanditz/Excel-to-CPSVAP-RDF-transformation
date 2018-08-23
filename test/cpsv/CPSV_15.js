var config = require('../../nightwatch.conf.js');
var util = require('../../page-objects/utils/util.js');
var fs = require('fs');
var path = require('path');

var scriptName = path.basename(__filename, '.js');
var testdata_filename = scriptName + '.rdf';
var testdata_folder = __dirname + '..\\..\\..\\test-data\\';
var testdata_file = path.resolve(testdata_folder + testdata_filename);
var contents = fs.readFileSync('test-data/'+ testdata_filename, { 'encoding': 'utf8'});
var download_folder = "downloads/";

var time_pause = 1000;
var enable_screenshot = false;

var nodeid = "testca";
var entityid = nodeid;
var spatial = util.getRandomSpatial();
var spatial_label = spatial.label;
var spatial_value = spatial.value;

var def_spatial = util.getDefaultSpatial();
var def_spatial_label = def_spatial.label;
var def_spatial_value = def_spatial.value;

console.log(spatial_label + " **** " + spatial_value );

module.exports = {
	'@tags': ['CSPV'],
	'Field appears in Presenter': function(browser) {
		var editor = browser.page.Editor();
		var presenter = browser.page.Presenter();

		editor.navigate()
			.waitForElementVisible('body')
			.set_ca_spatial(spatial_label)
			.select();

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'editor.png');
		}

		presenter
			.select();

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'presenter.png');
		}

		presenter
			.assert_ca_spatial(spatial_label);
	},

	'Field appears in RDFData': function(browser) {
		var rdfdata = browser.page.RDFData();

		rdfdata
			.select();

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'rdfdata.png');
		}

		browser
			.pause(time_pause);

		rdfdata
			.verify_textarea_nodeid(contents.replace(def_spatial_value, spatial_value), entityid, nodeid);
	},

	'Uploading in RDFData': function(browser) {
		var rdfdata = browser.page.RDFData();

		rdfdata
			.upload(testdata_file);

		browser
			.pause(time_pause);

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'rdfdata-upload.png');
		}

		rdfdata
			.verify_textarea(contents);
	},

	'Upload appears in Presenter': function(browser) {
		var presenter = browser.page.Presenter();

		presenter
			.select();

		if(enable_screenshot){
			browser
				.pause(time_pause)
				.saveScreenshot(config.imgpath(browser) + 'presenter-upload.png');
		}

		presenter
			.assert_ca_spatial(def_spatial_label);
	},

	'Upload appears in Editor': function(browser) {
		var editor = browser.page.Editor();

		editor
			.select();

		if(enable_screenshot){
			browser
				.pause(time_pause)
				.saveScreenshot(config.imgpath(browser) + 'editor-upload.png');
		}

		editor
			.assert_ca_spatial(def_spatial_label);
	},

	'Download in RDFData': function(browser) {
		var rdfdata = browser.page.RDFData();

		rdfdata
			.select();

		if(enable_screenshot){
			browser
				.pause(time_pause)
				.saveScreenshot(config.imgpath(browser) + 'rdfdata-upload-2.png');
		}

		rdfdata
			.download();

		browser
			.pause(time_pause*4);

		rdfdata
			.verify_download(download_folder, testdata_filename);

		if(enable_screenshot){
			browser
				.saveScreenshot(config.imgpath(browser) + 'rdfdata-download.png');
		}

		browser
			.end();
	}
};
