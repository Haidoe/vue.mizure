<template>
    <section class="py-5" id="contact">
        <b-container>
            <h2> Get in touch </h2>
            
            <p class="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, cupiditate.</p>
            
            <b-input-group size="lg" class="mb-3">
                
                <b-input-group-text slot="prepend">
                    <font-awesome-icon icon="user"></font-awesome-icon>
                </b-input-group-text>

                <b-form-input placeholder="Name"></b-form-input>
            
            </b-input-group>

            <b-input-group size="lg" class="mb-3">
                
                <b-input-group-text slot="prepend">
                    <font-awesome-icon icon="envelope"></font-awesome-icon>
                </b-input-group-text>
                
                <b-form-input placeholder="Email"></b-form-input>
            
            </b-input-group>

            <b-input-group size="lg" class="mb-3">
                
                <b-input-group-text slot="prepend">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                </b-input-group-text>
                
                <textarea name="" class="form-control" id="" cols="30" rows="10" placeholder="Message"></textarea>
            
            </b-input-group>
            
            <button class="btn btn-primary btn-block btn-lg"> Submit </button>
        
        </b-container>
  </section>
</template>

<style lang="scss" scoped>
    section {
        background: #F8F9FA;
    }
</style>

