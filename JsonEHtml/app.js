async function capturar_pokemons(){
      pokemons =[]
    for(let id=1;id<=10;id++){
        url= `https://pokeapi.co/api/v2/pokemon/${id}`
     http_response =   await fetch(url)
     full_obj = await http_response.json()
    //  console.log(full_obj.name)
    //  console.log(full_obj['sprites']['front_default'])

     pokemon= {
            name: full_obj.name,
            img: full_obj['sprites']['front_default'],
            id:id
     }
        pokemons.push(pokemon)

    }
   
    mostrar_pokemons(pokemons)
}
capturar_pokemons()
function mostrar_pokemons(pokemons){
    pokedex_table = document.getElementById("pokedex")

    todas_linhas =''
   for(pokemon of pokemons){
         console.log(pokemon["id"])
        linha =`
        <tr>
            <td>${pokemon["id"]}</td>
            <td>${pokemon["name"]}</td>
            <td><img src="${pokemon["img"]}" alt=""></td>
        </tr>
        `
        todas_linhas += linha
    }
    pokedex_table.innerHTML = todas_linhas
}
