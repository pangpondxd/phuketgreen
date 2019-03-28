
<template>
  <!-- <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">
        <i class="fa fa-server"></i>
        Vue Stack 2.0
      </a>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">about</router-link></li>
    </ul>
  </div>
  </nav>-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">PHUKETGREEN BUSINESS</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link"><router-link to="/">Home</router-link><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"><router-link to="/about">about</router-link></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          User
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item"><router-link to="/login">Login</router-link></a>
          <a class="dropdown-item" ><router-link to="/signup">Sign up</router-link></a>

          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
</template>
<script>
</script>

<style>
a {
  font-size: 18px;
}
</style>
