<template>
    <!-- start of 404 -->
    <div class="ps-page--404">
        <div class="container">
            <div class="ps-page__content">
                <form class="ps-form--404" action="404-page.html" method="get">
                    <div class="ps-form__header"><i class="icon-confused"></i></div>
                    <h3>Ohh! 404 Page Not Found</h3>
                    <p>It seems we can't find what you're looking for. Perhaps searching can help or go back to
                        <nuxt-link to="/">Homepage</nuxt-link>
                    </p>
                    <div class="form-group--icon">
                        <input class="form-control" type="text" placeholder="Search...">
                        <button><i class="icon-magnifier"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- end of 404 -->
</template>

<script>
    export default {

    }
</script>