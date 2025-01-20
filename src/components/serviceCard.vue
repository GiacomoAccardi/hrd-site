<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}    
</script>
<template>
    <div class="d-flex justify-content-center">
        <div class="px-5">
            <div class="text-white">
                <h2 class="mb-3 bg-yellow">{{ title }}</h2>
                <p>{{ text }}</p>
            </div>
        </div>
    </div>
</template>
