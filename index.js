const $RefParser = require("@apidevtools/json-schema-ref-parser");

const myJSON = "./myJSON.json";

const myXML = "./sampleXML.xsd";

$RefParser.dereference(myJSON, (err, schema) => {
  if (err) {
    console.error(err);
  } else {
    console.log(schema);
  }
});

$RefParser.dereference(myXML, (err, schema) => {
  if (err) {
    console.error(err);
  } else {
    console.log(schema);
  }
});
