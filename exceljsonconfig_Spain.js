'use strict';
const excelToJson = require('convert-excel-to-json');
 
const result = excelToJson({
    sourceFile: 'source-data/dataSpain.xlsx',
    header:{
        // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
        rows: 2
    },
    sheets: ['ES_PS-en'],
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
const content = JSON.stringify(result);

fs.writeFile("./tmp/test.json", content, 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});