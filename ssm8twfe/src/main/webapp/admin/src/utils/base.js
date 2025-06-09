const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm8twfe/",
            name: "ssm8twfe",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm8twfe/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "健康管理系统"
        } 
    }
}
export default base
