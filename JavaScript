function handleGalleryUpload(input) {
    const grid = document.getElementById('memory-grid');
    const files = input.files;

    for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = function(e) {
            // ပုံတစ်ပုံချင်းစီအတွက် စာသားမေးမယ်
            const caption = prompt("ဒီပုံလေးအတွက် အမှတ်တရစာသားလေး ရေးပေးပါဦး...", "Sweet Memory");
            
            // စာမရိုက်ဘဲ Cancel နှိပ်ရင် 'Sweet Memory' လို့ပဲ ပေါ်မယ်
            const finalCaption = (caption === null || caption === "") ? "Sweet Memory" : caption;

            // Create Polaroid Element
            const div = document.createElement('div');
            div.className = 'polaroid';
            
            div.innerHTML = `
                <img src="${e.target.result}">
                <span contenteditable="true">${finalCaption}</span>
                <small style="display:block; color:#ccc; font-size:10px;">(Edit text click here)</small>
            `;
            
            grid.appendChild(div);
        }
        reader.readAsDataURL(files[i]);
    }
}
