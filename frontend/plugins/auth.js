export default function({
    $auth,
    $user,
}) {
    if (!$auth.loggedIn) {
        return
    } else {
        const authStrategy = $auth.strategy.name;

        if (authStrategy === 'local') {
            // console.log($auth.$state.user)
        }

    }
}