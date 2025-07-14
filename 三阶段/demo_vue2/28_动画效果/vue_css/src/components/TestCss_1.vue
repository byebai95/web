<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <h1 v-show="isShow" class="move">你好啊！</h1>
    </div>
</template>

<script>
export default {
    name: 'TestCss_1',
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

.move {
    animation: move 1s;
}

@keyframes move {
    from {
        transform: translateX(-100px);
    }

    to {
        transform: translateX(0px);
    }
}
</style>