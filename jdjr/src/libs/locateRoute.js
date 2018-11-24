export default {
    locateRoute(demo){
        //判断当前是什么路由
        var route = demo.props.location.pathname;
        var cur=0;
        switch (route) {
            case "/home/":
                cur=0;
                break;
            case "/makemoney/":
                cur=1;
                break;
            case "/lendmoney/":
                cur=2;
                break;
            case "/savemoney/":
                cur=3;
                break;
            case "/member/":
                cur=4;
                break;
            default:
                cur=0;
        }
        demo.props.skipTo(cur);
    }
}
    
