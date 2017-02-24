<template>
  <div id="app">
    <nav class="navbar navbar-default" role="navigation">
	<div class="container-fluid">
	<div>
		<ul class="nav navbar-nav">
			<li class="active"><router-link to="/Front">前端</router-link></li>
			<li><router-link to="/Hello">移动端</router-link></li>
      <li><router-link to="/End">后端</router-link></li>
			<li class="dropdown">
				<a href="#" class="dropdown-toggle" data-toggle="dropdown">
					Java
					<b class="caret"></b>
				</a>
				<ul class="dropdown-menu">
					<li><a href="#">EJB</a></li>
					<li><a href="#">Jasper Report</a></li>
					<li class="divider"></li>
					<li><a href="#">分离的链接</a></li>
				</ul>
			</li>
		</ul>
	</div>
	</div>
</nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Hello0 from './components/Hello0'
import Front from './components/Front'
import End from './components/End.vue'
export default {
  name: 'app',
  components: {
    Hello0,
    Hello,
    Front,
    End
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
