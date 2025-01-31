document.addEventListener("DOMContentLoaded", function () {
    // Cargar perfil
    document.getElementById("nombre").textContent = perfil.nombre;
    document.getElementById("sobre-mi").textContent = perfil.sobre_mi;

    // Cargar certificaciones
    let certsHtml = "";
    perfil.certificaciones.forEach(cert => {
        certsHtml += `<li>${cert}</li>`;
    });
    document.getElementById("certificaciones").innerHTML = certsHtml;

    // Cargar redes sociales
    let redesHtml = "";
    for (let [nombre, url] of Object.entries(perfil.redes)) {
        redesHtml += `<a href="${url}" target="_blank">${nombre}</a><br>`;
    }
    document.getElementById("redes").innerHTML = redesHtml;

    // Cargar posts
    let postsHtml = "";
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
});
