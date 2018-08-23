module.exports = {
	url: function() { 
		return "http://52.50.205.146:8890/rdforms/PSDescriptionCreator.html"; 
	},
	elements: {
		tab: {
			selector: '#dijit_layout_TabContainer_0_tablist_dijit_layout_ContentPane_1'
		},
		ps_identifier: {
			selector: '(//div[text()="Identifier"])[1]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		ps_name: {
			selector: '(//div[text()="Name"])[1]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		ps_name_lang: {
			selector: '(//div[text()="Name"])[1]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		ps_description: {
			selector: '(//div[text()="Description"])[1]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		ps_description_lang: {
			selector: '(//div[text()="Description"])[1]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		ps_keyword: {
			selector: '(//div[text()="Keyword"])[1]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		ps_keyword_lang: {
			selector: '(//div[text()="Keyword"])[1]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		ps_sector: {
			selector: '(//div[text()="Sector"])[1]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ps_type: {
			selector: '(//div[text()="Type"])[1]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ps_language: {
			selector: '(//div[text()="Language"])[1]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ps_status: {
			selector: '(//div[text()="Status"])[1]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ps_spatial: {
			selector: '(//div[text()="Spatial"])[1]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ps_pt: {
			selector: '(//div[text()="ProcessingTime"])[1]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		ps_requires: {
			selector: '(//div[text()="Requires"])[1]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ps_related: {
			selector: '(//div[text()="Related"])[1]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ca_identifier: {
			selector: '(//div[text()="HasCompetentAuthority"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		ca_name: {
			selector: '(//div[text()="HasCompetentAuthority"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		ca_name_lang: {
			selector: '(//div[text()="HasCompetentAuthority"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		ca_preferredlabel: {
			selector: '(//div[text()="HasCompetentAuthority"])[1]/../div[2]/div[1]/div[1]/div[text()="PreferredLabel"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		ca_preferredlabel_lang: {
			selector: '(//div[text()="HasCompetentAuthority"])[1]/../div[2]/div[1]/div[1]/div[text()="PreferredLabel"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		ca_spatial: {
			selector: '(//div[text()="HasCompetentAuthority"])[1]/../div[2]/div[1]/div[1]/div[text()="Spatial"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ca_hasaddress: {
			selector: '(//div[text()="HasCompetentAuthority"])[1]/../div[2]/div[1]/div[1]/div[text()="HasAddress"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		be_identifier: {
			selector: '(//div[text()="IsGroupedBy: BusinessEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		be_name: {
			selector: '(//div[text()="IsGroupedBy: BusinessEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		be_name_lang: {
			selector: '(//div[text()="IsGroupedBy: BusinessEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		be_description: {
			selector: '(//div[text()="IsGroupedBy: BusinessEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		be_description_lang: {
			selector: '(//div[text()="IsGroupedBy: BusinessEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		be_related: {
			selector: '(//div[text()="IsGroupedBy: BusinessEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="RelatedService"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		be_type: {
			selector: '(//div[text()="IsGroupedBy: BusinessEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Type"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		le_identifier: {
			selector: '(//div[text()="IsGroupedBy: LifeEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		le_name: {
			selector: '(//div[text()="IsGroupedBy: LifeEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		le_name_lang: {
			selector: '(//div[text()="IsGroupedBy: LifeEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		le_description: {
			selector: '(//div[text()="IsGroupedBy: LifeEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		le_description_lang: {
			selector: '(//div[text()="IsGroupedBy: LifeEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		le_related: {
			selector: '(//div[text()="IsGroupedBy: LifeEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="RelatedService"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		le_type: {
			selector: '(//div[text()="IsGroupedBy: LifeEvent"])[1]/../div[2]/div[1]/div[1]/div[text()="Type"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		cr_identifier: {
			selector: '(//div[text()="HasCriterion"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		cr_name: {
			selector: '(//div[text()="HasCriterion"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		cr_name_lang: {
			selector: '(//div[text()="HasCriterion"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		cr_type: {
			selector: '(//div[text()="HasCriterion"])[1]/../div[2]/div[1]/div[1]/div[text()="Type"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		cr_type_lang: {
			selector: '(//div[text()="HasCriterion"])[1]/../div[2]/div[1]/div[1]/div[text()="Type"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		pr_identifier: {
			selector: '(//div[text()="ServiceProvider"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		pr_name: {
			selector: '(//div[text()="ServiceProvider"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		pr_name_lang: {
			selector: '(//div[text()="ServiceProvider"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		pr_hasaddress: {
			selector: '(//div[text()="ServiceProvider"])[1]/../div[2]/div[1]/div[1]/div[text()="HasAddress"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		pa_identifier: {
			selector: '(//div[text()="HasParticipation"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		pa_description: {
			selector: '(//div[text()="HasParticipation"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		pa_description_lang: {
			selector: '(//div[text()="HasParticipation"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		pa_role: {
			selector: '(//div[text()="HasParticipation"])[1]/../div[2]/div[1]/div[1]/div[text()="Role"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		pa_role_lang: {
			selector: '(//div[text()="HasParticipation"])[1]/../div[2]/div[1]/div[1]/div[text()="Role"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		ip_identifier: {
			selector: '(//div[text()="HasInput"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		ip_name: {
			selector: '(//div[text()="HasInput"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		ip_name_lang: {
			selector: '(//div[text()="HasInput"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		ip_description: {
			selector: '(//div[text()="HasInput"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		ip_description_lang: {
			selector: '(//div[text()="HasInput"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		ip_type: {
			selector: '(//div[text()="HasInput"])[1]/../div[2]/div[1]/div[1]/div[text()="Type"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		ip_type_lang: {
			selector: '(//div[text()="HasInput"])[1]/../div[2]/div[1]/div[1]/div[text()="Type"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		ip_language: {
			selector: '(//div[text()="HasInput"])[1]/../div[2]/div[1]/div[1]/div[text()="Language"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ip_related: {
			selector: '(//div[text()="HasInput"])[1]/../div[2]/div[1]/div[1]/div[text()="RelatedDocumentation"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ff_identifier: {
			selector: '(//div[text()="HasFormalFramework"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		ff_name: {
			selector: '(//div[text()="HasFormalFramework"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		ff_name_lang: {
			selector: '(//div[text()="HasFormalFramework"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		ff_description: {
			selector: '(//div[text()="HasFormalFramework"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		ff_description_lang: {
			selector: '(//div[text()="HasFormalFramework"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		ff_type: {
			selector: '(//div[text()="HasFormalFramework"])[1]/../div[2]/div[1]/div[1]/div[text()="Type"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ff_language: {
			selector: '(//div[text()="HasFormalFramework"])[1]/../div[2]/div[1]/div[1]/div[text()="Language"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ff_status: {
			selector: '(//div[text()="HasFormalFramework"])[1]/../div[2]/div[1]/div[1]/div[text()="Status"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ff_subject: {
			selector: '(//div[text()="HasFormalFramework"])[1]/../div[2]/div[1]/div[1]/div[text()="Subject"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ff_application: {
			selector: '(//div[text()="HasFormalFramework"])[1]/../div[2]/div[1]/div[1]/div[text()="TerritorialApplication"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		prod_identifier: {
			selector: '(//div[text()="Produces"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		prod_name: {
			selector: '(//div[text()="Produces"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		prod_name_lang: {
			selector: '(//div[text()="Produces"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		prod_description: {
			selector: '(//div[text()="Produces"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		prod_description_lang: {
			selector: '(//div[text()="Produces"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		prod_type: {
			selector: '(//div[text()="Produces"])[1]/../div[2]/div[1]/div[1]/div[text()="Type"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		fo_identifier: {
			selector: '(//div[text()="Follows"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		fo_name: {
			selector: '(//div[text()="Follows"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		fo_name_lang: {
			selector: '(//div[text()="Follows"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		fo_description: {
			selector: '(//div[text()="Follows"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		fo_description_lang: {
			selector: '(//div[text()="Follows"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		fo_type: {
			selector: '(//div[text()="Follows"])[1]/../div[2]/div[1]/div[1]/div[text()="Type"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		fo_type_lang: {
			selector: '(//div[text()="Follows"])[1]/../div[2]/div[1]/div[1]/div[text()="Type"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		fo_language: {
			selector: '(//div[text()="Follows"])[1]/../div[2]/div[1]/div[1]/div[text()="Language"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		hcp_identifier: {
			selector: '(//div[text()="HasContactPoint"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		hcp_hasemail: {
			selector: '(//div[text()="HasContactPoint"])[1]/../div[2]/div[1]/div[1]/div[text()="HasEmail"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		hcp_hastelephone: {
			selector: '(//div[text()="HasContactPoint"])[1]/../div[2]/div[1]/div[1]/div[text()="HasTelephone"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		hcp_openinghours: {
			selector: '(//div[text()="HasContactPoint"])[1]/../div[2]/div[1]/div[1]/div[text()="OpeningHours"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		hch_identifier: {
			selector: '(//div[text()="HasChannel"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		hch_type: {
			selector: '(//div[text()="HasChannel"])[1]/../div[2]/div[1]/div[1]/div[text()="Type"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		hch_openinghours: {
			selector: '(//div[text()="HasChannel"])[1]/../div[2]/div[1]/div[1]/div[text()="OpeningHours"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		hc_identifier: {
			selector: '(//div[text()="HasCost"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		hc_description: {
			selector: '(//div[text()="HasCost"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		hc_description_lang: {
			selector: '(//div[text()="HasCost"])[1]/../div[2]/div[1]/div[1]/div[text()="Description"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		hc_value: {
			selector: '(//div[text()="HasCost"])[1]/../div[2]/div[1]/div[1]/div[text()="Value"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		hc_currency: {
			selector: '(//div[text()="HasCost"])[1]/../div[2]/div[1]/div[1]/div[text()="Currency"]/../div[2]/div[1]/a',
			locateStrategy: 'xpath'
		},
		ida_identifier: {
			selector: '(//div[text()="IsDescribedAt"])[1]/../div[2]/div[1]/div[1]/div[text()="Identifier"]/../div[2]/div[1]/div[1]',
			locateStrategy: 'xpath'
		},
		ida_name: {
			selector: '(//div[text()="IsDescribedAt"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		ida_name_lang: {
			selector: '(//div[text()="IsDescribedAt"])[1]/../div[2]/div[1]/div[1]/div[text()="Name"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		},
		ida_landingpage: {
			selector: '(//div[text()="IsDescribedAt"])[1]/../div[2]/div[1]/div[1]/div[text()="LandingPage"]/../div[2]/div[1]/div[not(contains(@class, "rformsLanguage"))]',
			locateStrategy: 'xpath'
		},
		ida_landingpage_lang: {
			selector: '(//div[text()="IsDescribedAt"])[1]/../div[2]/div[1]/div[1]/div[text()="LandingPage"]/../div[2]/div[1]/div[contains(@class, "rformsLanguage")]',
			locateStrategy: 'xpath'
		}
	},

	commands: [{
		select() {
			return this.click('@tab');
		},
		assert_ps_identifier(value){
			return this.assert.containsText('@ps_identifier', value);
		},
		assert_ps_name(value){
			return this.assert.containsText('@ps_name', value);
		},
		assert_ps_name_lang(value){
			return this.assert.containsText('@ps_name_lang', value);
		},
		assert_ps_description(value){
			return this.assert.containsText('@ps_description', value);
		},
		assert_ps_description_lang(value){
			return this.assert.containsText('@ps_description_lang', value);
		},
		assert_ps_keyword(value){
			return this.assert.containsText('@ps_keyword', value);
		},
		assert_ps_keyword_lang(value){
			return this.assert.containsText('@ps_keyword_lang', value);
		},
		assert_ps_sector(value){
			return this.assert.containsText('@ps_sector', value);
		},
		assert_ps_type(value){
			return this.assert.containsText('@ps_type', value);
		},
		assert_ps_language(value){
			return this.assert.containsText('@ps_language', value);
		},
		assert_ps_status(value){
			return this.assert.containsText('@ps_status', value);
		},
		assert_ps_spatial(value){
			return this.assert.containsText('@ps_spatial', value);
		},
		assert_ps_pt(value){
			return this.assert.containsText('@ps_pt', value);
		},
		assert_ps_requires(value){
			return this.assert.containsText('@ps_requires', value);
		},
		assert_ps_related(value){
			return this.assert.containsText('@ps_related', value);
		},
		assert_ca_identifier(value){
			return this.assert.containsText('@ca_identifier', value);
		},
		assert_ca_name(value){
			return this.assert.containsText('@ca_name', value);
		},
		assert_ca_name_lang(value){
			return this.assert.containsText('@ca_name_lang', value);
		},
		assert_ca_preferredlabel(value){
			return this.assert.containsText('@ca_preferredlabel', value);
		},
		assert_ca_preferredlabel_lang(value){
			return this.assert.containsText('@ca_preferredlabel_lang', value);
		},
		assert_ca_spatial(value){
			return this.assert.containsText('@ca_spatial', value);
		},
		assert_ca_hasaddress(value){
			return this.assert.containsText('@ca_hasaddress', value);
		},
		assert_be_identifier(value){
			return this.assert.containsText('@be_identifier', value);
		},
		assert_be_name(value){
			return this.assert.containsText('@be_name', value);
		},
		assert_be_name_lang(value){
			return this.assert.containsText('@be_name_lang', value);
		},
		assert_be_description(value){
			return this.assert.containsText('@be_description', value);
		},
		assert_be_description_lang(value){
			return this.assert.containsText('@be_description_lang', value);
		},
		assert_be_related(value){
			return this.assert.containsText('@be_related', value);
		},
		assert_be_type(value){
			return this.assert.containsText('@be_type', value);
		},
		assert_le_identifier(value){
			return this.assert.containsText('@le_identifier', value);
		},
		assert_le_name(value){
			return this.assert.containsText('@le_name', value);
		},
		assert_le_name_lang(value){
			return this.assert.containsText('@le_name_lang', value);
		},
		assert_le_description(value){
			return this.assert.containsText('@le_description', value);
		},
		assert_le_description_lang(value){
			return this.assert.containsText('@le_description_lang', value);
		},
		assert_le_related(value){
			return this.assert.containsText('@le_related', value);
		},
		assert_le_type(value){
			return this.assert.containsText('@le_type', value);
		},
		assert_cr_identifier(value){
			return this.assert.containsText('@cr_identifier', value);
		},
		assert_cr_name(value){
			return this.assert.containsText('@cr_name', value);
		},
		assert_cr_name_lang(value){
			return this.assert.containsText('@cr_name_lang', value);
		},
		assert_cr_type(value){
			return this.assert.containsText('@cr_type', value);
		},
		assert_cr_type_lang(value){
			return this.assert.containsText('@cr_type_lang', value);
		},
		assert_pr_identifier(value){
			return this.assert.containsText('@pr_identifier', value);
		},
		assert_pr_name(value){
			return this.assert.containsText('@pr_name', value);
		},
		assert_pr_name_lang(value){
			return this.assert.containsText('@pr_name_lang', value);
		},
		assert_pr_hasaddress(value){
			return this.assert.containsText('@pr_hasaddress', value);
		},
		assert_pa_identifier(value){
			return this.assert.containsText('@pa_identifier', value);
		},
		assert_pa_description(value){
			return this.assert.containsText('@pa_description', value);
		},
		assert_pa_description_lang(value){
			return this.assert.containsText('@pa_description_lang', value);
		},
		assert_pa_role(value){
			return this.assert.containsText('@pa_role', value);
		},
		assert_pa_role_lang(value){
			return this.assert.containsText('@pa_role_lang', value);
		},
		assert_ip_identifier(value){
			return this.assert.containsText('@ip_identifier', value);
		},
		assert_ip_name(value){
			return this.assert.containsText('@ip_name', value);
		},
		assert_ip_name_lang(value){
			return this.assert.containsText('@ip_name_lang', value);
		},
		assert_ip_description(value){
			return this.assert.containsText('@ip_description', value);
		},
		assert_ip_description_lang(value){
			return this.assert.containsText('@ip_description_lang', value);
		},
		assert_ip_type(value){
			return this.assert.containsText('@ip_type', value);
		},
		assert_ip_type_lang(value){
			return this.assert.containsText('@ip_type_lang', value);
		},
		assert_ip_language(value){
			return this.assert.containsText('@ip_language', value);
		},
		assert_ip_related(value){
			return this.assert.containsText('@ip_related', value);
		},
		assert_ff_identifier(value){
			return this.assert.containsText('@ff_identifier', value);
		},
		assert_ff_name(value){
			return this.assert.containsText('@ff_name', value);
		},
		assert_ff_name_lang(value){
			return this.assert.containsText('@ff_name_lang', value);
		},
		assert_ff_description(value){
			return this.assert.containsText('@ff_description', value);
		},
		assert_ff_description_lang(value){
			return this.assert.containsText('@ff_description_lang', value);
		},
		assert_ff_type(value){
			return this.assert.containsText('@ff_type', value);
		},
		assert_ff_language(value){
			return this.assert.containsText('@ff_language', value);
		},
		assert_ff_status(value){
			return this.assert.containsText('@ff_status', value);
		},
		assert_ff_subject(value){
			return this.assert.containsText('@ff_subject', value);
		},
		assert_ff_application(value){
			return this.assert.containsText('@ff_application', value);
		},
		assert_prod_identifier(value){
			return this.assert.containsText('@prod_identifier', value);
		},
		assert_prod_name(value){
			return this.assert.containsText('@prod_name', value);
		},
		assert_prod_name_lang(value){
			return this.assert.containsText('@prod_name_lang', value);
		},
		assert_prod_description(value){
			return this.assert.containsText('@prod_description', value);
		},
		assert_prod_description_lang(value){
			return this.assert.containsText('@prod_description_lang', value);
		},
		assert_prod_type(value){
			return this.assert.containsText('@prod_type', value);
		},
		assert_fo_identifier(value){
			return this.assert.containsText('@fo_identifier', value);
		},
		assert_fo_name(value){
			return this.assert.containsText('@fo_name', value);
		},
		assert_fo_name_lang(value){
			return this.assert.containsText('@fo_name_lang', value);
		},
		assert_fo_description(value){
			return this.assert.containsText('@fo_description', value);
		},
		assert_fo_description_lang(value){
			return this.assert.containsText('@fo_description_lang', value);
		},
		assert_fo_type(value){
			return this.assert.containsText('@fo_type', value);
		},
		assert_fo_type_lang(value){
			return this.assert.containsText('@fo_type_lang', value);
		},
		assert_fo_language(value){
			return this.assert.containsText('@fo_language', value);
		},
		assert_hcp_identifier(value){
			return this.assert.containsText('@hcp_identifier', value);
		},
		assert_hcp_hasemail(value){
			return this.assert.containsText('@hcp_hasemail', value);
		},
		assert_hcp_hastelephone(value){
			return this.assert.containsText('@hcp_hastelephone', value);
		},
		assert_hcp_openinghours(value){
			return this.assert.containsText('@hcp_openinghours', value);
		},
		assert_hch_identifier(value){
			return this.assert.containsText('@hch_identifier', value);
		},
		assert_hch_type(value){
			return this.assert.containsText('@hch_type', value);
		},
		assert_hch_openinghours(value){
			return this.assert.containsText('@hch_openinghours', value);
		},
		assert_hc_identifier(value){
			return this.assert.containsText('@hc_identifier', value);
		},
		assert_hc_description(value){
			return this.assert.containsText('@hc_description', value);
		},
		assert_hc_description_lang(value){
			return this.assert.containsText('@hc_description_lang', value);
		},
		assert_hc_value(value){
			return this.assert.containsText('@hc_value', value);
		},
		assert_hc_currency(value){
			return this.assert.containsText('@hc_currency', value);
		},
		assert_ida_identifier(value){
			return this.assert.containsText('@ida_identifier', value);
		},
		assert_ida_name(value){
			return this.assert.containsText('@ida_name', value);
		},
		assert_ida_name_lang(value){
			return this.assert.containsText('@ida_name_lang', value);
		},
		assert_ida_landingpage(value){
			return this.assert.containsText('@ida_landingpage', value);
		},
		assert_ida_landingpage_lang(value){
			return this.assert.containsText('@ida_landingpage_lang', value);
		}
	}]
};