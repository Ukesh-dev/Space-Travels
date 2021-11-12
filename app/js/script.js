
const menu_btn = document.querySelector('.menu');
const navigation = document.querySelector('.primary-navigation');
const li = document.querySelector('.primary-navigation').children;

menu_btn.addEventListener('click', () => {
    navigation.dataset.visible == 'false' ? navigation.setAttribute('data-visible', true) : navigation.setAttribute('data-visible', false)
    Array.from(li).forEach((item, index) => {
        if (navigation.dataset.visible == 'true') {
            item.style.animation = `navLinkFade .3s ease forwards ${index / 8 + .3}s`;
            menu_btn.setAttribute('aria-expanded', true);

        }
        else {
            item.style.animation = '';
            menu_btn.setAttribute('aria-expanded', false);

        }
    })



})
//Tablist
const tablist = document.querySelector("[role=tablist]")
const tabs = tablist.querySelectorAll("[role=tab");
const btns = Array.from(tabs);

const fetchData = async () => {
    const response = await fetch('../../data.json')
    const data = await response.json();

    const role = tablist.getAttribute("aria-label");

    if (role == "destination-tablist") {
        setDestination(data)
    }
    if (role == "crew-tablist") {
        setCrew(data)
    }
    if (role == "technology-tablist") {
        setTechnology(data)
    }
}
fetchData();

const setDestination = (data) => {
    const title = document.querySelector('.destination-title')
    const span = document.querySelector('.destination-title > span')
    const image = document.querySelector('.destination-image > img')
    const names = document.querySelector('.destination-article > h2')
    const descriptions = document.querySelector('.destination-article > .text-accent')
    const distances = document.querySelector('.distance');
    const { destinations } = data;
    btns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            if (e.target.getAttribute('data-id') == e.target.textContent) {
                btns.forEach((allBtn) => {
                    allBtn.setAttribute('aria-selected', false);
                })
                e.target.setAttribute('aria-selected', true);
                const planetName = e.target.textContent;

                destinations.forEach((item, index) => {
                    if (item.name == planetName) {
                        const { description, distance, images, name, travel } = item;
                        const travels = document.querySelector('.travel');


                        span.textContent = `0${index + 1}`;
                        image.setAttribute('src', images.png);

                        names.textContent = name;
                        descriptions.textContent = description;
                        distances.textContent = distance;
                        travels.textContent = travel;
                    }

                })
            }
        })
    })

}

//Crew 

const setCrew = ({ crew }) => {
    const crewbuttons = document.querySelector('.crew-buttons').children;
    const crew_name = document.querySelector('.crew-name');
    const crew_description = document.querySelector('.crew-desc')
    const crew_image = document.querySelector('.crew-image');
    const crew_role = document.querySelector('.crew-role')

    Array.from(crewbuttons).forEach((btn, index) => {


        btn.addEventListener('click', () => {
            Array.from(crewbuttons).forEach((btns) => {
                btns.setAttribute('aria-selected', 'false');
            })
            btn.setAttribute('aria-selected', 'true')
            const { images: { png }, name, role, bio } = crew[index];
            crew_description.textContent = bio;
            crew_image.setAttribute('src', png);
            crew_name.textContent = name;
            crew_role.textContent = role;

        })
    })
}
const setTechnology = ({ technology }) => {
    const picture_elm = document.querySelector('.technology-image')
    const technology_image = document.createElement('img');
    const { images: { portrait, landscape } } = technology[0];
    if (window.innerWidth < 1120) {
        technology_image.src = landscape;


    }
    if (window.innerWidth >= 1120) {
        technology_image.src = portrait;
    }
    window.addEventListener("resize", () => {
        const { images: { portrait, landscape } } = technology[0];
        if (window.innerWidth < 1120) {
            technology_image.src = landscape;


        }
        if (window.innerWidth >= 1120) {
            technology_image.src = portrait;
        }
    })

    picture_elm.appendChild(technology_image);
    const technology_name = document.querySelector('article > h2')
    const technology_desc = document.querySelector('article > p')

    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btns.forEach((newBtn) => {
                newBtn.setAttribute("aria-selected", false)
            })
            btn.setAttribute('aria-selected', true);
            const { name, images: { portrait, landscape }, description } = technology[index];
            technology_name.textContent = name;
            technology_desc.textContent = description;
            if (window.innerWidth < 1120) {
                technology_image.src = landscape;


            }
            if (window.innerWidth >= 1120) {
                technology_image.src = portrait;
            }

            // technology_image.setAttribute("src", portrait);
            window.addEventListener("resize", () => {
                const { images: { portrait, landscape } } = technology[index];
                if (window.innerWidth < 1120) {
                    technology_image.src = landscape;


                }
                if (window.innerWidth >= 1120) {
                    technology_image.src = portrait;
                }
            })

        })




    })


}


