<template>
    <div class="user__container">
        <h1>Hello Dear {{ user.name }}</h1> you're in profile page
        <hr />
        <br />
        <br />
        <h1>This is your information:</h1>
        <br />
        <br />
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">FullName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Postcode</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Country</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="user">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.billing.email }}</td>
                    <td>{{ user.billing.address_1 }} {{ user.billing.address_2 }}</td>
                    <td>{{ user.billing.postcode }}</td>
                    <td>{{ user.billing.phone }}</td>
                    <td>{{ user.billing.country }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex'
    export default {
        name: 'user',
        computed: {
            ...mapState('auth', ['user'])
        }
    };
</script>

<style>
    .user__container {
        postion: relative;
        margin-top: 150px;
        margin-down: 150px;
        text-align: center;
    }
</style>