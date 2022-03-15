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
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ user.id }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.roles}}</td>
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