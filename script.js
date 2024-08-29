// Example: Fetch and display font previews
fetch('fonts.json')
    .then(response => response.json())
    .then(fonts => {
        const featuredFontsContainer = document.querySelector('.featured-fonts .container');
        fonts.forEach(font => {
            const fontPreview = `
                <div class="font-preview">
                    <img src="${font.thumbnail}" alt="${font.name}">
                    <h3>${font.name}</h3>
                    <p>${font.description}</p>
                </div>
            `;
            featuredFontsContainer.innerHTML += fontPreview;
        });
    }); 
