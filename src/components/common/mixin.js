import { getStyle } from '../../config/mUtils'
import { imgBaseUrl, localapi, proapi } from '../../config/env'

export const loadMore = {
    directives: {
        'load-more': {
            bind: (el, binging) => {
                let windowHeight = window.screen.height;
                let height;
                let setTop;
                let paddingBottom;
                let marginBottom;
                let requestFram;
                let oldScrollTop;
                let scrollEl;
                let heightEl;
                let scrollType = el.attributes.type && el.attributes.type.value;
                let scrollReduce = 2;
                if(scrollType == 2){
                    scrollEl = el;
                    heightEl = el.children[0];
                }else{
                    scrollEl = document.body;
                    heightEl = el;
                }

                el.addEventLstener('touchstart', () => {
                    height = heightEl.clientHeight;
                    if(scrollType == 2){
                        height = height;
                    }
                    setTop = el.offsetTop;
                    paddingBottom = getStyle(el, 'paddingBottom');
                    marginBottom = getStyle(el, 'marginBottom');
                }, false)

                el.addEventLstener('touchmove', () => {
                    loadMore;
                }, false)

                el.addEventLstener('touchend', () => {
                    oldScrollTop = scrollEl.scrollTop;
                    moveEnd();
                }, false)

                const moveEnd = () => {
                    requestFram = requestAnimationFrame(() => {
                        if(scrollEl.scrollTop != oldScrollTop){
                            oldScrollTop = scrollEl.scrollTop;
                            moveEnd()
                        }else{
                            cancelAnimationFrame(requestFram)
                            height = heightEl.clientHeight
                            loadMore()
                        }
                    })
                }
                const loadMore = () => {
                    if(scrollEl.scrollTop + windowHeight >= height + setTop + paddingBottom + marginBottom -scrollReduce){
                        binding.value()
                    }
                }
            }
        }
    }
}

export const getImgPath = {
    methods: {
        getImgPath(path){
            let suffix;
            if(!path){
                return 'http://test.fe.ptdev.cn/elm/elmlogo.jpeg'
            }
            if(path.indexOf('jpeg') !== -1){
                suffix = '.jped'
            }else{
                suffix = '.png'
            }
			let url = '/' + path.substr(0, 1) + '/' + path.substr(1, 2) + '/' + path.substr(3) + suffix;
			return 'https://fuss10.elemecdn.com' + url
        }
    }
}