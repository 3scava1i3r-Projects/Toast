
axios
  .post("https://api.thegraph.com/subgraphs/name/decentraland/marketplace", {
    query: `
                    {
            estates(first:200){
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
    console.log(res.data.data.estates.length)
    res.data.data.estates.map((gg) => {
      try {
        
        let content = `
          <div id="estate-con">
            <div id="estate-card">
                <div id="estate-content">
                <img src="${gg.nft.image}" alt="estate-image" id="estate-img">
                    <p id="estate-p">${gg.nft.name}</p>
                    <p id="estate-p">owner:${gg.owner.id}</p>
                    <p id="estate-p">contract address:${gg.nft.contractAddress}</p>
                    
                    <button id="estate-btn">
                        <a href="https://market.decentraland.org/contracts/${gg.nft.contractAddress}/tokens/${gg.nft.tokenId}" id="estate-a">more info</a>
                    </button>
                </div>
            </div>
          </div>
            `;
        document.getElementById("main").innerHTML += content;
      } catch (e) {
        console.log(e);
      }
    });
  });
  
