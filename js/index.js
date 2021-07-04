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

axios
  .post("https://api.thegraph.com/subgraphs/name/decentraland/marketplace", {
    query: `
                    {
            estates(first:100){
                owner{
                id
                },
                size,
                data{
                id,
                name,
                ipns,
                description
                }
                nft{
                id,
                tokenId,
                contractAddress,
                name,
                image
                }
            }
            }     
          `,
  })
  .then((res) => {
    res.data.data.estates.map((gg) => {
        try {
            console.log(gg)
            let content = `
          <div id="estate-con">
            <div id="estate-card">
                <div id="estate-content">
                <img src="${gg.nft.image}" alt="estate-image" id="estate-img">
                    <p id="estate-p">${gg.nft.name}</p>
                    <p id="estate-p">owner:${gg.owner.id}</p>
                    <p id="estate-p">contract address:${gg.size}</p>
                    
                    <button id="estate-btn">
                        <a href="https://market.decentraland.org/contracts/${gg.nft.contractAddress}/tokens/${gg.nft.tokenId}" id="estate-a">more info</a>
                    </button>
                </div>
            </div>
          </div>
            `;
            document.getElementById("main").innerHTML += content; 
        } catch (e) {
            console.log(e)
        }
        })
    })
  
