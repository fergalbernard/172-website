<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';

	const navItems = [
		{ href: '/', label: 'Articles' },
		{ href: '/profiles', label: 'Profiles' },
		{ href: '/newsletter', label: 'Newsletter' }
	];

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<div class="min-h-screen">
	<header class="sticky top-0 z-10 py-6">
		<div class="container">
			<div class="flex items-center justify-between">
				<a href="{base}/" class="site-title text-cream relative text-3xl md:text-5xl flex items-center gap-2">
					<span>the</span>
					<img 
						src="/logo-512x512.png" 
						alt="172" 
						class="w-10 md:w-14 h-10 md:h-14 object-contain mt-4"
					/>
					<span>Gazette</span>
				</a>
				
				<!-- Desktop Navigation -->
				<nav class="hidden md:block">
					<ul class="flex space-x-8">
						{#each navItems as { href, label }}
							<li>
								<a 
									href="{base}{href}" 
									class="text-coral/70 hover:text-coral transition-colors text-sm uppercase tracking-wide"
								>
									{label}
								</a>
							</li>
						{/each}
					</ul>
				</nav>

				<!-- Mobile Menu Button -->
				<button 
					class="md:hidden text-coral/70 hover:text-coral p-2"
					on:click={toggleMenu}
					aria-label="Toggle menu"
				>
					<svg 
						class="w-6 h-6" 
						fill="none" 
						stroke="currentColor" 
						viewBox="0 0 24 24"
					>
						{#if !isMenuOpen}
							<path 
								stroke-linecap="round" 
								stroke-linejoin="round" 
								stroke-width="2" 
								d="M4 6h16M4 12h16M4 18h16"
							/>
						{:else}
							<path 
								stroke-linecap="round" 
								stroke-linejoin="round" 
								stroke-width="2" 
								d="M6 18L18 6M6 6l12 12"
							/>
						{/if}
					</svg>
				</button>
			</div>
		</div>
	</header>

	<!-- Mobile Menu -->
	<div 
		class="fixed inset-0 bg-midnight-light/95 backdrop-blur-sm transition-transform duration-300 transform md:hidden z-[5]"
		class:translate-x-full={!isMenuOpen}
		class:translate-x-0={isMenuOpen}
	>
		<nav class="pt-24 px-8">
			<ul class="space-y-6">
				{#each navItems as { href, label }}
					<li>
						<a 
							href="{base}{href}" 
							class="text-coral/70 hover:text-coral transition-colors text-lg uppercase tracking-wide block"
							on:click={toggleMenu}
						>
							{label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>

	<main>
		<slot />
	</main>
</div>
