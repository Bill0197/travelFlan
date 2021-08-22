module.exports = {
	launch: {
		args: [
			'--no-sandbox',
			'--window-size=1440,810',
			'--disable-gpu',
			'--disable-dev-shm-usage',
			'--disable-infobars',
			'--window-position=0,0',
			'--ignore-certifcate-errors',
			'--ignore-certifcate-errors-spki-list',
			'--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36',
		],
		headless: process.env.NODE_ENV === 'production' ? true : false,
		slowMo: 5,
		defaultViewport: null,
		ignoreHTTPSErrors: true,
		stealth: true,
		ignoreDefaultArgs: ['--enable-automation'],
	},
	browserContext: 'default',
}
