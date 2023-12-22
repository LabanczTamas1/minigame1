const gallery = document.getElementById("gallery");
const light = document.getElementById("flashlight");

window.onmousemove = (e) => {
    const mouseX = e.clientX,
        mouseY = e.clientY;

    

    const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;

    const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;

    const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;



    console.log(`translate(${mouseX}px, ${mouseY}px)`,panX, panY);
    light.animate({
        transform: `translate(${mouseX-panX-4196}px, ${mouseY-panY-4196}px)`  
    }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
    })
    console.log(mouseX, mouseY);    

    gallery.animate({
        transform: `translate(${panX}px, ${panY}px)`
    }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
    })
};