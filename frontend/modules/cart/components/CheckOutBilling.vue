<template>
    <div class="col-md-6">
        <div class="ps-form__billings">
            <h4 class="ps-form__heading">Billings</h4>
            <div class="row">
                <div class="col-sm-6">
                    <ValidationProvider rules="required">
                        <b-form-group class="form-group form-group--space" slot-scope="{ valid, errors }">
                            <label>First Name</label>
                            <b-form-input class="form-control" type="text" placeholder="" id="checkout__form--firstname" v-model="value.billing.first_name" :state="errors[0] ? false : (valid ? true : null)"></b-form-input>

                            <b-form-invalid-feedback class="form-error">
                                {{ errors[0] }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </ValidationProvider>
                </div>
                <div class="col-sm-6">
                    <ValidationProvider rules="required">
                        <b-form-group class="form-group form-group--space" slot-scope="{ valid, errors }">
                            <label>Last Name</label>
                            <b-form-input class="form-control" type="text" placeholder="" id="checkout__form--lastname" v-model="value.billing.last_name" :state="errors[0] ? false : (valid ? true : null)"></b-form-input>
                            <b-form-invalid-feedback class="form-error">
                                {{ errors[0] }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </ValidationProvider>
                </div>
                <div class="col-sm-12">
                    <div class="form-group form-group--space">
                        <label>Company Name (optional)</label>
                        <b-form-input class="form-control" type="text" placeholder="" id="checkout__form--companyname" v-model="value.billing.company"></b-form-input>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group form-group--space">
                        <label>Country </label>
                        <b-form-select class="form-control" id="checkout__form--country" v-model="selected" :options="options"></b-form-select>
                    </div>
                </div>
                <div class="col-sm-12">
                    <ValidationProvider rules="required">
                        <b-form-group class="form-group form-group--space" slot-scope="{ valid, errors }">
                            <label>Street address</label>
                            <b-form-input class="form-control" type="text" id="checkout__form--billingaddress" v-model="value.billing.address_1" :state="errors[0] ? false : (valid ? true : null)" placeholder="House number and street name">
                            </b-form-input>
                            <b-form-invalid-feedback class="form-error">
                                {{ errors[0] }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </ValidationProvider>
                </div>
                <div class="col-sm-12">
                    <ValidationProvider rules="required">
                        <b-form-group class="form-group form-group--space" slot-scope="{ valid, errors }">
                            <label>Postcode / ZIP (optional)</label>
                            <b-form-input class="form-control" type="text" id="checkout__form--postcode" v-model="value.billing.postcode" :state="errors[0] ? false : (valid ? true : null)" placeholder="Apartment, suite, unit etc. (optional)">

                            </b-form-input>
                            <b-form-invalid-feedback class="form-error">
                                {{ errors[0] }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </ValidationProvider>
                </div>
                <div class="col-sm-12">
                    <div class="form-group form-group--space">
                        <label>Town / City</label>
                        <input class="form-control" type="text" placeholder="" id="checkout__form--city" v-model="value.billing.city">
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group form-group--space">
                        <label>Email</label>
                        <input class="form-control" type="text" placeholder="" id="checkout__form--email" v-model="value.billing.email">
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group form-group--space">
                        <label>Phone</label>
                        <input class="form-control" type="text" placeholder="" id="checkout__form--phone" v-model="value.billing.phone">
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group form-group--space create-account">
                        <div class="ps-checkbox">
                            <input class="form-control" type="checkbox" id="createAccount" name="createAccount" />
                            <label for="createAccount">Create An account</label>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group form-group--space shipping">
                        <div class="ps-checkbox">
                            <input class="form-control" type="checkbox" id="shipping" name="shipping" />
                            <label for="shipping"><strong>Shipping to different Address</strong></label>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group form-group--space">
                        <label>Order notes (optional)</label>
                        <textarea class="form-control" id="checkout__form--notes" v-model="value.customer_note" rows="6"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </ValidationObserver>
</template>

<script>
    import {
        ValidationProvider
    } from 'vee-validate';

    import {
        mapState
    } from 'vuex'

    export default {
        name: "CheckOutBilling",
        props: {
            value: {
                type: Object,
                required: true
            }
        },
        watch: {
            value() {
                this.$emit('input', this.value)
            }
        },
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
        },
        components: {
            ValidationProvider
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