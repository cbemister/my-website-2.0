<template>
    <div>
        <PageTitle title="Dynamic Page Template" :subTitle="'Route: ' + $route.params.pages " />
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
