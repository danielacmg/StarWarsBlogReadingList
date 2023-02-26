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

			favorites:localStorage.getItem('favorites')? JSON.parse(localStorage.getItem('favorites')) : [], //to bring favorites from localstorage
			emptyFav: localStorage.getItem('favorites')? false: true,
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
					if (listType=="people"){
						setStore({ characterList: actualData.results});
						setStore({ error:  null});
					}else if (listType=="vehicles"){
						setStore({ vehicleList: actualData.results}); 
						setStore({ error2:  null});}
					else{
						setStore({ planetList: actualData.results}); 
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
			  
			  
			addFavorite : (itemName, itemId) =>{   //to add a new item to the favorite list
				const store = getStore();				
				if((store.favorites).includes(itemName)){
					alert("The selected item is already on your list");
				}else{
					setStore({ favorites: [...store.favorites, itemName] }); 
					setStore({ emptyFav: false });
				}						
			},
		
			deleteFavorite : (itemName, itemId) =>{   //to delete an item from favorite
				const store = getStore();
				if((store.favorites).includes(itemName)){
					setStore({favorites: store.favorites.filter((item, index) => itemId!==index)})
				}
				if(store.favorites.length===0){
					setStore({ emptyFav: true });
				}
			}, 
		}
	};
};

export default getState;
