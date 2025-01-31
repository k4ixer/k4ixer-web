document.addEventListener("DOMContentLoaded", function () {
    // Cargar perfil desde perfil.json
    fetch("/perfil.json")
        .then(response => response.json())
        .then(data => {
            document.getElementById("nombre").textContent = data.nombre;
            document.getElementById("sobre-mi").textContent = data.sobre_mi;

            // Cargar certificaciones
            let certsHtml = "";
            data.certificaciones.forEach(cert => {
                certsHtml += `<li>${cert}</li>`;
            });
            document.getElementById("certificaciones").innerHTML = certsHtml;

            // Cargar redes sociales
            let redesHtml = "";
            for (let [nombre, url] of Object.entries(data.redes)) {
                redesHtml += `<a href="${url}" target="_blank">${nombre}</a><br>`;
            }
            document.getElementById("redes").innerHTML = redesHtml;
        })
        .catch(error => console.error("Error cargando perfil:", error));

    // Cargar posts desde posts.json // <img src="${post.imagen}" alt="Imagen del post" class="post-image">
    fetch("../posts.json")
        .then(response => response.json())
        .then(posts => {
            let postsHtml = '';
            posts.forEach(post => {
                postsHtml += `
                    <article class="post">
                        <h2><a href="${post.url}">${post.titulo}</a></h2>
                        <p class="post-meta">Publicado el <span>${post.fecha}</span></p>
                        ${post.contenido}
                    </article>
                `;
            });
            document.getElementById("posts-container").innerHTML = postsHtml;
        })
        .catch(error => console.error("Error cargando posts:", error));
});
