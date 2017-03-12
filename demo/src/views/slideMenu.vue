<template>
    <div class="slide-menu-wrapper">
        <template v-for="($menuIndex,menu) in menus">
            <a href="javascript:;" v-link="path:menu.toPath,activeClass:'active'">
                {{menu.text}}
            </a>
        </template>
</div>
</template>

<script>
    export default {
        name: 'slideMenu',
        data() {
            return {
                menus: [{
                    text: "新闻",
                    toPath: "/news",
                    class: "side-menu active"
                }, {
                    text: "说明",
                    toPath: "/about",
                    class: "side-menu"
                }]
            }
        }
    }

</script>

<style>
    .side-menu-wrapper {
        min-width: 80px;
        height: 335px;
        float: left;
        margin-right: 20px;
        border: 1px solid #ccc;
    }
    
    .side-menu {
        display: block;
        font-size: 16px;
        text-align: center;
        padding: 5px 10px;
        border-bottom: 1px solid #ccc;
    }
    
    .side-menu:hover {
        cursor: pointer;
    }
    
    .side-menu:hover,
    .side-menu.active {
        background-color: #FFF3EB;
        border-bottom: 1px solid #ccc;
        border-left: 1px solid #ccc;
    }

</style>
