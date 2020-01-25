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
        <hr />
        <button class="btn btn-primary" @click.prevent="getData">
          Get Data
        </button>
        <br /><br />
        <ul class="list-group">
          <li v-for="(u, i) in users" :key="i" class="list-group-item">
            {{ u.name }} - {{ u.email }}
          </li>
        </ul>
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
        },
        users: []
      };
    },
    methods: {
      submit() {
        this.$http.post('', this.user).then(
          r => console.log(r),
          e => console.log(e)
        );
      },
      getData() {
        this.$http
          .get('')
          .then(r => r.json())
          .then(d => (this.users = d));
      }
    }
  };
</script>

<style></style>
