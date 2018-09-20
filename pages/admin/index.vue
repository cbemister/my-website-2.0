<template>
    <div class="admin-page">
        <PageTitle title="Admin Page" subTitle=" Admin Landing Page " />
        <button @click="$router.push('/admin/compose/add')">Add Content</button>
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
