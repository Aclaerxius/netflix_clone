<script>
	import netflixLogo from '../lib/images/netflix_logo.png';
	import userNetflix from '../lib/images/user_netflix.jpg';
	import { onMount, onDestroy } from 'svelte';

	let isScrolled = false;

	onMount(() => {
		const handleScroll = () => {
			isScrolled = window.scrollY > 50;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<header
	class="sticky top-0 z-20 flex justify-between items-center py-4 px-4 bg-gradient-to-b from-black to-transparent {isScrolled
		? 'bg-black bg-opacity-90 transition ease-in-out duration-500'
		: 'bg-transparent'}"
>
	<div>
		<img class="max-h-3" src={netflixLogo} alt="Netflix logo" />
	</div>

	<div>
		<img class="max-h-6 rounded" src={userNetflix} alt="User profile" />
	</div>
</header>
