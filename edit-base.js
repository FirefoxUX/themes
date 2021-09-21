const fs = require('fs');

var json = require('./tokens/color/base.json');

JSON.parse(JSON.stringify(json));

const values = ["00-base-color","01-background-base","02-background-toolbar","03-text-toolbar","03-text-toolbar-secondary-text","03a-text-toolbar","03a-text-toolbar-toolbar-icon-hover","03a-text-toolbar-secondary-text","03b-text-toolbar","03-text-toolbar-toolbar-icon-hover","03b-text-toolbar-toolbar-icon-hover","03b-text-toolbar-secondary-text","04-background-content-light","05-border-low-contrast","06-border-high-contrast","08-highlight-rows","09-modal-backgrounds","09a-modal-backgrounds","09b-modal-backgrounds-tab-and-search","10-url-details","11-update-alert","12-critical-alert","13-warning-alert","14-information-alert","15-icon-status",
"15a-icon-status-on-dark-background","15a-icon-status-on-light-background","15b-icon-status-on-light-background","15b-icon-status-on-dark-background"];

for (let [key, value] of Object.entries(json)) {
  let val = ""
  for (var i = 0; i < values.length; i++) {
    val = values[i].toString()

    if (json[key][val]) {
      delete json[key][val]["description"]
      delete json[key][val]["type"]
      json[key][val]["value"] = hexAToHSLA(json[key][val]["value"])
    }   
  }
}

// function RGBAToHSLA(rgba) {
//   let sep = rgba.indexOf(",") > -1 ? "," : " ";
//   rgba = rgba.substr(5).split(")")[0].split(sep);

//   // Make r, g, and b fractions of 1
//   let r = rgba[0] / 255,
//   g = rgba[1] / 255,
//   b = rgba[2] / 255,
//   a = rgba[3]

//   // Find greatest and smallest channel values
//   let cmin = Math.min(r,g,b),
//   cmax = Math.max(r,g,b),
//   delta = cmax - cmin,
//   h = 0,
//   s = 0,
//   l = 0;

//   // Strip the slash if using space-separated syntax
//   if (rgba.indexOf("/") > -1) 
//     rgba.splice(3,1);

//   for (let R in rgba) {
//     let r = rgba[R];
//     if (r.indexOf("%") > -1) {
//       let p = r.substr(0,r.length - 1) / 100;

//       if (R < 3) { 
//         rgba[R] = Math.round(p * 255);
//       } else {
//         rgba[R] = p;
//       }
//     }
//   }

//   if (delta == 0) {
//     h = 0;
//   }
//   else if (cmax == r) {
//     h = ((g - b) / delta) % 6;
//   }
//   else if (cmax == g) {
//     h = (b - r) / delta + 2;
//   }
//   else {
//     h = (r - g) / delta + 4;
//   }
  
//   h = Math.round(h * 60)
    
//   // Make negative hues positive behind 360°
//   if (h < 0) {
//       h += 360;
//   }

//   // Calculate lightness
//   l = (cmax + cmin) / 2;
//   // Calculate saturation
//   s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

//   // Multiply l and s by 100
//   s = +(s * 100).toFixed(1);
//   l = +(l * 100).toFixed(1);
//   s = Math.round(s);

//   l = Math.round(l);

//   // Strip the slash if using space-separated syntax
//   if (rgba.indexOf("/") > -1) 
//     rgba.splice(3,1);

//   return "hsla(" + h + "," + s + "%," +l + "%," + a + ")";
// }   

function hexAToHSLA(H) {
  let r = 0, g = 0, b = 0, a = 1;

  if (H.length == 5) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
    a = "0x" + H[4] + H[4];
  } else if (H.length == 9) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
    a = "0x" + H[7] + H[8];
  }

  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r,g,b),
      cmax = Math.max(r,g,b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

  if (delta == 0)
    h = 0;
  else if (cmax == r)
    h = ((g - b) / delta) % 6;
  else if (cmax == g)
    h = (b - r) / delta + 2;
  else
    h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0)
    h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = + Math.round(s * 100);
  l = +  Math.round(l * 100);
  a = (a / 255);
                
  return "hsla("+ h + "," + s + "," + l + "," + a + ")";
}

fs.writeFile('./tokens/color/dump.json', JSON.stringify(json), (err) => {
  if (err) {
      throw err;
  }

  console.log("JSON data is saved.");
});