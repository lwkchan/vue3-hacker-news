<template>
    <div class="skeleton-loader"></div>
</template>
<style>
.skeleton-loader {
    --height: 10rem;

    width: 100%;
    height: var(--height);
    animation: skeleton-loader-shimmer 1s linear infinite forwards;
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

@keyframes skeleton-loader-shimmer {
    0% {
        background-position: -100% 0;
    }

    100% {
        background-position: 150% 0;
    }
}
</style>