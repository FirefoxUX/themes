const fs = require('fs');

var json = require('./tokens/color/base.json');

JSON.parse(JSON.stringify(json));


// delete json["lush-light"]["01-background-base"]["type"]
// delete json["lush-medium"]["01-background-base"]["type"]
// delete json["lush-dark"]["01-background-base"]["type"]
// delete json["lush-light"]["01-background-base"]["exportKey"]
// delete json["lush-medium"]["01-background-base"]["exportKey"]
// delete json["lush-dark"]["01-background-base"]["exportKey"]
// delete json["lush-light"]["01-background-base"]["category"]
// delete json["lush-medium"]["01-background-base"]["category"]
// delete json["lush-dark"]["01-background-base"]["category"]

// for (var "key" in json) {
//   console.log(json[key])

//   // if (json.hasOwnProperty(key)) {
//   //     // delete json[key]["category"]
//   //     console.log(json[key])
//   // }

  
// }

// for (let [key, value] of Object.entries(json)) {
//   delete json[key][value]["category"]
// }


const values = ["00-base-color","01-background-base","02-background-toolbar","03-text-toolbar","03-text-toolbar-secondary-text","03-text-toolbar-toolbar-icon-hover","04-background-content-light","05-border-low-contrast","08-highlight-rows","09-modal-backgrounds","09a-modal-backgrounds","09b-modal-backgrounds-tab-and-search","10-url-details","11-update-alert","12-critical-alert","13-warning-alert","14-information-alert","15-icon-status",
"15a-icon-status-on-dark-background","15b-icon-status-on-light-background"];

// for ( var i = 0; i < values.length; i++) {
//   console.log(values[i])
// }



for (let [key, value] of Object.entries(json)) {
  let val = ""
  for (var i = 0; i < values.length; i++) {
    val = values[i].toString()

    if (json[key][val]) {
      delete json[key][val]["category"]
      delete json[key][val]["exportKey"]
      delete json[key][val]["type"]
    }   
  }
}
  
fs.writeFile('./tokens/color/dump.json', JSON.stringify(json), (err) => {
  if (err) {
      throw err;
  }


  console.log("JSON data is saved.");
});