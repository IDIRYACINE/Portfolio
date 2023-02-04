<script lang="ts">
	

    export let profile:Profile ;

    
</script>


<footer id="footer">
    <section class="split contact">
        <section>
            <h3>Phone</h3>
            <p><a id="phone">{profile.phone}</a></p>
        </section>
        <section>
            <h3>Email</h3>
            <p><a id="emai">{profile.secondaryEmail}</a></p>
        </section>
        <section>
            <h3>Social</h3>
            <ul class="icons alt">
                <li><a href="{profile.facebook}" class="icon brands alt fa-facebook-f"><span
                            class="label">Facebook</span></a></li>
                <li><a href="{profile.github}" class="icon brands alt fa-github"><span
                            class="label">GitHub</span></a></li>
            </ul>
        </section>
    </section>
</footer>

