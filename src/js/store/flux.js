const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			episode: [],
			favChar: [],
			favEpi: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeCharacter: async () => {
				await fetch('https://rickandmortyapi.com/api/character')
				.then(response => response.json())
				.then(data => {
					console.log(data.results)
					setStore({character:data.results})
				})
				.catch(error => console.log("se ha producido un error", error))
			},
			loadSomeEpisode: async () => {
				await fetch('https://rickandmortyapi.com/api/episode')
				.then(response => response.json())
				.then(data => {console.log(data.results)
				setStore({episode:data.results})})
				.catch(error => console.log("se ha producido un error", error))
			},

			updateFav:(newFavs)=>{
				setStore({favChar: newFavs})
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
