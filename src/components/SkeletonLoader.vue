<template>
    <div class="skeletonLoader" data-testid="SkeletonLoader" :style="style"></div>
</template>
<script lang="ts">
export default {
    props: { height: Number },
    setup(props: { height: number }) {
        return { style: { ['--height']: `${props.height}px` as string } }
    }
}
</script>
<style>
.skeletonLoader {
    --height: 10rem;

    width: 100%;
    height: var(--height);
    animation: skeletonLoaderShimmer 1s linear infinite forwards;
    background: #eee;
    background-image: linear-gradient(
        to right,
        #eee 0%,
        #ccc 20%,
        #ddd 40%,
        #eee 100%
    );
    background-repeat: no-repeat;
    background-size: 800px var(--height);
    border-radius: 3px;
}

@keyframes skeletonLoaderShimmer {
    0% {
        background-position: -100% 0;
    }

    100% {
        background-position: 150% 0;
    }
}
</style>
