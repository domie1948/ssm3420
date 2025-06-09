
var projectName = '健康管理系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
]


var indexNav = [

{
	name: '体检套餐',
	url: './pages/tijiantaocan/list.html'
}, 
{
	name: '健康测评',
	url: './pages/jiankangceping/list.html'
}, 
{
	name: '健康小贴士',
	url: './pages/jiankangxiaotieshi/list.html'
}, 

{
	name: '健康资讯',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/ssm8twfe/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"体检套餐","menuJump":"列表","tableName":"tijiantaocan"}],"menu":"体检套餐管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"套餐项目","menuJump":"列表","tableName":"taocanxiangmu"}],"menu":"套餐项目管理"},{"child":[{"buttons":["查看","审核","发布报告"],"menu":"预约体检","menuJump":"列表","tableName":"yuyuetijian"}],"menu":"预约体检管理"},{"child":[{"buttons":["查看","审核"],"menu":"取消预约","menuJump":"列表","tableName":"quxiaoyuyue"}],"menu":"取消预约管理"},{"child":[{"buttons":["新增","查看","修改","删除","打印"],"menu":"体检报告","menuJump":"列表","tableName":"tijianbaogao"}],"menu":"体检报告管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"健康测评","menuJump":"列表","tableName":"jiankangceping"}],"menu":"健康测评管理"},{"child":[{"buttons":["查看","测试结果"],"menu":"用户测评","menuJump":"列表","tableName":"yonghuceping"}],"menu":"用户测评管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"测试报告","menuJump":"列表","tableName":"ceshibaogao"}],"menu":"测试报告管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"健康小贴士","menuJump":"列表","tableName":"jiankangxiaotieshi"}],"menu":"健康小贴士管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"健康资讯","tableName":"news"},{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","预约"],"menu":"体检套餐列表","menuJump":"列表","tableName":"tijiantaocan"}],"menu":"体检套餐模块"},{"child":[{"buttons":["查看","测评"],"menu":"健康测评列表","menuJump":"列表","tableName":"jiankangceping"}],"menu":"健康测评模块"},{"child":[{"buttons":["查看"],"menu":"健康小贴士列表","menuJump":"列表","tableName":"jiankangxiaotieshi"}],"menu":"健康小贴士模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看","取消"],"menu":"预约体检","menuJump":"列表","tableName":"yuyuetijian"}],"menu":"预约体检管理"},{"child":[{"buttons":["查看","删除","修改"],"menu":"取消预约","menuJump":"列表","tableName":"quxiaoyuyue"}],"menu":"取消预约管理"},{"child":[{"buttons":["查看","打印"],"menu":"体检报告","menuJump":"列表","tableName":"tijianbaogao"}],"menu":"体检报告管理"},{"child":[{"buttons":["查看"],"menu":"测试报告","menuJump":"列表","tableName":"ceshibaogao"}],"menu":"测试报告管理"}],"frontMenu":[{"child":[{"buttons":["查看","预约"],"menu":"体检套餐列表","menuJump":"列表","tableName":"tijiantaocan"}],"menu":"体检套餐模块"},{"child":[{"buttons":["查看","测评"],"menu":"健康测评列表","menuJump":"列表","tableName":"jiankangceping"}],"menu":"健康测评模块"},{"child":[{"buttons":["查看"],"menu":"健康小贴士列表","menuJump":"列表","tableName":"jiankangxiaotieshi"}],"menu":"健康小贴士模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
