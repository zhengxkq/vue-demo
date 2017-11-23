
let baseUrl = '';
let routerMode = 'history';
let imgBaseUrl = 'http://fuss10.elemecdn.com/';

if(process.env.NODE_ENV === 'development'){

}else if(process.env.NODE_ENV === 'production'){
// baseUrl = 'http://cangdu.org:8001';
}

export  {
    baseUrl,
    routerMode,
    imgBaseUrl
}