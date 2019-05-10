<template>
    <section class="py-5" id="about">

        <b-container class="text-center">
            <header class="pb-4 mb-5">
                <h1 class="text-primary"> Why this Book ? </h1>
                <p class="text-muted lead py-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis error animi libero est at molestiae.
                </p>
            </header>

            <div role="tablist" class="pt-2">
                
                <b-card no-body v-for="(title, index) in titles" v-bind:key="index">
                    <b-card-header class="p-1 text-white bg-primary" role="tab">
                        <h5 block href="#" v-b-toggle="`accordion-${index}`" variant="info"> 
                            <font-awesome-icon icon="arrow-circle-down" class="d-inline-block" /> 
                            {{ title }}
                        </h5>
                    </b-card-header>

                    <b-collapse :id="`accordion-${index}`" visible accordion="my-accordion" role="tabpanel">
                        <b-card-body>
                            <b-card-text>{{ text }}</b-card-text>
                        </b-card-body>
                    </b-collapse>
                </b-card>

            </div>

        </b-container>
  </section>
</template>

<style lang="scss" scoped>
    section {
        background: #F8F9FA;
    }
</style>

<script>
export default {
    data () {
        return {
            titles: ['Get Started', 'Gain knowledge', 'Open your mind'],
            
            text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit odit laborum qui, debitis, sequi dolores nobis mollitia
                        labore quasi earum laboriosam nihil cupiditate magnam iusto nostrum doloremque accusantium repudiandae
                        expedita autem et, repellendus suscipit consequatur! Alias, maiores amet sunt ab inventore illo, deleniti
                        facilis consequatur tenetur nam pariatur fuga nisi!`
        }
    }
}
</script>

