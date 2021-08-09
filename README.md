
# scravicon

> Extract URL's favicons

Example of usage

    const scravicon = require('scravicon');
    scravicon("https://www.alsacreations.com/astuce/lire/59-icon-link-rel-favicon-ico-navigateur.html", {
        selector: ""
    }).then((favicons) => {
        console.log(favicons);
        /* [
		{
			href: 'https://cdn.alsacreations.net/favicon-32x32.png',
			height: 32, // can be missing
			width: 32, // can be missing
			type: 'image/png' // can be missing
		},
		{
			href: 'https://cdn.alsacreations.net/android-chrome-192x192.png',
			height: 192,
			width: 192,
			type: 'image/png'
		},
		{
			href: 'https://cdn.alsacreations.net/favicon-96x96.png',
			height: 96,
			width: 96,
			type: 'image/png'
		},
		{
			href: 'https://cdn.alsacreations.net/favicon-16x16.png',
			height: 16,
			width: 16,
			type: 'image/png'
		}
	] */
    });

