<script lang="ts">
    const profiles = [
        {
            name: 'Daisy',
            image: '/placeholder.jpg',
            bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo vel metus tincidunt facilisis. Nulla facilisi. Praesent euismod, nunc eu tempor hendrerit, nisi nisl aliquam magna, quis ultricies nunc ipsum nec nunc.'
        },
        {
            name: 'Peta',
            image: '/placeholder.jpg',
            bio: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.'
        },
        {
            name: 'Fergal',
            image: '/placeholder.jpg',
            bio: 'Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum.'
        }
    ];
</script>

<div class="py-8">
    <div class="container">
        <h1 class="text-4xl font-bold text-coral mb-12">Meet the Residents</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each profiles as profile}
                <div class="bg-midnight-light rounded-lg overflow-hidden">
                    <div class="aspect-square bg-sage/10 flex items-center justify-center">
                        <svg class="w-24 h-24 text-sage/20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                    </div>
                    <div class="p-6">
                        <h2 class="text-2xl font-bold text-coral mb-3">{profile.name}</h2>
                        <p class="text-cream/80 leading-relaxed">{profile.bio}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div> 