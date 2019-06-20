
cc.Class({
    extends: cc.Component,

    properties: {
       
    },


    // onLoad () {},
    init(boss){
        this.boss = boss;
    },
    start () {
    },
    onCollisionEnter(other,self){
        if(other.node.group === "zidan"){
            // 把收到的伤害转到boss脚本里面去
            this.boss.hurt(other.getComponent("bullet").damage);
        }
    }
    // update (dt) {},
});
