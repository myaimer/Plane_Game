
cc.Class({
    extends: cc.Component,

    properties: {
       myPlane:cc.Sprite,
       bgm:{
           default:null,
           type:cc.AudioClip,
       }
    },


    // onLoad () {},

    start () {
        console.log(this.node.name);
        cc.vv.dj.playBgm(cc.vv.res["welcome"],true);

    },
    // 跳转场景1
    jumpScene(event,customData){
        cc.audioEngine.stopMusic(this.bgm);
        cc.director.loadScene(customData);

    },
   

    
    update (dt) {
        this.myPlane.spriteFrame = cc.vv.res['plane_' + cc.vv.CUREENT_PLANE_TYPE]
    },
});
