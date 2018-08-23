module.exports = {
	url: function() { 
		return "http://52.50.205.146:8890/rdforms/PSDescriptionCreator.html"; 
	},
	elements: {
		tab: {
			selector: '#dijit_layout_TabContainer_0_tablist_dijit_layout_ContentPane_0'
		},
		about: {
			selector: ".claro header.banner div.tab button:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		about_the_public_service_description_creator_1: {
			selector: "dijit_form_SimpleTextarea_1",
			locateStrategy: 'id'
		}
		,		
		about_the_public_service_description_creator_2: {
			selector: "dijit_form_SimpleTextarea_2",
			locateStrategy: 'id'
		}
		,		
		description_1: {
			selector: "//div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		description_2: {
			selector: "//div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		description_3: {
			selector: "//div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		description_4: {
			selector: "//div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		download: {
			selector: "#dijit_layout_TabContainer_1_tablist button",
			locateStrategy: 'css'
		}
		,		
		editor: {
			selector: "editorButton",
			locateStrategy: 'id'
		}
		,		
		file: {
			selector: "#dijit_layout_TabContainer_1_tablist input[type='file']",
			locateStrategy: 'css'
		}
		,		
		followsdescription_1: {
			selector: "//div[1]/span[1][text() = 'Follows']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		followsdescription_2: {
			selector: "//div[1]/span[1][text() = 'Follows']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		followsdescription_3: {
			selector: "//div[1]/span[1][text() = 'Follows']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		followsdescription_4: {
			selector: "//div[1]/span[1][text() = 'Follows']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		followsidentifier: {
			selector: "//div[1]/span[1][text() = 'Follows']/../..//div[2]/div[1]/div[1]/div[1]/span[1][text() = 'Identifier']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		followslanguage_1: {
			selector: "//div[1]/span[1][text() = 'Follows']/../..//div[2]/div[1]/div[5]/div[1]/span[1][text() = 'Language']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		followslanguage_2: {
			selector: "//div[1]/span[1][text() = 'Follows']/../..//div[2]/div[1]/div[5]/div[1]/span[1][text() = 'Language']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		followslanguage_3: {
			selector: "//div[1]/span[1][text() = 'Follows']/../..//div[2]/div[1]/div[5]/div[1]/span[1][text() = 'Language']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		followsname_1: {
			selector: "//div[1]/span[1][text() = 'Follows']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		followsname_2: {
			selector: "//div[1]/span[1][text() = 'Follows']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		followsname_3: {
			selector: "//div[1]/span[1][text() = 'Follows']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		followsname_4: {
			selector: "//div[1]/span[1][text() = 'Follows']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		followstype_1: {
			selector: "//div[1]/span[1][text() = 'Follows']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		followstype_2: {
			selector: "//div[1]/span[1][text() = 'Follows']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		followstype_3: {
			selector: "//div[1]/span[1][text() = 'Follows']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		followstype_4: {
			selector: "//div[1]/span[1][text() = 'Follows']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		github: {
			selector: "a[href='https://github.com/catalogue-of-services-isa/cpsv-ap_rdf_editor']",
			locateStrategy: 'css'
		}
		,		
		haschannelidentifier: {
			selector: "//div[1]/span[1][text() = 'HasChannel']/../..//div[2]/div[1]/div[1]/div[1]/span[1][text() = 'Identifier']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		haschannelopeninghours: {
			selector: "//div[1]/span[1][text() = 'HasChannel']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'OpeningHours']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		haschanneltype_1: {
			selector: "//div[1]/span[1][text() = 'HasChannel']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		haschanneltype_2: {
			selector: "//div[1]/span[1][text() = 'HasChannel']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		haschanneltype_3: {
			selector: "//div[1]/span[1][text() = 'HasChannel']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascompetentauthorityidentifier: {
			selector: "//div[1]/span[1][text() = 'HasCompetentAuthority']/../..//div[2]/div[1]/div[1]/div[1]/span[1][text() = 'Identifier']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascompetentauthoritypreferredlabel_1: {
			selector: "//div[1]/span[1][text() = 'HasCompetentAuthority']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'PreferredLabel']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascompetentauthoritypreferredlabel_2: {
			selector: "//div[1]/span[1][text() = 'HasCompetentAuthority']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'PreferredLabel']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascompetentauthoritypreferredlabel_3: {
			selector: "//div[1]/span[1][text() = 'HasCompetentAuthority']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'PreferredLabel']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascompetentauthoritypreferredlabel_4: {
			selector: "//div[1]/span[1][text() = 'HasCompetentAuthority']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'PreferredLabel']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascompetentauthorityspatial_1: {
			selector: "//div[1]/span[1][text() = 'HasCompetentAuthority']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Spatial']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascompetentauthorityspatial_2: {
			selector: "//div[1]/span[1][text() = 'HasCompetentAuthority']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Spatial']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascompetentauthorityspatial_3: {
			selector: "//div[1]/span[1][text() = 'HasCompetentAuthority']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Spatial']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascontactpointhasemail: {
			selector: "//div[1]/span[1][text() = 'HasContactPoint']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'HasEmail']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascontactpointhastelephone: {
			selector: "//div[1]/span[1][text() = 'HasContactPoint']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'HasTelephone']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascontactpointidentifier: {
			selector: "//div[1]/span[1][text() = 'HasContactPoint']/../..//div[2]/div[1]/div[1]/div[1]/span[1][text() = 'Identifier']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascontactpointopeninghours: {
			selector: "//div[1]/span[1][text() = 'HasContactPoint']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'OpeningHours']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascostcurrency_1: {
			selector: "//div[1]/span[1][text() = 'HasCost']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'Currency']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascostcurrency_2: {
			selector: "//div[1]/span[1][text() = 'HasCost']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'Currency']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascostcurrency_3: {
			selector: "//div[1]/span[1][text() = 'HasCost']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'Currency']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascostdescription_1: {
			selector: "//div[1]/span[1][text() = 'HasCost']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascostdescription_2: {
			selector: "//div[1]/span[1][text() = 'HasCost']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascostdescription_3: {
			selector: "//div[1]/span[1][text() = 'HasCost']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascostdescription_4: {
			selector: "//div[1]/span[1][text() = 'HasCost']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascostidentifier: {
			selector: "//div[1]/span[1][text() = 'HasCost']/../..//div[2]/div[1]/div[1]/div[1]/span[1][text() = 'Identifier']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascostvalue: {
			selector: "//div[1]/span[1][text() = 'HasCost']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Value']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascriterionidentifier: {
			selector: "//div[1]/span[1][text() = 'HasCriterion']/../..//div[2]/div[1]/div[1]/div[1]/span[1][text() = 'Identifier']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascriterionname_1: {
			selector: "//div[1]/span[1][text() = 'HasCriterion']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascriterionname_2: {
			selector: "//div[1]/span[1][text() = 'HasCriterion']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascriterionname_3: {
			selector: "//div[1]/span[1][text() = 'HasCriterion']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascriterionname_4: {
			selector: "//div[1]/span[1][text() = 'HasCriterion']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascriteriontype_1: {
			selector: "//div[1]/span[1][text() = 'HasCriterion']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascriteriontype_2: {
			selector: "//div[1]/span[1][text() = 'HasCriterion']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascriteriontype_3: {
			selector: "//div[1]/span[1][text() = 'HasCriterion']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hascriteriontype_4: {
			selector: "//div[1]/span[1][text() = 'HasCriterion']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworkdescription_1: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworkdescription_2: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworkdescription_3: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworkdescription_4: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworkidentifier: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[1]/div[1]/span[1][text() = 'Identifier']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworklanguage_1: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[5]/div[1]/span[1][text() = 'Language']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworklanguage_2: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[5]/div[1]/span[1][text() = 'Language']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworklanguage_3: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[5]/div[1]/span[1][text() = 'Language']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworkname_1: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworkname_2: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworkname_3: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworkname_4: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworkstatus_1: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[6]/div[1]/span[1][text() = 'Status']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworkstatus_2: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[6]/div[1]/span[1][text() = 'Status']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworkstatus_3: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[6]/div[1]/span[1][text() = 'Status']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworksubject_1: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[7]/div[1]/span[1][text() = 'Subject']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworksubject_2: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[7]/div[1]/span[1][text() = 'Subject']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworksubject_3: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[7]/div[1]/span[1][text() = 'Subject']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworkterritorialapplication_1: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[8]/div[1]/span[1][text() = 'TerritorialApplication']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworkterritorialapplication_2: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[8]/div[1]/span[1][text() = 'TerritorialApplication']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworkterritorialapplication_3: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[8]/div[1]/span[1][text() = 'TerritorialApplication']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworktype_1: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworktype_2: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasformalframeworktype_3: {
			selector: "//div[1]/span[1][text() = 'HasFormalFramework']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasinputdescription_1: {
			selector: "//div[1]/span[1][text() = 'HasInput']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasinputdescription_2: {
			selector: "//div[1]/span[1][text() = 'HasInput']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasinputdescription_3: {
			selector: "//div[1]/span[1][text() = 'HasInput']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasinputdescription_4: {
			selector: "//div[1]/span[1][text() = 'HasInput']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasinputidentifier: {
			selector: "//div[1]/span[1][text() = 'HasInput']/../..//div[2]/div[1]/div[1]/div[1]/span[1][text() = 'Identifier']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasinputlanguage_1: {
			selector: "//div[1]/span[1][text() = 'HasInput']/../..//div[2]/div[1]/div[5]/div[1]/span[1][text() = 'Language']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasinputlanguage_2: {
			selector: "//div[1]/span[1][text() = 'HasInput']/../..//div[2]/div[1]/div[5]/div[1]/span[1][text() = 'Language']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasinputlanguage_3: {
			selector: "//div[1]/span[1][text() = 'HasInput']/../..//div[2]/div[1]/div[5]/div[1]/span[1][text() = 'Language']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasinputname_1: {
			selector: "//div[1]/span[1][text() = 'HasInput']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasinputname_2: {
			selector: "//div[1]/span[1][text() = 'HasInput']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasinputname_3: {
			selector: "//div[1]/span[1][text() = 'HasInput']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasinputname_4: {
			selector: "//div[1]/span[1][text() = 'HasInput']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasinputrelateddocumentation: {
			selector: "//div[1]/span[1][text() = 'HasInput']/../..//div[2]/div[1]/div[6]/div[1]/span[1][text() = 'RelatedDocumentation']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasinputtype_1: {
			selector: "//div[1]/span[1][text() = 'HasInput']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasinputtype_2: {
			selector: "//div[1]/span[1][text() = 'HasInput']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasinputtype_3: {
			selector: "//div[1]/span[1][text() = 'HasInput']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasinputtype_4: {
			selector: "//div[1]/span[1][text() = 'HasInput']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasparticipationdescription_1: {
			selector: "//div[1]/span[1][text() = 'HasParticipation']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasparticipationdescription_2: {
			selector: "//div[1]/span[1][text() = 'HasParticipation']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasparticipationdescription_3: {
			selector: "//div[1]/span[1][text() = 'HasParticipation']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasparticipationdescription_4: {
			selector: "//div[1]/span[1][text() = 'HasParticipation']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasparticipationidentifier: {
			selector: "//div[1]/span[1][text() = 'HasParticipation']/../..//div[2]/div[1]/div[1]/div[1]/span[1][text() = 'Identifier']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasparticipationrole_1: {
			selector: "//div[1]/span[1][text() = 'HasParticipation']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Role']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasparticipationrole_2: {
			selector: "//div[1]/span[1][text() = 'HasParticipation']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Role']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasparticipationrole_3: {
			selector: "//div[1]/span[1][text() = 'HasParticipation']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Role']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		hasparticipationrole_4: {
			selector: "//div[1]/span[1][text() = 'HasParticipation']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Role']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		httpec_europa_eu: {
			selector: "a[href='http://ec.europa.eu/']",
			locateStrategy: 'css'
		}
		,		
		identifier: {
			selector: "//div[1]/span[1][text() = 'Identifier']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isa2_action_2016_29: {
			selector: "a[href='https://ec.europa.eu/isa2/actions/accessing-member-state-information-resources-european-level_en']",
			locateStrategy: 'css'
		}
		,		
		isdescribedathasaddress: {
			selector: "//div[1]/span[1][text() = 'IsDescribedAt']/../..//div[2]/div[1]/div[4]/div[2]/div[1]/div[3]/div[1]/span[1][text() = 'HasAddress']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isdescribedatidentifier_1: {
			selector: "//div[1]/span[1][text() = 'IsDescribedAt']/../..//div[2]/div[1]/div[1]/div[1]/span[1][text() = 'Identifier']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isdescribedatidentifier_2: {
			selector: "//div[1]/span[1][text() = 'IsDescribedAt']/../..//div[2]/div[1]/div[4]/div[2]/div[1]/div[1]/div[1]/span[1][text() = 'Identifier']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isdescribedatlandingpage_1: {
			selector: "//div[1]/span[1][text() = 'IsDescribedAt']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'LandingPage']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isdescribedatlandingpage_2: {
			selector: "//div[1]/span[1][text() = 'IsDescribedAt']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'LandingPage']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isdescribedatlandingpage_3: {
			selector: "//div[1]/span[1][text() = 'IsDescribedAt']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'LandingPage']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isdescribedatlandingpage_4: {
			selector: "//div[1]/span[1][text() = 'IsDescribedAt']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'LandingPage']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isdescribedatname_1: {
			selector: "//div[1]/span[1][text() = 'IsDescribedAt']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isdescribedatname_2: {
			selector: "//div[1]/span[1][text() = 'IsDescribedAt']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isdescribedatname_3: {
			selector: "//div[1]/span[1][text() = 'IsDescribedAt']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isdescribedatname_4: {
			selector: "//div[1]/span[1][text() = 'IsDescribedAt']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isdescribedatname_5: {
			selector: "//div[1]/span[1][text() = 'IsDescribedAt']/../..//div[2]/div[1]/div[4]/div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isdescribedatname_6: {
			selector: "//div[1]/span[1][text() = 'IsDescribedAt']/../..//div[2]/div[1]/div[4]/div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isdescribedatname_7: {
			selector: "//div[1]/span[1][text() = 'IsDescribedAt']/../..//div[2]/div[1]/div[4]/div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isdescribedatname_8: {
			selector: "//div[1]/span[1][text() = 'IsDescribedAt']/../..//div[2]/div[1]/div[4]/div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_businesseventdescription_1: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: BusinessEvent']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_businesseventdescription_2: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: BusinessEvent']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_businesseventdescription_3: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: BusinessEvent']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_businesseventdescription_4: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: BusinessEvent']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_businesseventidentifier: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: BusinessEvent']/../..//div[2]/div[1]/div[1]/div[1]/span[1][text() = 'Identifier']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_businesseventname_1: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: BusinessEvent']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_businesseventname_2: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: BusinessEvent']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_businesseventname_3: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: BusinessEvent']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_businesseventname_4: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: BusinessEvent']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_businesseventrelatedservice: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: BusinessEvent']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'RelatedService']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_businesseventtype_1: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: BusinessEvent']/../..//div[2]/div[1]/div[5]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_businesseventtype_2: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: BusinessEvent']/../..//div[2]/div[1]/div[5]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_businesseventtype_3: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: BusinessEvent']/../..//div[2]/div[1]/div[5]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_lifeeventdescription_1: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: LifeEvent']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_lifeeventdescription_2: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: LifeEvent']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_lifeeventdescription_3: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: LifeEvent']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_lifeeventdescription_4: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: LifeEvent']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_lifeeventidentifier: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: LifeEvent']/../..//div[2]/div[1]/div[1]/div[1]/span[1][text() = 'Identifier']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_lifeeventname_1: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: LifeEvent']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_lifeeventname_2: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: LifeEvent']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_lifeeventname_3: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: LifeEvent']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_lifeeventname_4: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: LifeEvent']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_lifeeventrelatedservice: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: LifeEvent']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'RelatedService']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_lifeeventtype_1: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: LifeEvent']/../..//div[2]/div[1]/div[5]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_lifeeventtype_2: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: LifeEvent']/../..//div[2]/div[1]/div[5]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		isgroupedby_lifeeventtype_3: {
			selector: "//div[1]/span[1][text() = 'IsGroupedBy: LifeEvent']/../..//div[2]/div[1]/div[5]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		keyword_1: {
			selector: "//div[1]/span[1][text() = 'Keyword']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		keyword_2: {
			selector: "//div[1]/span[1][text() = 'Keyword']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		keyword_3: {
			selector: "//div[1]/span[1][text() = 'Keyword']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		keyword_4: {
			selector: "//div[1]/span[1][text() = 'Keyword']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		language_1: {
			selector: "//div[1]/span[1][text() = 'Language']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		language_2: {
			selector: "//div[1]/span[1][text() = 'Language']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		language_3: {
			selector: "//div[1]/span[1][text() = 'Language']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		lgpl3_0_license: {
			selector: "a[href='https://www.gnu.org/licenses/lgpl-3.0.en.html']",
			locateStrategy: 'css'
		}
		,		
		logobanner: {
			selector: "logobanner",
			locateStrategy: 'id'
		}
		,		
		name_1: {
			selector: "//div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		name_2: {
			selector: "//div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		name_3: {
			selector: "//div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		name_4: {
			selector: "//div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		page_loaded_text: {
			selector: "1 - Manufacture of basic chemicals, fertilisers and nitrogen compounds, plastics and synthetic rubber in primary forms",
			locateStrategy: ''
		}
		,		
		page_url: {
			selector: "/C:/Users/stanie/Downloads/selenium-page-object-generator/bin/test.html",
			locateStrategy: ''
		}
		,		
		processingtimedays_1: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[3][text() = 'Days']/../div[3]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimedays_2: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[3][text() = 'Days']/../div[3]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimedays_3: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[3][text() = 'Days']/../div[3]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimedays_4: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[3][text() = 'Days']/../div[3]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimedays_5: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[3][text() = 'Days']/../div[3]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimehours_1: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[4][text() = 'Hours']/../div[4]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimehours_2: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[4][text() = 'Hours']/../div[4]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimehours_3: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[4][text() = 'Hours']/../div[4]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimehours_4: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[4][text() = 'Hours']/../div[4]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimehours_5: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[4][text() = 'Hours']/../div[4]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimeminutes_1: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[5][text() = 'Minutes']/../div[5]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimeminutes_2: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[5][text() = 'Minutes']/../div[5]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimeminutes_3: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[5][text() = 'Minutes']/../div[5]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimeminutes_4: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[5][text() = 'Minutes']/../div[5]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimeminutes_5: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[5][text() = 'Minutes']/../div[5]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimemonths_1: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[2][text() = 'Months']/../div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimemonths_2: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[2][text() = 'Months']/../div[2]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimemonths_3: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[2][text() = 'Months']/../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimemonths_4: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[2][text() = 'Months']/../div[2]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimemonths_5: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[2][text() = 'Months']/../div[2]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimeyears_1: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[1][text() = 'Years']/../div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimeyears_2: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[1][text() = 'Years']/../div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimeyears_3: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[1][text() = 'Years']/../div[1]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimeyears_4: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[1][text() = 'Years']/../div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		processingtimeyears_5: {
			selector: "//div[1]/span[1][text() = 'ProcessingTime']/../..//div[2]/div[1]/div[2]/span[1][text() = 'Years']/../div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		producesdescription_1: {
			selector: "//div[1]/span[1][text() = 'Produces']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		producesdescription_2: {
			selector: "//div[1]/span[1][text() = 'Produces']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		producesdescription_3: {
			selector: "//div[1]/span[1][text() = 'Produces']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		producesdescription_4: {
			selector: "//div[1]/span[1][text() = 'Produces']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'Description']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		producesidentifier: {
			selector: "//div[1]/span[1][text() = 'Produces']/../..//div[2]/div[1]/div[1]/div[1]/span[1][text() = 'Identifier']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		producesname_1: {
			selector: "//div[1]/span[1][text() = 'Produces']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		producesname_2: {
			selector: "//div[1]/span[1][text() = 'Produces']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		producesname_3: {
			selector: "//div[1]/span[1][text() = 'Produces']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		producesname_4: {
			selector: "//div[1]/span[1][text() = 'Produces']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		producestype_1: {
			selector: "//div[1]/span[1][text() = 'Produces']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		producestype_2: {
			selector: "//div[1]/span[1][text() = 'Produces']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		producestype_3: {
			selector: "//div[1]/span[1][text() = 'Produces']/../..//div[2]/div[1]/div[4]/div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		related: {
			selector: "//div[1]/span[1][text() = 'Related']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		requires: {
			selector: "//div[1]/span[1][text() = 'Requires']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		sector_1: {
			selector: "//div[1]/span[1][text() = 'Sector']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		sector_2: {
			selector: "//div[1]/span[1][text() = 'Sector']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		sector_3: {
			selector: "//div[1]/span[1][text() = 'Sector']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		serviceproviderhasaddress: {
			selector: "//div[1]/span[1][text() = 'ServiceProvider']/../..//div[2]/div[1]/div[3]/div[1]/span[1][text() = 'HasAddress']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		serviceprovideridentifier: {
			selector: "//div[1]/span[1][text() = 'ServiceProvider']/../..//div[2]/div[1]/div[1]/div[1]/span[1][text() = 'Identifier']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		serviceprovidername_1: {
			selector: "//div[1]/span[1][text() = 'ServiceProvider']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		serviceprovidername_2: {
			selector: "//div[1]/span[1][text() = 'ServiceProvider']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		serviceprovidername_3: {
			selector: "//div[1]/span[1][text() = 'ServiceProvider']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[1]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		serviceprovidername_4: {
			selector: "//div[1]/span[1][text() = 'ServiceProvider']/../..//div[2]/div[1]/div[2]/div[1]/span[1][text() = 'Name']/../../div[2]/div[1]/div[2]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		spatial_1: {
			selector: "//div[1]/span[1][text() = 'Spatial']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		spatial_2: {
			selector: "//div[1]/span[1][text() = 'Spatial']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		spatial_3: {
			selector: "//div[1]/span[1][text() = 'Spatial']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		status_1: {
			selector: "//div[1]/span[1][text() = 'Status']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		status_2: {
			selector: "//div[1]/span[1][text() = 'Status']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		status_3: {
			selector: "//div[1]/span[1][text() = 'Status']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		type_1: {
			selector: "//div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[1]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		type_2: {
			selector: "//div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[2]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		type_3: {
			selector: "//div[1]/span[1][text() = 'Type']/../../div[2]/div[1]/div[2]/div[1]/div[3]/input[1]",
			locateStrategy: 'xpath'
		}
		,		
		widgetdijitformfilteringselect0_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_0 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect10_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_10 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect11_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_11 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect12_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_12 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect13_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_13 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect14_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_14 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect15_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_15 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect16_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_16 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect17_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_17 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect18_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_18 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect19_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_19 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect1_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_1 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect20_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_20 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect21_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_21 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect22_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_22 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect23_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_23 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect24_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_24 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect25_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_25 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect26_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_26 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect27_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_27 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect28_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_28 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect29_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_29 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect2_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_2 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect30_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_30 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect31_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_31 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect32_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_32 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect33_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_33 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect34_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_34 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect35_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_35 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect36_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_36 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect37_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_37 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect38_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_38 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect39_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_39 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect3_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_3 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect40_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_40 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect41_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_41 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect42_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_42 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect43_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_43 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect44_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_44 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect4_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_4 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect5_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_5 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect6_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_6 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect7_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_7 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect8_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_8 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformfilteringselect9_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_FilteringSelect_9 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformnumberspinner0_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_NumberSpinner_0 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformnumberspinner1_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_NumberSpinner_1 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformnumberspinner2_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_NumberSpinner_2 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformnumberspinner3_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_NumberSpinner_3 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
		,		
		widgetdijitformnumberspinner4_divnthoftype3_inputnthoftype2: {
			selector: "#widget_dijit_form_NumberSpinner_4 div:nth-of-type(3) input:nth-of-type(2)",
			locateStrategy: 'css'
		}
	},
	
	commands: [{
		setAboutThePublicServiceDescriptionCreator1TextareaField(about_the_public_service_description_creator_1_value) {
			return this.setValue('@about_the_public_service_description_creator_1', about_the_public_service_description_creator_1_value);
		  }
		,		setAboutThePublicServiceDescriptionCreator2TextareaField(about_the_public_service_description_creator_2_value) {
			return this.setValue('@about_the_public_service_description_creator_2', about_the_public_service_description_creator_2_value);
		  }
		,		setDescription1TextField(description_1_value) {
			return this.setValue('@description_1', description_1_value);
		  }
		,		setDescription2TextField(description_2_value) {
			return this.setValue('@description_2', description_2_value);
		  }
		,		setDescription3TextField(description_3_value) {
			return this.setValue('@description_3', description_3_value);
		  }
		,		setDescription4TextField(description_4_value) {
			return this.setValue('@description_4', description_4_value);
		  }
		,		setFollowsdescription1TextField(followsdescription_1_value) {
			return this.setValue('@followsdescription_1', followsdescription_1_value);
		  }
		,		setFollowsdescription2TextField(followsdescription_2_value) {
			return this.setValue('@followsdescription_2', followsdescription_2_value);
		  }
		,		setFollowsdescription3TextField(followsdescription_3_value) {
			return this.setValue('@followsdescription_3', followsdescription_3_value);
		  }
		,		setFollowsdescription4TextField(followsdescription_4_value) {
			return this.setValue('@followsdescription_4', followsdescription_4_value);
		  }
		,		setFollowsidentifierTextField(followsidentifier_value) {
			return this.setValue('@followsidentifier', followsidentifier_value);
		  }
		,		setFollowslanguage1TextField(followslanguage_1_value) {
			return this.setValue('@followslanguage_1', followslanguage_1_value);
		  }
		,		setFollowslanguage2TextField(followslanguage_2_value) {
			return this.setValue('@followslanguage_2', followslanguage_2_value);
		  }
		,		setFollowslanguage3TextField(followslanguage_3_value) {
			return this.setValue('@followslanguage_3', followslanguage_3_value);
		  }
		,		setFollowsname1TextField(followsname_1_value) {
			return this.setValue('@followsname_1', followsname_1_value);
		  }
		,		setFollowsname2TextField(followsname_2_value) {
			return this.setValue('@followsname_2', followsname_2_value);
		  }
		,		setFollowsname3TextField(followsname_3_value) {
			return this.setValue('@followsname_3', followsname_3_value);
		  }
		,		setFollowsname4TextField(followsname_4_value) {
			return this.setValue('@followsname_4', followsname_4_value);
		  }
		,		setFollowstype1TextField(followstype_1_value) {
			return this.setValue('@followstype_1', followstype_1_value);
		  }
		,		setFollowstype2TextField(followstype_2_value) {
			return this.setValue('@followstype_2', followstype_2_value);
		  }
		,		setFollowstype3TextField(followstype_3_value) {
			return this.setValue('@followstype_3', followstype_3_value);
		  }
		,		setFollowstype4TextField(followstype_4_value) {
			return this.setValue('@followstype_4', followstype_4_value);
		  }
		,		setHaschannelidentifierTextField(haschannelidentifier_value) {
			return this.setValue('@haschannelidentifier', haschannelidentifier_value);
		  }
		,		setHaschannelopeninghoursTextField(haschannelopeninghours_value) {
			return this.setValue('@haschannelopeninghours', haschannelopeninghours_value);
		  }
		,		setHaschanneltype1TextField(haschanneltype_1_value) {
			return this.setValue('@haschanneltype_1', haschanneltype_1_value);
		  }
		,		setHaschanneltype2TextField(haschanneltype_2_value) {
			return this.setValue('@haschanneltype_2', haschanneltype_2_value);
		  }
		,		setHaschanneltype3TextField(haschanneltype_3_value) {
			return this.setValue('@haschanneltype_3', haschanneltype_3_value);
		  }
		,		setHascompetentauthorityidentifierTextField(hascompetentauthorityidentifier_value) {
			return this.setValue('@hascompetentauthorityidentifier', hascompetentauthorityidentifier_value);
		  }
		,		setHascompetentauthoritypreferredlabel1TextField(hascompetentauthoritypreferredlabel_1_value) {
			return this.setValue('@hascompetentauthoritypreferredlabel_1', hascompetentauthoritypreferredlabel_1_value);
		  }
		,		setHascompetentauthoritypreferredlabel2TextField(hascompetentauthoritypreferredlabel_2_value) {
			return this.setValue('@hascompetentauthoritypreferredlabel_2', hascompetentauthoritypreferredlabel_2_value);
		  }
		,		setHascompetentauthoritypreferredlabel3TextField(hascompetentauthoritypreferredlabel_3_value) {
			return this.setValue('@hascompetentauthoritypreferredlabel_3', hascompetentauthoritypreferredlabel_3_value);
		  }
		,		setHascompetentauthoritypreferredlabel4TextField(hascompetentauthoritypreferredlabel_4_value) {
			return this.setValue('@hascompetentauthoritypreferredlabel_4', hascompetentauthoritypreferredlabel_4_value);
		  }
		,		setHascompetentauthorityspatial1TextField(hascompetentauthorityspatial_1_value) {
			return this.setValue('@hascompetentauthorityspatial_1', hascompetentauthorityspatial_1_value);
		  }
		,		setHascompetentauthorityspatial2TextField(hascompetentauthorityspatial_2_value) {
			return this.setValue('@hascompetentauthorityspatial_2', hascompetentauthorityspatial_2_value);
		  }
		,		setHascompetentauthorityspatial3TextField(hascompetentauthorityspatial_3_value) {
			return this.setValue('@hascompetentauthorityspatial_3', hascompetentauthorityspatial_3_value);
		  }
		,		setHascontactpointhasemailTextField(hascontactpointhasemail_value) {
			return this.setValue('@hascontactpointhasemail', hascontactpointhasemail_value);
		  }
		,		setHascontactpointhastelephoneTextField(hascontactpointhastelephone_value) {
			return this.setValue('@hascontactpointhastelephone', hascontactpointhastelephone_value);
		  }
		,		setHascontactpointidentifierTextField(hascontactpointidentifier_value) {
			return this.setValue('@hascontactpointidentifier', hascontactpointidentifier_value);
		  }
		,		setHascontactpointopeninghoursTextField(hascontactpointopeninghours_value) {
			return this.setValue('@hascontactpointopeninghours', hascontactpointopeninghours_value);
		  }
		,		setHascostcurrency1TextField(hascostcurrency_1_value) {
			return this.setValue('@hascostcurrency_1', hascostcurrency_1_value);
		  }
		,		setHascostcurrency2TextField(hascostcurrency_2_value) {
			return this.setValue('@hascostcurrency_2', hascostcurrency_2_value);
		  }
		,		setHascostcurrency3TextField(hascostcurrency_3_value) {
			return this.setValue('@hascostcurrency_3', hascostcurrency_3_value);
		  }
		,		setHascostdescription1TextField(hascostdescription_1_value) {
			return this.setValue('@hascostdescription_1', hascostdescription_1_value);
		  }
		,		setHascostdescription2TextField(hascostdescription_2_value) {
			return this.setValue('@hascostdescription_2', hascostdescription_2_value);
		  }
		,		setHascostdescription3TextField(hascostdescription_3_value) {
			return this.setValue('@hascostdescription_3', hascostdescription_3_value);
		  }
		,		setHascostdescription4TextField(hascostdescription_4_value) {
			return this.setValue('@hascostdescription_4', hascostdescription_4_value);
		  }
		,		setHascostidentifierTextField(hascostidentifier_value) {
			return this.setValue('@hascostidentifier', hascostidentifier_value);
		  }
		,		setHascostvalueTextField(hascostvalue_value) {
			return this.setValue('@hascostvalue', hascostvalue_value);
		  }
		,		setHascriterionidentifierTextField(hascriterionidentifier_value) {
			return this.setValue('@hascriterionidentifier', hascriterionidentifier_value);
		  }
		,		setHascriterionname1TextField(hascriterionname_1_value) {
			return this.setValue('@hascriterionname_1', hascriterionname_1_value);
		  }
		,		setHascriterionname2TextField(hascriterionname_2_value) {
			return this.setValue('@hascriterionname_2', hascriterionname_2_value);
		  }
		,		setHascriterionname3TextField(hascriterionname_3_value) {
			return this.setValue('@hascriterionname_3', hascriterionname_3_value);
		  }
		,		setHascriterionname4TextField(hascriterionname_4_value) {
			return this.setValue('@hascriterionname_4', hascriterionname_4_value);
		  }
		,		setHascriteriontype1TextField(hascriteriontype_1_value) {
			return this.setValue('@hascriteriontype_1', hascriteriontype_1_value);
		  }
		,		setHascriteriontype2TextField(hascriteriontype_2_value) {
			return this.setValue('@hascriteriontype_2', hascriteriontype_2_value);
		  }
		,		setHascriteriontype3TextField(hascriteriontype_3_value) {
			return this.setValue('@hascriteriontype_3', hascriteriontype_3_value);
		  }
		,		setHascriteriontype4TextField(hascriteriontype_4_value) {
			return this.setValue('@hascriteriontype_4', hascriteriontype_4_value);
		  }
		,		setHasformalframeworkdescription1TextField(hasformalframeworkdescription_1_value) {
			return this.setValue('@hasformalframeworkdescription_1', hasformalframeworkdescription_1_value);
		  }
		,		setHasformalframeworkdescription2TextField(hasformalframeworkdescription_2_value) {
			return this.setValue('@hasformalframeworkdescription_2', hasformalframeworkdescription_2_value);
		  }
		,		setHasformalframeworkdescription3TextField(hasformalframeworkdescription_3_value) {
			return this.setValue('@hasformalframeworkdescription_3', hasformalframeworkdescription_3_value);
		  }
		,		setHasformalframeworkdescription4TextField(hasformalframeworkdescription_4_value) {
			return this.setValue('@hasformalframeworkdescription_4', hasformalframeworkdescription_4_value);
		  }
		,		setHasformalframeworkidentifierTextField(hasformalframeworkidentifier_value) {
			return this.setValue('@hasformalframeworkidentifier', hasformalframeworkidentifier_value);
		  }
		,		setHasformalframeworklanguage1TextField(hasformalframeworklanguage_1_value) {
			return this.setValue('@hasformalframeworklanguage_1', hasformalframeworklanguage_1_value);
		  }
		,		setHasformalframeworklanguage2TextField(hasformalframeworklanguage_2_value) {
			return this.setValue('@hasformalframeworklanguage_2', hasformalframeworklanguage_2_value);
		  }
		,		setHasformalframeworklanguage3TextField(hasformalframeworklanguage_3_value) {
			return this.setValue('@hasformalframeworklanguage_3', hasformalframeworklanguage_3_value);
		  }
		,		setHasformalframeworkname1TextField(hasformalframeworkname_1_value) {
			return this.setValue('@hasformalframeworkname_1', hasformalframeworkname_1_value);
		  }
		,		setHasformalframeworkname2TextField(hasformalframeworkname_2_value) {
			return this.setValue('@hasformalframeworkname_2', hasformalframeworkname_2_value);
		  }
		,		setHasformalframeworkname3TextField(hasformalframeworkname_3_value) {
			return this.setValue('@hasformalframeworkname_3', hasformalframeworkname_3_value);
		  }
		,		setHasformalframeworkname4TextField(hasformalframeworkname_4_value) {
			return this.setValue('@hasformalframeworkname_4', hasformalframeworkname_4_value);
		  }
		,		setHasformalframeworkstatus1TextField(hasformalframeworkstatus_1_value) {
			return this.setValue('@hasformalframeworkstatus_1', hasformalframeworkstatus_1_value);
		  }
		,		setHasformalframeworkstatus2TextField(hasformalframeworkstatus_2_value) {
			return this.setValue('@hasformalframeworkstatus_2', hasformalframeworkstatus_2_value);
		  }
		,		setHasformalframeworkstatus3TextField(hasformalframeworkstatus_3_value) {
			return this.setValue('@hasformalframeworkstatus_3', hasformalframeworkstatus_3_value);
		  }
		,		setHasformalframeworksubject1TextField(hasformalframeworksubject_1_value) {
			return this.setValue('@hasformalframeworksubject_1', hasformalframeworksubject_1_value);
		  }
		,		setHasformalframeworksubject2TextField(hasformalframeworksubject_2_value) {
			return this.setValue('@hasformalframeworksubject_2', hasformalframeworksubject_2_value);
		  }
		,		setHasformalframeworksubject3TextField(hasformalframeworksubject_3_value) {
			return this.setValue('@hasformalframeworksubject_3', hasformalframeworksubject_3_value);
		  }
		,		setHasformalframeworkterritorialapplication1TextField(hasformalframeworkterritorialapplication_1_value) {
			return this.setValue('@hasformalframeworkterritorialapplication_1', hasformalframeworkterritorialapplication_1_value);
		  }
		,		setHasformalframeworkterritorialapplication2TextField(hasformalframeworkterritorialapplication_2_value) {
			return this.setValue('@hasformalframeworkterritorialapplication_2', hasformalframeworkterritorialapplication_2_value);
		  }
		,		setHasformalframeworkterritorialapplication3TextField(hasformalframeworkterritorialapplication_3_value) {
			return this.setValue('@hasformalframeworkterritorialapplication_3', hasformalframeworkterritorialapplication_3_value);
		  }
		,		setHasformalframeworktype1TextField(hasformalframeworktype_1_value) {
			return this.setValue('@hasformalframeworktype_1', hasformalframeworktype_1_value);
		  }
		,		setHasformalframeworktype2TextField(hasformalframeworktype_2_value) {
			return this.setValue('@hasformalframeworktype_2', hasformalframeworktype_2_value);
		  }
		,		setHasformalframeworktype3TextField(hasformalframeworktype_3_value) {
			return this.setValue('@hasformalframeworktype_3', hasformalframeworktype_3_value);
		  }
		,		setHasinputdescription1TextField(hasinputdescription_1_value) {
			return this.setValue('@hasinputdescription_1', hasinputdescription_1_value);
		  }
		,		setHasinputdescription2TextField(hasinputdescription_2_value) {
			return this.setValue('@hasinputdescription_2', hasinputdescription_2_value);
		  }
		,		setHasinputdescription3TextField(hasinputdescription_3_value) {
			return this.setValue('@hasinputdescription_3', hasinputdescription_3_value);
		  }
		,		setHasinputdescription4TextField(hasinputdescription_4_value) {
			return this.setValue('@hasinputdescription_4', hasinputdescription_4_value);
		  }
		,		setHasinputidentifierTextField(hasinputidentifier_value) {
			return this.setValue('@hasinputidentifier', hasinputidentifier_value);
		  }
		,		setHasinputlanguage1TextField(hasinputlanguage_1_value) {
			return this.setValue('@hasinputlanguage_1', hasinputlanguage_1_value);
		  }
		,		setHasinputlanguage2TextField(hasinputlanguage_2_value) {
			return this.setValue('@hasinputlanguage_2', hasinputlanguage_2_value);
		  }
		,		setHasinputlanguage3TextField(hasinputlanguage_3_value) {
			return this.setValue('@hasinputlanguage_3', hasinputlanguage_3_value);
		  }
		,		setHasinputname1TextField(hasinputname_1_value) {
			return this.setValue('@hasinputname_1', hasinputname_1_value);
		  }
		,		setHasinputname2TextField(hasinputname_2_value) {
			return this.setValue('@hasinputname_2', hasinputname_2_value);
		  }
		,		setHasinputname3TextField(hasinputname_3_value) {
			return this.setValue('@hasinputname_3', hasinputname_3_value);
		  }
		,		setHasinputname4TextField(hasinputname_4_value) {
			return this.setValue('@hasinputname_4', hasinputname_4_value);
		  }
		,		setHasinputrelateddocumentationTextField(hasinputrelateddocumentation_value) {
			return this.setValue('@hasinputrelateddocumentation', hasinputrelateddocumentation_value);
		  }
		,		setHasinputtype1TextField(hasinputtype_1_value) {
			return this.setValue('@hasinputtype_1', hasinputtype_1_value);
		  }
		,		setHasinputtype2TextField(hasinputtype_2_value) {
			return this.setValue('@hasinputtype_2', hasinputtype_2_value);
		  }
		,		setHasinputtype3TextField(hasinputtype_3_value) {
			return this.setValue('@hasinputtype_3', hasinputtype_3_value);
		  }
		,		setHasinputtype4TextField(hasinputtype_4_value) {
			return this.setValue('@hasinputtype_4', hasinputtype_4_value);
		  }
		,		setHasparticipationdescription1TextField(hasparticipationdescription_1_value) {
			return this.setValue('@hasparticipationdescription_1', hasparticipationdescription_1_value);
		  }
		,		setHasparticipationdescription2TextField(hasparticipationdescription_2_value) {
			return this.setValue('@hasparticipationdescription_2', hasparticipationdescription_2_value);
		  }
		,		setHasparticipationdescription3TextField(hasparticipationdescription_3_value) {
			return this.setValue('@hasparticipationdescription_3', hasparticipationdescription_3_value);
		  }
		,		setHasparticipationdescription4TextField(hasparticipationdescription_4_value) {
			return this.setValue('@hasparticipationdescription_4', hasparticipationdescription_4_value);
		  }
		,		setHasparticipationidentifierTextField(hasparticipationidentifier_value) {
			return this.setValue('@hasparticipationidentifier', hasparticipationidentifier_value);
		  }
		,		setHasparticipationrole1TextField(hasparticipationrole_1_value) {
			return this.setValue('@hasparticipationrole_1', hasparticipationrole_1_value);
		  }
		,		setHasparticipationrole2TextField(hasparticipationrole_2_value) {
			return this.setValue('@hasparticipationrole_2', hasparticipationrole_2_value);
		  }
		,		setHasparticipationrole3TextField(hasparticipationrole_3_value) {
			return this.setValue('@hasparticipationrole_3', hasparticipationrole_3_value);
		  }
		,		setHasparticipationrole4TextField(hasparticipationrole_4_value) {
			return this.setValue('@hasparticipationrole_4', hasparticipationrole_4_value);
		  }
		,		setIdentifierTextField(identifier_value) {
			return this.setValue('@identifier', identifier_value);
		  }
		,		setIsdescribedathasaddressTextField(isdescribedathasaddress_value) {
			return this.setValue('@isdescribedathasaddress', isdescribedathasaddress_value);
		  }
		,		setIsdescribedatidentifier1TextField(isdescribedatidentifier_1_value) {
			return this.setValue('@isdescribedatidentifier_1', isdescribedatidentifier_1_value);
		  }
		,		setIsdescribedatidentifier2TextField(isdescribedatidentifier_2_value) {
			return this.setValue('@isdescribedatidentifier_2', isdescribedatidentifier_2_value);
		  }
		,		setIsdescribedatlandingpage1TextField(isdescribedatlandingpage_1_value) {
			return this.setValue('@isdescribedatlandingpage_1', isdescribedatlandingpage_1_value);
		  }
		,		setIsdescribedatlandingpage2TextField(isdescribedatlandingpage_2_value) {
			return this.setValue('@isdescribedatlandingpage_2', isdescribedatlandingpage_2_value);
		  }
		,		setIsdescribedatlandingpage3TextField(isdescribedatlandingpage_3_value) {
			return this.setValue('@isdescribedatlandingpage_3', isdescribedatlandingpage_3_value);
		  }
		,		setIsdescribedatlandingpage4TextField(isdescribedatlandingpage_4_value) {
			return this.setValue('@isdescribedatlandingpage_4', isdescribedatlandingpage_4_value);
		  }
		,		setIsdescribedatname1TextField(isdescribedatname_1_value) {
			return this.setValue('@isdescribedatname_1', isdescribedatname_1_value);
		  }
		,		setIsdescribedatname2TextField(isdescribedatname_2_value) {
			return this.setValue('@isdescribedatname_2', isdescribedatname_2_value);
		  }
		,		setIsdescribedatname3TextField(isdescribedatname_3_value) {
			return this.setValue('@isdescribedatname_3', isdescribedatname_3_value);
		  }
		,		setIsdescribedatname4TextField(isdescribedatname_4_value) {
			return this.setValue('@isdescribedatname_4', isdescribedatname_4_value);
		  }
		,		setIsdescribedatname5TextField(isdescribedatname_5_value) {
			return this.setValue('@isdescribedatname_5', isdescribedatname_5_value);
		  }
		,		setIsdescribedatname6TextField(isdescribedatname_6_value) {
			return this.setValue('@isdescribedatname_6', isdescribedatname_6_value);
		  }
		,		setIsdescribedatname7TextField(isdescribedatname_7_value) {
			return this.setValue('@isdescribedatname_7', isdescribedatname_7_value);
		  }
		,		setIsdescribedatname8TextField(isdescribedatname_8_value) {
			return this.setValue('@isdescribedatname_8', isdescribedatname_8_value);
		  }
		,		setIsgroupedbyBusinesseventdescription1TextField(isgroupedby_businesseventdescription_1_value) {
			return this.setValue('@isgroupedby_businesseventdescription_1', isgroupedby_businesseventdescription_1_value);
		  }
		,		setIsgroupedbyBusinesseventdescription2TextField(isgroupedby_businesseventdescription_2_value) {
			return this.setValue('@isgroupedby_businesseventdescription_2', isgroupedby_businesseventdescription_2_value);
		  }
		,		setIsgroupedbyBusinesseventdescription3TextField(isgroupedby_businesseventdescription_3_value) {
			return this.setValue('@isgroupedby_businesseventdescription_3', isgroupedby_businesseventdescription_3_value);
		  }
		,		setIsgroupedbyBusinesseventdescription4TextField(isgroupedby_businesseventdescription_4_value) {
			return this.setValue('@isgroupedby_businesseventdescription_4', isgroupedby_businesseventdescription_4_value);
		  }
		,		setIsgroupedbyBusinesseventidentifierTextField(isgroupedby_businesseventidentifier_value) {
			return this.setValue('@isgroupedby_businesseventidentifier', isgroupedby_businesseventidentifier_value);
		  }
		,		setIsgroupedbyBusinesseventname1TextField(isgroupedby_businesseventname_1_value) {
			return this.setValue('@isgroupedby_businesseventname_1', isgroupedby_businesseventname_1_value);
		  }
		,		setIsgroupedbyBusinesseventname2TextField(isgroupedby_businesseventname_2_value) {
			return this.setValue('@isgroupedby_businesseventname_2', isgroupedby_businesseventname_2_value);
		  }
		,		setIsgroupedbyBusinesseventname3TextField(isgroupedby_businesseventname_3_value) {
			return this.setValue('@isgroupedby_businesseventname_3', isgroupedby_businesseventname_3_value);
		  }
		,		setIsgroupedbyBusinesseventname4TextField(isgroupedby_businesseventname_4_value) {
			return this.setValue('@isgroupedby_businesseventname_4', isgroupedby_businesseventname_4_value);
		  }
		,		setIsgroupedbyBusinesseventrelatedserviceTextField(isgroupedby_businesseventrelatedservice_value) {
			return this.setValue('@isgroupedby_businesseventrelatedservice', isgroupedby_businesseventrelatedservice_value);
		  }
		,		setIsgroupedbyBusinesseventtype1TextField(isgroupedby_businesseventtype_1_value) {
			return this.setValue('@isgroupedby_businesseventtype_1', isgroupedby_businesseventtype_1_value);
		  }
		,		setIsgroupedbyBusinesseventtype2TextField(isgroupedby_businesseventtype_2_value) {
			return this.setValue('@isgroupedby_businesseventtype_2', isgroupedby_businesseventtype_2_value);
		  }
		,		setIsgroupedbyBusinesseventtype3TextField(isgroupedby_businesseventtype_3_value) {
			return this.setValue('@isgroupedby_businesseventtype_3', isgroupedby_businesseventtype_3_value);
		  }
		,		setIsgroupedbyLifeeventdescription1TextField(isgroupedby_lifeeventdescription_1_value) {
			return this.setValue('@isgroupedby_lifeeventdescription_1', isgroupedby_lifeeventdescription_1_value);
		  }
		,		setIsgroupedbyLifeeventdescription2TextField(isgroupedby_lifeeventdescription_2_value) {
			return this.setValue('@isgroupedby_lifeeventdescription_2', isgroupedby_lifeeventdescription_2_value);
		  }
		,		setIsgroupedbyLifeeventdescription3TextField(isgroupedby_lifeeventdescription_3_value) {
			return this.setValue('@isgroupedby_lifeeventdescription_3', isgroupedby_lifeeventdescription_3_value);
		  }
		,		setIsgroupedbyLifeeventdescription4TextField(isgroupedby_lifeeventdescription_4_value) {
			return this.setValue('@isgroupedby_lifeeventdescription_4', isgroupedby_lifeeventdescription_4_value);
		  }
		,		setIsgroupedbyLifeeventidentifierTextField(isgroupedby_lifeeventidentifier_value) {
			return this.setValue('@isgroupedby_lifeeventidentifier', isgroupedby_lifeeventidentifier_value);
		  }
		,		setIsgroupedbyLifeeventname1TextField(isgroupedby_lifeeventname_1_value) {
			return this.setValue('@isgroupedby_lifeeventname_1', isgroupedby_lifeeventname_1_value);
		  }
		,		setIsgroupedbyLifeeventname2TextField(isgroupedby_lifeeventname_2_value) {
			return this.setValue('@isgroupedby_lifeeventname_2', isgroupedby_lifeeventname_2_value);
		  }
		,		setIsgroupedbyLifeeventname3TextField(isgroupedby_lifeeventname_3_value) {
			return this.setValue('@isgroupedby_lifeeventname_3', isgroupedby_lifeeventname_3_value);
		  }
		,		setIsgroupedbyLifeeventname4TextField(isgroupedby_lifeeventname_4_value) {
			return this.setValue('@isgroupedby_lifeeventname_4', isgroupedby_lifeeventname_4_value);
		  }
		,		setIsgroupedbyLifeeventrelatedserviceTextField(isgroupedby_lifeeventrelatedservice_value) {
			return this.setValue('@isgroupedby_lifeeventrelatedservice', isgroupedby_lifeeventrelatedservice_value);
		  }
		,		setIsgroupedbyLifeeventtype1TextField(isgroupedby_lifeeventtype_1_value) {
			return this.setValue('@isgroupedby_lifeeventtype_1', isgroupedby_lifeeventtype_1_value);
		  }
		,		setIsgroupedbyLifeeventtype2TextField(isgroupedby_lifeeventtype_2_value) {
			return this.setValue('@isgroupedby_lifeeventtype_2', isgroupedby_lifeeventtype_2_value);
		  }
		,		setIsgroupedbyLifeeventtype3TextField(isgroupedby_lifeeventtype_3_value) {
			return this.setValue('@isgroupedby_lifeeventtype_3', isgroupedby_lifeeventtype_3_value);
		  }
		,		setKeyword1TextField(keyword_1_value) {
			return this.setValue('@keyword_1', keyword_1_value);
		  }
		,		setKeyword2TextField(keyword_2_value) {
			return this.setValue('@keyword_2', keyword_2_value);
		  }
		,		setKeyword3TextField(keyword_3_value) {
			return this.setValue('@keyword_3', keyword_3_value);
		  }
		,		setKeyword4TextField(keyword_4_value) {
			return this.setValue('@keyword_4', keyword_4_value);
		  }
		,		setLanguage1TextField(language_1_value) {
			return this.setValue('@language_1', language_1_value);
		  }
		,		setLanguage2TextField(language_2_value) {
			return this.setValue('@language_2', language_2_value);
		  }
		,		setLanguage3TextField(language_3_value) {
			return this.setValue('@language_3', language_3_value);
		  }
		,		setName1TextField(name_1_value) {
			return this.setValue('@name_1', name_1_value);
		  }
		,		setName2TextField(name_2_value) {
			return this.setValue('@name_2', name_2_value);
		  }
		,		setName3TextField(name_3_value) {
			return this.setValue('@name_3', name_3_value);
		  }
		,		setName4TextField(name_4_value) {
			return this.setValue('@name_4', name_4_value);
		  }
		,		setProcessingtimedays1TextField(processingtimedays_1_value) {
			return this.setValue('@processingtimedays_1', processingtimedays_1_value);
		  }
		,		setProcessingtimedays2TextField(processingtimedays_2_value) {
			return this.setValue('@processingtimedays_2', processingtimedays_2_value);
		  }
		,		setProcessingtimedays3TextField(processingtimedays_3_value) {
			return this.setValue('@processingtimedays_3', processingtimedays_3_value);
		  }
		,		setProcessingtimedays4TextField(processingtimedays_4_value) {
			return this.setValue('@processingtimedays_4', processingtimedays_4_value);
		  }
		,		setProcessingtimedays5TextField(processingtimedays_5_value) {
			return this.setValue('@processingtimedays_5', processingtimedays_5_value);
		  }
		,		setProcessingtimehours1TextField(processingtimehours_1_value) {
			return this.setValue('@processingtimehours_1', processingtimehours_1_value);
		  }
		,		setProcessingtimehours2TextField(processingtimehours_2_value) {
			return this.setValue('@processingtimehours_2', processingtimehours_2_value);
		  }
		,		setProcessingtimehours3TextField(processingtimehours_3_value) {
			return this.setValue('@processingtimehours_3', processingtimehours_3_value);
		  }
		,		setProcessingtimehours4TextField(processingtimehours_4_value) {
			return this.setValue('@processingtimehours_4', processingtimehours_4_value);
		  }
		,		setProcessingtimehours5TextField(processingtimehours_5_value) {
			return this.setValue('@processingtimehours_5', processingtimehours_5_value);
		  }
		,		setProcessingtimeminutes1TextField(processingtimeminutes_1_value) {
			return this.setValue('@processingtimeminutes_1', processingtimeminutes_1_value);
		  }
		,		setProcessingtimeminutes2TextField(processingtimeminutes_2_value) {
			return this.setValue('@processingtimeminutes_2', processingtimeminutes_2_value);
		  }
		,		setProcessingtimeminutes3TextField(processingtimeminutes_3_value) {
			return this.setValue('@processingtimeminutes_3', processingtimeminutes_3_value);
		  }
		,		setProcessingtimeminutes4TextField(processingtimeminutes_4_value) {
			return this.setValue('@processingtimeminutes_4', processingtimeminutes_4_value);
		  }
		,		setProcessingtimeminutes5TextField(processingtimeminutes_5_value) {
			return this.setValue('@processingtimeminutes_5', processingtimeminutes_5_value);
		  }
		,		setProcessingtimemonths1TextField(processingtimemonths_1_value) {
			return this.setValue('@processingtimemonths_1', processingtimemonths_1_value);
		  }
		,		setProcessingtimemonths2TextField(processingtimemonths_2_value) {
			return this.setValue('@processingtimemonths_2', processingtimemonths_2_value);
		  }
		,		setProcessingtimemonths3TextField(processingtimemonths_3_value) {
			return this.setValue('@processingtimemonths_3', processingtimemonths_3_value);
		  }
		,		setProcessingtimemonths4TextField(processingtimemonths_4_value) {
			return this.setValue('@processingtimemonths_4', processingtimemonths_4_value);
		  }
		,		setProcessingtimemonths5TextField(processingtimemonths_5_value) {
			return this.setValue('@processingtimemonths_5', processingtimemonths_5_value);
		  }
		,		setProcessingtimeyears1TextField(processingtimeyears_1_value) {
			return this.setValue('@processingtimeyears_1', processingtimeyears_1_value);
		  }
		,		setProcessingtimeyears2TextField(processingtimeyears_2_value) {
			return this.setValue('@processingtimeyears_2', processingtimeyears_2_value);
		  }
		,		setProcessingtimeyears3TextField(processingtimeyears_3_value) {
			return this.setValue('@processingtimeyears_3', processingtimeyears_3_value);
		  }
		,		setProcessingtimeyears4TextField(processingtimeyears_4_value) {
			return this.setValue('@processingtimeyears_4', processingtimeyears_4_value);
		  }
		,		setProcessingtimeyears5TextField(processingtimeyears_5_value) {
			return this.setValue('@processingtimeyears_5', processingtimeyears_5_value);
		  }
		,		setProducesdescription1TextField(producesdescription_1_value) {
			return this.setValue('@producesdescription_1', producesdescription_1_value);
		  }
		,		setProducesdescription2TextField(producesdescription_2_value) {
			return this.setValue('@producesdescription_2', producesdescription_2_value);
		  }
		,		setProducesdescription3TextField(producesdescription_3_value) {
			return this.setValue('@producesdescription_3', producesdescription_3_value);
		  }
		,		setProducesdescription4TextField(producesdescription_4_value) {
			return this.setValue('@producesdescription_4', producesdescription_4_value);
		  }
		,		setProducesidentifierTextField(producesidentifier_value) {
			return this.setValue('@producesidentifier', producesidentifier_value);
		  }
		,		setProducesname1TextField(producesname_1_value) {
			return this.setValue('@producesname_1', producesname_1_value);
		  }
		,		setProducesname2TextField(producesname_2_value) {
			return this.setValue('@producesname_2', producesname_2_value);
		  }
		,		setProducesname3TextField(producesname_3_value) {
			return this.setValue('@producesname_3', producesname_3_value);
		  }
		,		setProducesname4TextField(producesname_4_value) {
			return this.setValue('@producesname_4', producesname_4_value);
		  }
		,		setProducestype1TextField(producestype_1_value) {
			return this.setValue('@producestype_1', producestype_1_value);
		  }
		,		setProducestype2TextField(producestype_2_value) {
			return this.setValue('@producestype_2', producestype_2_value);
		  }
		,		setProducestype3TextField(producestype_3_value) {
			return this.setValue('@producestype_3', producestype_3_value);
		  }
		,		setRelatedTextField(related_value) {
			return this.setValue('@related', related_value);
		  }
		,		setRequiresTextField(requires_value) {
			return this.setValue('@requires', requires_value);
		  }
		,		setSector1TextField(sector_1_value) {
			return this.setValue('@sector_1', sector_1_value);
		  }
		,		setSector2TextField(sector_2_value) {
			return this.setValue('@sector_2', sector_2_value);
		  }
		,		setSector3TextField(sector_3_value) {
			return this.setValue('@sector_3', sector_3_value);
		  }
		,		setServiceproviderhasaddressTextField(serviceproviderhasaddress_value) {
			return this.setValue('@serviceproviderhasaddress', serviceproviderhasaddress_value);
		  }
		,		setServiceprovideridentifierTextField(serviceprovideridentifier_value) {
			return this.setValue('@serviceprovideridentifier', serviceprovideridentifier_value);
		  }
		,		setServiceprovidername1TextField(serviceprovidername_1_value) {
			return this.setValue('@serviceprovidername_1', serviceprovidername_1_value);
		  }
		,		setServiceprovidername2TextField(serviceprovidername_2_value) {
			return this.setValue('@serviceprovidername_2', serviceprovidername_2_value);
		  }
		,		setServiceprovidername3TextField(serviceprovidername_3_value) {
			return this.setValue('@serviceprovidername_3', serviceprovidername_3_value);
		  }
		,		setServiceprovidername4TextField(serviceprovidername_4_value) {
			return this.setValue('@serviceprovidername_4', serviceprovidername_4_value);
		  }
		,		setSpatial1TextField(spatial_1_value) {
			return this.setValue('@spatial_1', spatial_1_value);
		  }
		,		setSpatial2TextField(spatial_2_value) {
			return this.setValue('@spatial_2', spatial_2_value);
		  }
		,		setSpatial3TextField(spatial_3_value) {
			return this.setValue('@spatial_3', spatial_3_value);
		  }
		,		setStatus1TextField(status_1_value) {
			return this.setValue('@status_1', status_1_value);
		  }
		,		setStatus2TextField(status_2_value) {
			return this.setValue('@status_2', status_2_value);
		  }
		,		setStatus3TextField(status_3_value) {
			return this.setValue('@status_3', status_3_value);
		  }
		,		setType1TextField(type_1_value) {
			return this.setValue('@type_1', type_1_value);
		  }
		,		setType2TextField(type_2_value) {
			return this.setValue('@type_2', type_2_value);
		  }
		,		setType3TextField(type_3_value) {
			return this.setValue('@type_3', type_3_value);
		  }
		,		select(){
			return this.click('@tab');
		  }
		,   assert_ps_identifier(value){
			return this.assert.value('@identifier', value);
		}
	}]

}
