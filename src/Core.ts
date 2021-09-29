import * as PIXI from 'pixi.js'
export class Core {
    private pixiApp: PIXI.Application;
    private pixiDiv: HTMLDivElement;
    constructor() {
        this.pixiApp = new PIXI.Application({transparent: true});
        this.pixiDiv = document.createElement('div')
        this.pixiDiv.classList.add('core2d')
        this.pixiDiv.appendChild(this.pixiApp.view)
        this.pixiApp.renderer.resize(this.pixiDiv.clientWidth, this.pixiDiv.clientHeight)
    }
}