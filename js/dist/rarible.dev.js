"use strict";

axios.post("https://api.thegraph.com/subgraphs/name/nikolaymalmal/rarible", {
  query: "\n    {\n  \n  rarities(first: 100) {\n    id\n    Link\n    Owner {\n      id\n    }\n  }\n}\n          "
}).then(function (res) {
  res.data.data.rarities.map(function (_char) {
    var owner = _char.Owner.id;
    var id = _char.id;
    console.log(_char.Link);
    axios.get("https://ipfs.io/".concat(_char.Link)).then(function (t) {
      try {
        var image = t.data.image.slice(6);
        console.log(t);
        var content = "\n          <div id=\"estate-con\">\n            <div id=\"estate-card\">\n                <div id=\"estate-content\">\n                <img src=\"https://ipfs.io".concat(image, "\" alt=\"estate-image\" id=\"estate-img\">\n                    <p id=\"estate-p\">").concat(t.data.name, "</p>\n                    <p id=\"estate-p\">owner:").concat(owner, "</p>\n                    <p id=\"estate-p\">tokenId:").concat(id, "</p>\n                    \n                    <button id=\"estate-btn\">\n                        <a href=\"").concat(t.data.external_url, "\" id=\"estate-a\">more info</a>\n                    </button>\n                </div>\n            </div>\n          </div>\n            ");
        document.getElementById("main").innerHTML += content;
        owner = null;
      } catch (e) {
        console.log(e);
      }
    });
  });
});