# Toast


## What does Toast do?

A Dapp that allows users to search and view all estate on decentraland,also this dapp allows users to view Oxmon monsters and Rarities.I am using subgraphs by different teams to retrieve information about all the of the above mentioned.With a few lines of graphQL code we can get information from ethereum mainnet about these selected Estate,Monster or Rarity.Here we are just getting first 200 estate, 100 Oxmons and 100 Rarities from the subgraph.

### Main Page
![image](https://user-images.githubusercontent.com/52003051/124443277-2b3cb400-dd9b-11eb-97e9-7dfb33c6a753.png)

### Oxmon Page

![image](https://user-images.githubusercontent.com/52003051/124443463-54f5db00-dd9b-11eb-852f-bc68ea718cf1.png)

### Rarible Page

![image](https://user-images.githubusercontent.com/52003051/124443508-5d4e1600-dd9b-11eb-9a39-3f6fa7fc92e5.png)


## What are these different Subgraph?

- Check out decentraland subgraph [here](https://thegraph.com/explorer/subgraph/decentraland/marketplace)
- Check out Oxmon Subgraph [here](https://thegraph.com/explorer/subgraph/ninjashiroi/oxmons)
- Check out Rarible Subgraph [here](https://thegraph.com/explorer/subgraph/nikolaymalmal/rarible)

## Using Decentraland Subgraph?

![image](https://user-images.githubusercontent.com/52003051/124391779-cee08280-dd0f-11eb-8ca1-9dade40a5250.png)

I have used this subgraph to retrieve information about the first 200 estate.The information that we tried to pull are as follows - 

- owner
- estate id
- size
- data
- nft


here is our [query](https://github.com/3scava1i3r/Toast/blob/f5e2c7245b381d3423c5acdbe2b81bd467c6e88a/js/index.js#L37)

You can also check out more information about the estate and then bid for that particular estate on redirected decentraland marketplace

## Using Oxmon Subgraph?


![image](https://user-images.githubusercontent.com/52003051/124444658-786d5580-dd9c-11eb-9186-7b3cb339780b.png)

I have used this subgraph to retrieve information about the first 100 oxmon monsters.The information that we tried to pull are as follows - 

- id
- number
- owner
- bits
- tokenUri
- gen
- minterContract
- rarity


here is our [query](https://github.com/3scava1i3r/Toast/blob/fbecdbde092423f9c8d454c637649b828ca5625b/js/oxmon.js#L5)

You can also check out more information about the monster and then bid for that particular monster on redirected opensea marketplace



## Using Rarible Subgraph?


![image](https://user-images.githubusercontent.com/52003051/124444578-6095d180-dd9c-11eb-9117-d46731b1f770.png)


I have used this subgraph to retrieve information about the first 100 rarities.The information that we tried to pull are as follows - 

- Id
- Link
- Owner


here is our [query](https://github.com/3scava1i3r/Toast/blob/fbecdbde092423f9c8d454c637649b828ca5625b/js/rarible.js#L6)

You can also check out more information about the Rarity and then bid for that particular Rarity on redirected Rarible marketplace.



