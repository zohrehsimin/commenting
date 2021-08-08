<script>

</script>

<template>
    <div>

        <div class="main-container">
            <slot>

            </slot>
        </div>

    </div>


</template>


<style scoped>

    .main-container {
        width: 24rem;
        height: 40rem;
        display: flex;
        flex-direction: column;
        position: absolute;
        left: calc(50% - 12rem);
        top: calc(50% - 20rem);
        background: rgba(247, 239, 239, 0.15);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(12.5px);
        -webkit-backdrop-filter: blur(12.5px);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
    }

</style>
