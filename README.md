# Toast


## What does Toast do?

A Dapp that allows users to search and view all estate on decentraland. We are using subgraph by Team decentraland to retrieve information about all the estate.With a few lines of graphQL code we can get information from ethereum mainnet about these selected estate.Here we are just getting first 200 estate from the subgraph


![image](https://user-images.githubusercontent.com/52003051/124391790-d738bd80-dd0f-11eb-9478-d213d390e526.png)



## What is the Decentraland Subgraph?

check the decentraland subgraph [here](https://thegraph.com/explorer/subgraph/decentraland/marketplace)



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
