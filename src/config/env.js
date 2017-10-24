
let baseUrl = ''
let routerMode = 'history'
let imgBaseUrl = 'http://images.cangdu.org/'

if(process.env.NODE_ENV === 'development'){

}else if(process.env.NODE_ENV === 'production'){

}

export default {
    baseUrl,
    routerMode,
    imgBaseUrl
}