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

var nodeid = "testff";
var entityid = nodeid;

var application = util.getRandomFFApplication();
var application_label = application.label;
var application_value = util.escapeSpecialChars(application.value);

var def_application = util.getDefaultFFApplication();
var def_application_label = def_application.label;
var def_application_value = util.escapeSpecialChars(def_application.value);

console.log(application_label + " **** " + application_value);
console.log(def_application_label + " **** " + def_application_value);

module.exports = {
	'@tags': ['CSPV'],
	'Field appears in Presenter': function(browser) {
		var editor = browser.page.Editor();
		var presenter = browser.page.Presenter();

		editor.navigate()
			.waitForElementVisible('body')
			.ff_expand()
			.set_ff_application(application_label)
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
			.assert_ff_application(application_label);
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
			.verify_textarea_nodeid(contents.replace(def_application_value, application_value), entityid, nodeid);
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
			.assert_ff_application(def_application_label);
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
			.assert_ff_application(def_application_label);
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
