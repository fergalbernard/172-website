<script lang="ts">
    const profiles = [
        {
            name: 'Daisy',
            image: '/daisy-profile.png',
            bio: 'If the gods walked among us, Daisy would still have no match for her charm and beauty. The only mystery greater than her incredible personality, is that, somehow, she comes from Wales. There is hope yet for humanity while she exists.'
        },
        {
            name: 'Peta',
            image: '/peta-profile.png',
            bio: 'Peta is a sour person who loves to bring people down. If fun was a child, she would follow it home, murder its parents, beat it to a pulp, and chuck it in a dickensian orphanage. Some call her a bitch, but she is also incredibly ugly.'
        },
        {
            name: 'Fergal',
            image: '/fergal-profile.png',
            bio: 'Fergal is a free spirit who always has their head in the clouds. They love long walks on the beach and making their friends and family laugh. Their sharp wit is only outdone by their striking beauty.'
        }
    ];
</script>

<div class="py-8">
    <div class="container">
        <h1 class="text-4xl font-bold text-coral mb-12">Meet the Residents</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each profiles as profile}
                <div class="bg-midnight-light rounded-lg overflow-hidden">
                    <div class="aspect-square bg-sage/10">
                        <img 
                            src={profile.image} 
                            alt={profile.name}
                            class="w-full h-full object-cover"
                        />
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