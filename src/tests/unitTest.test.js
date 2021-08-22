const _clearInput = async () => {
	await page.keyboard.down('Control')
	await page.keyboard.down('A')
	await page.keyboard.up('Control')
	await page.keyboard.press('Backspace')
}

describe('Travel Flan', () => {
	beforeAll(async () => {
		await page.goto('http://localhost:8080/')
	}, 90000)

	describe('Login', () => {
		it('should be titled "Travel Flan"', async () => {
			await expect(page.title()).resolves.toMatch('Travel Flan')
		}, 2000)

		it('should be Logged in', async () => {
			await page.waitForTimeout(2000)
			await page.type('input[type="email"]', 'khabibullosaydullaev@gmail.com')

			await page.type('input[type="password"]', '1111234232')
			await page.waitForTimeout(1000)

			await page.click('button')
			await page.waitForTimeout(3000)
			const text = await page.$('h1')

			await expect(text).toMatch('Welcome back to Travel Flan!')
		}, 90000)

		it('should should log out', async () => {
			await page.waitForTimeout(1000)
			await page.click('button')

			await page.waitForTimeout(2000)
			const emailInput = await page.$('input[type="email"]')
			const passwordInput = await page.$('input[type="password"]')

			await expect(emailInput).toBeTruthy()
			await expect(passwordInput).toBeTruthy()
		}, 90000)

		it('should not be Logged in as not valid email', async () => {
			await page.waitForTimeout(2000)
			await page.type('input[type="email"]', 'khabibullosaydullaevgmail.com')

			await page.type('input[type="password"]', '114233232')
			await page.waitForTimeout(1000)

			await page.click('button')
			await page.waitForTimeout(3000)

			const emailInput = await page.$('input[type="email"]')
			const passwordInput = await page.$('input[type="password"]')

			await expect(emailInput).toBeTruthy()
			await expect(passwordInput).toBeTruthy()
		}, 90000)

		it('should not be Logged in as not valid password', async () => {
			await page.waitForTimeout(2000)
			await page.click('input[type="email"]')

			await _clearInput()
			await page.type('input[type="email"]', 'khabibullosaydullaev@gmail.com')

			await page.click('input[type="password"]')
			// await _clearInput()
			await page.evaluate(
				() => (document.getElementById('password').value = '')
			)

			await page.type('input[type="password"]', '1143412')
			await page.waitForTimeout(1000)

			await page.click('button')
			await page.waitForTimeout(3000)

			const emailInput = await page.$('input[type="email"]')
			const passwordInput = await page.$('input[type="password"]')

			await expect(emailInput).toBeTruthy()
			await expect(passwordInput).toBeTruthy()
		}, 90000)
	})
})
