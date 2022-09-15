

const app=document.getElementById('typewriter');


const typewriter = new Typewriter(app, {
    loop: true,
    delay:120
});

typewriter
.typeString('DERECHO PENAL')
.pauseFor(800)
.start();

