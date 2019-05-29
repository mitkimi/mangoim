<template>
  <div class="mg-input" ref="mgInput">
    <div class="label" v-if="label">{{label}}</div>
    <div class="input">
      <input :placeholder="placeholder" :type="type" autofocus @focus="focusState(true)" @blur="focusState(false)">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      require: false
    },
    placeholder: {
      type: String,
      require: false
    },
    type: {
      type: String,
      require: false
    }
  },
  methods: {
    focusState (state) {
      if (state) {
        this.$refs.mgInput.style.borderBottom = '1px solid #2d8cf0'
      } else {
        this.$refs.mgInput.style.borderBottom = '1px solid #efeff3'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mg-input {
  height: 40px;
  display: flex;
  margin: 10px 0;
  line-height: 40px;
  border-bottom: 1px solid #efeff3; 
  .label {
    width: 80px;
    font-size: 18px;
  }
  .input {
    width: calc(100% - 40px);
    input {
      height: 36px;
      width: 100%;
      border: none;
      outline: none;
      font-size: 18px;
      padding-top: 4px;
      &::-webkit-input-placeholder{
        color:#c5c8ce; 
      }
    }
  }
}
</style>