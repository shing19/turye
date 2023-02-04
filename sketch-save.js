new p5(p => {
    let resize = 0.8;
    const width = 468;
    const length = 720;
    const parentId = 'TuryeSave'; 
    let img;
    let turyeCanvas;
    let dupCanvas;
    let duplicateTurye;

    p.preload = function() {
        img = loadImage('./src/frame-save.png')
    }

    p.setup = function() {
        // 設置各自的 canvas
        p.createCanvas(width, length).parent(parentId);
        p.resizeCanvas(width*resize, length*resize);
        turyeCanvas = document.getElementById("TuryeGen").getElementsByTagName("canvas")[0];
        duplicateTurye = p.createGraphics(turyeCanvas.width, turyeCanvas.height);
        dupCanvas =  document.getElementById("TuryeSave").getElementsByTagName("canvas")[0];
        
        console.log(turyeCanvas)
        console.log(dupCanvas);
        console.log(dupCanvas.width)
        console.log(turyeCanvas.height/2-dupCanvas.height/2*0.6)
    }

    p.draw = function() {
        p.image(img, 0, 0, width*resize, length*resize);
        let ctx = dupCanvas.getContext('2d');
        let sx = turyeCanvas.width/2-220*1.35;
        let sy = turyeCanvas.height/2-290*1.35;
        let sw = 440*1.35;
        let sh = 580*1.35;
        let dx = dupCanvas.width*0.015;
        let dy = dupCanvas.height*0.025;
        let dw = dupCanvas.width*0.94/2;
        let dh = dupCanvas.width*0.95*1.31/2;
        ctx.drawImage(turyeCanvas, sx, sy, sw, sh, dx, dy, dw, dh);
        
    }
});
