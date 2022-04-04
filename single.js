function dynamicFetch(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.querySelector("img").src = data.image.original;
      document.querySelector("h2").innerHTML = data.name;
      document.getElementById("description").innerHTML = data.summary;
      document.getElementById("genre").innerHTML = data.genres;
    });
}
idHandler = document.location.search.split("=");
dynamicFetch("https://api.tvmaze.com/shows/" + idHandler[1]);
