<template>
    <section id="home">
        <div class="primary-overlay d-flex">
            <b-container>
                
                <b-row class="h-100" align-v="center">
                    <b-col lg="6" class="text-white text-center">
                        
                        <h1 class="mb-3 home-title"> Do What You Dream Of ... </h1>
                        <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, explicabo!</p>
                        <button class="btn btn-outline-secondary text-white btn-lg">
                            <font-awesome-icon icon="arrow-right" />
                            Read more
                        </button>

                    </b-col>

                    <b-col lg="6">
                        <img src="../assets/img/book.png" alt="Home Slider Content" class="img-fluid d-none d-lg-block">
                    </b-col>
                </b-row>

            </b-container>
        </div>
    </section>
</template>


<style lang="scss" scoped>
#home {
    background-image: url("../assets/img/mountains.jpg");
    min-height: 600px;
    
    .primary-overlay {
        background: rgba(50, 146, 166, 0.8);
        min-height: 600px;
    }

    .home-title {
        font-size: 5em;

        @media (max-width: 768px) {
            font-size: 4em;
        }

        @media (max-width: 375px) {
            font-size: 3em;
        }
    }
}
</style>
