//JavaScript Document


function strangeProducts(json)
{
    let strangeProducts = json.strangeProducts;
    let section = document.querySelector('section');

    for(let i = 0; i < strangeProducts.length; i++)
    {
        // build HTML elements dynamically
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let ul = document.createElement('ul');

        // set the image to the source
        img.setAttribute('src', 'https://techno-pixel.github.io/Project4.github.io/img/' + strangeProducts[i].image);
        img.setAttribute('alt', strangeProducts[i].name);

        // create the product information details
        h2.textContent = strangeProducts[i].name;
        p1.textContent = 'Size ' + strangeProducts[i].size;
        p2.textContent = 'Price ' + strangeProducts[i].price;

        let details = strangeProducts[i].details;
        for(let j = 0; j< strangeProducts.length; j++)
        {
            let listItem = document.createElement('li');
            listItem.textContent = details[j];
            ul.appendChild(listItem);
        }

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(ul);
        section.appendChild(article);
    }
}

// inspired by https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch('https://techno-pixel.github.io/Project4.github.io/strangeProducts.json')
.then((response) => {
    return response.json();
})
.then((json) => {
    strangeProducts(json);
});