function textyy(options){
    let textyyGlitch = document.querySelectorAll(".textyy-glitch");
    textyyGlitch.forEach(textyyGlitch => {
        textyyGlitch.style.textDecoration = `none`;
        textyyGlitch.style.fontFamily = `'Raleway', sans-serif`;
        textyyGlitch.style.size = `8.125em`;
        textyyGlitch.style.textTransform = `uppercase`;
        textyyGlitch.style.position =  `absolute`;
        textyyGlitch.style.top =  `50%`;
        textyyGlitch.style.left = `50%`;
        textyyGlitch.style.transform = `translate(-50%, -50%)`;
        textyyGlitch.style.margin = `0`;
        textyyGlitch.style.color = `#fff`;
        textyyGlitch.style.letterSpacing = `5px`;
    })
}