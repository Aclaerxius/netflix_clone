<script>
	import { options } from './fetch_data';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Netflix clone" />
</svelte:head>

<sectionHero>
	<div
		class="hero h-[40vh]"
		style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);"
	>
		<div class="hero-overlay bg-gradient-to-r from-black to-transparent opacity-80"></div>

		<div class="hero-content">
			<div class="max-w-md">
				<h1 class="text-5xl font-bold">Title</h1>
				<p class="mb-5">Info</p>
				<button class="btn btn-sm text-black bg-white hover:bg-slate-200 hover:text-black"
					>► Play</button
				>
			</div>
		</div>
	</div>
</sectionHero>

<h2>New on Netflix</h2>
<sectionNewOnNetflix>
	<div class="carousel">
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
				alt="Burger"
			/>
		</div>
	</div>
</sectionNewOnNetflix>

<h2>Action Movies</h2>
<sectionActionMovies>
	<div class="carousel">
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
				alt="Burger"
			/>
		</div>
	</div>
</sectionActionMovies>

<h2>Top Rated</h2>
<sectionTopRated>
	<div class="carousel">
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
				alt="Burger"
			/>
		</div>
		<div class="carousel-item">
			<img
				src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
				alt="Burger"
			/>
		</div>
	</div>
</sectionTopRated>
