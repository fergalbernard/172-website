<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';

	const navItems = [
		{ href: '/', label: 'Articles' },
		{ href: '/profiles', label: 'Profiles' },
		{ href: '/newsletter', label: 'Newsletter' }
	];
</script>

<div class="min-h-screen">
	<header class="sticky top-0 z-10 py-6">
		<div class="container">
			<div class="flex items-center justify-between">
				<a href="{base}/" class="site-title text-cream relative">The 172 Gazette</a>
				<nav>
					<ul class="flex space-x-8">
						{#each navItems as { href, label }}
							<li>
								<a 
									href="{base}{href}" 
									class="text-cream/60 hover:text-cream transition-colors text-sm uppercase tracking-wide"
								>
									{label}
								</a>
							</li>
						{/each}
					</ul>
				</nav>
			</div>
		</div>
	</header>

	<main>
		<slot />
	</main>
</div>
