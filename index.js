IMAGEBASEURL = 'https://image.tmdb.org/t/p/w500'

const showData = (movies) => {
    let HTMLCard = ''
    container = document.getElementById('container')

    for (let index = 0; index < movies.length; index++) {
        data = movies[index]

        year = new Date(data.release_date).getFullYear()
        
        HTMLCard += `
        <a onclick="myFunction(${index})" href="#" class="card">
            <img class="card__image" height="300px" src="${IMAGEBASEURL}/${data.poster_path}"/>
            <div class="card__content">
                <p class="card__title">${data.title} (${year})</p>
            </div>
        </a>
        `
        console.log(data)
    }
    container.innerHTML = HTMLCard
}

function myFunction(idnya) {
    document.getElementById("container").style.display = "none";
    document.getElementById("atas").style.display = "none";
    data = datanya[idnya]
    year = new Date(data.release_date).getFullYear()
    document.getElementById("detail").innerHTML = `
    <br><br>
    <center>
        <table width="100%" style="font-family: 'ZCOOL QingKe HuangYou', cursive;opacity: 0,3;background-color: #424242;">
            <tr>
                <td rowspan="3" width="200px"><img style="margin: 10px;" width="100%" src="${IMAGEBASEURL}/${data.poster_path}" alt="" srcset=""></td>
                <td style="color: white;">
                    <h1 style="margin-top: 10px;margin-left: 50px;">${data.title} (${year})</h1>
                    <h5 style="margin-top: 6px;margin-left: 50px;">${data.overview}</h5>
                </td>
            </tr>
            <tr>
                <td style="vertical-align: top; color: white;">
                    <h5 style="margin-top: 10px;margin-left: 50px;">Vote Average : ${data.vote_average}</h5>
                    <h5 style="margin-left: 50px;">Release Date : ${data.release_date}</h5>
                    <h5 style="margin-left: 50px;">Popularity : ${data.popularity}</h5>
                </td>
            </tr>
            <tr>
                <td>
                    <a onclick="myHome()" href="index.html" style="margin-left: 50px;" class="button button2">Back</a>
                </td>
            </tr>
        </table>
    </center>
    `;
}

window.addEventListener('DOMContentLoaded', () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}`)
        .then((res) => res.json())
        .then((data) => {
            results = data.results

            datanya = results
            showData(results)
        })
})



