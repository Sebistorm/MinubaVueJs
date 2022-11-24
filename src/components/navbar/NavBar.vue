<template>
    <nav id="navbar">
        <div id="navbarContent">
            <routerLink to="/" id="homepage-link">
                <div id="logo">Minuba</div>
            </routerLink>
            <routerLink to="/news" id="news-link">News</routerLink>
            <routerLink to="/events" id="events-link">Events</routerLink>
            <routerLink to="/polls" id="polls-link">Polls</routerLink>
            <routerLink to="/calender" id="calender-link">Calender</routerLink>
            <routerLink to="/adminpanel" id="adminpanel-link">Admin Panel</routerLink>
        </div>    
    </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
#navbar {
    display: flex;
    justify-content: center;
    background-color: var(--primary-white);
    padding: 0px 10px;
    margin-bottom: 50px;
}

#navbarContent {
    max-width: 1080px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
}

#logo {
    background-color: var(--primary-red);
    padding: 20px 20px;
    color: var(--primary-white);
}

a {
    text-decoration: none;
    color: var(--primary-black);
}

</style>