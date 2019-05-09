<template>
    <section id="home">
        <div class="primary-overlay d-flex">
            <div class="container">
                <div class="row h-100">
                    <div class="col-sm-12 col-lg-6 text-white text-center d-flex flex-column align-items-center justify-content-center">
                        <h1 class="display-3 mb-3 home-title"> Do What You Dream Of ... </h1>
                        <p class="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, explicabo!</p>
                        <button class="btn btn-outline-secondary text-white btn-lg">
                        <i class="fas fa-arrow-right"></i>
                        Read more
                        </button>
                    </div>

                    <div class="col-lg-6">
                        <img src="../assets/img/book.png" alt="" class="img-fluid d-none d-lg-block">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
#home {
    background-image: url("../assets/img/mountains.jpg");
    min-height: 600px;
}

#home .primary-overlay {
    background: rgba(50, 146, 166, 0.8);
    min-height: 600px;
}
</style>
