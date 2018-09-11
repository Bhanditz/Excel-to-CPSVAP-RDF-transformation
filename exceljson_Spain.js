'use strict';
const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: 'source-data/dataSpain.xlsx',
    header:{
        // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
        rows: 2
    },
    sheets: ['ES_PS-es'],
    columnToKey: {
        B: 'PublicService_id',
        C: 'PublicService_name',
        D: 'PublicService_description',
        E: 'PublicService_keywords',
        F: 'PublicService_language',
        G: 'PublicService_type',
        H: 'PublicOrganization_prefLabel',
        I: 'PublicOrganization_spatialCode',
        J: 'Channel_id',
        K: 'Channel_type',
        L: 'Event_id',
        M: 'Event_name',
        N: 'Event_class',
        O: 'Event_type'
    }
});

const fs = require('fs');
var content = JSON.stringify(result);
content = content.replace("ES_PS-es", "Spanish");
content = content.replace(/\\n/g, "\\n")
                                      .replace(/\\'/g, "\\'")
                                      .replace(/\\"/g, '\\"')
                                      .replace(/\\&/g, "\\&")
                                      .replace(/\\r/g, "\\r")
                                      .replace(/\\t/g, "\\t")
                                      .replace(/\\b/g, "\\b")
                                      .replace(/\\f/g, "\\f");

fs.writeFile("./tmp/dataSpain.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});