<script>
	import { Base64 } from 'js-base64';
	export let params = {};
    let data = params.d;
	let url = data.split(".")[0];
	let uploader = data.split(".")[1];
	let decrypted_url = Base64.decode(url);
	let domain = decrypted_url.split("/")[2];


	function redirect() {
		window.location.href = decrypted_url;
	}
</script>

<main>
	<div class="container d-flex justify-content-center text-center" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)">
	<div class="container ">
	{#if data.includes(".") && uploader.length > 0 }
		<h3>Link Provided by <b>{Base64.decode(uploader)}</b></h3>
		{:else}
		<h3>Link Provided by Turkish Drive</h3>
	{/if}
	<a href="{decrypted_url}"><button class="btn btn-primary btn-lg">GO!</button></a>
	<br>
	<small>This link will take you to <b>{domain}</b></small>  <!-- domain might be changed to RESTRICTED later -->
</div>
</div>
</main>


