<template>
    <div class="col-md-6">
        <div class="ps-form__billings">
            <h4 class="ps-form__heading">Billings</h4>
            <div class="row">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label>First Name</label>
                        <input class="form-control" type="text" placeholder="">
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group">
                        <label>First Name</label>
                        <input class="form-control" type="text" placeholder="">
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group">
                        <label>Company Name (optional)</label>
                        <input class="form-control" type="text" placeholder="">
                    </div>
                </div>
                <div class="col-sm-12">

                    <div class="form-group">
                        <label>Country </label>
                        <b-form-select class="form-control" v-model="selected" :options="options"></b-form-select>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group">
                        <label>Street address</label>
                        <input class="form-control" type="text" placeholder="House number and street name">
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group">
                        <label>Postcode / ZIP (optional)</label>
                        <input class="form-control" type="text" placeholder="Apartment, suite, unit etc. (optional)">
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group">
                        <label>Town / City</label>
                        <input class="form-control" type="text" placeholder="">
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group">
                        <label>Email</label>
                        <input class="form-control" type="text" placeholder="">
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group">
                        <label>Phone</label>
                        <input class="form-control" type="text" placeholder="">
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group create-account">
                        <div class="ps-checkbox">
                            <input class="form-control" type="checkbox" id="createAccount" name="createAccount" />
                            <label for="createAccount">Create An account</label>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group shipping">
                        <div class="ps-checkbox">
                            <input class="form-control" type="checkbox" id="shipping" name="shipping" />
                            <label for="shipping"><strong>Shipping to different Address</strong></label>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group">
                        <label>Order notes (optional)</label>
                        <textarea class="form-control" rows="6"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CheckOutBilling",
        data() {
            return {
                selected: null,
                options: [{
                        value: null,
                        text: 'Select'
                    },
                    {
                        value: 'a',
                        text: 'Malaysia'
                    },
                    {
                        value: 'b',
                        text: 'USA'
                    },
                    {
                        value: 'c',
                        text: 'Tawian'
                    }
                ]
            }
        }
    }
</script>

<style scope lang="scss">
    /* .ps-select {
     width: 76px;
     min-width: 100%;
     display: block;
     position: relative;
     font-size: 16px;
     font-weight: 400;
     height: 46px;
     border: 2px solid #eaeaea;
     background-color: transparent;
     color: #495057;
     border-radius: 0.25rem;
     padding: 0.375rem 0.75rem;
     transition: all .4s ease;
     cursor: pointer;

     option {
     cursor: pointer;
     }

     ::after {
     box-sizing: border-box;
     }

     ::before {
     box-sizing: border-box;
     }
     } */
</style>