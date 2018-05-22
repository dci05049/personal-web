class Header extends React.Component {
	render() {
		const src = '<%= asset_path "/img/active-button.png" %>';

		return (
		<div>
		<header class="masthead" >
		  <div class="site-heading">

		    <h1>Coding Blog</h1>
		    <span class="subheading">game dev projects</span>
		  </div>
		</header>
		<Navbar/>
		</div>
		)
	}
}