<script lang="ts">
    let email = '';
    let isSubmitting = false;
    let subscriptionStatus: 'idle' | 'success' | 'error' = 'idle';

    async function handleSubmit() {
        isSubmitting = true;
        try {
            const response = await fetch('https://formspree.io/f/xyzzbwzv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                subscriptionStatus = 'success';
                email = '';
            } else {
                subscriptionStatus = 'error';
            }
        } catch (err) {
            subscriptionStatus = 'error';
        }
        isSubmitting = false;
    }
</script>

<div class="py-8">
    <div class="container max-w-2xl">
        <h1 class="text-4xl font-bold text-coral mb-6">Monthly Newsletter</h1>
        
        <div class="prose prose-invert mb-12">
            <p class="text-cream/90 text-lg">
                Stay updated with the latest news and stories from The 172. Our newsletter is sent out at the beginning of each month.
            </p>
        </div>

        <div class="bg-midnight-light rounded-lg p-8">
            <h2 class="text-2xl font-bold text-coral mb-4">Subscribe to Our Newsletter</h2>
            
            <form on:submit|preventDefault={handleSubmit} class="space-y-4">
                <div>
                    <label for="email" class="block text-cream/90 mb-2">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        bind:value={email}
                        required
                        class="w-full px-4 py-2 rounded bg-midnight border border-sage/20 text-cream placeholder-sage/40 focus:outline-none focus:border-coral/50"
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                    />
                </div>

                <button 
                    type="submit" 
                    class="px-6 py-2 bg-coral/90 hover:bg-coral text-cream rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>

                {#if subscriptionStatus === 'success'}
                    <p class="text-sage-light mt-4">
                        Thank you for subscribing! You'll receive our next newsletter at the beginning of the month.
                    </p>
                {:else if subscriptionStatus === 'error'}
                    <p class="text-coral mt-4">
                        Sorry, there was an error processing your subscription. Please try again later.
                    </p>
                {/if}
            </form>
        </div>

        <div class="mt-12 border-t border-sage/10 pt-8">
            <h2 class="text-2xl font-bold text-coral mb-4">Previous Newsletters</h2>
            <p class="text-cream/80">
                Archive coming soon. Past newsletters will be available here.
            </p>
        </div>
    </div>
</div> 