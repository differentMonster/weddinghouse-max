<template>
    <!-- start Addition Information Content -->
    <div id="tab-2">
        <div class="table-responsive">
            <table class="table ps-table ps-table--product-info">
                <tbody>
                    <tr>
                        <td>Weight</td>
                        <td>{{ product.weight }}</td>
                    </tr>
                    <tr>
                        <td>Color</td>
                        <td>Black, Brown, White</td>
                    </tr>
                    <tr>
                        <td>Dimensions</td>
                        <td>
                            <p>
                                {{ product.dimensions.length }} cm
                                x
                                {{ product.dimensions.width }} cm
                                x
                                {{ product.dimensions.height }} cm
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- end Addition Information Content -->
</template>

<script>
    export default {
        name: 'ShopProductAddition',
        props: {
            product: {
                type: Array,
                required: true
            }
        },
    }
</script>

<style>

</style>