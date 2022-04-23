<template>
    <div>
        <!-- start Mage Menu Content -->
        <header class="header header--standard transparent" data-sticky="true">
            <div class="header__left">
                <nuxt-link class="ps-logo" to="/"><img src="~/assets/img/logo.svg" alt=""></nuxt-link>
            </div>
            <div class="header__right">
                <div class="header__navigation">
                    <ul class="menu">
                        <li class="menu-item-has-children has-mega-menu">
                            <nuxt-link to="/shop" no-prefetch>Shop</nuxt-link><span class="sub-toggle"></span>
                            <div class="mega-menu">
                                <div class="mega-menu__column">
                                    <h4>Shop Pages<span class="sub-toggle"></span></h4>
                                    <ul class="sub-menu--mega">
                                        <li>
                                            <nuxt-link to="/shop/teaset" no-prefetch>teaset</nuxt-link>
                                        </li>
                                        <li>
                                            <nuxt-link to="/shop/cheongsam" no-prefetch>cheongsam</nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="mega-menu__column">
                                    <h4>Product Layouts<span class="sub-toggle"></span></h4>
                                    <ul class="sub-menu--mega">
                                        <li><a href="product-default.html">default</a></li>
                                        <li><a href="product-with-background.html">with background</a></li>
                                    </ul>
                                </div>
                                <div class="mega-menu__column">
                                    <h4>Product Pages<span class="sub-toggle"></span></h4>
                                    <ul class="sub-menu--mega">
                                        <li><a href="product-simple.html">simple</a></li>
                                        <li><a href="product-on-sale.html">on sale</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="menu-item-has-children">
                            <nuxt-link to="/calendar">Calendar</nuxt-link><span class="sub-toggle"></span>
                            <ul class="sub-menu">
                                <li><a href="portfolio-carousel.html">Portfolio Carousel</a></li>
                                <li><a href="portfolio-grid.html">portfolio grid</a></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children"><a href="blog-grid.html">Pages</a><span class="sub-toggle"></span>
                            <ul class="sub-menu">
                                <li>
                                    <nuxt-link to="/about-us">about</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/faqs">FAQs</nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/404-page">404</nuxt-link>
                                </li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children">
                            <nuxt-link to="/blog">Blog</nuxt-link><span class="sub-toggle"></span>
                            <ul class="sub-menu">
                                <li><a href="blog-grid.html">Blog Grid</a></li>
                                <li><a href="blog-list.html">Blog list</a></li>
                                <li><a href="blog-masonry.html">Blog Masonry</a></li>
                                <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
                                <li><a href="blog-detail.html">Blog Detail</a></li>
                            </ul>
                        </li>

                        <li class="navbar__auth">
                            <nuxt-link v-if="!loggedIn" id="navbar__login" to="/signin">Login</nuxt-link>
                            <nuxt-link v-else id="navbar__logout" to="" @click.native="logout()">Logout</nuxt-link>
                        </li>

                    </ul>
                </div>
                <div class="header__container">
                    <div class="header__search">
                        <form class="ps-form--header-search" action="index.html" method="get">
                            <input class="form-control" type="text" placeholder="Search Searching...">
                            <button><i class="icon-magnifier"></i></button>
                        </form><a class="header__search-mini" href="#"><i class="icon-magnifier"></i></a>
                    </div>
                    <div class="header__actions">
                        <div v-if="!loggedIn">
                            <nuxt-link class="header__user" to=""><i class="icon-user"></i></nuxt-link>
                        </div>
                        <div v-else>
                            <nuxt-link class="header__user" to="/my-account"><i class="icon-user-plus"></i></nuxt-link>
                        </div>
                        <nuxt-link v-b-toggle.cart__sidebar--right class="header__cart" to="#"><i class="icon-cart"></i><span>{{ getCartLength }}</span></nuxt-link>
                        <div>
                        </div> <a class="header__menu-toggle" href="#navigation-mobile"><i class="icon-menu"></i></a>
                    </div>
                </div>
            </div>
        </header>
        <!-- end Mage Menu Content  -->

        <!-- Mage Menu-Mobile Content  -->
        <header class="header header--mobile" data-sticky="true">
            <div class="header__left"><a class="ps-logo" href="index.html"><img src="img/logo.png" alt=""></a></div>
            <div class="header__right">
                <div class="header__container"><a class="header__search-mini" href="#"><i class="icon-magnifier"></i></a></div>
                <div class="header__actions"><a class="header__user" href="#"><i class="icon-user"></i></a><a class="header__favorite" href="whishlist.html"><i class="icon-heart"></i></a>
                    <nuxt-link class="header__cart" to="/cart"><i class="icon-cart"></i><span>{{ getCartLength }}</span></nuxt-link><a class="header__menu-toggle" href="#navigation-mobile"><i class="icon-menu"></i></a>
                </div>
            </div>
        </header>
        <!-- end Mage Menu-Mobile Content  -->

        <MenuSideBarCart></MenuSideBarCart>
    </div>
</template>


<script>
    import {
        mapState,
        mapGetters,
    } from 'vuex'
    import MenuSideBarCart from '@/components/Menu/MenuSideBarCart'
    export default {
        name: 'Magamenu',
        components: {
            MenuSideBarCart
        },
        methods: {
            // this method will logout the user and make token to false on the local storage of the user browser
            async logout() {
                await this.$auth.logout();
                this.$router.push('/signin')
            }
        },
        computed: {
            ...mapState('auth', ['loggedIn']),
            ...mapGetters('cart', ['getCartLength'])
        },
        mounted() {}

    };
</script>

<style scope lang="scss">
</style>