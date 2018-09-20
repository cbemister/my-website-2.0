<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>{{ subTitle }}</h2>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: {
        title: {
            type: String,
            required: true
        },
        subTitle: {
            type: String,
            required: true
        }
    }
}
</script>
