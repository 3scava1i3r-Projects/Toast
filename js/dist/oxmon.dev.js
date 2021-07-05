"use strict";

axios.post("https://api.thegraph.com/subgraphs/name/ninjashiroi/oxmons", {
  query: "\n    {\n  monsters(orderBy: number, first: 100) {\n    id\n    number\n    owner\n    bits\n    tokenUri\n    gen\n    minterContract\n    rarity\n    \n    \n  }\n}           \n          "
}).then(function (res) {
  res.data.data.monsters.map(function (gg) {
    var rarity = gg.rarity;
    var owner = gg.owner;
    var number = gg.number;

    if ((gg.tokenUri !== null || undefined) && gg.tokenUri.length !== 0) {
      axios.get(gg.tokenUri).then(function (res) {
        try {
          var content = "\n          <div id=\"estate-con\">\n            <div id=\"estate-card\">\n                <div id=\"estate-content\">\n                <img src=\"".concat(res.data.image, "\" alt=\"estate-image\" id=\"estate-img\">\n                    <p id=\"estate-p\">").concat(res.data.name, "</p>\n                    <p id=\"estate-p\">owner:").concat(owner, "</p>\n                    <p id=\"estate-p\">Rarity:").concat(rarity, "</p>\n                    \n                    <button id=\"estate-btn\">\n                        <a href=\"https://opensea.io/assets/0x0427743df720801825a5c82e0582b1e915e0f750/").concat(number, "\" id=\"estate-a\">more info</a>\n                    </button>\n                </div>\n            </div>\n          </div>\n            ");
          document.getElementById("main").innerHTML += content;
          rarity = null;
          number = null;
          owner = null;
        } catch (e) {
          console.log(e);
        }
      });
    }
  });
});