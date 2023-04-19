<!--
 * @Description: 
 * @Author:  
 * @Date: 2023-04-19 11:13:46
 * @LastEditTime: 2023-04-19 11:34:16
 * @LastEditors:  
-->
<template>
    <div>
        <ClientOnly>
            <slot name="title" >倒计时：</slot>
            <span v-text="formatTime"></span>
        </ClientOnly>
    </div>
</template>

<script>
export default {
    name: "Count",
    props: {
        time: {
            type: Number,
            default: Date.now()
        }
    },
    data () {
        return {
            timer: null,
            count: 0
        }
    },
    computed: {
        formatTime: function() {
            if(!this.count) return ""
            return new Date(this.count).toLocaleString();
        }
    },
    mounted() {
        this.count = this.time;
        this.init()
    },
    destroyed() {
        clearInterval(this.timer);
    },
    methods: {
        init() {
            this.timer = setInterval(()=> {
                let stamp = new Date(this.count).getTime() - 1000;
                this.count = stamp;
            }, 1000)
        }
    }
    
}
</script>

<style>

</style>
