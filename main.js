document.addEventListener("DOMContentLoaded", function() {
    const loadComponent = (selector, url) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro ao carregar ${url}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                document.querySelector(selector).innerHTML = data;
            })
            .catch(error => console.error(error));
    };

    loadComponent("#header-placeholder", "header.html");
    loadComponent("#footer-placeholder", "footer.html");
});
