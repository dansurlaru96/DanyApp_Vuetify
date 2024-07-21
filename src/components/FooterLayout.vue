<template v-slot:default>
    <div class="bg-indigo-darken-4 text-center d-flex flex-column">
        <div>
            <SocialBtn variant="plain" size="x-large" class="ma-4 " />
        </div>

        <div class="pt-0">

        </div>

        <v-divider></v-divider>

        <div>
            {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </div>
    </div>
</template>

<script>
import SocialBtn from "./SocialBtn.vue";
export default {
    name: "FooterLayout",
    components: {
        SocialBtn,
    },
}
</script>