class LoadScene extends Phaser.Scene {
    constructor(){
        super("LoadScene");
    }

    preload(){
        this.load.path="./assets/";
        this.load.image("icon", "icon.png");
        this.load.audio("load", ["load.wav"]);

    }

    create() {

        let icon = this.add.image(640, 350, "icon");
        icon.setScale(0.4);
        icon.alpha= 0;

        this.tweens.add({
            targets: icon,
            x: 640,
            y: 350,
            alpha: 1,
            duration: 2000,
            ease: "Power2",
            repeat: 0
        });

        this.tweens.add({
            targets: icon,
            alpha: 0,
            delay: 2000,
            duration: 2000,
            ease: "Power2",
            repeat: 0
        });

        let load = this.sound.add("load", {volume: 0.2, delay: 8000});
        load.play();

        setTimeout(() => {
             this.scene.start("Intro"); 
        }, 5000);
    }
}

class Intro extends Phaser.Scene {
    constructor(){
        super("Intro");
    }

    preload(){
        this.load.path="./assets/";
        this.load.image("bullet", "bullet.png");
        this.load.image("guy", "guy.png");
        this.load.image("gradient", "gradient.png");
        this.load.image("texts", "pretext.png");
        this.load.audio("sound", ["second.wav"]);
    }
    create(){
        let guy = this.add.image(1500, 350, "guy");
        let bullet = this.add.image(-500, 350, "bullet");
        let gradient = this.add.image(640, 350, "gradient");
        let texts = this.add.sprite(700, 350, "texts");
        texts.alpha = 0;
        gradient.alpha=0;
        
        let sound = this.sound.add("sound", {volume: 0.5, delay: 8000});
        sound.play();

        this.tweens.add({
            targets: guy,
            x: -500,
            y: 350,
            alpha: 1,
            duration: 300,
            ease: "Linear",
            repeat: 0
        });
        
        console.log(guy.x);

        this.tweens.add({
            targets: gradient,
            alpha: 1,
            duration: 150,
            ease: "Power2",
            repeat: 0
        });

        this.tweens.add({
            targets: gradient,
            alpha: 0,
            delay: 50,
            duration: 100,
            ease: "Power2",
            repeat: 0
        });

        this.tweens.add({
            targets: bullet,
            x: 1500,
            y: 350,
            alpha: 1,
            delay: 500,
            duration: 300,
            ease: "Linear",
            repeat: 0
        });

        this.tweens.add({
            targets: gradient,
            alpha: 1,
            delay: 600,
            duration: 150,
            ease: "Power2",
            repeat: 0
        });

        this.tweens.add({
            targets: gradient,
            alpha: 0,
            delay: 650,
            duration: 100,
            ease: "Power2",
            repeat: 0
        });

        this.tweens.add({
            targets:texts,
            alpha: 1,
            delay: 2000,
            duration: 2000,
            ease: "Power2",
            repeat: 0
        })
        texts.setInteractive({ useHandCursor: true });
        texts.on('pointerdown', () => this.scene.start('Menu'));
    }
}

class Menu extends Phaser.Scene{
    constructor(){
        super("Menu");
    }

    preload(){
        this.load.path = "./assets/";
        this.load.image("front", "front.png");
        this.load.image("title", "title.png");
        this.load.audio("bgm", ["bgm.wav"]);
    }

    create(){
        let bg = this.add.image(640,360, "front");
        bg.alpha = 0;
        let title = this.add.image(250,100, "title");
        title.alpha = 0;
        bg.setScale(0.7);
        let bgm = this.sound.add("bgm", {volume: 0.3, delay: 8000});
        bgm.play();

        this.tweens.add({
            targets: bg,
            alpha: 1,
            duration: 1000,
            ease: "Linear",
            repeat: 0
        });
        this.tweens.add({
            targets: title,
            alpha: 1,
            duration: 1000,
            ease: "Linear",
            repeat: 0
        });
    }
}

let config = {
    type: Phaser.WEBGL,
    width: 1280,
    height: 720,
    backgroundColor: 0x000000,
    scene: [LoadScene, Intro, Menu],
}

let game = new Phaser.Game(config);

