axios
  .post("https://api.thegraph.com/subgraphs/name/nikolaymalmal/rarible", {
    query: `
    {
  
  rarities(first: 100) {
    id
    Link
    Owner {
      id
    }
  }
}
          
          `,
  })
  .then((res) => {

    res.data.data.rarities.map((char) => {
        let owner = char.Owner.id
        
        axios.get(
          `https://ipfs.io/${char.Link}`
        ).then((t) => {
            try {
                let image = t.data.image.slice(6)
                
                console.log(image)
                let content = `
          <div id="estate-con">
            <div id="estate-card">
                <div id="estate-content">
                <img src="https://ipfs.io${image}" alt="estate-image" id="estate-img">
                    <p id="estate-p"></p>
                    <p id="estate-p">owner:${owner}</p>
                    <p id="estate-p">Rarity:</p>
                    
                    <button id="estate-btn">
                        <a href="${t.data.external_url}" id="estate-a">more info</a>
                    </button>
                </div>
            </div>
          </div>
            `;

                document.getElementById("main").innerHTML += content;
                owner = null


            } catch (e) {
                console.log(e)
            }
        });
    })
    /* res.data.data.monsters.map((gg) => {
      let rarity = gg.rarity;
      let owner = gg.owner;
      let number = gg.number;

      if ((gg.tokenUri !== null || undefined) && gg.tokenUri.length !== 0) {
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
            rarity = null;
            number = null;
            owner = null;
          } catch (e) {
            console.log(e);
          }
        });
      }
    }); */
  });
