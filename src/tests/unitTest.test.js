describe('Travel Flan', () => {
	beforeAll(async () => {
		await page.setViewport({ width: 1366, height: 768 })
		await page.goto('http://localhost:8080/')
	}, 90000)

	it('should be titled "Travel Flan"', async () => {
		await expect(page.title()).resolves.toMatch('>Travel Flan')
	}, 2000)

	it('should be Logged in', async () => {
		await page.waitForTimeout(2000)

		await page.type('input[type="email"]', 'khabibullosaydullaev@gmail.com')
		await page.type('input[type="password"]', '1111234232')

		await page.keyboard.press('Tab')
		await page.keyboard.press('Enter')

		await page.waitForTimeout(2000)
		const text = await page.$('a')

		await expect(text).toMatch('Albums')
	}, 90000)
})
