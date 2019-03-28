<template>
<div class="hello">
  <h1>{{ name }}</h1>
  <!-- {{ btnState ?  'The button is disable': 'The button is active'}}
  <button v-on:cick="changeName" v-bind:disabled="btnState">Change Name</button> -->
  <div class="holder">
    <form @submit.prevent="addCart">
    <input type="text" placeholder="Enter a cart you have ..." v-model="cart"><br />
    <!-- <input type="checkbox" id="checkbox" v-model="checked"> -->
    {{  cart }}
    </form>
     <ul>
      <li v-for="(data, index) in carts" :key='index'>{{index}}.{{data.cart}}</li>
    </ul>
    <p>There are the cart you post</p>
    <!-- <p v-if="cart.length >= 2">you have more than 1 cart</p>
    <p v-else>you have less than or equal 1 skill</p>
    <div v-bind:class="{ alert: showAlert, 'another-class': showClass }"></div>
    <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }"></div>-->
  </div>
</div>
</template>

<script>
export default {
  name: 'Cart',
  data () {
    return {
      // checked: false,
      cart: '',
      carts: [
        { 'cart': 'SirawichDev' },
        { 'cart': 'Pangpndxd' }
      ]
      // bgColor: 'Yellow',
      // bgWidth: '100%',
      // bgHeight: '500px'
      // showAlert: true,
      // showClass: true
    }
  },
  methods: {
    addCart () {
      this.carts.push({
        cart: this.cart
      })
      this.cart = ''
    }
  }
}
</script>

<style scoped>

/* .alert {
  background-color: red;
  width: 100%;
  height: 30px;
}
.another-class {
  border: 5px solid black;
} */
.holder {
  background-color: #fff;
}
ul {
  margin: 0px;
  padding: 0px;
  list-style-type: none;
}
ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #E0EDF4;
  border-left: 5px solid #3EB3F6;
  margin-bottom: 2px;
  color: #3E5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}
.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(50% - 40px);
  border: 0px;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687F7F;
}

</style>
