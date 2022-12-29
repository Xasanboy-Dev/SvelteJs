<script>
    export let message;
    import axios from "axios";
    export let allUsers = axios
        .get("http://localhost:7070")
        .then((response) => (message = response.data));
    export function deleteUser(id) {
        axios.post(`http://localhost:7070/${id}`);
    }
</script>

<main>
    {#if message !== undefined}
        <div class="all">
            {#each message.message as user}
                <div class="card m-2 p-2 d-flex gap-2">
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label>Name: {user.name}</label>
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label>LastName: {user.lastname}</label>
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label>Email: {user.email}</label>
                    <button
                        class="btn bg-primary text-warning"
                        on:click={() => deleteUser(user.id)}>Delete</button
                    >
                </div>
            {/each}
        </div>
    {/if}
</main>

<style>
    .all {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }
</style>
