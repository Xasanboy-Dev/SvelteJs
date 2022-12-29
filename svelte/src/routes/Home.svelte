<script>
    export let message;
    import axios from "axios";
    export const allUsers = axios
        .get("http://localhost:7070")
        .then((response) => (message = response.data));
        function deleteMethod(id){
          axios.post("http://localhost:7070/delete")
        }
</script>

<main>
    {#if message !== undefined}
        <div class="all">
            {#each message.message as user}
                <div class="card m-2 p-2 d-flex gap-2">
                    <label>Name: {user.name}</label>
                    <label>LastName: {user.lastname}</label>
                    <label>Email: {user.email}</label>
                    <button
                        class="btn bg-primary text-warning"
                        on:click={alert(user.id)}>Delete</button
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
