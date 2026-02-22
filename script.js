function handleGalleryUpload(input) {
    const grid = document.getElementById('memory-grid');
    const files = input.files;

    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // Create Polaroid Element
            const div = document.createElement('div');
            div.className = 'polaroid';
            
            div.innerHTML = `
                <img src="${e.target.result}">
                <span>Sweet Memory</span>
            `;
            
            grid.appendChild(div);
        }
        reader.readAsDataURL(files[i]);
    }
}
