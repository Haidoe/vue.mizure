<template>
    <section id="authors" class="py-5 text-center">
        <b-container>
            <header class="pb-4 mb-5">
                <h1 class="text-primary"> Meet the Authors </h1>
                <p class="text-muted lead py-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit at eos dolore debitis ab tempore labore porro provident odio commodi.
                </p>
            </header>

            <b-row class="pt-4">
                <b-col md="6" lg="3" v-for="(author, index) in authors" v-bind:key="index">
                    <b-card>
                        <b-card-body>
                            <img :src="require(`../assets/img/person${++index}.jpg`)" alt="" class="img-fluid rounded-circle w-50 mb-3">
                            
                            <h3>{{ author.name }}</h3>

                            <p class="text-muted font-weight-bold"> Lead Writer </p>
                            
                            <p> {{ description }} </p>

                            <div class="d-flex justify-content-center">
                                <div class="p-4">
                                <a href="http://facebook.com" class="text-white">
                                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook-square' }"/>
                                </a>
                                </div>
                                
                                <div class="p-4">
                                <a href="http://twitter.com" class="text-white">
                                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
                                </a>
                                </div>

                                <div class="p-4">
                                <a href="http://instagram.com" class="text-white">
                                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
                                </a>
                                </div>

                            </div>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
  </section>
</template>

<style lang="scss" scoped>
    section {
        background: #FFF;

        .card-body {
            padding: 10px 0;
            
            &:hover {
                background: #3292a6;
                color: #FFF;
            }

            img {
                margin-top: -55px;
            }
        }
    }
</style>

<script>
export default {
    data () {
        return {
            authors: [
                {
                    name: 'Susan Williams',
                    job: 'Lead Writer'
                },
                
                {
                    name: 'Grace Smith',
                    job: 'Co-Writer'
                },

                {
                    name: 'John Doe',
                    job: 'Editor'
                },

                {
                    name: 'Kevin Swanson',
                    job: 'Designer'
                }
            ],

            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, suscipit ea! Optio repellat vero provident a debitis obcaecati sit nostrum."
        }
    }
}
</script>

