const MainDataFunc = async () => {
    await fetch("https://anime-b7fa6-default-rtdb.firebaseio.com/anime.json").then(response => response.json()).then(data => {
        console.log(data);
    }).catch(error => console.error(error))
}

MainDataFunc()