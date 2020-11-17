<template>
    <nav class="navbar navbar-expand-md fixed-top px-5 border-0" :class="{change_color: scrollPosition > 50}">
    <div class="container-fluid px-lg-0">
        <a class="navbar-brand" href="./index.html"><img class="img-fluid" src="../../assets/img/agmalogo.svg"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse ml-lg-4" id="navbarsExampleDefault">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="./components.html">
                    <span class="icon">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="18px" height="18px">
                       <path d="M8,12c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S10.2,12,8,12z M8,6C6.9,6,6,6.9,6,8s0.9,2,2,2s2-0.9,2-2S9.1,6,8,6z M8,16
                           c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8c0,0.5-0.1,1.1-0.2,1.6c-0.3,1.6-1.9,2.7-3.6,2.3c-0.8-0.2-1.5-0.6-1.9-1.3
                           C9.9,10,9.8,9.2,10,8.4c0.1-0.5,0.6-0.9,1.2-0.8c0.5,0.1,0.9,0.6,0.8,1.2c-0.1,0.3,0,0.5,0.1,0.8s0.4,0.4,0.6,0.4
                           c0.5,0.1,1.1-0.2,1.2-0.8C14,8.8,14,8.4,14,8c0-3.3-2.7-6-6-6S2,4.7,2,8s2.7,6,6,6c0.7,0,1.4-0.1,2.1-0.4c0.5-0.2,1.1,0.1,1.3,0.6
                           c0.2,0.5-0.1,1.1-0.6,1.3C9.9,15.8,8.9,16,8,16z"/>
                   </svg>
                </span> www.agmafoods.in</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="./index.html">
                    <span class="icon">

                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 84.2 64.4">
<path d="M73,0H11.2C5,0,0,5,0,11.2v42c0,6.2,5,11.2,11.2,11.2H73c6.2,0,11.2-5,11.2-11.2v-42C84.2,5,79.2,0,73,0z M73,10
	c0.2,0,0.5,0.1,0.7,0.2L42.8,29.5c-0.4,0.2-0.9,0.2-1.3,0L10.6,10.2c0.2-0.1,0.4-0.2,0.7-0.2H73z M73,54.4H11.2
	c-0.7,0-1.2-0.5-1.2-1.2V21.6L36.1,38c1.8,1.1,3.9,1.7,6,1.7s4.2-0.6,6-1.7l26.1-16.4v31.6C74.2,53.9,73.7,54.4,73,54.4z"/>
</svg>
                    </span>
                    info@agamahoney.com</a>
            </li> 
            <li class="nav-item active">
                <a class="nav-link" href="./login.html">
                    <span class="icon">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.9 95" width="18px" height="18px">
		<path d="M82.4,12.5C74.4,4.4,63.7,0,52.3,0c-2.6,0-4.7,2.1-4.7,4.7s2.1,4.7,4.7,4.7c8.9,0,17.3,3.5,23.6,9.8
			c6.2,6.2,9.8,14.8,9.7,23.5c0,2.6,2,4.7,4.6,4.7l0,0c2.6,0,4.6-2.1,4.7-4.6C94.9,31.5,90.4,20.5,82.4,12.5z"/>
		<path d="M63.4,31.6c3,3,4.6,6.9,4.6,11.1c0,2.6,2.1,4.7,4.7,4.7s4.7-2.1,4.7-4.7c0-6.7-2.6-13-7.3-17.7c-4.7-4.7-11-7.3-17.7-7.3
			c-2.6,0-4.7,2.1-4.7,4.7s2.1,4.7,4.7,4.7C56.5,27,60.4,28.6,63.4,31.6z"/>
		<path d="M83.9,63.2l-16-8.3c-4.3-2.2-9.5-1.1-12.5,2.9l-1.8,2.5c-3.6-2.2-6.8-4.6-10.5-8.3c-3.8-3.8-6.2-7.1-8.4-10.8l2.6-1.9
			c3.8-2.9,4.9-8.2,2.7-12.4l-8.3-16c-1.3-2.5-3.6-4.4-6.4-5.1c-2.7-0.7-5.7-0.2-8.1,1.4L5.6,15.6C1.9,18.1-0.3,22.4,0,26.9
			c0.3,4.2,0.7,7.6,1.4,10c3.2,12.2,10.8,24.8,21.3,35.4c10.6,10.6,23.2,18.2,35.4,21.3c2.4,0.6,5.8,1.1,10,1.4c0.3,0,0.5,0,0.8,0
			c4.3,0,8.3-2.2,10.5-5.7l8.2-11.9c1.5-2.4,2-5.2,1.2-8C88.2,66.7,86.3,64.5,83.9,63.2z M79.4,72.9l-7.7,11.2c-0.6,1-1.8,1.6-3,1.5
			c-3.6-0.2-6.5-0.6-8.3-1.1C49.8,81.7,38.7,75,29.3,65.6c-9.5-9.3-16.2-20.4-19-31.1c-0.5-1.8-0.8-4.7-1.1-8.3
			c-0.1-1.2,0.5-2.3,1.6-3l11-7.8c0.6-0.4,1.5-0.2,1.8,0.4l8,15.3c0.1,0.3,0.1,0.6,0,0.7L25.8,36c-1.9,1.4-2.5,3.9-1.4,6
			c3.1,5.9,6.2,10.7,12,16.5C42,64.1,47,67.3,52.6,70.4c2.1,1.1,4.7,0.6,6-1.4l4.1-5.7c0.2-0.2,0.5-0.3,0.8-0.2l15.4,8
			C79.6,71.5,79.8,72.3,79.4,72.9z"/>
</svg>
                    </span>
                    +91 9947497348</a>
            </li>  
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: "Nav",
    data() {
        return{
            scrollPosition: null
        }
    },
    methods: {
        updateScroll() {
            this.scrollPosition = window.scrollY
        }
    },
    mounted() {
        window.addEventListener('scroll', this.updateScroll);
    }
}
</script>

<style lang="scss">
.change_color {
// transition: top ease 0.5s;
  transition: background .2s linear;
       background-color:white;
       box-shadow: 0 15px 15px -25px rgba(0,0,0, .5);
   }
</style>