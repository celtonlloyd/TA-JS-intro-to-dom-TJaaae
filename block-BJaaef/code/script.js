let ul = document.querySelector(".container");
got.houses.forEach((house) => {
    house.people.forEach((people) => {

        let li = document.createElement("li");
        ul.append(li);
        li.classList.add('box');
        let img = document.createElement("img");
        img.src = people.image;
        let h2 = document.createElement("h2");
        h2.innerText = people.name;
        let h3 = document.createElement("h3");
        h3.innerText = people.description;
        let a = document.createElement("a");
        a.innerText = "Learn More!";
        a.setAttribute("href", people.wikiLink);
        li.append(img, h2, h3, a);
    }
    );
}
);
