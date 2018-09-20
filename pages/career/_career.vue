<template>
    <div>
        <PageTitle title="Career Dynamic Template" :subTitle="'Route: ' + $route.params.career " />
    </div>
</template>

<script>

import PageTitle from '@/components/Header/PageTitle'

export default {
    components: {
        PageTitle
    }
}
</script>
