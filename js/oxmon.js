axios
  .post("https://api.thegraph.com/subgraphs/name/ninjashiroi/oxmons", {
    query: `
    {
  monsters(orderBy: number, first: 53) {
    id
    number
    owner
    bits
    tokenUri
    gen
    minterContract
    rarity
    
    
  }
}           
          `,
  })
  .then((res) => {
    
    res.data.data.monsters.map((gg) => {
        let rarity = gg.rarity
        let owner = gg.owner
        let number = gg.number
        
        if((gg.tokenUri !== null || undefined  ) && gg.tokenUri.length !== 0){
            axios.get(gg.tokenUri).then((res) => {
              try {
                let content = `
          <div id="estate-con">
            <div id="estate-card">
                <div id="estate-content">
                <img src="${res.data.image}" alt="estate-image" id="estate-img">
                    <p id="estate-p">${res.data.name}</p>
                    <p id="estate-p">owner:${owner}</p>
                    <p id="estate-p">Rarity:${rarity}</p>
                    
                    <button id="estate-btn">
                        <a href="https://opensea.io/assets/0x0427743df720801825a5c82e0582b1e915e0f750/${number}" id="estate-a">more info</a>
                    </button>
                </div>
            </div>
          </div>
            `;

                document.getElementById("main").innerHTML += content;
                rarity = null
                number = null
                owner= null
              } catch (e) {
                console.log(e);
              }
            }); 
        }
    
    });
        });
