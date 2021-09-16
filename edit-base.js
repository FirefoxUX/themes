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
  // console.log(`${key}: ${value}`);
  let val = ""
  for (var i = 0; i < values.length; i++) {
    // console.log(Object.keys(value)[0]);
    val = values[i].toString()
    // var test = values[i]
    // console.log(test);
    // console.log('"'+ val + '"')
    // console.log(values[i])
    
    if (json[key][val]) {
      delete json[key][val]["category"]
      delete json[key][val]["exportKey"]
      delete json[key][val]["type"]
    }
    
    
  }
  

  
  // console.log(json[key]["00-base-color"]["category"]);


    // console.log(json[key][val]["category"])
    // console.log(json[key][val]["exportKey"])
    // console.log(json[key][val]["exportKey"])
  
  // console.log(json[key]["00-base-color"]["category"])
  // console.log(json[key]["00-base-color"]["exportKey"])
  // console.log(json[key]["00-base-color"]["exportKey"])
  // console.log(json[key]["01-background-base"]["category"])
  // console.log(json[key]["02-background-toolbar"]["category"])
  // console.log(json[key]["03-text-toolbar"]["category"])
  // console.log(json[key]["03-text-toolbar-secondary-text"]["category"])
  // console.log(json[key]["03-text-toolbar-toolbar-icon-hover"]["category"])
  // console.log(json[key]["04-background-content-light"]["category"])
  // console.log(json[key]["05-border-low-contrast"]["category"])
  // console.log(json[key]["08-highlight-rows"]["category"])
  // console.log(json[key]["09-modal-backgrounds"]["category"])
  // console.log(json[key]["10-url-details"]["category"])
  // console.log(json[key]["11-update-alert"]["category"])
  // console.log(json[key]["12-critical-alert"]["category"])
  // console.log(json[key]["13-warning-alert"]["category"])
  // console.log(json[key]["14-information-alert"]["category"])
  // console.log(json[key]["15-icon-status"]["category"])
}

fs.writeFile('./tokens/color/dump.json', JSON.stringify(json), (err) => {
  if (err) {
      throw err;
  }


  console.log("JSON data is saved.");
});