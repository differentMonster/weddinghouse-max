<template>
    <div>
        Hello dear <b style="color:red">{{ getUserInfo.name }}</b> you're in
        profile page
        <hr />
        This is your information:
        <br /><br />
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
                    <td>{{ getUserInfo.id }}</td>
                    <td>{{ getUserInfo.email }}</td>
                    <td>{{ getUserInfo.roles}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'user-page',
        computed: {
            getUserInfo() {
                return this.$store.getters.getUserInfo;
            }
        }
    };
</script>

<style></style>