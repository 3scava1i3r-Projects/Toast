"use strict";

/* const getlast10txn = async () => {
  const options = { method: "GET" };
  fetch(
    `https://api.covalenthq.com/v1/31/address/${selectedACC}/transactions_v2/?no-logs=true&key=ckey_62dc169a991f4d7ebe7dd52afef:`,
    options
  )
    .then((response) => response.json())
    .then((char) => {
      if (char.data.chain_id == 31) {
        char.data.items.map((res, i) => {
          if (i + 1 <= 10) {
            try {
              content = `
          <div id="txncon">
            <div id="txncard">
                <div id="txncontent">
                    <p id="txnp">from address:${res.from_address}</p>
                    <p id="txnp">txn hash:${res.tx_hash}</p>
                    <a href="https://explorer.testnet.rsk.co/tx/${res.tx_hash}" id="txna">more info</a>
                </div>
            </div>
          </div>
            `;
              document.getElementById("last10txn").innerHTML += content;
            } catch (error) {
              console.log(error);
            }
          }
        });
      }
    });
};
 */
axios.post("https://api.thegraph.com/subgraphs/name/decentraland/marketplace", {
  query: "\n                    {\n            estates(first:100){\n                owner{\n                id\n                },\n                size,\n                data{\n                id,\n                name,\n                ipns,\n                description\n                }\n                nft{\n                id,\n                tokenId,\n                contractAddress,\n                name,\n                image\n                }\n            }\n            }     \n          "
}).then(function (res) {
  res.data.data.estates.map(function (gg) {
    try {
      console.log(gg);
      var content = "\n          <div id=\"estate-con\">\n            <div id=\"estate-card\">\n                <div id=\"estate-content\">\n                <img src=\"".concat(gg.nft.image, "\" alt=\"estate-image\" id=\"estate-img\">\n                    <p id=\"estate-p\">").concat(gg.nft.name, "</p>\n                    <p id=\"estate-p\">owner:").concat(gg.owner.id, "</p>\n                    <p id=\"estate-p\">contract address:").concat(gg.size, "</p>\n                    \n                    <button id=\"estate-btn\">\n                        <a href=\"https://market.decentraland.org/contracts/").concat(gg.nft.contractAddress, "/tokens/").concat(gg.nft.tokenId, "\" id=\"estate-a\">more info</a>\n                    </button>\n                </div>\n            </div>\n          </div>\n            ");
      document.getElementById("main").innerHTML += content;
    } catch (e) {
      console.log(e);
    }
  });
});