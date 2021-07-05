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
        let id = char.id
        console.log(char.Link)
        axios.get(
          `https://ipfs.io/${char.Link}`
        ).then((t) => {
            try {
                let image = t.data.image.slice(6)
                console.log(t)
                
                let content = `
          <div id="estate-con">
            <div id="estate-card">
                <div id="estate-content">
                <img src="https://ipfs.io${image}" alt="estate-image" id="estate-img">
                    <p id="estate-p">${t.data.name}</p>
                    <p id="estate-p">owner:${owner}</p>
                    <p id="estate-p">tokenId:${id}</p>
                    
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
  });
