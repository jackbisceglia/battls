package main

import "github.com/gofiber/fiber"

// Imports

// Main Func
func main() {
	app := fiber.New()

	// MAIN ROUTE - TEST -
	app.Get("/", func(c *fiber.Ctx) {
		c.Send("Server Working")
	})

	app.Listen(5000)
}
