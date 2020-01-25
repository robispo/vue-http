<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <form>
          <div class="form-group">
            <label for="userName">UserName</label>
            <input
              type="text"
              id="userName"
              class="form-control"
              v-model="user.name"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              class="form-control"
              v-model="user.email"
            />
          </div>
          <div class="form-group">
            <button class="btn btn-primary" @click.prevent="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          name: '',
          email: ''
        }
      };
    },
    methods: {
      submit() {
        console.log(this.user);
      }
    }
  };
</script>

<style></style>
