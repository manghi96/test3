(function() {

    var slidersContainer = document.querySelector('.sliders');

    // Initializing the numbers slider
    var msNumbers = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--numbers',
        range: [1, 18],
        rangeContent: function (i) {
        if (i < 10) {
            return '0' + i;
        } else {
            return i;
        }
    },
        style: {
            transform: [{scale: [0.4, 1]}],
            opacity: [0, 1]
        },
        interactive: false
    });

    // Initializing the titles slider
    var titles = [
        'Shiny Smile Dental App',
		'WorkNet Concept',
		'itrack App Concept',
		'Ngo Concept Website',
		'MKLabs Website',
		'Purple U Website',
		'Cotafa Website',
		'Thanh Huong Branding',
		'Connect Short Film',        
        'Delizio Pasta Branding',
        'Durex Poster Advertising',
		'Ducati Brochure',
        'Cinephilia Magazine',
		'Wookie Adventures',
        'Godfather Poster',
        'Memories Poster',
		'My Dream Manipulation',
		'Portrait Drawings'
    ];
    var msTitles = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--titles',
        range: [0, 17],
        rangeContent: function (i) {
            return '<h3>'+ titles[i] +'</h3>';
        },
        vertical: true,
        reverse: true,
        style: {
            opacity: [0, 1]
        },
        interactive: false
    });
	
	// Initializing the body slider
    var body = [
        'This is my semester 2 team project in Arena Multimedia. We designed a dental app for a dental hospital named Shiny Smile. The main function of the app was to book appointments and view upcoming schedules.',
        'WorkNet is my mobile app concept that helps people everywhere connect, share their experiences in the workplace, find jobs and explore companies they love.',
		'itrack is an app concept that is used to track all your online subscriptions that suggest offers, end of trial, payment due,...',
		'Ngo Concept is a minimalist style ornamental plants business concept landing page.',
		'MKLabs is a business website introduces revolutionary chain-agnostic launchpad.',
		'Purple U is a cosmetics business website in Korea.',
		'Cotafa is a cosmetics business website in Korea.',
		'This is my first-semester team project in Arena Multimedia. We designed a brand identity for a Vietnamese cuisine restaurant named Thanh Huong.',
		'Connect is a short animated film inspired by technological devices that can connect with people to express how people are increasingly dependent on phones and forget the connection between people.',
		'Delizio Pasta is an Italian cuisine brand.',
		'This is my advertising course project on poster design for the Durex brand.',
		'This is my advertising course project on brochure design for the Ducati brand.',
		'Cinephilia is my magazine layout design course project about cinematic magazine.',
		'This is my character design course project including model sheet, pose sheet and storyboard.',
		'This is my illustration canvas poster design was inspired by Michael Corleone in the trilogy Godfather movie.',
		'Memories is one of my favorite songs by Adam Levine, so I redesigned this music poster for my own.',
		'This is the final project of my Photoshop course. This manipulation art was inspired by one of my dreams.',		
		'This is some of my portrait pencil drawings.'
    ];
    var msBody = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--body',
        range: [0, 17],
        rangeContent: function (i) {
            return '<p>'+ body[i] +'</p>';
        },
        vertical: true,
        reverse: true,
        style: {
            opacity: [0, 1]
        },
        interactive: true
    });
	
    // Initializing the links slider
	    var msLinks = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--links',
        range: [0, 17],
        rangeContent: function (index) {
        // Create an array of 9 links.
        var links = [
            'https://www.behance.net/gallery/130092099/Shiny-Smile-Dental-Hospital-App',
		'https://www.WorkNetConcept.net',
		'https://www.figma.com/file/FSQ5ECF7ZEdNS7RZsuPDxF/itrack-app-(Copy)?type=design&node-id=0%3A1&mode=design&t=nO0rqbJftoTUejBW-1',
		'https://www.behance.net/gallery/149062305/Ngo-Landing-Page',
		'https://www.figma.com/proto/V6a7s3no9yHCuyyAqOsDYF/MKLabs-Homepage---Desktop?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1',
		'https://www.figma.com/proto/CKq7PAnypuXoLztwo4eat4/PurpleU?node-id=285%3A3218&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=285%3A3218',
		'https://www.figma.com/proto/1CnnIbe8VJx9VGT2liF1lH/Cotafa?node-id=20%3A12&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=20%3A12',
		'https://www.behance.net/gallery/105760381/Com-Sen-Thanh-Huong',
		'https://www.behance.net/gallery/180826845/Connect-3D-Animation-Short-Film',        
        'https://www.behance.net/gallery/105759893/Delizio-Pasta',
        'https://www.behance.net/gallery/100856229/Durex-Advertising-Poster',
		'https://www.behance.net/gallery/100147897/Trifold-Brochure',
        'https://www.behance.net/gallery/99302833/Cinephilia-Magazine',
		'https://www.behance.net/gallery/160745757/The-Adventures-of-Wookie-Character-Sketch',
        'https://www.behance.net/gallery/151340553/The-Godfather-Illustration-Poster',
        'https://www.behance.net/gallery/101474267/Poster',
		'https://www.behance.net/gallery/95184413/My-Dream-manipulation',
		'https://drive.google.com/drive/folders/1btoVQ1JsICClWrvi-08xcEXd7Zhv3_Ta?usp=sharing'
        ];

        // Return the URL of the link at the given index.
        return '<a class="ms-slide__link" href="' + links[index] + '" target="_blank">View Project</a>';
    },
        vertical: true,
        interactive: false				
    });

    // Get pagination items
    var pagination = document.querySelector('.pagination');
    var paginationItems = [].slice.call(pagination.children);

    // Initializing the images slider
    var msImages = new MomentumSlider({
        // Element to append the slider
        el: slidersContainer,
        // CSS class to reference the slider
        cssClass: 'ms--images',
        // Generate the 9 slides required
        range: [0, 17],
        rangeContent: function () {
            return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
        },
        // Syncronize the other sliders
        sync: [msNumbers, msTitles, msBody, msLinks],
        // Styles to interpolate as we move the slider
        style: {
            '.ms-slide__image': {
                transform: [{scale: [1.5, 1]}]
            }
        },
        // Update pagination if slider change
        change: function(newIndex, oldIndex) {
            if (typeof oldIndex !== 'undefined') {
                paginationItems[oldIndex].classList.remove('pagination__item--active');
            }
            paginationItems[newIndex].classList.add('pagination__item--active');
        }
    });

    // Select corresponding slider item when a pagination button is clicked
    pagination.addEventListener('click', function(e) {
        if (e.target.matches('.pagination__button')) {
            var index = paginationItems.indexOf(e.target.parentNode);
            msImages.select(index);
        }
    });

})();
