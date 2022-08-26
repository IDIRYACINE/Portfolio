
(function ($){

    let $post_featured = $('#post_featured'),
		$posts = $('.posts'),
        $pagination = $('.pagination')

    let currentPage = 1 

    let posts =  $.ajax({
        type : 'GET',
        dataType : 'json',
        async : false,
        url: '/assets/data/pages.json',
        success : function(data) {
        } 
    }).responseJSON

    let profile = $.ajax({
        type : 'GET',
        dataType : 'json',
        async : false,
        url: '/assets/data/profile.json',
        success : function(data) {
        } 
    }).responseJSON


    let populatePosts = function(){
        let tempPostsHtml = ``
        posts.content['page' + currentPage].forEach(function(post){
            tempPostsHtml +=
            `<article>
                <header>
                    <h2><a href="#">${post.title}</a></h2>
                </header>
                <a href="#" class="image fit"><img src="${post.image}" alt="" /></a>
                <p>${post.shortDescription}</p>
                <ul class="actions special">
                    ${
                        post.actions.map(function(action){
                            return `<li><a href="${action.url}" class="button">${action.label}</a></li>`
                        })
                    }
                </ul>
            </article>` 
        })
        $posts.html(tempPostsHtml)
    }

    let populatePagination = function(){
        let html = ``

        let generateButtonHtml = function(page){
            html += `<a class="page" id="page${page}">${page}</a>`
        }

        let generateFirstButtonHtml = function(page){
            html += `<a class="page active" id="page${page}">${page}</a>`
            generateFirstButtonHtml = generateButtonHtml
        }
        for ( let i = 1 ; i < posts.pages +1 ; i++ ){
            generateFirstButtonHtml(i)
        }
        $pagination.prepend(html)
    }

    let populateFeatured = function(){
        let post = posts.content.featured
        let tempHtml =
            `<header class="major">
                <h2><a href="#">${post.title}</a></h2>
                <p>${post.shortDescription}</p>
            </header>
            <a href="#" class="image main"><img src="${post.image}" alt="" /></a>
            <ul class="actions special">
            ${
                post.actions.map(function(action){
                    return `<li><a href="${action.url}" class="button large">${action.label}</a></li>`
                })
            }
            </ul>` 

        $post_featured.html(tempHtml)
    }

    let populateProfile = function(){

    }

    let getNextPage = function(){
        if(currentPage + 1 > posts.pages) {return}
        currentPage++
        setCurrentPage(currentPage)
    }

    let getPrevPage = function(){
        if(currentPage == 1) return
        currentPage--

        setCurrentPage(currentPage)
    }

    let turnOffPage = function(page){
        $(`#page${page}`).removeClass('active')
    }

    let turnOnPage = function(page){
        $(`#page${page}`).addClass('active')
    }

    let setCurrentPage = function(page){
        turnOffPage(currentPage)
        currentPage = page
        turnOnPage(page)
        populatePosts()
    }

    let setUp = function(){
        populateProfile()
        populateFeatured()
        populatePosts()
        populatePagination()

        $('.page').click(function(){
            setCurrentPage(parseInt($(this).text()))
        })

        $('#next').click(function(){
            getNextPage()
        })

    }()


    
})(jQuery)