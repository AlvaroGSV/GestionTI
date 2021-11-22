<template>
<div class="MainPage">
    <b-container>
        <b-row>
            <h5>Paginas de entrada OFICIALES</h5>
            <b-col>
                <b-button variant="primary" pill to="/normalUser">USUARIO <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
            <b-col>
                <b-button variant="primary" pill to="/tecnicUser">TECNICO <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
            <b-col>
                <b-button variant="primary" pill to="/adminUser">ADMIN <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>