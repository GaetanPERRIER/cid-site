<template>
    <transition name="loaded">
        <div v-if="loading" class="loading-screen">
            <div class="progress">
                <div class="font-base-xs">
                    <span ref="progress">0</span>%
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data: () => ({
        loading: true,
        progress: 0,
        oldProgress: null
    }),
    computed: {
        isMobile: function () {
            return this.$store.state.isMobile
        }
    },
    created() {
        this.$nuxt.$on('updateProgress', this.update)
    },
    methods: {
        start() {
            this.loading = true
        },
        finish() {
            setTimeout(() => {
                this.loading = false
                this.$nuxt.$emit('loadFinish')
            },300)
        },
        update(data) {
            this.progress = data.progress * 100 / data.total
            this.increment(this.oldProgress, this.progress, 250)
            this.oldProgress = this.progress
        },
        increment(start, end, duration) {
            let startTimestamp = null

            if (end === null)
                end = 0

            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                this.$refs.progress.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            }
            window.requestAnimationFrame(step);
        }
    }
}
</script>

<style lang="scss" scoped>

.loaded-leave-active {
    transition: opacity 650ms $easeInOutSine;
}
.loaded-leave-to {
    opacity: 0;
    background-color: transparent;
}

@keyframes heartbeat {
    from {
        transform: translate(-15vh, -50%) scale(1);
        transform-origin: center center;
    }
    10% {
        transform: translate(-15vh, -50%) scale(0.965);
    }
    17% {
        transform: translate(-15vh, -50%) scale(1);
    }
    33% {
        transform: translate(-15vh, -50%) scale(0.965);
    }
    45% {
        transform: translate(-15vh, -50%) scale(1);
    }
}

.loading-screen {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: $color-black;

    .progress {
        position: absolute;
        top: 50%;
        left: 50%;
        //width: 100%;
        transform: translate(-15vh, -50%);
        text-align: left;
        display: inline-block;
        animation: heartbeat 2s cubic-bezier(0.785, 0.135, 0.150, 0.860) infinite reverse both;

        .font-base-xs {
            font-size: 20vh;
            transition: all 250ms $easeOutBack;
            color: $color-white;
            span {display: inline;}
        }
    }
}
</style>
