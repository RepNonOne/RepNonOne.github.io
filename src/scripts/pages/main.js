var main = function()
{
	function init()
	{
	
	}

	function genPosts()
	{
		var component = "";
		var posts = [{
			title: "como fazer nada #3",
			date: "publicado a 2 semanas",
			thumb: "https://cdn.dribbble.com/users/175166/screenshots/6745941/huawei_test_2x.jpg"
		},
		{
			title: "como fazer nada #2",
			date: "publicado a 4 semanas",
			thumb: "https://cdn.dribbble.com/users/175166/screenshots/5777352/tploop.gif"
		},
		{
			title: "como fazer nada #1",
			date: "publicado a 3 semanas",
			thumb: "https://cdn.dribbble.com/users/175166/screenshots/5270339/how-to-draw-a-donut.gif"
		}];

		for(var post of posts)
		{
			component += `
				<a href="/post/123123">
					<div class="hot-card">
						<div class="hot-card-header" 
							style="background-image: url(${post.thumb})">
						</div>
						<h4 class="title">${post.title}</h4>
						<h5 class="sub-title">${post.date}</h5>
					</div>
				</a>
			`
		}

		return component;
	}

	function render()
	{
		return `
			<div class="header">
				<div class="container">
					<div class="header-nav">
						<a href="#post">
							<img src="/src/images/posts-icon.png">
						</a>
						<a href="#astro">
							<img src="/src/images/astro-icon.png">
						</a>
					</div>
					<div class="header-content">
						<h1 class="title">Galaxy Blog</h1>
						<h3 class="sub-title">Um blog sobre como programar coisas<br/>do zero, diga tchau aos frameworks</h3>
					</div>
				</div>
			</div>
			<div class="content">
				<div class="container">
					<div class="hot-title">
						<div class="icon">
							<img src="/src/images/hot-icon.png">
						</div>
						<div class="text">
							<h3 class="title">Ultimas Postagens</h1>
							<p class="sub-title">Um resumo rescente do blog</p>
						</div>
					</div>
					<div class="hot-cotent">
						${genPosts()}
					</div>
				</div>
			</div>
		`
	}

	return {
		render: render,
		init: init
	}
}();

export default main;