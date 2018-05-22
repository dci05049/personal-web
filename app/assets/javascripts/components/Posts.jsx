class Posts extends React.Component {
	constructor() {
		super()
		this.state = {
			postItems: []
		}
	}

	render() {
		if(this.props.posts) {
			postItems = this.props.posts.map(post => {
				return (
					<div>
						<div class="post-preview">
							<a href={"/post" + post.id}>
								<h2 class="post-title">
									{post.title}
								</h2>
								<h3 class="post-subtitle">
									{post.subtitle}
								</h3>
								<p> Posted on September 10, 2017</p>
							</a>
						</div>
					</div>
					);
			});
		}

		return (
			<div>
				<section id="portfolio">
				    <div class="container">
				        <div class="row">
				            <div class="col-lg-8 col-md-8 mx-auto">
							{postItems}
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}