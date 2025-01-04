export default {
    state:{
        //菜单是否缩放
        isCollapsed: false,
    },
    mutations:{
        //修改菜单缩放状态
        collapseMenu(state){
            state.isCollapsed=!state.isCollapsed
        }
    }
}