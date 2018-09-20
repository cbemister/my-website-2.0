<template>
    <div class="home-page">
                <PageTitle title="Homepage Template" subTitle="~ New Website Content ~" />
        <section class="featured-posts">
            <FeaturedPostItem title="title" description="description" linkHref="/posts" linkDescription="Home" />

        </section>
    </div>
</template>

<script>

import PageTitle from '@/components/Header/PageTitle'
import FeaturedPostItem from '@/components/Featured/FeaturedPostItem'

export default {
    components: {
        PageTitle,
        FeaturedPostItem
    }
}
</script>