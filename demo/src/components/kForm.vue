<tmplate>
    <div class="key-form-wrapper" v-bind:style="{width:width,height:height}">
        <p class="k-form-title" v-show="title">{{title}}</p>
        <form class="k-form-form">
            <p v-for="item in items" class="k-form-row">
                <label class="k-form-label" v-bind:class="[item.labelTextAlign||'right']" v-bind:style="{item.labelWidth||'auto'}">
                    {{item.labelText}}:
                </label>
            </p>
        </form>
        <p class="k-form-row-btns">
            <a href="javascript:;" v-for="btn in buttons" class="k-form-btn-{{btn.type}}" v-on:click="$btnClick(btn.cbFun)">{{btn.text}}</a>
        </p>
    </div>
</tmplate>

<script>
    export default {
        props: {
            conf: Object
        },
        data() {
            return {
                title: '',
                width: '',
                height: '',
                formData: {},
                items: [],
                buttons: []
            }
        },
        computd: {
            title() {
                return this.conf.title || '';
            },
            width() {
                return this.conf.width || '100%';
            },
            height() {
                return this.conf.height || '200';
            },
            items() {
                return this.conf.items || [];
            },
            buttons() {
                return this.conf.buttons || [];
            },
            module() {
                return this.conf.store.module;
            },
            key() {
                return this.conf.stroe.key;
            },
            formData() {
                return this.state[this.module][this.key];

            },
            methods: {
                $btnClick(cbFun) {
                    cbFun(tlhis.formData);
                }
            },
            vuex: {
                getter: {
                    state: (state) => state
                }
            }
        }
    }

</script>

<style>
    .k-form-wrapper {
        position: relative;
        padding: 5px;
        color: font-color-normal;
        font-size: 12px;
        border: 1px solid #f5f5f5;
    }
    
    .k-form-title {
        margin-bottom: 5px;
        padding-left: 5px;
        border-left: 1px solid #9966cc;
        font-size: 14px;
    }
    
    .k-form-form,
    .k-form-row-btns {
        padding: 5px;
        border: 1px solid #f5f5f5;
    }
    
    .k-form-row {
        margin: 10px 0;
    }
    
    .k-form-label,
    .k-form-input {
        display: inline-block;
    }
    
    .k-form-label.left {
        text-align: left;
    }
    
    .k-form-label.right {
        text-align: right;
    }
    
    .k-form-label.center {
        text-align: center;
    }
    
    .k-form-row-btns {
        position: absolute;
        left: 5px;
        right: 5px;
        bottom: 5px;
        text-align: right;
    }
    
    a {
        display: inline-block;
    }
    
    .k-form-btn-submit,
    .k-form-btn-cancel {
        margin-left: 5px;
        padding: 5px;
        border: 1px solid #f5f5f5;
        color: #000000;
        text-decoration: none;
        background-color: #f8f8f8;
    }
    
    .k-form-btn-submit:hover {
        color: #fff;
        background-color: #33CC66;
    }
    
    .k-form-btn-cancel:hover {
        color: #fff;
        background-color: #CC9966;
    }

</style>
