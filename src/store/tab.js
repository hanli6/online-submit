import jsCookie from "js-cookie";

export default {
    state: {
        //菜单是否缩放
        isCollapsed: false,
        //菜单树
        menu: [],
        userVo: {}
    },
    mutations: {
        //修改菜单缩放状态
        collapseMenu(state) {
            state.isCollapsed = !state.isCollapsed
        },
        //设置菜单树
        setMenu(state, menu) {
            state.menu = menu
            //将菜单数据存储到Cookie中
            jsCookie.set("menu", JSON.stringify(menu));
        },
        //添加动态路由
        addMenu(state, router) {
            //先从Cookie中获取菜单
            const menu = JSON.parse(jsCookie.get("menu"));
            if (!menu) return;
            //更新store中的menu数据
            state.menu = menu;
            //新菜单
            const menuArr = [];
            menu.forEach((item) => {
                //有子菜单
                if (item.children) {
                    item.children = item.children.map(item => {
                        //为每个子菜单添加component组件
                        item.component = () => import(`../views/${item.url}`);
                        return item;
                    })
                    //将子菜单存入新数组中
                    menuArr.push(...item.children);
                } else {
                    item.component = () => import(`../views/${item.url}`);
                    menuArr.push(item);
                }
            });
            //添加到动态路由中
            menuArr.forEach((item) => {
                router.addRoute('Main', item);
            })
        },
        //设置用户信息
        setUserVo(state, value) {
            //将用户信息保存到state中，不过浏览器一刷新，就会清空数据
            state.userVo=value;
            //将用户信息存储到Cookie中
            jsCookie.set("userVo", JSON.stringify(value));
        }
    }
}