<template>
    <table class="table ps-table ps-table--shopping-cart">
        <thead>
            <tr>
                <th>Product</th>
                <th>Color</th>
                <th>Size</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <CartOverviewProduct />
        </tbody>
    </table>
</template>

<script>
    import CartOverviewProduct from "@/modules/cart/components/CartOverviewProduct.vue"

    export default {
        components: {
            CartOverviewProduct
        }
    }
</script>