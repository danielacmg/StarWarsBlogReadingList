const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characterList:[],
  			loading:true,
  			error:null,
			vehicleList:[],
			loading2:true,
			error2:null,
			planetList:[],
			loading3:true,
			error3:null,

			favorites:[],

			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ]
		},
		actions: {
			
			fetchingStars: () =>{
				const store = getStore();
				getActions().fetchingList("people");
				getActions().fetchingList("vehicles");
				getActions().fetchingList("planets");
			  },

			
			fetchingList: (listType) =>{	
				const store = getStore();

				let url = 'https://swapi.dev/api/'+ listType; 

				fetch('https://swapi.dev/api/'+ listType)
				.then((response) => {
				  if (!response.ok) {
					throw new Error(
					  'This is an HTTP error: The status is ${response.status}'
					);
				  }
				  return response.json();
				})
				.then((actualData) => {  	
					if (listType=="people"){setStore({ characterList: Object.entries(actualData.results) });
						setStore({ error:  null});}else
					if (listType=="vehicles"){setStore({ vehicleList: Object.entries(actualData.results) }); 
						setStore({ error2:  null});}else
						{setStore({ planetList: Object.entries(actualData.results) }); 
						setStore({ error3:  null});}
				})
				.catch((err) => {
					if (listType=="people") {setStore({ error: err.message }); setStore({ characterList: null })}else
					if (listType=="vehicles") {setStore({ error2: err.message }); setStore({ vehicleList: null })}else
					{setStore({ error3: err.message }); setStore({ planetList: null })}
				})
				.finally(() => {
					if (listType=="people"){ setStore({ loading: false });} else
					if (listType=="vehicles") {setStore({ loading2: false })}else{
					setStore({ loading3: false })}
				});
		  
			  },  

			// addFavorite : (itemName, itemId) =>{   //to add a new item to the list
			// 	const store = getStore();
				
			// 	if(Object.values(store.favorites).includes(itemName)){
			// 		alert("The selected item is already on your list");
			// 	}else{
			// 		setStore({ favorites: faveList => ([...faveList, {name:itemName, id:itemId}]) })
			// 	}
				
				
			// },
		
			// deleteFavorite : (itemName, itemId) =>{   //to delete an item 
			// 	const store = getStore();
			// 	setStore({favorites: store.favorites.filter((item, index) => itemId!==index)});
			// 	// if(Object.values(store.favorites).includes(itemName)){
			// 	// 	let deleteIndex = Object.values(store.favorites).indexOf(itemName);
			// 	// 	setStore({favorites: store.favorites.filter((item, index) => itemId!==index)})}
			// 	// }
			// }, 
			 



			  // Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
