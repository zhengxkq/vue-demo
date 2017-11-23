
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}

export const removeStore = name => {
    if (!name) return;
    window.localStorage.removeItem(name);
}

export const getStyle = (element, attr, NumberMode = 'int') => {
    let target;
    if(attr === 'scrollTop'){
        target = element.scrollTop;
    }else if(element.currentStyle){
        target = element.currentStyle[attr];
    }else{
        target = document.defaultView.getComputedStyle(element,null)[attr];
    }

    return NumberMode == 'float' ? parseFloat(target) : parseInt(target);
}

export const showBack = (callback) => {
    let requestFram;
    let oldScrollTop;
    const moveEnd = () => {
        requestFram = requestAnimationFrame(() => {
            if(document.body.scrollTop != oldScrollTop){
                oldScrollTop = document.body.scrollTop;
                moveEnd()
            }else{
                cancelAnimationFrame(requestFram);
            }
            showBackFun();
        })
    }

    const showBackFun = () => {
        if(document.body.scrollTop > 50){
            callback(true);
        }else{
            callback(false)
        }
    }
    document.addEventListener('scroll',() => {
        showBackFun()
    },false)
    document.addEventListener('touchstart', () => {
        showBackFun();
    },{possive:true})
    document.addEventListener('touchmove', () => {
        showBackFun();
    },{possive:true})

    document.addEventListener('touchend', ()=>{
        oldScrollTop = document.body.scrollTop;
        moveEnd();
    },{possive:true})
}


/**
 * 运动效果
 * @param {HTMLElement} element     运动对象，必选
 * @param {JSON}        target      属性：目标值，必选
 * @param {number}      durarion    运动时间，可选
 * @param {string}      mode        运动模式，可选
 * @param {function}    callback    可选，回调函数，链式动画
 */

 export const animate = (element, target, duration = 400, mode = 'ease-out', callback) => {
     clearInterval(element.timer);

     if(duration instanceof Function){
         callback = duration;
         duration = 400;
     }else if(duration instanceof String){
         mode = duration;
         duration = 400;
     }

     if(mode instanceof Function){
         callback = mode;
         mode = 'ease-out';
     }

     const attrStyle = attr => {
         if(attr === 'opacity'){
             return Math.round(getStyle(element, attr, 'float') * 100);
         }else{
             return getStyle(element, attr);
         }
     }

     const rootSize = parseFloat(document.documentElement.style.fontSize);

     let unit = {};
     let initState = {};
     
     Object.keys(target).forEach(attr => {
         if(/[^\d^\.]+/gi.test(target[attr])){
             unit[attr] = target[attr].match(/[^\d^\.]+/gi)[0] || 'px';
         }else{
             unit[attr] = 'px';
         }
         initState[attr] = attrStyle(attr);
     })

     Object.keys(target).forEach(attr => {
         if(unit[attr] == 'rem'){
             target[attr] = Math.ceil(parseInt(target[attr]) * rootSize)
         }else{
             target[attr] = parseInt(target[attr]);
         }
     })

     let flag = true;
     let remberSpeed = {};
     element.timer = setInterval(()=>{
         Object.keys(target).forEach(attr => {
             let iSpeed = 0;
             let status = false;
             let iCurrent = attrStyle(attr) || 0;
             let speedBase = 0;
             let intervalTime;

             switch(mode){
                case 'ease-out':
                    speedBase = iCurrent;
                    intervalTime = duration * 5 / 400;
                    break;
                case 'linear':
                    speedBase = initState[attr];
                    intervalTime = duration * 20 / 400;
                case 'ease-in':
                    let oldspeed = remberSpeed[attr] || 0;
                    iSpeed = oldspeed + (target[attr] - initSate[attr]) / duration;
                    remberSpeed[attr] = iSpeed;
                    break;
                default:
                    speedBase = iCurrent;
                    intervalTime = duration * 5 / 400;
             }

             if(mode !== 'ease-in'){
                 iSpeed = (target[attr] - speedBase) / intervalTime;
                 iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
             }

             switch (mode){
                 case 'ease-out':
                    status = iCurrent != target[attr];
                    break;
                case 'liner':
                    status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
                    break;
                case 'ease-in':
                    status = Math.abs(Math.abs(iCurrent) - Math.abs(target[attr])) > Math.abs(iSpeed);
                    break;
                default:
                    status = iCurrent != target[attr];
            }

            if(status){
                flag = false;
                if(attr === 'opacity'){
                    element.style.filter = "alpha(opacity:" + (iCurrent + iSpeed) + ")";
                    element.style.opacity = (iCurrent + iSpeed) / 100;
                }else if(attr === 'scrollTop'){
                    element.scrollTop = iCurrent + iSpeed;
                }else{
                    element.style[attr] = iCurrent + iSpeed + 'px';
                }
            }else{
                flag = true;
            }

            if(flag){
                clearInterval(element.timer);
                if(callback){
                    callback()
                }
            }
         })
     },20)
 }

