var fs = require('fs');
var assert = require('assert');
var default_file = "PublicServiceDescriptionRDFXML.xml";
var util = require('./utils/util.js');

module.exports = {
	url: function() { 
		return "http://52.50.205.146:8890/rdforms/PSDescriptionCreator.html"; 
	},
	elements: {
		tab: {
			selector: '#dijit_layout_TabContainer_0_tablist_dijit__WidgetsInTemplateMixin_0'
		},
		textarea: {
			selector: '#dijit_form_SimpleTextarea_1'
		},
		upload: {
			selector: 'input[type="file"]'
		},
		download: {
			selector: '//button[text()="download"]',
			locateStrategy: 'xpath'
		}
	},
	
	commands: [{
		select() {
			return this.click('@tab');
		},
		verify_textarea(value) {
			return this.getValue('@textarea', function(result){
				this.assert.equal( result.value.replace(/[\n\r]+/g, ''), value.replace(/[\n\r]+/g, ''));
			})
		},
		verify_textarea_nodeid(value, entity, nodeid) {
			return this.getValue('@textarea', function(result){
				var found_nodeids = new RegExp(nodeid, 'g');
				var found_rdf_prefixes = new RegExp(util.extractRDFPrefix(value), 'g');
				var replace_value = value.replace(found_nodeids, util.extractNodeID(result.value, util.getEntity(entity))).replace(found_rdf_prefixes, util.extractRDFPrefix(result.value));
				this.assert.equal( result.value.replace(/[\n\r]+/g, ''), replace_value.replace(/[\n\r]+/g, ''));
			});
		},
		upload(file){
			return this.setValue('@upload', file);
		},
		download(){
			return this.click('@download');
		},
		verify_download(download_folder, testdata_filename){
			
			return this.getValue('@textarea', function(resultarea){
				var that = this;
				fs.readFile(download_folder + default_file, { 'encoding': 'utf8'}, (err, data) => {
						//that.pause(1000);
					that.assert.equal( resultarea.value.replace(/[\n\r]+/g, ''), data.replace(/[\n\r]+/g, '') );
				});
				//that.assert.equal( resultarea.value.replace(/[\n\r]+/g, ''), data.replace(/[\n\r]+/g, '') );
				var readS = fs.createReadStream(download_folder + default_file);
				var writeS = fs.createWriteStream(download_folder + testdata_filename);
				readS.pipe(writeS);
				readS.on("close", function() {
					//writeS.on("finish", function() {
						fs.unlinkSync(download_folder + default_file);
						//that.pause(1000);
						//fs.readFile(download_folder + testdata_filename, { 'encoding': 'utf8'}, (err, data) => {
						//that.pause(1000);
						//	that.assert.equal( resultarea.value.replace(/[\n\r]+/g, ''), data.replace(/[\n\r]+/g, '') );
						//});
					//});
				});
				//fs.renameSync(download_folder + default_file, download_folder + testdata_filename);
				//that.pause(1000);
				//var download = fs.readFileSync(download_folder + testdata_filename, { 'encoding': 'utf8'});
				//that.pause(1000);
				//that.assert.equal( resultarea.value.replace(/[\n\r]+/g, ''), download.replace(/[\n\r]+/g, '') );
					//.replace(/[\n\r]+/g, '')
					//that.assert.equal( resultarea.value.replace(/[\n\r]+/g, ''), fs.readFileSync(download_folder + testdata_filename, { 'encoding': 'utf8'}).replace(/[\n\r]+/g, '') );
				//});
				//var download = fs.readFileSync(download_folder + testdata_filename, { 'encoding': 'utf8'});
				//this.getValue('@textarea', function(resultarea){
					//this.assert.equal( resultarea.value.replace(/[\n\r]+/g, ''), fs.readFileSync(download_folder + testdata_filename, { 'encoding': 'utf8'}).replace(/[\n\r]+/g, '') );
				//});
			});
		}
	}]
};