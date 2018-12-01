<template>
  <div class="input-control">
    <label><slot /></label> 
    <input
      v-if="controlType === 'input' && !inputName"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)">
    <input
      v-else-if="inputName === 'title'"
      v-bind="$attrs"
      :value="value"
      @keydown.tab="checkTitle"
      @click="removeMessage"
      @input="$emit('input', $event.target.value)">
    <span v-if="duplicateTitle">{{ message }}</span>
    <textarea
      v-if="controlType === 'textarea'"
      rows="10"
      :value="value"
      @input="$emit('input', $event.target.value)"></textarea>
  </div>
</template>

<script>

const axios = require("axios");

export default {
  data() {
    return {
      duplicateTitle: false,
      message: 'Duplicate title found. Please modify your title.'
    }
  },
  name: 'AppInputControl',
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    inputName: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    checkTitle () {

      axios
        .get("https://chrisbemister83.firebaseio.com/posts.json")
        .then(res => {

          for (const key in res.data) {

            if (res.data[key].title === this.value) {                    
                this.duplicateTitle = true
            }

          }

        }).catch(e => e)

    },
    removeMessage() {
      this.duplicateTitle = false
    }
  }
}
</script>

<style scoped>
.input-control {
  margin: 10px 0;
}

.input-control label {
  display: block;
  font-weight: bold;
}

.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  padding: 5px;
}

.input-control input:focus,
.input-control textarea:focus {
  background-color: #eee;
  outline: none;
}
</style>


