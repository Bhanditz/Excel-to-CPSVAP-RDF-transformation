'use strict';
const excelToJson = require('convert-excel-to-json');
const glob = require("glob");

const glob_jsonlocation = "source-data/dataPortugal/*.xlsx";
const glob_options = {};

glob(glob_jsonlocation, glob_options, function (er, filelist) {
  if (er) {
    console.log(er);
  }

  var resultsArray = [];

  for (var i = 0; i < filelist.length; i++) {

      const result = excelToJson({
          sourceFile: filelist[i],
          header:{
              // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
              rows: 1
          },
          sheets: [{
            name: 'Serviços Públicos',
            range: 'A1:L2',
            columnToKey: {
              A: 'PublicService_id',
              H: 'PublicService_name',
              I: 'PublicService_description',
              L: 'PublicService_keywords'
            }
          },
          {
            name: 'Âmbito Territorial',
            range: 'A1:B2',
            columnToKey: {
              B: 'PublicService_spatial'
            }
          },
          {
            name: 'Eventos de Vida',
            columnToKey: {
              B: 'LifeEvent_id'
            }
          },
          {
            name: 'Eventos de Negócio',
            columnToKey: {
              B: 'BusinessEvent_id'
            }
          },
          {
            name: 'Entidades',
            range: 'A1:C2',
            columnToKey: {
              B: 'PublicOrganization_id'
            }
          },
          {
            name: 'Requisitos',
            columnToKey: {
              B: 'hasInput_id',
              C: 'hasInput_name',
              D: 'hasInput_description'
            }
          },
          {
            name: 'Legislação',
            columnToKey: {
              B: 'hasFormalFramework_id',
              C: 'hasFormalFramework_name',
              D: 'hasFormalFramework_description'
            }
          },
          {
            name: 'Regras',
            columnToKey: {
              B: 'follows_id',
              C: 'follows_name',
              D: 'follows_description'
            }
          },
          {
            name: 'Taxas e Custos',
            columnToKey: {
              B: 'hasCost_id',
              D: 'hasCost_description',
              E: 'hasCost_value'
            }
          },
          {
            name: 'Serviços Relacionados',
            columnToKey: {
              B: 'related_id'
            }
          }]
      });

    resultsArray.push(result);

    }

      const fs = require('fs');
      var content = JSON.stringify(resultsArray);
      content = replaceAll(content, "Serviços Públicos", "PublicService");
      content = replaceAll(content, "Âmbito Territorial", "Spatial");
      content = replaceAll(content, "Eventos de Vida", "LifeEvent");
      content = replaceAll(content, "Eventos de Negócio", "BusinessEvent");
      content = replaceAll(content, "Entidades", "CompetentAuthority");
      content = replaceAll(content, "Requisitos", "hasInput");
      content = replaceAll(content, "Legislação", "hasFormalFramework");
      content = replaceAll(content, "Regras", "follows");
      content = replaceAll(content, "Taxas e Custos", "hasCost");
      content = replaceAll(content, "Serviços Relacionados", "related");
      content = content.replace(/\\n/g, "\\n")
                                            .replace(/\\'/g, "\\'")
                                            .replace(/\\"/g, '\\"')
                                            .replace(/\\&/g, "\\&")
                                            .replace(/\\r/g, "\\r")
                                            .replace(/\\t/g, "\\t")
                                            .replace(/\\b/g, "\\b")
                                            .replace(/\\f/g, "\\f")
                                            .replace(/<(?:.|\n)*?>/gm, ' ')
											.replace(/\&nbsp;/g, ' ');

      fs.writeFile("./tmp/dataPortugal.json", content, 'utf8', function (err) {
          if (err) {
              return console.log(err);
          }

          console.log("The file was saved!");
      });


});


function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}


