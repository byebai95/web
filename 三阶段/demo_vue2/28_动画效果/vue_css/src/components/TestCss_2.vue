<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition>
            <h1 v-show="isShow">你好啊！</h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'TestCss_2',
    data() {
        return {
            isShow: true
        }
    }

}
</script>

<style scoped>
h1 {
    background-color: orange;
}

.v-enter-active {
    animation: move 0.5s linear;
}


.v-leave-active {
    animation: move 0.5s linear reverse;
}

@keyframes move {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}
</style>