"use strict";

axios.post("https://api.thegraph.com/subgraphs/name/decentraland/marketplace", {
  query: "\n                    {\n            estates(first:200){\n                owner{\n                id\n                },\n                size,\n                data{\n                id,\n                name,\n                ipns,\n                description\n                }\n                nft{\n                id,\n                tokenId,\n                contractAddress,\n                name,\n                image\n                }\n            }\n            }     \n          "
}).then(function (res) {
  console.log(res.data.data.estates.length);
  res.data.data.estates.map(function (gg) {
    try {
      var content = "\n          <div id=\"estate-con\">\n            <div id=\"estate-card\">\n                <div id=\"estate-content\">\n                <img src=\"".concat(gg.nft.image, "\" alt=\"estate-image\" id=\"estate-img\">\n                    <p id=\"estate-p\">").concat(gg.nft.name, "</p>\n                    <p id=\"estate-p\">owner:").concat(gg.owner.id, "</p>\n                    <p id=\"estate-p\">contract address:").concat(gg.nft.contractAddress, "</p>\n                    \n                    <button id=\"estate-btn\">\n                        <a href=\"https://market.decentraland.org/contracts/").concat(gg.nft.contractAddress, "/tokens/").concat(gg.nft.tokenId, "\" id=\"estate-a\">more info</a>\n                    </button>\n                </div>\n            </div>\n          </div>\n            ");
      document.getElementById("main").innerHTML += content;
    } catch (e) {
      console.log(e);
    }
  });
});